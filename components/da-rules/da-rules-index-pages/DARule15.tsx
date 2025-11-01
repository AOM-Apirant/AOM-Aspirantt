'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  Building2
} from 'lucide-react'

const DARule15 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - IV</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">PROCEDURE FOR IMPOSING PENALTIES</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Main Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                15. Provisions regarding Railway servants lent to State Governments, etc.
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-cyan-200">(1)</span> Where the services of a Railway servant are lent to any other Ministry or Department of the Central Government or to a State Government or an authority subordinate thereto or to a local or other authority (hereinafter in this rule referred to as &ldquo;the borrowing authority&rdquo;), the borrowing authority shall have the powers of the authority competent to place the Railway servant under suspension for the purpose of placing him under suspension and of the disciplinary authority for the purpose of conducting disciplinary proceedings against him:
                    <div className="mt-4 bg-blue-900/30 rounded-lg p-4 border border-blue-400/30">
                      <span className="font-semibold text-yellow-300">Provided that</span> the borrowing authority shall forthwith inform the authority which lent the services of the Railway servant (hereinafter in this rule referred to as &ldquo;the lending authority&rdquo;) of the circumstances leading to the order of his suspension or the commencement of the disciplinary proceedings, as the case may be.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-purple-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-purple-200">(2)</span> In the light of the findings in the disciplinary proceedings conducted against the Railway servant -
                    <div className="mt-4 ml-6 space-y-6">
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-purple-200">(i)</span>
                        <div className="flex-1">
                          <span>if the borrowing authority is of the opinion that any of the penalties specified in clauses (i) to (iv) of Rule 6 should be imposed on the Railway servant, it may, after consultation with the lending authority, make such orders on the case as it deems necessary:</span>
                          <div className="mt-2 bg-purple-900/30 rounded-lg p-3 border border-purple-400/30">
                            <span className="font-semibold text-yellow-300">Provided that</span> in the event of a difference of opinion between the borrowing authority and the lending authority, the services of the Railway servant shall be replaced at the disposal of the lending authority.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-purple-200">(ii)</span>
                        <div className="flex-1">
                          <span>if the borrowing authority is of the opinion that any of the penalties specified in clauses (v) to (ix) of Rule 6 should be imposed on the Railway servant, it shall replace his services at the disposal of the lending authority and transmit to it the proceedings of the inquiry and thereupon the lending authority may, if it is the disciplinary authority, pass such orders thereon as it may deem necessary, or if it is not the disciplinary authority, submit the case to the disciplinary authority which shall pass such orders on the case as it may deem necessary:</span>
                          <div className="mt-2 bg-purple-900/30 rounded-lg p-3 border border-purple-400/30 space-y-2">
                            <div>
                              <span className="font-semibold text-yellow-300">Provided that</span> before passing such orders, the disciplinary authority shall comply with the provisions of sub-rules (4) and (5) of Rule 10.
                            </div>
                            <div className="bg-purple-800/30 rounded p-2 border border-purple-300/20 mt-2">
                              <span className="font-semibold text-yellow-300">Explanation</span> - The disciplinary authority may make an order under this clause on the record of the inquiry transmitted to it by borrowing authority, or after holding such further inquiry as it may deem necessary, as far as may be, in accordance with Rule 9.
                            </div>
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
              Disciplinary & Appeal Rules - Part IV, Rule 15
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

export default DARule15