"use client"
import React from 'react'

const Mission3000MT = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              MISSION 3000 MT
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              An ambitious initiative by Indian Railways to increase freight loading capacity to 3,000 million tonnes by FY27
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-6 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Mission Overview
            </h2>
            <p className="text-gray-200 leading-relaxed text-center">
              Mission 3000 MT is an ambitious initiative by Indian Railways to increase its freight loading capacity to 3,000 million tonnes (MT) by the financial year 2026-27 (FY27), up from 1,418 MT in FY22, with a long-term goal of achieving a 45-50% share in India&apos;s freight transport market by 2030. The plan aims to reverse the decline in Indian Railways&apos; freight market share, which dropped from 85% in 1950-51 to around 27-30% in 2022, largely due to competition from road transport.
            </p>
          </div>

          {/* Key Objectives Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Objectives & Strategies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4 border border-blue-400/30">
                  <h3 className="text-lg font-bold text-blue-300 mb-3 flex flex-col gap-3 text-center items-center">
                    <span className="mr-2">📈</span>
                    Freight Volume Growth
                  </h3>
                  <ul className="space-y-2 text-gray-200 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Achieve 3,000 MT by FY27 and 3,600 MT by 2030-31
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      CAGR of 16.2% compared to historical 4.1%
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Increase market share to 45% by 2030
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-4 border border-indigo-400/30">
                  <h3 className="text-lg font-bold text-indigo-300 mb-3 flex flex-col gap-3 text-center items-center">
                    <span className="mr-2">🏗️</span>
                    Infrastructure Enhancements
                  </h3>
                  <ul className="space-y-2 text-gray-200 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Over 3,000 km of Dedicated Freight Corridors
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Add 155,000 wagons and 7,000 electric locomotives
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      ₹8.5 lakh crore capital investment
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 border border-purple-400/30">
                  <h3 className="text-lg font-bold text-purple-300 mb-3 flex flex-col gap-3 text-center items-center">
                    <span className="mr-2">⚡</span>
                    Operational Improvements
                  </h3>
                  <ul className="space-y-2 text-gray-200 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Increase average freight train speed to 50 km/h
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Reduce cargo tariffs by up to 30%
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Enhance containerization targeting 32% market share
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-pink-600/20 to-red-600/20 rounded-lg p-4 border border-pink-400/30">
                  <h3 className="text-lg font-bold text-pink-300 mb-3 flex flex-col gap-3 text-center items-center">
                    <span className="mr-2">🎯</span>
                    Policy Interventions
                  </h3>
                  <ul className="space-y-2 text-gray-200 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Dynamic pricing and assured transit times
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Customer-centric services
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Overhaul marketing and revenue policies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges & Hurdles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📉</span>
                  <div>
                    <h4 className="text-red-300 font-semibold mb-1">Historical Decline</h4>
                    <p className="text-gray-200 text-sm">Freight share fell from 85% in 1951 to less than 30% in 2022 due to road transport competition</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                  <div>
                    <h4 className="text-red-300 font-semibold mb-1">Dependence on Bulk Commodities</h4>
                    <p className="text-gray-200 text-sm">Heavy reliance on coal, iron ore, steel, and cement risks long-term profitability</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🎯</span>
                  <div>
                    <h4 className="text-red-300 font-semibold mb-1">Ambitious Targets</h4>
                    <p className="text-gray-200 text-sm">Achieving 16.2% CAGR is challenging with current modest 2.9% growth projections</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">💰</span>
                  <div>
                    <h4 className="text-red-300 font-semibold mb-1">Funding Needs</h4>
                    <p className="text-gray-200 text-sm">Massive ₹8.5 lakh crore investment requires sustained budgetary support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress & Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Progress Section */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 flex flex-col gap-3 text-center items-center">
                <span className="mr-2">📊</span>
                Progress & Outlook
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2 mt-1">✓</span>
                  Railway Board has accepted the Mission 3000 MT report
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2 mt-1">✓</span>
                  Implementation of recommendations underway
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2 mt-1">✓</span>
                  FY25 projected to surpass 1,600 MT
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2 mt-1">✓</span>
                  DFCs and network upgrades in progress
                </li>
              </ul>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 flex flex-col gap-3 text-center items-center">
                <span className="mr-2">🌱</span>
                Environmental & Economic Benefits
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-200 mr-2 mt-1">✓</span>
                  Lower CO2 emissions compared to road transport
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2 mt-1">✓</span>
                  Reduce logistics costs from 14% to 11% of GDP
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2 mt-1">✓</span>
                  Save approximately ₹15 lakh crore annually by 2030
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2 mt-1">✓</span>
                  50-50 rail-road share could save $180 billion annually
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Milestones
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 lg:text-3xl text-xl font-bold p-4 rounded-full lg:w-24 lg:h-24 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  3000 MT
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Target by FY27</h3>
                <p className="text-gray-200 text-sm">Freight loading capacity</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 lg:text-3xl text-xl font-bold p-4 rounded-full lg:w-24 lg:h-24 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-indigo-500/50 transition-shadow">
                  45%
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Market Share</h3>
                <p className="text-gray-200 text-sm">Target by 2030</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 lg:text-3xl text-xl font-bold p-4 rounded-full lg:w-24 lg:h-24 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                  50 km/h
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Average Speed</h3>
                <p className="text-gray-200 text-sm">Freight train target</p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-6 border border-blue-400/30">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Conclusion</h2>
            <p className="text-gray-200 leading-relaxed text-center">
              Mission 3000 MT is a bold but challenging plan to revitalize Indian Railways&apos; freight sector. While infrastructure projects and policy reforms are in progress, achieving the target requires overcoming significant operational, financial, and competitive hurdles. Strategic interventions, innovative solutions, and sustained investment will be critical to regaining market share and meeting economic and environmental goals.
            </p>
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

export default Mission3000MT