'use client'
import React from 'react'

const LevelCrossing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CLASSIFICATION OF LEVEL CROSSINGS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive classification system based on rail and road traffic volume and visibility conditions, 
              ensuring proper safety measures and interlocking requirements.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white text-center mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Classification Overview
            </h2>
            <p className="lg:text-lg text-base text-gray-200 text-center mb-8">
              The classification of level crossings shall be based on the volume of rail and road traffic and
              visibility conditions. The classification of level crossings shall be as under:
            </p>
          </div>

          {/* Classification Cards */}
          <div className="space-y-8 lg:space-y-12">
            {/* Special Class */}
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-4 lg:p-8 border border-red-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex lg:flex-row flex-col gap-4 items-center mb-4">
                    <span className="lg:text-3xl text-2xl mr-4">🚨</span>
                    <h3 className="lg:text-2xl text-xl font-bold text-red-300">Special Class</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-red-400 mr-3 text-lg">📊</span>
                      <div>
                        <span className="font-semibold text-red-200">Criteria:</span>
                        <span className="text-gray-200 ml-2">TVUs greater than 50,000</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-400 mr-3 text-lg">🔒</span>
                      <div>
                        <span className="font-semibold text-red-200">Interlocking:</span>
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm ml-2 border border-green-400/30">Compulsory</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full lg:w-16 lg:h-16 w-10 h-10 flex items-center justify-center shadow-lg">
                  <span className="lg:text-2xl text-xl font-bold text-white">1</span>
                </div>
              </div>
            </div>

            {/* A Class */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-4 lg:p-8 border border-orange-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex lg:flex-row flex-col gap-4 items-center mb-4">
                    <span className="lg:text-3xl text-2xl mr-4">⚠️</span>
                                         <h3 className="lg:text-2xl text-xl font-bold text-orange-300">&apos;A&apos; Class</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-orange-400 mr-3 mt-1 text-lg">📊</span>
                      <div>
                        <span className="font-semibold text-orange-200">Criteria:</span>
                        <span className="text-gray-200 ml-2">TVUs between 50,000-30,000 or line capacity utilization 80% (on single line) and number of road vehicles greater than 1000</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-400 mr-3 text-lg">🔒</span>
                      <div>
                        <span className="font-semibold text-orange-200">Interlocking:</span>
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm ml-2 border border-green-400/30">Compulsory</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full lg:w-16 lg:h-16 w-10 h-10 flex items-center justify-center shadow-lg">
                  <span className="lg:text-2xl text-xl font-bold text-white">2</span>
                </div>
              </div>
            </div>

            {/* B Class */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-4 lg:p-8 border border-yellow-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex lg:flex-row flex-col gap-4 items-center mb-4">
                    <span className="lg:text-3xl text-2xl mr-4">🚧</span>
                                         <h3 className="lg:text-2xl text-xl font-bold text-yellow-300">&apos;B&apos; Class</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg">📊</span>
                      <div>
                        <span className="font-semibold text-yellow-200">Criteria:</span>
                        <span className="text-gray-200 ml-2">TVUs between 30,000 and 20,000 and number of road vehicles are greater than 750</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-3 text-lg">🔒</span>
                      <div>
                        <span className="font-semibold text-yellow-200">Interlocking:</span>
                        <span className="inline-block px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm ml-2 border border-gray-400/30">Not Required</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full lg:w-16 lg:h-16 w-10 h-10 flex items-center justify-center shadow-lg">
                  <span className="lg:text-2xl text-xl font-bold text-white">3</span>
                </div>
              </div>
            </div>

            {/* B1 Class */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-4 lg:p-8 border border-blue-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300 ml-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex lg:flex-row flex-col gap-4 items-center mb-4">
                    <span className="lg:text-3xl text-2xl mr-4">🔵</span>
                                         <h3 className="lg:text-2xl text-xl font-bold text-blue-300">&apos;B1&apos; Class</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-blue-400 mr-3 text-lg">📊</span>
                      <div>
                        <span className="font-semibold text-blue-200">Criteria:</span>
                        <span className="text-gray-200 ml-2">TVUs between 30,000 and 25,000</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-400 mr-3 text-lg">🔒</span>
                      <div>
                        <span className="font-semibold text-blue-200">Interlocking:</span>
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm ml-2 border border-green-400/30">Compulsory</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* B2 Class */}
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-4 lg:p-8 border border-indigo-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300 ml-8 mb-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex lg:flex-row flex-col gap-4 items-center mb-4">
                    <span className="lg:text-3xl text-2xl mr-4">🟣</span>
                                         <h3 className="lg:text-2xl text-xl font-bold text-indigo-300">&apos;B2&apos; Class</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-indigo-400 mr-3 text-lg">📊</span>
                      <div>
                        <span className="font-semibold text-indigo-200">Criteria:</span>
                        <span className="text-gray-200 ml-2">TVUs between 25,000 and 20,000</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-indigo-400 mr-3 text-lg">🔒</span>
                      <div>
                        <span className="font-semibold text-indigo-200">Interlocking:</span>
                        <span className="inline-block px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm ml-2 border border-gray-400/30">Not Required</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* C Class */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-4 lg:p-8 border border-green-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex lg:flex-row flex-col gap-4 items-center mb-4">
                    <span className="text-3xl mr-4">🟢</span>
                                         <h3 className="text-2xl font-bold text-green-300">4. &apos;C&apos; Class</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1 text-lg">📊</span>
                      <div>
                        <span className="font-semibold text-green-200">Criteria:</span>
                        <span className="text-gray-200 ml-2">All other level crossings not covered in above classes</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-3 text-lg">🔒</span>
                      <div>
                        <span className="font-semibold text-green-200">Interlocking:</span>
                        <span className="inline-block px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm ml-2 border border-gray-400/30">Not Required</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full lg:w-16 lg:h-16 w-10 h-10 flex items-center justify-center shadow-lg">
                  <span className="lg:text-2xl text-xl font-bold text-white">4</span>
                </div>
              </div>
            </div>

            {/* D Class */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-4 lg:p-8 border border-purple-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex lg:flex-row flex-col gap-4 items-center mb-4">
                    <span className="text-3xl mr-4">🐄</span>
                                         <h3 className="text-2xl font-bold text-purple-300">5. &apos;D&apos; Class</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3 text-lg">📊</span>
                      <div>
                        <span className="font-semibold text-purple-200">Criteria:</span>
                        <span className="text-gray-200 ml-2">For cattle crossings</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3 text-lg">🔒</span>
                      <div>
                        <span className="font-semibold text-purple-200">Interlocking:</span>
                        <span className="inline-block px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm ml-2 border border-gray-400/30">Not Required</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full lg:w-16 lg:h-16 w-10 h-10 flex items-center justify-center shadow-lg">
                  <span className="lg:text-2xl text-xl font-bold text-white">5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legend Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 lg:px-8 mt-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white text-center mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Interlocking Requirements Legend
            </h2>
            <div className="grid lg:grid-cols-2 gap-1">
              <div className="flex items-center justify-center group hover:bg-white/5 p-2 rounded-xl transition-all duration-300">
                <span className="inline-block px-4 py-2 bg-green-500/20 text-green-300 rounded-full lg:text-lg text-base mr-4 border border-green-400/30 group-hover:scale-110 transition-transform">Compulsory</span>
                <span className="lg:text-lg text-base text-gray-200">Interlocking required</span>
              </div>
              <div className="flex items-center justify-center group hover:bg-white/5 p-2 rounded-xl transition-all duration-300">
                <span className="inline-block px-4 py-2 bg-gray-500/20 text-gray-300 rounded-full lg:text-lg text-base mr-4 border border-gray-400/30 group-hover:scale-110 transition-transform">Not Required</span>
                <span className="lg:text-lg text-base text-gray-200">Interlocking not required</span>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 lg:px-8 mt-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white text-center mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-green-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚦</div>
                  <h3 className="lg:text-xl text-lg font-semibold text-green-300 mb-3">Traffic Volume Based</h3>
                  <p className="lg:text-base text-sm text-gray-200">Classification based on TVU (Train Vehicle Units) and road traffic volume</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-blue-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">👁️</div>
                  <h3 className="lg:text-xl text-lg font-semibold text-blue-300 mb-3">Visibility Conditions</h3>
                  <p className="lg:text-base text-sm text-gray-200">Safety measures considering visibility and environmental factors</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-purple-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="lg:text-xl text-lg font-semibold text-purple-300 mb-3">Interlocking Requirements</h3>
                  <p className="lg:text-base text-sm text-gray-200">Clear guidelines for compulsory and optional interlocking systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl p-4 lg:p-10 mt-12 text-white text-center">
            <h3 className="lg:text-3xl text-2xl font-bold mb-4 text-center">Understanding Level Crossing Classification</h3>
            <p className="lg:text-xl text-base mb-8 opacity-90 max-w-3xl mx-auto text-center">
              Proper classification ensures appropriate safety measures and interlocking requirements for different types of level crossings.
            </p>
            <button className="bg-white text-green-600 lg:px-8 lg:py-4 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 lg:text-lg text-base text-center">
              Learn More About Safety Standards
            </button>
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

export default LevelCrossing