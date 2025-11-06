'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText,
  AlertCircle,
  Info
} from 'lucide-react'

const RTIAct2005Section2 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER I</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">PRELIMINARY</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Definitions Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                2. Definitions.—In this Act, unless the context otherwise requires,—
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Definition (a) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200">(a) &quot;appropriate Government&quot;</span> means in relation to a public authority which is established, constituted, owned, controlled or substantially financed by funds provided directly or indirectly—
                        </p>
                        <div className="ml-4 space-y-2">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(i)</span> by the Central Government or the Union territory administration, the Central Government;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(ii)</span> by the State Government, the State Government;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Definition (b) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(b) &quot;Central Information Commission&quot;</span> means the Central Information Commission constituted under sub-section (1) of section 12;
                      </p>
                    </div>
                  </div>

                  {/* Definition (c) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(c) &quot;Central Public Information Officer&quot;</span> means the Central Public Information Officer designated under sub-section (1) and includes a Central Assistant Public Information Officer designated as such under sub-section (2) of section 5;
                      </p>
                    </div>
                  </div>

                  {/* Definition (d) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(d) &quot;Chief Information Commissioner&quot; and &quot;Information Commissioner&quot;</span> mean the Chief Information Commissioner and Information Commissioner appointed under sub-section (3) of section 12;
                      </p>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-400/30">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <AlertCircle className="lg:w-5 lg:h-5 w-4 h-4 text-orange-200" />
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold text-orange-300">1.</span> The words &quot;except the State of Jammu and Kashmir&quot; omitted by Act 34 of 2019, s. 95 and the Fifth Schedule (w.e.f. 31-10-2019).
                      </p>
                    </div>
                  </div>

                  {/* Definition (e) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200">(e) &quot;competent authority&quot;</span> means—
                        </p>
                        <div className="ml-4 space-y-2">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(i)</span> the Speaker in the case of the House of the People or the Legislative Assembly of a State or a Union territory having such Assembly and the Chairman in the case of the Council of States or Legislative Council of a State;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(ii)</span> the Chief Justice of India in the case of the Supreme Court;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(iii)</span> the Chief Justice of the High Court in the case of a High Court;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(iv)</span> the President or the Governor, as the case may be, in the case of other authorities established or constituted by or under the Constitution;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(v)</span> the administrator appointed under article 239 of the Constitution;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Definition (f) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Info className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(f) &quot;information&quot;</span> means any material in any form, including records, documents, memos, e-mails, opinions, advices, press releases, circulars, orders, logbooks, contracts, reports, papers, samples, models, data material held in any electronic form and information relating to any private body which can be accessed by a public authority under any other law for the time being in force;
                      </p>
                    </div>
                  </div>

                  {/* Definition (g) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(g) &quot;prescribed&quot;</span> means prescribed by rules made under this Act by the appropriate Government or the competent authority, as the case may be;
                      </p>
                    </div>
                  </div>

                  {/* Definition (h) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200">(h) &quot;public authority&quot;</span> means any authority or body or institution of self- government established or constituted—
                        </p>
                        <div className="ml-4 space-y-2 mb-3">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(a)</span> by or under the Constitution;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(b)</span> by any other law made by Parliament;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(c)</span> by any other law made by State Legislature;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(d)</span> by notification issued or order made by the appropriate Government,
                          </p>
                        </div>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2">
                          and includes any—
                        </p>
                        <div className="ml-4 space-y-2">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(i)</span> body owned, controlled or substantially financed;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(ii)</span> non-Government organisation substantially financed,
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed ml-4">
                            directly or indirectly by funds provided by the appropriate Government;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Definition (i) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200">(i) &quot;record&quot;</span> includes—
                        </p>
                        <div className="ml-4 space-y-2">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(a)</span> any document, manuscript and file;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(b)</span> any microfilm, microfiche and facsimile copy of a document;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(c)</span> any reproduction of image or images embodied in such microfilm (whether enlarged or not); and
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(d)</span> any other material produced by a computer or any other device;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Definition (j) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Info className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200">(j) &quot;right to information&quot;</span> means the right to information accessible under this Act which is held by or under the control of any public authority and includes the right to—
                        </p>
                        <div className="ml-4 space-y-2">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(i)</span> inspection of work, documents, records;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(ii)</span> taking notes, extracts or certified copies of documents or records;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(iii)</span> taking certified samples of material;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-cyan-300">(iv)</span> obtaining information in the form of diskettes, floppies, tapes, video cassettes or in any other electronic mode or through printouts where such information is stored in a computer or in any other device;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Definition (k) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(k) &quot;State Information Commission&quot;</span> means the State Information Commission constituted under sub-section (1) of section 15;
                      </p>
                    </div>
                  </div>

                  {/* Definition (l) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(l) &quot;State Chief Information Commissioner&quot; and &quot;State Information Commissioner&quot;</span> mean the State Chief Information Commissioner and the State Information Commissioner appointed under sub-section (3) of section 15;
                      </p>
                    </div>
                  </div>

                  {/* Definition (m) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(m) &quot;State Public Information Officer&quot;</span> means the State Public Information Officer designated under sub-section (1) and includes a State Assistant Public Information Officer designated as such under sub-section (2) of section 5;
                      </p>
                    </div>
                  </div>

                  {/* Definition (n) */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-300" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200">(n) &quot;third party&quot;</span> means a person other than the citizen making a request for information and includes a public authority
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
              Right to Information Act 2005 - Chapter I
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

export default RTIAct2005Section2