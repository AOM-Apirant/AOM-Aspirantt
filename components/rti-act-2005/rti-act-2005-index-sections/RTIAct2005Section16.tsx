'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  Clock,
  Shield,
  UserCheck,
  Briefcase,
  DollarSign,
  Users
} from 'lucide-react'

const RTIAct2005Section16 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER IV</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">THE STATE INFORMATION COMMISSION</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Term of office and conditions of service Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Clock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                16. Term of office and conditions of service
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Subsection (1) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2">
                          <span className="font-semibold text-cyan-200">(1)</span> The State Chief Information Commissioner shall hold office <span className="font-semibold text-yellow-300">1[for such term as may be prescribed by the Central Government]</span> and shall not be eligible for reappointment:
                        </p>
                        <div className="bg-orange-500/20 rounded-lg p-3 mt-2 border border-orange-400/30">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided that</span> no State Chief Information Commissioner shall hold office as such after he has attained the age of sixty-five years.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (2) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <UserCheck className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2">
                          <span className="font-semibold text-cyan-200">(2)</span> Every State Information Commissioner shall hold office <span className="font-semibold text-yellow-300">1[for such term as may be prescribed by the Central Government]</span> or till he attains the age of sixty-five years, whichever is earlier, and shall not be eligible for reappointment as such State Information Commissioner:
                        </p>
                        <div className="bg-orange-500/20 rounded-lg p-3 mt-2 border border-orange-400/30 space-y-2">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided that</span> every State Information Commissioner shall, on vacating his office under this sub-section, be eligible for appointment as the State Chief Information Commissioner in the manner specified in sub-section (3) of section 15:
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided further that</span> where the State Information Commissioner is appointed as the State Chief Information Commissioner, his term of office shall not be more than five years in aggregate as the State Information Commissioner and the State Chief Information Commissioner.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (3) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Shield className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(3)</span> The State Chief Information Commissioner or a State Information Commissioner, shall before he enters upon his office make and subscribe before the Governor or some other person appointed by him in that behalf, an oath or affirmation according to the form set out for the purpose in the First Schedule.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (4) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Briefcase className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2">
                          <span className="font-semibold text-cyan-200">(4)</span> The State Chief Information Commissioner or a State Information Commissioner may, at any time, by writing under his hand addressed to the Governor, resign from his office:
                        </p>
                        <div className="bg-orange-500/20 rounded-lg p-3 mt-2 border border-orange-400/30">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided that</span> the State Chief Information Commissioner or a State Information Commissioner may be removed in the manner specified under section 17.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footnote 1 */}
                  <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-yellow-300">1.</span> Subs. by Act 24 of 2019, s. 3, for, &quot;for a term of five years from the date on which he enters upon his office&quot;(w.e.f. 24-10-2019).
                    </p>
                  </div>

                  {/* Subsection (5) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <DollarSign className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2">
                          <span className="font-semibold text-cyan-200">1[(5)</span> The salaries and allowances payable to and other terms and conditions of service of the State Chief Information Commissioner and the State Information Commissioners shall be such as may be prescribed by the Central Government:
                        </p>
                        <div className="bg-orange-500/20 rounded-lg p-3 mt-2 border border-orange-400/30 space-y-2">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided that</span> the salaries, allowances and other conditions of service of the State Chief Information Commissioner and the State Information Commissioners shall not be varied to their disadvantage after their appointment:
                          </p>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided further that</span> the State Chief Information Commissioner and the State Information Commissioners appointed before the commencement of the Right to Information (Amendment) Act, 2019 shall continue to be governed by the provisions of this Act and the rules made there under as if the Right to Information (Amendment) Act, 2019 had not come into force.]
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (6) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Users className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(6)</span> The State Government shall provide the State Chief Information Commissioner and the State Information Commissioners with such officers and employees as may be necessary for the efficient performance of their functions under this Act, and the salaries and allowances payable to and the terms and conditions of service of the officers and other employees appointed for the purpose of this Act shall be such as may be prescribed.
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
              Right to Information Act 2005 - Chapter IV
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

export default RTIAct2005Section16