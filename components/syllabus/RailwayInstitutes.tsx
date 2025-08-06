"use client"
import React from 'react'

const RailwayInstitutes = () => {
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
              RAILWAY INSTITUTES
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Indian Railways operates several specialized institutes for training its officers and staff, 
              focusing on various technical and managerial disciplines. Below is a comprehensive list of 
              the Centralised Training Institutes (CTIs) and other notable training establishments.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Centralised Training Institutes (CTIs)
            </h2>
            <p className="text-gray-200 lg:text-lg text-base text-center mb-6">
              These institutes are primarily responsible for training Group A and Group B officers across various disciplines
            </p>
          </div>

          {/* CTIs Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* NAIR */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-2 shadow-2xl border border-blue-400/30 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-3 items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center">National Academy of Indian Railways (NAIR)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">📍</span>
                  <span className="text-gray-200">Location: Vadodara, Gujarat</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">🏛️</span>
                  <span className="text-gray-200">Formerly: Railway Staff College</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">🎯</span>
                  <span className="text-gray-200">Focus: Centralized training for IRAS, IRPS, IRSS, IRMS officers</span>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  The academy is housed in the historic Pratap Vilas Palace and is the apex institution for railway officer training.
                </p>
              </div>
            </div>

            {/* IRICEN */}
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-2 shadow-2xl border border-emerald-400/30 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-3 items-center mb-4">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center">Indian Railways Institute of Civil Engineering (IRICEN)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">📍</span>
                  <span className="text-gray-200">Location: Pune, Maharashtra</span>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">🏗️</span>
                  <span className="text-gray-200">Focus: Training for IRSE officers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">📚</span>
                  <span className="text-gray-200">Courses: Civil engineering aspects of railway infrastructure</span>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  Provides courses in track, bridges, and construction. Offers Diploma in Railway Engineering through IPWE.
                </p>
              </div>
            </div>

            {/* IRIEEN */}
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-2 shadow-2xl border border-yellow-400/30 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-3 items-center mb-4">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center">Indian Railways Institute of Electrical Engineering (IRIEEN)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">📍</span>
                  <span className="text-gray-200">Location: Nashik, Maharashtra</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">⚡</span>
                  <span className="text-gray-200">Focus: Training for IRSEE officers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">🔌</span>
                  <span className="text-gray-200">Covers: Traction systems, power supply, railway electrification</span>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  Recent expansion plans (IRIEEN Version 2.0) were unveiled in July 2025.
                </p>
              </div>
            </div>

            {/* IRIMEE */}
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-2 shadow-2xl border border-red-400/30 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-3 items-center mb-4">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center">Indian Railways Institute of Mechanical and Electrical Engineering (IRIMEE)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">📍</span>
                  <span className="text-gray-200">Location: Jamalpur, Bihar</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">🏭</span>
                  <span className="text-gray-200">Focus: Training for IRSME officers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">📅</span>
                  <span className="text-gray-200">Established: 1888 (Oldest CTI)</span>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  Offers four-year undergraduate degree for SCRA and professional courses for officers and supervisors.
                </p>
              </div>
            </div>

            {/* IRISET */}
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-2 shadow-2xl border border-purple-400/30 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-3 items-center mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center">Indian Railways Institute of Signal Engineering and Telecommunications (IRISET)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">📍</span>
                  <span className="text-gray-200">Location: Secunderabad, Telangana</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">📡</span>
                  <span className="text-gray-200">Focus: Training for IRSSE officers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">🛡️</span>
                  <span className="text-gray-200">Specializes: Signal engineering, telecommunications, Kavach system</span>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  Has MoUs with engineering colleges to introduce railway-specific elective subjects.
                </p>
              </div>
            </div>

            {/* IRITM */}
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-2 shadow-2xl border border-cyan-400/30 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-3 items-center mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center">Indian Railways Institute of Transport Management (IRITM)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">📍</span>
                  <span className="text-gray-200">Location: Lucknow, Uttar Pradesh</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">🚂</span>
                  <span className="text-gray-200">Focus: Training for IRTS officers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">📦</span>
                  <span className="text-gray-200">Covers: Transportation management, commercial operations, logistics</span>
                </div>
              </div>
            </div>

            {/* JRRPF */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-2 shadow-2xl border border-green-400/30 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-3 items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center">Jagjivan Ram Railway Protection Force Academy (JRRPF)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">📍</span>
                  <span className="text-gray-200">Location: Lucknow, Uttar Pradesh</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">🛡️</span>
                  <span className="text-gray-200">Focus: Training for RPF officers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">👮</span>
                  <span className="text-gray-200">Covers: Security, law enforcement, railway safety</span>
                </div>
              </div>
            </div>

            {/* IRIFM */}
            <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-2 shadow-2xl border border-pink-400/30 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-3 items-center mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center">Indian Railways Institute of Financial Management (IRIFM)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-pink-400 mr-3 mt-1">📍</span>
                  <span className="text-gray-200">Location: Secunderabad, Telangana</span>
                </div>
                <div className="flex items-start">
                  <span className="text-pink-400 mr-3 mt-1">💰</span>
                  <span className="text-gray-200">Focus: Training for IRAS officers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-pink-400 mr-3 mt-1">📊</span>
                  <span className="text-gray-200">Covers: Financial and managerial training for accounts department</span>
                </div>
              </div>
            </div>

            {/* C-TARA */}
            <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-2 shadow-2xl border border-orange-400/30 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-3 items-center mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center">Centralized Training Academy for Railway Accounts (C-TARA)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">📍</span>
                  <span className="text-gray-200">Location: Secunderabad, Telangana</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">🎯</span>
                  <span className="text-gray-200">Focus: Financial and managerial training</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">🔄</span>
                  <span className="text-gray-200">Complements: IRIFM with discipline-specific modules</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Training Institutions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Other Notable Training Institutions
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* ZRTIs */}
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center text-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                  Zonal Railway Training Institutes (ZRTIs)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-indigo-400 mr-3 mt-1">🏢</span>
                    <span className="text-gray-200">Multiple ZRTIs across India, each catering to specific railway zones</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-400 mr-3 mt-1">👥</span>
                    <span className="text-gray-200">Train non-gazetted staff: station masters, ticket collectors, operational personnel</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-400 mr-3 mt-1">📊</span>
                    <span className="text-gray-200">Approximately 55 main training centers and 222 other training centers</span>
                  </div>
                </div>
              </div>

              {/* IRILMM */}
              <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center text-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Indian Railways Institute of Logistics & Materials Management (IRILMM)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-teal-400 mr-3 mt-1">📍</span>
                    <span className="text-gray-200">Location: New Delhi</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-400 mr-3 mt-1">📦</span>
                    <span className="text-gray-200">Focus: Logistics, supply chain management, materials management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-400 mr-3 mt-1">🛒</span>
                    <span className="text-gray-200">Relevant for: Officers and staff involved in procurement and stores</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Training Network Statistics
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-blue-400/30">
                <div className="lg:text-4xl text-2xl font-bold text-white">9</div>
                <div className="lg:text-lg text-base text-gray-300 mt-2">Centralised Training Institutes</div>
              </div>
              <div className="text-center bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-emerald-400/30">
                <div className="lg:text-4xl text-2xl font-bold text-white">55</div>
                <div className="lg:text-lg text-base text-gray-300 mt-2">Main Training Centers</div>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-yellow-400/30">
                <div className="lg:text-4xl text-2xl font-bold text-white">222</div>
                <div className="lg:text-lg text-base text-gray-300 mt-2">Other Training Centers</div>
              </div>
              <div className="text-center bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-red-400/30">
                <div className="lg:text-4xl text-2xl font-bold text-white">Year: 1888</div>
                <div className="lg:text-lg text-base text-gray-300 mt-2">Oldest Institute (IRIMEE)</div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Additional Notes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-3">Training Scope</h3>
                  <p className="text-gray-200 text-sm">
                    CTIs focus on officer training (Group A and B), while ZRTIs handle non-gazetted staff training. 
                    NAIR serves as the apex institution for officer training.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-3">Diploma Courses</h3>
                  <p className="text-gray-200 text-sm">
                    Institutions like IRICEN and IRILMM offer diploma courses through affiliated bodies like IPWE.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-3">Collaborations</h3>
                  <p className="text-gray-200 text-sm">
                    Some institutes like IRISET have MoUs with engineering colleges to integrate railway engineering 
                    into academic curricula.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-3">Historical Context</h3>
                  <p className="text-gray-200 text-sm">
                    The oldest institute, IRIMEE, was established in 1888. The Railway Staff College (now NAIR) 
                    was reestablished in 1952 at Vadodara.
                  </p>
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

export default RailwayInstitutes