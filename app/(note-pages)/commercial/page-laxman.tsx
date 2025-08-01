"use client"
import React from 'react'
import RedTariff from '@/components/commercial/RedTariff'

const Commercial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              COMMERCIAL OPERATIONS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Indian Railways</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to commercial operations, revenue management, passenger services, 
              freight operations, and financial regulations in Indian Railways.
            </p>
          </div>

          {/* Revenue Management Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Revenue Management
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl px-2 py-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex flex-col gap-4  items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Passenger Revenue
                </h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                    <span>Ticket sales and reservations</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                    <span>Season ticket management</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💰</span>
                    <span>Concession and discount schemes</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">↩️</span>
                    <span>Refund and cancellation policies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex flex-col gap-4 items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Freight Revenue
                </h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚛</span>
                    <span>Goods transportation charges</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📦</span>
                    <span>Container and parcel services</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💎</span>
                    <span>Special freight rates</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                    <span>Demurrage and wharfage charges</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex flex-col gap-4 items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Ancillary Revenue
                </h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                    <span>Platform ticket sales</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🅿️</span>
                    <span>Parking and advertisement</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏢</span>
                    <span>Commercial space leasing</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">➕</span>
                    <span>Value-added services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Passenger Services Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Passenger Services
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 flex flex-col gap-4 items-center">
                    <span className="w-4 h-4 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                    Reservation Services
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-amber-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                      <span className="text-gray-200">Online reservation system (IRCTC)</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-amber-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏢</span>
                      <span className="text-gray-200">Counter reservations at stations</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-amber-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📱</span>
                      <span className="text-gray-200">Mobile ticketing applications</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-amber-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                      <span className="text-gray-200">Tatkal and emergency quotas</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 flex flex-col gap-4 items-center">
                    <span className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                    Passenger Amenities
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚽</span>
                      <span className="text-gray-200">Clean toilets and waiting rooms</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🍽️</span>
                      <span className="text-gray-200">Food courts and refreshment stalls</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">♿</span>
                      <span className="text-gray-200">Accessibility for differently-abled</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🛒</span>
                      <span className="text-gray-200">Commercial shops and kiosks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Freight Operations Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              Freight Operations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex flex-col gap-4 items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                  Bulk Freight
                </h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-indigo-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⛏️</span>
                    <span>Coal and mineral transportation</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-indigo-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏗️</span>
                    <span>Steel and cement movement</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-indigo-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🌾</span>
                    <span>Agricultural commodities</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-indigo-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚗️</span>
                    <span>Petroleum and chemicals</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex flex-col gap-4 items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Container Services
                </h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚄</span>
                    <span>Dedicated freight corridors</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📦</span>
                    <span>Express parcel services</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">❄️</span>
                    <span>Cold storage transportation</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚗</span>
                    <span>Automobile logistics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex flex-col gap-4 items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Special Freight
                </h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎖️</span>
                    <span>Military and defense cargo</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚠️</span>
                    <span>Dangerous goods handling</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📏</span>
                    <span>Oversized load transport</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🧊</span>
                    <span>Refrigerated cargo services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commercial Rules Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white text-center mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Commercial Rules & Regulations
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 flex flex-col gap-4 items-center">
                    <span className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                    Passenger Rules
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">General conditions of carriage</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                      <span className="text-gray-200">Ticket booking and cancellation rules</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💰</span>
                      <span className="text-gray-200">Refund and compensation policies</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                      <span className="text-gray-200">Concession and privilege schemes</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 flex flex-col gap-4 items-center">
                    <span className="w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mr-3 animate-pulse"></span>
                    Freight Rules
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📦</span>
                      <span className="text-gray-200">Goods classification and rates</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                      <span className="text-gray-200">Demurrage and wharfage charges</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚛</span>
                      <span className="text-gray-200">Private siding regulations</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Liability and insurance rules</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Management Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-green-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              Financial Management
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">₹2.4L Cr</div>
                <div className="text-emerald-200 text-sm">Annual Revenue</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">₹1.2L Cr</div>
                <div className="text-blue-200 text-sm">Passenger Revenue</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">₹1.1L Cr</div>
                <div className="text-purple-200 text-sm">Freight Revenue</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">₹10K Cr</div>
                <div className="text-orange-200 text-sm">Other Revenue</div>
              </div>
            </div>
          </div>

          {/* Key Performance Indicators */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Key Performance Indicators
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-violet-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Passenger Traffic</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Daily Passengers</span>
                    <span className="text-white font-bold">2.3 Crore</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Annual Growth</span>
                    <span className="text-green-400 font-bold">+5.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Punctuality</span>
                    <span className="text-blue-400 font-bold">85.2%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Freight Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Daily Freight</span>
                    <span className="text-white font-bold">3.2 MT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Speed</span>
                    <span className="text-green-400 font-bold">45 km/h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Utilization</span>
                    <span className="text-blue-400 font-bold">78.5%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Revenue Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Revenue per km</span>
                    <span className="text-white font-bold">₹12.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Recovery</span>
                    <span className="text-green-400 font-bold">98.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Operating Ratio</span>
                    <span className="text-blue-400 font-bold">98.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RedTariff />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Commercial