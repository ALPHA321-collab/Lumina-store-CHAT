// Product catalog dataset for Lumina Store
const PRODUCTS = [
  {
    id: 1,
    name: "Aura Studio Wireless ANC Headphones",
    tagline: "Lossless spatial audio with 40-hour battery life",
    category: "tech",
    categoryLabel: "Audio & Tech",
    price: 279,
    originalPrice: 349,
    rating: 4.9,
    reviewsCount: 342,
    badge: "Bestseller",
    badgeType: "accent",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Space Gray", hex: "#334155" },
      { name: "Matte Black", hex: "#0F172A" },
      { name: "Desert Sand", hex: "#D4A373" }
    ],
    description: "Crafted with aerospace-grade anodized aluminum and memory foam acoustic earcups. Features custom-tuned 40mm drivers and next-generation hybrid active noise cancellation for complete sonic immersion.",
    features: [
      "Hybrid Active Noise Cancellation with Transparency Mode",
      "Up to 40 hours battery on a single USB-C charge",
      "Multi-point Bluetooth 5.3 connection",
      "Custom EQ presets via Lumina Companion app"
    ],
    inStock: true,
    stockCount: 18,
    isFeatured: true
  },
  {
    id: 2,
    name: "Apex 75% Mechanical Wireless Keyboard",
    tagline: "Gasket-mounted hot-swap switches in CNC aluminum",
    category: "tech",
    categoryLabel: "Audio & Tech",
    price: 159,
    originalPrice: 189,
    rating: 4.8,
    reviewsCount: 215,
    badge: "Sale -16%",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Charcoal Slate", hex: "#1E293B" },
      { name: "Arctic Chalk", hex: "#E2E8F0" },
      { name: "Sage Mist", hex: "#84A98C" }
    ],
    description: "Designed for tactile purists. The Apex features lubricated linear switches, sound-dampening silicone poron foam, and PBT dye-sublimated keycaps that resist shine over years of typing.",
    features: [
      "Hot-swappable 5-pin mechanical switch sockets",
      "Tri-mode connectivity: 2.4GHz dongle, Bluetooth 5.1 & Type-C",
      "Programmable multi-function rotary knob",
      "Custom south-facing RGB backlighting"
    ],
    inStock: true,
    stockCount: 9,
    isFeatured: true
  },
  {
    id: 3,
    name: "Ceramic Artisan Pour-Over Dripper Set",
    tagline: "Handcrafted matte ceramic brewer with olivewood stand",
    category: "home",
    categoryLabel: "Home & Living",
    price: 68,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 88,
    badge: "Handcrafted",
    badgeType: "neutral",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Raw Terracotta", hex: "#C86D51" },
      { name: "Basalt Black", hex: "#292F36" },
      { name: "Oatmeal Speckle", hex: "#D6CCC2" }
    ],
    description: "Engineered with spiral internal ribbing to regulate extraction rate and temperature stability. Hand-glazed by master ceramic artisans in Kyoto, finished with a sustainably sourced olivewood base.",
    features: [
      "High-fired durable stoneware clay",
      "Fits standard 02 cone filters",
      "Heat-retentive design for optimal coffee extraction",
      "Includes heat-resistant borosilicate glass carafe (600ml)"
    ],
    inStock: true,
    stockCount: 24,
    isFeatured: false
  },
  {
    id: 4,
    name: "Minimalist Chrono Sapphire Watch",
    tagline: "Japanese meca-quartz movement with Milanese mesh",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 235,
    originalPrice: 295,
    rating: 4.9,
    reviewsCount: 154,
    badge: "Popular",
    badgeType: "accent",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Midnight Noir", hex: "#0F172A" },
      { name: "Brushed Steel", hex: "#94A3B8" },
      { name: "Rose Champagne", hex: "#D4AF37" }
    ],
    description: "An understated statement of precision. Encased in 316L surgical stainless steel with an anti-reflective scratch-proof sapphire crystal dial that withstands everyday wear effortlessly.",
    features: [
      "Japanese Seiko meca-quartz hybrid caliber",
      "5 ATM / 50 meters water resistance",
      "Quick-release interchangeable strap mechanism",
      "Super-LumiNova luminescence on dial hands"
    ],
    inStock: true,
    stockCount: 12,
    isFeatured: true
  },
  {
    id: 5,
    name: "Heavyweight Merino Wool Overshirt",
    tagline: "Thermally adaptive 380gsm New Zealand wool",
    category: "apparel",
    categoryLabel: "Apparel",
    price: 145,
    originalPrice: 175,
    rating: 4.7,
    reviewsCount: 92,
    badge: "Eco-Blend",
    badgeType: "eco",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Forest Moss", hex: "#3B5249" },
      { name: "Dark Heather", hex: "#4B5563" },
      { name: "Warm Camel", hex: "#C59B6C" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "The ideal layer for transitional weather. Made from ethically sheared 100% merino wool that naturally repels odor, regulates body heat, and feels luxuriously soft against skin.",
    features: [
      "Natural water & odor resistant fibers",
      "Reinforced corozo nut buttons",
      "Two oversized chest patch utility pockets",
      "Pre-shrunk and tailored relaxed fit"
    ],
    inStock: true,
    stockCount: 15,
    isFeatured: true
  },
  {
    id: 6,
    name: "Aether Minimalist Smart Desk Lamp",
    tagline: "Circadian rhythm lighting with wireless fast-charging",
    category: "workspace",
    categoryLabel: "Workspace",
    price: 119,
    originalPrice: 149,
    rating: 4.8,
    reviewsCount: 178,
    badge: "Sale -20%",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Anodized Black", hex: "#111827" },
      { name: "Moon White", hex: "#F3F4F6" },
      { name: "Champagne Silver", hex: "#CBD5E1" }
    ],
    description: "Designed to elevate focus and preserve eye health. Emits flicker-free CRI 95+ light that automatically synchronizes with the sun's natural color temperature throughout your workday.",
    features: [
      "95+ High Color Rendering Index (CRI)",
      "Integrated 15W Qi wireless fast charging base",
      "Smooth stepless touch dimming & color temperature dial",
      "Ultra-low standby power consumption"
    ],
    inStock: true,
    stockCount: 22,
    isFeatured: false
  },
  {
    id: 7,
    name: "Full-Grain Italian Leather Bi-Fold Wallet",
    tagline: "Hand-stitched vegetable tanned Tuscan calfskin",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 75,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 310,
    badge: "Top Rated",
    badgeType: "accent",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Vintage Cognac", hex: "#8B4513" },
      { name: "Espresso Brown", hex: "#3D2B1F" },
      { name: "Stealth Black", hex: "#1C1917" }
    ],
    description: "Minimalist exterior with ample utility. Cut from premium certified Tuscan vegetable-tanned leather that develops a rich, personalized patina with every year of use.",
    features: [
      "Holds 8-12 cards plus full-length cash compartment",
      "Embedded RFID protection shield",
      "Beveled and burnished edges sealed with natural beeswax",
      "Ultra-slim 9mm profile when folded"
    ],
    inStock: true,
    stockCount: 31,
    isFeatured: false
  },
  {
    id: 8,
    name: "Solid Walnut Ergonomic Monitor Stand",
    tagline: "Elevate your display with integrated cable management",
    category: "workspace",
    categoryLabel: "Workspace",
    price: 129,
    originalPrice: 155,
    rating: 4.8,
    reviewsCount: 164,
    badge: "Limited Stock",
    badgeType: "warn",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "American Walnut", hex: "#5C4033" },
      { name: "Nordic Ash", hex: "#D2B48C" }
    ],
    description: "Carved from a single board of sustainable Appalachian walnut wood. Raises your monitor by 4.2 inches to align directly with eye level, reducing cervical spine strain during long work sessions.",
    features: [
      "Weight capacity up to 60 lbs (accommodates dual displays)",
      "Cork-padded feet to protect desk surfaces",
      "Stores standard 104-key keyboards underneath",
      "Natural organic matte oil and wax finish"
    ],
    inStock: true,
    stockCount: 6,
    isFeatured: true
  },
  {
    id: 9,
    name: "Lumina Soundflow Acoustic Speaker",
    tagline: "360-degree room-filling acoustic fabric speaker",
    category: "tech",
    categoryLabel: "Audio & Tech",
    price: 185,
    originalPrice: 220,
    rating: 4.9,
    reviewsCount: 142,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Slate Heather", hex: "#475569" },
      { name: "Nordic Cream", hex: "#EDE8F5" },
      { name: "Forest Olive", hex: "#40534C" }
    ],
    description: "Wrapped in Kvadrat recycled woolen acoustics textile. Employs dual passive radiators and a downward-firing woofer to deliver warm, chest-thumping bass and crystal clarity at any volume.",
    features: [
      "True 360-degree omnidirectional sound projection",
      "IPX6 water-resistant rating for indoor and patio use",
      "Stereo pairing: connect two units wirelessly",
      "24-hour continuous playback with battery saver mode"
    ],
    inStock: true,
    stockCount: 16,
    isFeatured: true
  },
  {
    id: 10,
    name: "Heavy Duty Waxed Canvas Everyday Tote",
    tagline: "Weatherproof 16oz cotton with bridle leather handles",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 89,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 119,
    badge: "Essential",
    badgeType: "neutral",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Field Tan", hex: "#B89758" },
      { name: "Deep Navy", hex: "#1A2A3A" },
      { name: "Charcoal Olive", hex: "#434B3E" }
    ],
    description: "Built to endure decades of daily commutes, weekend markets, and travel. Treated with bees-and-paraffin wax for rugged water repellency and vintage crease character.",
    features: [
      "Dedicated padded sleeve for laptops up to 16 inches",
      "Solid copper hand-hammered rivets",
      "Two interior slip pockets + key clip leash",
      "Reinforced double-layered bottom panel"
    ],
    inStock: true,
    stockCount: 19,
    isFeatured: false
  },
  {
    id: 11,
    name: "Thermodynamic Double-Wall Insulated Flask",
    tagline: "Keeps beverages 24h ice cold or 12h steaming hot",
    category: "home",
    categoryLabel: "Home & Living",
    price: 44,
    originalPrice: 52,
    rating: 4.9,
    reviewsCount: 204,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570570626315-95c1b65e99be?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Matte Sage", hex: "#7E9F8E" },
      { name: "Desert Dune", hex: "#E3DAC9" },
      { name: "Onyx Black", hex: "#18181B" }
    ],
    description: "Pro-grade 18/8 food-safe stainless steel vacuum insulation eliminates condensation and prevents flavor retention. Designed with a wide ergonomic spout and leak-proof bamboo cap.",
    features: [
      "750ml / 25oz capacity fits automotive cupholders",
      "Zero BPA, phthalates, or chemical liners",
      "Durable powder-coated tactile grip",
      "Lifetime leakproof vacuum seal guarantee"
    ],
    inStock: true,
    stockCount: 40,
    isFeatured: false
  },
  {
    id: 12,
    name: "Pure Cashmere Ribbed Fisherman Beanie",
    tagline: "Grade-A Mongolian cashmere with snug foldover cuff",
    category: "apparel",
    categoryLabel: "Apparel",
    price: 65,
    originalPrice: 85,
    rating: 4.8,
    reviewsCount: 77,
    badge: "Warmth",
    badgeType: "accent",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Oatmeal Melange", hex: "#E6DFD5" },
      { name: "Smoky Charcoal", hex: "#374151" },
      { name: "Midnight Navy", hex: "#1E3A8A" }
    ],
    sizes: ["One Size"],
    description: "Unrivaled featherlight warmth without itchiness. Knitted with 2-ply 100% fine Mongolian cashmere yarn using a traditional 7-gauge fisherman rib stitch.",
    features: [
      "100% sustainably sourced circular cashmere",
      "Adjustable cuff depth for slouchy or fitted wear",
      "Natural breathability prevents overheating",
      "Comes in recycled cotton gift pouch"
    ],
    inStock: true,
    stockCount: 14,
    isFeatured: false
  },
