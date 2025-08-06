"use client"
import React from 'react'

const APAR = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              ANNUAL PERFORMANCE APPRAISAL REPORT
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">(APAR)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive performance evaluation system for Indian Railways employees, designed to assess job performance, 
              potential, and overall contribution to the organization with transparency and fairness.
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
              APAR Overview
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Purpose & Objectives
                </h3>
                <p className="text-gray-200 lg:text-lg text-base">
                  The APAR is used to evaluate the performance, skills, and attributes of railway employees, including aspects like integrity, 
                  attitude, leadership qualities, and capacity to handle responsibilities. It serves as a tool for personnel decisions such as 
                  promotions, transfers, and identifying training needs.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                  <h4 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-3"></span>
                    Nomenclature
                  </h4>
                  <p className="text-gray-200 lg:text-base text-sm">
                    Previously known as the Annual Confidential Report (ACR), it was renamed APAR to reflect a more transparent and performance-oriented approach.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h4 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3"></span>
                    Applicability
                  </h4>
                  <p className="text-gray-200 lg:text-base text-sm">
                    The APAR system applies to both gazetted and non-gazetted employees, with specific guidelines for each category.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                  <div>
                    <h4 className="text-white font-semibold lg:text-lg text-base">Personal Data</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Includes basic employee details and identification information.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">✍️</span>
                  <div>
                    <h4 className="text-white font-semibold lg:text-lg text-base">Self-Appraisal</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Employees provide an account of their achievements and contributions.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                  <div>
                    <h4 className="text-white font-semibold lg:text-lg text-base">Assessment by Officers</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Evaluations from Reporting Officer, Reviewing Officer, and Accepting Authority.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <div>
                    <h4 className="text-white font-semibold lg:text-lg text-base">Evaluation Criteria</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Focuses on job performance, integrity, leadership, attitude, and potential.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                  <div>
                    <h4 className="text-white font-semibold lg:text-lg text-base">Grading & Feedback</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Final grading and all entries communicated to employee for transparency.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                  <div>
                    <h4 className="text-white font-semibold lg:text-lg text-base">Transparency</h4>
                    <p className="text-gray-200 lg:text-base text-sm">All entries including overall grade communicated to employee since 2008-09.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process & Workflow Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Process & Workflow
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <span className="lg:text-2xl text-xl">1</span>
                </div>
                <h4 className="text-white font-bold lg:text-lg text-base mb-2">Self-Appraisal</h4>
                <p className="text-gray-200 lg:text-sm text-xs">Employees submit their achievements and contributions</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <span className="lg:text-2xl text-xl">2</span>
                </div>
                <h4 className="text-white font-bold lg:text-lg text-base mb-2">Reporting Officer</h4>
                <p className="text-gray-200 lg:text-sm text-xs">Evaluates performance and provides initial remarks</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <span className="lg:text-2xl text-xl">3</span>
                </div>
                <h4 className="text-white font-bold lg:text-lg text-base mb-2">Reviewing Officer</h4>
                <p className="text-gray-200 lg:text-sm text-xs">Reviews assessment for consistency and fairness</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <span className="lg:text-2xl text-xl">4</span>
                </div>
                <h4 className="text-white font-bold lg:text-lg text-base mb-2">Accepting Authority</h4>
                <p className="text-gray-200 lg:text-sm text-xs">Finalizes APAR and addresses representations</p>
              </div>
            </div>
          </div>

          {/* Digital Integration Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Digital Integration via HRMS
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col gap-3 text-center items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  HRMS Portal Features
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔐</span>
                      <span className="text-gray-200 lg:text-base text-sm">APAR module for non-gazetted employees</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                      <span className="text-gray-200 lg:text-base text-sm">Status report showing pending appeals and assessed reports</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📱</span>
                      <span className="text-gray-200 lg:text-base text-sm">Access via HRMS ID linked to IPAS ID or mobile number</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                      <span className="text-gray-200 lg:text-base text-sm">Digital submission and tracking of appraisals</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                      <span className="text-gray-200 lg:text-base text-sm">Real-time updates and notifications</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📈</span>
                      <span className="text-gray-200 lg:text-base text-sm">Breakdown for Reporting and Reviewing Officers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges & Issues Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges and Issues
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="text-white font-bold lg:text-lg text-base mb-4 flex flex-col gap-3 text-center items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3"></span>
                  Technical Issues with HRMS
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚠️</span>
                    <span className="text-gray-200 lg:text-base text-sm">Transfer applications not reflecting correctly</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚠️</span>
                    <span className="text-gray-200 lg:text-base text-sm">Action options not appearing after rejections</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="text-white font-bold lg:text-lg text-base mb-4 flex flex-col gap-3 text-center items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mr-3"></span>
                  Data Integration Issues
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚠️</span>
                    <span className="text-gray-200 lg:text-base text-sm">Incomplete data migration in IPAS</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚠️</span>
                    <span className="text-gray-200 lg:text-base text-sm">Partial integration with other systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Developments Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Recent Developments
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="text-white font-bold lg:text-lg text-base mb-4 flex flex-col gap-3 text-center items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mr-3"></span>
                  Digitization (2020)
                </h4>
                <p className="text-gray-200 lg:text-base text-sm">
                  The HRMS portal has digitized APAR processes, replacing paper-based systems for non-gazetted staff. 
                  This is part of Indian Railways&apos; broader push toward a digitally empowered workforce.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="text-white font-bold lg:text-lg text-base mb-4 flex flex-col gap-3 text-center items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3"></span>
                  Timelines for 2024-25
                </h4>
                <p className="text-gray-200 lg:text-base text-sm">
                  A Railway Board order extended the APAR completion timeline for 2024-25 to March 31, 2026, 
                  to streamline the process and ensure timely completion.
                </p>
              </div>
            </div>
          </div>

          {/* Recommendations Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              Recommendations for Employees
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <span className="lg:text-2xl text-xl">🔐</span>
                </div>
                <h4 className="text-white font-bold lg:text-lg text-base mb-2">Accessing HRMS</h4>
                <p className="text-gray-200 lg:text-sm text-xs">
                  Register on the HRMS portal using your HRMS ID or IPAS ID. For issues, contact the helpdesk via the official website.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <span className="lg:text-2xl text-xl">📝</span>
                </div>
                <h4 className="text-white font-bold lg:text-lg text-base mb-2">Appealing APAR Entries</h4>
                <p className="text-gray-200 lg:text-sm text-xs">
                  Submit representations within 15 days of receiving the APAR, ensuring they are addressed to the Accepting Authority.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <span className="lg:text-2xl text-xl">🛠️</span>
                </div>
                <h4 className="text-white font-bold lg:text-lg text-base mb-2">Technical Support</h4>
                <p className="text-gray-200 lg:text-sm text-xs">
                  For HRMS-related issues, verify the correct helpdesk number on the official HRMS website and report issues with your HRMS ID.
                </p>
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

export default APAR