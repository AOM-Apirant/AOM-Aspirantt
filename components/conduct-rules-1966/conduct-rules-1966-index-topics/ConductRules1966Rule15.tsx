'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText,
  Award,
  AlertCircle,
  Briefcase
} from 'lucide-react'

const ConductRules1966Rule15 = () => {
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
            
            {/* 15. Private trade or Employment */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Briefcase className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                15. Private trade or Employment
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                
                {/* Sub-rule (1) */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <Award className="lg:w-6 lg:h-6 w-4 h-4 text-blue-200" />
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                        <span className="font-semibold text-blue-300">(1)</span> Subject to the provisions of subrule (2) no Railway Servant shall, except with the previous sanction of the Government—
                      </p>
                      <ul className="space-y-3 ml-4">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-300 font-semibold mt-1">(a)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">engage directly or indirectly in any trade or business, or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-300 font-semibold mt-1">(b)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">negotiate for, or undertake, any other employment, or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-300 font-semibold mt-1">(c)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">hold an elective office, or canvass office for a candidate or candidates for an elective office, in any body, whether incorporated or not, or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-300 font-semibold mt-1">(d)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">Canvass in support of any business of insurance agency, commission agency, etc. owned or managed by any member of his family or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-300 font-semibold mt-1">(e)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">take part except in the discharge of his official duties, in the registration, promotion or management of any bank or other company registered or required to be registered, under the Companies Act, 1956 (1 of 1956) or any other law for the time being in force, or of any co-operative society for commercial purposes.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-300 font-semibold mt-1">(f)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">participate in or associate himself in any manner in the making of</span>
                        </li>
                        <li className="flex items-start gap-3 ml-6">
                          <span className="text-blue-300 font-semibold mt-1">i.</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">a sponsored media (radio or television) programme; or</span>
                        </li>
                        <li className="flex items-start gap-3 ml-6">
                          <span className="text-blue-300 font-semibold mt-1">ii.</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">a media programme commissioned by Government media but produced by a private agency; or</span>
                        </li>
                        <li className="flex items-start gap-3 ml-6">
                          <span className="text-blue-300 font-semibold mt-1">iii.</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">a privately produced media programme including video magazine;</span>
                        </li>
                      </ul>
                      <div className="mt-4 p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30">
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                          <span className="font-semibold text-purple-300">Provided that</span> no previous permission shall be necessary in case where the Railway Servant participates in a programme produced or commissioned by Government media in his official capacity.
                        </p>
                        <p className="text-gray-300 lg:text-sm text-xs leading-relaxed mt-2">
                          (Authority: Railway Board&apos;s Letter No. E(D & A) 96GS1-8 dated 7-1-97)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-rule (2) */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1">
                      <Award className="lg:w-6 lg:h-6 w-4 h-4 text-blue-300" />
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                        <span className="font-semibold text-cyan-300">(2)</span> A railway servant may, without the previous sanction of the Government—
                      </p>
                      <ul className="space-y-3 ml-4">
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-300 font-semibold mt-1">(a)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">undertake honorary work of a social or charitable nature, or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-300 font-semibold mt-1">(b)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">undertake occasional work of a literary, artistic or scientific character, or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-300 font-semibold mt-1">(c)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">participate in sports activities as an amateur, or</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-300 font-semibold mt-1">(d)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">take part in the registration, promotion or management (not involving the holding of an elective office ) of a literary, scientific or charitable society or of a club or similar organisation the aims or objects of which relate to promotion of sports, cultural or recreational activities, registered under the Societies Registration Act, 1860 (21 of 1860), or any other law for the time being in force, or,</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-300 font-semibold mt-1">(e)</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">take part in the registration, promotion or management (not involving the holding of an elective office) of a co-operative society substantially for the benefit of railway servants, registered under the Co-operative Societies Act, 1912 (2 of 1912) or any other law for the time being in force.</span>
                        </li>
                      </ul>
                      <div className="mt-4 p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30">
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                          <span className="font-semibold text-purple-300">Provided that:---</span>
                        </p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-3">
                            <span className="text-purple-300 font-semibold mt-1">i.</span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">he shall discontinue taking part in such activities, if so directed by the Government ; and</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-purple-300 font-semibold mt-1">ii.</span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">in a case falling under clause (d) or clause (e) of this sub-rule, his official duties shall not suffer thereby and he shall, within a period of one month of his taking part in such activity, report to the Government giving details of the nature of his participation.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-rule (3) */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <Award className="lg:w-6 lg:h-6 w-4 h-4 text-blue-200" />
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold text-blue-300">(3)</span> Every railway servant shall report to the Government if any member of his family is engaged in a trade or business or owns or manages an insurance agency or commission agency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-rule (4) */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <Award className="lg:w-6 lg:h-6 w-4 h-4 text-blue-200" />
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-4">
                        <span className="font-semibold text-blue-300">(4)</span> Unless otherwise provided by general or special orders of the Government, no Railway servant may accept any fee for any work done by him for any private or public body or any private person without the sanction of the prescribed authority.
                      </p>
                      <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30">
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-cyan-300">Explanation.</span> –The term &apos;fee&apos; used here shall have the meaning assigned to it in Rule 103(18)-R.I.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Railway Ministry's decision (1) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <AlertCircle className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                      <span className="font-semibold text-orange-300">Railway Ministry&apos;s decision. —(1)</span> It is not permissible for a Railway servant to take an Insurance Agency in his own name and canvass for the same.
                    </p>
                    <p className="text-gray-300 lg:text-sm text-xs leading-relaxed">
(E (D&A) 58 GSI-40 dt. 7-3-58.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Railway Ministry's decision (2) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <AlertCircle className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                      <span className="font-semibold text-orange-300">Railway Ministry&apos;s decision. – (2)</span> Railway servants should not ordinarily be allowed to accept part time employment whether under Government or elsewhere, even though such employment is after office hours.
                    </p>
                    <p className="text-gray-300 lg:text-sm text-xs leading-relaxed">
(9E(D&A) 58 GSI-29 dt. 16-1-59.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Railway Ministry's decision (3) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <AlertCircle className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                      <span className="font-semibold text-orange-300">Railway&apos;s Ministry&apos;s decision.---(3)</span> Railway servants, holding recognized qualification for any system of medicine may be granted permission by the Heads of Departments to undertake medical practice during spare time, on a purely charitable basis without detriment to his official duties. This will not apply to those who possess the qualification and are employed as physicians, surgeons etc., on the Railways.
                    </p>
                    <p className="text-gray-300 lg:text-sm text-xs leading-relaxed">
(E (D&A) 64 GSI-5 dt. 30-5-64 and 10-11-65.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Railway Ministry's decision (4) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <AlertCircle className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                      <span className="font-semibold text-orange-300">Railway&apos;s Ministry&apos;s decision.---(4)</span> No railway servant should negotiate for commercial employment during service without obtaining the prior permission of the Head of the Department and such permission should not be given unless there are any special reasons for doing so.
                    </p>
                    <p className="text-gray-300 lg:text-sm text-xs leading-relaxed">
(E(G) 6 EM 1-2 dt. 26-3-66.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 15-A. Sub-letting and vacation of Government accommodation */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                15-A. Sub-letting and vacation of Government accommodation
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                
                {/* Sub-rule (1) */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <Award className="lg:w-6 lg:h-6 w-4 h-4 text-green-200" />
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold text-green-300">(1)</span> Save as otherwise provided in any other law for the time being in force, no Railway servant shall sub-let, lease or otherwise allow occupation by any other person of government accommodation which has been allotted to him.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-rule (2) */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <Award className="lg:w-6 lg:h-6 w-4 h-4 text-green-200" />
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                        <span className="font-semibold text-green-300">(2)</span> A Railway servant shall, after the cancellation of his allotment of Government accommodation vacate the same within the time-limit prescribed by the allotting authority.
                      </p>
                      <p className="text-gray-300 lg:text-sm text-xs leading-relaxed">
                        (Authority: Railway Board&apos;s letter No. E (D&A) 96 GS1-8 dt. 17.01.1997.)
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

export default ConductRules1966Rule15