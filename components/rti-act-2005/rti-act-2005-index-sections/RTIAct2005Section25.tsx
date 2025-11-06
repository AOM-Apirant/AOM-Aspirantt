'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  BarChart3
} from 'lucide-react'

const RTIAct2005Section25 = () => {
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
            
            {/* Monitoring and reporting Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                25. Monitoring and reporting
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Sub-section (1) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-white">(1)</span> The Central Information Commission or State Information Commission, as the case may be, shall, as soon as practicable after the end of each year, prepare a report on the implementation of the provisions of this Act during that year and forward a copy thereof to the appropriate Government.
                      </p>
                    </div>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-white">(2)</span> Each Ministry or Department shall, in relation to the public authorities within their jurisdiction, collect and provide such information to the Central Information Commission or State Information Commission, as the case may be, as is required to prepare the report under this section and comply with the requirements concerning the furnishing of that information and keeping of records for the purposes of this section.
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
                          <span className="font-semibold text-white">(3)</span> Each report shall state in respect of the year to which the report relates,—
                        </p>
                        <div className="space-y-2 pl-4 border-l-2 border-blue-400/30">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(a)</span> the number of requests made to each public authority;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(b)</span> the number of decisions where applicants were not entitled to access to the documents pursuant to the requests, the provisions of this Act under which these decisions were made and the number of times such provisions were invoked;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(c)</span> the number of appeals referred to the Central Information Commission or State Information Commission, as the case may be, for review, the nature of the appeals and the outcome of the appeals;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(d)</span> particulars of any disciplinary action taken against any officer in respect of the administration of this Act;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(e)</span> the amount of charges collected by each public authority under this Act;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(f)</span> any facts which indicate an effort by the public authorities to administer and implement the spirit and intention of this Act;
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-semibold text-white">(g)</span> recommendations for reform, including recommendations in respect of the particular public authorities, for the development, improvement, modernisation, reform or amendment to this Act or other legislation or common law or any other matter relevant for operationalising the right to access information.
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
                        <span className="font-semibold text-white">(4)</span> The Central Government or the State Government, as the case may be, may, as soon as practicable after the end of each year, cause a copy of the report of the Central Information Commission or the State Information Commission, as the case may be, referred to in sub-section (1) to be laid before each House of Parliament or, as the case may be, before each House of the State Legislature, where there are two Houses, and where there is one House of the State Legislature before that House.
                      </p>
                    </div>
                  </div>

                  {/* Sub-section (5) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-white">(5)</span> If it appears to the Central Information Commission or State Information Commission, as the case may be, that the practice of a public authority in relation to the exercise of its functions under this Act does not conform with the provisions or spirit of this Act, it may give to the authority a recommendation specifying the steps which ought in its opinion to be taken for promoting such conformity.
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

export default RTIAct2005Section25