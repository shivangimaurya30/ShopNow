import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderNumber, total, items } = location.state || {};

  if (!orderNumber) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order not found 😞</h2>
          <Link to="/" className="text-green-600 hover:text-green-800">
            Return to Home 
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="mb-6">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed! 🎉</h1>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your purchase. Your order has been successfully placed. 🛒
          </p>
          <p className="text-lg text-gray-500">
            Order Number: <span className="font-semibold text-gray-900">#{orderNumber}</span>
          </p>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Status 📦</h2>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600">Order Placed ✅</span>
            </div>
            <div className="flex-1 h-1 bg-green-200 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600">Processing 📦</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-500">Shipped 🚚</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-500">Delivered 🏠</span>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary 📋</h2>
          {items && items.length > 0 && (
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <span className="font-medium text-gray-900">
                    ₹{(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-gray-900">Order Total:</span>
              <span className="text-2xl font-bold text-gray-900">₹{total}</span>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What's Next? 🤔</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Order Processing 📦</h3>
                <p className="text-gray-600 text-sm">
                  We're preparing your order for shipment. You'll receive a confirmation email with tracking details once it ships. 📧
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Track Your Order 📍</h3>
                <p className="text-gray-600 text-sm">
                  You can track your order status and delivery progress through your account dashboard. 📱
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Continue Shopping 
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-semibold rounded-lg transition-all duration-200"
          >
            Back to Home 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;