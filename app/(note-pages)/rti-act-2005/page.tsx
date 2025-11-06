"use client"
import React from 'react'
import { FileText, Scale, Shield, Users, BookOpen, Info, CheckCircle, Gavel, Search } from 'lucide-react'
import Link from 'next/link'
import RTIAct2005Index from '@/components/rti-act-2005/RTIAct2005Index'

const RTIAct2005 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-emerald-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto text-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14 mb-6 relative overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/10 to-green-500/10 opacity-50 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              {/* Title */}
              <div className="mb-4 sm:mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-teal-200 via-emerald-100 to-green-200 bg-clip-text text-transparent mb-3 sm:mb-4 drop-shadow-lg leading-tight">
                  The Right to Information Act, 2005
                </h1>
              </div>
              
              {/* Act Details */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-teal-100 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider border border-white/30">
                  Act No. 22 of 2005
                </span>
                <span className="hidden sm:inline text-white/60">|</span>
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-teal-100 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider border border-white/30">
                  Enacted on 15<sup>th</sup> June, 2005
                </span>
              </div>
              
              {/* Decorative Line */}
              <div className="mx-auto w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-green-300 mb-6 sm:mb-8 rounded-full shadow-lg"></div>
              
              {/* Description */}
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto font-light drop-shadow-md px-2">
                An Act to establish a practical framework for citizens of India to access information held by public authorities, thereby promoting transparency and accountability in governance. The Act provides for the appointment of Central and State Information Commissions and covers all matters related or incidental to the effective implementation of the right to information.
              </p>
              
              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 text-left max-w-4xl mx-auto mb-6 sm:mb-8">
                {/* Preamble Card */}
                <div className="group relative bg-gradient-to-br from-teal-500/15 to-emerald-500/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-emerald-400/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200 flex-shrink-0" />
                      <span className="font-bold text-emerald-100 text-sm sm:text-base md:text-lg">Preamble:</span>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                      Recalling that the <span className="font-semibold text-white">Constitution of India</span> envisions a democratic Republic, this Act recognizes that an informed citizenry and transparency of information are cornerstones of democracy.
                    </p>
                  </div>
                </div>
                
                {/* Purpose Card */}
                <div className="group relative bg-gradient-to-br from-green-500/15 to-teal-500/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-teal-400/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200 flex-shrink-0" />
                      <span className="font-bold text-emerald-100 text-sm sm:text-base md:text-lg">Purpose:</span>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                      It seeks to empower citizens, prevent corruption, and hold governments and their instrumentalities accountable.
                    </p>
                  </div>
                </div>
                
                {/* Balance of Interests Card */}
                <div className="group relative bg-gradient-to-br from-cyan-500/15 to-teal-500/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] sm:col-span-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-teal-400/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200 flex-shrink-0" />
                      <span className="font-bold text-emerald-100 text-sm sm:text-base md:text-lg">Balance of Interests:</span>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                      While public access to information is a right, the Act recognizes that such access must be balanced with other public interests such as efficient government functioning, prudent use of resources, and confidentiality of sensitive data.
                    </p>
                  </div>
                </div>
                
                {/* Harmonization Card */}
                <div className="group relative bg-gradient-to-br from-emerald-500/15 to-green-500/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] sm:col-span-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-green-400/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200 flex-shrink-0" />
                      <span className="font-bold text-emerald-100 text-sm sm:text-base md:text-lg">Harmonization:</span>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                      The Act aims to harmonize conflicting interests, preserving the supremacy of democratic ideals, and ensures that the right to information advances transparency without compromising vital interests.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Enacted by Parliament Section */}
              <div className="mt-6 sm:mt-8 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-2">
                    <Gavel className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-200 flex-shrink-0" />
                    <span className="font-bold text-white text-sm sm:text-base md:text-lg">Enacted by Parliament:</span>
                  </div>
                  <p className="text-emerald-100 italic text-xs sm:text-sm md:text-base lg:text-lg text-center sm:text-left leading-relaxed">
                    In the fifty-sixth year of the Republic of India, the Right to Information Act, 2005 was brought into force to guarantee citizens the right to seek and receive information from the government authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        

        {/* Overview Section */}
        <div className="bg-gradient-to-r from-teal-500 via-emerald-600 to-green-600 rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 text-white border border-teal-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="lg:text-4xl text-2xl font-bold mb-6 flex items-center justify-center">
              <span className="bg-white/20 p-3 rounded-full mr-4 shadow-lg">
                <Info className="w-8 h-8 text-white" />
              </span>
              Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                  <CheckCircle className="w-6 h-6 mr-4 mt-1 text-white/90 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Application</h4>
                    <p className="text-white/90 leading-relaxed">
                      Applies to all public authorities and bodies established by the Constitution, 
                      acts of Parliament, or State Legislatures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                  <CheckCircle className="w-6 h-6 mr-4 mt-1 text-white/90 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Time Limits</h4>
                    <p className="text-white/90 leading-relaxed">
                      Information must be provided within 30 days of the request, 
                      or 48 hours if it concerns life or liberty.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                  <CheckCircle className="w-6 h-6 mr-4 mt-1 text-white/90 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Appeal Mechanism</h4>
                    <p className="text-white/90 leading-relaxed">
                      Provides for first appeal to the officer superior to the Public Information Officer 
                      and second appeal to the Information Commission.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                  <CheckCircle className="w-6 h-6 mr-4 mt-1 text-white/90 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Proactive Disclosure</h4>
                    <p className="text-white/90 leading-relaxed">
                      Mandates public authorities to proactively disclose certain categories of information 
                      to reduce the need for individual requests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Provisions Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 border border-teal-200/50">
          <h2 className="lg:text-4xl text-2xl font-bold text-teal-900 mb-8 flex items-center">
            <BookOpen className="w-8 h-8 mr-4 text-teal-600" />
            Key Provisions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 border border-teal-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-teal-500 rounded-full p-2 mr-3">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">Right to Information</h3>
              </div>
              <p className="text-teal-700 leading-relaxed">
                Every citizen has the right to access information held by public authorities, 
                subject to certain exemptions specified in the Act.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-500 rounded-full p-2 mr-3">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">Public Information Officers</h3>
              </div>
              <p className="text-emerald-700 leading-relaxed">
                Every public authority must designate Public Information Officers (PIOs) 
                to receive and respond to RTI requests from citizens.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 rounded-full p-2 mr-3">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900">Information Commissions</h3>
              </div>
              <p className="text-green-700 leading-relaxed">
                Central and State Information Commissions are established to hear appeals 
                and monitor implementation of the Act.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border border-cyan-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-500 rounded-full p-2 mr-3">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyan-900">Exemptions</h3>
              </div>
              <p className="text-cyan-700 leading-relaxed">
                Certain categories of information are exempted from disclosure, including 
                information affecting national security, privacy, and trade secrets.
              </p>
            </div>
          </div>
        </div>

        <RTIAct2005Index />

        {/* PDF Download Section */}
        <div className="bg-gradient-to-r from-teal-500 via-emerald-600 to-green-600 rounded-3xl shadow-2xl p-8 lg:p-12 text-white border border-teal-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm animate-pulse">
              <svg className="w-12 h-12 lg:w-16 lg:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h3 className="lg:text-4xl text-2xl font-bold mb-4 bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
              Right To Information Act 2005
            </h3>
            <p className="lg:text-xl text-base text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get the complete Right To Information Act, 2005 document in PDF format for offline reference and detailed study. 
              This comprehensive legislation covers transparency, accountability, and citizen&apos;s right to access information from public authorities.
            </p>
            
            <Link 
              href="/Right To Information Act 2005.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="Right To Information Act 2005.pdf"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-bold lg:text-lg text-base rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RTIAct2005
