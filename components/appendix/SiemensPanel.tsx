"use client"
import React from 'react'

const SiemensPanel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              SIEMEN&apos;S PANEL
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Advanced signaling and control system for railway operations with comprehensive button color coding
            </p>
          </div>

          {/* Main Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 lg:px-8 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex lg:flex-row flex-col gap-4 items-center mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="lg:text-3xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 tracking-tight">
                Panel Overview
              </h2>
            </div>
            <hr className="mb-8 border-purple-200/30" />
            
            <div className="grid lg:grid-cols-2 gap-1 mb-8">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <svg className="lg:w-4 lg:h-4 w-3 h-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="lg:text-lg text-base text-gray-200 leading-relaxed">
                    <span className="font-semibold text-purple-300">(a)</span> The station diagram is depicted on the panel board.
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <svg className="lg:w-4 lg:h-4 w-3 h-3 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
                    </svg>
                  </div>
                  <span className="lg:text-lg text-base text-gray-200 leading-relaxed">
                    <span className="font-semibold text-indigo-300">(b)</span> Push buttons of different colour codes are provided near the points, signals, etc., for their operations. Buttons for other purposes such as cancellation are also provided.
                  </span>
                </div>
              </div>
            </div>

            {/* Normal Setup Section */}
            <div className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 rounded-2xl shadow-2xl p-4 lg:p-8 text-white border border-purple-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <h2 className="lg:text-2xl text-xl font-bold mb-8 flex lg:flex-row flex-col gap-4 items-center">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Normal Setup Configuration
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-1">
                <div className="space-y-4">
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 lg:w-4 lg:h-4 w-3 h-3 rounded-full bg-red-500 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Signal buttons:</strong> <span className="text-red-200 font-semibold">Red GN</span>
                    </span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 lg:w-4 lg:h-4 w-3 h-3 rounded-full bg-gray-500 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Route buttons:</strong> <span className="text-gray-200 font-semibold">Grey UN</span>
                    </span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 lg:w-4 lg:h-4 w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Point buttons:</strong> <span className="text-blue-200 font-semibold">Blue WN</span>
                    </span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 lg:w-4 lg:h-4 w-3 h-3 rounded-full bg-yellow-400 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Shunt signal buttons:</strong> <span className="text-yellow-200 font-semibold">Yellow GN</span>
                    </span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 lg:w-4 lg:h-4 w-3 h-3 rounded-full bg-blue-400 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Common/group point button:</strong> <span className="text-blue-200 font-semibold">Blue WWN</span>
                    </span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 lg:w-4 lg:h-4 w-3 h-3 rounded-full bg-red-700 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Emergency signal/button:</strong> <span className="text-red-200 font-semibold">Red EGGN</span>
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-800 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Emergency point release button (sealed):</strong> <span className="text-blue-200 font-semibold">Blue EWN</span>
                    </span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-300 border-2 border-blue-800 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Emergency sub route release button (sealed and provided with counter):</strong> <span className="text-blue-200 font-semibold">Blue with dot EUYN</span>
                    </span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-400 border-2 border-gray-700 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Emergency full route release button (provided with counter):</strong> <span className="text-gray-200 font-semibold">Grey EUUYN</span>
                    </span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-400 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Point failure alarm, suppression button:</strong> <span className="text-gray-200 font-semibold">Grey WXYN</span>
                    </span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-400 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Signal failure alarm, suppression button:</strong> <span className="text-gray-200 font-semibold">Grey GXYN</span>
                    </span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 p-3 rounded-lg hover:bg-white/10">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-400 group-hover:scale-125 transition-transform shadow-lg mr-4"></div>
                    <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      <strong>Power failure alarm button:</strong> <span className="text-gray-200 font-semibold">Grey NXYN</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Visual Control */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-4 lg:px-8 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 items-center">
                <span className="mr-3">👁️</span>
                Visual Control
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  Station diagram display
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  Real-time status monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  Color-coded button system
                </li>
              </ul>
            </div>

            {/* Safety Features */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-4 lg:px-8 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 items-center">
                <span className="mr-3">🛡️</span>
                Safety Features
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-3">✓</span>
                  Emergency controls
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-3">✓</span>
                  Alarm suppression
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-3">✓</span>
                  Sealed emergency buttons
                </li>
              </ul>
            </div>

            {/* Operational Efficiency */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-4 lg:px-8 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 items-center">
                <span className="mr-3">⚡</span>
                Operational Efficiency
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Quick response controls
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Intuitive button layout
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Streamlined operations
                </li>
              </ul>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 lg:px-8 border border-white/20">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-12 text-center">System Capabilities</h2>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 lg:text-4xl text-2xl font-bold p-8 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                  12+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Button Types</h3>
                <p className="text-gray-200 text-lg">Different colored controls</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 lg:text-4xl text-2xl font-bold p-8 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-indigo-500/50 transition-shadow">
                  24/7
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Monitoring</h3>
                <p className="text-gray-200 text-lg">Continuous operation</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 lg:text-4xl text-2xl font-bold p-8 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  100%
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Reliability</h3>
                <p className="text-gray-200 text-lg">Fail-safe operations</p>
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

export default SiemensPanel