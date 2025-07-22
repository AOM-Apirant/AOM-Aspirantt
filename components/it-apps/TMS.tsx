"use client"
import React from 'react'

const TMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              TRAIN MANAGEMENT SYSTEM
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-emerald-300 mb-4">(TMS)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive digital platform for Track Assets Management, Inspections, and Maintenance across Indian Railways
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <ul className="space-y-1">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                  <span className="text-gray-200 lg:text-lg text-base">Migration of Track Assets Management from manual to electronic system</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔗</span>
                  <span className="text-gray-200 lg:text-lg text-base">Integration with other Asset management platforms</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏪</span>
                  <span className="text-gray-200 lg:text-lg text-base">Single platform for Stores Management across Indian Railways</span>
                </li>
              </ul>
              <ul className="space-y-1">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📡</span>
                  <span className="text-gray-200 lg:text-lg text-base">IOT enabled Real Time data collection and analysis</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔧</span>
                  <span className="text-gray-200 lg:text-lg text-base">Proactive track and related assets maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💻</span>
                  <span className="text-gray-200 lg:text-lg text-base">Digitalization of Track Assets and maintenance records</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📚</span>
                  <span className="text-gray-200 lg:text-lg text-base">Elimination of physical inspection registers</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                  <span className="text-gray-200 lg:text-lg text-base">Automated data validation and verification processes</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔮</span>
                  <span className="text-gray-200 lg:text-lg text-base">Predictive and prioritized Asset Maintenance</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 lg:text-lg text-base">Single point destination for all Track Assets information</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Modules Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Data Acquisition */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 pl-6 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4">Data Acquisition</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Various assets and inspection entry options to capture data from users at different levels.
              </p>
            </div>

            {/* Inspection Module */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 pl-6 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4">Inspection Module</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Direct & Indirect inspections including Push Trolley, OMS, TRC, USFD and more.
              </p>
            </div>

            {/* Track Diagram */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 pl-6 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4">Track Diagram</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Pictorial depiction of track structure data including PSR, TGI, and traffic density.
              </p>
            </div>

            {/* Stores Management */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 pl-6 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4">Stores Management</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Centralized platform for 3000+ inventory holding units across the country.
              </p>
            </div>

            {/* Fracture Analysis */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 pl-6 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-red-500 to-red-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4">Fracture Analysis</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Decision support module with historical analysis and parameter-based fracture tracking.
              </p>
            </div>

            {/* Track Recording Car */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 pl-6 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4">Track Recording Car (TRC)</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                IOT integration for real-time track parameters: Alignment, Twist, Gauge, TGI.
              </p>
            </div>
          </div>

          {/* Additional Modules Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Level Crossing Overhauling */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 pl-6 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 rounded-full mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Level Crossing Overhauling
              </h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Analysis reports for level crossing overhauling with advance planning capabilities.
              </p>
            </div>

            {/* Field Sensor Devices */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 pl-6 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-3 rounded-full mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </span>
                Field Sensor Devices
              </h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Real-time monitoring of rail temperature and bridge water levels for proactive maintenance.
              </p>
            </div>

            {/* Information Management */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 pl-6 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-full mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                Information Management
              </h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Single source for Railway Board Circulars, Zonal Circulars, and Important Instructions.
              </p>
            </div>

            {/* PCDO Module */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 pl-6 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-gradient-to-r from-violet-500 to-violet-600 p-3 rounded-full mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                PCDO Module
              </h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Periodical Confidential Demi Official reports with department-wise performance analysis.
              </p>
            </div>
          </div>

          {/* Mobile Version Section */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl py-6 pl-6 pr-2 mb-8 text-white border border-blue-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <h2 className="lg:text-3xl text-2xl font-bold mb-6 flex flex-col lg:flex-row gap-4 items-center">
              <svg className="lg:w-8 lg:h-8 w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Mobile Version of TMS
            </h2>
            <p className="lg:text-xl text-base mb-6">
              Mobile application developed for use on mobile & tablets, very useful for senior management and officials on the move.
            </p>
            <div className="grid md:grid-cols-2 gap-6 lg:text-lg text-base">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">•</span>
                  Rail fracture analysis
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">•</span>
                  IMR welds
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">•</span>
                  Overdue Ultrasonic testing
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">•</span>
                  Track machine working reports
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">•</span>
                  Engineering Control&apos;s morning position
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">•</span>
                  Real-time alerts and notifications
                </li>
              </ul>
            </div>
          </div>

          {/* Misc Services Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              Miscellaneous Services
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <ul className="space-y-1">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 lg:text-lg text-base group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-lg">Intelligent Actionable Reports available anytime anywhere</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 lg:text-lg text-base group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 text-lg">Better decision making through data analysis at different levels</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 lg:text-lg text-base group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 text-lg">Prioritization of Works based on inspection results</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 lg:text-lg text-base group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 text-lg">Need Based Deployment of Gang and Machine</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 lg:text-lg text-base group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 text-lg">Comparison of Track Quality Based on TRC & OMS Results</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 lg:text-lg text-base group-hover:scale-110 transition-transform">✅</span>
                  <span className="text-gray-200 text-lg">Quality of inspection vastly improved</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 lg:text-lg text-base group-hover:scale-110 transition-transform">📦</span>
                  <span className="text-gray-200 text-lg">Inventory management warning of stores falling below critical limit</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 lg:text-lg text-base group-hover:scale-110 transition-transform">💬</span>
                  <span className="text-gray-200 text-lg">Message Centre for collaboration among users</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Monitoring Benefits */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-2 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-semibold mb-6 flex flex-col lg:flex-row gap-4 items-center">
                <span className="mr-3">👁️</span>
                Monitoring
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Elimination of manual record keeping
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Effective monitoring of inspections & follow-ups
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Improved transparency at every level
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Proactive maintenance actions using Data Analytics
                </li>
              </ul>
            </div>

            {/* Availability Benefits */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl py-6 px-2 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-semibold mb-6 flex flex-col lg:flex-row gap-4 items-center">
                <span className="mr-3">🌐</span>
                Availability
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Holistic planning at Zonal/Divisional level
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Quick access to information
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Anywhere anytime access through web-based application
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Complete data available through single window
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Automated alerts
                </li>
              </ul>
            </div>

            {/* Management Benefits */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-2 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-semibold mb-6 flex flex-col lg:flex-row gap-4 items-center">
                <span className="mr-3">⚙️</span>
                Management
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  Better inventory management control
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  Optimum resource utilization
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  Green initiative, saving tonnes of paper annually
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  Officers free from routine activities
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  Focus on real engineering works
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 border border-white/20">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 text-center">Milestones Achieved</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 border border-white/20">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 lg:text-5xl text-xl font-bold p-4 rounded-full lg:w-40 lg:h-40 w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  1,70,000+
                </div>
                <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Inspections</h3>
                <p className="text-gray-200 lg:text-lg text-base">Digital inspections completed across the network</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 border border-white/20">
                <div className="bg-gradient-to-br from-green-500 to-green-600 lg:text-5xl text-xl font-bold p-4 rounded-full lg:w-40 lg:h-40 w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transition-shadow">
                  90,000+
                </div>
                <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Asset Changes</h3>
                <p className="text-gray-200 lg:text-lg text-base">Track assets managed and updated</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 border border-white/20">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 lg:text-5xl text-xl font-bold p-4 rounded-full lg:w-40 lg:h-40 w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                  1,00,000+
                </div>
                <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Registers Withdrawn</h3>
                <p className="text-gray-200 lg:text-lg text-base">Physical registers replaced with digital system</p>
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

export default TMS