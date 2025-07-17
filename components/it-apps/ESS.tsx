"use client"
import React from 'react'

const ESS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-green-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-teal-100 to-cyan-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              EMPLOYEE SELF SERVICE & INTERNAL APPLICATIONS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">(ESS)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital platform for CRIS employees to perform tasks online efficiently, securely, and user-friendly manner
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 text-lg">To reduce time consumption in movement, processing and follow-ups of files</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                  <span className="text-gray-200 text-lg">To enable immediate tracking of bills status, project financial status & other enquiries</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-lg">To minimize the consumption of paper in office</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 text-lg">To ensure accountability for all actions by maintaining an audit trail</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💡</span>
                  <span className="text-gray-200 text-lg">To establish an effective, reliable and user-friendly in-house IT system</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚀</span>
                  <span className="text-gray-200 text-lg">Improve efficiency and decision-making ability through digitalization</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 text-lg">Provide effective online tracking mechanism for files/documents</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 text-lg">Enhance decision-making capabilities with extensive search</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 text-lg">Eliminate wear and tear associated with manual files</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 text-lg">Facilitate CRIS employees in performing tasks online efficiently</span>
                </div>
              </div>
            </div>
          </div>

          {/* CRIS ESS Application Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              CRIS ESS Application Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-lg">ESS Dashboard - Employee info, messages, notices</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                  <span className="text-gray-200 text-lg">Leave Module - Approvals and balance maintenance</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💰</span>
                  <span className="text-gray-200 text-lg">Personal Bill claims & Approval</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🌍</span>
                  <span className="text-gray-200 text-lg">Tour Programs, Advances & Claim Expenses</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-gray-200 text-lg">Telephone & Mobile Bill Entry</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏢</span>
                  <span className="text-gray-200 text-lg">Conference Hall Booking Requests</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📁</span>
                  <span className="text-gray-200 text-lg">File Movement Tracking</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📦</span>
                  <span className="text-gray-200 text-lg">CRIS Assets Management</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 text-lg">Outsourced Staff Info Management</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🆔</span>
                  <span className="text-gray-200 text-lg">ID-Card Request & Printing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Section */}
          <div className="bg-gradient-to-r from-teal-500 via-cyan-600 to-green-600 rounded-2xl shadow-2xl p-8 mb-12 text-white border border-teal-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <h2 className="lg:text-3xl text-2xl font-bold mb-6 flex items-center">
              <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Additional Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Bio-Data Module - Verification of qualification, family & address details</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Send SMSs & Display Messages to targeted recipients</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">No-Dues Module - Clearance from different groups</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Self-declaration for VPF, House Rent, I. Tax related</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Enquiries/Downloads - Salary slips, Income Tax schedules, Form 16</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Employee birthday notifications</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 2v10h16V2H4zm16 10v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8h16z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Office orders and notices display</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Links to other important applications</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* File Tracking Benefits */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl shadow-2xl py-10 px-8 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 p-4 rounded-full mb-6 inline-block group-hover:bg-white/30 transition-all">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">📊</span>
                File Tracking
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="text-teal-200 mr-3">✓</span>
                  Easy tracking with reports and search engine
                </li>
                <li className="flex items-center">
                  <span className="text-teal-200 mr-3">✓</span>
                  Saves time and effort
                </li>
                <li className="flex items-center">
                  <span className="text-teal-200 mr-3">✓</span>
                  Effective utilization of Human Resources
                </li>
                <li className="flex items-center">
                  <span className="text-teal-200 mr-3">✓</span>
                  Central repository for information access
                </li>
              </ul>
            </div>

            {/* Decision Making Benefits */}
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl shadow-2xl py-10 px-8 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 p-4 rounded-full mb-6 inline-block group-hover:bg-white/30 transition-all">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">🎯</span>
                Decision Making
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="text-cyan-200 mr-3">✓</span>
                  Extensive search capabilities
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-200 mr-3">✓</span>
                  Instant access (24x7) to information
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-200 mr-3">✓</span>
                  Reduces process completion time
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-200 mr-3">✓</span>
                  Increases employee efficiency
                </li>
              </ul>
            </div>

            {/* Environment Friendly Benefits */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl py-10 px-8 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 p-4 rounded-full mb-6 inline-block group-hover:bg-white/30 transition-all">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">🌱</span>
                Environment Friendly
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Considerable reduction in paper usage
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Major step towards green environment
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Sustainable office practices
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Digital transformation benefits
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-12 px-8 border border-white/20">
            <h2 className="lg:text-4xl text-3xl font-bold text-white mb-12 text-center">Milestones Achieved</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-5xl font-bold p-8 rounded-full w-40 h-40 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-teal-500/50 transition-shadow">
                  900+
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">ESS Users</h3>
                <p className="text-gray-200 text-lg">Active users across CRIS</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-5xl font-bold p-8 rounded-full w-40 h-40 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-cyan-500/50 transition-shadow">
                  7500+
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Salary Transactions</h3>
                <p className="text-gray-200 text-lg">Annual salary-related transactions processed</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-5xl font-bold p-8 rounded-full w-40 h-40 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transition-shadow">
                  12500+
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Leave Applications</h3>
                <p className="text-gray-200 text-lg">Annual leave application transactions</p>
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

export default ESS