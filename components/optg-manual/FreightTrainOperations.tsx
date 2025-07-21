"use client"
import React from 'react'

const FreightTrainOperations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              FREIGHT TRAIN OPERATIONS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to freight transportation, wagon management, and operational procedures for Indian Railways.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center text-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-blue-400/30">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Freight Transportation involves movement of raw material from production centers to industries and semi-finished/finished goods to consuming areas. <br /> <br /> It plays an important role in economic and industrial development of a country. <br /> <br /> The freight business is the major source of revenue for the Indian Railways. <br /> <br /> Main activity centers of freight operation include sidings, goods sheds and examination yards.
              </p>
            </div>
          </div>

          {/* Types of Freight Trains */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center text-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </span>
              Types of Freight Trains
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Pilot Trains */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Pilot Trains
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Moving between serving station and siding for loading or unloading operations.
                </p>
              </div>

              {/* Through Goods Trains */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Through Goods Trains
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Freight trains transporting goods from one goods yard to the next without stoppage at intermediate points.
                </p>
              </div>

              {/* MGR Trains */}
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Merry Go Round (MGR)
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Continuous trips between loading and unloading points with captive loco/formation in circular track arrangement.
                </p>
              </div>

              {/* Block Rake */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Block Rake
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Full train length determined by wagon type, usually booked for single destination with Train Load fare benefit.
                </p>
              </div>

              {/* Mini Rake */}
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
                  Mini Rake
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Short rake with half the wagons of Block Rake, formed during slack seasons to promote loading.
                </p>
              </div>

              {/* Long Haul Trains */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                  Long Haul Trains
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Formed by joining two or three block rakes, doubles/triples section capacity. In SCR called Python rakes.
                </p>
              </div>

              {/* Two Point Rake */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Two Point Rake
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Freight train carrying two sets of wagons destined for two terminals, permitted for authorized pair of destinations.
                </p>
              </div>

              {/* Multi Point Rake */}
              <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                  Multi Point Rake
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Train carrying sets of wagons destined to more than two destinations, permitted only during slack season.
                </p>
              </div>

              {/* Crack Trains */}
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  Crack Trains
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Planned to run bypassing intermediate crew changing points, given good path to reach destination within crew hours.
                </p>
              </div>

              {/* Private Trains */}
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  Private Trains
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Fleets owned by private companies, most container trains fall under this category along with special wagon trains.
                </p>
              </div>
            </div>
          </div>

          {/* Freight Locomotives */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center text-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Freight Locomotives
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-amber-400/30">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-6 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  Locomotive Characteristics
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg lg:p-3 p-1 transition-all duration-300">
                    <span className="text-amber-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚡</span>
                    <span className="text-gray-200 lg:text-sm text-base">Higher hauling power for loaded trains</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg lg:p-3 p-1 transition-all duration-300">
                    <span className="text-amber-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🔄</span>
                    <span className="text-gray-200 lg:text-sm text-base">Do not work in specific links except captive circuits</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-yellow-400/30">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-6 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  Load Chart & Power Plan
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg lg:p-3 p-1 transition-all duration-300">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📊</span>
                    <span className="text-gray-200 lg:text-sm text-base">Load chart provides section-wise tabulation for various locomotive combinations</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg lg:p-3 p-1 transition-all duration-300">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                    <span className="text-gray-200 lg:text-sm text-base">Power plan prepared annually based on previous year&apos;s train operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Wagons */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center text-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              Types of Wagons
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Open Wagons */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Open Wagons
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">Carry coal, ores, limestone. Can be tippled or unloaded through flap doors.</p>
              </div>

              {/* Covered Wagons */}
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Covered Wagons
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">For goods prone to atmospheric damage like grains, cement, fertilizers.</p>
              </div>

              {/* Flat Wagons */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Flat Wagons
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">For steel coils, rail sleepers. No side walls.</p>
              </div>

              {/* Container Wagons */}
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
                  Container Wagons
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">Special flat wagons for containers with semi-permanent coupling.</p>
              </div>

              {/* Hopper Wagons */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                  Hopper Wagons
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">Rapid discharge from bottom for coal and ballast.</p>
              </div>

              {/* Well Wagons */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Well Wagons
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">Well-shaped under frame for military tanks, heavy equipment.</p>
              </div>

              {/* Tank Wagons */}
              <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                  Tank Wagons
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">For liquid consignments like petroleum, milk, edible oils.</p>
              </div>

              {/* Automobile Carriers */}
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  Automobile Carriers
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">Specially designed for automobiles. Modified coaches called NMGs.</p>
              </div>
            </div>
          </div>

          {/* Wagon Syntax */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center text-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Wagon Syntax Codes
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { code: 'B', detail: 'Bogie Wagon' },
                { code: 'O', detail: 'Open Wagon' },
                { code: 'C', detail: 'Covered Wagon' },
                { code: 'T', detail: 'Tank Wagon' },
                { code: 'P', detail: 'Petrol' },
                { code: 'LPG', detail: 'Liquid Petroleum Gas' },
                { code: 'BR', detail: 'Bottom Rapid Discharge' },
                { code: 'BY', detail: 'Bottom Mech. Discharge' },
                { code: 'R', detail: 'Rails' },
                { code: 'C', detail: 'Container' },
                { code: 'L', detail: 'Low Platform' },
                { code: 'ST', detail: 'Steel Load' },
                { code: 'N', detail: 'Air Brake Stock' },
                { code: 'X', detail: 'All welded construction' },
                { code: 'HS', detail: 'High speed' },
                { code: 'HL', detail: 'High Load' },
                { code: 'HA', detail: 'Higher axle load' },
                { code: 'LW', detail: 'Light weight' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-lg p-3 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300 mb-2">{item.code}</div>
                    <div className="text-gray-200 text-sm">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wagon Pooling */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center text-center">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Wagon Pooling
            </h2>
            
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-cyan-400/30">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                Every zonal railway of IR has been allotted with a fleet of freight wagons by the Directorate of Wagon Interchange (DWI) under the IRCA for coordinating wagon interchanges. <br /> <br />Of these, most wagons are contributed to the general pool. <br /> <br />Zones are restricted to maintain their wagon balances proportionate to their contribution to the general pool of wagons.
              </p>
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl lg:p-4 p-3 border border-blue-400/30">
                <p className="text-gray-200 lg:text-sm text-base">
                  <strong className="text-blue-300">Non-Pooled Wagons (&apos;NP):</strong> Wagons not contributed to the general pool, usually special-purpose high-capacity wagons earmarked for specific operations on particular routes.
                </p>
              </div>
            </div>
          </div>

          {/* Train Examination */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center text-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </span>
              Train Examination
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-green-400/30">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Closed Circuit Examination
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">Valid for higher number of days, can be loaded multiple times before subsequent examination.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-emerald-400/30">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Premium Examination
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">High-priority examination for specific wagon types and operations.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-teal-400/30">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  End to End Examination
                </h3>
                <p className="text-gray-200 lg:text-sm text-base">Comprehensive examination covering all aspects of wagon condition.</p>
              </div>
            </div>
          </div>

          {/* Loading Process */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center text-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </span>
              Loading Process
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-orange-400/30">
                <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                  Customer Registration
                </h3>
                <p className="text-gray-200 lg:text-sm text-base leading-relaxed">
                  Customer registers indent furnishing particulars of commodity, type of wagon required and destination terminal by paying Wagon demand registration fee (WDRF).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-red-400/30">
                  <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                    Traffic Classes
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-red-400 mr-2">A</span>
                      <span className="text-gray-200">Highest priority</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-400 mr-2">B</span>
                      <span className="text-gray-200">High priority</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-400 mr-2">C</span>
                      <span className="text-gray-200">Medium priority</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-400 mr-2">D</span>
                      <span className="text-gray-200">Low priority</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-pink-400/30">
                  <h3 className="lg:text-2xl text-lg font-bold text-white mb-3 flex lg:flex-row flex-col gap-4 items-center text-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                    Special Considerations
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-pink-400 mr-2 mt-1">✦</span>
                      <span className="text-gray-200 text-sm">Block rakes traffic</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-pink-400 mr-2 mt-1">✦</span>
                      <span className="text-gray-200 text-sm">Contractual obligations</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-pink-400 mr-2 mt-1">✦</span>
                      <span className="text-gray-200 text-sm">Round the clock working stations</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-pink-400 mr-2 mt-1">✦</span>
                      <span className="text-gray-200 text-sm">Mechanized loading systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Monitoring */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center text-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Daily Monitoring of Goods Operation
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-3 shadow-lg border border-emerald-400/30">
                <h3 className="text-xl font-bold text-white text-center mb-4">Loading</h3>
                <p className="text-gray-200 text-sm">All on hand empty wagons to be loaded in time to achieve maximum loading for the day.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-3 shadow-lg border border-teal-400/30">
                <h3 className="text-xl font-bold text-white text-center mb-4">Unloading</h3>
                <p className="text-gray-200 text-sm">All on hand inward wagons placed for unloading in time to achieve maximum unloading.</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-3 shadow-lg border border-cyan-400/30">
                <h3 className="text-xl font-bold text-white text-center mb-4">Handing Over</h3>
                <p className="text-gray-200 text-sm">Maximizing handing over of outward & surplus empties to other divisions.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-3 shadow-lg border border-blue-400/30">
                <h3 className="text-xl font-bold text-white text-center mb-4">Power Planning</h3>
                <p className="text-gray-200 text-sm">Planning appropriate locomotives to clear wagons with minimum terminal detentions.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-3 shadow-lg border border-indigo-400/30">
                <h3 className="text-xl font-bold text-white text-center mb-4">Planning/Forecasting</h3>
                <p className="text-gray-200 text-sm">Forecasting based on odd hours wagon holding targeting objectives and resource utilization.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-3 shadow-lg border border-purple-400/30">
                <h3 className="text-xl font-bold text-white text-center mb-4">Execution</h3>
                <p className="text-gray-200 text-sm">Finalized plan communicated to all concerned supervisors for implementation.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-3 shadow-lg border border-pink-400/30">
                <h3 className="text-xl font-bold text-white text-center mb-4">Review</h3>
                <p className="text-gray-200 text-sm">Continuous monitoring and adjustment of operations based on dynamic changes and deviations.</p>
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

export default FreightTrainOperations