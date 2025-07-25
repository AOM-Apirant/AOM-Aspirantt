"use client"
import React from 'react'

const ListOfRules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              DISCIPLINARY & APPEAL RULES
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The document is divided into parts, with each part containing specific rules and schedules. 
              There are total 7 parts with 31 rules and 3 schedules.
            </p>
          </div>

          {/* Part I: General */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-6 flex flex-col lg:flex-row gap-3 items-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Part - I <br/> <br/> General
            </h2>
            <div className="space-y-3">
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 1: Short title and commencement</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📖</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 2: Definitions</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 3: Application and Scope</span>
              </div>
            </div>
          </div>

          {/* Part II: Suspension */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-6 flex flex-col lg:flex-row gap-3 items-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
              </span>
              Part - II <br/> <br/> Suspension
            </h2>
            <div className="space-y-3">
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚠️</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 4: Authorities competent to place a railway servant under suspension</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏸️</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 5: Suspension</span>
              </div>
            </div>
          </div>

          {/* Part III: Penalties and Disciplinary Authorities */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-6 flex flex-col lg:flex-row gap-3 items-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-full mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Part - III <br/> <br/> Penalties and Disciplinary Authorities
            </h2>
            <div className="space-y-3">
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 6: Penalties</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👨‍⚖️</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 7: Disciplinary Authorities</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏛️</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 8: Authority to Institute Proceedings</span>
              </div>
            </div>
          </div>

          {/* Part IV: Procedure for Imposing Major Penalties */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-6 flex flex-col lg:flex-row gap-3 items-center">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-full mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </span>
              Part - IV <br/> <br/> Procedure for Imposing Major Penalties
            </h2>
            <div className="space-y-3">
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📝</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 9: Procedure for imposing major penalties</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 10: Action on inquiry report</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 11: Procedure for imposing minor penalties</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📢</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 12: Communication of orders</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔗</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 13: Common proceedings</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⭐</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 14: Special procedure in certain cases</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏛️</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 15: Provisions regarding railway servants lent to State Governments, etc.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🤝</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 16: Provisions regarding officers borrowed from Central or State Governments, etc.</span>
              </div>
            </div>
          </div>

          {/* Part V: Appeals */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-6 flex flex-col lg:flex-row gap-3 items-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              Part - V <br/> <br/> Appeals
            </h2>
            <div className="space-y-3">
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">❌</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 17: Orders against which no appeal lies</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 18: Orders against which appeal lies</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👨‍⚖️</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 19: Appellate Authority</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 20: Period of limitation for appeals</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📄</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 21: Form, contents, and submission of appeal</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 22: Consideration of appeal</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 23: Implementation of orders in appeal</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 24: Special provisions for non-gazetted staff</span>
              </div>
            </div>
          </div>

          {/* Part VI: Revision and Review */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-6 flex flex-col lg:flex-row gap-3 items-center">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
              Part - VI <br/> <br/> Revision and Review
            </h2>
            <div className="space-y-3">
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 25: Revision</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 25-A: Review</span>
              </div>
            </div>
          </div>

          {/* Part VII: Miscellaneous */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-6 flex flex-col lg:flex-row gap-3 items-center">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              Part - VII <br/> <br/> Miscellaneous
            </h2>
            <div className="space-y-3">
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📮</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 26: Service of orders, notices, etc.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 26-A: Service of orders, notices, etc. on behalf of the Railway Board or President</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏱️</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 27: Power to relax time limit and to condone delay</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📄</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 28: Supply of copy of Commission&apos;s advice</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🗑️</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 29: Repeal and saving</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">❓</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 30: Removal of doubts</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📝</span>
                <span className="text-gray-200 lg:text-lg text-base">Rule 31: Right to submit petitions to the President</span>
              </div>
            </div>
          </div>

          {/* Schedules Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-3 items-center">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-full mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Schedules
            </h2>
            <div className="space-y-3">
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-pink-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Schedule I: Disciplinary and appellate authorities for non-gazetted staff in various railway offices</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-pink-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                <span className="text-gray-200 lg:text-lg text-base">Schedule II: Disciplinary powers and suspension authority for officers and supervisors over non-gazetted staff in zonal railways and production units</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <span className="text-pink-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👨‍⚖️</span>
                <span className="text-gray-200 lg:text-lg text-base">Schedule III: Authorities empowered to suspend or impose penalties on gazetted officers (Groups A and B)</span>
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

export default ListOfRules