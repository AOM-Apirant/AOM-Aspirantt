'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText,
  AlertCircle
} from 'lucide-react'

const LeaveRules1949Rule505 = () => {
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
            
            {/* Rule 505 Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                505. Conversion of one kind of leave into another.-
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-200 font-semibold mt-1">(1)</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      At the request of a railway servant, made before he ceases to be in service, the authority which granted him leave may convert it retrospectively into leave of a different kind which was due and admissible to him at the time the leave was granted, but the railway servant cannot claim such conversion as a matter of right.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-200 font-semibold mt-1">(2)</span>
                    <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span>The conversion of one kind of leave into another shall be subject to adjustment of leave salary on the basis of leave finally granted to the railway servant, that is to say, any amount paid to him in excess shall be recovered or any arrears due to him shall be paid.</span>
                      <p className="mt-3 text-gray-300 italic">
                        Provided that no such request shall be considered unless received by such authority or any other authority designated in this behalf, within a period of 30 days of the concerned Railway Servant joining his duty on the expiry of the relevant spell of leave availed of by him.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Note Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Note.-
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <FileText className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Extraordinary leave granted on medical certificate or otherwise may be converted retrospectively into &apos;leave not due&apos; subject to the provision of rule 528.
                  </span>
                </div>
              </div>
            </div>

            {/* alok tells Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                alok tells: -
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <FileText className="lg:w-6 lg:h-6 w-4 h-4 text-purple-200" />
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Proviso below Rule 505(2) inserted vide Railway Board&apos;s letter No. F(E)III/98/LE-1/1 dated 05-02-98 i.e. ACS-57/R-I
                  </span>
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
              Railway Services (Liberalised Leave) Rules, 1949 - Rule 505
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

export default LeaveRules1949Rule505