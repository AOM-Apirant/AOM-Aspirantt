"use client"
import React from 'react'

const CoachingStock = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-magenta-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-magenta-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-violet-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              COACHING STOCK
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to coaching stock types, numbering systems, maintenance schedules, and operational management for passenger train services.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-violet-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed text-lg mb-6">
                For providing the various types of services mentioned above, different types of coaches have been designed, manufactured and put into service. They form the coaching stock. There are two main types of Coaching Stock.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="text-violet-400 mr-3 text-2xl">🚂</span>
                    Passenger Coaching Vehicle (PCV)
                  </h3>
                  <p className="text-gray-200 text-sm">
                    A vehicle in which whole or some portion is being utilized for carrying passengers.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="text-violet-400 mr-3 text-2xl">🔧</span>
                    Other Coaching Vehicle (OCV)
                  </h3>
                  <p className="text-gray-200 text-sm">
                    These vehicles do not have a passenger carrying portion but are planned to be attached to coaching trains for providing other facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coach Codes Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </span>
              Types of Coaches and Their Codes
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Basic Facilities */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Basic Facilities</h3>
                <div className="space-y-3">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-lg font-bold">W</span>
                    <span className="text-white text-sm">Vestibuled</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-lg font-bold">G</span>
                    <span className="text-white text-sm">Self-Generating</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-lg font-bold">S</span>
                    <span className="text-white text-sm">Second Class</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-lg font-bold">F</span>
                    <span className="text-white text-sm">First Class</span>
                  </div>
                </div>
              </div>

              {/* Specialized Coaches */}
              <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Specialized Coaches</h3>
                <div className="space-y-3">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-pink-400 mr-3 text-lg font-bold">L</span>
                    <span className="text-white text-sm">Luggage Van</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-pink-400 mr-3 text-lg font-bold">R</span>
                    <span className="text-white text-sm">Guard Brake Van</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-pink-400 mr-3 text-lg font-bold">Y</span>
                    <span className="text-white text-sm">Ladies Compartment</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-pink-400 mr-3 text-lg font-bold">J</span>
                    <span className="text-white text-sm">Ice Compartment</span>
                  </div>
                </div>
              </div>

              {/* AC and Sleeper Classes */}
              <div className="bg-gradient-to-br from-rose-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-rose-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">AC & Sleeper Classes</h3>
                <div className="space-y-3">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-rose-400 mr-3 text-lg font-bold">AC</span>
                    <span className="text-white text-sm">Air Conditioned</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-rose-400 mr-3 text-lg font-bold">CN</span>
                    <span className="text-white text-sm">Sleeper Class Three Tier</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-rose-400 mr-3 text-lg font-bold">CW</span>
                    <span className="text-white text-sm">Sleeper Class Two Tier</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-rose-400 mr-3 text-lg font-bold">CZ</span>
                    <span className="text-white text-sm">Chair Car</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coach Numbering Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </span>
              Coaching Stock Numbering Syntax
            </h2>
            
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed text-lg mb-6">
                All coaches are provided with a unique five digit number with each digit signifying specific information about the coach.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">First Two Digits</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    Indicate the year of manufacture of the stock.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Third Digit</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    Indicates the type of stock.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-red-400 mr-3 text-xl font-bold">0</span>
                  <span className="text-white text-sm">FAC & ACCW (First AC or 2-tier AC)</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-red-400 mr-3 text-xl font-bold">1</span>
                  <span className="text-white text-sm">ACCN & ACCZ (3-tier AC or AC Chair)</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-red-400 mr-3 text-xl font-bold">2&3</span>
                  <span className="text-white text-sm">GSCN (IInd Sleeper Class)</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-red-400 mr-3 text-xl font-bold">4&5</span>
                  <span className="text-white text-sm">GS (IInd General)</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-red-400 mr-3 text-xl font-bold">6</span>
                  <span className="text-white text-sm">GSCZ (IInd Chair Car)</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-red-400 mr-3 text-xl font-bold">7</span>
                  <span className="text-white text-sm">SLR (IInd class cum luggage cum brake)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coach Maintenance Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Coach Maintenance
            </h2>
            
            <div className="space-y-6">
              {/* Primary Maintenance */}
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-orange-400 mr-3 text-2xl">🔧</span>
                  Primary Maintenance
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Passenger carrying trains are required to be checked for rakes with ICF coaches after every 3500 kms and LHB Rakes after 4000kms in pit line for 6 hours thoroughly by mechanical & electrical departments for fitness of undergear equipment, passenger facilities and cleanliness.
                </p>
              </div>

              {/* Secondary Maintenance */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-yellow-400 mr-3 text-2xl">⚙️</span>
                  Secondary Maintenance and OEM
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  The rakes that have undergone primary maintenance in the originating station are subjected to secondary / other end maintenance in the destination station depending upon the distance traveled.
                </p>
              </div>

              {/* IOH Maintenance */}
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-amber-400 mr-3 text-2xl">🔍</span>
                  IOH (Intermediate Over Hauling)
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  A scheduled maintenance of coaches, checked thoroughly in IOH sheds separately for each coach.
                </p>
              </div>

              {/* POH Maintenance */}
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-orange-400 mr-3 text-2xl">🏭</span>
                  POH (Periodic Over Hauling)
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  A scheduled maintenance of coaches checked thoroughly in workshops separately for each coach.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🚂</span>
                <span className="text-gray-200 text-lg">Systematic coach classification</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔢</span>
                <span className="text-gray-200 text-lg">Unique five-digit numbering</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔧</span>
                <span className="text-gray-200 text-lg">Comprehensive maintenance schedules</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 text-lg">Efficient rake link management</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">👥</span>
                <span className="text-gray-200 text-lg">Optimized crew scheduling</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 text-lg">Detailed operational protocols</span>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="w-4 h-4 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
              Summary
            </h3>
            <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-violet-400/30">
              <p className="text-gray-200 leading-relaxed text-lg text-center">
                Coaching stock management involves systematic classification, numbering, and maintenance of passenger coaches. 
                The comprehensive system ensures optimal utilization of resources while maintaining the highest standards of safety 
                and passenger comfort across the Indian Railways network.
              </p>
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

export default CoachingStock