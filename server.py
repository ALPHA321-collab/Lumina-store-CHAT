"""
LUMINA STUDIO - Full E-Commerce Backend Server
RESTful API + Static File Server with SQLite Database Integration.
"""

import os
import random
import re
import secrets
from functools import wraps
from datetime import datetime, timedelta
from flask import Flask, request, jsonify, send_from_directory, session
from werkzeug.security import check_password_hash, generate_password_hash
from flask_cors import CORS
from database import get_db_connection, init_db, format_product_row

# Configuration & Application Setup
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__, static_folder=BASE_DIR)
app.secret_key = os.environ.get('LUMINA_SECRET_KEY', 'change-this-secret-in-production')
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Ensure database is created on launch
init_db()


# ==============================================================================
# STATIC FILE SERVING & HOMEPAGE
# ==============================================================================
@app.route("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/css/<path:filename>")
def serve_css(filename):
    css_dir = os.path.join(BASE_DIR, "css")
    if os.path.exists(os.path.join(css_dir, filename)):
        return send_from_directory(css_dir, filename)
    return send_from_directory(BASE_DIR, filename)


@app.route("/js/<path:filename>")
def serve_js(filename):
    js_dir = os.path.join(BASE_DIR, "js")
    if os.path.exists(os.path.join(js_dir, filename)):
        return send_from_directory(js_dir, filename)
    return send_from_directory(BASE_DIR, filename)


@app.route("/assets/<path:filename>")
def serve_assets(filename):
    assets_dir = os.path.join(BASE_DIR, "assets")
    if os.path.exists(os.path.join(assets_dir, filename)):
        return send_from_directory(assets_dir, filename)
    return send_from_directory(BASE_DIR, filename)


@app.route("/<path:filename>")
def serve_root_fallback(filename):
    if filename.startswith("api/"):
        return jsonify({"error": "Endpoint not found"}), 404
    if os.path.exists(os.path.join(BASE_DIR, filename)):
        return send_from_directory(BASE_DIR, filename)
    return jsonify({"error": "File not found"}), 404


