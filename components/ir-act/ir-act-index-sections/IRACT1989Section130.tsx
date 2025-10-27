'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  MessageSquare,
  BookOpen
} from 'lucide-react'

const IRACT1989Section130 = () => {
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
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">CHAPTER XIV</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Regulation of hours of work and period of rest</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 130 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                130. Definitions
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1 space-y-4">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        In this Chapter, unless the context otherwise requires :
                      </p>
                      <div className="space-y-3 ml-4">
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          (a) the employment of a railway servant is said to be &quot; Continuous&quot; except when it is excluded or has been declared to be essentially intermittent or intensive ;
                        </p>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          (b)the employment of a railway servant is said to be &quot;essentially intermittent&quot; when it has been declared to be so by the prescribed authority on the ground that the daily hours of duty of the railway servant normally include periods of inaction aggregation to the fifty per cent, or more (including at lease one such periods of not less than half an hour each )
                        </p>
                        <div className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          <p className="mb-2">(c) the employment of a railway servant is said to be &quot; excluded &quot; , if he belongs to any one of the following categories, namely : -</p>
                          <div className="space-y-2 ml-6">
                            <p>(i) railway servant employed in a managerial or confidential capacity ;</p>
                            <p>(ii) armed guards or other personnel subject to discipline similar to that of any of the armed police forces ;</p>
                            <p>(iii) staff of the railway schools imparting technical training or academic eduction;</p>
                            <p>(iv)such staff as may be specified as supervisory under the rules ;</p>
                            <p>(v) such other categories of staff as may be prescribed;</p>
                          </div>
                        </div>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          (d) the employment of a railway servant is said to be &quot; intensive &quot; when it has been declared to be so the prescribed authority on the ground that it is of a strenuous nature involving continued concentration or hard manual labour with little or no period of relaxation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comment</h3>
                    </div>
                    <div className="space-y-3 ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 130 deals with the definition of certain expressions used in chapter XIV.
                      </p>
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
              Indian Railways Act 1989 - Chapter XIV
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

export default IRACT1989Section130