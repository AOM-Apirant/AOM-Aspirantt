'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  RefreshCcw
} from 'lucide-react'

const DARule25 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - VI</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">REVISION AND REVIEW</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Rule 25 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <RefreshCcw className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                25. Revision
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3">
                    <div>
                      <span className="font-semibold text-cyan-200">(1)</span> Notwithstanding anything contained in these rules -
                    </div>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(i)</span>
                        <span>the President, or</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(ii)</span>
                        <span>the Railway Board, or</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(iii)</span>
                        <span>the General Manager of a Railway Administration or an authority of that status in the case of a Railway servant serving under his control, or</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(iv)</span>
                        <span>the appellate authority not below the rank of a Divisional Railway Manager in cases where no appeal has been preferred, or</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(v)</span>
                        <span>any other authority not below the rank of Deputy Head of Department in the case of a Railway servant serving under his control -</span>
                      </div>
                    </div>
                    <div>
                      may at any time, either on his or its own motion or otherwise, call for the records of any inquiry and revise any order made under these rules or under the rules repealed by Rule 29, after consultation with the Commission, where such consultation is necessary, and may -
                    </div>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(a)</span>
                        <span>confirm, modify or set aside the order; or</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(b)</span>
                        <span>confirm, reduce, enhance or set aside the penalty imposed by the order, or impose any penalty where no penalty has been imposed; or</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(c)</span>
                        <span>remit the case to the authority which made the order or to any other authority directing such authority to make such further inquiry as it may consider proper in the circumstances of the case; or</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(d)</span>
                        <span>pass such orders as it may deem fit:</span>
                      </div>
                    </div>
                    <div className="ml-4 space-y-3 mt-4">
                      <div className="font-semibold text-cyan-200">Provided that -</div>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-cyan-200 font-semibold">(a)</span>
                          <span>no order imposing or enhancing any penalty shall be made by any revising authority unless the Railway servant concerned has been given a reasonable opportunity of making a representation against the penalty proposed;</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-cyan-200 font-semibold">(b)</span>
                          <span>subject to the provisions of Rule 14, where it is proposed to impose any of the penalties specified in clauses (v) to (ix) of Rule 6 or the penalty specified in clause (iv) of Rule 6 which falls within the scope of the provisions contained in sub-rule (2) of Rule 11 or to enhance the penalty imposed by the order under revision to any of the penalties specified in this sub-clause, no such penalty shall be imposed except after following the procedure for inquiry in the manner laid down in Rule 9, unless such inquiry has already been held, and also except after consultation with the Commission, where such consultation is necessary.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-purple-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3">
                    <div>
                      <span className="font-semibold text-purple-200">(2)</span> No proceeding for revision shall be commenced until after -
                    </div>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-200 font-semibold">(i)</span>
                        <span>the expiry of the period of limitation for appeal; or</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-200 font-semibold">(ii)</span>
                        <span>the disposal of the appeal where any such appeal has been preferred:</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-200 font-semibold">Provided that</span>
                        <span>the provisions of this sub-rule shall not apply to the revision of punishment in case of Railway accidents.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (3) */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-violet-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-indigo-500 to-violet-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-indigo-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-indigo-200">(3)</span> An application for revision shall be dealt with in the same manner as if it were an appeal under these rules.
                  </div>
                </div>
              </div>

              {/* Sub-rule (4) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3">
                    <div>
                      <span className="font-semibold text-cyan-200">(4)</span> No power of revision shall be exercised under this rule -
                    </div>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(i)</span>
                        <span>by the appellate or revising authority where it has already considered the appeal or the case and passed orders thereon; and</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">(ii)</span>
                        <span>by a revising authority unless it is higher than the appellate authority where an appeal has been preferred or where no appeal has been preferred and the time limit laid down for revision by the appellate authority, has expired:</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-200 font-semibold">Provided that</span>
                        <span>nothing contained in clauses (i) and (ii) above, shall apply to revision by the President.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (5) */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-purple-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3">
                    <div>
                      <span className="font-semibold text-purple-200">(5)</span> No action under this rule shall be initiated by -
                    </div>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-200 font-semibold">(a)</span>
                        <span>an appellate authority other than the President; or</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-200 font-semibold">(b)</span>
                        <span>the revising authorities mentioned in item (v) of sub-rule (1) -</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      after more than six months from the date of the order to be revised in cases where it is proposed to impose or enhance a penalty or modify the order to the detriment of the Railway servant; or more than one year after the date of the order to be revised in cases where it is proposed to reduce or cancel the penalty imposed or modify the order in favour of the Railway servant:
                    </div>
                    <div className="ml-4 space-y-2 mt-3">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-200 font-semibold">Provided that</span>
                        <span>when revision is undertaken by the Railway Board or the General Manager of a Zonal Railway or an authority of the status of a General Manager in any other Railway Unit or Administration when they are higher than the appellate Authority, and by the President even when he is the appellate authority, this can be done without restriction of any time limit.</span>
                      </div>
                      <div className="mt-3">
                        <span className="text-purple-200 font-semibold">Explanation:</span> For the purposes of this sub-rule the time limits for revision of cases shall be reckoned from the date of issue of the orders proposed to be revised. In cases where original order has been upheld by the appellate authority, the time limit shall be reckoned from the date of issue of the appellate orders.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 25-A */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <RefreshCcw className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                25-A. Review
              </h2>

              {/* Main Content */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-violet-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-indigo-500 to-violet-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-indigo-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3">
                    <div>
                      The President may at any time either on his own motion or otherwise review any order passed under these rules when any new material or evidence which could not be produced or was not available at the time of passing the order under review and which has the effect of changing the nature of the case has come or has been brought to his notice:
                    </div>
                    <div className="ml-4">
                      <div className="flex items-start gap-2">
                        <span className="text-indigo-200 font-semibold">Provided that</span>
                        <span>no order imposing or enhancing any penalty shall be made by the President unless the Railway servant concerned has been given a reasonable opportunity of making a representation against the penalty proposed or where it is proposed to impose any of the major penalties specified in Rule 6 or to enhance the minor penalty imposed by the order sought to be reviewed to any of the major penalties and if an enquiry under Rule 9 has not already been held in the case, no such penalty shall be imposed except after inquiring in the manner laid down in Rule 9, subject to the provisions of Rule 14 and except after consultation with the Commission where such consultation is necessary.</span>
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
              Disciplinary & Appeal Rules - Part VI, Rule 25 & 25-A
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

export default DARule25