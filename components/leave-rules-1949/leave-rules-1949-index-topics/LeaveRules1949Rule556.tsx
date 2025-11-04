'use client'
import React from 'react'
import { 
  BookOpen,
  FileText,
  GraduationCap
} from 'lucide-react'

const LeaveRules1949Rule556 = () => {
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
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-violet-600 p-3 rounded-full">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-violet-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              RAILWAY SERVICES (LIBERALISED LEAVE) RULES, 1949
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Special Kinds of Leave Section Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 lg:px-4 px-3 border border-white/20">
              <h2 className="lg:text-2xl text-xl font-bold text-blue-300 text-center">
                Special Kinds of Leave
              </h2>
            </div>

            {/* Rule 556 Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-violet-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                556. Study Leave.-
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  <div className="space-y-4">
                    {/* Main Paragraph */}
                    <div className="mb-6">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">Study leave may be granted in accordance with the rules prescribed in Appendix V to railway servants to enable them to study scientific, technical or similar problems or to undergo special courses of instruction. Such leave is not debited against the leave account.</p>
                    </div>

                    {/* Subsection Heading */}
                    <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-4 px-4 shadow-lg border border-indigo-400/30 mb-4">
                      <h3 className="text-indigo-200 font-bold lg:text-xl text-lg">
                        Counting of study leave for promotion, pension, seniority, leave and increments.-
                      </h3>
                    </div>

                    {/* Sub-rule (1) */}
                    <div className="flex items-start gap-4">
                      <span className="text-blue-200 font-semibold mt-1">(1)</span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">Study leave shall count as service for promotion, pension and seniority. It shall also count as service for increments as provided in Rules.</p>
                      </div>
                    </div>

                    {/* Sub-rule (2) */}
                    <div className="flex items-start gap-4">
                      <span className="text-blue-200 font-semibold mt-1">(2)</span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">The period spent on study leave shall not count for earning leave other than half-pay leave under the Liberalised Leave Rules.</p>
                      </div>
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
              Railway Services (Liberalised Leave) Rules, 1949 - Rule 556
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

export default LeaveRules1949Rule556
