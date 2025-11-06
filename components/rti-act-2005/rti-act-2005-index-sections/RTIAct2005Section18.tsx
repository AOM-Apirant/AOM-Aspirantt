'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  Zap,
  Search,
  Gavel,
  Shield
} from 'lucide-react'

const RTIAct2005Section18 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER V</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">POWERS AND FUNCTIONS OF THE INFORMATION COMMISSIONS, APPEAL AND PENALTIES</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Powers and functions of Information Commissions Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                18. Powers and functions of Information Commissions
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Footnote 1 */}
                  <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-yellow-300">1.</span> Subs. by Act 24 of 2019, s. 3, for sub-section (5), (w.e.f. 24-10-2019).
                    </p>
                  </div>

                  {/* Subsection (1) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200">(1)</span> Subject to the provisions of this Act, it shall be the duty of the Central Information Commission or State Information Commission, as the case may be, to receive and inquire into a complaint from any person,—
                        </p>
                        <div className="ml-6 space-y-2">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(a)</span> who has been unable to submit a request to a Central Public Information Officer or State Public Information Officer, as the case may be, either by reason that no such officer has been appointed under this Act, or because the Central Assistant Public Information Officer or State Assistant Public Information Officer, as the case may be, has refused to accept his or her application for information or appeal under this Act for forwarding the same to the Central Public Information Officer or State Public Information Officer or senior officer specified in sub-section (1) of section 19 or the Central Information Commission or the State Information Commission, as the case may be;
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(b)</span> who has been refused access to any information requested under this Act;
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(c)</span> who has not been given a response to a request for information or access to information within the time limit specified under this Act;
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(d)</span> who has been required to pay an amount of fee which he or she considers unreasonable;
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(e)</span> who believes that he or she has been given incomplete, misleading or false information under this Act; and
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(f)</span> in respect of any other matter relating to requesting or obtaining access to records under this Act.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (2) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Search className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(2)</span> Where the Central Information Commission or State Information Commission, as the case may be, is satisfied that there are reasonable grounds to inquire into the matter, it may initiate an inquiry in respect thereof.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (3) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Gavel className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200">(3)</span> The Central Information Commission or State Information Commission, as the case may be, shall, while inquiring into any matter under this section, have the same powers as are vested in a civil court while trying a suit under the Code of Civil Procedure, 1908 (5 of 1908), in respect of the following matters, namely:—
                        </p>
                        <div className="ml-6 space-y-2">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(a)</span> summoning and enforcing the attendance of persons and compel them to give oral or written evidence on oath and to produce the documents or things;
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(b)</span> requiring the discovery and inspection of documents;
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(c)</span> receiving evidence on affidavit;
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(d)</span> requisitioning any public record or copies thereof from any court or office;
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(e)</span> issuing summons for examination of witnesses or documents; and
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(f)</span> any other matter which may be prescribed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (4) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Shield className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(4)</span> Notwithstanding anything inconsistent contained in any other Act of Parliament or State Legislature, as the case may be, the Central Information Commission or the State Information Commission, as the case may be, may, during the inquiry of any complaint under this Act, examine any record to which this Act applies which is under the control of the public authority, and no such record may be withheld from it on any grounds.
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
              Right to Information Act 2005 - Chapter V
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

export default RTIAct2005Section18