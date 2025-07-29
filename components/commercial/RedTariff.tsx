"use client"
import React from 'react'

const RedTariff = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-pink-900 to-rose-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-rose-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-red-100 to-pink-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              RED TARIFF
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Indian Railways Conference Association (IRCA) Coaching Tariff governing rules and regulations for booking, handling, and transporting parcels, luggage, and specific goods via passenger trains
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-6 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Overview of the Red Tariff
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚫</span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Prohibited Commodities</h3>
                    <p className="text-gray-200 text-sm">Items like offensive, contraband, dangerous, explosive, or inflammable materials are not allowed for carriage as parcels.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📦</span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Packing Conditions</h3>
                    <p className="text-gray-200 text-sm">Parcels must be securely packed in boxes, trunks, strong baskets, or gunny bags to withstand handling and transportation.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🎫</span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Booking and Delivery</h3>
                    <p className="text-gray-200 text-sm">Parcel booking is permitted at approximately 750 stations, with delivery allowed at stations with a minimum 5-minute train stop.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">💰</span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Rates</h3>
                    <p className="text-gray-200 text-sm">Parcel rates vary by train class (P-scale, R-scale, S-scale) and are based on weight, dimensions, and distance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Official Document Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-6 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Official Document
            </h2>
            <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-xl font-bold text-white mb-4 text-center">INDIAN RAILWAY CONFERENCE ASSOCIATION</h3>
              <h4 className="text-lg font-bold text-pink-300 mb-4 text-center">RED TARIFF No.20</h4>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                For conveyance by Rail of Explosives and other Dangerous Goods notified by the Central Government in Notification No.2000/TC-I/307/3 dated 15th July 2000 published under GSR No.266, dated 15th July 2000 (and its amendment through subsequent gazette notifications) in exercise of powers conferred by Section 67 and 87 of the Railways Act, 24 of 1989 and also classification of goods and weight conditions prescribed by the Central Government in exercise of powers conferred by Section 30 and 31 of Indian Railways Act. 24 of 1989
              </p>
              <div className="text-center">
                <p className="text-pink-300 font-semibold">In force from 16th August 2000</p>
                <p className="text-gray-300 text-sm">(Incorporating Railway Red Tariff Rules, 1960)</p>
                <p className="text-gray-300 text-sm">(This book includes Correction Slips Nos.1 to 4 issued to Red Tariff No.20)</p>
                <p className="text-white font-semibold mt-2">Applicable in local booking over Indian Government Railways and in through booking over all Railways party to the Association</p>
              </div>
            </div>
          </div>

          {/* Index Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-6 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-rose-500 to-red-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </span>
              Index to Commodities
            </h2>
            
          </div>

          {/* Key Features Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center">
                <span className="mr-2">🚫</span>
                Prohibited Items
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-red-200 mr-2">•</span>
                  Explosive materials
                </li>
                <li className="flex items-center">
                  <span className="text-red-200 mr-2">•</span>
                  Inflammable substances
                </li>
                <li className="flex items-center">
                  <span className="text-red-200 mr-2">•</span>
                  Dangerous goods
                </li>
                <li className="flex items-center">
                  <span className="text-red-200 mr-2">•</span>
                  Contraband items
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center">
                <span className="mr-2">📦</span>
                Packing Requirements
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">•</span>
                  Secure boxes & trunks
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">•</span>
                  Strong baskets
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">•</span>
                  Gunny bags
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">•</span>
                  Special conditions
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center">
                <span className="mr-2">🎫</span>
                Booking Services
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-rose-200 mr-2">•</span>
                  750+ stations
                </li>
                <li className="flex items-center">
                  <span className="text-rose-200 mr-2">•</span>
                  Vehicle transport
                </li>
                <li className="flex items-center">
                  <span className="text-rose-200 mr-2">•</span>
                  Progressive tracking
                </li>
                <li className="flex items-center">
                  <span className="text-rose-200 mr-2">•</span>
                  Multiple scales
                </li>
              </ul>
            </div>
          </div>

          {/* Importance Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-6 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-rose-500 to-red-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Critical Importance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-rose-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚚</span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Logistics Sector</h3>
                    <p className="text-gray-200 text-sm">Critical for the logistics sector as Indian Railways transports diverse commodities like fruits, vegetables, food grains, fish, poultry, electronics, cycles, motorcycles, machinery, medicines, and household goods.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-rose-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🌱</span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Eco-friendly Transport</h3>
                    <p className="text-gray-200 text-sm">Emphasizes its role as an eco-friendly transport mode, providing sustainable logistics solutions across the country.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-rose-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Regulatory Framework</h3>
                    <p className="text-gray-200 text-sm">Provides comprehensive regulatory framework for safe and efficient parcel and luggage services on Indian Railways network.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-rose-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🛡️</span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Safety Standards</h3>
                    <p className="text-gray-200 text-sm">Ensures safety standards and proper handling of various types of goods and commodities across the railway network.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default RedTariff