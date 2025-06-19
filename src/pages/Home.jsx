import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import products, { categories } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Vegetable Banner */}
      <section className="relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Vegetable Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">🥕</div>
          <div className="absolute top-20 right-20 text-5xl animate-pulse">🥬</div>
          <div className="absolute bottom-20 left-20 text-7xl animate-bounce delay-300">🍅</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-pulse delay-500">🥒</div>
          <div className="absolute top-1/2 left-1/4 text-4xl animate-bounce delay-700">🌽</div>
          <div className="absolute top-1/3 right-1/3 text-5xl animate-pulse delay-1000">🥔</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                ShopNow 🛒
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto animate-fade-in-delay">
              Discover fresh groceries 🥬, amazing electronics 📱, beauty products 💄, and everything you need at unbeatable prices! 
            </p>
            
            {/* Central Vegetable Banner */}
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 mb-8 mx-auto max-w-4xl border border-white border-opacity-30">
              <div className="flex flex-wrap justify-center items-center gap-4 text-4xl md:text-6xl">
                <span className="animate-bounce">🥕</span>
                <span className="animate-pulse">🥬</span>
                <span className="animate-bounce delay-300">🍅</span>
                <span className="animate-pulse delay-500">🥒</span>
                <span className="animate-bounce delay-700">🌽</span>
                <span className="animate-pulse delay-1000">🥔</span>
                <span className="animate-bounce delay-1200">🍆</span>
                <span className="animate-pulse delay-1500">🥦</span>
              </div>
              <p className="text-white text-lg mt-4 font-semibold">
                Fresh • Organic • Delivered to Your Door 🚚
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-green-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Shop Now 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/products?category=grocery"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-full transition-all duration-200"
              >
                Fresh Groceries 
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Delivery 🚚</h3>
              <p className="text-gray-600">Free shipping on orders over ₹500</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payment 🔒</h3>
              <p className="text-gray-600">100% secure payment processing</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-700 to-green-800 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support 📞</h3>
              <p className="text-gray-600">Round-the-clock customer service</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Returns 🔄</h3>
              <p className="text-gray-600">30-day hassle-free returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category 
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our wide range of categories to find exactly what you're looking for 🔍
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-green-200"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products ⭐
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of premium products at amazing prices 💰
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              View All Products 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Latest Offers 📧
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Subscribe to our newsletter and never miss out on exclusive deals and new arrivals 🎉
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address "
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-300"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-green-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
              Subscribe 
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;