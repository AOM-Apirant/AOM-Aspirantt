"use client"
import React from 'react'

const EOTT = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              END OF TRAIN TELEMETRY
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">(EOTT)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              End of Train Telemetry (EOTT) is an electronic system mounted on the rear of freight trains to monitor 
              train integrity, brake systems, and other critical parameters in real-time.
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
                  End of Train Telemetry (EOTT), also known as an end-of-train device (ETD), is an electronic system 
                  mounted on the rear of freight trains to monitor train integrity, brake systems, and other critical 
                  parameters in real-time. It serves as a modern replacement for traditional cabooses or brake vans, 
                  which historically required human crews (like guards) to observe the train&apos;s rear. The system uses 
                  radio telemetry to communicate data from the train&apos;s end to the locomotive cab, enhancing safety 
                  and operational efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Historical Background Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 lg:px-6 px-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Historical Background
            </h2>
            <ul className="space-y-6 max-w-3xl mx-auto">
              <li className="flex items-start gap-4 bg-gradient-to-br from-amber-400/20 to-yellow-300/10 rounded-xl p-4 border border-amber-300/30 shadow-md">
                <span className="flex-shrink-0 mt-1">
                  <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <path d="M12 8v4l2 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  The practice of marking the rear of trains began as early as the 1830s. For example, early railways like the Liverpool & Manchester Railway used red lanterns to indicate that the train was complete.
                </span>
              </li>
              <li className="flex items-start gap-4 bg-gradient-to-br from-amber-400/20 to-yellow-300/10 rounded-xl p-4 border border-amber-300/30 shadow-md">
                <span className="flex-shrink-0 mt-1">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor"/>
                    <path d="M12 8v4l2 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  In the 1960s, electronic End of Train Devices (ETDs) were introduced in North America. The first use was in 1968 on the Florida East Coast Railway, featuring flashing lights and brake line connections.
                </span>
              </li>
              <li className="flex items-start gap-4 bg-gradient-to-br from-amber-400/20 to-yellow-300/10 rounded-xl p-4 border border-amber-300/30 shadow-md">
                <span className="flex-shrink-0 mt-1">
                  <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  By the 1980s, ETDs had evolved to monitor brake pressure via radio telemetry. Later developments included two-way communication, GPS, and emergency braking features.
                </span>
              </li>
              <li className="flex items-start gap-4 bg-gradient-to-br from-amber-400/20 to-yellow-300/10 rounded-xl p-4 border border-amber-300/30 shadow-md">
                <span className="flex-shrink-0 mt-1">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Globally, ETDs have reduced the need for manned cabooses. However, in some regions, visual markers like lanterns or boards are still used as rear-end indicators.
                </span>
              </li>
            </ul>
          </div>

          {/* EOTT in Indian Railways Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              EOTT in Indian Railways
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1">
                      {/* Freight Icon */}
                      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor"/>
                        <circle cx="7.5" cy="19" r="1.5" stroke="currentColor"/>
                        <circle cx="16.5" cy="19" r="1.5" stroke="currentColor"/>
                      </svg>
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      EOTT is being adopted in Indian Railways mainly for goods (freight) trains, enabling operations without guards or brake vans. This allows for longer trains and significant cost savings.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1">
                      {/* Warning Icon */}
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor"/>
                        <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Traditionally, a red lamp, &apos;X&apos; symbol, concentric circles, or &apos;LV&apos; (Last Vehicle) board is used on the rear of Indian freight trains. If these are missing, signal staff assume train separation and trigger emergencies.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1">
                      {/* Telemetry Icon */}
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M12 20v-6m0 0a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 4l16 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      EOTT modernizes rear-end train indication by providing automated telemetry. Trials began around 2020-2021 on routes like Kanpur-Tundla.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1">
                      {/* Money/Contract Icon */}
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor"/>
                        <path d="M8 11h8M8 15h6" stroke="currentColor" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Indian Railways has floated tenders worth over Rs 100 crore to acquire EOTT systems for about 1,000 trains, focusing on both diesel and electric locomotives in electrified and non-electrified sections.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1">
                      {/* Technology/Chip Icon */}
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor"/>
                        <path d="M4 4v2m0 0h2M4 20v-2m0 0h2M20 4v2m0 0h-2M20 20v-2m0 0h-2" stroke="currentColor" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      As of 2024, embedded computing systems are being integrated into EOTT for enhanced data logging and communication.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1">
                      {/* Monitoring Icon */}
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor"/>
                        <circle cx="12" cy="12" r="4" stroke="currentColor"/>
                        <path d="M2 12h2m16 0h2" stroke="currentColor" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Ongoing RDSO specifications emphasize compatibility with 25kV electrification and real-time monitoring. No major new deployments were reported in early 2025.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Components Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Components of EOTT
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  Two Main Units Connected via Radio Frequency (RF)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-600/30 to-blue-700/30 backdrop-blur-sm rounded-xl py-6 lg:px-4 px-2 border border-blue-400/30 hover:scale-105 transition-all duration-300">
                    <h4 className="text-white font-bold mb-4 text-center text-lg">Cab Display Unit (CDU)</h4>
                    <div className="text-gray-200 text-sm space-y-3">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>Installed in the locomotive cab</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Displays real-time data to the driver</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Shows brake pressure, train status, and alerts</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-600/30 to-emerald-700/30 backdrop-blur-sm rounded-xl py-6 lg:px-4 px-2 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
                    <h4 className="text-white font-bold mb-4 text-center text-lg">Sense and Braking Unit (SBU)</h4>
                    <div className="text-gray-200 text-sm space-y-3">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Mounted on the last wagon or coach</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span>Includes sensors for brake pipe pressure</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Features flashing red light for visibility</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span>Powered by turbine or battery</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 py-4 lg:px-4 px-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30 backdrop-blur-sm">
                  <p className="text-gray-200 text-sm text-center">
                    <strong className="text-cyan-300">Note:</strong> Both units often feature GPS receivers and GPRS 
                    for location tracking and data transmission to control rooms, acting as a comprehensive train tracker.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Functions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Functions in Indian Railways
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-200 lg:text-base text-sm mb-4">
                  EOTT performs several critical roles to ensure safe and efficient train operations, replicating 
                  and enhancing the duties traditionally handled by guards:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 border border-blue-400/30">
                      <h4 className="text-white font-bold mb-2 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        Train Integrity Monitoring
                      </h4>
                      <p className="text-gray-200 text-xs">
                        Detects separation or parting of wagons/coaches by monitoring continuity and alerts the driver 
                        instantly, preventing accidents from incomplete trains.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-700/20 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 border border-emerald-400/30">
                      <h4 className="text-white font-bold mb-2 flex items-center">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        Brake System Control
                      </h4>
                      <p className="text-gray-200 text-xs">
                        Measures rear brake pipe pressure in real-time and can initiate emergency braking from the 
                        train&apos;s end, improving stopping distances and safety.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 border border-purple-400/30">
                      <h4 className="text-white font-bold mb-2 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        Visual and Signal Indication
                      </h4>
                      <p className="text-gray-200 text-xs">
                        Provides a flashing red taillight as a rear marker, visible to following trains or staff, 
                        replacing manual lamps.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 border border-amber-400/30">
                      <h4 className="text-white font-bold mb-2 flex items-center">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                        Data Telemetry and Communication
                      </h4>
                      <p className="text-gray-200 text-xs">
                        Transmits status updates (e.g., pressure, motion, battery levels) via RF to the CDU and 
                        potentially to control centers, enabling proactive maintenance.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-700/20 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 border border-cyan-400/30">
                      <h4 className="text-white font-bold mb-2 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        GPS Tracking and Reporting
                      </h4>
                      <p className="text-gray-200 text-xs">
                        Logs location and sends data via GPRS for fleet management, useful for real-time oversight 
                        in vast networks like Indian Railways.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 border border-red-400/30">
                      <h4 className="text-white font-bold mb-2 flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                        Emergency Response
                      </h4>
                      <p className="text-gray-200 text-xs">
                        Automatically applies brakes if anomalies like low pressure or disconnection are detected, 
                        and supports two-way communication for remote control.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 py-4 lg:px-4 px-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-400/30 backdrop-blur-sm">
                  <p className="text-gray-200 text-sm text-center">
                    <strong className="text-yellow-300">Benefits:</strong> These functions reduce human error, 
                    lower operational costs by eliminating guard vans, and support higher train speeds and lengths 
                    on dedicated freight corridors. Indian Railways&apos; specifications ensure EOTT works in diverse 
                    conditions, including high-voltage electrified lines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download PDF Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="inline-block p-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mb-6 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-4 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-4">
                Download EOTT PDF File
              </h2>
              <p className="text-gray-200 lg:text-lg text-base mb-8 max-w-2xl mx-auto">
                Access the complete End of Train Telemetry (EOTT) study material directly in your browser or PDF viewer.
              </p>
              <a 
                href="/syllabus/EOTT.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-red-400/30 hover:border-red-300/50"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download & Open PDF
              </a>
              <div className="mt-4 text-gray-300 text-sm">
                <p>File size: 14MB • Format: PDF</p>
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

export default EOTT