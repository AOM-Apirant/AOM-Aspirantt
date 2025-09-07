"use client"
import React from 'react'

const AMChapaterPage104D = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CHAPTER IX</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              INVESTIGATION AND INQUIRIES
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section 911 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">911</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Method of conducting Joint / Inter Departmental Inquiries
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Sub-sections */}
                  <div className="space-y-4">
                    {/* Section a */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <span className="text-red-400 text-xl mt-1">📋</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-red-400/30">
                              <h4 className="text-lg font-bold text-red-300 mb-3 text-center">a) Inquiry Issues and Evidence</h4>
                            </div>
                            
                            <p className="text-gray-200 leading-relaxed">
                              Before starting the Inquiry, issues shall be framed and the evidence confined to these issues as far as possible. Witnesses shall not be permitted to make long irrelevant statements, but from the outset shall be asked questions relevant to the point of issue, after which their evidence, as recorded shall be read over to them and they shall be asked if they have anything to add. Witness shall be cross- examined and re-examined if necessary, to elicit important details.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section b */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-400 text-xl mt-1">📝</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/30">
                              <h4 className="text-lg font-bold text-blue-300 mb-3 text-center">b) Prior Statement Handling</h4>
                            </div>
                            
                            <p className="text-gray-200 leading-relaxed">
                              If a witness has given a statement prior to the Inquiry, that statement shall first be read over to him and recorded as his deposition. The witness shall also be specifically asked to state whether he has anything to depose in addition to, or in modification of that statement and his reply recorded and his signature obtained. Any further evidence on the part of such witness shall be the outcome of cross examination and no fresh independent statement shall be recorded. The questions put to the witness in the cross examinations and the answers therefore, shall be recorded then and there.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section c */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <span className="text-purple-400 text-xl mt-1">⚖️</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/30">
                              <h4 className="text-lg font-bold text-purple-300 mb-3 text-center">c) Rule Violation Awareness</h4>
                            </div>
                            
                            <p className="text-gray-200 leading-relaxed">
                              If a witness in his statement gives evidence of facts which have occurred and which are contrary to the rules and regulations and which render him culpable of neglect or violation of the rules and regulations, it shall be elicited from the witness, during his examination/cross examination whether he is aware that the facts stated by him are contrary to the rules and regulations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section d */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <span className="text-orange-400 text-xl mt-1">🔍</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-orange-400/30">
                              <h4 className="text-lg font-bold text-orange-300 mb-3 text-center">d) Comprehensive Investigation</h4>
                            </div>
                            
                            <p className="text-gray-200 leading-relaxed">
                              The Inquiry Officer or the Committee shall not be satisfied merely with the determination of the immediate cause or causes of the accident. It shall look for drawing out necessary evidence and ascertain the contributory factors, if any, which have led the staff to commit the breach of rules. It shall also go fully into the matter of the compelling circumstances, if any, which have a bearing on the accident. Contributory factors are such factors as an irregular and unauthorised method of working followed at the station, a general laxity in working having taken root at the station for want of proper supervision, etc., which have led to the breach of rules. Compelling circumstances are such circumstances as inadequacy of signalling and interlocking equipment or other safety devices such as key box, point indicator, etc., inadequacy or absence of communication equipment resulting in frequent trips on the part of the station staff over long distances, impossibility, especially at peak periods, of carrying out all the operations and duties laid down for the staff, absence of the minimum staff required to perform all the duties, impracticability of complying with Station Working Rules, staff working overtime for want of timely relief, etc. Considerable care shall be exercised in assessing the compelling circumstances. The standard considered desirable shall be co-related to the work load at the station and shall be compared to the standards obtainable at other similar stations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section e */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <span className="text-pink-400 text-xl mt-1">💡</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/30">
                              <h4 className="text-lg font-bold text-pink-300 mb-3 text-center">e) Matters Brought to Light</h4>
                            </div>
                            
                            <p className="text-gray-200 leading-relaxed">
                              The Inquiry Officer or the committee shall also note &quot;matters brought to light&quot; in the course of the Inquiry, which though not having a direct bearing on the accident may lead to accidents in future.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section f */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <span className="text-teal-400 text-xl mt-1">👥</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-teal-400/30">
                              <h4 className="text-lg font-bold text-teal-300 mb-3 text-center">f) Joint Inquiry Participation</h4>
                            </div>
                            
                            <p className="text-gray-200 leading-relaxed">
                              In the case of a Joint Inquiry, it is not necessary for the members of the Magistracy and the Police to attend the deliberations in regard to the finding or to sign the Joint Inquiry proceedings, but they may ask any questions while the examination of witnesses is going on and the answer given to such questions may be recorded as part of the proceedings.
                            </p>
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

export default AMChapaterPage104D
