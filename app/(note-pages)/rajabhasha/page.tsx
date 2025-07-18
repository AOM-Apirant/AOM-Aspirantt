"use client"
import React from 'react'

const Rajabhasha = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-block p-1 sm:p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-3 sm:mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 sm:p-3 rounded-full">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-3 sm:mb-6 animate-fade-in">
              OFFICIAL LANGUAGE ACT 1963
            </h1>
            <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold text-cyan-300 mb-2 sm:mb-4">Articles 343 to 351</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-3 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-2">
              A comprehensive guide to India&apos;s official language policy, constitutional provisions, and implementation guidelines for promoting Hindi while maintaining linguistic diversity.
            </p>
          </div>

          {/* Constitutional Chapters Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 sm:py-10 px-4 sm:px-8 mb-8 sm:mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 sm:p-4 rounded-full mr-2 sm:mr-4 shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Constitutional Chapters
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Chapter I */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Chapter I - Language of the Union
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">📜</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 343:</strong> Official language of the Union.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">🏛️</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 344:</strong> Commission and Committee of Parliament on official language.</span>
                  </div>
                </div>
              </div>

              {/* Chapter II */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Chapter II - Regional Languages
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="text-green-400 mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">•</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 345:</strong> Official language or languages of a State</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="text-green-400 mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">•</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 346:</strong> Official language for communication between States and Union.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="text-green-400 mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">•</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 347:</strong> Special provision for language spoken by section of population.</span>
                  </div>
                </div>
              </div>

              {/* Chapter III */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Chapter III - Language of Courts
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">•</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 348:</strong> Language in Supreme Court, High Courts, Acts, Bills, etc.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">•</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 349:</strong> Special procedure for language-related laws.</span>
                  </div>
                </div>
              </div>

              {/* Chapter IV */}
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Chapter IV - Special Directives
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="text-orange-400 mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">•</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 350:</strong> Language for grievance redressal.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="text-orange-400 mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">•</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 350A:</strong> Mother-tongue instruction facilities.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="text-orange-400 mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">•</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 350B:</strong> Special Officer for linguistic minorities.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300">
                    <span className="text-orange-400 mr-2 sm:mr-3 mt-1 text-base sm:text-lg group-hover:scale-110 transition-transform">•</span>
                    <span className="text-gray-200 text-sm sm:text-base"><strong>Article 351:</strong> Directive for Hindi language development.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Official Languages Rules Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 sm:py-10 px-4 sm:px-8 mb-8 sm:mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 sm:p-4 rounded-full mr-2 sm:mr-4 shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Official Languages Rules - 1976
            </h2>
            
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-emerald-400/30 mb-6 sm:mb-8">
              <p className="text-gray-200 italic text-sm sm:text-lg">
                G.S.R 1052 - In exercise of the powers conferred by section 8, read with sub-section(4) of section 3 of the Official Languages Act, 1963 (19 of 1963), the Central Government hereby makes the following rules, namely;
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Rule 1 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Rule 1 - Short title, extent and commencement
                </h4>
                <div className="space-y-2 text-gray-200 text-sm sm:text-base">
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-blue-400">⚡</span>
                    <span className="flex-1"><strong>i.</strong> These rules may be called the Official Languages (Use for Official Purposes of the Union) Rules, 1976.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-blue-400">⚡</span>
                    <span className="flex-1"><strong>ii.</strong> They shall extend to the whole of India, except the State of Tamilnadu.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-blue-400">⚡</span>
                    <span className="flex-1"><strong>iii.</strong> They shall come into force on the date of their publication in the Official Gazette.</span>
                  </div>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Rule 2 - Definitions
                </h4>
                <div className="space-y-2 text-gray-200 text-sm sm:text-base">
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-green-400">🔧</span>
                    <span className="flex-1"><strong>a.</strong> &quot;Act&quot; means the Official Languages Act, 1963 (19 of 1963):</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-green-400">🏢</span>
                    <span className="flex-1"><strong>b.</strong> &quot;Central Government Office&quot; includes Ministries, Departments, offices, Commissions, Committees, Tribunals, corporations or companies owned or controlled by Central Government;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-green-400">👤</span>
                    <span className="flex-1"><strong>c.</strong> &quot;Employee&quot; means any person employed in a Central Government office;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-green-400">📋</span>
                    <span className="flex-1"><strong>d.</strong> &quot;Notified Office&quot; means an office notified under sub-rule (4) of rule 10;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Classification */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Regional Classification</h3>
              <div className="grid md:grid-cols-3 gap-3 sm:gap-4">
                {/* Region A */}
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3">🟢A</span>
                    Region A (K Kshetra)
                  </h4>
                  <p className="text-gray-200 text-xs sm:text-sm">Bihar, Haryana, Himachal Pradesh, Rajasthan, Madhya Pradesh, Uttar Pradesh, Delhi, Chhattisgarh, Jharkhand, Uttarakhand and Andaman and Nicobar Islands</p>
                </div>

                {/* Region B */}
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3">B</span>
                    Region B (Kha Kshetra)
                  </h4>
                  <p className="text-gray-200 text-xs sm:text-sm">Gujarat, Maharashtra, Punjab and Union Territory of Chandigarh</p>
                </div>

                {/* Region C */}
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3">C</span>
                    Region C (Ga Kshetra)
                  </h4>
                  <p className="text-gray-200 text-xs sm:text-sm">All other states and UTs: J&K, Assam, Nagaland, Manipur, Mizoram, Tripura, Arunachal Pradesh, Meghalaya, Sikkim, Andhra Pradesh, Tamil Nadu, Karnataka, Kerala, Goa, Daman and Diu, Lakshadweep, Pondicherry</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive Guide Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 sm:py-10 px-4 sm:px-8 mb-8 sm:mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 sm:p-4 rounded-full mr-2 sm:mr-4 shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Complete Guide to Rajbhasha
            </h2>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Definition & Constitutional Basis */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Definition & Constitutional Basis
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-purple-300 mb-1 sm:mb-2">Rajbhasha Definition</h4>
                    <p className="text-gray-200 text-xs sm:text-sm">Official Language (Raj Bhasha) means the language to be used for official transaction. According to constitutional provisions Hindi in Devanagari script is the official language and English is an associate language.</p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-purple-300 mb-1 sm:mb-2">Article 343(1) Provisions</h4>
                    <div className="space-y-1 text-gray-200 text-xs sm:text-sm">
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-purple-400">📜</span>
                        <span className="flex-1">Hindi in Devanagari script is the Official Language</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-purple-400">🔢</span>
                        <span className="flex-1">International form of Indian Numerals shall be used</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-purple-400">📅</span>
                        <span className="flex-1">English shall be used for 15 years from 26.01.1950</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-purple-400">⚖️</span>
                        <span className="flex-1">President may order for use of Hindi and Devanagari numerals</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Language Act 1963 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Official Language Act 1963
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4">As per Article 343(1) of the constitution of India, the Official language of the Union shall be in Hindi in Devanagari script. Article 343(2) empowers the President of India to authorize the use of the Hindi language in addition to the English language.</p>
                
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-1 sm:mb-2">Key Provisions:</h4>
                  <div className="space-y-1 text-gray-200 text-xs sm:text-sm">
                    <div className="flex items-start">
                      <span className="shrink-0 mr-2 mt-1 text-blue-400">🔄</span>
                      <span className="flex-1">Continuance of English language in addition to Hindi</span>
                    </div>
                    <div className="flex items-start">
                      <span className="shrink-0 mr-2 mt-1 text-blue-400">👥</span>
                      <span className="flex-1">Formation of committee on official language</span>
                    </div>
                    <div className="flex items-start">
                      <span className="shrink-0 mr-2 mt-1 text-blue-400">📚</span>
                      <span className="flex-1">Authorisation of Hindi translation of Acts</span>
                    </div>
                    <div className="flex items-start">
                      <span className="shrink-0 mr-2 mt-1 text-blue-400">⚖️</span>
                      <span className="flex-1">Optional use of Hindi in High Court judgments</span>
                    </div>
                    <div className="flex items-start">
                      <span className="shrink-0 mr-2 mt-1 text-blue-400">📋</span>
                      <span className="flex-1">Central Government to make rules</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                          {/* Section 3(3) Requirements */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Section 3(3) - Bilingual Use Requirements
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4">Section 3(3) of the Act is about the bilingual use in important places. According to this section, the use of Hindi and English both is compulsory. Hindi should be bold and used before or above English.</p>
                
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-yellow-300 mb-1 sm:mb-2">Documents under Section 3(3):</h4>
                                  <div className="space-y-1 text-gray-200 text-xs sm:text-sm">
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-yellow-400">📄</span>
                    <span className="flex-1">Resolutions, general orders, rules, notifications, administrative and other reports or press communiqués</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-yellow-400">📊</span>
                    <span className="flex-1">Administrative and other reports and official papers laid before Parliament</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-yellow-400">📋</span>
                    <span className="flex-1">Contracts and agreements executed and licenses, permits, notices and forms of tender</span>
                  </div>
                </div>
                </div>
              </div>
          </div>

          {/* Monetary Benefits & Incentives Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 sm:py-10 px-4 sm:px-8 mb-8 sm:mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 p-2 sm:p-4 rounded-full mr-2 sm:mr-4 shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </span>
              Monetary Benefits & Incentives
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Personal Pay Benefits */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Personal Pay Benefits
                </h4>
                <p className="text-gray-200 text-sm mb-3">Benefit of personal Pay equal to the amount of one Increment for 12 months for:</p>
                <ul className="space-y-1 text-gray-200 text-sm">
                  <li className="flex items-start"><span className="shrink-0 mr-2 mt-1">💸</span><span className="flex-1">All non-gazetted staff for passing Hindi PRAGYA examination</span></li>
                  <li className="flex items-start"><span className="shrink-0 mr-2 mt-1">📝</span><span className="flex-1">Non-gazetted officials for &apos;PRAVEEN&apos; or &apos;PRABODH&apos;</span></li>
                  <li className="flex items-start"><span className="shrink-0 mr-2 mt-1">🎓</span><span className="flex-1">All gazetted officers for &apos;PRAVEEN&apos; or &apos;PRAGYA&apos;</span></li>
                  <li className="flex items-start"><span className="shrink-0 mr-2 mt-1">🏅</span><span className="flex-1">Employees passing Hindi examination equivalent to Metric</span></li>
                  <li className="flex items-start"><span className="shrink-0 mr-2 mt-1">⌨️</span><span className="flex-1">All non-gazetted employees on passing Hindi Typing</span></li>
                </ul>
              </div>

              {/* Cash Awards */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Cash Awards
                </h4>
                <div className="space-y-3">
                  <div className="border-b border-blue-400/30 pb-2">
                    <h5 className="font-semibold text-blue-300 mb-1">Pragya Examination</h5>
                    <div className="space-y-1 text-gray-200 text-sm">
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-blue-400">🥇</span>
                        <span className="flex-1">70% or more: Rs. 2400/-</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-blue-400">🥈</span>
                        <span className="flex-1">60% or more: Rs. 1600/-</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-blue-400">🥉</span>
                        <span className="flex-1">55% or more: Rs. 800/-</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-blue-400/30 pb-2">
                    <h5 className="font-semibold text-blue-300 mb-1">Praveen Examination</h5>
                    <div className="space-y-1 text-gray-200 text-sm">
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-blue-400">🥇</span>
                        <span className="flex-1">70% or more: Rs. 1800/-</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-blue-400">🥈</span>
                        <span className="flex-1">60% or more: Rs. 1200/-</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-blue-400">🥉</span>
                        <span className="flex-1">55% or more: Rs. 600/-</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-300 mb-1">Prabodh Examination</h5>
                    <div className="space-y-1 text-gray-200 text-sm">
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-blue-400">🥇</span>
                        <span className="flex-1">70% or more: Rs. 1600/-</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-blue-400">🥈</span>
                        <span className="flex-1">60% or more: Rs. 800/-</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mr-2 mt-1 text-blue-400">🥉</span>
                        <span className="flex-1">55% or more: Rs. 400/-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Incentives */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h5 className="font-semibold text-purple-300 mb-2">Essay & Speech Competitions</h5>
                <div className="space-y-1 text-gray-200 text-sm">
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-purple-400">🏆</span>
                    <span className="flex-1">1st Prize: Rs. 1200/-</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-purple-400">🥈</span>
                    <span className="flex-1">2nd Prize: Rs. 1000/-</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-purple-400">🥉</span>
                    <span className="flex-1">3rd Prize: Rs. 900/-</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-purple-400">🎁</span>
                    <span className="flex-1">Consolation: Rs. 250/- (Each)</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h5 className="font-semibold text-indigo-300 mb-2">Noting & Drafting Competition</h5>
                <div className="space-y-1 text-gray-200 text-sm">
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-indigo-400">🏆</span>
                    <span className="flex-1">All India 1st Prize: Rs. 3000/-</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-indigo-400">🥈</span>
                    <span className="flex-1">All India 2nd Prize: Rs. 2500/-</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-indigo-400">🥉</span>
                    <span className="flex-1">All India 3rd Prize: Rs. 2000/-</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-indigo-400">🎁</span>
                    <span className="flex-1">Consolation: Rs. 1500/- (Each)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Guidelines Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              Implementation Guidelines
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Administrative Responsibilities
                </h4>
                <div className="space-y-2 text-gray-200 text-sm">
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">✅</span>
                    <span className="flex-1">Ensure constitutional provisions compliance</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">🎯</span>
                    <span className="flex-1">Implement annual programme targets</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">📝</span>
                    <span className="flex-1">Maximum use of Hindi in correspondences</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">📋</span>
                    <span className="flex-1">Implementation of 3(3) Rules</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">🎓</span>
                    <span className="flex-1">Organize Hindi classes for employees</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">🏆</span>
                    <span className="flex-1">Implement all incentive schemes</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Operational Activities
                </h4>
                <div className="space-y-2 text-gray-200 text-sm">
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">✍️</span>
                    <span className="flex-1">Use Hindi in noting & drafting</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">🎉</span>
                    <span className="flex-1">Observe Hindi Divas/Week/Cultural Programmes</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">🔧</span>
                    <span className="flex-1">Conduct Hindi workshops</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">👥</span>
                    <span className="flex-1">Form Official Language committees</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">🔍</span>
                    <span className="flex-1">Inspect bilingual use in offices</span>
                  </div>
                  <div className="flex items-start">
                    <span className="shrink-0 mr-2 mt-1 text-teal-400">📍</span>
                    <span className="flex-1">Devise effective checkpoints</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes Section */}
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-8 border border-yellow-400/30">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Important Notes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-gray-200">
                <div className="flex items-start">
                  <span className="shrink-0 text-yellow-400 mr-3 mt-1">⚠️</span>
                  <span className="flex-1">These rules apply as per Official Language Rules 1976</span>
                </div>
                <div className="flex items-start">
                  <span className="shrink-0 text-yellow-400 mr-3 mt-1">📋</span>
                  <span className="flex-1">The language policy aims to promote Hindi while maintaining English where necessary</span>
                </div>
                <div className="flex items-start">
                  <span className="shrink-0 text-yellow-400 mr-3 mt-1">🗺️</span>
                  <span className="flex-1">Regional variations are considered for effective communication</span>
                </div>
              </div>
              <div className="space-y-2 text-gray-200">
                <div className="flex items-start">
                  <span className="shrink-0 text-yellow-400 mr-3 mt-1">🔄</span>
                  <span className="flex-1">Both Hindi and English translations may be provided in certain cases</span>
                </div>
                <div className="flex items-start">
                  <span className="shrink-0 text-yellow-400 mr-3 mt-1">👨‍💼</span>
                  <span className="flex-1">Administrative heads are responsible for proper implementation</span>
                </div>
                <div className="flex items-start">
                  <span className="shrink-0 text-yellow-400 mr-3 mt-1">📊</span>
                  <span className="flex-1">Regular monitoring and evaluation is essential for success</span>
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

export default Rajabhasha