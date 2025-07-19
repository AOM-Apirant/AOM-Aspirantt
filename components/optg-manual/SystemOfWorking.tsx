"use client"
import React from 'react'

const SystemOfWorking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              SYSTEM OF WORKING
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding the various railway signaling and block systems that ensure safe and efficient train operations across the network.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed text-lg mb-6">
                A Train is run between stations through a system of working. There are different systems of working that ensure safe and efficient train operations. Each system has its own unique characteristics and safety protocols.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-green-400 mr-3 text-xl">🛡️</span>
                  <span className="text-white font-semibold text-lg">Safety First</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  <span className="text-green-400 mr-3 text-xl">⚡</span>
                  <span className="text-white font-semibold text-lg">Efficient Operations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Systems Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Systems of Working
            </h2>
            
            <div className="space-y-8">
              {/* Absolute Block System */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Absolute Block System
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  At any point of time, only one train can run in the block section. This system ensures maximum safety by maintaining complete separation between trains.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🔒</span>
                    <span className="text-gray-200 text-lg">Maximum safety with single train operation</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">📊</span>
                    <span className="text-gray-200 text-lg">Complete block section isolation</span>
                  </div>
                </div>
              </div>

              {/* Automatic Block System */}
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Automatic Block System
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  The block section is divided into small auto signaling sections controlled by automatic signals which assume off aspects automatically depending on the movement of trains.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-teal-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🤖</span>
                    <span className="text-gray-200 text-lg">Automatic signal control</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-teal-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">⚡</span>
                    <span className="text-gray-200 text-lg">Higher line capacity</span>
                  </div>
                </div>
              </div>

              {/* One Train Only System */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  One Train Only System
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  When very less number of train/trains is/are required to be run in a section, One Train Only System is adopted for simplified operations.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🚂</span>
                    <span className="text-gray-200 text-lg">Single train operation</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">📋</span>
                    <span className="text-gray-200 text-lg">Simplified procedures</span>
                  </div>
                </div>
              </div>

              {/* Other Systems */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  Other Systems
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">👥</span>
                    <span className="text-gray-200 text-lg">Following train system</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🛡️</span>
                    <span className="text-gray-200 text-lg">Pilot guard system</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🎫</span>
                    <span className="text-gray-200 text-lg">Train staff & ticket system</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                    <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🧠</span>
                    <span className="text-gray-200 text-lg">Moving block sections (Metro)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block Section Definition */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
              </span>
              Block Section Definition
            </h2>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed text-lg mb-6">
                As per GR 1.02 (10) &quot;block section&quot; means that portion of the running line between two block stations on to which no running train may enter until Line Clear has been received from the block station at the other end of the block section.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">🚫</span>
                  <span className="text-gray-200 text-lg">No train entry without Line Clear</span>
                </div>
                <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">📡</span>
                  <span className="text-gray-200 text-lg">Communication between block stations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Authority and Caution Orders */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Authority & Caution Orders
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Authority to Proceed */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Authority to Proceed
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  In all systems of working, a train requires an authority to proceed to leave a block station and enter the block section.
                </p>
                <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">✅</span>
                  <span className="text-gray-200 text-lg">Mandatory for all train movements</span>
                </div>
              </div>

              {/* Caution Orders */}
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                  Caution Orders
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  Apart from the authority to proceed, the station also issues a Caution Order which lists out the various temporary speed restrictions to be followed by the crew in the section till the next Caution order notice station.
                </p>
                <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                  <span className="text-pink-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">⚠️</span>
                  <span className="text-gray-200 text-lg">Temporary speed restrictions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🛡️</span>
                <span className="text-gray-200 text-lg">Multiple safety systems</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">📡</span>
                <span className="text-gray-200 text-lg">Clear communication protocols</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 text-lg">Flexible operation modes</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🎯</span>
                <span className="text-gray-200 text-lg">Authority-based movement</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 text-lg">Comprehensive documentation</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/10 rounded-xl p-6 transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔒</span>
                <span className="text-gray-200 text-lg">Fail-safe mechanisms</span>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
              Summary
            </h3>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-green-400/30">
              <p className="text-gray-200 leading-relaxed text-lg text-center">
                The System of Working ensures safe and efficient train operations through various signaling and block systems. 
                Each system is designed with specific safety protocols, authority requirements, and communication standards 
                to maintain the highest levels of railway safety and operational efficiency.
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

export default SystemOfWorking