# ==============================================================================
# SYSTEM & HEALTH APIS
# ==============================================================================
@app.route("/api/health", methods=["GET"])
def health_check():
    try:
        conn = get_db_connection()
        prod_count = conn.execute("SELECT COUNT(*) as c FROM products").fetchone()["c"]
        order_count = conn.execute("SELECT COUNT(*) as c FROM orders").fetchone()["c"]
        conn.close()
        return jsonify({
            "status": "online",
            "server": "Lumina Backend API v1.0",
            "database": "SQLite (lumina.db)",
            "product_count": prod_count,
            "order_count": order_count,
            "timestamp": datetime.now().isoformat() + "Z"
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


# ==============================================================================
# AUTHENTICATION & ROLE-BASED ACCESS
# ==============================================================================
def current_user():
    user_id = session.get('user_id')
    if not user_id:
        return None
    conn = get_db_connection()
    row = conn.execute("SELECT id, full_name, email, role, is_active, last_login_at FROM users WHERE id = ?", (user_id,)).fetchone()
    conn.close()
    if not row or not row['is_active']:
        session.clear()
        return None
    return dict(row)

def login_required(role=None):
    def decorator(fn):
        @wraps(fn)
        def wrapped(*args, **kwargs):
            user = current_user()
            if not user:
                return jsonify({'success': False, 'error': 'Authentication required'}), 401
            if role and user['role'] != role:
                return jsonify({'success': False, 'error': 'Owner access required for Store Operations'}), 403
            return fn(*args, **kwargs)
        return wrapped
    return decorator

@app.route('/api/auth/register', methods=['POST'])
def register_customer():
    data = request.get_json() or {}
    name = str(data.get('fullName', '')).strip()
    email = str(data.get('email', '')).strip().lower()
    password = str(data.get('password', ''))
    if len(name) < 2 or not re.match(r'^[^@\s]+@[^@\s]+\.[^@\s]+$', email) or len(password) < 8:
        return jsonify({'success': False, 'error': 'Use a valid name/email and a password of at least 8 characters'}), 400
    conn = get_db_connection()
    try:
        cur = conn.cursor()
        cur.execute("INSERT INTO users (full_name,email,password_hash,role) VALUES (?,?,?,'customer')", (name,email,generate_password_hash(password)))
        user_id = cur.lastrowid
        conn.commit()
    except Exception as e:
        conn.close()
        if 'UNIQUE' in str(e).upper():
            return jsonify({'success': False, 'error': 'An account with this email already exists'}), 409
        return jsonify({'success': False, 'error': 'Could not create account'}), 500
    conn.close()
    session['user_id'] = user_id
    return jsonify({'success': True, 'user': current_user()}), 201

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    email = str(data.get('email', '')).strip().lower()
    password = str(data.get('password', ''))
    requested_role = str(data.get('role', 'customer')).lower()
    conn = get_db_connection()
    row = conn.execute('SELECT * FROM users WHERE LOWER(email)=LOWER(?) AND is_active=1', (email,)).fetchone()
    if not row or not check_password_hash(row['password_hash'], password):
        conn.close(); return jsonify({'success': False, 'error': 'Invalid email or password'}), 401
    if requested_role == 'owner' and row['role'] != 'owner':
        conn.close(); return jsonify({'success': False, 'error': 'This account is not an owner account'}), 403
    conn.execute('UPDATE users SET last_login_at=CURRENT_TIMESTAMP WHERE id=?', (row['id'],)); conn.commit(); conn.close()
    session.clear(); session['user_id'] = row['id']
    return jsonify({'success': True, 'user': current_user()})

@app.route('/api/auth/logout', methods=['POST'])
def logout():
    session.clear(); return jsonify({'success': True})

@app.route('/api/auth/me', methods=['GET'])
def auth_me():
    user = current_user(); return jsonify({'authenticated': bool(user), 'user': user})

# ==============================================================================
# PRODUCTS API (FULL CRUD & SEARCH/FILTER)
# ==============================================================================
@app.route("/api/products", methods=["GET"])
def get_products():
    """Returns products with filtering, search, stock check, and sorting."""
    category = request.args.get("category", "all")
    search = request.args.get("search", "").strip().lower()
    in_stock_only = request.args.get("in_stock", "").lower() in ["true", "1"]
    sort_by = request.args.get("sort", "featured")

    query = "SELECT * FROM products WHERE 1=1"
    params = []

    if category and category != "all":
        query += " AND category = ?"
        params.append(category)

    if in_stock_only:
        query += " AND in_stock = 1 AND stock_count > 0"

    if search:
        query += " AND (LOWER(name) LIKE ? OR LOWER(tagline) LIKE ? OR LOWER(category_label) LIKE ? OR LOWER(description) LIKE ?)"
        term = f"%{search}%"
        params.extend([term, term, term, term])

    if sort_by == "price-asc":
        query += " ORDER BY price ASC"
    elif sort_by == "price-desc":
        query += " ORDER BY price DESC"
    elif sort_by == "rating":
        query += " ORDER BY rating DESC"
    else:  # featured
        query += " ORDER BY is_featured DESC, id ASC"

    conn = get_db_connection()
    rows = conn.execute(query, params).fetchall()
    conn.close()

    products = [format_product_row(row) for row in rows]
    return jsonify({
        "success": True,
        "count": len(products),
        "products": products
    })


@app.route("/api/products/<int:product_id>", methods=["GET"])
def get_product_by_id(product_id):
    """Fetches a single product by ID."""
    conn = get_db_connection()
    row = conn.execute("SELECT * FROM products WHERE id = ?", (product_id,)).fetchone()
    conn.close()

    if not row:
        return jsonify({"success": False, "error": f"Product with ID {product_id} not found"}), 404

    return jsonify({"success": True, "product": format_product_row(row)})


@app.route("/api/products", methods=["POST"])
@login_required('owner')
def create_product():
    """Adds a new product to the catalog."""
    data = request.get_json() or {}
    required_fields = ["name", "category", "price", "image"]
    for f in required_fields:
        if f not in data:
            return jsonify({"success": False, "error": f"Missing required field: {f}"}), 400

    import json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO products (
            name, tagline, category, category_label, price, original_price,
            rating, reviews_count, badge, badge_type, image, gallery,
            colors, sizes, description, features, in_stock, stock_count, is_featured
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        data["name"],
        data.get("tagline", ""),
        data["category"],
        data.get("categoryLabel", data.get("category_label", data["category"].capitalize())),
        float(data["price"]),
        float(data["originalPrice"]) if data.get("originalPrice") else None,
        float(data.get("rating", 5.0)),
        int(data.get("reviewsCount", 0)),
        data.get("badge", ""),
        data.get("badgeType", "accent"),
        data["image"],
        json.dumps(data.get("gallery", [data["image"]])),
        json.dumps(data.get("colors", [])),
        json.dumps(data.get("sizes", [])),
        data.get("description", ""),
        json.dumps(data.get("features", [])),
        1 if data.get("inStock", True) else 0,
        int(data.get("stockCount", 10)),
        1 if data.get("isFeatured", False) else 0
    ))
    new_id = cursor.lastrowid
    conn.commit()
    new_row = conn.execute("SELECT * FROM products WHERE id = ?", (new_id,)).fetchone()
    conn.close()

    return jsonify({"success": True, "message": "Product created", "product": format_product_row(new_row)}), 201


@app.route("/api/products/<int:product_id>", methods=["PUT"])
@login_required('owner')
def update_product(product_id):
    """Updates product attributes, price, or stock levels."""
    data = request.get_json() or {}
    conn = get_db_connection()
    existing = conn.execute("SELECT * FROM products WHERE id = ?", (product_id,)).fetchone()
    if not existing:
        conn.close()
        return jsonify({"success": False, "error": "Product not found"}), 404

    price = float(data["price"]) if "price" in data else existing["price"]
    orig_price = float(data["originalPrice"]) if "originalPrice" in data else existing["original_price"]
    stock_count = int(data["stockCount"]) if "stockCount" in data else existing["stock_count"]
    in_stock = int(data["inStock"]) if "inStock" in data else (1 if stock_count > 0 else 0)

    conn.execute("""
        UPDATE products SET
            name = COALESCE(?, name),
            tagline = COALESCE(?, tagline),
            price = ?,
            original_price = ?,
            stock_count = ?,
            in_stock = ?,
            is_featured = COALESCE(?, is_featured)
        WHERE id = ?
    """, (
        data.get("name"),
        data.get("tagline"),
        price,
        orig_price,
        stock_count,
        in_stock,
        data.get("isFeatured"),
        product_id
    ))
    conn.commit()
    updated = conn.execute("SELECT * FROM products WHERE id = ?", (product_id,)).fetchone()
    conn.close()

    return jsonify({"success": True, "message": "Product updated", "product": format_product_row(updated)})


@app.route("/api/products/<int:product_id>", methods=["DELETE"])
@login_required('owner')
def delete_product(product_id):
    """Deletes a product by ID."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM products WHERE id = ?", (product_id,))
    conn.commit()
    deleted = cursor.rowcount > 0
    conn.close()

    if not deleted:
        return jsonify({"success": False, "error": "Product not found"}), 404
    return jsonify({"success": True, "message": f"Product {product_id} deleted"})


# ==============================================================================
# CATEGORIES API
# ==============================================================================
@app.route("/api/categories", methods=["GET"])
def get_categories():
    """Returns categories with active product counts."""
    conn = get_db_connection()
    rows = conn.execute("""
        SELECT category, category_label, COUNT(*) as count
        FROM products
        GROUP BY category, category_label
    """).fetchall()
    total_count = conn.execute("SELECT COUNT(*) as total FROM products").fetchone()["total"]
    conn.close()

    categories = [{"slug": "all", "label": "All Items", "count": total_count}]
    for r in rows:
        categories.append({
            "slug": r["category"],
            "label": r["category_label"],
            "count": r["count"]
        })
    return jsonify({"success": True, "categories": categories})


# ==============================================================================
# PROMOTIONAL VOUCHERS API
# ==============================================================================
@app.route("/api/promo/validate", methods=["POST"])
def validate_promo():
    """Validates promo code against database and calculates discount."""
    data = request.get_json() or {}
    code = data.get("code", "").strip().upper()
    subtotal = float(data.get("subtotal", 0))

    if not code:
        return jsonify({"success": False, "valid": False, "message": "Please provide a promo code"}), 400

    conn = get_db_connection()
    row = conn.execute("SELECT * FROM promo_codes WHERE UPPER(code) = ? AND is_active = 1", (code,)).fetchone()
    conn.close()

    if not row:
        return jsonify({
            "success": True,
            "valid": False,
            "message": f"Promo code '{code}' is invalid or has expired."
        }), 200

    min_order = row["min_order"] or 0
    if subtotal > 0 and subtotal < min_order:
        return jsonify({
            "success": True,
            "valid": False,
            "message": f"Promo code '{code}' requires a minimum order of ${min_order:.2f}."
        }), 200

    discount_amount = 0.0
    if row["discount_percent"] > 0:
        discount_amount = round((subtotal * row["discount_percent"]) / 100.0, 2)
    elif row["discount_fixed"] > 0:
        discount_amount = min(subtotal, float(row["discount_fixed"]))

    return jsonify({
        "success": True,
        "valid": True,
        "promo": {
            "code": row["code"],
            "description": row["description"],
            "discountPercent": row["discount_percent"],
            "discountFixed": row["discount_fixed"],
            "freeShipping": bool(row["free_shipping"]),
            "discountAmount": discount_amount
        }
    })


@app.route("/api/promo", methods=["GET"])
def list_promos():
    """Lists all configured promotional codes."""
    conn = get_db_connection()
    rows = conn.execute("SELECT * FROM promo_codes ORDER BY id ASC").fetchall()
    conn.close()
    promos = [dict(r) for r in rows]
    return jsonify({"success": True, "promos": promos})


# ==============================================================================
# CART CALCULATION API
# ==============================================================================
@app.route("/api/cart/calculate", methods=["POST"])
def calculate_cart():
    data = request.get_json() or {}
    items = data.get("items", [])
    promo_code = data.get("promoCode", "").strip().upper()

    if not items:
        return jsonify({
            "success": True,
            "subtotal": 0.0,
            "discount": 0.0,
            "shipping": 0.0,
            "total": 0.0,
            "items": [],
            "freeShippingUnlocked": False,
            "remainingForFreeShipping": 100.0
        })

    conn = get_db_connection()
    validated_items = []
    subtotal = 0.0

    for item in items:
        prod_id = item.get("productId")
        qty = int(item.get("quantity", 1))
        row = conn.execute("SELECT * FROM products WHERE id = ?", (prod_id,)).fetchone()
        if not row:
            continue
        line_total = round(row["price"] * qty, 2)
        subtotal += line_total
        validated_items.append({
            "productId": prod_id,
            "name": row["name"],
            "image": row["image"],
            "price": row["price"],
            "quantity": qty,
            "color": item.get("color", "Standard"),
            "size": item.get("size", ""),
            "lineTotal": line_total,
            "availableStock": row["stock_count"],
            "inStock": bool(row["in_stock"])
        })

    discount_amount = 0.0
    free_shipping = False

    if promo_code:
        p_row = conn.execute("SELECT * FROM promo_codes WHERE UPPER(code) = ? AND is_active = 1", (promo_code,)).fetchone()
        if p_row:
            if not p_row["min_order"] or subtotal >= p_row["min_order"]:
                free_shipping = bool(p_row["free_shipping"])
                if p_row["discount_percent"] > 0:
                    discount_amount = round((subtotal * p_row["discount_percent"]) / 100.0, 2)
                elif p_row["discount_fixed"] > 0:
                    discount_amount = min(subtotal, float(p_row["discount_fixed"]))

    conn.close()

    free_shipping_threshold = 100.0
    shipping_cost = 0.0 if (subtotal >= free_shipping_threshold or free_shipping or subtotal == 0) else 15.0
    total = max(0.0, round(subtotal - discount_amount + shipping_cost, 2))
    remaining = max(0.0, round(free_shipping_threshold - subtotal, 2))

    return jsonify({
        "success": True,
        "subtotal": round(subtotal, 2),
        "discount": discount_amount,
        "shipping": shipping_cost,
        "total": total,
        "freeShippingUnlocked": subtotal >= free_shipping_threshold or free_shipping,
        "remainingForFreeShipping": remaining,
        "items": validated_items
    })


# ==============================================================================
# ORDERS & CHECKOUT API
# ==============================================================================
@app.route("/api/orders", methods=["POST"])
def create_order():
    data = request.get_json() or {}
    customer = data.get("customer", {})
    items = data.get("items", [])
    promo_code = (data.get("promoCode") or "").strip().upper()
    payment_method = data.get("paymentMethod", "Credit Card")

    required_cust = ["firstName", "lastName", "email", "address", "city", "zipCode"]
    for field in required_cust:
        if not customer.get(field, "").strip():
            return jsonify({"success": False, "error": f"Please provide {field}"}), 400

    if not items:
        return jsonify({"success": False, "error": "Your bag is empty"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()

    subtotal = 0.0
    order_items_to_save = []

    for item in items:
        prod_id = item.get("productId")
        qty = int(item.get("quantity", 1))
        p_row = cursor.execute("SELECT * FROM products WHERE id = ?", (prod_id,)).fetchone()

        if not p_row:
            conn.close()
            return jsonify({"success": False, "error": f"Product #{prod_id} no longer exists"}), 400

        if p_row["stock_count"] < qty:
            conn.close()
            return jsonify({
                "success": False,
                "error": f"Insufficient stock for '{p_row['name']}'. Only {p_row['stock_count']} remaining."
            }), 400

        line_total = round(p_row["price"] * qty, 2)
        subtotal += line_total
        order_items_to_save.append({
            "product_id": prod_id,
            "product_name": p_row["name"],
            "product_image": p_row["image"],
            "price": p_row["price"],
            "quantity": qty,
            "color": item.get("color", "Standard"),
            "size": item.get("size", ""),
            "total": line_total
        })

    discount_amount = 0.0
    free_shipping = False
    if promo_code:
        p_row = cursor.execute("SELECT * FROM promo_codes WHERE UPPER(code) = ? AND is_active = 1", (promo_code,)).fetchone()
        if p_row:
            if not p_row["min_order"] or subtotal >= p_row["min_order"]:
                free_shipping = bool(p_row["free_shipping"])
                if p_row["discount_percent"] > 0:
                    discount_amount = round((subtotal * p_row["discount_percent"]) / 100.0, 2)
                elif p_row["discount_fixed"] > 0:
                    discount_amount = min(subtotal, float(p_row["discount_fixed"]))

    shipping_cost = 0.0 if (subtotal >= 100.0 or free_shipping) else 15.0
    total = max(0.0, round(subtotal - discount_amount + shipping_cost, 2))

    order_num = f"LUM-{random.randint(100000, 999999)}"
    delivery_date = (datetime.now() + timedelta(days=4)).strftime("%B %d, %Y")
    full_name = f"{customer['firstName']} {customer['lastName']}".strip()

    # Decrement stock
    for item in order_items_to_save:
        cursor.execute("""
            UPDATE products
            SET stock_count = stock_count - ?,
                in_stock = CASE WHEN stock_count - ? <= 0 THEN 0 ELSE 1 END
            WHERE id = ?
        """, (item["quantity"], item["quantity"], item["product_id"]))

    cursor.execute("""
        INSERT INTO orders (
            order_number, customer_name, customer_email, street_address, city, zip_code,
            subtotal, discount, shipping, total, promo_code, payment_method, status,
            tracking_carrier, estimated_delivery
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        order_num,
        full_name,
        customer["email"],
        customer["address"],
        customer["city"],
        customer["zipCode"],
        subtotal,
        discount_amount,
        shipping_cost,
        total,
        promo_code if discount_amount > 0 or free_shipping else None,
        payment_method,
        "Confirmed",
        "Lumina Express Priority (Carbon Neutral)",
        delivery_date
    ))
    order_id = cursor.lastrowid

    for item in order_items_to_save:
        cursor.execute("""
            INSERT INTO order_items (
                order_id, product_id, product_name, product_image, price, quantity, color, size, total
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            order_id,
            item["product_id"],
            item["product_name"],
            item["product_image"],
            item["price"],
            item["quantity"],
            item["color"],
            item["size"],
            item["total"]
        ))

    transaction_ref = 'TXN-' + secrets.token_hex(6).upper()
    idempotency_key = str(data.get('idempotencyKey') or secrets.token_urlsafe(18))
    is_cod = payment_method.lower() in ('cash on delivery', 'cod')
    payment_status = 'Pending' if is_cod else 'Authorized (Demo)'
    gateway = 'Cash on Delivery' if is_cod else 'Lumina Demo Gateway'
    cursor.execute("""
        INSERT INTO transactions (transaction_ref, order_id, amount, currency, payment_method, status, gateway, gateway_reference, idempotency_key)
        VALUES (?, ?, ?, 'USD', ?, ?, ?, ?, ?)
    """, (transaction_ref, order_id, total, payment_method, payment_status, gateway, 'GW-' + secrets.token_hex(5).upper(), idempotency_key))
    cursor.execute("INSERT INTO order_events (order_id, status, message, actor) VALUES (?, 'Confirmed', ?, 'system')", (order_id, 'Order created and inventory reserved.'))

    conn.commit()
    conn.close()

    return jsonify({
        "success": True,
        "message": "Order placed successfully",
        "order": {
            "orderNumber": order_num,
            "status": "Confirmed",
            "customerName": full_name,
            "customerEmail": customer["email"],
            "subtotal": subtotal,
            "discount": discount_amount,
            "shipping": shipping_cost,
            "total": total,
            "estimatedDelivery": delivery_date,
            "carrier": "Lumina Express Priority (Carbon Neutral)",
            "itemCount": sum(i["quantity"] for i in order_items_to_save),
            "transactionRef": transaction_ref,
            "transactionStatus": payment_status
        }
    }), 201


@app.route("/api/orders", methods=["GET"])
@login_required('owner')
def get_orders():
    limit = int(request.args.get("limit", 50))
    conn = get_db_connection()
    orders_rows = conn.execute("SELECT * FROM orders ORDER BY id DESC LIMIT ?", (limit,)).fetchall()

    orders = []
    for o in orders_rows:
        order_dict = dict(o)
        items_rows = conn.execute("SELECT * FROM order_items WHERE order_id = ?", (o["id"],)).fetchall()
        order_dict["items"] = [dict(it) for it in items_rows]
        orders.append(order_dict)

    conn.close()
    return jsonify({"success": True, "count": len(orders), "orders": orders})


@app.route("/api/orders/<order_query>", methods=["GET"])
def track_order(order_query):
    clean_query = order_query.strip()
    conn = get_db_connection()

    order_row = conn.execute("""
        SELECT * FROM orders
        WHERE UPPER(order_number) = UPPER(?) OR LOWER(customer_email) = LOWER(?)
        ORDER BY id DESC LIMIT 1
    """, (clean_query, clean_query)).fetchone()

    if not order_row:
        conn.close()
        return jsonify({
            "success": False,
            "error": f"No shipment found matching '{clean_query}'. Please verify your order number (e.g., LUM-742918)."
        }), 404

    items_rows = conn.execute("SELECT * FROM order_items WHERE order_id = ?", (order_row["id"],)).fetchall()
    events = conn.execute("SELECT status, message, actor, created_at FROM order_events WHERE order_id = ? ORDER BY id ASC", (order_row["id"],)).fetchall()
    txn = conn.execute("SELECT transaction_ref, amount, currency, payment_method, status, gateway, created_at, updated_at FROM transactions WHERE order_id = ? ORDER BY id DESC LIMIT 1", (order_row["id"],)).fetchone()
    conn.close()

    order_dict = dict(order_row)
    order_dict["items"] = [dict(it) for it in items_rows]

    status = order_row["status"] or "Confirmed"
    steps = [
        {"title": "Order Confirmed", "desc": "Payment secured & receipt generated", "done": True, "current": status == "Confirmed"},
        {"title": "Artisan Inspection", "desc": "Handcrafted quality control & packaging", "done": status in ["Processing", "In Transit", "Out for Delivery", "Delivered"], "current": status == "Processing"},
        {"title": "Dispatched with Carrier", "desc": f"Carbon-neutral tracked courier ({order_row['tracking_carrier']})", "done": status in ["In Transit", "Out for Delivery", "Delivered"], "current": status == "In Transit"},
        {"title": "Out for Delivery", "desc": "With local courier in destination city", "done": status in ["Out for Delivery", "Delivered"], "current": status == "Out for Delivery"},
        {"title": "Delivered", "desc": f"Delivered to {order_row['city']}, {order_row['zip_code']}", "done": status == "Delivered", "current": status == "Delivered"}
    ]

    return jsonify({
        "success": True,
        "order": order_dict,
        "tracking": {
            "currentStatus": status,
            "carrier": order_row["tracking_carrier"],
            "estimatedDelivery": order_row["estimated_delivery"] or "3-5 Business Days",
            "destination": f"{order_row['street_address']}, {order_row['city']} {order_row['zip_code']}",
            "steps": steps,
            "events": [dict(e) for e in events],
            "transaction": dict(txn) if txn else None
        }
    })


@app.route("/api/orders/<order_number>/status", methods=["PATCH"])
@login_required('owner')
def update_order_status(order_number):
    data = request.get_json() or {}
    new_status = data.get("status")
    allowed = ["Confirmed", "Processing", "In Transit", "Out for Delivery", "Delivered", "Cancelled"]

    if new_status not in allowed:
        return jsonify({"success": False, "error": f"Invalid status. Choose from: {', '.join(allowed)}"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE orders SET status = ? WHERE UPPER(order_number) = UPPER(?)", (new_status, order_number))
    updated = cursor.rowcount > 0
    if updated:
        order_row = cursor.execute("SELECT id FROM orders WHERE UPPER(order_number)=UPPER(?)", (order_number,)).fetchone()
        cursor.execute("INSERT INTO order_events (order_id, status, message, actor) VALUES (?, ?, ?, ?)", (order_row['id'], new_status, f"Shipment status changed to {new_status}.", current_user()['email']))
    conn.commit()
    conn.close()

    if not updated:
        return jsonify({"success": False, "error": f"Order {order_number} not found"}), 404

    return jsonify({"success": True, "message": f"Order {order_number} status updated to {new_status}"})


# ==============================================================================
# NEWSLETTER SUBSCRIPTION API
# ==============================================================================
@app.route("/api/newsletter/subscribe", methods=["POST"])
def subscribe_newsletter():
    data = request.get_json() or {}
    email = data.get("email", "").strip().lower()

    if not email or not re.match(r"^[^@]+@[^@]+\.[^@]+$", email):
        return jsonify({"success": False, "error": "Please provide a valid email address"}), 400

    conn = get_db_connection()
    existing = conn.execute("SELECT * FROM newsletter_subscribers WHERE email = ?", (email,)).fetchone()

    if existing:
        conn.close()
        return jsonify({
            "success": True,
            "alreadySubscribed": True,
            "promoCode": "LUMINA20",
            "message": "Welcome back! Your 20% voucher code 'LUMINA20' is active."
        })

    cursor = conn.cursor()
    cursor.execute("INSERT INTO newsletter_subscribers (email, discount_code) VALUES (?, 'LUMINA20')", (email,))
    conn.commit()
    conn.close()

    return jsonify({
        "success": True,
        "alreadySubscribed": False,
        "promoCode": "LUMINA20",
        "message": "Welcome to the Lumina Collective! Use code LUMINA20 for 20% off your first purchase."
    }), 201


@app.route("/api/newsletter/subscribers", methods=["GET"])
@login_required('owner')
def list_subscribers():
    conn = get_db_connection()
    rows = conn.execute("SELECT * FROM newsletter_subscribers ORDER BY id DESC").fetchall()
    conn.close()
    return jsonify({"success": True, "count": len(rows), "subscribers": [dict(r) for r in rows]})


# ==============================================================================
# TESTIMONIALS & REVIEWS API
# ==============================================================================
@app.route("/api/testimonials", methods=["GET"])
def get_testimonials():
    conn = get_db_connection()
    rows = conn.execute("SELECT * FROM testimonials ORDER BY id DESC").fetchall()
    conn.close()
    return jsonify({"success": True, "testimonials": [dict(r) for r in rows]})


@app.route("/api/testimonials", methods=["POST"])
def submit_testimonial():
    data = request.get_json() or {}
    for f in ["author", "text", "product"]:
        if not data.get(f):
            return jsonify({"success": False, "error": f"Missing {f}"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO testimonials (author, role, avatar, rating, date_str, text, product)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, (
        data["author"],
        data.get("role", "Verified Lumina Customer"),
        data.get("avatar", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80"),
        int(data.get("rating", 5)),
        "Just now",
        data["text"],
        data["product"]
    ))
    conn.commit()
    conn.close()
    return jsonify({"success": True, "message": "Review submitted successfully!"}), 201


# ==============================================================================
# CONCIERGE / CONTACT API
# ==============================================================================
@app.route("/api/contact", methods=["POST"])
def submit_contact_inquiry():
    data = request.get_json() or {}
    for f in ["name", "email", "message"]:
        if not data.get(f, "").strip():
            return jsonify({"success": False, "error": f"Please enter your {f}"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO contact_messages (name, email, subject, message)
        VALUES (?, ?, ?, ?)
    """, (
        data["name"].strip(),
        data["email"].strip(),
        data.get("subject", "General Inquiries & Product Advice").strip(),
        data["message"].strip()
    ))
    conn.commit()
    conn.close()

    return jsonify({
        "success": True,
        "message": "Thank you for reaching out. Our Studio Concierge will respond to your email within 24 hours."
    }), 201


