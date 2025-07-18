"use client"
import React from 'react'

const Punctuality = () => {
  const trainCategories = [
    {
      title: "M/Express trains",
      description: "Vandebharat, Rajdhani, Duronto, Shatabdi, Garib Rath, Jan-Shatabdi, Superfast, Mail/Express & Suvidha trains",
      icon: "🚄",
      color: "from-blue-50 to-blue-100 border-blue-200"
    },
    {
      title: "Passenger trains", 
      description: "DEMU, MEMU, Holiday Specials, Conventional rakes",
      icon: "🚂",
      color: "from-green-50 to-green-100 border-green-200"
    },
    {
      title: "Sub-urban trains",
      description: "Local and suburban train services",
      icon: "🚇",
      color: "from-purple-50 to-purple-100 border-purple-200"
    }
  ];

  const punctualityNorms = [
    {
      type: "Intra zonal & Terminating trains",
      condition: "arriving more than 15 minutes late at destination",
      time: "15 minutes",
      color: "bg-red-100 text-red-800 border-red-200"
    },
    {
      type: "Originating & Passing through trains", 
      condition: "handing over by more than 3 minutes at interchange point",
      time: "3 minutes",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200"
    },
    {
      type: "Sub-urban trains",
      condition: "arriving more than 5 minutes late at destination",
      time: "5 minutes",
      color: "bg-blue-100 text-blue-800 border-blue-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              TRAIN PUNCTUALITY
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to understanding train punctuality monitoring, categories, and calculation methods.
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Introduction
            </h2>
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 shadow-lg flex-shrink-0">
                    1
                  </span>
                  <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                    Punctuality in running of the passenger carrying trains is one of the significant
                    indices of the Railway efficiency.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 shadow-lg flex-shrink-0">
                    2
                  </span>
                  <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                    It is monitored at various levels of Railway operations and management.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 shadow-lg flex-shrink-0">
                    3
                  </span>
                  <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                    Any serious dislocation of passenger trains also affects goods train running and corridor blocks.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 shadow-lg flex-shrink-0">
                    4
                  </span>
                  <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                    Thus punctuality is not only important for passenger satisfaction, but also have significant bearing on the freight operations maintenance & safety.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring System Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Monitoring System
            </h2>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6 mb-6">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 shadow-lg flex-shrink-0">
                    1
                  </span>
                  <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                    Punctuality statistics on Division / Railway is monitored on daily basis for improvement through Punctuality Analysis Module (PAM) of Integrated Coaching Management System (ICMS).
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 shadow-lg flex-shrink-0">
                    2
                  </span>
                  <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                    Based on ICMS data, inputs of which are made at different levels detailed analysis of bad runners, bad sections are done and action plan are drawn in order to improve punctuality.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 shadow-lg flex-shrink-0">
                    3
                  </span>
                  <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                    Integration of ICMS to COA ensures real time status of the train services.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-green-300/50 hover:bg-white/20 transition-all duration-300">
                <span className="text-2xl mr-3">📊</span>
                <span className="text-lg font-semibold text-white">PAM - Punctuality Analysis Module</span>
              </div>
            </div>
          </div>

          {/* Train Categories Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Train Categories
            </h2>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base mb-8">
                To monitor the Passenger carrying trains effectively according to their importance,
                relevance and stock they are grouped into following categories.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trainCategories.map((category, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                    <div className="text-center mb-4">
                      <span className="text-5xl mb-4 block">{category.icon}</span>
                      <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed text-center">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Punctuality Norms Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Punctuality Norms
            </h2>
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base mb-8">
                Train arriving late is considered to be &ldquo;Lost Train&rdquo; based on the following norms.
              </p>
              <div className="space-y-6">
                {punctualityNorms.map((norm, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex items-center mb-4 lg:mb-0">
                        <span className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shadow-lg">
                          {index + 1}
                        </span>
                        <h3 className="lg:text-xl text-base font-semibold text-white">{norm.type}</h3>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-base font-bold border-1 ${norm.color} bg-white/20 backdrop-blur-sm`}>
                        {norm.time}
                      </span>
                    </div>
                    <p className="text-gray-200 lg:ml-14 ml-0 lg:text-lg text-sm font-light">{norm.condition}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Punctuality Formula Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 border border-white/20">
            <h2 className="lg:text-4xl text-xl font-bold text-white mb-12 text-center">Punctuality Calculation Formula</h2>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-orange-400/30 hover:shadow-2xl transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center">
                <div className="lg:text-4xl text-2xl font-bold text-white mb-6">
                  % Punctuality = 
                </div>
                <div className="lg:text-2xl text-base text-gray-200 mb-6">
                  (Total No. of trains - No. of trains lost Punctuality) × 100
                </div>
                <div className="lg:text-3xl text-2xl font-bold text-white">
                  (Total No. of trains)
                </div>
              </div>
              <div className="mt-8 text-center">
                <span className="lg:text-xl text-base text-gray-200 font-semibold flex items-center justify-center">
                  <span className="lg:text-3xl text-2xl mr-3">📈</span>
                  This formula helps calculate the overall punctuality percentage of train services
                </span>
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

export default Punctuality