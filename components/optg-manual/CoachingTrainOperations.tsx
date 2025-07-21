"use client"
import React from 'react'

const CoachingTrainOperations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-magenta-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-magenta-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              COACHING TRAIN OPERATIONS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to passenger train services, types, and operations designed to provide maximum satisfaction to travelers across India.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 lg:p-8 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed lg:text-lg text-base mb-6">
                Coaching train operations are planned, run and maintained to cater to the travel needs of the public so as to provide maximum level of satisfaction. Different passengers have different needs and consequently different criteria for satisfaction.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-purple-400 mr-3 lg:text-xl text-lg">🎯</span>
                  <span className="text-white font-semibold lg:text-lg text-base">Maximum Satisfaction</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-purple-400 mr-3 lg:text-xl text-lg">⏰</span>
                  <span className="text-white font-semibold lg:text-lg text-base">Punctual Running</span>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed lg:text-lg text-base mt-6">
                While freight services are mainly end to end oriented services, the coaching services cater to enroute passengers also. Therefore, coaching train operations are planned to a reasonably predictable, systematic and regular pattern. Time tabling and punctual running are the two corner stones of coaching train operations.
              </p>
            </div>
          </div>

          {/* Types of Coaching Services */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center text-center">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Types of Coaching Services
            </h2>
            
            <div className="space-y-8">
              {/* Vandebharat */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Vandebharat
                </h3>
                <p className="text-gray-200 leading-relaxed lg:text-lg text-base mb-4">
                  These are the latest train services using train sets that can run up to 160kmph. Named as Train-18 in the design stage, these semi high speed train sets currently manufactured by Integral Coach Factory Chennai are provided with latest passenger friendly features.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🚄</span>
                    <span className="text-gray-200 lg:text-lg text-base">Semi high speed up to 160kmph</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🪑</span>
                    <span className="text-gray-200 lg:text-lg text-base">Latest passenger friendly features</span>
                  </div>
                </div>
              </div>

              {/* Rajdhani */}
              <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mr-3 animate-pulse"></span>
                  Rajdhani
                </h3>
                <p className="text-gray-200 leading-relaxed lg:text-lg text-base mb-4">
                  These are super-fast semi high speed trains connecting New Delhi and state capitals. These are elite trains provided with all AC sleeper coaches and given highest priority in timetabling and running.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-pink-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">👑</span>
                    <span className="text-gray-200 lg:text-lg text-base">Elite trains with highest priority</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-pink-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">❄️</span>
                    <span className="text-gray-200 text-lg">All AC sleeper coaches</span>
                  </div>
                </div>
              </div>

              {/* Shatabdi */}
              <div className="bg-gradient-to-br from-rose-500/20 to-red-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-rose-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-rose-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                  Shatabdi
                </h3>
                <p className="text-gray-200 leading-relaxed lg:text-lg text-base mb-4">
                  These are intercity super-fast trains conceptualized in 1989, on 100th birth anniversary of Pt. Jawaharlal Nehru. They run between state capitals, usually having a travel time of 6-8 hours.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-rose-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🏛️</span>
                    <span className="text-gray-200 lg:text-lg text-base">Connect state capitals</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-rose-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">⏱️</span>
                    <span className="text-gray-200 lg:text-lg text-base">6-8 hours travel time</span>
                  </div>
                </div>
              </div>

              {/* Duronto */}
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  Duronto
                </h3>
                <p className="text-gray-200 leading-relaxed lg:text-lg text-base mb-4">
                  These are non-stop superfast trains that run between source and destination stations. They don&apos;t stop enroute except for operational reasons like crew change. Duronto means &quot;restless&quot; in Bengali and the rakes are painted with unique yellow green livery.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">⚡</span>
                    <span className="text-gray-200 lg:text-lg text-base">Non-stop superfast trains</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🎨</span>
                    <span className="text-gray-200 lg:text-lg text-base">Unique yellow green livery</span>
                  </div>
                </div>
              </div>

              {/* Sampark Kranti */}
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  Sampark Kranti
                </h3>
                <p className="text-gray-200 leading-relaxed lg:text-lg text-base mb-4">
                  The word Sampark means contact and Kranti means Revolution. The combined name denotes revolution in public contact i.e., the steps taken by Indian Railways to provide high speed train connections from cities around our country with the National Capital through the provision of few stops and running at high speeds.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-orange-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🔄</span>
                    <span className="text-gray-200 lg:text-lg text-base">Revolution in public contact</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-orange-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🏙️</span>
                    <span className="text-gray-200 lg:text-lg text-base">Connect cities with National Capital</span>
                  </div>
                </div>
              </div>

              {/* Superfast */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full mr-3 animate-pulse"></span>
                  Superfast
                </h3>
                <p className="text-gray-200 leading-relaxed lg:text-lg text-base mb-4">
                  These are express trains with limited halts at the important stations in order to achieve an average speed of 55kmph or more. Rajdhani, Shatabdi, Duronto and many long distance trains are all super-fast trains connecting major cities with additional premium features associated with their brand.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🚀</span>
                    <span className="text-gray-200 lg:text-lg text-base">Average speed 55kmph+</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">⭐</span>
                    <span className="text-gray-200 lg:text-lg text-base">Premium features and limited halts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Additional Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Mail and Express */}
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  Mail & Express
                </h3>
                <p className="text-gray-200 lg:text-base text-sm mb-4">
                  High speed services carrying passenger and postal mails, stopping only at important stations.
                </p>
              </div>

              {/* Garib Rath */}
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-4 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                  Garib Rath
                </h3>
                <p className="text-gray-200 lg:text-base text-sm mb-4">
                  Affordable AC train service with slightly larger coaches and middle berth in side portion.
                </p>
              </div>

              {/* Intercity */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Intercity
                </h3>
                <p className="text-gray-200 lg:text-base text-sm mb-4">
                  Quick day journey travel between nearest cities, completing round trip in a day.
                </p>
              </div>

              {/* Jan Shatabdi */}
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-4 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                  Jan Shatabdi
                </h3>
                <p className="text-gray-200 lg:text-base text-sm mb-4">
                  Non-AC trains with Shatabdi features at affordable prices, both AC and non-AC accommodations.
                </p>
              </div>

              {/* Premium Trains */}
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
                  Premium Trains
                </h3>
                <p className="text-gray-200 lg:text-base text-sm mb-4">
                  Dynamic pricing system, 15 days ARP, no cancellation facility, generally superfast trains.
                </p>
              </div>

              {/* Passenger/MEMU/DEMU */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-4 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Passenger/MEMU/DEMU
                </h3>
                <p className="text-gray-200 lg:text-base text-sm mb-4">
                  General coaches only, stops at all stations including villages, lowest average speeds.
                </p>
              </div>

              {/* Suburban/EMU */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Suburban/EMU
                </h3>
                <p className="text-gray-200 lg:text-base text-sm mb-4">
                  Mass transportation in densely populated cities, minimal fare, transport maximum people in least time.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl lg:p-6 p-4 transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🎯</span>
                <span className="text-gray-200 lg:text-lg text-base">Maximum passenger satisfaction</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl lg:p-6 p-4 transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">⏰</span>
                <span className="text-gray-200 lg:text-lg text-base">Punctual running and timetabling</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl lg:p-6 p-4 transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🚄</span>
                <span className="text-gray-200 lg:text-lg text-base">Diverse service types for different needs</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl lg:p-6 p-4 transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">💰</span>
                <span className="text-gray-200 lg:text-lg text-base">Affordable to premium pricing options</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl lg:p-6 p-4 transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🏙️</span>
                <span className="text-gray-200 lg:text-lg text-base">Connectivity across all regions</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl lg:p-6 p-4 transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔄</span>
                <span className="text-gray-200 lg:text-lg text-base">Systematic and regular operations</span>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl lg:p-8 p-4 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
              Summary
            </h3>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-purple-400/30">
              <p className="text-gray-200 leading-relaxed lg:text-lg text-base text-center">
                Indian Railways have evolved various types of coaching services keeping in view of the public demand. 
                From high-speed Vandebharat to affordable suburban services, each type caters to specific passenger needs 
                while maintaining the highest standards of safety, punctuality, and passenger satisfaction.
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

export default CoachingTrainOperations