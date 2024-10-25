import React from 'react';
import { Bell, User, Sun } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">SunGrid</span>
            </div>
            <div className="flex space-x-4">
              <a href="/dashboard" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
              <a href="/scheduling" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Scheduling</a>
              <a href="/selling" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Selling</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Bell className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to SunGrid Assistant
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Optimize Energy, Maximize Savings
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-900">Energy Monitoring</h3>
            <p className="mt-2 text-gray-500">Track your energy usage in real-time with detailed analytics and insights.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-900">Smart Scheduling</h3>
            <p className="mt-2 text-gray-500">Optimize your energy consumption with AI-powered scheduling recommendations.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-900">Cost Savings</h3>
            <p className="mt-2 text-gray-500">Maximize your savings with intelligent energy management strategies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
