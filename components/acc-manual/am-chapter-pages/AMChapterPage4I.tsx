"use client"
import React from 'react'

const AMChapterPage4I = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-IV
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-emerald-300 mb-4">THRESHOLD VALUE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding accident reporting thresholds and their components
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 108 - Threshold Value */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">108</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-green-400 to-emerald-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </span>
                      Threshold Value
                    </h3>
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-green-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <p className="flex items-start gap-3">
                          <span className="mt-1 text-green-400 text-xl">📊</span>
                          <span>
                            For the purpose of reporting of accident, threshold value is a minimum value beyond which the accident will be treated as having serious repercussion on the basis of loss to railway property or interruption to through traffic. It shall constitute two portions.
                          </span>
                        </p>
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-3 rounded-lg border border-yellow-400/20">
                            <p className="text-yellow-200 font-semibold mb-1 flex items-center gap-2">
                              <span className="text-yellow-400">a)</span>
                              Loss of railway property:
                            </p>
                            <p className="text-gray-200">
                              Threshold value of loss of railway property is fixed at one lakh rupees.
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-3 rounded-lg border border-blue-400/20">
                            <p className="text-blue-200 font-semibold mb-1 flex items-center gap-2">
                              <span className="text-blue-400">b)</span>
                              Interruption to through traffic:
                            </p>
                            <p className="text-gray-200">
                              Threshold value of interruption to through traffic either partial or total is where duration of interruption is equal to or more than the number of hours specified against each column below.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mt-6 border border-white/20">
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Threshold Components
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 lg:text-lg text-base">Minimum value for serious repercussion</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-yellow-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">💰</span>
                <span className="text-gray-200 lg:text-lg text-base">Property loss: ₹1 lakh threshold</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">⏱️</span>
                <span className="text-gray-200 lg:text-lg text-base">Traffic interruption: Hours specified</span>
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

export default AMChapterPage4I