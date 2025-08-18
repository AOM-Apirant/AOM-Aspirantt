"use client"
import React from 'react'

const NationalLogisticPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              NATIONAL LOGISTICS POLICY
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The National Logistics Policy (NLP), launched by Prime Minister Narendra Modi on September 17, 2022, 
              is a comprehensive framework aimed at enhancing the efficiency of India&apos;s logistics sector, including 
              the critical role played by Indian Railways.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
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
                  The policy seeks to address high logistics costs, inefficiencies, and infrastructure bottlenecks 
                  to make Indian goods more competitive globally while boosting economic growth and employment. 
                  Indian Railways, as a key component of the logistics ecosystem, is integral to achieving these 
                  goals through its capacity for sustainable, cost-effective, and long-distance freight transport.
                </p>
              </div>
            </div>
          </div>

          {/* Key Objectives Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Objectives of the NLP
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Reduce Logistics Costs
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  The NLP aims to lower logistics costs from 13-14% of India&apos;s GDP to 8-9%, aligning with global standards. 
                  Indian Railways, handling over 1.6 billion tonnes of freight annually, is pivotal in reducing costs.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Promote Multimodal Connectivity
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  The policy emphasizes seamless integration of rail, road, air, and waterways to optimize freight movement. 
                  Indian Railways is being developed to enhance first- and last-mile connectivity.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Enhance Competitiveness
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  By improving rail freight efficiency, the NLP aims to make Indian industries more competitive 
                  in domestic and international markets.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Sustainability
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Railways are promoted for their environmental advantages, with the government targeting an increase 
                  in rail freight share from 35-36% to 45% by 2030.
                </p>
              </div>
            </div>
          </div>

          {/* Role of Indian Railways Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Role of Indian Railways in the NLP
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  Key Initiatives
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-600/30 to-blue-700/30 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 hover:scale-105 transition-all duration-300">
                    <h4 className="text-white font-bold mb-3 text-center">Dedicated Freight Corridors (DFCs)</h4>
                    <div className="text-gray-200 text-sm space-y-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Eastern and Western DFCs</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>International standards</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Full track electrification</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-600/30 to-emerald-700/30 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
                    <h4 className="text-white font-bold mb-3 text-center">Multi-Modal Logistics Parks</h4>
                    <div className="text-gray-200 text-sm space-y-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>35 MMLPs planned</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Seamless integration</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Supply chain efficiency</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              Key Features Supporting Indian Railways
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                    Integration of Digital Systems (IDS)
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm">
                    Facilitates coordination between railways and other ministries for seamless logistics operations.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                    Unified Logistics Interface Platform (ULIP)
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm">
                    Provides real-time data exchange, enabling efficient rail freight tracking and coordination.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                    Ease of Logistics Services (E-Logs)
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm">
                    Simplifies regulatory processes for rail freight, reducing delays through online grievance redressal.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                    System Improvement Group (SIG)
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm">
                    Monitors rail-related logistics projects to ensure timely implementation and address bottlenecks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Impact on Indian Railways
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mr-3 animate-pulse"></span>
                  Increased Freight Share
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  The NLP&apos;s push for rail over road transport aims to reduce logistics costs by 25-30% for certain goods, 
                  leveraging rail&apos;s cost-effectiveness and lower environmental impact.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mr-3 animate-pulse"></span>
                  Economic Growth
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  By boosting rail freight, the NLP supports India&apos;s $5 trillion economy target by 2029, 
                  creating jobs in transportation, warehousing, and supply chain management.
                </p>
              </div>
            </div>
          </div>

          {/* Recommendations Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              Recommendations for Indian Railways
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Enhance Last-Mile Connectivity
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Prioritize dedicated freight lines and modernized goods sheds to improve rail&apos;s accessibility for smaller cargo.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Increase Rail Freight Share
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Incentivize rail over road through subsidies or tax exemptions to shift freight from roads.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Skill Development
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Invest in training programs to improve digital literacy and technical skills among rail workers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Sustainable Practices
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Promote electrification and green technologies in rail freight to align with the NLP&apos;s sustainability goals.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Conclusion
            </h2>
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base text-center leading-relaxed">
                The National Logistics Policy is a transformative step for Indian Railways, aiming to modernize infrastructure, 
                reduce costs, and increase the rail freight share to 45% by 2030. By aligning with initiatives like PM GatiShakti 
                and leveraging digital tools like ULIP, Indian Railways can enhance efficiency, sustainability, and global competitiveness. 
                However, addressing infrastructure gaps, regulatory complexities, and digital adoption challenges is crucial for the policy&apos;s success.
              </p>
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

export default NationalLogisticPolicy