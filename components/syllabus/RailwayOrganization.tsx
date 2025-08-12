"use client"
import React from 'react'

const RailwayOrganization = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Organization Structure of Indian Railways
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Indian Railways (IR) is a vast organization under the Ministry of Railways, Government of India. 
              Its organizational structure is hierarchical, divided into multiple layers to manage its extensive operations, 
              infrastructure, and workforce.
            </p>
          </div>

          {/* Apex Level Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              1. Apex Level: Ministry of Railways
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Railway Board
                </h3>
                <p className="text-gray-200 lg:text-lg text-base mb-4">
                  The apex body responsible for policy formulation, administration, and overall management of Indian Railways.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="text-white font-semibold mb-2">Chairman and CEO</h4>
                    <p className="text-gray-300 text-sm">The head of the Railway Board, overseeing all operations and strategic decisions.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="text-white font-semibold mb-2">Members of the Railway Board</h4>
                    <p className="text-gray-300 text-sm">Senior officials responsible for specific domains.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Key Members:</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Member (Infrastructure)</h4>
                    <p className="text-gray-300 text-xs">Manages railway infrastructure, including tracks, bridges, and stations.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Member (Traction & Rolling Stock)</h4>
                    <p className="text-gray-300 text-xs">Oversees locomotives, coaches, and wagons.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Member (Operations & Business Development)</h4>
                    <p className="text-gray-300 text-xs">Handles train operations, scheduling, and commercial activities.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Member (Finance)</h4>
                    <p className="text-gray-300 text-xs">Manages financial planning, budgeting, and expenditure.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Member (Staff)</h4>
                    <p className="text-gray-300 text-xs">Oversees human resources, recruitment, and employee welfare.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Director General (RPF)</h4>
                    <p className="text-gray-300 text-xs">Heads the Railway Protection Force for security.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zonal Level Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              2. Zonal Level: Zonal Railways
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-200 lg:text-lg text-base mb-6">
                  Indian Railways is divided into 17 geographical zones (as of the latest structure), each headed by a General Manager (GM). 
                  These zones operate semi-autonomously and manage railway operations within their jurisdictions.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h3 className="text-white font-bold mb-3">Key Zones (examples):</h3>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <span>Northern Railway (NR)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <span>Southern Railway (SR)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <span>Western Railway (WR)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <span>Eastern Railway (ER)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <span>Central Railway (CR)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <span>South Central Railway (SCR)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h3 className="text-white font-bold mb-3">Structure within a Zone:</h3>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        <span>General Manager (GM)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        <span>Additional General Managers (AGMs)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        <span>Principal Heads of Departments (PHODs)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        <span>Divisional Railway Managers (DRMs)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Principal Heads of Departments (PHODs):</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Principal Chief Engineer (PCE)</h4>
                    <p className="text-gray-300 text-xs">Infrastructure and construction.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Principal Chief Mechanical Engineer (PCME)</h4>
                    <p className="text-gray-300 text-xs">Locomotives and rolling stock.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Principal Chief Commercial Manager (PCCM)</h4>
                    <p className="text-gray-300 text-xs">Passenger services, ticketing, and freight.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Principal Chief Operations Manager (PCOM)</h4>
                    <p className="text-gray-300 text-xs">Train operations and scheduling.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Principal Chief Safety Officer (PCSO)</h4>
                    <p className="text-gray-300 text-xs">Safety protocols and accident prevention.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Principal Financial Adviser (PFA)</h4>
                    <p className="text-gray-300 text-xs">Financial management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divisional Level Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              3. Divisional Level
            </h2>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base mb-6">
                Each zone is subdivided into divisions (around 70 divisions across IR), which are the primary operational units. 
                Each division is managed by a Divisional Railway Manager (DRM), supported by officers from various departments.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <h3 className="text-white font-bold mb-3">Key Functions:</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>Train operations</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>Maintenance of tracks and rolling stock</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>Passenger services</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>Freight management</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <h3 className="text-white font-bold mb-3">Departments:</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>Engineering</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>Mechanical</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>Electrical</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>Commercial</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>Operating</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>Accounts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Production Units Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              4. Production Units and Other Organizations
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Production Units:</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Chittaranjan Locomotive Works (CLW)</h4>
                    <p className="text-gray-300 text-xs">Manufactures electric locomotives.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Integral Coach Factory (ICF), Chennai</h4>
                    <p className="text-gray-300 text-xs">Produces coaches.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Diesel Locomotive Works (DLW), Varanasi</h4>
                    <p className="text-gray-300 text-xs">Manufactures diesel locomotives (now transitioning to electric).</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Rail Coach Factory (RCF), Kapurthala</h4>
                    <p className="text-gray-300 text-xs">Produces modern coaches.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">Modern Coach Factory (MCF), Raebareli</h4>
                    <p className="text-gray-300 text-xs">Manufactures advanced coaches like LHB coaches.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Public Sector Undertakings (PSUs):</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">IRCTC</h4>
                    <p className="text-gray-300 text-xs">Manages catering, online ticketing, and tourism.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">IRFC</h4>
                    <p className="text-gray-300 text-xs">Handles railway project financing.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">CONCOR</h4>
                    <p className="text-gray-300 text-xs">Manages containerized freight transport.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">RVNL</h4>
                    <p className="text-gray-300 text-xs">Executes railway infrastructure projects.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">DFCCIL</h4>
                    <p className="text-gray-300 text-xs">Manages dedicated freight corridors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workforce Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              6. Workforce and Recruitment
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Employees:</h3>
                <p className="text-gray-200 lg:text-lg text-base mb-4">
                  Indian Railways employs over 1.2 million people (as of recent data), divided into:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="text-white font-bold mb-3">Group A and B:</h4>
                    <p className="text-gray-300 text-sm">Officers recruited through the Union Public Service Commission (UPSC) via exams like the Civil Services Examination (for IRTS, IRAS, etc.) and Engineering Services Examination (for IRSE, IRSEE, etc.).</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="text-white font-bold mb-3">Group C and D:</h4>
                    <p className="text-gray-300 text-sm">Technical and non-technical staff recruited through the Railway Recruitment Boards (RRBs) and Railway Recruitment Cells (RRCs).</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Key Officer Cadres:</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">IRTS</h4>
                    <p className="text-gray-300 text-xs">Operations and commercial.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">IRSE</h4>
                    <p className="text-gray-300 text-xs">Civil engineering.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">IRSEE</h4>
                    <p className="text-gray-300 text-xs">Electrical systems.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">IRSS</h4>
                    <p className="text-gray-300 text-xs">Procurement and supply chain.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">IRAS</h4>
                    <p className="text-gray-300 text-xs">Financial management.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <h4 className="text-white font-semibold text-sm mb-1">IRPS</h4>
                    <p className="text-gray-300 text-xs">Human resources.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Developments Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Recent Developments
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Merger of Services:</h3>
                <p className="text-gray-200 lg:text-lg text-base mb-4">
                  In 2019, the Government of India approved the merger of eight railway services into a single Indian Railway Management Service (IRMS) to streamline operations and improve efficiency.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Modernization:</h3>
                <p className="text-gray-200 lg:text-lg text-base mb-4">
                  Indian Railways is adopting technologies like Vande Bharat trains, high-speed corridors, and digital ticketing systems, which are integrated into the organizational structure through specialized project units.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Dedicated Freight Corridors:</h3>
                <p className="text-gray-200 lg:text-lg text-base">
                  Managed by DFCCIL, these are semi-independent entities focusing on freight efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Download PDF Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 border border-white/20 text-center">
            <div className="inline-block p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-4">
              Download Railway Organization PDF
            </h2>
            <p className="text-gray-200 lg:text-lg text-base mb-8 max-w-2xl mx-auto">
              Get the complete Railway Organization structure and details in a comprehensive PDF format for offline study and reference.
            </p>
            <a 
              href="/syllabus/Railway Organization.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400/30"
              onClick={(e) => {
                // For mobile devices, try to open PDF directly
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                  e.preventDefault();
                  // Create a temporary link to trigger download and open
                  const link = document.createElement('a');
                  link.href = '/syllabus/Railway Organization.pdf';
                  link.target = '_blank';
                  link.download = 'Railway Organization.pdf';
                  
                  // Trigger download
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  
                  // Try to open PDF in new tab after a short delay
                  setTimeout(() => {
                    window.open('/syllabus/Railway Organization.pdf', '_blank');
                  }, 1000);
                }
              }}
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download & Open PDF
            </a>
            <p className="text-gray-300 text-sm mt-4">
              Click the button above to download the Railway Organization PDF file
            </p>
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

export default RailwayOrganization