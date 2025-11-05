'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText,
  Gavel,
  AlertCircle,
  Shield
} from 'lucide-react'

const ConductRules1966Rule10 = () => {
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
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              THE RAILWAY SERVICES (CONDUCT) RULES, 1966
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Evidence before Committee or any other Authority */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                10. Evidence before Committee or any other Authority
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                
                {/* Sub-rule (1) */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <Gavel className="lg:w-6 lg:h-6 w-4 h-4 text-blue-200" />
                    </span>
                    <div className="flex-1">
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(1) Save as provided in sub-rule (3) no railway servant shall, except with the previous sanction of the Government, give evidence in connection with, any enquiry conducted by any person, committee or authority.</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-rule (2) */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1">
                      <AlertCircle className="lg:w-6 lg:h-6 w-4 h-4 text-blue-300" />
                    </span>
                    <div className="flex-1">
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(2) Where any sanction has been accorded under sub-rule (1), no railway servant shall in the course of giving such evidence criticise the policy or any action of the Central Government or of a State Government.</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-rule (3) */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <Shield className="lg:w-6 lg:h-6 w-4 h-4 text-purple-200" />
                    </span>
                    <div className="flex-1">
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4 block">
                        <span className="font-semibold text-cyan-200">(3) Nothing in this rule shall apply to—</span>
                      </span>
                      <ul className="space-y-3 ml-4">
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-300 font-semibold mt-1">(a)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">evidence given at any enquiry before an authority appointed by the government, Parliament or a State Legislature; or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-300 font-semibold mt-1">(b)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">evidence given in any judicial inquiry; or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-300 font-semibold mt-1">(c)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">evidence given at any departmental inquiry ordered by authorities subordinate to the Government.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Railway Services (Conduct) Rules, 1966
            </p>
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

export default ConductRules1966Rule10