"use client"
import React from 'react'

const WagonEngineUtilization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              WAGON & ENGINE UTILIZATION
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold text-emerald-300 mb-4">South Central Railway</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive analysis of factors affecting wagon and engine utilization with strategic methods for operational efficiency improvement
            </p>
          </div>

          {/* Wagon Utilization Factors Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </span>
              Factors Affecting Wagon Utilization
            </h2>
            <div className="space-y-3">
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                <div>
                  <h3 className="text-yellow-300 font-semibold text-lg mb-2">Wagon Turn Round Time (WTR)</h3>
                  <span className="text-gray-200 lg:text-lg text-base">Delays in marshalling yards, stations during loading/unloading, and clearance from roadside stations impact wagon mobility.</span>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📍</span>
                <div>
                  <h3 className="text-yellow-300 font-semibold text-lg mb-2">Traffic & Infrastructure Factors</h3>
                  <span className="text-gray-200 lg:text-lg text-base">Average lead, traffic density, ruling gradients and line facilities affect wagon turn round time.</span>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔧</span>
                <div>
                  <h3 className="text-yellow-300 font-semibold text-lg mb-2">Maintenance Issues</h3>
                  <span className="text-gray-200 lg:text-lg text-base">An increase in the number of wagons awaiting repairs directly affects utilization.</span>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                <div>
                  <h3 className="text-yellow-300 font-semibold text-lg mb-2">Shunting Operations</h3>
                  <span className="text-gray-200 lg:text-lg text-base">Delays in shunting at roadside stations contribute to lower wagon mobility.</span>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏭</span>
                <div>
                  <h3 className="text-yellow-300 font-semibold text-lg mb-2">Terminal Efficiency</h3>
                  <span className="text-gray-200 lg:text-lg text-base">Inefficient terminals and goods sheds negatively impact loading and unloading processes, reducing wagon utilization.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Engine Utilization Factors Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Factors Affecting Engine Utilization
            </h2>
            <div className="space-y-3">
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔧</span>
                <div>
                  <h3 className="text-cyan-300 font-semibold text-lg mb-2">Locomotive Maintenance Schedules</h3>
                  <span className="text-gray-200 lg:text-lg text-base">Efficient management of locomotive maintenance schedules is crucial to maximize availability and utilization.</span>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💀</span>
                <div>
                  <h3 className="text-cyan-300 font-semibold text-lg mb-2">Dead Locomotive Movement</h3>
                  <span className="text-gray-200 lg:text-lg text-base">Minimizing the movement of dead or non-operational locomotives can improve overall engine utilization.</span>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚠️</span>
                <div>
                  <h3 className="text-cyan-300 font-semibold text-lg mb-2">Shed and Traffic Outage</h3>
                  <span className="text-gray-200 lg:text-lg text-base">Unforeseen outages in sheds and during traffic can lead to reduced engine availability and utilization.</span>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                <div>
                  <h3 className="text-cyan-300 font-semibold text-lg mb-2">Operating Staff Schedules</h3>
                  <span className="text-gray-200 lg:text-lg text-base">Effective scheduling and management of engine crew and train crew are essential for maximizing operational hours.</span>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🛌</span>
                <div>
                  <h3 className="text-cyan-300 font-semibold text-lg mb-2">Rest Regulations</h3>
                  <span className="text-gray-200 lg:text-lg text-base">Compliance with resting regulations for engine crew ensures their availability for duty, impacting overall utilization.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wagon Improvement Methods Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Wagon Utilization Improvement Methods
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-green-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    Unit Trains & Captive Rakes
                  </h3>
                  <p className="text-gray-200 text-base">Running of unit trains and formation of captive rakes helps streamline wagon movement and reduces delays.</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-green-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    Block Train Operations
                  </h3>
                  <p className="text-gray-200 text-base">Block Train Operations and Mini Rake System enhance efficiency of wagon movement and optimize loading.</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-green-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    Nominated Day Loading
                  </h3>
                  <p className="text-gray-200 text-base">Facilitates planned and efficient loading of wagons.</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-green-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    Rationalization Scheme
                  </h3>
                  <p className="text-gray-200 text-base">Avoids congestion by specifying routes and optimizing booking/destination points, including transshipment points.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-green-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    MGR & EOL Systems
                  </h3>
                  <p className="text-gray-200 text-base">Merry-Go-Round (MGR) System and Engine on Load (EOL) System enhance loading and unloading efficiency.</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-green-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    Enhanced C&W Examination
                  </h3>
                  <p className="text-gray-200 text-base">Intensive, Round Trips, Premium and Close Circuit rake examinations improve wagon maintenance and availability.</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-green-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    Efficient Repair Depots
                  </h3>
                  <p className="text-gray-200 text-base">Timely repairs and overhauling at Sick lines and TXR Repair Depots ensure wagons are quickly returned to service.</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-green-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    Infrastructure Enhancement
                  </h3>
                  <p className="text-gray-200 text-base">Gati Shakti cargo terminals and better goods sheds streamline loading and unloading, reducing delays.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Engine Improvement Methods Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Engine Utilization Improvement Methods
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-purple-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                    Optimizing Loco Link Diagrams
                  </h3>
                  <p className="text-gray-200 text-base">Strategic preparation of loco link diagrams maximizes locomotive running time and minimizes detentions.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-purple-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                    Rationalized Deployment
                  </h3>
                  <p className="text-gray-200 text-base">Using software-based DSS to determine minimum locomotives needed while accounting for maintenance requirements.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-purple-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                    Utilizing Released Locomotives
                  </h3>
                  <p className="text-gray-200 text-base">Locomotives freed from passenger services can be redeployed for additional freight operations.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-purple-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                    Energy Saving Measures
                  </h3>
                  <p className="text-gray-200 text-base">Switching off blowers during yard detention and installing APUs for fuel savings.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-purple-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                    Infrastructure Improvement
                  </h3>
                  <p className="text-gray-200 text-base">SF-6/Vacuum switchgear at TSSs, improved protection relays, and thermovision cameras for hotspot identification.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-purple-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                    Efficient Failure Management
                  </h3>
                  <p className="text-gray-200 text-base">Daily monitoring of failures, punctuality, and data preparation for proactive issue addressing.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-purple-300 font-semibold text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                    Predictive Maintenance
                  </h3>
                  <p className="text-gray-200 text-base">Leveraging data analytics and machine learning to forecast equipment failures and reduce downtime.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results & Benefits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Expected Results
            </h2>
            <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-amber-400/30">
              <p className="text-gray-200 lg:text-xl text-lg text-center leading-relaxed">
                By implementing these improvement strategies, <strong className="text-amber-300">South Central Railway</strong> can aim to significantly enhance both wagon and engine utilization, leading to <strong className="text-yellow-300">improved operational efficiency</strong>, <strong className="text-green-300">higher revenue</strong>, and more <strong className="text-blue-300">sustainable rail transportation</strong>.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-green-400/30">
                <div className="lg:text-3xl text-2xl font-bold text-white">📈</div>
                <div className="lg:text-lg text-base text-gray-300 mt-2">Operational Efficiency</div>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-yellow-400/30">
                <div className="lg:text-3xl text-2xl font-bold text-white">💰</div>
                <div className="lg:text-lg text-base text-gray-300 mt-2">Higher Revenue</div>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-blue-400/30">
                <div className="lg:text-3xl text-2xl font-bold text-white">🌱</div>
                <div className="lg:text-lg text-base text-gray-300 mt-2">Sustainability</div>
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

export default WagonEngineUtilization