"use client"
import React from 'react'
import { FileText, Scale, Eye, Shield, Users, BookOpen, Info, CheckCircle, Gavel, Search } from 'lucide-react'
import Link from 'next/link'
import RTIAct2005Index from '@/components/rti-act-2005/RTIAct2005Index'

const RTIAct2005 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-emerald-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Right To Information Act
            </h1>
            <div className="text-2xl md:text-3xl font-light mb-8 text-teal-100">
              2005
            </div>
            <p className="text-lg md:text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              The Right to Information Act, 2005 is a landmark legislation enacted by the Parliament of India 
              to provide for setting out the practical regime of right to information for citizens. It came into 
              force on October 12, 2005, replacing the Freedom of Information Act, 2002, and aims to promote 
              transparency and accountability in the working of every public authority.
            </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-20">
          {/* Transparency */}
          <div className="group relative bg-gradient-to-br from-teal-50 via-white to-teal-100 rounded-3xl p-6 shadow-2xl hover:shadow-teal-300 transition-all duration-300 transform hover:-translate-y-3 border border-teal-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-teal-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-teal-200 rounded-full mb-8 group-hover:bg-teal-300 transition-colors z-10 relative shadow-lg">
              <Eye className="lg:w-10 lg:h-10 w-8 h-8 text-teal-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-teal-900 mb-4 z-10 relative">Transparency</h3>
            <p className="lg:text-lg text-base text-teal-700 leading-relaxed z-10 relative">
              Ensures transparency in the working of public authorities by providing access to information
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-teal-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Accountability */}
          <div className="group relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 rounded-3xl p-6 shadow-2xl hover:shadow-emerald-300 transition-all duration-300 transform hover:-translate-y-3 border border-emerald-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-emerald-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-emerald-200 rounded-full mb-8 group-hover:bg-emerald-300 transition-colors z-10 relative shadow-lg">
              <Shield className="lg:w-10 lg:h-10 w-8 h-8 text-emerald-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-emerald-900 mb-4 z-10 relative">Accountability</h3>
            <p className="lg:text-lg text-base text-emerald-700 leading-relaxed z-10 relative">
              Promotes accountability of public authorities by enabling citizens to seek information
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Citizen Empowerment */}
          <div className="group relative bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl p-6 shadow-2xl hover:shadow-green-300 transition-all duration-300 transform hover:-translate-y-3 border border-green-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-green-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-green-200 rounded-full mb-8 group-hover:bg-green-300 transition-colors z-10 relative shadow-lg">
              <Users className="lg:w-10 lg:h-10 w-8 h-8 text-green-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-green-900 mb-4 z-10 relative">Citizen Empowerment</h3>
            <p className="lg:text-lg text-base text-green-700 leading-relaxed z-10 relative">
              Empowers citizens by providing them the right to access information from public authorities
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Legal Framework */}
          <div className="group relative bg-gradient-to-br from-cyan-50 via-white to-cyan-100 rounded-3xl p-6 shadow-2xl hover:shadow-cyan-300 transition-all duration-300 transform hover:-translate-y-3 border border-cyan-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-cyan-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-cyan-200 rounded-full mb-8 group-hover:bg-cyan-300 transition-colors z-10 relative shadow-lg">
              <Gavel className="lg:w-10 lg:h-10 w-8 h-8 text-cyan-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-cyan-900 mb-4 z-10 relative">Legal Framework</h3>
            <p className="lg:text-lg text-base text-cyan-700 leading-relaxed z-10 relative">
              Establishes a comprehensive legal framework for information access and disclosure
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-100 rounded-tr-3xl blur-lg"></div>
          </div>
        </div>

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
