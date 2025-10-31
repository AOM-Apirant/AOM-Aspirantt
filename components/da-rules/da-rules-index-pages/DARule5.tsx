'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText,
  AlertCircle,
  Pause
} from 'lucide-react'

const DARule5 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART – II</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">SUSPENSION</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Railway Servants (Discipline & Appeal) Rules, 1968 - Rule 5
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Suspension */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Pause className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                5. Suspension
              </h2>
              
              {/* Sub-rule (1) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="mb-4">
                  <p className="text-xl font-bold text-cyan-200 mb-2">(1) A Railway servant may be placed under suspension -</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <FileText className="w-4 h-4 text-blue-200" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-cyan-200">(a)</span> where a disciplinary proceeding against him is contemplated or is pending; or
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <FileText className="w-4 h-4 text-blue-300" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-cyan-200">(b)</span> where, in the opinion of the authority competent to place a Railway servant under suspension, he has engaged himself in activities prejudicial to the interest of the security of the state; or
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <FileText className="w-4 h-4 text-blue-200" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-cyan-200">(c)</span> where a case against him in respect of any criminal offence, is under investigation, inquiry or trial.
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="mb-4">
                  <p className="text-xl font-bold text-purple-200 mb-2">(2) A Railway servant shall be deemed to have been placed under suspension by an order of the competent authority -</p>
                </div>
                
                <div className="space-y-4 mb-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <FileText className="w-4 h-4 text-purple-200" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-purple-200">(a)</span> with effect from the date of his detention, if he is detained in custody, whether on a criminal charge or otherwise, for a period exceeding forty-eight hours;
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-400 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <FileText className="w-4 h-4 text-pink-300" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-purple-200">(b)</span> with effect from the date of his conviction, if in the event of a conviction for an offence, he is sentenced to a term of imprisonment exceeding forty-eight hours and is not forthwith dismissed or removed or compulsorily retired consequent to such conviction.
                    </span>
                  </div>
                </div>

                {/* Explanation for sub-rule (2) */}
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-lg py-4 lg:px-4 px-3 shadow-md border border-purple-500/30 mt-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-purple-200" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-purple-200">Explanation -</span> The period of forty-eight hours referred to in clause (b) of this sub-rule, shall be computed from the commencement of the imprisonment after the conviction and for this purpose, intermittent periods of imprisonment, if any, shall be taken into account.
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-rule (3) */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-indigo-500 to-blue-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-indigo-200" />
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-indigo-200">(3)</span> Where a penalty of dismissal, removal or compulsory retirement from service imposed upon a Railway servant under suspension, is set aside in appeal or on revision under these rules and the case is remitted for further inquiry or action or with any other directions, the order of his suspension shall be deemed to have continued in force on and from the date of the original order of dismissal, removal or compulsory retirement and shall remain in force until further orders.
                  </span>
                </div>
              </div>

              {/* Page number */}
              <div className="text-center mb-6">
                <span className="text-gray-400 text-lg">5</span>
              </div>

              {/* Sub-rule (4) */}
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-amber-400/30 mb-6">
                <div className="mb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <FileText className="w-5 h-5 text-amber-200" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-amber-200">(4)</span> Where a penalty of dismissal, removal or compulsory retirement from service imposed upon a Railway servant, is set aside or declared or rendered void in consequence of or by a decision of a court of law and the disciplinary authority on consideration of the circumstances of the case, decides to hold a further inquiry against him on the allegations on which the penalty of dismissal, removal or compulsory retirement, was originally imposed, the Railway servant shall be deemed to have been placed under suspension by the competent authority from the date of the original order of dismissal, removal or compulsory retirement and shall continue to remain under suspension until further orders:
                    </span>
                  </div>
                </div>

                {/* Provision for sub-rule (4) */}
                <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-lg rounded-lg py-4 lg:px-4 px-3 shadow-md border border-amber-500/30">
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-amber-600 to-orange-600 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <AlertCircle className="w-4 h-4 text-amber-200" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-amber-200">Provided that</span> no such further inquiry shall be ordered unless it is intended to meet a situation where the court has passed an order purely on technical grounds without going into the merits of the case.
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-rule (5) */}
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-teal-400/30 mb-6">
                <div className="mb-4">
                  <p className="text-xl font-bold text-teal-200 mb-2">(5)</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-teal-500 to-cyan-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <FileText className="w-4 h-4 text-teal-200" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-teal-200">(a)</span> An order of suspension made or deemed to have been made under this rule, shall continue to remain in force until it is modified or revoked by the authority competent to do so.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-cyan-500 to-teal-400 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <FileText className="w-4 h-4 text-cyan-300" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-teal-200">(b)</span> Where a Railway servant is suspended or is deemed to have been suspended (whether in connection with any disciplinary proceeding or otherwise) and any other disciplinary proceeding is commenced against him during the continuance of that suspension, the authority competent to place him under suspension may, for reasons to be recorded by him in writing, direct that the Railway servant shall continue to be under suspension until the termination of all or any of such proceedings.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-teal-500 to-cyan-500 p-1.5 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <FileText className="w-4 h-4 text-teal-200" />
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-teal-200">(c)</span> An order of suspension made or deemed to have been made under this rule, may, at any time, be modified or revoked by the authority which made or is deemed to have made the order or by any authority to which that authority is subordinate.
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-rule (6) */}
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-red-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-200" />
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-red-200">(6)</span> Notwithstanding anything contained in sub-rule 5, an order of suspension made or deemed to have been made under sub-rule (1) or sub-rule (2) of this rule shall not be valid after a period of ninety days unless it is extended after review in the manner provided in sub-rule (7) of this rule, for a further period before expiry of ninety days.
                  </span>
                </div>
              </div>

              {/* Sub-rule (7) */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-green-200" />
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-green-200">(7)</span> The review of an order of suspension shall be done by the authority which is competent to modify or revoke the suspension, on the recommendation of the review committee constituted for the purpose, and such competent authority shall pass orders either extending or revoking the suspension before expiry of ninety days from the date of order of suspension. Subsequent reviews shall be made before expiry of the extended period of suspension. Extension of suspension shall not be for a period exceeding one hundred and eighty days at a time.
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
              Disciplinary & Appeal Rules - Part II, Rule 5
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

export default DARule5