[
  {
    "id": 13,
    "name": "Nova Wireless Earbuds",
    "tagline": "Premium wireless earbuds designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 30,
    "originalPrice": null,
    "rating": 4.5,
    "reviewsCount": 204,
    "badge": "New Arrival",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina wireless earbuds combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 22,
    "isFeatured": true
  },
  {
    "id": 14,
    "name": "Nova Mechanical Keyboard",
    "tagline": "Premium mechanical keyboard designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 47,
    "originalPrice": 55.46,
    "rating": 4.6,
    "reviewsCount": 217,
    "badge": "New Arrival",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina mechanical keyboard combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 33,
    "isFeatured": false
  },
  {
    "id": 15,
    "name": "Apex Portable Bluetooth Speaker",
    "tagline": "Premium portable bluetooth speaker designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 64,
    "originalPrice": 75.52,
    "rating": 4.7,
    "reviewsCount": 230,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina portable bluetooth speaker combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 44,
    "isFeatured": false
  },
  {
    "id": 16,
    "name": "Apex 4K Webcam",
    "tagline": "Premium 4k webcam designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 81,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 243,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina 4k webcam combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 12,
    "isFeatured": false
  },
  {
    "id": 17,
    "name": "Orbit USB-C Hub",
    "tagline": "Premium usb-c hub designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 98,
    "originalPrice": 115.64,
    "rating": 4.9,
    "reviewsCount": 256,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina usb-c hub combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 23,
    "isFeatured": false
  },
  {
    "id": 18,
    "name": "Orbit Power Bank",
    "tagline": "Premium power bank designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 115,
    "originalPrice": 135.7,
    "rating": 4.4,
    "reviewsCount": 269,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina power bank combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 34,
    "isFeatured": false
  },
  {
    "id": 19,
    "name": "Pulse Smart Tracker",
    "tagline": "Premium smart tracker designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 132,
    "originalPrice": null,
    "rating": 4.5,
    "reviewsCount": 282,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina smart tracker combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 45,
    "isFeatured": false
  },
  {
    "id": 20,
    "name": "Pulse Desktop Microphone",
    "tagline": "Premium desktop microphone designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 149,
    "originalPrice": 175.82,
    "rating": 4.6,
    "reviewsCount": 295,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina desktop microphone combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 13,
    "isFeatured": false
  },
  {
    "id": 21,
    "name": "Vertex Gaming Mouse",
    "tagline": "Premium gaming mouse designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 166,
    "originalPrice": 195.88,
    "rating": 4.7,
    "reviewsCount": 308,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina gaming mouse combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 24,
    "isFeatured": false
  },
  {
    "id": 22,
    "name": "Vertex Noise-Isolating Earbuds",
    "tagline": "Premium noise-isolating earbuds designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 183,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 321,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina noise-isolating earbuds combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 35,
    "isFeatured": false
  },
  {
    "id": 23,
    "name": "Echo Wireless Earbuds",
    "tagline": "Premium wireless earbuds designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 200,
    "originalPrice": 236.0,
    "rating": 4.9,
    "reviewsCount": 334,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina wireless earbuds combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 46,
    "isFeatured": true
  },
  {
    "id": 24,
    "name": "Echo Mechanical Keyboard",
    "tagline": "Premium mechanical keyboard designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 217,
    "originalPrice": 256.06,
    "rating": 4.4,
    "reviewsCount": 347,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina mechanical keyboard combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 14,
    "isFeatured": false
  },
  {
    "id": 25,
    "name": "Sonic Portable Bluetooth Speaker",
    "tagline": "Premium portable bluetooth speaker designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 234,
    "originalPrice": null,
    "rating": 4.5,
    "reviewsCount": 360,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina portable bluetooth speaker combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 25,
    "isFeatured": false
  },
  {
    "id": 26,
    "name": "Sonic 4K Webcam",
    "tagline": "Premium 4k webcam designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 31,
    "originalPrice": 36.58,
    "rating": 4.6,
    "reviewsCount": 373,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina 4k webcam combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 36,
    "isFeatured": false
  },
  {
    "id": 27,
    "name": "Halo USB-C Hub",
    "tagline": "Premium usb-c hub designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 48,
    "originalPrice": 56.64,
    "rating": 4.7,
    "reviewsCount": 386,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina usb-c hub combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 47,
    "isFeatured": false
  },
  {
    "id": 28,
    "name": "Halo Power Bank",
    "tagline": "Premium power bank designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 65,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 399,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina power bank combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 15,
    "isFeatured": false
  },
  {
    "id": 29,
    "name": "Flux Smart Tracker",
    "tagline": "Premium smart tracker designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 82,
    "originalPrice": 96.76,
    "rating": 4.9,
    "reviewsCount": 412,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina smart tracker combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 26,
    "isFeatured": false
  },
  {
    "id": 30,
    "name": "Flux Desktop Microphone",
    "tagline": "Premium desktop microphone designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 99,
    "originalPrice": 116.82,
    "rating": 4.4,
    "reviewsCount": 35,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina desktop microphone combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 37,
    "isFeatured": false
  },
  {
    "id": 31,
    "name": "Zenith Gaming Mouse",
    "tagline": "Premium gaming mouse designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 116,
    "originalPrice": null,
    "rating": 4.5,
    "reviewsCount": 48,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina gaming mouse combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 48,
    "isFeatured": false
  },
  {
    "id": 32,
    "name": "Zenith Noise-Isolating Earbuds",
    "tagline": "Premium noise-isolating earbuds designed for modern everyday use",
    "category": "tech",
    "categoryLabel": "Audio & Tech",
    "price": 133,
    "originalPrice": 156.94,
    "rating": 4.6,
    "reviewsCount": 61,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina noise-isolating earbuds combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 16,
    "isFeatured": false
  },
  {
    "id": 33,
    "name": "Cedar Desk Organizer",
    "tagline": "Premium desk organizer designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 150,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 74,
    "badge": "New Arrival",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina desk organizer combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 27,
    "isFeatured": true
  },
  {
    "id": 34,
    "name": "Cedar Laptop Stand",
    "tagline": "Premium laptop stand designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 167,
    "originalPrice": 197.06,
    "rating": 4.8,
    "reviewsCount": 87,
    "badge": "New Arrival",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina laptop stand combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 38,
    "isFeatured": false
  },
  {
    "id": 35,
    "name": "Atlas Desk Mat",
    "tagline": "Premium desk mat designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 184,
    "originalPrice": 217.12,
    "rating": 4.9,
    "reviewsCount": 100,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina desk mat combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 49,
    "isFeatured": false
  },
  {
    "id": 36,
    "name": "Atlas Monitor Light Bar",
    "tagline": "Premium monitor light bar designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 201,
    "originalPrice": null,
    "rating": 4.4,
    "reviewsCount": 113,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina monitor light bar combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 17,
    "isFeatured": false
  },
  {
    "id": 37,
    "name": "Form Cable Management Kit",
    "tagline": "Premium cable management kit designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 218,
    "originalPrice": 257.24,
    "rating": 4.5,
    "reviewsCount": 126,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina cable management kit combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 28,
    "isFeatured": false
  },
  {
    "id": 38,
    "name": "Form Ergonomic Footrest",
    "tagline": "Premium ergonomic footrest designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 235,
    "originalPrice": 277.3,
    "rating": 4.6,
    "reviewsCount": 139,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina ergonomic footrest combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 39,
    "isFeatured": false
  },
  {
    "id": 39,
    "name": "Arc Document Tray",
    "tagline": "Premium document tray designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 32,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 152,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina document tray combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 50,
    "isFeatured": false
  },
  {
    "id": 40,
    "name": "Arc Pen Holder",
    "tagline": "Premium pen holder designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 49,
    "originalPrice": 57.82,
    "rating": 4.8,
    "reviewsCount": 165,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina pen holder combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 18,
    "isFeatured": false
  },
  {
    "id": 41,
    "name": "Mono Desk Shelf",
    "tagline": "Premium desk shelf designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 66,
    "originalPrice": 77.88,
    "rating": 4.9,
    "reviewsCount": 178,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina desk shelf combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 29,
    "isFeatured": false
  },
  {
    "id": 42,
    "name": "Mono Task Timer",
    "tagline": "Premium task timer designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 83,
    "originalPrice": null,
    "rating": 4.4,
    "reviewsCount": 191,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina task timer combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 40,
    "isFeatured": false
  },
  {
    "id": 43,
    "name": "Grid Desk Organizer",
    "tagline": "Premium desk organizer designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 100,
    "originalPrice": 118.0,
    "rating": 4.5,
    "reviewsCount": 204,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina desk organizer combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 8,
    "isFeatured": true
  },
  {
    "id": 44,
    "name": "Grid Laptop Stand",
    "tagline": "Premium laptop stand designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 117,
    "originalPrice": 138.06,
    "rating": 4.6,
    "reviewsCount": 217,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina laptop stand combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 19,
    "isFeatured": false
  },
  {
    "id": 45,
    "name": "Lumen Desk Mat",
    "tagline": "Premium desk mat designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 134,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 230,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina desk mat combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 30,
    "isFeatured": false
  },
  {
    "id": 46,
    "name": "Lumen Monitor Light Bar",
    "tagline": "Premium monitor light bar designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 151,
    "originalPrice": 178.18,
    "rating": 4.8,
    "reviewsCount": 243,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina monitor light bar combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 41,
    "isFeatured": false
  },
  {
    "id": 47,
    "name": "Slate Cable Management Kit",
    "tagline": "Premium cable management kit designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 168,
    "originalPrice": 198.24,
    "rating": 4.9,
    "reviewsCount": 256,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina cable management kit combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 9,
    "isFeatured": false
  },
  {
    "id": 48,
    "name": "Slate Ergonomic Footrest",
    "tagline": "Premium ergonomic footrest designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 185,
    "originalPrice": null,
    "rating": 4.4,
    "reviewsCount": 269,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina ergonomic footrest combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 20,
    "isFeatured": false
  },
  {
    "id": 49,
    "name": "Axis Document Tray",
    "tagline": "Premium document tray designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 202,
    "originalPrice": 238.36,
    "rating": 4.5,
    "reviewsCount": 282,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina document tray combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 31,
    "isFeatured": false
  },
  {
    "id": 50,
    "name": "Axis Pen Holder",
    "tagline": "Premium pen holder designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 219,
    "originalPrice": 258.42,
    "rating": 4.6,
    "reviewsCount": 295,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina pen holder combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 42,
    "isFeatured": false
  },
  {
    "id": 51,
    "name": "Craft Desk Shelf",
    "tagline": "Premium desk shelf designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 236,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 308,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina desk shelf combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isFeatured": false
  },
  {
    "id": 52,
    "name": "Craft Task Timer",
    "tagline": "Premium task timer designed for modern everyday use",
    "category": "workspace",
    "categoryLabel": "Workspace",
    "price": 33,
    "originalPrice": 38.94,
    "rating": 4.8,
    "reviewsCount": 321,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina task timer combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 21,
    "isFeatured": false
  },
  {
    "id": 53,
    "name": "Mori Ceramic Vase",
    "tagline": "Premium ceramic vase designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 50,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 334,
    "badge": "New Arrival",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina ceramic vase combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 32,
    "isFeatured": true
  },
  {
    "id": 54,
    "name": "Mori Linen Cushion",
    "tagline": "Premium linen cushion designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 67,
    "originalPrice": 79.06,
    "rating": 4.4,
    "reviewsCount": 347,
    "badge": "New Arrival",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina linen cushion combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 43,
    "isFeatured": false
  },
  {
    "id": 55,
    "name": "Terra Stoneware Mug",
    "tagline": "Premium stoneware mug designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 84,
    "originalPrice": 99.12,
    "rating": 4.5,
    "reviewsCount": 360,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina stoneware mug combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 11,
    "isFeatured": false
  },
  {
    "id": 56,
    "name": "Terra Scented Candle",
    "tagline": "Premium scented candle designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 101,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 373,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina scented candle combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 22,
    "isFeatured": false
  },
  {
    "id": 57,
    "name": "Luna Serving Tray",
    "tagline": "Premium serving tray designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 118,
    "originalPrice": 139.24,
    "rating": 4.7,
    "reviewsCount": 386,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina serving tray combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 33,
    "isFeatured": false
  },
  {
    "id": 58,
    "name": "Luna Glass Carafe",
    "tagline": "Premium glass carafe designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 135,
    "originalPrice": 159.3,
    "rating": 4.8,
    "reviewsCount": 399,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina glass carafe combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 44,
    "isFeatured": false
  },
  {
    "id": 59,
    "name": "Sol Wool Throw",
    "tagline": "Premium wool throw designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 152,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 412,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina wool throw combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 12,
    "isFeatured": false
  },
  {
    "id": 60,
    "name": "Sol Planter",
    "tagline": "Premium planter designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 169,
    "originalPrice": 199.42,
    "rating": 4.4,
    "reviewsCount": 35,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina planter combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 23,
    "isFeatured": false
  },
  {
    "id": 61,
    "name": "Haven Table Clock",
    "tagline": "Premium table clock designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 186,
    "originalPrice": 219.48,
    "rating": 4.5,
    "reviewsCount": 48,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina table clock combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 34,
    "isFeatured": false
  },
  {
    "id": 62,
    "name": "Haven Storage Basket",
    "tagline": "Premium storage basket designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 203,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 61,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina storage basket combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 45,
    "isFeatured": false
  },
  {
    "id": 63,
    "name": "Olive Ceramic Vase",
    "tagline": "Premium ceramic vase designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 220,
    "originalPrice": 259.6,
    "rating": 4.7,
    "reviewsCount": 74,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina ceramic vase combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 13,
    "isFeatured": true
  },
  {
    "id": 64,
    "name": "Olive Linen Cushion",
    "tagline": "Premium linen cushion designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 237,
    "originalPrice": 279.66,
    "rating": 4.8,
    "reviewsCount": 87,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina linen cushion combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 24,
    "isFeatured": false
  },
  {
    "id": 65,
    "name": "Sora Stoneware Mug",
    "tagline": "Premium stoneware mug designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 34,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 100,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina stoneware mug combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 35,
    "isFeatured": false
  },
  {
    "id": 66,
    "name": "Sora Scented Candle",
    "tagline": "Premium scented candle designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 51,
    "originalPrice": 60.18,
    "rating": 4.4,
    "reviewsCount": 113,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina scented candle combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 46,
    "isFeatured": false
  },
  {
    "id": 67,
    "name": "Nara Serving Tray",
    "tagline": "Premium serving tray designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 68,
    "originalPrice": 80.24,
    "rating": 4.5,
    "reviewsCount": 126,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina serving tray combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 14,
    "isFeatured": false
  },
  {
    "id": 68,
    "name": "Nara Glass Carafe",
    "tagline": "Premium glass carafe designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 85,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 139,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina glass carafe combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 25,
    "isFeatured": false
  },
  {
    "id": 69,
    "name": "Dune Wool Throw",
    "tagline": "Premium wool throw designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 102,
    "originalPrice": 120.36,
    "rating": 4.7,
    "reviewsCount": 152,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina wool throw combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 36,
    "isFeatured": false
  },
  {
    "id": 70,
    "name": "Dune Planter",
    "tagline": "Premium planter designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 119,
    "originalPrice": 140.42,
    "rating": 4.8,
    "reviewsCount": 165,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina planter combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 47,
    "isFeatured": false
  },
  {
    "id": 71,
    "name": "Cove Table Clock",
    "tagline": "Premium table clock designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 136,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 178,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina table clock combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 15,
    "isFeatured": false
  },
  {
    "id": 72,
    "name": "Cove Storage Basket",
    "tagline": "Premium storage basket designed for modern everyday use",
    "category": "home",
    "categoryLabel": "Home & Living",
    "price": 153,
    "originalPrice": 180.54,
    "rating": 4.4,
    "reviewsCount": 191,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina storage basket combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 26,
    "isFeatured": false
  },
  {
    "id": 73,
    "name": "Essential Cotton Overshirt",
    "tagline": "Premium cotton overshirt designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 170,
    "originalPrice": null,
    "rating": 4.5,
    "reviewsCount": 204,
    "badge": "New Arrival",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina cotton overshirt combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 37,
    "isFeatured": true
  },
  {
    "id": 74,
    "name": "Essential Merino T-Shirt",
    "tagline": "Premium merino t-shirt designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 187,
    "originalPrice": 220.66,
    "rating": 4.6,
    "reviewsCount": 217,
    "badge": "New Arrival",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina merino t-shirt combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 48,
    "isFeatured": false
  },
  {
    "id": 75,
    "name": "Heritage Linen Shirt",
    "tagline": "Premium linen shirt designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 204,
    "originalPrice": 240.72,
    "rating": 4.7,
    "reviewsCount": 230,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina linen shirt combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 16,
    "isFeatured": false
  },
  {
    "id": 76,
    "name": "Heritage Relaxed Trousers",
    "tagline": "Premium relaxed trousers designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 221,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 243,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina relaxed trousers combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 27,
    "isFeatured": false
  },
  {
    "id": 77,
    "name": "Studio Wool Cardigan",
    "tagline": "Premium wool cardigan designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 238,
    "originalPrice": 280.84,
    "rating": 4.9,
    "reviewsCount": 256,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina wool cardigan combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 38,
    "isFeatured": false
  },
  {
    "id": 78,
    "name": "Studio Canvas Jacket",
    "tagline": "Premium canvas jacket designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 35,
    "originalPrice": 41.3,
    "rating": 4.4,
    "reviewsCount": 269,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina canvas jacket combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 49,
    "isFeatured": false
  },
  {
    "id": 79,
    "name": "Everyday Knit Polo",
    "tagline": "Premium knit polo designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 52,
    "originalPrice": null,
    "rating": 4.5,
    "reviewsCount": 282,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina knit polo combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 17,
    "isFeatured": false
  },
  {
    "id": 80,
    "name": "Everyday Everyday Hoodie",
    "tagline": "Premium everyday hoodie designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 69,
    "originalPrice": 81.42,
    "rating": 4.6,
    "reviewsCount": 295,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina everyday hoodie combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 28,
    "isFeatured": false
  },
  {
    "id": 81,
    "name": "Coastal Oxford Shirt",
    "tagline": "Premium oxford shirt designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 86,
    "originalPrice": 101.48,
    "rating": 4.7,
    "reviewsCount": 308,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina oxford shirt combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 39,
    "isFeatured": false
  },
  {
    "id": 82,
    "name": "Coastal Travel Joggers",
    "tagline": "Premium travel joggers designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 103,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 321,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina travel joggers combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 50,
    "isFeatured": false
  },
  {
    "id": 83,
    "name": "Urban Cotton Overshirt",
    "tagline": "Premium cotton overshirt designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 120,
    "originalPrice": 141.6,
    "rating": 4.9,
    "reviewsCount": 334,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina cotton overshirt combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 18,
    "isFeatured": true
  },
  {
    "id": 84,
    "name": "Urban Merino T-Shirt",
    "tagline": "Premium merino t-shirt designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 137,
    "originalPrice": 161.66,
    "rating": 4.4,
    "reviewsCount": 347,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina merino t-shirt combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 29,
    "isFeatured": false
  },
  {
    "id": 85,
    "name": "Field Linen Shirt",
    "tagline": "Premium linen shirt designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 154,
    "originalPrice": null,
    "rating": 4.5,
    "reviewsCount": 360,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina linen shirt combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 40,
    "isFeatured": false
  },
  {
    "id": 86,
    "name": "Field Relaxed Trousers",
    "tagline": "Premium relaxed trousers designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 171,
    "originalPrice": 201.78,
    "rating": 4.6,
    "reviewsCount": 373,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina relaxed trousers combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 8,
    "isFeatured": false
  },
  {
    "id": 87,
    "name": "Relaxed Wool Cardigan",
    "tagline": "Premium wool cardigan designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 188,
    "originalPrice": 221.84,
    "rating": 4.7,
    "reviewsCount": 386,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina wool cardigan combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 19,
    "isFeatured": false
  },
  {
    "id": 88,
    "name": "Relaxed Canvas Jacket",
    "tagline": "Premium canvas jacket designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 205,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 399,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina canvas jacket combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 30,
    "isFeatured": false
  },
  {
    "id": 89,
    "name": "Classic Knit Polo",
    "tagline": "Premium knit polo designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 222,
    "originalPrice": 261.96,
    "rating": 4.9,
    "reviewsCount": 412,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina knit polo combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 41,
    "isFeatured": false
  },
  {
    "id": 90,
    "name": "Classic Everyday Hoodie",
    "tagline": "Premium everyday hoodie designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 239,
    "originalPrice": 282.02,
    "rating": 4.4,
    "reviewsCount": 35,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina everyday hoodie combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 9,
    "isFeatured": false
  },
  {
    "id": 91,
    "name": "Modern Oxford Shirt",
    "tagline": "Premium oxford shirt designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 36,
    "originalPrice": null,
    "rating": 4.5,
    "reviewsCount": 48,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina oxford shirt combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 20,
    "isFeatured": false
  },
  {
    "id": 92,
    "name": "Modern Travel Joggers",
    "tagline": "Premium travel joggers designed for modern everyday use",
    "category": "apparel",
    "categoryLabel": "Apparel",
    "price": 53,
    "originalPrice": 62.54,
    "rating": 4.6,
    "reviewsCount": 61,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A carefully finished Lumina travel joggers combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 31,
    "isFeatured": false
  },
  {
    "id": 93,
    "name": "Civic Leather Card Holder",
    "tagline": "Premium leather card holder designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 70,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 74,
    "badge": "New Arrival",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina leather card holder combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 42,
    "isFeatured": true
  },
  {
    "id": 94,
    "name": "Civic Canvas Tote",
    "tagline": "Premium canvas tote designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 87,
    "originalPrice": 102.66,
    "rating": 4.8,
    "reviewsCount": 87,
    "badge": "New Arrival",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina canvas tote combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isFeatured": false
  },
  {
    "id": 95,
    "name": "Nomad Travel Pouch",
    "tagline": "Premium travel pouch designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 104,
    "originalPrice": 122.72,
    "rating": 4.9,
    "reviewsCount": 100,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina travel pouch combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 21,
    "isFeatured": false
  },
  {
    "id": 96,
    "name": "Nomad Key Organizer",
    "tagline": "Premium key organizer designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 121,
    "originalPrice": null,
    "rating": 4.4,
    "reviewsCount": 113,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina key organizer combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 32,
    "isFeatured": false
  },
  {
    "id": 97,
    "name": "Atelier Leather Belt",
    "tagline": "Premium leather belt designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 138,
    "originalPrice": 162.84,
    "rating": 4.5,
    "reviewsCount": 126,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina leather belt combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 43,
    "isFeatured": false
  },
  {
    "id": 98,
    "name": "Atelier Sunglasses",
    "tagline": "Premium sunglasses designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 155,
    "originalPrice": 182.9,
    "rating": 4.6,
    "reviewsCount": 139,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina sunglasses combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 11,
    "isFeatured": false
  },
  {
    "id": 99,
    "name": "Voyage Passport Wallet",
    "tagline": "Premium passport wallet designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 172,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 152,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina passport wallet combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 22,
    "isFeatured": false
  },
  {
    "id": 100,
    "name": "Voyage Minimal Backpack",
    "tagline": "Premium minimal backpack designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 189,
    "originalPrice": 223.02,
    "rating": 4.8,
    "reviewsCount": 165,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina minimal backpack combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 33,
    "isFeatured": false
  },
  {
    "id": 101,
    "name": "Foundry Watch Strap",
    "tagline": "Premium watch strap designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 206,
    "originalPrice": 243.08,
    "rating": 4.9,
    "reviewsCount": 178,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina watch strap combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 44,
    "isFeatured": false
  },
  {
    "id": 102,
    "name": "Foundry Tech Organizer",
    "tagline": "Premium tech organizer designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 223,
    "originalPrice": null,
    "rating": 4.4,
    "reviewsCount": 191,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina tech organizer combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 12,
    "isFeatured": false
  },
  {
    "id": 103,
    "name": "Mercer Leather Card Holder",
    "tagline": "Premium leather card holder designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 240,
    "originalPrice": 283.2,
    "rating": 4.5,
    "reviewsCount": 204,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina leather card holder combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 23,
    "isFeatured": true
  },
  {
    "id": 104,
    "name": "Mercer Canvas Tote",
    "tagline": "Premium canvas tote designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 37,
    "originalPrice": 43.66,
    "rating": 4.6,
    "reviewsCount": 217,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina canvas tote combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 34,
    "isFeatured": false
  },
  {
    "id": 105,
    "name": "Terra Travel Pouch",
    "tagline": "Premium travel pouch designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 54,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 230,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina travel pouch combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 45,
    "isFeatured": false
  },
  {
    "id": 106,
    "name": "Terra Key Organizer",
    "tagline": "Premium key organizer designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 71,
    "originalPrice": 83.78,
    "rating": 4.8,
    "reviewsCount": 243,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina key organizer combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 13,
    "isFeatured": false
  },
  {
    "id": 107,
    "name": "North Leather Belt",
    "tagline": "Premium leather belt designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 88,
    "originalPrice": 103.84,
    "rating": 4.9,
    "reviewsCount": 256,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina leather belt combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 24,
    "isFeatured": false
  },
  {
    "id": 108,
    "name": "North Sunglasses",
    "tagline": "Premium sunglasses designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 105,
    "originalPrice": null,
    "rating": 4.4,
    "reviewsCount": 269,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina sunglasses combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 35,
    "isFeatured": false
  },
  {
    "id": 109,
    "name": "Mason Passport Wallet",
    "tagline": "Premium passport wallet designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 122,
    "originalPrice": 143.96,
    "rating": 4.5,
    "reviewsCount": 282,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina passport wallet combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 46,
    "isFeatured": false
  },
  {
    "id": 110,
    "name": "Mason Minimal Backpack",
    "tagline": "Premium minimal backpack designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 139,
    "originalPrice": 164.02,
    "rating": 4.6,
    "reviewsCount": 295,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina minimal backpack combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 14,
    "isFeatured": false
  },
  {
    "id": 111,
    "name": "Avenue Watch Strap",
    "tagline": "Premium watch strap designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 156,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 308,
    "badge": "Bestseller",
    "badgeType": "accent",
    "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina watch strap combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 25,
    "isFeatured": false
  },
  {
    "id": 112,
    "name": "Avenue Tech Organizer",
    "tagline": "Premium tech organizer designed for modern everyday use",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 173,
    "originalPrice": 204.14,
    "rating": 4.8,
    "reviewsCount": 321,
    "badge": null,
    "badgeType": null,
    "image": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800&auto=format&fit=crop&q=80"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#374151"
      },
      {
        "name": "Natural",
        "hex": "#D6C7B2"
      },
      {
        "name": "Midnight",
        "hex": "#1E293B"
      }
    ],
    "sizes": [],
    "description": "A carefully finished Lumina tech organizer combining durable materials, restrained design, and practical everyday performance.",
    "features": [
      "Premium materials and durable construction",
      "Designed for daily use",
      "Quality-checked before dispatch",
      "Plastic-conscious packaging"
    ],
    "inStock": true,
    "stockCount": 36,
    "isFeatured": false
  }
]
];

