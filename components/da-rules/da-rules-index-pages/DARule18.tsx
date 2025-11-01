'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  CheckCircle
} from 'lucide-react'

const DARule18 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - V</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">APPEALS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Main Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <CheckCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                18. Orders against which appeal lies
              </h2>

              {/* Main Content */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-green-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Subject to the provisions of Rule 17, a Railway servant may prefer an appeal against all or any of the following orders, namely:-
                    <div className="mt-4 ml-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-emerald-200">(i)</span>
                        <span>an order of suspension made or deemed to have been made under Rule 5;</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-emerald-200">(ii)</span>
                        <span>an order imposing any of the penalties specified in Rule 6 whether made by the disciplinary authority or by an appellate or revising authority;</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-emerald-200">(iii)</span>
                        <span>an order enhancing any penalty imposed under Rule 6;</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-emerald-200">(iv)</span>
                        <div className="flex-1">
                          <span>an order which -</span>
                          <div className="mt-2 ml-6 space-y-2">
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-emerald-200">(a)</span>
                              <span>denies or varies to his disadvantage his pay, allowances, pension, Provident Fund benefits, service gratuity or other conditions of service as regulated by rules or by agreement; or</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-emerald-200">(b)</span>
                              <span>interprets to his disadvantage the provisions of any such rule or agreement;</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-emerald-200">(v)</span>
                        <div className="flex-1">
                          <span>an order :-</span>
                          <div className="mt-2 ml-6 space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-emerald-200">(a)</span>
                              <span>stopping him at the efficiency bar in the time-scale of pay on the ground of his unfitness to cross the bar;</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-emerald-200">(b)</span>
                              <span>reverting him while officiating in a higher service, grade or post to a lower service, grade or post otherwise than as a penalty;</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-emerald-200">(c)</span>
                              <span>reducing or withholding the pension or denying the maximum pension admissible to him under the rules, if he is a pensionable Railway servant;</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-emerald-200">(d)</span>
                              <span>reducing or withholding the Government contribution to Provident Fund and Special Contribution to Provident Fund or Gratuity admissible to him under the State Railway Provident Fund Rules, and Gratuity Rules, if he is a non-pensionable Railway servant;</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-emerald-200">(e)</span>
                              <span>determining the subsistence and other allowances to be paid to him for the period of suspension or for the period during which he is deemed to be under suspension or for any portion thereof;</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-emerald-200">(f)</span>
                              <div className="flex-1">
                                <span>determining his pay and allowances :-</span>
                                <div className="mt-2 ml-6 space-y-2">
                                  <div className="flex items-start gap-3">
                                    <span className="font-semibold text-emerald-200">(i)</span>
                                    <span>for the period of suspension, or</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="font-semibold text-emerald-200">(ii)</span>
                                    <span>for the period from the date of his dismissal, removal or compulsory retirement from service to the date of his reinstatement;</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-emerald-200">(g)</span>
                              <span>determining whether or not the period from the date of his suspension or from the date of his dismissal, removal or compulsory retirement to the date of his reinstatement shall be treated as a period spent on duty for any purpose.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-cyan-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-cyan-200">Explanation:</span> - In this rule -
                    <div className="mt-4 ml-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-cyan-200">(i)</span>
                        <span>the expression &lsquo;Railway servant&rsquo; includes a person who has ceased to be in Railway Service;</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-cyan-200">(ii)</span>
                        <span>the expression &lsquo;pension&rsquo; includes additional pension, gratuity and any other retirement benefit.</span>
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
              Disciplinary & Appeal Rules - Part V, Rule 18
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

export default DARule18