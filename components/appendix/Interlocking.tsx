'use client'
import React from 'react'

const Interlocking = () => {
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
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              STANDARDS OF INTERLOCKING
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to railway interlocking standards based on speed factors and safety requirements, 
              ensuring systematic control and monitoring of train operations.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center text-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Interlocking Standards Overview
            </h2>
            <p className="text-gray-200 text-center mb-8 lg:text-lg text-base">
              Depending upon the standards of safety devices provided at the stations, in conformity to the speed factor, 
              there are four standards of interlocking, namely Std I (R), Std II (R), Std III (R) and Std IV (R).
            </p>
          </div>

          {/* Speed Standards Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Speed Standards
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 backdrop-blur-lg rounded-lg p-1 lg:p-6 text-center shadow-lg border border-blue-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-3">🚄</div>
                <div className="lg:text-xl text-base font-bold text-white mb-2">Std I (R)</div>
                <div className="text-blue-200 text-sm">Upto 50 KMPH</div>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 backdrop-blur-lg rounded-lg p-1 lg:p-6 text-center shadow-lg border border-green-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-3">🚅</div>
                <div className="lg:text-xl text-base font-bold text-white mb-2">Std II (R)</div>
                <div className="text-green-200 text-sm">Upto 110 KMPH</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 backdrop-blur-lg rounded-lg p-1 lg:p-6 text-center shadow-lg border border-yellow-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-3">🚆</div>
                <div className="lg:text-xl text-base font-bold text-white mb-2">Std III (R)</div>
                <div className="text-yellow-200 text-sm">Upto 140 KMPH</div>
              </div>
              <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 backdrop-blur-lg rounded-lg p-1 lg:p-6 text-center shadow-lg border border-red-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">   
                <div className="text-2xl mb-3">🚇</div>
                <div className="lg:text-xl text-base font-bold text-white mb-2">Std IV (R)</div>
                <div className="text-red-200 text-sm">Upto 160 KMPH</div>
              </div>
            </div>
          </div>

          {/* Feature Standards Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center text-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Feature Standards Comparison
            </h2>
            
            <div className="space-y-6">
              {/* Isolation */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-2xl font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🛡️</span>
                  Isolation
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-400/30">Not compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">Compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">Compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">Compulsory</span>
                  </div>
                </div>
              </div>

              {/* Two Aspect Signalling */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-xl font-bold text-white text-center mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🚦</span>
                  Two Aspect (TAS) semaphore/Multi Aspect Signalling
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <div className="text-sm text-gray-200">TAS/MAS</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <div className="text-sm text-gray-200">TAS/MAS</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <div className="text-sm text-gray-200">MAS</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <div className="text-sm text-gray-200">MAS</div>
                  </div>
                </div>
              </div>

              {/* Double Distant */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-2xl font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">⚠️</span>
                  Double Distant
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-400/30">Not compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs border border-yellow-400/30">Desirable</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">Compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">Compulsory</span>
                  </div>
                </div>
              </div>

              {/* Point Operation */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-2xl font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🔧</span>
                  Point Operation
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <div className="text-sm text-gray-200">Mechanical</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <div className="text-sm text-gray-200">Mechanical/Electrical</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <div className="text-sm text-gray-200">Mechanical/Electrical</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <div className="text-sm text-gray-200">Electrical</div>
                  </div>
                </div>
              </div>

              {/* Point Locking */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-2xl font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🔒</span>
                  Point Locking
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <div className="text-xs text-gray-200 leading-tight">
                      <div>Key/Facing Point</div>
                      <div>hand plunger</div>
                    </div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <div className="text-xs text-gray-200 leading-tight">
                      <div>Facing Point locking</div>
                      <div>with point machine</div>
                    </div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <div className="text-xs text-gray-200 leading-tight">
                      <div>Facing Point locking</div>
                      <div>with point machine</div>
                    </div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <div className="text-xs text-gray-200 leading-tight">
                      <div>Clamp type direct</div>
                      <div>locking is desirable</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point Detection */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-2xl font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🔍</span>
                  Point Detection
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <div className="text-sm text-gray-200">Mechanical/Electrical</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <div className="text-sm text-gray-200">Mechanical/Electrical</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <div className="text-sm text-gray-200">Mechanical/Electrical</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <div className="text-sm text-gray-200">Electrical</div>
                  </div>
                </div>
              </div>

              {/* Lock Detection */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-xl font-bold text-white text-center mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🔐</span>
                  Lock Detection
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-400/30">Not compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">Compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">Compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">Compulsory</span>
                  </div>
                </div>
              </div>

              {/* Interlocking */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-xl font-bold text-white text-center mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">⚙️</span>
                  Interlocking
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <div className="text-sm text-gray-200">Key/Mechanical</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <div className="text-sm text-gray-200 leading-tight">
                      <div>Mechanical/ <br/>Electrical/ <br/>Electronic</div>
                    </div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <div className="text-sm text-gray-200 leading-tight">
                      <div>Mechanical/ <br/>Electrical/ <br/>Electronic</div>
                    </div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <div className="text-sm text-gray-200">Electrical/Electronic</div>
                  </div>
                </div>
              </div>

              {/* Track Circuiting */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-xl font-bold text-white text-center mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🛤️</span>
                  Track Circuiting
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-400/30">Not compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <div className="text-xs text-gray-200 leading-tight">
                      <div>Mechanical – main line</div>
                      <div>Electrical/Electronic – all running lines</div>
                    </div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <div className="text-sm text-gray-200">All running lines</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <div className="text-sm text-gray-200">All running lines</div>
                  </div>
                </div>
              </div>

              {/* Block Working */}
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-xl font-bold text-white text-center mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🚧</span>
                  Block Working
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <div className="text-sm text-gray-200">Token</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <div className="text-sm text-gray-200">Token/SGE</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <div className="text-sm text-gray-200">SGE/Track circuit</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <div className="text-sm text-gray-200">SGE/Track Circuit</div>
                  </div>
                </div>
              </div>

              {/* Preventing Signal Passing */}
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-lg py-4 px-2 lg:p-6 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-xl font-bold text-white text-center mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🛑</span>
                  Preventing Signal Passing at Danger
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std I (R)</div>
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-400/30">Not Compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std II (R)</div>
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-400/30">Not Compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std III (R)</div>
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-400/30">Not compulsory</span>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-300 mb-2">Std IV (R)</div>
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs border border-yellow-400/30">Desirable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white text-center mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Implementation Guidelines
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-lg py-4 px-3 lg:p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-xl font-bold text-white text-center mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🛡️</span>
                  Isolation Requirements
                </h3>
                <p className="text-gray-200 mb-4">
                  Isolation is not compulsory provided that the conditions laid down in GR 4.11 are complied with.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">a)</span>
                    <p className="text-gray-200 text-sm">
                      No train shall run through an interlocked station at a speed exceeding 50 kilometres an hour, 
                      or such less speed as may be prescribed by approved special instructions unless the line on which 
                      the train is to run has been isolated from all other lines by the setting of points or other 
                      approved means, and interlocking is such as to maintain the condition during the passage of the train.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">b)</span>
                    <p className="text-gray-200 text-sm">
                      In every case in which trains are permitted to run through on a non-isolated line, all shunting 
                      shall be stopped and no vehicle unattached to an engine or not properly secured in accordance 
                      with Rule 5.23 may be kept standing on a connected line which is not isolated from the through line.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-lg py-4 px-3 lg:p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-xl font-bold text-white text-center mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">⚠️</span>
                  Double Distant Requirements
                </h3>
                <p className="text-gray-200">
                  Double Distant is required on sections where goods trains have a braking distance of more than 1 KM.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-lg py-4 px-3 lg:p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-3xl text-xl font-bold text-white text-center mb-4 flex lg:flex-row flex-col gap-4 items-center">
                  <span className="text-2xl mr-3">🎛️</span>
                  Central Panel Interlocking
                </h3>
                <p className="text-gray-200">
                  At stations provided with central panel interlocking [Std III (R) or Std IV (R)] on high density routes, 
                  suitable means for verifying complete arrival of train are required.
                </p>
              </div>
            </div>
          </div>

          {/* Note Section */}
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl shadow-2xl p-4 lg:p-8 border border-yellow-400/30">
            <div className="flex lg:flex-row flex-col gap-4 items-center">
              <div className="flex-shrink-0">
                <div className="lg:w-8 lg:h-8 w-6 h-6 bg-yellow-500 rounded-full flex lg:flex-row flex-col gap-4 items-center justify-center">
                  <svg className="lg:h-5 lg:w-5 w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="lg:text-2xl text-xl text-center font-semibold text-yellow-300 mb-2">Important Note</h3>
                <p className="text-yellow-200 lg:text-lg text-base">
                  The provisions of revised standards of interlocking will only apply to future signalling and interlocking installations. 
                  Wherever existing installations do not fulfill these requirements, existing speed of operation may be permitted to continue.
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

export default Interlocking