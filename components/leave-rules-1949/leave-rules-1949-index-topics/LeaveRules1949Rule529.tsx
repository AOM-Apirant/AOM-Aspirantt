'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText
} from 'lucide-react'

const LeaveRules1949Rule529 = () => {
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
              RAILWAY SERVICES (LIBERALISED LEAVE) RULES, 1949
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Grant and return from leave Section Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 lg:px-4 px-3 border border-white/20">
              <h2 className="lg:text-2xl text-xl font-bold text-cyan-300 text-center">
                Grant and return from leave
              </h2>
            </div>

            {/* Rule 529 Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                529. Leave not due to temporary railway employees.-
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Subject to the provisions of clause (i) and clause (iii) to rule 528(1), leave not due may be granted to temporary railway servants who are suffering from TB, Leprosy, Cancer or Mental illness, for a period not exceeding 360 days during the entire service on medical certificate if the railway servant concerned has put in at least one year&apos;s railway service:
                </p>
                <div className="mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-purple-400/30">
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-purple-200" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="text-purple-300 font-semibold">Provided that</span> the post from which the railway servant proceeds on leave is likely to last till his return to do duty; and the request for leave is supported by a medical certificate.
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-orange-400/30">
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-orange-200" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="text-orange-300 font-semibold">Note.-</span> Leave not due, under Rule 528 and 529, is leave admissible under the Rules and where it can be granted, the grant of Extraordinary leave under Rule 530 will be irregular unless specifically applied for by the Railway servant in writing.
                    </span>
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
              Railway Services (Liberalised Leave) Rules, 1949 - Rule 529
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

export default LeaveRules1949Rule529