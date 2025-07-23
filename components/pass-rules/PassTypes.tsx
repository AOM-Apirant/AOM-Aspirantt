"use client"
import React from 'react'

const PassTypes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
          PASS TYPES
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to different types of railway passes available for employees and their families
            </p>
          </div>

          {/* Pass Types Container */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-white/20">
            <div className="space-y-6">
              
              {/* Privilege Pass */}
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-3 border-b border-purple-400/30 pb-2">
                      1. Privilege Pass
                    </h3>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      Privilege Pass is issued to railway servants for personal travel. It allows the employee and their family members to travel on Indian Railways at concessional rates or free of cost as per their entitlement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Duty Pass */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-3 border-b border-indigo-400/30 pb-2">
                      2. Duty Pass
                    </h3>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      Duty Pass is issued for official travel purposes. It is used when railway servants need to travel for work-related purposes such as training, meetings, inspections, or other official duties.
                    </p>
                  </div>
                </div>
          </div>

              {/* Post-Retirement Pass */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-3 border-b border-blue-400/30 pb-2">
                      3. Post-Retirement Pass
                    </h3>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      Post-Retirement Pass is issued to retired railway employees. It allows them to continue traveling on Indian Railways with certain benefits and restrictions as per retirement rules.
                    </p>
                  </div>
                </div>
          </div>

              {/* Widow Pass */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-3 border-b border-cyan-400/30 pb-2">
                      4. Widow Pass
                    </h3>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      Widow Pass is issued to widows of deceased railway employees. It provides travel benefits to help them with their transportation needs after the death of their railway employee spouse.
                    </p>
                  </div>
                </div>
          </div>

              {/* School Pass */}
              <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-3 border-b border-teal-400/30 pb-2">
                      5. School Pass
                    </h3>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      School Pass is issued for children of railway employees to travel to and from their educational institutions. It helps with the transportation needs of railway employee families.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pass Type Guidelines */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-4 border-b border-emerald-400/30 pb-2">
                      Pass Type Guidelines
                    </h3>
                    <ul className="space-y-2 text-gray-200">
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">✓</span>
                        <span className="lg:text-lg text-base">Each pass type has specific eligibility criteria</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">✓</span>
                        <span className="lg:text-lg text-base">Pass types determine travel entitlements and benefits</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">✓</span>
                        <span className="lg:text-lg text-base">Different pass types have different validity periods</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">✓</span>
                        <span className="lg:text-lg text-base">Pass types may have different family member inclusion rules</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">✓</span>
                        <span className="lg:text-lg text-base">Some pass types are for specific purposes only</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {/* Eligibility Benefits */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">🎯</span>
                Eligibility Criteria
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Service duration requirements
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Employment status verification
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Family member definitions
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Specific purpose validation
                </li>
              </ul>
            </div>

            {/* Travel Benefits */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">🚄</span>
                Travel Entitlements
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Concessional fare rates
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Free travel benefits
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Class of travel options
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Route restrictions
                </li>
              </ul>
            </div>

            {/* Validity Benefits */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">⏰</span>
                Validity Periods
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Annual entitlement limits
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Journey completion time
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Extension possibilities
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Renewal requirements
                </li>
            </ul>
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

export default PassTypes