const TESTIMONIALS = [
  {
    id: 1,
    author: "Elena Rostova",
    role: "Architectural Designer, NYC",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2 days ago",
    text: "The build quality of the Aura Headphones and Walnut Riser blew my expectations away. It's rare to find an online store where the physical product looks even more stunning in person than on screen.",
    product: "Aura Studio Headphones"
  },
  {
    id: 2,
    author: "Marcus Vance",
    role: "Software Engineer, San Francisco",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "1 week ago",
    text: "The Apex keyboard is an absolute dream to type on. Fast shipping, plastic-free packaging, and incredible customer support. Lumina has become my go-to store for workspace essentials.",
    product: "Apex 75% Keyboard"
  },
  {
    id: 3,
    author: "Sophia Chen",
    role: "Creative Director, London",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "3 weeks ago",
    text: "Decent colors, impeccable materials, and timeless aesthetic. The ceramic pour-over set transformed my morning routine completely. You can feel the intention behind every curated item.",
    product: "Artisan Pour-Over Set"
  }
];

const PROMO_CODES = {
  "LUMINA20": { discountPercent: 20, description: "20% Flash Storewide Discount" },
  "WELCOME10": { discountFixed: 10, description: "$10 Welcome Credit on orders $50+" },
  "FREESHIP": { freeShipping: true, description: "Instant Free Express Shipping" }
};
