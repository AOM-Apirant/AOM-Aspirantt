"use client"
import React from 'react'

const HRMS = () => {
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
              HUMAN RESOURCE MANAGEMENT SYSTEM
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">(HRMS)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The Human Resource Management System (HRMS) of the South Central Railway (SCR), a major zone of Indian Railways headquartered in Secunderabad, 
              is part of a broader initiative by Indian Railways to digitize and streamline human resource processes for its employees.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
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
                  Launched as a high-priority project, HRMS aims to enhance productivity, transparency, and employee satisfaction while aligning with the vision of a digitally empowered society. 
                  HRMS is a centralized online platform developed by the Centre for Railway Information Systems (CRIS) under the Ministry of Railways.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  For SCR, which oversees divisions like Hyderabad, Secunderabad, Guntakal, Guntur, Nanded, and Vijayawada, 
                  HRMS streamlines administrative processes for its large workforce, impacting over 27 lakh families of serving and retired employees across Indian Railways.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Key Features and Modules
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                    Employee Self-Service (ESS)
                  </h3>
                  <div className="text-gray-200 text-sm space-y-2">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Update personal details</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Access service records</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>View salary slips</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                    Provident Fund (PF) Advance
                  </h3>
                  <div className="text-gray-200 text-sm space-y-2">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Check PF balance</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Apply for advances</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Track applications</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                    Settlement Module
                  </h3>
                  <div className="text-gray-200 text-sm space-y-2">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Digital retirement process</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Online settlement forms</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Automatic alerts</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                    Electronic Service Record
                  </h3>
                  <div className="text-gray-200 text-sm space-y-2">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Digital service history</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>97% data entry complete</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Secure storage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Modules Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Additional Modules
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">APAR Module</h3>
                <p className="text-gray-200 text-sm">
                  Digitizes performance appraisal for non-gazetted employees with bilingual formats, voice-to-text functionality, 
                  and instant notifications.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">E-Pass Module</h3>
                <p className="text-gray-200 text-sm">
                  Replaces physical passes with digital privilege passes and PTOs, allowing online application, 
                  tracking, and cancellation.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Implementation & Accessibility
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-rose-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Launch & Development</h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  HRMS was launched in November 2019, with key modules rolled out progressively. 
                  The system is accessible via the HRMS web portal and the HRMS Employee Mobile App, available on Android and iOS.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Registration Process</h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Employees register using their IPAS ID, PF number, or mobile number linked to their service record. 
                  An OTP is sent for verification. Retired employees can register via the &quot;Retired Employee Registration&quot; link.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              Benefits for SCR Employees
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-lg text-base font-bold text-white mb-3">Transparency</h3>
                <p className="text-gray-200 text-sm">
                  Real-time access to service records, passes, PF, and settlements with enhanced accountability.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-lg text-base font-bold text-white mb-3">Efficiency</h3>
                <p className="text-gray-200 text-sm">
                  Reduced paperwork, faster processes, and minimized errors through digitization.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-lg text-base font-bold text-white mb-3">Empowerment</h3>
                <p className="text-gray-200 text-sm">
                  Employees can manage their data and access services conveniently through ESS module.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              HRMS Helpdesk for SCR
            </h2>
            <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
              <div className="text-center space-y-4">
                <p className="text-gray-200 lg:text-lg text-base">
                  For support, SCR employees can contact the HRMS helpdesk at{' '}
                  <strong className="text-indigo-300">8287998772</strong> (covering NWR, SECR, CR, SCR)
                </p>
                <p className="text-gray-200 lg:text-base text-sm">
                  Email: <strong className="text-indigo-300">irhrms@cris.org.in</strong>
                </p>
                <p className="text-gray-200 lg:text-base text-sm">
                  Website: <strong className="text-indigo-300">https://hrms.indianrail.gov.in/HRMS</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Download PDF Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Download HRMS PDF File
              </h2>
              <p className="text-gray-200 lg:text-lg text-base mb-8 max-w-2xl mx-auto">
                Get comprehensive HRMS study material in PDF format. This document contains detailed information about 
                Human Resource Management System implementation in South Central Railway.
              </p>
              <a 
                href="/syllabus/HRMS.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold lg:text-lg text-base rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400/30 hover:border-green-300/50"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
              <div className="mt-4 text-gray-300 text-sm">
                <p>File size: 323 KB • Format: PDF</p>
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

export default HRMS