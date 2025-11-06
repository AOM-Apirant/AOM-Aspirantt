'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  Lock,
  AlertCircle
} from 'lucide-react'

const RTIAct2005Section8 = () => {
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
              RIGHT TO INFORMATION ACT 2005
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER II</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">RIGHT TO INFORMATION AND OBLIGATIONS OF PUBLIC AUTHORITIES</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Exemption from disclosure of information Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Lock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                8. Exemption from disclosure of information
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Subsection (1) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      <span className="font-semibold text-cyan-200">(1)</span> Notwithstanding anything contained in this Act, there shall be no obligation to give any citizen,—
                    </p>
                    
                    {/* Clauses (a) through (j) */}
                    <div className="ml-4 space-y-4">
                      {/* Clause (a) */}
                      <div className="flex items-start gap-4">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                        </span>
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-300">(a)</span> information, disclosure of which would prejudicially affect the sovereignty and integrity of India, the security, strategic, scientific or economic interests of the State, relation with foreign State or lead to incitement of an offence;
                        </p>
                      </div>

                      {/* Clause (b) */}
                      <div className="flex items-start gap-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                        </span>
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-300">(b)</span> information which has been expressly forbidden to be published by any court of law or tribunal or the disclosure of which may constitute contempt of court;
                        </p>
                      </div>

                      {/* Clause (c) */}
                      <div className="flex items-start gap-4">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                        </span>
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-300">(c)</span> information, the disclosure of which would cause a breach of privilege of Parliament or the State Legislature;
                        </p>
                      </div>

                      {/* Clause (d) */}
                      <div className="flex items-start gap-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                        </span>
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-300">(d)</span> information including commercial confidence, trade secrets or intellectual property, the disclosure of which would harm the competitive position of a third party, unless the competent authority is satisfied that larger public interest warrants the disclosure of such information;
                        </p>
                      </div>

                      {/* Clause (e) */}
                      <div className="flex items-start gap-4">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                        </span>
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-300">(e)</span> information available to a person in his fiduciary relationship, unless the competent authority is satisfied that the larger public interest warrants the disclosure of such information;
                        </p>
                      </div>

                      {/* Clause (f) */}
                      <div className="flex items-start gap-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                        </span>
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-300">(f)</span> information received in confidence from foreign Government;
                        </p>
                      </div>

                      {/* Clause (g) */}
                      <div className="flex items-start gap-4">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                        </span>
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-300">(g)</span> information, the disclosure of which would endanger the life or physical safety of any person or identify the source of information or assistance given in confidence for law enforcement or security purposes;
                        </p>
                      </div>

                      {/* Clause (h) */}
                      <div className="flex items-start gap-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                        </span>
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-300">(h)</span> information which would impede the process of investigation or apprehension or prosecution of offenders;
                        </p>
                      </div>

                      {/* Clause (i) */}
                      <div className="flex items-start gap-4">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                        </span>
                        <div className="flex-1">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed mb-3">
                            <span className="font-semibold text-cyan-300">(i)</span> cabinet papers including records of deliberations of the Council of Ministers, Secretaries and other officers:
                          </p>
                          <div className="bg-orange-500/20 rounded-lg p-3 mt-2 border border-orange-400/30 space-y-2">
                            <div className="flex items-start gap-3">
                              <span className="bg-gradient-to-r from-orange-500 to-red-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                <AlertCircle className="lg:w-4 lg:h-4 w-3 h-3 text-orange-200" />
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                                <span className="font-semibold text-orange-300">Provided that</span> the decisions of Council of Ministers, the reasons thereof, and the material on the basis of which the decisions were taken shall be made public after the decision has been taken, and the matter is complete, or over:
                              </p>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="bg-gradient-to-r from-orange-500 to-red-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                <AlertCircle className="lg:w-4 lg:h-4 w-3 h-3 text-orange-200" />
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                                <span className="font-semibold text-orange-300">Provided further that</span> those matters which come under the exemptions specified in this section shall not be disclosed;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Clause (j) */}
                      <div className="flex items-start gap-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                        </span>
                        <div className="flex-1">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed mb-3">
                            <span className="font-semibold text-cyan-300">(j)</span> information which relates to personal information the disclosure of which has no relationship to any public activity or interest, or which would cause unwarranted invasion of the privacy of the individual unless the Central Public Information Officer or the State Public Information Officer or the appellate authority, as the case may be, is satisfied that the larger public interest justifies the disclosure of such information:
                          </p>
                          <div className="bg-orange-500/20 rounded-lg p-3 mt-2 border border-orange-400/30">
                            <div className="flex items-start gap-3">
                              <span className="bg-gradient-to-r from-orange-500 to-red-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                <AlertCircle className="lg:w-4 lg:h-4 w-3 h-3 text-orange-200" />
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                                <span className="font-semibold text-orange-300">Provided that</span> the information which cannot be denied to the Parliament or a State Legislature shall not be denied to any person.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (2) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(2)</span> Notwithstanding anything in the Official Secrets Act, 1923 (19 of 1923) nor any of the exemptions permissible in accordance with sub-section (1), a public authority may allow access to information, if public interest in disclosure outweighs the harm to the protected interests.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (3) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200">(3)</span> Subject to the provisions of clauses (a), (c) and (i) of sub-section (1), any information relating to any occurrence, event or matter which has taken place, occurred or happened twenty years before the date on which any request is made under section 6 shall be provided to any person making a request under that section:
                        </p>
                        <div className="bg-orange-500/20 rounded-lg p-3 mt-3 border border-orange-400/30">
                          <div className="flex items-start gap-3">
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                              <AlertCircle className="lg:w-4 lg:h-4 w-3 h-3 text-orange-200" />
                            </span>
                            <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              <span className="font-semibold text-orange-300">Provided that</span> where any question arises as to the date from which the said period of twenty years has to be computed, the decision of the Central Government shall be final, subject to the usual appeals provided for in this Act.
                            </p>
                          </div>
                        </div>
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
              Right to Information Act 2005 - Chapter II
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

export default RTIAct2005Section8
