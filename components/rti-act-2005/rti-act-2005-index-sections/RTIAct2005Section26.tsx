'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  BookOpen
} from 'lucide-react'

const RTIAct2005Section26 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER VI</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">MISCELLANEOUS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Appropriate Government to prepare programmes Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                26. Appropriate Government to prepare programmes
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Sub-section (1) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <div className="flex-1 space-y-3">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="font-semibold text-white">(1)</span> The appropriate Government may, to the extent of availability of financial and other resources,—
                        </p>
                        <div className="space-y-2 pl-4 border-l-2 border-blue-400/30">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(a)</span> develop and organise educational programmes to advance the understanding of the public, in particular of disadvantaged communities as to how to exercise the rights contemplated under this Act;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(b)</span> encourage public authorities to participate in the development and organisation of programmes referred to in clause (a) and to undertake such programmes themselves;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(c)</span> promote timely and effective dissemination of accurate information by public authorities about their activities; and <span className="font-semibold text-white">(d)</span> train Central Public Information Officers or State Public Information Officers, as the case may be, of public authorities and produce relevant training materials for use by the public authorities themselves.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-white">(2)</span> The appropriate Government shall, within eighteen months from the commencement of this Act, compile in its official language a guide containing such information, in an easily comprehensible form and manner, as may reasonably be required by a person who wishes to exercise any right specified in this Act.
                      </p>
                    </div>
                  </div>

                  {/* Sub-section (3) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <div className="flex-1 space-y-3">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="font-semibold text-white">(3)</span> The appropriate Government shall, if necessary, update and publish the guidelines referred to in sub-section (2) at regular intervals which shall, in particular and without prejudice to the generality of sub-section (2), include—
                        </p>
                        <div className="space-y-2 pl-4 border-l-2 border-blue-400/30">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(a)</span> the objects of this Act;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(b)</span> the postal and street address, the phone and fax number and, if available, electronic mail address of the Central Public Information Officer or State Public Information Officer, as the case may be, of every public authority appointed under sub-section (1) of section 5;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(c)</span> the manner and the form in which request for access to an information shall be made to a Central Public Information Officer or State Public Information Officer, as the case may be;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(d)</span> the assistance available from and the duties of the Central Public Information Officer or State Public Information Officer, as the case may be, of a public authority under this Act;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(e)</span> the assistance available from the Central Information Commission or State Information Commission, as the case may be;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(f)</span> all remedies in law available regarding an act or failure to act in respect of a right or duty conferred or imposed by this Act including the manner of filing an appeal to the Commission;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(g)</span> the provisions providing for the voluntary disclosure of categories of records in accordance with section 4;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(h)</span> the notices regarding fees to be paid in relation to requests for access to an information; and
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(i)</span> any additional regulations or circulars made or issued in relation to obtaining access to an information in accordance with this Act.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-section (4) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-white">(4)</span> The appropriate Government must, if necessary, update and publish the guidelines at regular intervals.
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
              Right to Information Act 2005 - Chapter VI
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

export default RTIAct2005Section26