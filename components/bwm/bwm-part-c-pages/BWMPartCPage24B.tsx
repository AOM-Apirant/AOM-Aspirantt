"use client"
import React from 'react'

const BWMPartCPage24B: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Acceptance and Sending of Line Clear Signal
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 3.7 Section */}
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">3.7. Acceptance of the &apos;Is line clear&apos; signal and sending of &apos;Line clear&apos; signal:</h3>
                    
                    <div className="space-y-4">
                      {/* Section a */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-yellow-300 font-semibold">a)</span> If, on receipt of <span className="text-green-300 font-semibold">&apos;Is line clear&apos;</span> signal the conditions under which <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> can be given are complied with, the <span className="text-blue-300 font-semibold">block station</span> in advance shall accept the signal by sending the prescribed signal to indicate <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> on the particular <span className="text-green-300 font-semibold">block instrument</span> in use.
                        </p>
                      </div>

                      {/* Section b */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-yellow-300 font-semibold">b)</span> Except in case of failure of the <span className="text-green-300 font-semibold">block instruments</span>, a train shall not be allowed to leave a <span className="text-blue-300 font-semibold">block station</span> unless the instrument for the <span className="text-green-300 font-semibold">block section</span> into which it is about to proceed shows <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span>.
                        </p>
                      </div>

                      {/* Section c */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                          <span className="text-yellow-300 font-semibold">c)</span> After observing the precautions laid down in para <span className="text-yellow-300 font-semibold">3.6</span>, if <span className="text-green-300 font-semibold">&apos;Y&apos;</span> is ready to receive the train, <span className="text-green-300 font-semibold">&apos;Y&apos;</span> will keep the <span className="text-green-300 font-semibold">bell plunger</span> pressed on the last beat and turn the <span className="text-green-300 font-semibold">operating handle</span> to <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> position. He will then release the <span className="text-green-300 font-semibold">bell plunger</span> to normal. The action of <span className="text-green-300 font-semibold">&apos;Y&apos;</span> turning the <span className="text-green-300 font-semibold">operating handle</span> to <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> position on the instrument will bring about the following:
                        </p>
                        <div className="space-y-2 ml-4">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">i)</span> <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> will be indicated on the <span className="text-green-300 font-semibold">TCF dial</span> of <span className="text-green-300 font-semibold">Y&apos;s block instrument</span>.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">ii)</span> <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> will be indicated on the <span className="text-green-300 font-semibold">TGT dial</span> of <span className="text-green-300 font-semibold">X&apos;s block instrument</span>, and
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">iii)</span> Lock on <span className="text-blue-300 font-semibold">Last Stop Signal</span> of <span className="text-green-300 font-semibold">&apos;X&apos;</span> will be released.
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

export default BWMPartCPage24B