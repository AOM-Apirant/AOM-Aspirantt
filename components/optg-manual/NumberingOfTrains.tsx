"use client"
import React from 'react'

const NumberingOfTrains = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-amber-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              NUMBERING OF TRAINS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding the systematic five-digit numbering system used by Indian Railways to uniquely identify and categorize different types of coaching trains.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed text-lg mb-6">
                Every coaching train in Indian Railways is provided with a unique number, following a five-digit numbering system in vogue since December 20, 2010. This systematic approach ensures proper identification and categorization of different train types across the vast railway network.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-orange-400 mr-3 text-xl">🔢</span>
                  <span className="text-white font-semibold text-lg">Five-Digit System</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-orange-400 mr-3 text-xl">🎯</span>
                  <span className="text-white font-semibold text-lg">Unique Identification</span>
                </div>
              </div>
            </div>
          </div>

          {/* First Digit - Train Types */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              First Digit - Train Types
            </h2>
            
            <div className="space-y-6">
              {/* Special Trains */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-red-400 mr-4">0</span>
                  <h3 className="text-xl font-bold text-white">Special Trains</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Summer specials, holiday specials, and other seasonal trains that operate during peak travel periods to meet increased passenger demand.
                </p>
              </div>

              {/* Long Distance Trains - 1 */}
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-pink-400 mr-4">1</span>
                  <h3 className="text-xl font-bold text-white">Long Distance Trains</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  Premium long-distance trains including Rajdhani, Shatabdi, Jan Sadharan, Sampark Kranti, Garib Rath, Duronto, and other elite classes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">Rajdhani</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">Shatabdi</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">Jan Sadharan</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">Sampark Kranti</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">Garib Rath</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">Duronto</span>
                </div>
              </div>

              {/* Long Distance Trains - 2 */}
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-purple-400 mr-4">2</span>
                  <h3 className="text-xl font-bold text-white">Additional Long Distance Trains</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Used when train numbers starting with 1 are exhausted in any series. This ensures continued systematic numbering for long-distance services.
                </p>
              </div>

              {/* Kolkata Suburban */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-indigo-400 mr-4">3</span>
                  <h3 className="text-xl font-bold text-white">Kolkata Suburban Trains</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Dedicated suburban train services operating in and around Kolkata metropolitan area, serving daily commuters.
                </p>
              </div>

              {/* Metropolitan Suburban */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-blue-400 mr-4">4</span>
                  <h3 className="text-xl font-bold text-white">Metropolitan Suburban Trains</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  Suburban train services in Chennai, New Delhi, Secunderabad, and other metropolitan areas across India.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">Chennai</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">New Delhi</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">Secunderabad</span>
                </div>
              </div>

              {/* Passenger Trains */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-cyan-400 mr-4">5</span>
                  <h3 className="text-xl font-bold text-white">Passenger Trains</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Conventional passenger trains with standard coaches, serving various routes across the country with multiple stops.
                </p>
              </div>

              {/* MEMU Trains */}
              <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-teal-400 mr-4">6</span>
                  <h3 className="text-xl font-bold text-white">MEMU Trains</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Mainline Electric Multiple Unit trains, providing efficient suburban and short-distance services with electric propulsion.
                </p>
              </div>

              {/* DMU/DEMU Services */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-emerald-400 mr-4">7</span>
                  <h3 className="text-xl font-bold text-white">DMU/DEMU & Railcar Services</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Diesel Multiple Unit (DMU), Diesel Electric Multiple Unit (DEMU), and railcar services for regional and local transportation.
                </p>
              </div>

              {/* Mumbai Suburban */}
              <div className="bg-gradient-to-br from-green-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-green-400 mr-4">9</span>
                  <h3 className="text-xl font-bold text-white">Mumbai Area Suburban Trains</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Dedicated suburban train services operating in the Mumbai metropolitan area, serving the massive daily commuter population.
                </p>
              </div>
            </div>
          </div>

          {/* Second Digit - Zonal Codes */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-500 to-amber-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Second Digit - Zonal Codes
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Konkan Railway */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-yellow-400 mr-3">0</span>
                  <h3 className="text-lg font-bold text-white">Konkan Railway</h3>
                </div>
                <p className="text-gray-200 text-sm">
                  Dedicated zone for the scenic Konkan Railway route along the western coast.
                </p>
              </div>

              {/* CR, WCR, NCR */}
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-amber-400 mr-3">1</span>
                  <h3 className="text-lg font-bold text-white">CR, WCR, NCR</h3>
                </div>
                <p className="text-gray-200 text-sm">
                  Central Railway, West Central Railway, and North Central Railway zones.
                </p>
              </div>

              {/* Special Category */}
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-orange-400 mr-3">2</span>
                  <h3 className="text-lg font-bold text-white">Special Category</h3>
                </div>
                <p className="text-gray-200 text-sm">
                  Superfast, Shatabdi, Jan Shatabdi, and other premium classes regardless of zones.
                </p>
              </div>

              {/* ER, ECR */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-red-400 mr-3">3</span>
                  <h3 className="text-lg font-bold text-white">ER, ECR</h3>
                </div>
                <p className="text-gray-200 text-sm">
                  Eastern Railway and East Central Railway zones.
                </p>
              </div>

              {/* NR, NCR, NWR */}
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-pink-400 mr-3">4</span>
                  <h3 className="text-lg font-bold text-white">NR, NCR, NWR</h3>
                </div>
                <p className="text-gray-200 text-sm">
                  Northern Railway, North Central Railway, and North Western Railway zones.
                </p>
              </div>

              {/* NER, NFR */}
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-purple-400 mr-3">5</span>
                  <h3 className="text-lg font-bold text-white">NER, NFR</h3>
                </div>
                <p className="text-gray-200 text-sm">
                  North Eastern Railway and Northeast Frontier Railway zones.
                </p>
              </div>

              {/* SR, SWR */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-indigo-400 mr-3">6</span>
                  <h3 className="text-lg font-bold text-white">SR, SWR</h3>
                </div>
                <p className="text-gray-200 text-sm">
                  Southern Railway and South Western Railway zones.
                </p>
              </div>

              {/* SCR, SWR */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-blue-400 mr-3">7</span>
                  <h3 className="text-lg font-bold text-white">SCR, SWR</h3>
                </div>
                <p className="text-gray-200 text-sm">
                  South Central Railway and South Western Railway zones.
                </p>
              </div>

              {/* SER, ECoR */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-cyan-400 mr-3">8</span>
                  <h3 className="text-lg font-bold text-white">SER, ECoR</h3>
                </div>
                <p className="text-gray-200 text-sm">
                  South Eastern Railway and East Coast Railway zones.
                </p>
              </div>

              {/* WR, NWR, WCR */}
              <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-teal-400 mr-3">9</span>
                  <h3 className="text-lg font-bold text-white">WR, NWR, WCR</h3>
                </div>
                <p className="text-gray-200 text-sm">
                  Western Railway, North Western Railway, and West Central Railway zones.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔢</span>
                <span className="text-gray-200 text-lg">Systematic five-digit numbering</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🎯</span>
                <span className="text-gray-200 text-lg">Unique train identification</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🏢</span>
                <span className="text-gray-200 text-lg">Zonal railway classification</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 text-lg">Train type categorization</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔄</span>
                <span className="text-gray-200 text-lg">Standardized since 2010</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 text-lg">Comprehensive coverage</span>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
              Summary
            </h3>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-orange-400/30">
              <p className="text-gray-200 leading-relaxed text-lg text-center">
                The five-digit train numbering system provides a comprehensive framework for identifying and categorizing all coaching trains in Indian Railways. 
                The first digit indicates train type while the second digit denotes the zonal railway, ensuring systematic organization 
                and easy identification across the vast railway network.
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

export default NumberingOfTrains