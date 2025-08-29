"use client"
import React from 'react'

const AMChapterPage1E = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">DEFINITIONS AND GENERAL INSTRUCTIONS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive definitions and general instructions for railway operations and train management
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 103 - Serious Accident Definition */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">103</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-red-400 to-red-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                      Serious Accident
                    </h3>
                    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-center mb-6">
                        Accident to a train carrying passengers which is attended-
                      </div>
                      <ul className="space-y-4 text-left mx-auto max-w-3xl text-gray-200 lg:text-lg text-base leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-red-400 font-bold">a)</span>
                          <span>with loss of life, or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-red-400 font-bold">b)</span>
                          <span>with grievous hurt to a passenger or passengers in the train, or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-red-400 font-bold">c)</span>
                          <span>with damage to railway property, the value of which exceeding 2 crore, and</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-red-400 font-bold">d)</span>
                          <span>any other accident, which in the opinion of the Chief Commissioner of Railway Safety or Commissioner of Railway safety requires holding of an inquiry by the Commissioner of Railway Safety, shall be deemed to be a serious accident.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exclusions Section */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-orange-400 to-red-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      Exclusions from Serious Accident
                    </h3>
                    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-orange-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-center mb-6">
                        However, the following shall be excluded from the category of a serious Accident:
                      </div>
                      <ul className="space-y-4 text-left mx-auto max-w-4xl text-gray-200 lg:text-lg text-base leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-orange-400 font-bold">(a)</span>
                          <span>Cases of trespassers run over and injured or killed through their own carelessness, or of passengers injured or killed through their own carelessness.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-orange-400 font-bold">(b)</span>
                          <span>Cases involving railway servants or holding valid passes/tickets, or otherwise who are killed or grievously injured while travelling outside the rolling stock of a passenger train such as on foot board, or roof or buffer but excluding the inside of vestibules between coaches, or run over at a level crossing or elsewhere on the railway track by a train, and</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-orange-400 font-bold">(c)</span>
                          <span>Level crossing accident where no passenger or railway servant is killed or grievously hurt, unless the Chief Commissioner of Railway Safety or Commissioner of Railway safety is of the opinion that the accident requires the holding of an inquiry by the Commissioner of Railway Safety.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Definition Card */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group border border-red-400/20">
              <h3 className="text-2xl font-bold mb-6 flex flex-col gap-3 items-center justify-center">
                <span className="bg-white/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Serious Accident Definition
              </h3>
              <p className="text-red-100 leading-relaxed text-center">
                Criteria for classifying accidents as serious in passenger trains
              </p>
            </div>

            {/* Exclusions Card */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group border border-orange-400/20">
              <h3 className="text-2xl font-bold mb-6 flex flex-col gap-3 items-center justify-center">
                <span className="bg-white/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                Exclusion Categories
              </h3>
              <p className="text-orange-100 leading-relaxed text-center">
                Specific cases that are excluded from serious accident classification
              </p>
            </div>
          </div>

          {/* Key Points Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mt-6 border border-white/20">
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Points
            </h3>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-6">
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">💀</span>
                  <span className="text-gray-200 lg:text-lg text-base">Loss of life</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🏥</span>
                  <span className="text-gray-200 lg:text-lg text-base">Grievous hurt to passengers</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">💰</span>
                  <span className="text-gray-200 lg:text-lg text-base">Property damage over 2 crore</span>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚫</span>
                  <span className="text-gray-200 lg:text-lg text-base">Trespasser carelessness</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">👷</span>
                  <span className="text-gray-200 lg:text-lg text-base">Staff outside rolling stock</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚧</span>
                  <span className="text-gray-200 lg:text-lg text-base">Level crossing accidents</span>
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

export default AMChapterPage1E