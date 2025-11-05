'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText,
  Building2,
  Briefcase,
  AlertCircle
} from 'lucide-react'

const ConductRules1966Rule4 = () => {
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
            
            {/* Employment of near relatives */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                4. Employment of near relatives of railway servants in Company or firm enjoying Government patronage
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                
                {/* Sub-rule (1) */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <Briefcase className="lg:w-6 lg:h-6 w-4 h-4 text-blue-200" />
                    </span>
                    <div className="flex-1">
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(1) No railway servant shall use his position or influence directly or indirectly to secure employment for any member of his family in any company or firm;</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-rule (2) */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1">
                      <Building2 className="lg:w-6 lg:h-6 w-4 h-4 text-blue-300" />
                    </span>
                    <div className="flex-1">
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4 block">
                        <span className="font-semibold text-cyan-200">(2)</span>
                      </span>
                      <ul className="space-y-3 ml-4">
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-300 font-semibold mt-1">(i)</span>
                          <div className="flex-1">
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              No Group A Officer shall, except with the prior sanction of the Government permit his son , daughter or other dependent to accept employment in any company or firm with which he has official dealings or in any other company or firm having official dealings with the Government:
                            </span>
                            <div className="mt-3 p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30">
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                                <span className="font-semibold text-purple-300">Provided that</span> where the acceptance of the employment cannot await prior permission of the Government or is otherwise considered urgent, the employment may be accepted provisionally subject to the permission of the Government and the fact of such acceptance shall at once be reported to the Government.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-300 font-semibold mt-1">(ii)</span>
                          <div className="flex-1">
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              A railway servant shall, as soon as he becomes aware of the acceptance by a member of his family of an employment in any company or firm, intimate such acceptance to the Government and shall also intimate whether he has or has had any official dealings with that company or firm:
                            </span>
                            <div className="mt-3 p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30">
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                                <span className="font-semibold text-purple-300">Provided that</span> no such intimation shall be necessary in the case of a Group &apos;A&apos; Officer if he has already obtained the sanction of, or sent a report to the Government under clause(i).
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sub-rule (2) - Dealing with matters */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <AlertCircle className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                    </span>
                    <div className="flex-1">
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(2) No railway servant shall in the discharge of his official duties deal with any matter or give or sanction any contract to any company or firm or any other person, if any member of his family is employed in that company or firm or under that person or if he or any member of his family is interested in such matter or contract in any other manner and the railway servant shall refer every such matter or contract to his superior officer or authority and the matter or contract shall thereafter be disposed of according to the instructions of such officer or authority.</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Authority */}
                <div className="mt-6 p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30">
                  <p className="text-gray-300 lg:text-sm text-xs leading-relaxed">
                    <span className="font-semibold text-purple-300">(Authority</span> - Railway Board&apos;s letter No. E(D&A) 2014 GS1-4 dated 12.01.2015)—acs no.124
                  </p>
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

export default ConductRules1966Rule4