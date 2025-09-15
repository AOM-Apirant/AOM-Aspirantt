"use client"
import React from 'react'

const AMAppendixPage149 = () => {
  const disasterTypes = [
    'Railway Accidents',
    'Natural Disasters',
    'Terrorist Attacks',
    'Industrial Accidents',
    'Health Emergencies'
  ]

  const managementPrinciples = [
    'Prevention and Mitigation',
    'Preparedness and Response',
    'Recovery and Rehabilitation',
    'Capacity Building'
  ]

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>

            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">APPENDIX – V</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              DISASTER MANAGEMENT FRAMEWORK
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Disaster Types */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-red-400/20 lg:p-6 p-3">
                <div className="flex items-center flex-col gap-4 mb-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="lg:text-2xl text-xl font-bold text-red-300">Types of Disasters</h4>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                  {disasterTypes.map((type, index) => (
                    <div key={index} className="flex items-center lg:gap-3 gap-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 font-medium">{type}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Management Principles */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl border border-green-400/20 lg:p-6 p-3">
                <div className="flex items-center flex-col gap-4 mb-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="lg:text-2xl text-xl font-bold text-green-300">Management Principles</h4>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                  {managementPrinciples.map((principle, index) => (
                    <div key={index} className="flex items-center lg:gap-3 gap-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 font-medium">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <button
                  onClick={() => window.open('/ampdfs/am-appendix-pages/AMAppendixPage149A.pdf', '_blank')}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50 font-semibold text-lg"
                >
                  📄 Open Disaster Management Document
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AMAppendixPage149
