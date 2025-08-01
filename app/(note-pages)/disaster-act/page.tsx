"use client"
import React from 'react'
import Link from 'next/link'

const DisasterManagementAct2005 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-2 lg:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              THE DISASTER MANAGEMENT ACT 2005
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive legislation enacted by the Government of India on December 23, 2005, 
              to provide a legal framework for the effective management of disasters and related matters.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 lg:px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Act Overview
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 px-2 lg:px-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-4 text-center items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  Key Objectives
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                    <span className="text-gray-200 lg:text-lg text-base">Establish an efficient disaster management system to handle natural and man-made calamities</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                    <span className="text-gray-200 lg:text-lg text-base">Facilitate prevention, mitigation, preparedness, response, and recovery from disasters</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                    <span className="text-gray-200 lg:text-lg text-base">Empower the central government to declare disaster-affected areas and develop strategies</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                    <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🌱</span>
                    <span className="text-gray-200 lg:text-lg text-base">Promote a proactive, technology-driven, multi-hazard approach to disaster resilience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Definition Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 lg:px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Definition of Disaster
            </h2>
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base mb-4">
                Under Section 2(d), a disaster is defined as a &quot;catastrophe, mishap, calamity, or grave occurrence&quot; 
                arising from natural or man-made causes, resulting in:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💔</span>
                  <span className="text-gray-200 lg:text-lg text-base">Substantial loss of life or human suffering</span>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏚️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Damage to or destruction of property</span>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🌍</span>
                  <span className="text-gray-200 lg:text-lg text-base">Degradation of the environment</span>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚠️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Beyond the coping capacity of the affected community</span>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Framework Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 lg:px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Institutional Framework
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* NDMA */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                    <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold lg:text-lg text-base">NDMA</h3>
                  <p className="text-green-200 text-sm">National Disaster Management Authority</p>
                </div>
                <div className="text-gray-200 text-sm">
                  <p><strong>Head:</strong> Prime Minister of India</p>
                  <p><strong>Functions:</strong> Lay down policies, plans, and guidelines</p>
                </div>
              </div>

              {/* NEC */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                    <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold lg:text-lg text-base">NEC</h3>
                  <p className="text-blue-200 text-sm">National Executive Committee</p>
                </div>
                <div className="text-gray-200 text-sm">
                  <p><strong>Head:</strong> Home Secretary</p>
                  <p><strong>Functions:</strong> Assist NDMA, prepare NDMP</p>
                </div>
              </div>

              {/* SDMA */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                    <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold lg:text-lg text-base">SDMA</h3>
                  <p className="text-purple-200 text-sm">State Disaster Management Authority</p>
                </div>
                <div className="text-gray-200 text-sm">
                  <p><strong>Head:</strong> Chief Minister</p>
                  <p><strong>Functions:</strong> State-level plans and coordination</p>
                </div>
              </div>

              {/* DDMA */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                    <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold lg:text-lg text-base">DDMA</h3>
                  <p className="text-indigo-200 text-sm">District Disaster Management Authority</p>
                </div>
                <div className="text-gray-200 text-sm">
                  <p><strong>Head:</strong> District Collector</p>
                  <p><strong>Functions:</strong> District-level plans and response</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-teal-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <div>
                  <h3 className="text-white font-bold lg:text-lg text-base mb-2">National Disaster Management Plan (NDMP)</h3>
                  <p className="text-gray-200 lg:text-base text-sm">Mandates NDMA to develop a comprehensive plan for disaster management, reviewed annually by NEC.</p>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-teal-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🗺️</span>
                <div>
                  <h3 className="text-white font-bold lg:text-lg text-base mb-2">State and District Plans</h3>
                  <p className="text-gray-200 lg:text-base text-sm">SDMAs and DDMAs prepare State Disaster Management Plans (SDMP) and District Disaster Management Plans (DDMP).</p>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-teal-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💰</span>
                <div>
                  <h3 className="text-white font-bold lg:text-lg text-base mb-2">Financial Mechanisms</h3>
                  <p className="text-gray-200 lg:text-base text-sm">National Disaster Response Fund and National Disaster Mitigation Fund at national level.</p>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-teal-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏛️</span>
                <div>
                  <h3 className="text-white font-bold lg:text-lg text-base mb-2">Role of Local Bodies</h3>
                  <p className="text-gray-200 lg:text-base text-sm">Assigns responsibilities to Panchayati Raj Institutions and Urban Local Bodies for disaster management.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chapters and Sections */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 5.477 18.246 5 16.5 5c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Chapters and Sections
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Chapter I */}
              <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold lg:text-lg text-base mb-3 flex flex-col gap-4 text-center items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mr-3"></span>
                  CHAPTER I <br/> PRELIMINARY
                </h3>
                                 <div className="space-y-3 text-sm">
                   <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                     <span className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">1</span>
                     <span className="text-gray-200">Short title, extent and commencement</span>
                   </div>
                   <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                     <span className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">2</span>
                     <span className="text-gray-200">Definitions</span>
                   </div>
                 </div>
              </div>

              {/* Chapter II */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold lg:text-lg text-base mb-3 flex flex-col gap-4 text-center items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3"></span>
                  CHAPTER II <br/> NATIONAL DISASTER MANAGEMENT AUTHORITY
                </h3>
                                                                   <div className="space-y-3 text-sm">
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">3</span>
                      <span className="text-gray-200">Establishment of NDMA</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">4</span>
                      <span className="text-gray-200">Meetings of National Authority</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">5</span>
                      <span className="text-gray-200">Appointment of officers and other employees</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">6</span>
                      <span className="text-gray-200">Powers and functions of National Authority</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">7</span>
                      <span className="text-gray-200">Constitution of advisory committee</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">8</span>
                      <span className="text-gray-200">Constitution of National Executive Committee</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">9</span>
                      <span className="text-gray-200">Constitution of sub-committees</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">10</span>
                      <span className="text-gray-200">Powers and functions of National Executive Committee</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">11</span>
                      <span className="text-gray-200">National Plan</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">12</span>
                      <span className="text-gray-200">Guidelines for minimum standards of relief</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">13</span>
                      <span className="text-gray-200">Relief in loan repayment, etc.</span>
                    </div>
                  </div>
              </div>

              {/* Chapter III */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold lg:text-lg text-base mb-3 flex flex-col gap-4 text-center items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3"></span>
                  CHAPTER III <br/> STATE DISASTER MANAGEMENT AUTHORITY
                </h3>
                                                                   <div className="space-y-3 text-sm">
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">14</span>
                      <span className="text-gray-200">Establishment of State Disaster Management Authority</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">15</span>
                      <span className="text-gray-200">Meetings of the State Authority</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">16</span>
                      <span className="text-gray-200">Appointment of officers and other employees</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">17</span>
                      <span className="text-gray-200">Constitution of advisory committee</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">18</span>
                      <span className="text-gray-200">Powers and functions of State Authority</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">19</span>
                      <span className="text-gray-200">Guidelines for minimum standard of relief</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">20</span>
                      <span className="text-gray-200">Constitution of State Executive Committee</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">21</span>
                      <span className="text-gray-200">Constitution of sub-committees</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">22</span>
                      <span className="text-gray-200">Functions of the State Executive Committee</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">23</span>
                      <span className="text-gray-200">State Plan</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">24</span>
                      <span className="text-gray-200">Powers and functions of State Executive Committee</span>
                    </div>
                  </div>
              </div>

              {/* Chapter IV */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold lg:text-lg text-base mb-3 flex flex-col gap-4 text-center items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3"></span>
                  CHAPTER IV <br/> DISTRICT DISASTER MANAGEMENT AUTHORITY
                </h3>
                                                                   <div className="space-y-3 text-sm">
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">25</span>
                      <span className="text-gray-200">Constitution of District Disaster Management Authority</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">26</span>
                      <span className="text-gray-200">Powers of Chairperson of District Authority</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">27</span>
                      <span className="text-gray-200">Meetings</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">28</span>
                      <span className="text-gray-200">Constitution of advisory committees</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">29</span>
                      <span className="text-gray-200">Appointment of officers and other employees</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">30</span>
                      <span className="text-gray-200">Powers and functions of District Authority</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">31</span>
                      <span className="text-gray-200">District Plan</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">32</span>
                      <span className="text-gray-200">Plans by different authorities at district level</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">33</span>
                      <span className="text-gray-200">Requisition by the District Authority</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">34</span>
                      <span className="text-gray-200">Powers and functions in threatening disaster situation</span>
                    </div>
                  </div>
              </div>

              {/* Chapter V */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold lg:text-lg text-base mb-3 flex flex-col gap-4 text-center items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3"></span>
                  CHAPTER V <br/> MEASURES BY THE GOVERNMENT
                </h3>
                                                                   <div className="space-y-3 text-sm">
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">35</span>
                      <span className="text-gray-200">Central Government to take measures</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">36</span>
                      <span className="text-gray-200">Responsibilities of Ministries or Departments</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">37</span>
                      <span className="text-gray-200">Disaster management plans of Ministries</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">38</span>
                      <span className="text-gray-200">State Government to take measures</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">39</span>
                      <span className="text-gray-200">Responsibilities of departments of State Government</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">40</span>
                      <span className="text-gray-200">Disaster management plan of departments of State</span>
                    </div>
                  </div>
              </div>

              {/* Chapter VI-XI */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold lg:text-lg text-base mb-3 flex flex-col gap-4 text-center items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3"></span>
                  CHAPTERS VI-XI <br/> MISCELLANEOUS
                </h3>
                                                                   <div className="space-y-3 text-sm">
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">41</span>
                      <span className="text-gray-200">Functions of the local authority</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">42</span>
                      <span className="text-gray-200">National Institute of Disaster Management</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">43</span>
                      <span className="text-gray-200">Officers and other employees of the National Institute</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">44</span>
                      <span className="text-gray-200">National Disaster Response Force</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">45</span>
                      <span className="text-gray-200">Control, direction, etc.</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">46</span>
                      <span className="text-gray-200">National Disaster Response Fund</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">47</span>
                      <span className="text-gray-200">National Disaster Mitigation Fund</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">48</span>
                      <span className="text-gray-200">Establishment of funds by State Government</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">49</span>
                      <span className="text-gray-200">Allocation of funds by Ministries and Departments</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">50</span>
                      <span className="text-gray-200">Emergency procurement and accounting</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">51</span>
                      <span className="text-gray-200">Punishment for obstruction, etc.</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">52</span>
                      <span className="text-gray-200">Punishment for false claim</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">53</span>
                      <span className="text-gray-200">Punishment for misappropriation of money</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">54</span>
                      <span className="text-gray-200">Punishment for false warning</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">55</span>
                      <span className="text-gray-200">Offences by Departments of the Government</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">56</span>
                      <span className="text-gray-200">Failure of officer in duty</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">57</span>
                      <span className="text-gray-200">Penalty for contravention of requisitioning order</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">58</span>
                      <span className="text-gray-200">Offence by companies</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">59</span>
                      <span className="text-gray-200">Previous sanction for prosecution</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">60</span>
                      <span className="text-gray-200">Cognizance of offences</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">61</span>
                      <span className="text-gray-200">Prohibition against discrimination</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">62</span>
                      <span className="text-gray-200">Power to issue direction by Central Government</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">63</span>
                      <span className="text-gray-200">Powers to be made available for rescue operations</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">64</span>
                      <span className="text-gray-200">Making or amending rules in certain circumstances</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">65</span>
                      <span className="text-gray-200">Power of requisition of resources</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">66</span>
                      <span className="text-gray-200">Payment of compensation</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">67</span>
                      <span className="text-gray-200">Direction to media for communication of warnings</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">68</span>
                      <span className="text-gray-200">Authentication of orders or decisions</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">69</span>
                      <span className="text-gray-200">Delegation of powers</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">70</span>
                      <span className="text-gray-200">Annual report</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">71</span>
                      <span className="text-gray-200">Bar of jurisdiction of court</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">72</span>
                      <span className="text-gray-200">Act to have overriding effect</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">73</span>
                      <span className="text-gray-200">Action taken in good faith</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">74</span>
                      <span className="text-gray-200">Immunity from legal process</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">75</span>
                      <span className="text-gray-200">Power of Central Government to make rules</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">76</span>
                      <span className="text-gray-200">Power to make regulations</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">77</span>
                      <span className="text-gray-200">Rules and regulations to be laid before Parliament</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">78</span>
                      <span className="text-gray-200">Power of State Government to make rules</span>
                    </div>
                    <div className="flex items-center group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">79</span>
                      <span className="text-gray-200">Power to remove difficulties</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold lg:text-lg text-base mb-3 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  COVID-19 Pandemic
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Invoked in March 2020 for the national lockdown and in 2021 for free inter-state movement 
                  of oxygen-carrying vehicles. Guidelines on biological disasters (2008) were used to manage the pandemic.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-bold lg:text-lg text-base mb-3 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Natural Disasters
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Applied in events like the 2013 Uttarakhand floods, 2014 Kashmir floods, and 2018 Kerala floods 
                  for coordinated response and relief.
                </p>
              </div>
            </div>
          </div>

          {/* Significance Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Significance
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-pink-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                <div>
                  <h3 className="text-white font-bold lg:text-lg text-base mb-2">Fills Critical Gaps</h3>
                  <p className="text-gray-200 lg:text-base text-sm">Fills critical gaps in India&apos;s disaster management framework, shifting focus from relief to prevention and preparedness.</p>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-pink-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏗️</span>
                <div>
                  <h3 className="text-white font-bold lg:text-lg text-base mb-2">Structured System</h3>
                  <p className="text-gray-200 lg:text-base text-sm">Establishes a structured, multi-level system for coordinated response.</p>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-pink-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🌍</span>
                <div>
                  <h3 className="text-white font-bold lg:text-lg text-base mb-2">Vulnerability Alignment</h3>
                  <p className="text-gray-200 lg:text-base text-sm">Aligns with India&apos;s vulnerability to disasters, with 27 out of 29 states prone to recurrent hazards.</p>
                </div>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-pink-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚀</span>
                <div>
                  <h3 className="text-white font-bold lg:text-lg text-base mb-2">Vision Support</h3>
                  <p className="text-gray-200 lg:text-base text-sm">Supports India&apos;s vision of a &quot;Safer, Disaster Resilient, and Dynamic India&quot; through sustained efforts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download PDF Section */}
      <div className="relative z-10 py-8 lg:px-4 px-2">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-red-400/30 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="inline-block lg:p-4 p-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-4 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-red-500 to-orange-600 lg:p-4 p-2 rounded-full">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
                             <h2 className="lg:text-4xl text-2xl font-bold text-white mb-4">
                 Download The Disaster Management Act 2005 PDF File
               </h2>
               <p className="lg:text-lg text-base text-gray-200 mb-8 max-w-2xl mx-auto">
                 View the complete Disaster Management Act 2005 in PDF format. Opens directly in your browser for easy reading.
               </p>
              <Link 
                href="/The Disaster Management Act, 2005.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-3 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold lg:text-lg text-base rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                                 <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 Download PDF
                 <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                 </svg>
              </Link>
              
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

export default DisasterManagementAct2005