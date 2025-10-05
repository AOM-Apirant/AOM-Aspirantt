"use client"
import React from 'react'

const BWMPartAPage55A: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER VIII
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">FAILURE OF TOKEN BLOCK INSTRUMENTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                <div className="text-center mb-8">
                  <h5 className="lg:text-lg text-base font-bold text-blue-300 mb-4">8.10. Resumption of block working after interruption or suspension:</h5>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      <span className="font-semibold text-blue-300">a)</span>
                    </p>
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20 ml-6 space-y-4">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold text-blue-300">i)</span> When the block working has been suspended under items (g), (k), (v), (x) and (y) of para 8.1, block working may be resumed by the Station Masters themselves on the conditions laid down in the note under each item being fulfilled and in case of items (x) and (y) of para 8.1 after exchanging messages.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold text-blue-300">ii)</span> When the block working has been suspended under any of the other items except those mentioned in clause (a) above, the block working shall not be resumed by the Station Masters themselves until the instruments have been tested and certified by the Signal Inspector or any other authorised official and the messages exchanged.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold text-blue-300">iii)</span> In case of failures falling under items (r), (t) and (v) of para 8.1, the DSTE/ADSTE shall also be advised by first available means. The affected block instruments at both the stations shall not be handled by the Station Masters concerned until the instruments have been examined by the DSTE/ADSTE personally. The SIs are not authorised to open the instruments in such cases.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">b)</span> Before resuming block working, the Station Masters at &apos;X&apos; and &apos;Y&apos; shall satisfy themselves that the Block Section is clear by exchanging messages, giving the time of arrival and departure of the last train at &apos;X&apos; and &apos;Y&apos;.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">c)</span> When the block working is resumed, the Station Masters at &apos;X&apos; and &apos;Y&apos; shall advise each other, Signal Inspector and SCOR.
                    </p>
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

export default BWMPartAPage55A