@app.route("/api/contact", methods=["GET"])
@login_required('owner')
def list_contact_inquiries():
    conn = get_db_connection()
    rows = conn.execute("SELECT * FROM contact_messages ORDER BY id DESC").fetchall()
    conn.close()
    return jsonify({"success": True, "messages": [dict(r) for r in rows]})


# ==============================================================================
# TRANSACTION & LIVE OPERATIONS APIs
# ==============================================================================
@app.route('/api/transactions/<transaction_ref>', methods=['GET'])
def get_transaction(transaction_ref):
    conn = get_db_connection()
    row = conn.execute("SELECT transaction_ref, order_id, amount, currency, payment_method, status, gateway, gateway_reference, created_at, updated_at FROM transactions WHERE UPPER(transaction_ref)=UPPER(?)", (transaction_ref,)).fetchone()
    conn.close()
    if not row:
        return jsonify({'success': False, 'error': 'Transaction not found'}), 404
    return jsonify({'success': True, 'transaction': dict(row)})

@app.route('/api/admin/transactions', methods=['GET'])
@login_required('owner')
def admin_transactions():
    conn = get_db_connection()
    rows = conn.execute("SELECT t.*, o.order_number, o.customer_name FROM transactions t JOIN orders o ON o.id=t.order_id ORDER BY t.id DESC LIMIT 100").fetchall()
    conn.close()
    return jsonify({'success': True, 'transactions': [dict(r) for r in rows]})

