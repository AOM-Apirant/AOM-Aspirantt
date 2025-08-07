"use client"
import React from 'react'

const JCM = () => {
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
              JOINT CONSULTATIVE MEETING
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">(JCM)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive machinery established by the Government of India to foster harmonious relations 
              between government and its employees while enhancing efficiency and standards of work.
            </p>
          </div>

          {/* Objective Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Objective
            </h2>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                With a view to have harmonious relations between government and its employees in matters of common concern 
                and with the object of further increasing the efficiency, the government of India have established a machinery 
                known as the joint consultative machinery.
              </p>
            </div>
          </div>

          {/* Subject Matter Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Subject Matter
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 text-center items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Discussion Topics
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <svg className="text-purple-400 mr-4 mt-1 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-200 lg:text-lg text-base">Conditions of service</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <svg className="text-purple-400 mr-4 mt-1 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-gray-200 lg:text-lg text-base">Welfare of employees</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <svg className="text-purple-400 mr-4 mt-1 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-200 lg:text-lg text-base">Measures to improve efficiency and standard of work</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-red-400/30 backdrop-blur-sm">
                  <p className="text-gray-200 lg:text-lg text-base">
                    <strong className="text-red-300">Important:</strong> No individual cases can be discussed in JCM.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Three-Tier Structure Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Three-Tier Structure
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* National Council */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 lg:px-4 px-2 text-white hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-4 text-center">National Council</h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-blue-300 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-blue-100 lg:text-base text-sm">Deals with matters affecting all central government employees</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-blue-300 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-blue-100 lg:text-base text-sm">Chairman: Cabinet Secretary of Government of India</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-blue-300 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-blue-100 lg:text-base text-sm">Meets once in six months</span>
                  </div>
                </div>
              </div>

              {/* Departmental Council */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-2xl py-6 lg:px-4 px-2 text-white hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-4 text-center">Departmental Council</h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-emerald-300 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-emerald-100 lg:text-base text-sm">Every revenue earning ministry must have one</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-emerald-300 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-emerald-100 lg:text-base text-sm">Chairman: Chairman Railway Board</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-emerald-300 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-emerald-100 lg:text-base text-sm">Meets once in 4 months</span>
                  </div>
                </div>
              </div>

              {/* Regional Council */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 lg:px-4 px-2 text-white hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-4 text-center">Regional Council</h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-purple-300 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-purple-100 lg:text-base text-sm">Deals with common problems of employees</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-purple-300 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-purple-100 lg:text-base text-sm">Chairman: Senior most officer of the region</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-purple-300 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-purple-100 lg:text-base text-sm">Both sides will nominate their representatives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* National Council Details */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              National Council Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 text-center items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Administrative Side
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-indigo-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Up to 25 members appointed by the government</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-indigo-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">From different central government departments</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 text-center items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Staff Side
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-blue-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Up to 60 members nominated by federations</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-blue-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Recognized trade unions of different departments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* National Council Rules */}
            <div className="mt-6 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-amber-400/30">
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col gap-3 text-center items-center">
                <span className="w-4 h-4 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                Key Rules & Procedures
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-amber-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">May appoint committee of experts to study and report</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-amber-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Subject agenda must be circulated one month in advance</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-amber-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Disposed matters cannot be placed for 12 months</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-amber-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Unresolved matters referred to Board of Arbitration</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-amber-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Arbitration decisions final and binding for 3 years</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-amber-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Must meet once in six months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Departmental Council Details */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Departmental Council Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 text-center items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Composition
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-emerald-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Chairman: Chairman Railway Board</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-emerald-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Administrative side: Up to 10 members nominated by Railway Board</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-emerald-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Staff side: Up to 60 members nominated by AIRF & NFIR</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-teal-400/30">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 text-center items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Procedures
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-teal-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Subject agenda circulated one month in advance</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-teal-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Additional agenda items with chairman&apos;s permission</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <svg className="text-teal-400 mr-3 mt-1 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-200 lg:text-base text-sm">Must meet once in 4 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Council Details */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Regional Council Details
            </h2>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📍</span>
                  <span className="text-gray-200 lg:text-lg text-base">Deals with common problems of employees of a particular region</span>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👤</span>
                  <span className="text-gray-200 lg:text-lg text-base">Chairman would be the senior most officer of that particular region</span>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🤝</span>
                  <span className="text-gray-200 lg:text-lg text-base">Both sides will nominate their representatives</span>
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

export default JCM