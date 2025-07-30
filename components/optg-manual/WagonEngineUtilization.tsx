"use client"
import React from 'react'

const WagonEngineUtilization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              WAGON & ENGINE UTILIZATION
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">South Central Railway</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive analysis of factors affecting wagon and engine utilization with strategic improvement methods 
              for enhanced operational efficiency in South Central Railway.
            </p>
          </div>

          {/* Factors Affecting Utilization Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Factors Affecting Wagon & Engine Utilization
            </h2>

            {/* Wagon Utilization */}
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300 mb-4">
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-4 items-center">
                <span className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                Wagon Utilization
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Wagon Turn Round Time (WTR)</h4>
                      <p className="text-gray-200 text-sm">Delays in marshalling yards, stations during loading/unloading, and clearance from roadside stations impact wagon mobility.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Traffic & Infrastructure</h4>
                      <p className="text-gray-200 text-sm">Average lead, traffic density, ruling gradients and line facilities affect wagon turn round time.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔧</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Maintenance Issues</h4>
                      <p className="text-gray-200 text-sm">An increase in the number of wagons awaiting repairs directly affects utilization.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Shunting Operations</h4>
                      <p className="text-gray-200 text-sm">Delays in shunting at roadside stations contribute to lower wagon mobility.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏭</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Terminal Efficiency</h4>
                      <p className="text-gray-200 text-sm">Inefficient terminals and goods sheds negatively impact loading and unloading processes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engine Utilization */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-4 items-center">
                <span className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                Engine Utilization
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚙️</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Locomotive Maintenance</h4>
                      <p className="text-gray-200 text-sm">Efficient management of locomotive maintenance schedules is crucial to maximize availability.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚫</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Dead Locomotive Movement</h4>
                      <p className="text-gray-200 text-sm">Minimizing the movement of dead or non-operational locomotives can improve overall engine utilization.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Shed & Traffic Outage</h4>
                      <p className="text-gray-200 text-sm">Unforeseen outages in sheds and during traffic can lead to reduced engine availability.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Operating Staff Schedules</h4>
                      <p className="text-gray-200 text-sm">Effective scheduling and management of engine crew and train crew are essential for maximizing operational hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏠</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Rest Regulations</h4>
                      <p className="text-gray-200 text-sm">Compliance with resting regulations for engine crew ensures their availability for duty.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Methods of Improvement Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Methods of Improvement
            </h2>

            {/* Wagon Utilization Improvements */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300 mb-6">
              <h3 className="lg:text-2xl text-xl font-bold text-white text-center mb-4 flex flex-col gap-4 items-center">
                <span className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                Wagon Utilization Improvements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚆</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Unit Trains & Captive Rakes</h4>
                      <p className="text-gray-200 text-sm">Running of unit trains and formation of captive rakes helps streamline wagon movement and reduces delays.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📦</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Block Train Operations</h4>
                      <p className="text-gray-200 text-sm">Block Train Operations and Mini Rake System enhance the efficiency of wagon movement and optimize loading.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Nominated Day Loading</h4>
                      <p className="text-gray-200 text-sm">Facilitates planned and efficient loading of wagons.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🛤️</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Rationalization Scheme</h4>
                      <p className="text-gray-200 text-sm">Avoids congestion by specifying routes and optimizing booking/destination points, including transshipment points.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">MGR & EOL Systems</h4>
                      <p className="text-gray-200 text-sm">Merry-Go-Round (MGR) System and Engine on Load (EOL) System are designed to enhance loading and unloading efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Enhanced C&W Examination</h4>
                      <p className="text-gray-200 text-sm">Intensive, Round Trips, Premium and Close Circuit rake examinations improve wagon maintenance and availability.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏭</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Improved Infrastructure</h4>
                      <p className="text-gray-200 text-sm">Enhancements like Gati Shakti cargo terminals and better goods sheds streamline loading and unloading.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engine Utilization Improvements */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 px-2 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <h3 className="lg:text-2xl text-xl font-bold text-white text-center mb-4 flex flex-col gap-4 items-center">
                <span className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                Engine Utilization Improvements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Optimizing Loco Link Diagrams</h4>
                      <p className="text-gray-200 text-sm">Strategic preparation of loco link diagrams maximizes locomotive running time and minimizes detentions.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💻</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Rationalized Deployment</h4>
                      <p className="text-gray-200 text-sm">Using software-based decision support systems to determine minimum locomotives needed for scheduled trains.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Utilizing Released Locomotives</h4>
                      <p className="text-gray-200 text-sm">Locomotives freed up from passenger services can be redeployed for additional freight train operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Energy Saving Measures</h4>
                      <p className="text-gray-200 text-sm">Switching off blowers during yard detention and installing APUs for fuel savings.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏗️</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Improved Traction Distribution</h4>
                      <p className="text-gray-200 text-sm">Features like SF-6/Vacuum switchgear and improved distance protection relays minimize disruptions.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📈</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Efficient Failure Management</h4>
                      <p className="text-gray-200 text-sm">Daily monitoring of failures, punctuality, and preparing data for meetings helps proactively address issues.</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🤖</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Predictive Maintenance</h4>
                      <p className="text-gray-200 text-sm">Leveraging data analytics and machine learning to forecast equipment failures can reduce downtime.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expected Outcomes Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Expected Outcomes
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl p-6 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-10 h-10 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">Enhanced Efficiency</h3>
                <p className="text-purple-200 lg:text-lg text-base">Improved operational efficiency with optimized wagon and engine utilization</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-2xl p-6 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-10 h-10 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">Higher Revenue</h3>
                <p className="text-emerald-200 lg:text-lg text-base">Increased revenue generation through better resource utilization</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-6 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-10 h-10 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">Sustainable Transport</h3>
                <p className="text-blue-200 lg:text-lg text-base">More sustainable rail transportation with reduced emissions and energy consumption</p>
              </div>
            </div>

            {/* Implementation Summary */}
            <div className="mt-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl py-6 px-2 shadow-2xl border border-white/20">
              <h3 className="lg:text-2xl text-xl font-bold text-white text-center mb-6 flex flex-col gap-4 items-center justify-center">
                <span className="w-5 h-5 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                Implementation Summary
              </h3>
              <ul className="space-y-5 max-w-2xl mx-auto">
                <li className="flex items-start gap-4 mb-3">
                  <span className="flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-2">
                    <svg className="lg:w-6 lg:h-6 w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Optimize wagon and engine utilization for improved operational efficiency.
                  </span>
                </li>
                <li className="flex items-start gap-4 mb-3">
                  <span className="flex-shrink-0 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full p-2">
                    <svg className="lg:w-6 lg:h-6 w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Increase revenue generation through better resource management.
                  </span>
                </li>
                <li className="flex items-start gap-4 mb-3">
                  <span className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full p-2">
                    <svg className="lg:w-6 lg:h-6 w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Promote sustainable rail transport by reducing emissions and energy consumption.
                  </span>
                </li>
                <li className="flex items-start gap-4 mb-3">
                  <span className="flex-shrink-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full p-2">
                    <svg className="lg:w-6 lg:h-6 w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Address infrastructure and operational challenges with a comprehensive approach.
                  </span>
                </li>
                <li className="flex items-start gap-4 mb-3">
                  <span className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-red-500 rounded-full p-2">
                    <svg className="lg:w-6 lg:h-6 w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Leverage modern technology and data-driven decision making for continuous improvement.
                  </span>
                </li>
              </ul>
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

export default WagonEngineUtilization