# ==============================================================================
# ADMIN METRICS & DASHBOARD API
# ==============================================================================
@app.route("/api/admin/dashboard", methods=["GET"])
@login_required('owner')
def admin_dashboard():
    conn = get_db_connection()
    total_revenue = conn.execute("SELECT COALESCE(SUM(total), 0) as rev FROM orders").fetchone()["rev"]
    total_orders = conn.execute("SELECT COUNT(*) as c FROM orders").fetchone()["c"]
    total_products = conn.execute("SELECT COUNT(*) as c FROM products").fetchone()["c"]
    low_stock = conn.execute("SELECT COUNT(*) as c FROM products WHERE stock_count < 10").fetchone()["c"]
    total_subscribers = conn.execute("SELECT COUNT(*) as c FROM newsletter_subscribers").fetchone()["c"]
    inquiries_count = conn.execute("SELECT COUNT(*) as c FROM contact_messages").fetchone()["c"]
    transaction_count = conn.execute("SELECT COUNT(*) as c FROM transactions").fetchone()["c"]
    pending_transactions = conn.execute("SELECT COUNT(*) as c FROM transactions WHERE status IN ('Pending','Failed')").fetchone()["c"]
    active_shipments = conn.execute("SELECT COUNT(*) as c FROM orders WHERE status IN ('Confirmed','Processing','In Transit','Out for Delivery')").fetchone()["c"]

    recent_orders = conn.execute("SELECT * FROM orders ORDER BY id DESC LIMIT 5").fetchall()
    low_stock_items = conn.execute("SELECT id, name, stock_count, price FROM products WHERE stock_count < 10 ORDER BY stock_count ASC").fetchall()
    conn.close()

    return jsonify({
        "success": True,
        "stats": {
            "totalRevenue": round(total_revenue, 2),
            "totalOrders": total_orders,
            "totalProducts": total_products,
            "lowStockAlerts": low_stock,
            "totalSubscribers": total_subscribers,
            "contactInquiries": inquiries_count,
            "transactionCount": transaction_count,
            "pendingTransactions": pending_transactions,
            "activeShipments": active_shipments
        },
        "recentOrders": [dict(o) for o in recent_orders],
        "lowStockProducts": [dict(p) for p in low_stock_items]
    })


# ==============================================================================
# SERVER ENTRY POINT
# ==============================================================================
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f">> LUMINA Studio Server starting on http://127.0.0.1:{port}")
    app.run(host="127.0.0.1", port=port, debug=False)
