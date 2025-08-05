"use client"
import Link from 'next/link'
import React from 'react'

const NationalRailPlan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              NATIONAL RAIL PLAN
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Vision 2030</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
                         <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
               A comprehensive roadmap to create a &apos;future ready&apos; Railway system by 2030, 
               transforming India&apos;s rail infrastructure for sustainable growth and development.
             </p>
          </div>

          {/* Ministry Info Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Ministry of Railways
            </h2>
            <div className="text-center">
              <p className="text-gray-200 lg:text-lg text-base mb-4">
                <strong className="text-indigo-300">Posted On:</strong> 16 MAR 2022 5:12PM by PIB Delhi
              </p>
                             <p className="text-gray-200 lg:text-lg text-base">
                 Indian Railways have prepared a National Rail Plan (NRP) for India – 2030. The Plan is to create a &apos;future
                 ready&apos; Railway system by 2030. The NRP is aimed to formulate strategies based on both operational
                 capacities and commercial policy initiatives to increase modal share of the Railways in freight to 45%.
               </p>
            </div>
          </div>

          {/* Main Objectives Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Objectives
            </h2>
            <div className="space-y-4">
              <div className="flex items-start group hover:bg-white/5 lg:p-3 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                <span className="text-gray-200 lg:text-lg text-base">Formulate strategies based on both operational capacities and commercial policy initiatives to increase modal share of the Railways in freight to 45%.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-3 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 lg:text-lg text-base">Reduce transit time of freight substantially by increasing average speed of freight trains to 50Kmph.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-3 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔗</span>
                <span className="text-gray-200 lg:text-lg text-base">Identify new Dedicated Freight Corridors.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-3 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚄</span>
                <span className="text-gray-200 lg:text-lg text-base">Identify new High Speed Rail Corridors.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-3 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 lg:text-lg text-base">Assess rolling stock requirement for passenger traffic as well as wagon requirement for freight.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-3 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🌱</span>
                <span className="text-gray-200 lg:text-lg text-base">Assess Locomotive requirement to meet twin objectives of 100% electrification (Green Energy) and increasing freight modal share.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-3 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💰</span>
                <span className="text-gray-200 lg:text-lg text-base">Assess the total investment in capital that would be required along with a periodical break up.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-3 p-1 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🤝</span>
                <span className="text-gray-200 lg:text-lg text-base">Sustained involvement of the Private Sector in areas like operations and ownership of rolling stock, development of freight and passenger terminals, development/operations of track infrastructure etc.</span>
              </div>
            </div>
          </div>

          {/* Vision 2024 Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Vision 2024 - Accelerated Implementation
            </h2>
            <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-6 px-2 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base mb-6">
                As part of the National Rail Plan, Vision 2024 has been launched for accelerated implementation of
                certain critical projects by 2024 such as:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start group hover:bg-white/10 rounded-lg lg:p-3 p-1 transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">100% electrification</span>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg lg:p-3 p-1 transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🛤️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Multi-tracking of congested routes</span>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg lg:p-3 p-1 transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚄</span>
                  <span className="text-gray-200 lg:text-lg text-base">Upgradation of speed to 160 kmph on Delhi-Howrah and Delhi-Mumbai routes</span>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg lg:p-3 p-1 transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Upgradation of speed to 130kmph on all other Golden Quadrilateral-Golden Diagonal (GQ/GD) routes</span>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg lg:p-3 p-1 transition-all duration-300">
                  <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚧</span>
                  <span className="text-gray-200 lg:text-lg text-base">Elimination of all Level Crossings on all GQ/GD route</span>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Critical Projects by 2024
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Super Critical Projects */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-6 px-2 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col gap-4 text-center items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Super Critical Projects
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 lg:text-lg text-base">Number of Projects:</span>
                    <span className="text-red-300 font-bold lg:text-xl text-lg">58</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 lg:text-lg text-base">Total Length:</span>
                    <span className="text-red-300 font-bold lg:text-xl text-lg">3,750 kms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 lg:text-lg text-base">Investment:</span>
                    <span className="text-red-300 font-bold lg:text-xl text-lg">₹39,663 Crore</span>
                  </div>
                </div>
              </div>

              {/* Critical Projects */}
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-6 px-2 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col gap-4 text-center items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  Critical Projects
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 lg:text-lg text-base">Number of Projects:</span>
                    <span className="text-orange-300 font-bold lg:text-xl text-lg">68</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 lg:text-lg text-base">Total Length:</span>
                    <span className="text-orange-300 font-bold lg:text-xl text-lg">6,913 kms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 lg:text-lg text-base">Investment:</span>
                    <span className="text-orange-300 font-bold lg:text-xl text-lg">₹75,736 Crore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Investment Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </span>
              Total Investment Summary
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg py-6 lg:px-6 px-2 hover:shadow-lg transition-all duration-300 border border-emerald-400/30">
                <div className="lg:text-4xl text-3xl font-bold text-white">126</div>
                <div className="lg:text-lg text-base text-gray-300 mt-2">Total Projects</div>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg py-6 lg:px-6 px-2 hover:shadow-lg transition-all duration-300 border border-blue-400/30">
                <div className="lg:text-4xl text-3xl font-bold text-white">10,663</div>
                <div className="lg:text-lg text-base text-gray-300 mt-2">Total Kms</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg py-6 lg:px-6 px-2 hover:shadow-lg transition-all duration-300 border border-purple-400/30">
                <div className="lg:text-4xl text-3xl font-bold text-white">₹1,15,399</div>
                <div className="lg:text-lg text-base text-gray-300 mt-2">Total Crore</div>
              </div>
            </div>
          </div>

          {/* Minister's Statement */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              Official Statement
            </h2>
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-6 px-2 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base mb-4">
                This information was given by the Minister of Railways, Communications and Electronic & Information
                Technology, <strong className="text-indigo-300">Shri Ashwini Vaishnaw</strong> in a written reply to a question in Lok Sabha today.
              </p>
              <div className="text-center">
                <p className="text-gray-300 lg:text-base text-sm">RKJ/M</p>
                <p className="text-gray-300 lg:text-base text-sm">(Release ID: 1806617)</p>
              </div>
            </div>
          </div>

          {/* Download PDF Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 lg:px-4 px-2 border border-white/20">
            <div className="text-center">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                                 Download National Rail Plan PDF File
              </h2>
              <p className="text-gray-200 lg:text-lg text-base mb-8 max-w-2xl mx-auto">
                Get the complete National Rail Plan document with detailed information, 
                comprehensive strategies, and full implementation roadmap.
              </p>
              
                             {/* Download Button */}
               <div className="relative group">
                 <Link 
                   href="/syllabus/National Rail Plan.pdf" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-semibold lg:text-xl text-lg rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group-hover:from-red-600 group-hover:via-pink-600 group-hover:to-purple-700"
                   onClick={(e) => {
                     // For mobile devices, open PDF directly
                     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                       // Let the default behavior happen (opens in new tab)
                       // The browser will handle the PDF display
                     } else {
                       // For desktop, trigger download
                       e.preventDefault();
                       const link = document.createElement('a');
                       link.href = "/syllabus/National Rail Plan.pdf";
                       link.download = "National_Rail_Plan_2030.pdf";
                       document.body.appendChild(link);
                       link.click();
                       document.body.removeChild(link);
                     }
                   }}
                 >
                   <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                   <span className="sm:hidden">Download PDF</span>
                   <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                 </Link>
                 
                 
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

export default NationalRailPlan