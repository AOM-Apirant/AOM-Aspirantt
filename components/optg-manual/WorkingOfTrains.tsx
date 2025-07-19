"use client"
import React from 'react'

const WorkingOfTrains = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              WORKING OF TRAINS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to understanding train operations, components, and the systematic approach to railway transportation.
            </p>
          </div>

          {/* Train Definition Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              What is a Train?
            </h2>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed text-lg mb-6">
                A train consists of a locomotive (driving unit) usually attached to haul a trailing load / formation of coaches or wagons. Based on the type of vehicles in the formation, trains are classified as:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-blue-400 mr-3 text-xl">🚂</span>
                  <span className="text-white font-semibold text-lg">Coaching Trains</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-blue-400 mr-3 text-xl">📦</span>
                  <span className="text-white font-semibold text-lg">Goods Trains</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-blue-400 mr-3 text-xl">🔗</span>
                  <span className="text-white font-semibold text-lg">Mixed Trains</span>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg mt-6">
                As per GR 1.02 (58) &quot;train&quot; means an engine with or without vehicles attached, or any self-propelled vehicle with or without a trailer, which cannot be readily lifted off the track.
              </p>
            </div>
          </div>

          {/* Components Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Components of a Train
            </h2>
            
            <div className="space-y-8">
              {/* Locomotive */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Locomotive
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  A locomotive or engine provides the motive power for hauling a train. It is normally attached in front of the train for hauling the formation behind.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">⚡</span>
                    <span className="text-gray-200 text-lg">Provides motive power for hauling</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🔧</span>
                    <span className="text-gray-200 text-lg">Steam → Diesel → Electric evolution</span>
                  </div>
                </div>
              </div>

              {/* Formation */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Formation
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  Coaches and wagons form the basic unit of passenger and goods trains respectively. These units are attached to each other through coupling and usually piped through for enabling the braking system.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🔗</span>
                    <span className="text-gray-200 text-lg">Marshaling order for safety</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">📋</span>
                    <span className="text-gray-200 text-lg">Brake Power Certificate required</span>
                  </div>
                </div>
              </div>

              {/* Train Sets */}
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  Train Sets
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  Train sets are the latest technology where the engines are integrated in the formation. Such train sets like Vandebharat / DEMU / MEMU / EMU are provided with driving cabs at both ends.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-amber-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🚄</span>
                    <span className="text-gray-200 text-lg">Integrated engines in formation</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-amber-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">⚡</span>
                    <span className="text-gray-200 text-lg">Faster acceleration/deceleration</span>
                  </div>
                </div>
              </div>

              {/* Crew */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Crew
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  Train Crew are competent railway staff who are authorized to operate, or support the operation of a locomotive / train.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">👨‍✈️</span>
                    <span className="text-gray-200 text-lg">Loco pilots & Assistant Loco Pilots</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🛡️</span>
                    <span className="text-gray-200 text-lg">Guards & Motorman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Path and Operations Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
              </span>
              Path & Operations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Path */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Path
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  Path is the time and space consumed by a train while running between two stations. The number of paths that can be charted out in a section represents the line capacity of the section.
                </p>
                <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                  <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">📊</span>
                  <span className="text-gray-200 text-lg">Essential for asset utilization and average speed improvement</span>
                </div>
              </div>

              {/* Train Ordering */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Train Ordering
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  A train is ordered to run when all the requirements for running it - locomotive, formation, crew and path are ready or expected to be ready.
                </p>
                <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">📋</span>
                  <span className="text-gray-200 text-lg">Section controllers order through train advice/notice</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🚂</span>
                <span className="text-gray-200 text-lg">Competent crew operation with proper training</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 text-lg">Systematic approach to railway transportation</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔒</span>
                <span className="text-gray-200 text-lg">Safety-first approach with proper signaling</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 text-lg">Efficient path utilization and scheduling</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 text-lg">Comprehensive documentation and certification</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔄</span>
                <span className="text-gray-200 text-lg">Continuous monitoring and control systems</span>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
              Summary
            </h3>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-blue-400/30">
              <p className="text-gray-200 leading-relaxed text-lg text-center">
                Trains are worked between stations by competent crew according to a laid down system of working. 
                The efficient coordination of locomotive, formation, crew, and path ensures safe, reliable, and 
                timely railway operations across the network.
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

export default WorkingOfTrains