"use client"
import React from 'react'

const PNM = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              PERMANENT NEGOTIATING MACHINERY
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">(PNM)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A three-tier system established in 1952 to maintain contact with labour and resolve disputes 
              between Railway Labour and Administration through collective bargaining and negotiations.
            </p>
          </div>

          {/* History Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Historical Background
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏛️</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Founded by:</strong> Shri. V.V. Giri in 1951 when Shri. Lal Bahadur Shastri was the Railway Minister of India
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Established:</strong> 1952, came into force from 1.1.52
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Objective:</strong> Maintain contact with labour and resolve disputes between Railway Labour and Administration
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Principles Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Core Principles
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-3">Collective Bargaining</h3>
                <p className="text-gray-200">Direct negotiations between labour and management</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-3">Across Table Negotiations</h3>
                <p className="text-gray-200">Open discussions for mutual understanding</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-white mb-3">Give and Take Policy</h3>
                <p className="text-gray-200">Flexible approach for mutual benefits</p>
              </div>
            </div>
          </div>

          {/* Three-Tier System Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Three-Tier System
            </h2>
            <div className="space-y-6">
              {/* Zonal Railway Level */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center text-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Zonal Railway Level
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👑</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Chairman:</strong> GM, <strong>Secretary:</strong> PCPO
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Meeting:</strong> Once in three months separately with representatives of SCRMU &amp; SCRES
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Agenda:</strong> Must be circulated one month in advance
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Scope:</strong> Matters within powers of GM or unsettled at divisional level
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divisional Level */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center text-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Divisional Level / Store Depot Level / Workshop Level
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👑</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Chairman:</strong> DRM/ Dy. COS/ CWM, <strong>Secretary:</strong> Sr. DPO/ DPO/ SPO/ APO
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Meeting:</strong> Once in two months separately with representatives of NRMU &amp; CRMS
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Agenda:</strong> Must be circulated one month in advance
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Scope:</strong> Matters within powers of DRM/ Dy. COS/ CWM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Railway Board Level */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center text-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Railway Board Level
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👑</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Chairman:</strong> Member Staff, <strong>Secretary:</strong> Dy. Director Establishment
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Meeting:</strong> Once in three months separately with representatives of NFIR &amp; AIRF
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Agenda:</strong> Must be circulated one month in advance
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                      <div className="text-gray-200 lg:text-lg text-base">
                        <strong>Scope:</strong> Matters within powers of Railway Board or unsettled at Zonal level
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ad-hoc Tribunal Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </span>
              Ad-hoc Tribunal Level
            </h2>
            <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Purpose:</strong> Matters of important nature on which no agreement is reached up to Railway Board level
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👨‍⚖️</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Chairman:</strong> Retired judge of High Court or Supreme Court with own staff and equal representatives of labour and administration
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📜</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Award:</strong> Not binding. Government may accept, reject or modify the award
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Moratorium:</strong> Matters settled by tribunal once accepted by government shall not be opened by unions for two years
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Rejection:</strong> If government rejects or modifies tribunal decision, same items may be raised at end of year by union
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meeting Periodicity Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              Meeting Periodicity
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-white mb-3">Division and Extra Division</h3>
                <p className="text-2xl font-bold text-indigo-300">Once in Two Months</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-white mb-3">Zonal Railways and Railway Board</h3>
                <p className="text-2xl font-bold text-blue-300">Once in Three Months</p>
              </div>
            </div>
          </div>

          {/* Discussion Guidelines Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Discussion Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-300 mb-4">❌ Excluded Subjects</h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚫</span>
                    <span className="text-gray-200 lg:text-lg text-base">Disciplinary matters, individual cases of promotions transfers etc.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💰</span>
                    <span className="text-gray-200 lg:text-lg text-base">Questions relating to pay scales, allowances (only between Federations and Railway Board)</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-green-300 mb-4">✅ Included Subjects</h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                    <span className="text-gray-200 lg:text-lg text-base">Subjects within powers of Officers</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                    <span className="text-gray-200 lg:text-lg text-base">30 new subjects allowed for discussion in a meeting</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                    <span className="text-gray-200 lg:text-lg text-base">Matters not settled at any level may be raised at next level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Rules Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Rules &amp; Regulations
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                    <div className="text-gray-200 lg:text-lg text-base">
                      <strong>Government Authority:</strong> It would be open to the Government to accept or to reject or to modify the decision of the adhoc tribunal.
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                    <div className="text-gray-200 lg:text-lg text-base">
                      <strong>Two-Year Moratorium:</strong> The Federations should not raise the same issue for two years where the Government has accepted the Tribunal&apos;s decision.
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                    <div className="text-gray-200 lg:text-lg text-base">
                      <strong>Rejection Clause:</strong> But in case in which the Government has rejected or modified the decision of the Tribunal the issue can be raised at the end of one year.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fort-Nightly Meetings Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 mt-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Fort-Nightly Meetings (FNM)
            </h2>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏢</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Conducted by:</strong> SPO/Labour at Headquarters and by DPO and APO at Division and Extra Division
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💼</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Discussion Topics:</strong> Issues affecting employees seniority, fixation of pay etc. are discussed and settled in these meetings
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>Union Representatives:</strong> Not exceeding 6 can attend the meeting
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                  <div className="text-gray-200 lg:text-lg text-base">
                    <strong>SCL Grant:</strong> Special Casual Leave is granted to the Union representatives to attend FNM
                  </div>
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

export default PNM