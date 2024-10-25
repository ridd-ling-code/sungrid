"use client";
import './globals.css';
import React from 'react';
import { Bell, User, Sun, BarChart2, Clock, PiggyBank } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation Bar with Glass Effect */}
      <nav className="sticky top-0 backdrop-blur-md bg-white/70 border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <div className="flex items-center group">
                <Sun className="h-8 w-8 text-yellow-500 group-hover:rotate-90 transition-transform duration-700" />
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  SunGrid
                </span>
              </div>
              <div className="hidden md:flex space-x-6">
                {['Home', 'Dashboard', 'Scheduling', 'Selling'].map((item) => (
                  <a
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
                  >
                    {item}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animation */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text animate-gradient">
            Welcome to SunGrid Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Optimize Energy, Maximize Savings with our intelligent energy management platform
          </p>
        </div>

        {/* Animated Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'Energy Monitoring',
              description: 'Track your energy usage in real-time with detailed analytics and insights.',
              icon: BarChart2,
              color: 'from-blue-500 to-blue-600',
              hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-700'
            },
            {
              title: 'Smart Scheduling',
              description: 'Optimize your energy consumption with AI-powered scheduling recommendations.',
              icon: Clock,
              color: 'from-purple-500 to-purple-600',
              hoverColor: 'group-hover:from-purple-600 group-hover:to-purple-700'
            },
            {
              title: 'Cost Savings',
              description: 'Maximize your savings with intelligent energy management strategies.',
              icon: PiggyBank,
              color: 'from-indigo-500 to-indigo-600',
              hoverColor: 'group-hover:from-indigo-600 group-hover:to-indigo-700'
            }
          ].map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <feature.icon
                className={`h-12 w-12 mb-6 bg-gradient-to-r ${feature.color} ${feature.hoverColor} p-2 rounded-lg text-white transform transition-transform duration-300 group-hover:scale-110`}
              />
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h2>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {feature.description}
              </p>
              
              <div className="mt-6">
                <button className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300 flex items-center">
                  Learn more
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
