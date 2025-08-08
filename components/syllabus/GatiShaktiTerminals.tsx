"use client"
import React from 'react'

const GatiShaktiTerminals = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              GATI SHAKTI TERMINALS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-orange-300 mb-4">South Central Railway</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The South Central Railway (SCR) has been actively implementing the Gati Shakti Multi Modal Cargo Terminal (GCT) policy, 
              introduced by Indian Railways on December 15, 2021, to boost industrial investment in rail cargo handling.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Policy Overview
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                  Gati Shakti Initiative
                </h3>
                <p className="text-gray-200 lg:text-lg text-base">
                  The Gati Shakti policy aims to develop 100 such terminals nationwide within three years, encouraging private investment 
                  on railway or non-railway land to enhance multi-modal logistics. SCR is also utilizing the PM Gati Shakti portal for 
                  planning nine projects spanning 600 km, aimed at reducing logistics costs and boosting industrial competitiveness and exports.
                </p>
              </div>
            </div>
          </div>

          {/* Key Terminals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Key Gati Shakti Terminals
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nakkanadoddi Station */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex lg:flex-row flex-col gap-3 text-center lg:text-left items-center">
                  <span className="text-red-400 mr-3">🚉</span>
                  Nakkanadoddi Station
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1">📍</span>
                    <div>
                      <h4 className="text-white font-semibold">Location</h4>
                      <p className="text-gray-200 text-sm">Guntakal Division</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1">📅</span>
                    <div>
                      <h4 className="text-white font-semibold">Commissioned</h4>
                      <p className="text-gray-200 text-sm">March 22, 2022</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1">🏭</span>
                    <div>
                      <h4 className="text-white font-semibold">Operator</h4>
                      <p className="text-gray-200 text-sm">M/s Indian Oil Corporation Limited</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1">⛽</span>
                    <div>
                      <h4 className="text-white font-semibold">Purpose</h4>
                      <p className="text-gray-200 text-sm">Inward petroleum products handling</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gadchandur Station */}
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex lg:flex-row flex-col gap-3 text-center lg:text-left items-center">
                  <span className="text-pink-400 mr-3">🏗️</span>
                  Gadchandur Station
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-pink-400 mr-3 mt-1">📍</span>
                    <div>
                      <h4 className="text-white font-semibold">Location</h4>
                      <p className="text-gray-200 text-sm">Secunderabad Division</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-pink-400 mr-3 mt-1">💰</span>
                    <div>
                      <h4 className="text-white font-semibold">Investment</h4>
                      <p className="text-gray-200 text-sm">₹15.2 crore</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-pink-400 mr-3 mt-1">🏭</span>
                    <div>
                      <h4 className="text-white font-semibold">Operator</h4>
                      <p className="text-gray-200 text-sm">M/s Dalmia Cement Bharat Limited</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-pink-400 mr-3 mt-1">🏗️</span>
                    <div>
                      <h4 className="text-white font-semibold">Status</h4>
                      <p className="text-gray-200 text-sm">Under construction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Terminal Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚧</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Infrastructure</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Additional rail lines, concreted surface, covered shed</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Electrification</h4>
                    <p className="text-gray-200 lg:text-base text-sm">High-mast lighting and power systems</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💻</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Technology</h4>
                    <p className="text-gray-200 lg:text-base text-sm">FOIS and TMS systems integration</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏗️</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Facilities</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Hamali rest room, approach road, water supply</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Weighbridge</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Electronic in-motion weighbridge</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔧</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Maintenance</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Railways handle operational costs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rail Post Express Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </span>
              Rail Post Gati Shakti Express
            </h2>
            <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-indigo-400 mr-3 mt-1">📅</span>
                    <div>
                      <h4 className="text-white font-semibold">Launch Date</h4>
                      <p className="text-gray-200 text-sm">February 16, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-indigo-400 mr-3 mt-1">🚄</span>
                    <div>
                      <h4 className="text-white font-semibold">Route</h4>
                      <p className="text-gray-200 text-sm">Kacheguda to Hazrat Nizamuddin</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-indigo-400 mr-3 mt-1">📦</span>
                    <div>
                      <h4 className="text-white font-semibold">First Cargo</h4>
                      <p className="text-gray-200 text-sm">15 tonnes of Cadbury chocolates from Renigunta</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1">🏠</span>
                    <div>
                      <h4 className="text-white font-semibold">Service Type</h4>
                      <p className="text-gray-200 text-sm">Door-to-door parcel delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1">📋</span>
                    <div>
                      <h4 className="text-white font-semibold">Partnership</h4>
                      <p className="text-gray-200 text-sm">Joint Parcel Product (JPP) with India Post</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1">🛡️</span>
                    <div>
                      <h4 className="text-white font-semibold">Insurance</h4>
                      <p className="text-gray-200 text-sm">0.05% of cargo value for loss/damage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* National Context Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              National Context
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">100</div>
                <div className="text-blue-200 text-sm">Target Terminals</div>
                <p className="text-gray-200 text-xs mt-2">Nationwide within 3 years</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">15</div>
                <div className="text-cyan-200 text-sm">Commissioned Terminals</div>
                <p className="text-gray-200 text-xs mt-2">As of October 2022</p>
              </div>
              <div className="bg-gradient-to-br from-teal-500/20 to-green-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">600</div>
                <div className="text-teal-200 text-sm">KM Projects</div>
                <p className="text-gray-200 text-xs mt-2">SCR planning scope</p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Conclusion
            </h2>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 px-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                The Gati Shakti Terminals initiative reflects SCR&apos;s commitment to modernizing freight and parcel transport 
                under the Gati Shakti initiative, aligning with national goals for efficient logistics. These terminals enhance 
                safe and secure rail transportation while supporting industrial development and reducing logistics costs. The integration 
                of advanced infrastructure and technology demonstrates SCR&apos;s forward-thinking approach to railway modernization.
              </p>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <span className="text-green-400 mr-3">🚄</span>
                  <a href="https://scr.indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-green-300 transition-colors">
                    SCR Official Website
                  </a>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <span className="text-emerald-400 mr-3">📊</span>
                  <a href="https://pmgatishakti.gov.in" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-emerald-300 transition-colors">
                    PM Gati Shakti Portal
                  </a>
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

export default GatiShaktiTerminals