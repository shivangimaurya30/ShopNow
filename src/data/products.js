const products = [
  // Grocery & Vegetables
  {
    id: 1,
    name: "Fresh Organic Fruits",
    price: 89,
    originalPrice: 120,
    category: "grocery",
    subcategory: "fruits",
    image: "https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.5,
    reviews: 128,
    description: "Premium quality organic bananas, naturally ripened and packed with nutrients. Perfect for smoothies, baking, or healthy snacking.",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Fresh Organic Tomatoes",
    price: 60,
    originalPrice: 80,
    category: "grocery",
    subcategory: "vegetables",
    image: "https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.3,
    reviews: 89,
    description: "Vine-ripened organic tomatoes bursting with flavor. Ideal for salads, cooking, and sauces.",
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: "Premium Basmati Rice 5kg",
    price: 450,
    originalPrice: 550,
    category: "grocery",
    subcategory: "grains",
    image: "https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.7,
    reviews: 256,
    description: "Aged premium basmati rice with extra long grains and aromatic fragrance. Perfect for biryanis and pilafs.",
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Fresh vegetables",
    price: 25,
    originalPrice: 35,
    category: "grocery",
    subcategory: "vegetables",
    image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.2,
    reviews: 67,
    description: "Fresh, crisp spinach leaves rich in iron and vitamins. Perfect for salads, smoothies, and cooking.",
    inStock: true,
    featured: true
  },

  // Electronics
  {
    id: 5,
    name: "Wireless Earbuds Pro ",
    price: 2999,
    originalPrice: 3999,
    category: "electronics",
    subcategory: "audio",
    image: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.8,
    reviews: 1024,
    description: "Active Noise Cancellation, Transparency mode, and spatial audio. The ultimate listening experience.",
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Smart LED TV 55 inch ",
    price: 35999,
    originalPrice: 45999,
    category: "electronics",
    subcategory: "tv",
    image: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.6,
    reviews: 342,
    description: "Crystal clear 4K display with smart TV features, HDR support, and built-in streaming apps.",
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Gaming Laptop Pro ",
    price: 65999,
    originalPrice: 75999,
    category: "electronics",
    subcategory: "computers",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.9,
    reviews: 789,
    description: "High-performance gaming laptop with latest processor. Perfect for gaming and professional work.",
    inStock: true,
    featured: true
  },

  // Beauty & Personal Care
  {
    id: 8,
    name: "Moisturizing Face Cream",
    price: 899,
    originalPrice: 1199,
    category: "beauty",
    subcategory: "skincare",
    image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.4,
    reviews: 167,
    description: "Hydrating face cream with hyaluronic acid and vitamin E. Suitable for all skin types.",
    inStock: true,
    featured: false
  },
  {
    id: 9,
    name: "Premium Hair Shampoo ",
    price: 549,
    originalPrice: 699,
    category: "beauty",
    subcategory: "hair-care",
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.2,
    reviews: 93,
    description: "Nourishing shampoo with natural ingredients for healthy, shiny hair.",
    inStock: true,
    featured: false
  },

  // Kitchenware & Appliances
  {
    id: 10,
    name: "Stainless Steel Cookware Set ",
    price: 4999,
    originalPrice: 6999,
    category: "kitchenware",
    subcategory: "cookware",
    image: "https://majesticchef.pk/cdn/shop/files/GlSet.jpg?v=1721814555",
    rating: 4.7,
    reviews: 234,
    description: "Professional-grade 10-piece stainless steel cookware set. Dishwasher safe and induction compatible.",
    inStock: true,
    featured: true
  },
  {
    id: 11,
    name: "Digital Air Fryer",
    price: 3499,
    originalPrice: 4999,
    category: "kitchenware",
    subcategory: "appliances",
    image: "https://www.kent.co.in/images/enlarge/Enlarge-Banner-Air-Fryer-4L.png",
    rating: 4.5,
    reviews: 456,
    description: "5.8L digital air fryer with 8 preset cooking programs. Cook healthier with 85% less oil.",
    inStock: true,
    featured: true
  },

  // Home & Lifestyle
  {
    id: 12,
    name: "Luxury Bed Sheet Set 🛏️",
    price: 1999,
    originalPrice: 2999,
    category: "home-lifestyle",
    subcategory: "bedding",
    image: "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.6,
    reviews: 189,
    description: "Ultra-soft microfiber bed sheet set. Wrinkle-resistant and hypoallergenic.",
    inStock: true,
    featured: false
  },
  {
    id: 13,
    name: "Modern Table Lamp 💡",
    price: 1299,
    originalPrice: 1799,
    category: "home-lifestyle",
    subcategory: "lighting",
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.3,
    reviews: 76,
    description: "Minimalist design table lamp with adjustable brightness. Perfect for reading and ambiance.",
    inStock: true,
    featured: false
  },

  // Cleaners & Repellents
  {
    id: 14,
    name: "Multi-Purpose Cleaner 🧽",
    price: 299,
    originalPrice: 399,
    category: "cleaners",
    subcategory: "cleaners",
    image: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.4,
    reviews: 312,
    description: "Eco-friendly all-purpose cleaner. Safe for all surfaces and family-friendly.",
    inStock: true,
    featured: false
  },
  {
    id: 15,
    name: "Mosquito Repellent Spray 🦟",
    price: 199,
    originalPrice: 249,
    category: "cleaners",
    subcategory: "repellents",
    image: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.5,
    reviews: 428,
    description: "Natural mosquito repellent spray. Long-lasting protection for the whole family.",
    inStock: true,
    featured: false
  },

  // Stationery & Games
  {
    id: 16,
    name: "Premium Notebook Set 📚",
    price: 699,
    originalPrice: 899,
    category: "stationery",
    subcategory: "notebooks",
    image: "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.3,
    reviews: 85,
    description: "Set of 3 premium notebooks with dotted pages. Perfect for journaling and note-taking.",
    inStock: true,
    featured: false
  },
  {
    id: 17,
    name: "Strategy Board Game 🎲",
    price: 1299,
    originalPrice: 1699,
    category: "stationery",
    subcategory: "games",
    image: "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.7,
    reviews: 156,
    description: "Award-winning strategy board game for 2-4 players. Perfect for family game nights.",
    inStock: true,
    featured: false
  }
];

export const categories = [
  {
    id: "grocery",
    name: "Grocery & Vegetables",
    icon: "🥬",
    subcategories: ["fruits", "vegetables", "grains", "dairy", "snacks"]
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: "📱",
    subcategories: ["audio", "tv", "computers", "phones", "accessories"]
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    icon: "💄",
    subcategories: ["skincare", "hair-care", "makeup", "fragrances", "men-care", "kids-care"]
  },
  {
    id: "kitchenware",
    name: "Kitchenware & Appliances",
    icon: "🍳",
    subcategories: ["cookware", "appliances", "utensils", "storage", "dining"]
  },
  {
    id: "home-lifestyle",
    name: "Home & Lifestyle",
    icon: "🏠",
    subcategories: ["bedding", "lighting", "decor", "furniture", "garden"]
  },
  {
    id: "cleaners",
    name: "Cleaners & Repellents",
    icon: "🧹",
    subcategories: ["cleaners", "repellents", "laundry", "storage", "maintenance"]
  },
  {
    id: "stationery",
    name: "Stationery & Games",
    icon: "📚",
    subcategories: ["notebooks", "pens", "games", "office", "art-supplies"]
  }
];

export default products;