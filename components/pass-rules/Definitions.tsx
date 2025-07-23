"use client"
import React from 'react'

const Definitions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              IMPORTANT DEFINITIONS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Essential terms and definitions that form the foundation of railway pass rules and regulations
            </p>
          </div>

          {/* Definitions Container */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-white/20">
            <div className="space-y-6">
              {/* Definition a - Attendant */}
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start  lg:text-left">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-3 border-b border-blue-400/30 pb-2">
                      a) &apos;Attendant&apos; means
                    </h3>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      a person exclusively employed on salary in the personal service of a railway servant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Definition b - Adopted Child */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-3 border-b border-green-400/30 pb-2">
                      b) &apos;adopted child&apos; means
                    </h3>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      a child for whom there is satisfactory proof of adoption irrespective of the fact whether such adoption is permissible or not under the personal law governing the railway servant concerned.
                    </p>
                  </div>
                </div>
              </div>

              {/* Definition c - Dependent Relative */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-4 border-b border-purple-400/30 pb-2">
                      c) &apos;Dependent relative&apos;
                    </h3>
                    <ul className="space-y-1 text-gray-200">
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-purple-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Mother including a divorced mother</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-purple-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Unmarried or widowed sister</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-purple-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Brother/step-brother under twenty one years of age</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-purple-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Invalid brother of any age</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-purple-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Brother who has attained the age of twenty one years and is a bonafide student</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-purple-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Legally divorced sister</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-purple-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Widow mother-in-law in case of widows appointed on compassionate grounds, whether her father is alive or not.</span>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        <strong className="text-blue-300">Provided that</strong> a person shall not be considered to be a dependent relative if his/her income from all sources including pension, dearness relief, etc. exceeds 15% of pay per month of the Railway servant or the amount arrived at by adding minimum Pension/Family Pension of Rs 9000/- (excluding the element of additional pension to old pensioners) and the dearness relief admissible to the pensioners/family pensioners on pension rounded off to the nearest ten rupee figure, whichever is more. (Revised limit for dependency w.e.f 01.01.2016 RBE 132/2016 Dated 24/11/2016)
                      </p>
                    </div>

                    <div className="mt-4 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-400/30 backdrop-blur-sm">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        <strong className="text-green-300">Provided further that</strong> dependent relatives may be included in the Privilege Passes/PT0s given to the railway servants in cases where father is missing for a period of at least 7 years Passes/PT0s can also be given to the sisters in similar circumstances. However, an affidavit as to the period since when the person is missing, duly attested by a Magistrate is necessary.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Definition c - Family */}
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start  lg:text-left">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-4 border-b border-orange-400/30 pb-2">
                      c) &apos;Family&apos; includes
                    </h3>
                    <ul className="space-y-3 text-gray-200">
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-orange-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Spouse of a railway servant whether earning or not;</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-orange-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Son or sons who have not attained the age of 21 years and are wholly dependent on the railway servant;</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-orange-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Son or sons of the age of 21 and above who are bonafide student</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-orange-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Unmarried daughters of any age whether earning or not;</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-orange-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Widowed daughters provided they are dependent on the railway servant;</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-orange-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Legally divorced daughter who is dependent on the railway servant;</span>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl border border-yellow-400/30 backdrop-blur-sm">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        <strong className="text-yellow-300">Note:</strong> For the purpose of issue of Special Pass on medical grounds under Schedule-VII, the term &quot;family&quot; and &quot;dependant relatives&quot; shall be as defined in Paras 601(5) and 601(6) respectively of IRMM,2000.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Definition d - Pay */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white text-center mb-4 border-b border-red-400/30 pb-2">
                      d) &apos;Pay&apos; means
                    </h3>
                    <ul className="space-y-3 text-gray-200">
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-red-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Basic pay; (Pay in PAY MATRIX LEVEL)</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-red-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">In the case of Running Staff, basic pay plus 30% thereof;</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-red-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">➢</span>
                        <span className="lg:text-lg text-base">Any other pay which may be specially classified as pay by the President.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Definition e - Set */}
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white mb-4 border-b border-teal-400/30 pb-2">
                      e) &quot;Set&quot; means
                    </h3>
                    <p className="text-gray-200 leading-relaxed mb-4 lg:text-lg text-base">
                      one Pass or P.T.0 for outward and return journeys;
                    </p>
                    <h4 className="font-semibold text-white mb-2 lg:text-lg text-base">
                      &quot;Half-set&quot; means
                    </h4>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      a Pass or P.T.0 issued from one station to another
                    </p>
                  </div>
                </div>
              </div>

              {/* Definition f - Year */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full lg:mr-4 mb-4 lg:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg font-bold text-white mb-3 border-b border-indigo-400/30 pb-2">
                      f) &apos;year&apos; means
                    </h3>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">a Calendar Year.</p>
                  </div>
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

export default Definitions