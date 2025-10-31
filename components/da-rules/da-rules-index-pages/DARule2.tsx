'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText,
  HelpCircle
} from 'lucide-react'

const DARule2 = () => {
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
              DISCIPLINARY & APPEAL RULES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - I</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">GENERAL</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Railway Servants (Discipline & Appeal) Rules, 1968 - Rule 2
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Definitions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <HelpCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                2. Definitions
              </h2>
              
              {/* Sub-rule (1) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <h3 className="text-xl font-bold text-cyan-200 mb-4">(1) In these rules, unless the context otherwise requires -</h3>
                
                <div className="space-y-6">
                  {/* (a) appointing authority */}
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-cyan-300">(a) &apos;appointing authority&apos; in relation to a Railway servant means -</p>
                    <div className="ml-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="w-4 h-4 text-blue-200" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-200">(i)</span> the authority empowered to make appointments to the Service of which the Railway servant is, for the time being, a member or to the grade of the Service in which the Railway servant is, for the time being, included, or
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="w-4 h-4 text-blue-300" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-200">(ii)</span> the authority empowered to make appointments to the post which the Railway servant, for the time being holds, or
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="w-4 h-4 text-blue-200" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-200">(iii)</span> the authority which appointed the Railway servant to such Service, grade or post, as the case may be, or
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="w-4 h-4 text-blue-300" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-200">(iv)</span> where the Railway servant having been a permanent member of any other Service or having substantively held any other permanent post, has been in continuous employment under the Ministry of Railways, the authority which appointed him to that Service or to any grade in that Service or to that post;
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed ml-4">whichever authority is the highest authority.</p>
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed ml-4">3</p>
                  </div>

                  {/* (b) Commission */}
                  <div className="space-y-2">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-cyan-200">(b)</span> <span className="font-semibold text-cyan-300">&apos;Commission&apos;</span> means the Union Public Service Commission,
                    </p>
                  </div>

                  {/* (c) disciplinary authority */}
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-cyan-300">(c) &apos;disciplinary authority&apos; means -</p>
                    <div className="ml-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="w-4 h-4 text-blue-200" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-200">(i)</span> in relation to the imposition of a penalty on a Railway servant, the authority competent, under these rules, to impose on him that penalty;
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="w-4 h-4 text-blue-300" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-200">(ii)</span> in relation to Rule 9 and clauses (a) and (b) of sub-rule (1) of Rule 11 in the case of any gazetted Railway servant, an authority competent to impose any of the penalties specified in Rule 6;
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="w-4 h-4 text-blue-200" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-200">(iii)</span> in relation to Rule 9 in the case of any non-gazetted Railway servant, an authority competent to impose any of the major penalties specified in Rule 6;
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="w-4 h-4 text-blue-300" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-200">(iv)</span> in relation to clauses (a) and (b) of sub-rule (1) of Rule 11, in the case of a non-gazetted Railway servant, an authority competent to impose any of the penalties specified in Rule 6.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* (d) head of the department */}
                  <div className="space-y-2">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-cyan-200">(d)</span> <span className="font-semibold text-cyan-300">&apos;head of the department&apos;</span> for the purpose of exercising the powers as appointing, disciplinary, appellate or revising authority, means the authority declared to be head of the department in terms of clause (21) of Rule 103 of Volume I of the Indian Railway Establishment Code (Fifth Edition-1985);
                    </p>
                  </div>

                  {/* (e) Railway servant */}
                  <div className="space-y-2">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-cyan-200">(e)</span> <span className="font-semibold text-cyan-300">&apos;Railway servant&apos;</span> means a Railway servant as defined in clause 43 of Rule 103 of Volume I of the Indian Railway Establishment Code (Fifth Edition-1985) and includes any such Railway servant on foreign service or whose services are temporarily placed at the disposal of any other department of the Central Government or a State Government or a local or other authority;
                    </p>
                  </div>

                  {/* (f) Service */}
                  <div className="space-y-2">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-cyan-200">(f)</span> <span className="font-semibold text-cyan-300">&apos;Service&apos;</span> means a service under the Ministry of Railways;
                    </p>
                  </div>

                  {/* (g) Schedule */}
                  <div className="space-y-2">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-cyan-200">(g)</span> <span className="font-semibold text-cyan-300">&apos;Schedule&apos;</span> means a schedule appended to these rules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-green-200" />
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-green-200">(2)</span> All other words and expressions used but not defined in these rules and defined in the Indian Railways Act, 1890 (9 of 1890) shall have the meanings respectively assigned to them under that Act.
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
              Disciplinary & Appeal Rules - Part I, Rule 2
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

export default DARule2