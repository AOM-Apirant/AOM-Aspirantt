"use client"
import React from 'react'

const CoachingLocomotives = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-cyan-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              COACHING LOCOMOTIVES
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to locomotive classification, maintenance schedules, and operational management for coaching train services.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-center text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed lg:text-lg text-base mb-6">
                Locomotives are categorized as coaching, freight and mixed based on their design specifications especially hauling power and gear ratio. This classification is reflected in the locomotive syntax which generally has three digits followed by a number and subsequent digit if any.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-teal-400 mr-3 lg:text-xl text-lg">🚂</span>
                  <span className="text-white font-semibold lg:text-lg text-base">Coaching</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-teal-400 mr-3 lg:text-xl text-lg">📦</span>
                  <span className="text-white font-semibold lg:text-lg text-base">Freight</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-teal-400 mr-3 lg:text-xl text-lg">🔗</span>
                  <span className="text-white font-semibold lg:text-lg text-base">Mixed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locomotive Syntax Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-center text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Locomotive Syntax
            </h2>
            
            <div className="space-y-8">
              {/* First Digit - Gauge */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  First Digit - Gauge
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-cyan-400 mr-3 lg:text-xl text-lg font-bold">W</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Broad gauge</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-cyan-400 mr-3 lg:text-xl text-lg font-bold">Y</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Meter gauge</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-cyan-400 mr-3 lg:text-xl text-lg font-bold">Z</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Narrow gauge (2ft6in)</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-cyan-400 mr-3 lg:text-xl text-lg font-bold">N</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Narrow gauge (2ft)</span>
                  </div>
                </div>
              </div>

              {/* Second Digit - Motive Power */}
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
                  Second Digit - Motive Power
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-blue-400 mr-3 lg:text-xl text-lg font-bold">D</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Diesel</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-blue-400 mr-3 lg:text-xl text-lg font-bold">C</span>
                    <span className="text-white font-semibold lg:text-lg text-base">DC electric</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-blue-400 mr-3 lg:text-xl text-lg font-bold">A</span>
                    <span className="text-white font-semibold lg:text-lg text-base">AC</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-blue-400 mr-3 lg:text-xl text-lg font-bold">CA</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Both DC & AC</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-blue-400 mr-3 lg:text-xl text-lg font-bold">B</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Battery</span>
                  </div>
                </div>
              </div>

              {/* Third Digit - Job Type */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                  Third Digit - Job Type
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-indigo-400 mr-3 lg:text-xl text-lg font-bold">G</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Goods</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-indigo-400 mr-3 lg:text-xl text-lg font-bold">P</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Passenger</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-indigo-400 mr-3 lg:text-xl text-lg font-bold">M</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Mixed</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-indigo-400 mr-3 lg:text-xl text-lg font-bold">S</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Shunting</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-indigo-400 mr-3 lg:text-xl text-lg font-bold">U</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Multiple units</span>
                  </div>
                </div>
              </div>

              {/* Example */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Example: WDM3A
                </h3>
                <div className="grid md:grid-cols-2 gap-1">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg lg:p-4 p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 lg:text-xl text-lg group-hover/feature:scale-110 transition-transform duration-300">🔍</span>
                    <span className="text-gray-200 lg:text-lg text-base">W - Broad gauge</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg lg:p-4 p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 lg:text-xl text-lg group-hover/feature:scale-110 transition-transform duration-300">🔍</span>
                    <span className="text-gray-200 lg:text-lg text-base">D - Diesel</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg lg:p-4 p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 lg:text-xl text-lg group-hover/feature:scale-110 transition-transform duration-300">🔍</span>
                    <span className="text-gray-200 lg:text-lg text-base">M - Mixed (Passenger & Goods)</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg lg:p-4 p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 lg:text-xl text-lg group-hover/feature:scale-110 transition-transform duration-300">🔍</span>
                    <span className="text-gray-200 lg:text-lg text-base">3A - 3100 hp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loco Maintenance Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Loco Maintenance
            </h2>
            
            <div className="space-y-6">
              {/* Trip Inspection */}
              <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-4 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="lg:text-2xl text-xl font-bold text-pink-400 mr-4">TI</span>
                  <h3 className="lg:text-xl text-lg font-bold text-white">Trip Inspection</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20"> 
                    <span className="text-pink-400 mr-3 lg:text-xl text-lg">⏱️</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Duration: 2 hours</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-pink-400 mr-3 lg:text-xl text-lg">🔄</span>
                    <span className="text-white font-semibold lg:text-lg text-base">After 4500 kms or one trip</span>
                  </div>
                </div>
              </div>

              {/* IA Maintenance */}
              <div className="bg-gradient-to-br from-rose-500/20 to-red-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-4 shadow-lg border border-rose-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="lg:text-2xl text-xl font-bold text-rose-400 mr-4">IA</span>
                  <h3 className="lg:text-xl text-lg font-bold text-white">IA Maintenance</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-rose-400 mr-3 lg:text-xl text-lg">⏱️</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Duration: 4 hours</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-rose-400 mr-3 lg:text-xl text-lg">🔄</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Periodicity: 60 days</span>
                  </div>
                </div>
              </div>

              {/* IC Maintenance */}
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="lg:text-2xl text-xl font-bold text-red-400 mr-4">IC</span>
                  <h3 className="lg:text-xl text-lg font-bold text-white">IC Maintenance</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-red-400 mr-3 lg:text-xl text-lg">⏱️</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Duration: 8 hours</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-red-400 mr-3 lg:text-xl text-lg">🔄</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Periodicity: 120 days</span>
                  </div>
                </div>
              </div>

              {/* AOH Maintenance */}
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-4 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="lg:text-2xl text-xl font-bold text-orange-400 mr-4">AOH</span>
                  <h3 className="lg:text-xl text-lg font-bold text-white">AOH Maintenance</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-orange-400 mr-3 lg:text-xl text-lg">⏱️</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Duration: 6 working days</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-orange-400 mr-3 lg:text-xl text-lg">🔄</span>
                    <span className="text-white font-semibold lg:text-lg text-base">18 months + 15 days (WAP-4 & WAG-5)</span>
                  </div>
                </div>
              </div>

              {/* IOH Maintenance */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-4 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="lg:text-2xl text-xl font-bold text-yellow-400 mr-4">IOH</span>
                  <h3 className="lg:text-xl text-lg font-bold text-white">IOH Maintenance</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-yellow-400 mr-3 lg:text-xl text-lg">⏱️</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Duration: 9 working days</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-yellow-400 mr-3 lg:text-xl text-lg">🔄</span>
                    <span className="text-white font-semibold lg:text-lg text-base">36 months + 1 month or 6 lakh km</span>
                  </div>
                </div>
              </div>

              {/* POH Maintenance */}
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-lg lg:p-6 p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="lg:text-2xl text-xl font-bold text-amber-400 mr-4">POH</span>
                  <h3 className="lg:text-xl text-lg font-bold text-white">POH Maintenance</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-amber-400 mr-3 lg:text-xl text-lg">⏱️</span>
                    <span className="text-white font-semibold lg:text-lg text-base">Duration: 24 working days</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-amber-400 mr-3 lg:text-xl text-lg">🔄</span>
                    <span className="text-white font-semibold lg:text-lg text-base">6 years + 3 months or 15 lakh km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loco Links Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Loco Links
            </h2>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed lg:text-lg text-base mb-6">
                Locomotives nominated to work coaching trains are programmed to match the time table. These schedules are called loco links. While preparing loco links, factors like adequate powering for the train service, permitted speed of locos, time slots for maintenance schedules, fueling slots in case of diesel, time for shed in / out movements have to be kept in mind.
              </p>
              <div className="grid md:grid-cols-2 gap-1">
                <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Adequate powering for train service</span>
                </div>
                <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🚀</span>
                  <span className="text-gray-200 lg:text-lg text-base">Permitted speed considerations</span>
                </div>
                <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🔧</span>
                  <span className="text-gray-200 lg:text-lg text-base">Maintenance schedule time slots</span>
                </div>
                <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">⛽</span>
                  <span className="text-gray-200 lg:text-lg text-base">Fueling slots for diesel locos</span>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed lg:text-lg text-base mt-6">
                The efficiency of loco links is assessed by train kms per engine day in use. Care has to be taken to ensure optimum utilization of loco shed capacity by avoiding bunching of locos. Diesel loco working under wire to be kept minimum. Where ARMVs and ARTs are stationed and no powers are designated, links have to be made strategically so as to make available at least one diesel loco at any point of time.
              </p>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:py-10 py-8 lg:px-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔢</span>
                <span className="text-gray-200 lg:text-lg text-base">Systematic locomotive classification</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔧</span>
                <span className="text-gray-200 lg:text-lg text-base">Comprehensive maintenance schedules</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 lg:text-lg text-base">Efficient loco link management</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 lg:text-lg text-base">Optimum power utilization</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔄</span>
                <span className="text-gray-200 lg:text-lg text-base">Strategic resource planning</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Detailed operational protocols</span>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl lg:p-8 p-4 shadow-xl border border-white/20">
            <h3 className="lg:text-2xl text-xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="lg:w-4 lg:h-4 w-3 h-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
              Summary
            </h3>
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl lg:p-8 p-4 shadow-lg border border-teal-400/30">
              <p className="text-gray-200 leading-relaxed lg:text-lg text-base text-center">
                Coaching locomotives are systematically classified and maintained through comprehensive schedules ensuring optimal performance and safety. 
                The loco link system ensures efficient utilization of resources while maintaining the highest standards of operational excellence 
                across the Indian Railways network.
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

export default CoachingLocomotives