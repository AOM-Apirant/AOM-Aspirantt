"use client"
import React from 'react'

const ContainerRailTerminal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CONTAINER RAIL TERMINAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">South Central Railway</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The South Central Railway (SCR) zone in India, headquartered in Secunderabad, plays a significant role in freight transportation, 
              including containerized cargo, by connecting inland areas with seaports and facilitating trade.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Container Rail Terminals (CRTs) and Inland Container Depots (ICDs) are specialized facilities designed to handle containerized cargo 
                  for both domestic and export-import (EXIM) trade. These terminals support multi-modal logistics, enabling efficient movement of goods 
                  via rail and road, and are often operated by entities like the Container Corporation of India Ltd. (CONCOR) or private operators 
                  under Indian Railways&apos; policies.
                </p>
              </div>
            </div>
          </div>

          {/* Key Terminals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Key Container Rail Terminals
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
                    Nagulapalle ICD
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm mb-3">
                    <strong className="text-blue-300">Location:</strong> Hyderabad, Telangana
                  </p>
                  <div className="space-y-2 text-gray-200 text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Operated by CONCOR</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>EXIM & domestic cargo</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Modern handling equipment</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                    Guntur DCT
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm mb-3">
                    <strong className="text-emerald-300">Location:</strong> Andhra Pradesh
                  </p>
                  <div className="space-y-2 text-gray-200 text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Domestic Container Terminal</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Regional trade support</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>CONCOR managed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                    Sanathnagar ICD
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm mb-3">
                    <strong className="text-purple-300">Location:</strong> Hyderabad, Telangana
                  </p>
                  <div className="space-y-2 text-gray-200 text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>CONCOR operated</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Domestic & EXIM cargo</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Southern ports connectivity</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                    Thimmapur Terminal
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm mb-3">
                    <strong className="text-orange-300">Location:</strong> Telangana
                  </p>
                  <div className="space-y-2 text-gray-200 text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Hyderabad-Chennai circuit</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Gati Shakti framework</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Enhanced EXIM movement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gati Shakti Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Gati Shakti Multi-Modal Cargo Terminals
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                      <span className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                      Current Status
                    </h3>
                    <p className="text-gray-200 lg:text-base text-sm">
                      <strong className="text-yellow-300">9 GCTs</strong> commissioned as of July 2023, 
                      the highest among all railway zones.
                    </p>
                  </div>
                  <div>
                    <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                      <span className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                      New Development
                    </h3>
                    <p className="text-gray-200 lg:text-base text-sm">
                      New GCT at <strong className="text-yellow-300">Gadchendur Station</strong> 
                      (Secunderabad Division) - ₹15.2 crore investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Policy & Development Initiatives
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold mb-3 text-center">ECRTs</h3>
                <p className="text-gray-200 text-sm text-center">
                  Exclusive Container Rail Terminals on railway land to promote container traffic
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold mb-3 text-center">Private Investment</h3>
                <p className="text-gray-200 text-sm text-center">
                  Concessional land leasing up to 35 years at 1.5% of market value
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold mb-3 text-center">Hub-and-Spoke</h3>
                <p className="text-gray-200 text-sm text-center">
                  Consolidate containers for efficient long-distance transport
                </p>
              </div>
            </div>
          </div>

          {/* Operational Highlights */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Operational Highlights
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Container Traffic Growth</h3>
                    <p className="text-gray-200 lg:text-base text-sm">
                      <strong className="text-cyan-300">2023-24:</strong> 85.58 million tonnes<br/>
                      <strong className="text-cyan-300">2024-25:</strong> 91 million tonnes (projected)<br/>
                      <strong className="text-cyan-300">Revenue:</strong> ₹9,164.47 crore
                    </p>
                  </div>
                  <div>
                    <h3 className="lg:text-xl text-lg font-bold text-white mb-4">CONCOR&apos;s Role</h3>
                    <p className="text-gray-200 lg:text-base text-sm">
                      Multi-modal logistics support<br/>
                      Modern warehousing<br/>
                      Bonded trucking services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges & Opportunities */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              Challenges & Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Challenges
                </h3>
                <div className="space-y-2 text-gray-200 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Road transport competition</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Infrastructure upgrades needed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Opportunities
                </h3>
                <div className="space-y-2 text-gray-200 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Strategic location advantage</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>EXIM trade growth potential</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Favorable policies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Conclusion
            </h2>
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base text-center leading-relaxed">
                The South Central Railway zone is a key player in India&apos;s containerized freight ecosystem, with terminals like 
                Nagulapalle, Guntur, Sanathnagar, and Thimmapur supporting both domestic and EXIM cargo. The commissioning of 
                9 Gati Shakti Multi-Modal Cargo Terminals and plans for new CRTs under favorable policies reflect SCR&apos;s 
                commitment to modernizing logistics.
              </p>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                <p className="text-gray-200 lg:text-base text-sm text-center">
                  <strong className="text-blue-300">For detailed information:</strong><br/>
                  Indian Railways Freight Services: www.fois.indianrail.gov.in<br/>
                  CONCOR: insidertrading.concorindia.com
                </p>
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

export default ContainerRailTerminal