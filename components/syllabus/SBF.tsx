"use client"
import React from 'react'

const SBF = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              STAFF BENEFIT FUND (SBF)
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              SBF is governed by provisions contained in Statutory rules i.e. chapter 8 of Indian Railway Estt. Code Volume I & other subsidiary instructions. 
              SBF scheme is functional on Indian Railways since year 1931.
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
              Fund Activities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { text: "Education: Scholarship for Higher Technical/Professional education forwards of Railway Servants", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z" },
                { text: "Scholarship for higher technical/professional education of Girl children of Railway Servants", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                { text: "Scholarship for higher technical/professional education of Male children of Railway Servants", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                { text: "Women empowerment activities", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { text: "Recreation other than sports", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { text: "Recreational facilities at Institutes and Clubs etc.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { text: "Promotion of Cultural Activities", icon: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 8h6m-6 4h6m-6 4h6" },
                { text: "Relief of distress, sickness, etc", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { text: "Sports activities", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { text: "Scouts & Guides activities", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" },
                { text: "Indigenous system of medicine including Homoeopathy", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
                { text: "Immediate relief in times of crisis arising out of flood, famines, landslide, fire or any other calamity", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" },
                { text: "Developing occupational skills of those Railway Servants who are covered under &apos;The Rights of Persons with disabilities ACT 2016&apos; and their wards", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { text: "Miscellaneous", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full p-1 lg:p-1.5 mr-2 lg:mr-3 flex-shrink-0 shadow-lg">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <p className="text-gray-200 lg:text-sm text-xs leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sources Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </span>
              Sources of Staff Benefit Fund
            </h2>
            <div className="space-y-4">
              {[
                { text: "Annual grant on the 1st of April of each financial year from the railway revenues on per capita basis based on the sanctioned strength of non-gazetted Railway servants, both permanent and temporary, as on 31st March, (Sanctioned strength of non-gazetted Railway Servants also include sanctioned strength of RPF non-gazetted staff.)", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                { text: "All receipts from fines", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" },
                { text: "50% of the expenditure incurred by the respective Railways on grant of scholarships for technical education of children of Railway servants during the preceding year", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { text: "Unpaid wages beyond three years", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" }
              ].map((source, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-lg p-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full p-1.5 lg:p-2 mr-3 lg:mr-4 flex-shrink-0 shadow-lg">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={source.icon} />
                      </svg>
                    </div>
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">{source.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Management Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Management of the Fund
            </h2>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base mb-6">
                The fund shall be managed by a Committee (i.e. CSBFC) at the headquarters of the Railway presided over by the Principal Chief Personnel Officer.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Committee Members:</h3>
                  {[
                    { text: "The Chief Personnel Officer", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                    { text: "The Chief Medical Officer", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                    { text: "The Additional Chief Engineer", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                    { text: "A Welfare Officer to be nominated by the General Manager who shall act as the Secretary of the Committee", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
                    { text: "Six members from recognised Unions, to be equally divided amongst the recognised unions", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                    { text: "One representative each from All India Scheduled Castes & Scheduled Tribes Railway Employees Association (AISC&STREA) and All India OBC Railway Employees Association (AIOBCREA)", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
                  ].map((member, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1 mr-2 lg:mr-3 flex-shrink-0 shadow-lg">
                        <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={member.icon} />
                        </svg>
                      </div>
                      <p className="text-gray-200 lg:text-sm text-xs">{member.text}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4">Key Points:</h3>
                  {[
                    { text: "Members hold office for one year unless removed by GM or resign", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                    { text: "Eligible for re-nomination or re-election", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { text: "Chairman can refer disagreements to GM for final decision", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1 mr-2 lg:mr-3 flex-shrink-0 shadow-lg">
                        <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={point.icon} />
                        </svg>
                      </div>
                      <p className="text-gray-200 lg:text-sm text-xs">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Important Rules Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Important Rules & Guidelines
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg p-1 lg:p-1.5 mr-2 lg:mr-3 shadow-lg">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  Eligibility Restrictions
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Retired Railway servants or persons dismissed/removed or outsiders cannot be nominated to the SBF Committees.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg p-1 lg:p-1.5 mr-2 lg:mr-3 shadow-lg">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  Suspension Rules
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Railway servants under suspension should not be allowed to attend the meetings of the SBF. However, there is no objection to their substitutes taking their place for the period for which sitting members remain disqualified.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg p-1 lg:p-1.5 mr-2 lg:mr-3 shadow-lg">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Meeting Attendance
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Elected representatives when attending meetings of the SBF Committees will be issued passes of the scale to which they are eligible on privilege account.
                </p>
              </div>
            </div>
          </div>

          {/* Accounts & Reporting Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Accounts & Reporting
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg p-1 lg:p-1.5 mr-2 lg:mr-3 shadow-lg">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Fund Accounts
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  The General Manager shall make such arrangements as may be necessary for keeping the accounts of the fund; and audit shall be carried out in such manner as may be prescribed.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg p-1 lg:p-1.5 mr-2 lg:mr-3 shadow-lg">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  Annual Report
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  The General Manager shall submit annually a report to the Railway Board on the working of the fund during the previous financial year. (Para 811 & 812 of IREC Vol. 1)
                </p>
              </div>
            </div>
          </div>

          {/* Download PDF Section */}
          <div className="bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl shadow-2xl py-12 px-6 border border-emerald-400/30 hover:shadow-xl transition-all duration-500">
            <div className="text-center">
              {/* Animated Icon */}
              <div className="inline-block mb-6">
                <div className="relative">
                  <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full p-4 lg:p-5 shadow-2xl animate-pulse">
                    <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  
                  
                </div>
              </div>

              {/* Title */}
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-4">
                Download Staff Benefit Fund PDF File
              </h2>
              
              {/* Description */}
              <p className="lg:text-lg text-base text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
                Get the complete Staff Benefit Fund (SBF) documentation in PDF format. 
                This comprehensive guide contains all the detailed information about SBF rules, 
                management, and procedures.
              </p>

              {/* Download Button */}
              <button 
                onClick={() => {
                  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                  const pdfUrl = "/syllabus/Staff Benefit Fund.pdf";
                  
                  if (isMobile) {
                    // For mobile devices, open PDF in new tab
                    window.open(pdfUrl, '_blank');
                  } else {
                    // For desktop, trigger download
                    const link = document.createElement('a');
                    link.href = pdfUrl;
                    link.download = "Staff_Benefit_Fund_Guide.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
                className="inline-flex items-center px-8 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold lg:text-lg text-base rounded-full shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <svg className="w-6 h-6 lg:w-7 lg:h-7 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Download & Open PDF' : 'Download PDF'}
                <svg className="w-5 h-5 lg:w-6 lg:h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              
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

export default SBF