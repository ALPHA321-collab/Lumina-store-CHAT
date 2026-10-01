"""
LUMINA STUDIO - SQLite Database Layer
Handles database schema initialization, seed data, and connection management.
"""

import sqlite3
import json
import os
from datetime import datetime
from werkzeug.security import generate_password_hash

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "lumina.db")


def get_db_connection():
    """Returns a SQLite connection with row_factory set to sqlite3.Row for dict-like access."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db():
    """Initializes database tables if they do not exist and seeds initial data."""
    conn = get_db_connection()
    cursor = conn.cursor()

    # 1. Products table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            tagline TEXT,
            category TEXT NOT NULL,
            category_label TEXT NOT NULL,
            price REAL NOT NULL,
            original_price REAL,
            rating REAL DEFAULT 5.0,
            reviews_count INTEGER DEFAULT 0,
            badge TEXT,
            badge_type TEXT,
            image TEXT NOT NULL,
            gallery TEXT,
            colors TEXT,
            sizes TEXT,
            description TEXT,
            features TEXT,
            in_stock INTEGER DEFAULT 1,
            stock_count INTEGER DEFAULT 10,
            is_featured INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # 2. Orders table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_number TEXT UNIQUE NOT NULL,
            customer_name TEXT NOT NULL,
            customer_email TEXT NOT NULL,
            street_address TEXT NOT NULL,
            city TEXT NOT NULL,
            zip_code TEXT NOT NULL,
            subtotal REAL NOT NULL,
            discount REAL DEFAULT 0,
            shipping REAL DEFAULT 0,
            total REAL NOT NULL,
            promo_code TEXT,
            payment_method TEXT DEFAULT 'credit_card',
            status TEXT DEFAULT 'Confirmed',
            tracking_carrier TEXT DEFAULT 'Lumina Express Priority (Carbon Neutral)',
            estimated_delivery TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # 3. Order Items table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS order_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
            product_id INTEGER NOT NULL,
            product_name TEXT NOT NULL,
            product_image TEXT,
            price REAL NOT NULL,
            quantity INTEGER NOT NULL,
            color TEXT,
            size TEXT,
            total REAL NOT NULL
        )
    """)

    # 4. Promo codes table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS promo_codes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            code TEXT UNIQUE NOT NULL,
            discount_percent REAL DEFAULT 0,
            discount_fixed REAL DEFAULT 0,
            free_shipping INTEGER DEFAULT 0,
            description TEXT,
            min_order REAL DEFAULT 0,
            is_active INTEGER DEFAULT 1
        )
    """)

    # 5. Newsletter subscribers table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS newsletter_subscribers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            discount_code TEXT DEFAULT 'LUMINA20',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # 6. Testimonials table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS testimonials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author TEXT NOT NULL,
            role TEXT NOT NULL,
            avatar TEXT,
            rating INTEGER DEFAULT 5,
            date_str TEXT,
            text TEXT NOT NULL,
            product TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # 7. Contact Concierge inquiries table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            status TEXT DEFAULT 'New',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # 8. Role-based accounts. Owners are the only users allowed to operate the store backend.
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'customer' CHECK(role IN ('customer','owner')),
            is_active INTEGER DEFAULT 1,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            last_login_at TIMESTAMP
        )
    """)

    # 9. Payment/transaction ledger. No raw card numbers are stored.
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            transaction_ref TEXT UNIQUE NOT NULL,
            order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
            amount REAL NOT NULL,
            currency TEXT DEFAULT 'USD',
            payment_method TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'Pending',
            gateway TEXT DEFAULT 'Lumina Demo Gateway',
            gateway_reference TEXT,
            idempotency_key TEXT UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # 10. Immutable-ish order event timeline used by customer tracking and owner operations.
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS order_events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
            status TEXT NOT NULL,
            message TEXT NOT NULL,
            actor TEXT DEFAULT 'system',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # Seed a development owner account once. Change the password before production use.
    owner_email = 'owner@lumina.pk'
    existing_owner = cursor.execute("SELECT id FROM users WHERE LOWER(email)=LOWER(?)", (owner_email,)).fetchone()
    if not existing_owner:
        cursor.execute("""
            INSERT INTO users (full_name, email, password_hash, role)
            VALUES (?, ?, ?, 'owner')
        """, ('Lumina Store Owner', owner_email, generate_password_hash('Owner@12345')))

    conn.commit()

    # Seed products if empty
    cursor.execute("SELECT COUNT(*) as count FROM products")
    if cursor.fetchone()["count"] == 0:
        seed_initial_data(conn)

    conn.close()
    print(f"Database initialized at: {DB_PATH}")


