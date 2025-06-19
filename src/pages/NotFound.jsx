import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found 😞</h1>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL. 🤷‍♂️
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home 
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 font-semibold rounded-lg transition-all duration-200"
            >
              <Search className="mr-2 h-5 w-5" />
              Browse Products 
            </Link>
          </div>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back 🔙
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages 📄</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <Link to="/products?category=grocery" className="text-green-600 hover:text-green-800 transition-colors duration-200">
              Grocery & Vegetables 🥬
            </Link>
            <Link to="/products?category=electronics" className="text-green-600 hover:text-green-800 transition-colors duration-200">
              Electronics 📱
            </Link>
            <Link to="/products?category=beauty" className="text-green-600 hover:text-green-800 transition-colors duration-200">
              Beauty & Personal Care 💄
            </Link>
            <Link to="/products?category=kitchenware" className="text-green-600 hover:text-green-800 transition-colors duration-200">
              Kitchenware & Appliances 🍳
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;