"use client"
import React from 'react'

const StationYard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              STATION YARD
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to understanding station yards, their components, and operational features in railway systems.
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Introduction
            </h2>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                Station is a nodal point in dealing trains. As per GR 1.02 (51), &ldquo;station means
                any place on a line of railway at which traffic is dealt with, or at which an authority to
                proceed is given under the system of working.&rdquo; A station comprises of a station yard
                on which trains are dealt by station staff through signals operated from panel room,
                cabins etc. Station is also the place where passengers board / alight; wagons are
                loaded / unloaded. Hence, the station is also provided with passenger and other
                user amenities like platform, waiting halls, circulating area and goods sheds.
              </p>
            </div>
          </div>

          {/* Station Yard Definition */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Station Yard Definition
            </h2>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 lg:p-8 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base mb-6">
                A station yard is basically a grid of lines where trains are dealt. The grid is made of
                tracks which are connected to each other through points and crossings.
              </p>
              
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex items-center">
                Types of Lines Found in a Station Yard:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Running lines",
                  "Non-running lines", 
                  "Staging lines",
                  "Sidings",
                  "Pit Lines",
                  "Sick lines",
                  "Shunting Neck"
                ].map((line, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 shadow-lg">
                      {index + 1}
                    </span>
                    <span className="text-gray-200 font-semibold text-lg">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Station Yard Features */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              Station Yard Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Station Gradient",
                "Isolation", 
                "Adequate distance",
                "Interlocking",
                "Standards of Interlocking"
              ].map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg p-4 lg:p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-center">
                    <span className="lg:w-10 lg:h-10 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 shadow-lg">
                      {index + 1}
                    </span>
                    <span className="text-gray-200 font-semibold lg:text-lg text-base">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Station Equipment */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </span>
              Station Equipment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Panel",
                "Visual Display Unit (VDU)",
                "Block Instrument", 
                "Station isolators",
                "Data logger"
              ].map((equipment, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-lg p-4 lg:p-6 shadow-lg border border-purple-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-center">
                    <span className="lg:w-10 lg:h-10 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 shadow-lg">
                      {index + 1}
                    </span>
                    <span className="text-gray-200 font-semibold lg:text-lg text-base">{equipment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Station Building */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Station Building
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Platforms",
                "Enquiry/Booking Office",
                "Reservation Office",
                "Parcel Office", 
                "Goods shed",
                "Waiting Hall",
                "Retiring rooms/Dormitory",
                "Cloak Rooms",
                "Sign Boards/Displays",
                "Public Utilities",
                "Food stalls",
                "Utility stalls"
              ].map((building, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-lg rounded-lg p-4 lg:p-6 shadow-lg border border-orange-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-center">
                    <span className="lg:w-10 lg:h-10 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 shadow-lg">
                      {index + 1}
                    </span>
                    <span className="text-gray-200 font-semibold lg:text-lg text-base">{building}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 border border-white/20">
            <h2 className="lg:text-4xl text-xl font-bold text-white mb-12 text-center">Key Highlights</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {/* Operational Hub */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-4 lg:p-8 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-10 h-10 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">Operational Hub</h3>
                <p className="text-blue-200 lg:text-lg text-base mb-6">Central point for train operations and passenger services</p>
                <div className="flex justify-center">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Core Function</span>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-2xl p-4 lg:p-8 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-10 h-10 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">Infrastructure</h3>
                <p className="text-emerald-200 lg:text-lg text-base mb-6">Comprehensive facilities for passengers and operations</p>
                <div className="flex justify-center">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Complete Setup</span>
                </div>
              </div>

              {/* Safety & Control */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl p-4 lg:p-8 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-10 h-10 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">Safety & Control</h3>
                <p className="text-purple-200 text-lg mb-6">Advanced signaling and interlocking systems</p>
                <div className="flex justify-center">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Priority</span>
                </div>
              </div>
            </div>

            {/* Features Overview */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-4 lg:p-8 shadow-xl border border-white/20">
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-8 flex items-center justify-center">
                Station Yard Features Overview
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-indigo-400/30">
                  <div className="text-3xl font-bold text-white">7</div>
                  <div className="text-lg text-gray-300 mt-2">Line Types</div>
                </div>
                <div className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-green-400/30">
                  <div className="text-3xl font-bold text-white">5</div>
                  <div className="text-lg text-gray-300 mt-2">Key Features</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-blue-400/30">
                  <div className="text-3xl font-bold text-white">5</div>
                  <div className="text-lg text-gray-300 mt-2">Equipment</div>
                </div>
                <div className="text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-purple-400/30">
                  <div className="text-3xl font-bold text-white">12</div>
                  <div className="text-lg text-gray-300 mt-2">Buildings</div>
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

export default StationYard