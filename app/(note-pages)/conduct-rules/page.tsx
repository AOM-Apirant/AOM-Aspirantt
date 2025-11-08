import React from 'react'
import { Shield, Gavel, Scale, Users, Heart, Download } from 'lucide-react'

import ConductRules1966Index from '@/components/conduct-rules-1966/ConductRules1966Index'
import Link from 'next/link'

const ConductRulesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold mb-6 tracking-tight">
              Railway Services (Conduct) Rules - 1966
            </h1>
            
            <p className="text-lg md:text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive behavioural framework for Railway servants in India covering ethics, integrity,
              professional conduct, and public trust. Explore all 25 rules with structured summaries, study aids,
              and downloadable references tailored for AOM aspirants.
            </p>
           
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Key Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-20">
          <div className="group relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-3xl p-6 shadow-2xl hover:shadow-indigo-300 transition-all duration-300 transform hover:-translate-y-3 border border-indigo-200 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-indigo-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-indigo-200 rounded-full mb-8 group-hover:bg-indigo-300 transition-colors z-10 relative shadow-lg">
              <Scale className="lg:w-10 lg:h-10 w-8 h-8 text-indigo-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-indigo-900 mb-4 z-10 relative">Integrity & Ethics</h3>
            <p className="lg:text-lg text-base text-indigo-700 leading-relaxed z-10 relative">
              Rules ensuring honesty, impartiality, and compliance with the core values of Railway Services.
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-100 rounded-tr-3xl blur-lg"></div>
          </div>

          <div className="group relative bg-gradient-to-br from-purple-50 via-white to-purple-100 rounded-3xl p-6 shadow-2xl hover:shadow-purple-300 transition-all duration-300 transform hover:-translate-y-3 border border-purple-200 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-purple-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-purple-200 rounded-full mb-8 group-hover:bg-purple-300 transition-colors z-10 relative shadow-lg">
              <Users className="lg:w-10 lg:h-10 w-8 h-8 text-purple-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-purple-900 mb-4 z-10 relative">Professional Conduct</h3>
            <p className="lg:text-lg text-base text-purple-700 leading-relaxed z-10 relative">
              Guidance on associations, political neutrality, and public interactions for railway personnel.
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-100 rounded-tr-3xl blur-lg"></div>
          </div>

          <div className="group relative bg-gradient-to-br from-rose-50 via-white to-rose-100 rounded-3xl p-6 shadow-2xl hover:shadow-rose-300 transition-all duration-300 transform hover:-translate-y-3 border border-rose-200 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-rose-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-rose-200 rounded-full mb-8 group-hover:bg-rose-300 transition-colors z-10 relative shadow-lg">
              <Heart className="lg:w-10 lg:h-10 w-8 h-8 text-rose-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-rose-900 mb-4 z-10 relative">Financial Discipline</h3>
            <p className="lg:text-lg text-base text-rose-700 leading-relaxed z-10 relative">
              Investment, property, gifts, and assets disclosure norms crucial for transparent governance.
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-rose-100 rounded-tr-3xl blur-lg"></div>
          </div>

          <div className="group relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl p-6 shadow-2xl hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-3 border border-blue-200 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-blue-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-blue-200 rounded-full mb-8 group-hover:bg-blue-300 transition-colors z-10 relative shadow-lg">
              <Gavel className="lg:w-10 lg:h-10 w-8 h-8 text-blue-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-blue-900 mb-4 z-10 relative">Compliance & Discipline</h3>
            <p className="lg:text-lg text-base text-blue-700 leading-relaxed z-10 relative">
              Procedures for accountability, disciplinary actions, and maintenance of public confidence.
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-tr-3xl blur-lg"></div>
          </div>
        </div>

        {/* Index */}
        <div id="index">
          <ConductRules1966Index />
        </div>
      </div>

      {/* Footer Callout */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-[0_25px_50px_-12px_rgba(79,70,229,0.6)] overflow-hidden">
          <div className="relative px-8 sm:px-12 py-12 sm:py-16">
            <div className="absolute -right-16 -top-16 w-52 h-52 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid gap-8 md:grid-cols-[1.2fr,auto] items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide uppercase">
                  Premium Study Aid
                </span>
                <h2 className="mt-6 lg:text-3xl text-xl font-bold leading-tight">
                  Railway Services (Conduct) Rules 1966 PDF File
                </h2>
                <p className="mt-4 text-lg text-indigo-100 leading-relaxed">
                  Download meticulously digitized rule-wise PDFs, crafted for quick revision and offline study. Includes the
                  comprehensive 1966 rulebook and individual sections tailored for AOM aspirants.
                </p>
                
              </div>
              <div className="flex flex-col items-stretch gap-3">
                <Link
                  href="/conduct-rules-1966-pdf-pages/CONDUCTRULESACT1966.pdf"
                  download
                  className="group inline-flex items-center justify-center gap-3 rounded-lg border border-white/40 bg-white text-indigo-900 px-8 py-4 text-lg font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/40"
                >
                  <Download className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  Download PDF
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConductRulesPage