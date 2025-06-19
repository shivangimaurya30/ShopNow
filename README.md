# 🛍️ ShopNow - E-commerce Frontend

ShopNow is a modern, responsive e-commerce frontend built using **React.js**, **Tailwind CSS**, **HTML5**, and **JavaScript (ES6+)**. This project features a clean white and green UI, dynamic product pages, a cart system with localStorage support, and smooth navigation.

### 🌐 Live Site
👉 [https://shopnow-by-shivangi.netlify.app](https://shopnow-by-shivangi.netlify.app)

---

## 📌 Features

- 🛒 **Add to Cart**, Remove, Quantity Change
- 🧮 **Total Price Calculation** & Cart Summary
- 🔍 **Search, Filter, and Sort** Products
- 💚 **Fully Responsive** UI (Mobile/Desktop)
- 🏷️ **Indian Currency ₹** Support
- 🥦 **Grocery, Kitchenware, Stationery & More**
- 📦 **LocalStorage** for persisting cart data
- 🧭 **React Router** for page navigation
- 🖼️ **Hero Banner** with grocery/vegetable imagery
  
---

## 🧪 Pages

| Page | Description |
|------|-------------|
| 🏠 Home | Hero Banner, Featured Products, Category Filters |
| 🛍️ Products | Filter by category & price, sort, search |
| 📄 Product Detail | Carousel, Ratings, ₹ Price, Description |
| 🛒 Cart | Add, remove, update quantity, total calculation |
| 💳 Checkout | Name, address form, fake Pay Now button |
| ✅ Thank You | Order confirmation message |
| ❌ 404 Page | Optional not found page |

---

## 🧩 Components

- `Navbar` – navigation links
- `Footer` – contact & socials
- `ProductCard` – reusable item display
- `CartItem` – for items inside the cart
- `QuantitySelector` – increase/decrease quantity
- `SearchBar`, `ProductFilter`, `Toast` (optional)

---

## 🗂️ Folder Structure

```bash
ecommerce-frontend/
├── public/                # favicon, index.html
├── src/
│   ├── assets/            # images, icons
│   ├── components/        # Navbar, Footer, etc.
│   ├── pages/             # Home, Cart, Products, etc.
│   ├── data/              # products.js (dummy data)
│   ├── contexts/          # (optional) Cart context API
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── tailwind.config.js

---
```bash


## 🛠 Tech Stack Used

- **React.js**

---

## 🚀 Deployment

This project is deployed via **Netlify**:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

🔗 **Visit Live Site:** [shopnow-by-shivangi.netlify.app](https://shopnow-by-shivangi.netlify.app)





