"use client"
import React from 'react'
import ListOfRules from '@/components/da-rules/ListOfRules'
import Link from 'next/link'

const RSDARules = () => {
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
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              RAILWAY SERVANTS (DISCIPLINE AND APPEAL) RULES 1968
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The Railway Servants (Discipline and Appeal) Rules, 1968, are a set of regulations that govern disciplinary proceedings and appeals for railway employees in India. Established under the authority of Article 309 of the Constitution of India, these rules aim to maintain discipline and efficiency within the railway service by providing a structured framework for addressing employee misconduct. They ensure that disciplinary actions are fair, transparent, and aligned with the principles of natural justice. Below is a comprehensive overview of the rules, covering key aspects such as suspension, penalties, appeals, and revisions.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-full mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Objectives
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Maintain discipline and efficiency within railway service</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Provide structured framework for addressing employee misconduct</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 lg:text-lg text-base">Ensure fair and transparent disciplinary actions</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Align with principles of natural justice</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                  <span className="text-gray-200 lg:text-lg text-base">Comprehensive coverage of suspension, penalties, and appeals</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                  <span className="text-gray-200 lg:text-lg text-base">Establish clear procedures for revision and review</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Framework Section */}
          <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-6 mb-8 text-white border border-blue-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <h2 className="lg:text-3xl text-xl font-bold mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              Legal Framework
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Established under Article 309 of the Constitution of India</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Comprehensive regulatory framework for railway employees</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Ensures procedural fairness and transparency</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Provides clear guidelines for disciplinary proceedings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Structure Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Parts */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">📚</span>
                Parts
              </h3>
              <div className="text-center">
                <div className="bg-white/20 rounded-full lg:w-24 lg:h-24 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="lg:text-3xl text-2xl font-bold">7</span>
                </div>
                <p className="text-blue-200 lg:text-lg text-base">Comprehensive parts covering all aspects of disciplinary procedures</p>
              </div>
            </div>

            {/* Rules */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">⚖️</span>
                Rules
              </h3>
              <div className="text-center">
                <div className="bg-white/20 rounded-full lg:w-24 lg:h-24 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="lg:text-3xl text-2xl font-bold">31</span>
                </div>
                <p className="text-indigo-200 lg:text-lg text-base">Detailed rules governing disciplinary actions and appeals</p>
              </div>
            </div>

            {/* Schedules */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">📋</span>
                Schedules
              </h3>
              <div className="text-center">
                <div className="bg-white/20 rounded-full lg:w-24 lg:h-24 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="lg:text-3xl text-2xl font-bold">3</span>
                </div>
                <p className="text-purple-200 lg:text-lg text-base">Supporting schedules with detailed authorities and procedures</p>
              </div>
            </div>
          </div>

          {/* List of Rules Component */}
          <ListOfRules />

          {/* Download PDF Section */}
          <div className="mt-16 mb-8">
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl shadow-2xl p-8 text-white border border-emerald-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="inline-block p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="lg:text-3xl text-2xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                RAILWAY SERVANTS (DISCIPLINE AND APPEAL) RULES 1968
                </h3>
                <p className="lg:text-lg text-base text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Get the complete Railway Servants (Discipline and Appeal) Rules, 1968 document in PDF format for offline reference and detailed study.
                </p>
                <Link 
                  href="/Railway Servants DA Rules 1968.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-bold lg:text-lg text-base rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                  
                </Link>
                
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

export default RSDARules