def seed_initial_data(conn):
    """Populates initial catalog, promo codes, and testimonials."""
    cursor = conn.cursor()

    # Seed promo codes
    promos = [
        ("LUMINA20", 20.0, 0.0, 0, "20% Flash Storewide Discount", 0.0),
        ("WELCOME10", 0.0, 10.0, 0, "$10 Welcome Credit on orders $50+", 50.0),
        ("FREESHIP", 0.0, 0.0, 1, "Instant Free Express Shipping", 0.0),
    ]
    cursor.executemany("""
        INSERT OR IGNORE INTO promo_codes (code, discount_percent, discount_fixed, free_shipping, description, min_order)
        VALUES (?, ?, ?, ?, ?, ?)
    """, promos)

    # Seed testimonials
    testimonials = [
        (
            "Elena Rostova",
            "Architectural Designer, NYC",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
            5,
            "2 days ago",
            "The build quality of the Aura Headphones and Walnut Riser blew my expectations away. It's rare to find an online store where the physical product looks even more stunning in person than on screen.",
            "Aura Studio Headphones"
        ),
        (
            "Marcus Vance",
            "Software Engineer, San Francisco",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
            5,
            "1 week ago",
            "The Apex keyboard is an absolute dream to type on. Fast shipping, plastic-free packaging, and incredible customer support. Lumina has become my go-to store for workspace essentials.",
            "Apex 75% Keyboard"
        ),
        (
            "Sophia Chen",
            "Creative Director, London",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
            5,
            "3 weeks ago",
            "Decent colors, impeccable materials, and timeless aesthetic. The ceramic pour-over set transformed my morning routine completely. You can feel the intention behind every curated item.",
            "Artisan Pour-Over Set"
        )
    ]
    cursor.executemany("""
        INSERT INTO testimonials (author, role, avatar, rating, date_str, text, product)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, testimonials)

    # Seed products
    products = [
        {
            "name": "Aura Studio Wireless ANC Headphones",
            "tagline": "Lossless spatial audio with 40-hour battery life",
            "category": "tech",
            "category_label": "Audio & Tech",
            "price": 279,
            "original_price": 349,
            "rating": 4.9,
            "reviews_count": 342,
            "badge": "Bestseller",
            "badge_type": "accent",
            "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Space Gray", "hex": "#334155"},
                {"name": "Matte Black", "hex": "#0F172A"},
                {"name": "Desert Sand", "hex": "#D4A373"}
            ],
            "sizes": [],
            "description": "Crafted with aerospace-grade anodized aluminum and memory foam acoustic earcups. Features custom-tuned 40mm drivers and next-generation hybrid active noise cancellation for complete sonic immersion.",
            "features": [
                "Hybrid Active Noise Cancellation with Transparency Mode",
                "Up to 40 hours battery on a single USB-C charge",
                "Multi-point Bluetooth 5.3 connection",
                "Custom EQ presets via Lumina Companion app"
            ],
            "in_stock": 1,
            "stock_count": 18,
            "is_featured": 1
        },
        {
            "name": "Apex 75% Mechanical Wireless Keyboard",
            "tagline": "Gasket-mounted hot-swap switches in CNC aluminum",
            "category": "tech",
            "category_label": "Audio & Tech",
            "price": 159,
            "original_price": 189,
            "rating": 4.8,
            "reviews_count": 215,
            "badge": "Sale -16%",
            "badge_type": "sale",
            "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Charcoal Slate", "hex": "#1E293B"},
                {"name": "Arctic Chalk", "hex": "#E2E8F0"},
                {"name": "Sage Mist", "hex": "#84A98C"}
            ],
            "sizes": [],
            "description": "Designed for tactile purists. The Apex features lubricated linear switches, sound-dampening silicone poron foam, and PBT dye-sublimated keycaps that resist shine over years of typing.",
            "features": [
                "Hot-swappable 5-pin mechanical switch sockets",
                "Tri-mode connectivity: 2.4GHz dongle, Bluetooth 5.1 & Type-C",
                "Programmable multi-function rotary knob",
                "Custom south-facing RGB backlighting"
            ],
            "in_stock": 1,
            "stock_count": 9,
            "is_featured": 1
        },
        {
            "name": "Ceramic Artisan Pour-Over Dripper Set",
            "tagline": "Handcrafted matte ceramic brewer with olivewood stand",
            "category": "home",
            "category_label": "Home & Living",
            "price": 68,
            "original_price": None,
            "rating": 4.9,
            "reviews_count": 88,
            "badge": "Handcrafted",
            "badge_type": "neutral",
            "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Raw Terracotta", "hex": "#C86D51"},
                {"name": "Basalt Black", "hex": "#292F36"},
                {"name": "Oatmeal Speckle", "hex": "#D6CCC2"}
            ],
            "sizes": [],
            "description": "Engineered with spiral internal ribbing to regulate extraction rate and temperature stability. Hand-glazed by master ceramic artisans in Kyoto, finished with a sustainably sourced olivewood base.",
            "features": [
                "High-fired durable stoneware clay",
                "Fits standard 02 cone filters",
                "Heat-retentive design for optimal coffee extraction",
                "Includes heat-resistant borosilicate glass carafe (600ml)"
            ],
            "in_stock": 1,
            "stock_count": 24,
            "is_featured": 0
        },
        {
            "name": "Minimalist Chrono Sapphire Watch",
            "tagline": "Japanese meca-quartz movement with Milanese mesh",
            "category": "accessories",
            "category_label": "Accessories",
            "price": 235,
            "original_price": 295,
            "rating": 4.9,
            "reviews_count": 154,
            "badge": "Popular",
            "badge_type": "accent",
            "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Midnight Noir", "hex": "#0F172A"},
                {"name": "Brushed Steel", "hex": "#94A3B8"},
                {"name": "Rose Champagne", "hex": "#D4AF37"}
            ],
            "sizes": [],
            "description": "An understated statement of precision. Encased in 316L surgical stainless steel with an anti-reflective scratch-proof sapphire crystal dial that withstands everyday wear effortlessly.",
            "features": [
                "Japanese Seiko meca-quartz hybrid caliber",
                "5 ATM / 50 meters water resistance",
                "Quick-release interchangeable strap mechanism",
                "Super-LumiNova luminescence on dial hands"
            ],
            "in_stock": 1,
            "stock_count": 12,
            "is_featured": 1
        },
        {
            "name": "Heavyweight Merino Wool Overshirt",
            "tagline": "Thermally adaptive 380gsm New Zealand wool",
            "category": "apparel",
            "category_label": "Apparel",
            "price": 145,
            "original_price": 175,
            "rating": 4.7,
            "reviews_count": 92,
            "badge": "Eco-Blend",
            "badge_type": "eco",
            "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Forest Moss", "hex": "#3B5249"},
                {"name": "Dark Heather", "hex": "#4B5563"},
                {"name": "Warm Camel", "hex": "#C59B6C"}
            ],
            "sizes": ["S", "M", "L", "XL"],
            "description": "The ideal layer for transitional weather. Made from ethically sheared 100% merino wool that naturally repels odor, regulates body heat, and feels luxuriously soft against skin.",
            "features": [
                "Natural water & odor resistant fibers",
                "Reinforced corozo nut buttons",
                "Two oversized chest patch utility pockets",
                "Pre-shrunk and tailored relaxed fit"
            ],
            "in_stock": 1,
            "stock_count": 15,
            "is_featured": 1
        },
        {
            "name": "Aether Minimalist Smart Desk Lamp",
            "tagline": "Circadian rhythm lighting with wireless fast-charging",
            "category": "workspace",
            "category_label": "Workspace",
            "price": 119,
            "original_price": 149,
            "rating": 4.8,
            "reviews_count": 178,
            "badge": "Sale -20%",
            "badge_type": "sale",
            "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Anodized Black", "hex": "#111827"},
                {"name": "Moon White", "hex": "#F3F4F6"},
                {"name": "Champagne Silver", "hex": "#CBD5E1"}
            ],
            "sizes": [],
            "description": "Designed to elevate focus and preserve eye health. Emits flicker-free CRI 95+ light that automatically synchronizes with the sun's natural color temperature throughout your workday.",
            "features": [
                "95+ High Color Rendering Index (CRI)",
                "Integrated 15W Qi wireless fast charging base",
                "Smooth stepless touch dimming & color temperature dial",
                "Ultra-low standby power consumption"
            ],
            "in_stock": 1,
            "stock_count": 22,
            "is_featured": 0
        },
        {
            "name": "Full-Grain Italian Leather Bi-Fold Wallet",
            "tagline": "Hand-stitched vegetable tanned Tuscan calfskin",
            "category": "accessories",
            "category_label": "Accessories",
            "price": 75,
            "original_price": None,
            "rating": 4.9,
            "reviews_count": 310,
            "badge": "Top Rated",
            "badge_type": "accent",
            "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Vintage Cognac", "hex": "#8B4513"},
                {"name": "Espresso Brown", "hex": "#3D2B1F"},
                {"name": "Stealth Black", "hex": "#1C1917"}
            ],
            "sizes": [],
            "description": "Minimalist exterior with ample utility. Cut from premium certified Tuscan vegetable-tanned leather that develops a rich, personalized patina with every year of use.",
            "features": [
                "Holds 8-12 cards plus full-length cash compartment",
                "Embedded RFID protection shield",
                "Beveled and burnished edges sealed with natural beeswax",
                "Ultra-slim 9mm profile when folded"
            ],
            "in_stock": 1,
            "stock_count": 31,
            "is_featured": 0
        },
        {
            "name": "Solid Walnut Ergonomic Monitor Stand",
            "tagline": "Elevate your display with integrated cable management",
            "category": "workspace",
            "category_label": "Workspace",
            "price": 129,
            "original_price": 155,
            "rating": 4.8,
            "reviews_count": 164,
            "badge": "Limited Stock",
            "badge_type": "warn",
            "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "American Walnut", "hex": "#5C4033"},
                {"name": "Nordic Ash", "hex": "#D2B48C"}
            ],
            "sizes": [],
            "description": "Carved from a single board of sustainable Appalachian walnut wood. Raises your monitor by 4.2 inches to align directly with eye level, reducing cervical spine strain during long work sessions.",
            "features": [
                "Weight capacity up to 60 lbs (accommodates dual displays)",
                "Cork-padded feet to protect desk surfaces",
                "Stores standard 104-key keyboards underneath",
                "Natural organic matte oil and wax finish"
            ],
            "in_stock": 1,
            "stock_count": 6,
            "is_featured": 1
        },
        {
            "name": "Lumina Soundflow Acoustic Speaker",
            "tagline": "360-degree room-filling acoustic fabric speaker",
            "category": "tech",
            "category_label": "Audio & Tech",
            "price": 185,
            "original_price": 220,
            "rating": 4.9,
            "reviews_count": 142,
            "badge": "New",
            "badge_type": "new",
            "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Slate Heather", "hex": "#475569"},
                {"name": "Nordic Cream", "hex": "#EDE8F5"},
                {"name": "Forest Olive", "hex": "#40534C"}
            ],
            "sizes": [],
            "description": "Wrapped in Kvadrat recycled woolen acoustics textile. Employs dual passive radiators and a downward-firing woofer to deliver warm, chest-thumping bass and crystal clarity at any volume.",
            "features": [
                "True 360-degree omnidirectional sound projection",
                "IPX6 water-resistant rating for indoor and patio use",
                "Stereo pairing: connect two units wirelessly",
                "24-hour continuous playback with battery saver mode"
            ],
            "in_stock": 1,
            "stock_count": 16,
            "is_featured": 1
        },
        {
            "name": "Heavy Duty Waxed Canvas Everyday Tote",
            "tagline": "Weatherproof 16oz cotton with bridle leather handles",
            "category": "accessories",
            "category_label": "Accessories",
            "price": 89,
            "original_price": None,
            "rating": 4.7,
            "reviews_count": 119,
            "badge": "Essential",
            "badge_type": "neutral",
            "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Field Tan", "hex": "#B89758"},
                {"name": "Deep Navy", "hex": "#1A2A3A"},
                {"name": "Charcoal Olive", "hex": "#434B3E"}
            ],
            "sizes": [],
            "description": "Built to endure decades of daily commutes, weekend markets, and travel. Treated with bees-and-paraffin wax for rugged water repellency and vintage crease character.",
            "features": [
                "Dedicated padded sleeve for laptops up to 16 inches",
                "Solid copper hand-hammered rivets",
                "Two interior slip pockets + key clip leash",
                "Reinforced double-layered bottom panel"
            ],
            "in_stock": 1,
            "stock_count": 19,
            "is_featured": 0
        },
        {
            "name": "Thermodynamic Double-Wall Insulated Flask",
            "tagline": "Keeps beverages 24h ice cold or 12h steaming hot",
            "category": "home",
            "category_label": "Home & Living",
            "price": 44,
            "original_price": 52,
            "rating": 4.9,
            "reviews_count": 204,
            "badge": "Sale",
            "badge_type": "sale",
            "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1570570626315-95c1b65e99be?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Matte Sage", "hex": "#7E9F8E"},
                {"name": "Desert Dune", "hex": "#E3DAC9"},
                {"name": "Onyx Black", "hex": "#18181B"}
            ],
            "sizes": [],
            "description": "Pro-grade 18/8 food-safe stainless steel vacuum insulation eliminates condensation and prevents flavor retention. Designed with a wide ergonomic spout and leak-proof bamboo cap.",
            "features": [
                "750ml / 25oz capacity fits automotive cupholders",
                "Zero BPA, phthalates, or chemical liners",
                "Durable powder-coated tactile grip",
                "Lifetime leakproof vacuum seal guarantee"
            ],
            "in_stock": 1,
            "stock_count": 40,
            "is_featured": 0
        },
        {
            "name": "Pure Cashmere Ribbed Fisherman Beanie",
            "tagline": "Grade-A Mongolian cashmere with snug foldover cuff",
            "category": "apparel",
            "category_label": "Apparel",
            "price": 65,
            "original_price": 85,
            "rating": 4.8,
            "reviews_count": 77,
            "badge": "Warmth",
            "badge_type": "accent",
            "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&auto=format&fit=crop&q=80",
            "gallery": [
                "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80"
            ],
            "colors": [
                {"name": "Oatmeal Melange", "hex": "#E6DFD5"},
                {"name": "Smoky Charcoal", "hex": "#374151"},
                {"name": "Midnight Navy", "hex": "#1E3A8A"}
            ],
            "sizes": ["One Size"],
            "description": "Unrivaled featherlight warmth without itchiness. Knitted with 2-ply 100% fine Mongolian cashmere yarn using a traditional 7-gauge fisherman rib stitch.",
            "features": [
                "100% sustainably sourced circular cashmere",
                "Adjustable cuff depth for slouchy or fitted wear",
                "Natural breathability prevents overheating",
                "Comes in recycled cotton gift pouch"
            ],
            "in_stock": 1,
            "stock_count": 14,
            "is_featured": 0
        }
    ]


    # Add 100 additional catalog products (IDs are assigned by SQLite).
    extra_products = []
    extra_specs = [('tech', 'Audio & Tech', ['Nova', 'Apex', 'Orbit', 'Pulse', 'Vertex', 'Echo', 'Sonic', 'Halo', 'Flux', 'Zenith'], ['Wireless Earbuds', 'Mechanical Keyboard', 'Portable Bluetooth Speaker', '4K Webcam', 'USB-C Hub', 'Power Bank', 'Smart Tracker', 'Desktop Microphone', 'Gaming Mouse', 'Noise-Isolating Earbuds']), ('workspace', 'Workspace', ['Cedar', 'Atlas', 'Form', 'Arc', 'Mono', 'Grid', 'Lumen', 'Slate', 'Axis', 'Craft'], ['Desk Organizer', 'Laptop Stand', 'Desk Mat', 'Monitor Light Bar', 'Cable Management Kit', 'Ergonomic Footrest', 'Document Tray', 'Pen Holder', 'Desk Shelf', 'Task Timer']), ('home', 'Home & Living', ['Mori', 'Terra', 'Luna', 'Sol', 'Haven', 'Olive', 'Sora', 'Nara', 'Dune', 'Cove'], ['Ceramic Vase', 'Linen Cushion', 'Stoneware Mug', 'Scented Candle', 'Serving Tray', 'Glass Carafe', 'Wool Throw', 'Planter', 'Table Clock', 'Storage Basket']), ('apparel', 'Apparel', ['Essential', 'Heritage', 'Studio', 'Everyday', 'Coastal', 'Urban', 'Field', 'Relaxed', 'Classic', 'Modern'], ['Cotton Overshirt', 'Merino T-Shirt', 'Linen Shirt', 'Relaxed Trousers', 'Wool Cardigan', 'Canvas Jacket', 'Knit Polo', 'Everyday Hoodie', 'Oxford Shirt', 'Travel Joggers']), ('accessories', 'Accessories', ['Civic', 'Nomad', 'Atelier', 'Voyage', 'Foundry', 'Mercer', 'Terra', 'North', 'Mason', 'Avenue'], ['Leather Card Holder', 'Canvas Tote', 'Travel Pouch', 'Key Organizer', 'Leather Belt', 'Sunglasses', 'Passport Wallet', 'Minimal Backpack', 'Watch Strap', 'Tech Organizer'])]
    extra_images = ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80']
    extra_index = 13
    for _cat, _label, _prefixes, _nouns in extra_specs:
        for _j in range(20):
            _prefix = _prefixes[_j // 2]
            _noun = _nouns[_j % 10]
            _price = round(29 + ((extra_index * 17) % 220), 2)
            extra_products.append({
                "name": f"{_prefix} {_noun}",
                "tagline": f"Premium {_noun.lower()} designed for modern everyday use",
                "category": _cat, "category_label": _label, "price": _price,
                "original_price": round(_price * 1.18, 2) if _j % 3 else None,
                "rating": round(4.4 + ((extra_index * 7) % 6) / 10, 1),
                "reviews_count": 35 + (extra_index * 13) % 390,
                "badge": "New Arrival" if _j < 2 else ("Bestseller" if _j in (6,12,18) else None),
                "badge_type": "accent" if _j < 2 or _j in (6,12,18) else None,
                "image": extra_images[(extra_index - 13) % len(extra_images)],
                "gallery": [extra_images[(extra_index - 13) % len(extra_images)], extra_images[(extra_index - 12) % len(extra_images)]],
                "colors": [{"name":"Graphite","hex":"#374151"},{"name":"Natural","hex":"#D6C7B2"},{"name":"Midnight","hex":"#1E293B"}],
                "sizes": ["S","M","L","XL"] if _cat == "apparel" else [],
                "description": f"A carefully finished Lumina {_noun.lower()} combining durable materials, restrained design, and practical everyday performance.",
                "features": ["Premium materials and durable construction","Designed for daily use","Quality-checked before dispatch","Plastic-conscious packaging"],
                "in_stock": 1, "stock_count": 8 + (extra_index * 11) % 43, "is_featured": 1 if _j in (0,10) else 0
            })
            extra_index += 1
    products.extend(extra_products)

    for p in products:
        cursor.execute("""
            INSERT INTO products (
                name, tagline, category, category_label, price, original_price,
                rating, reviews_count, badge, badge_type, image, gallery,
                colors, sizes, description, features, in_stock, stock_count, is_featured
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            p["name"],
            p["tagline"],
            p["category"],
            p["category_label"],
            p["price"],
            p["original_price"],
            p["rating"],
            p["reviews_count"],
            p["badge"],
            p["badge_type"],
            p["image"],
            json.dumps(p["gallery"]),
            json.dumps(p["colors"]),
            json.dumps(p["sizes"]),
            p["description"],
            json.dumps(p["features"]),
            p["in_stock"],
            p["stock_count"],
            p["is_featured"]
        ))

    # Seed sample completed order
    cursor.execute("""
        INSERT INTO orders (
            order_number, customer_name, customer_email, street_address, city, zip_code,
            subtotal, discount, shipping, total, promo_code, payment_method, status, tracking_carrier, estimated_delivery
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        "LUM-742918",
        "Saad Mirza",
        "saad@example.com",
        "101 Innovation Way",
        "San Francisco",
        "94105",
        279.0,
        55.8,
        0.0,
        223.2,
        "LUMINA20",
        "Credit Card",
        "In Transit",
        "Lumina Express Priority (Carbon Neutral)",
        "October 2, 2026"
    ))
    sample_order_id = cursor.lastrowid
    cursor.execute("""
        INSERT INTO order_items (order_id, product_id, product_name, product_image, price, quantity, color, size, total)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        sample_order_id,
        1,
        "Aura Studio Wireless ANC Headphones",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
        279.0,
        1,
        "Space Gray",
        "",
        279.0
    ))

    conn.commit()
    print("Database successfully seeded with initial catalog, promos, and sample order.")


def format_product_row(row):
    """Parses JSON fields from a product database row into a Python dictionary."""
    if not row:
        return None
    d = dict(row)
    try:
        d["gallery"] = json.loads(d["gallery"]) if d.get("gallery") else []
    except Exception:
        d["gallery"] = []
    try:
        d["colors"] = json.loads(d["colors"]) if d.get("colors") else []
    except Exception:
        d["colors"] = []
    try:
        d["sizes"] = json.loads(d["sizes"]) if d.get("sizes") else []
    except Exception:
        d["sizes"] = []
    try:
        d["features"] = json.loads(d["features"]) if d.get("features") else []
    except Exception:
        d["features"] = []
    d["in_stock"] = bool(d.get("in_stock", 1))
    d["is_featured"] = bool(d.get("is_featured", 0))
    d["categoryLabel"] = d["category_label"]
    d["reviewsCount"] = d["reviews_count"]
    d["originalPrice"] = d["original_price"]
    d["stockCount"] = d["stock_count"]
    d["badgeType"] = d["badge_type"]
    return d
