"use client"
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 py-12 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-orange-500/30 to-blue-500/30 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-orange-600 to-blue-600 p-3 rounded-full shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-7xl text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-white to-blue-400 bg-clip-text text-transparent mb-6 animate-fade-in drop-shadow-2xl">
              AOM ASPIRANT
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 via-white to-blue-500 mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="lg:text-2xl text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-medium">
              Your Complete Digital Platform for Assistant Operations Manager Excellence
            </p>
            <p className="lg:text-lg text-base text-blue-200 mt-4 max-w-3xl mx-auto">
              Indian Railways | Comprehensive Study Materials | Expert Guidance
            </p>
          </div>

          {/* What We Offer Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-10 flex items-center justify-center flex-col gap-3 text-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full mr-4 shadow-2xl">
                <svg className="lg:w-10 lg:h-10 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              What We Offer
            </h2>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl py-6 px-6 shadow-2xl border border-orange-400/30 hover:shadow-3xl transition-all duration-300">
              <p className="text-gray-100 leading-relaxed lg:text-xl text-base text-center max-w-4xl mx-auto font-medium">
                AOM Aspirant is the premier digital learning platform specifically designed for Assistant Operations Manager (AOM) aspirants in Indian Railways. We provide comprehensive study materials, railway manuals, regulations, and practice resources to help you excel in your AOM examination and career.
              </p>
            </div>
          </div>

          {/* Comprehensive Study Materials */}
          <div className="mb-12">
            <h2 className="lg:text-4xl text-3xl font-bold text-white mb-10 text-center flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full mr-4 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Comprehensive Study Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Railway Manuals & Rules */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Railway Manuals</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Book of Working Manual (BWM)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>General & Subsidiary Rules (G&SR)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Accident Manual SCR 2012</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Operating Manual SCR 2023</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Railway Acts & Regulations */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Acts & Regulations</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>Indian Railways Act 1989</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>Industrial Disputes Act 1947</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>Factories Act 1948</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>Disaster Management Act 2005</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Rules */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Service Rules</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▸</span>
                        <span>Railway Servants DA Rules 1968</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▸</span>
                        <span>Railway Servants Pass Rules 1986</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▸</span>
                        <span>Railway Servants Conduct Rules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▸</span>
                        <span>Working Time & Rest Rules</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Operational Resources */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Operating Resources</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>Operating Forms & Authorities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>Speed Restrictions & Guidelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>Bell & Whistle Codes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>Working Time Table (WTT)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* IT Applications */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">IT Applications</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span>NTES, PRS, UTS Systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span>COA, ICMS, TMS Applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span>ESS, EWSS, TDMS Platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span>RSMS, RSHC, PMS Tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Practice & Reference</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">▸</span>
                        <span>Railway Abbreviations & Definitions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">▸</span>
                        <span>Circulars & Amendments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">▸</span>
                        <span>Previous Year Question Papers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">▸</span>
                        <span>Commercial & Red Tariff</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Interactive Study Materials</h3>
              <p className="text-gray-300">Chapter-wise organized content for easy learning</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">PDF Resources</h3>
              <p className="text-gray-300">Download official manuals and study offline</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Progress Tracking</h3>
              <p className="text-gray-300">Monitor your study progress systematically</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Practice Quizzes</h3>
              <p className="text-gray-300">Test your knowledge with topic-wise quizzes</p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl py-12 px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-4xl text-3xl font-bold text-white mb-10 flex items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-full mr-4 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              Our Mission
            </h2>
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-amber-400/30 hover:shadow-3xl transition-all duration-300">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-gray-100 leading-relaxed text-xl font-medium">
                  To empower Assistant Operations Manager aspirants with comprehensive, accessible, and up-to-date study materials that align with Indian Railways standards and requirements.
                </p>
                <p className="text-gray-100 leading-relaxed text-xl font-medium">
                  We are committed to providing a centralized platform where all essential railway manuals, acts, rules, and regulations are available at your fingertips, helping you prepare effectively for the AOM examination and excel in your railway career.
                </p>
                <p className="text-gray-100 leading-relaxed text-xl font-medium">
                  Join thousands of railway aspirants who trust AOM Aspirant for their professional development and examination preparation.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-orange-500/20 via-blue-500/20 to-green-500/20 backdrop-blur-lg rounded-3xl shadow-2xl py-14 px-8 border border-white/20">
            <div className="text-center">
              <div className="inline-block p-2 bg-gradient-to-r from-orange-500/30 to-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-orange-600 to-blue-600 p-4 rounded-full shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              <h2 className="lg:text-5xl text-4xl font-bold text-white mb-6">
                Begin Your AOM Journey Today
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                Access comprehensive study materials, railway manuals, and expert resources designed specifically for Assistant Operations Manager aspirants. Start your preparation with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/register"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg group"
                >
                  Register Now
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/syllabus"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg group"
                >
                  View Syllabus
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}