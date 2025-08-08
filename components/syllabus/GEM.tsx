"use client"
import React from 'react'

const GEM = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              GOVERNMENT E-MARKETPLACE
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">(GeM)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              An online platform launched by the Government of India in August 2016 to facilitate transparent, 
              efficient, and inclusive procurement processes for government entities including Indian Railways.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Platform Overview
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Mission & Vision
                </h3>
                <p className="text-gray-200 lg:text-lg text-base">
                  GeM aims to create a transparent, efficient, and inclusive procurement process, replacing the traditional 
                  Directorate General of Supplies and Disposals (DGS&D). For Indian Railways, GeM has become a critical tool 
                  to streamline procurement processes, aligning with digitalization, transparency, and cost-effectiveness objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Integration with Railways Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </span>
              Integration with Indian Railways
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-3 text-center lg:text-left items-center">
                    <span className="text-green-400 mr-2">🚄</span>
                    Procurement Scope
                  </h3>
                  <ul className="space-y-2 text-gray-200 lg:text-base text-sm">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">🛒</span>
                      <span>Common-use goods and services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">💻</span>
                      <span>Office supplies and IT equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">🚗</span>
                      <span>Vehicles and contractual services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">🧹</span>
                      <span>Maintenance and housekeeping services</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-3 text-center lg:text-left items-center">
                    <span className="text-emerald-400 mr-2">💰</span>
                    Procurement Volume
                  </h3>
                  <div className="space-y-2 text-gray-200 lg:text-base text-sm">
                    <div className="flex items-center">
                      <span className="text-emerald-400 mr-2">₹</span>
                      <span>70,000 crore target in 2020</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-emerald-400 mr-2">📈</span>
                      <span>₹5.4 lakh crore GMV (2024-25)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-emerald-400 mr-2">📊</span>
                      <span>₹13.60 lakh crore (May 2025)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-emerald-400 mr-2">📦</span>
                      <span>2.86 crore orders processed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Transparency & Efficiency</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Paperless, cashless, and time-bound system with e-bidding and reverse auctions</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💳</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Online Payment Integration</h4>
                    <p className="text-gray-200 lg:text-base text-sm">PFMS and SBMOPS integration for seamless payments</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏢</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Vendor Inclusion</h4>
                    <p className="text-gray-200 lg:text-base text-sm">MSMEs, startups, and women entrepreneurs through SWAYATT and Womaniya</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Custom Bids & BOQs</h4>
                    <p className="text-gray-200 lg:text-base text-sm">User-friendly dashboards for monitoring supplies and payments</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔗</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">IREPS Integration</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Specialized railway procurement with QR-based gate entry systems</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🌱</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Sustainability Focus</h4>
                    <p className="text-gray-200 lg:text-base text-sm">Green products and Net Zero Carbon Emission alignment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact & Achievements Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              Impact & Achievements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">₹5.4L</div>
                <div className="text-amber-200 text-sm">GMV (2024-25)</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">₹13.6L</div>
                <div className="text-green-200 text-sm">GMV (May 2025)</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">2.86Cr</div>
                <div className="text-blue-200 text-sm">Orders Processed</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-white mb-2">₹3.02L</div>
                <div className="text-purple-200 text-sm">Railway Budget</div>
              </div>
            </div>
          </div>

          {/* Policy & Budget Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Policy & Budget Support
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-3 text-center lg:text-left items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Regulatory Framework
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-indigo-400 mr-3 mt-1">📋</span>
                      <div>
                        <h4 className="text-white font-semibold">Rule 149 GFR 2017</h4>
                        <p className="text-gray-200 text-sm">Mandates government agencies to procure through GeM</p>
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-indigo-400 mr-3 mt-1">💰</span>
                      <div>
                        <h4 className="text-white font-semibold">Budget Allocation</h4>
                        <p className="text-gray-200 text-sm">₹3.02 lakh crore to Ministry of Railways</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-blue-400 mr-3 mt-1">💻</span>
                      <div>
                        <h4 className="text-white font-semibold">Digitalization</h4>
                        <p className="text-gray-200 text-sm">CRIS-led initiatives for IT systems</p>
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                      <span className="text-blue-400 mr-3 mt-1">🔗</span>
                      <div>
                        <h4 className="text-white font-semibold">Integration</h4>
                        <p className="text-gray-200 text-sm">IREPS and GeM seamless connectivity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges & Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-3 text-center lg:text-left items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Challenges
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1">⚙️</span>
                    <div>
                      <h4 className="text-white font-semibold">Specialized Procurement</h4>
                      <p className="text-gray-200 text-sm">Complex railway equipment requires IREPS</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1">👥</span>
                    <div>
                      <h4 className="text-white font-semibold">Vendor Awareness</h4>
                      <p className="text-gray-200 text-sm">Digital interface navigation challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1">🔄</span>
                    <div>
                      <h4 className="text-white font-semibold">Transition Period</h4>
                      <p className="text-gray-200 text-sm">Ongoing integration with traditional methods</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex lg:flex-row flex-col gap-3 text-center lg:text-left items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Solutions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1">🔧</span>
                    <div>
                      <h4 className="text-white font-semibold">Dual Platform Approach</h4>
                      <p className="text-gray-200 text-sm">GeM for common goods, IREPS for specialized</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1">📱</span>
                    <div>
                      <h4 className="text-white font-semibold">GeM SAHAY</h4>
                      <p className="text-gray-200 text-sm">Loan app for vendor support</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1">🎯</span>
                    <div>
                      <h4 className="text-white font-semibold">Policy Reforms</h4>
                      <p className="text-gray-200 text-sm">Ongoing efforts for greater inclusivity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Developments Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Recent Developments
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <h3 className="text-white font-bold mb-2">GeM Milestones</h3>
                  <p className="text-gray-200 text-sm">₹13.60 lakh crore GMV with 2.86 crore orders</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-2xl mb-2">🚄</div>
                  <h3 className="text-white font-bold mb-2">Railway Initiatives</h3>
                  <p className="text-gray-200 text-sm">QR-based gate entry and online bill submissions</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-4 lg:px-4 px-2 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-2xl mb-2">📋</div>
                  <h3 className="text-white font-bold mb-2">Policy Updates</h3>
                  <p className="text-gray-200 text-sm">Focus on local vendor participation and transparency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-green-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Conclusion
            </h2>
            <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-xl py-6 px-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                The integration of GeM with Indian Railways has revolutionized its procurement process by enhancing transparency, 
                reducing costs, and promoting local vendors. While GeM handles common goods and services, IREPS remains crucial 
                for specialized railway procurement. This dual approach, supported by digital tools and policy reforms, aligns 
                with Indian Railways&apos; goals of efficiency, sustainability, and self-reliance.
              </p>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <span className="text-emerald-400 mr-3">🌐</span>
                  <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-emerald-300 transition-colors">
                    Visit GeM Portal
                  </a>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <span className="text-green-400 mr-3">🚄</span>
                  <a href="https://ireps.gov.in" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-green-300 transition-colors">
                    Railway Procurement
                  </a>
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

export default GEM