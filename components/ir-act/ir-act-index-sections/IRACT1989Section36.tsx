'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  MessageSquare,
  AlertCircle
} from 'lucide-react'

const IRACT1989Section36 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER VII - Railway Rates Tribunal</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 36 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                36. Complaints against a railway administration
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  {/* Main Provision */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-4">
                      Any complaint that a railway administration -
                    </p>
                    
                    {/* Complaint Types */}
                    <div className="space-y-3 ml-4 mb-4">
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-300 font-semibold text-sm">(a)</span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          is contravening the provisions of Sec. 70; or
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-300 font-semibold text-sm">(b)</span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          is charging for the carriage of any commodity between two stations a rate which is unreasonable; or
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-300 font-semibold text-sm">(c)</span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          is levying any other charge which is unreasonable,
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      may be made to the Tribunal, and the Tribunal shall hear and decide any such complaint in accordance with the provisions of this Chapter.
                    </p>
                  </div>

                  {/* Comments Section */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 mt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3 ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 36 provides for the nature of complaints against a railway administration which may be made to the Tribunal.
                      </p>
                      <div className="mt-3 pt-3 border-t border-blue-400/30">
                        <p className="text-blue-200 font-semibold lg:text-base text-sm mb-2">Jurisdiction of Claims Tribunal:-</p>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          The jurisdiction on the subject matter about reasonability of the charges and its jurisdiction under the Goods Tariff, which was the part of the agreement, were the questions which fall exclusively within the jurisdiction of the Tribunal. Therefore, the relief on refund also could not have been granted, as before granting it, the Civil Court would have been required to encroach upon the exclusive jurisdiction given to the Tribunal under Sec. 41 (Sec. 36 new) of the Act.
                        </p>
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
              Indian Railways Act 1989 - Chapter VII
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

export default IRACT1989Section36