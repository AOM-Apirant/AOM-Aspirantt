"use client"
import React from 'react'

const BWMPartAPage40B: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER VII
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">TESTING OF BLOCK INSTRUMENTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                <div className="text-center mb-8">
                  <h5 className="lg:text-2xl text-xl font-bold text-blue-300 mb-4">7.7. Balancing of tokens in Token Instruments:</h5>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">a)</span> The Station Master shall record in the remarks column of the Train Signal Register, the total number of tokens relating to each block instrument, after insertion or extraction of a token into or from the block instrument.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">b)</span> At &apos;O&apos; hour daily, the Station Masters at either end of the block section shall check the balance of tokens in their block instruments. The number should tally with the total numbers of tokens provided for the block section.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">c)</span> The Station Masters shall advise the concerned Signal Inspector when token balance in the block instrument falls to &apos;six&apos; and is expected to be exhausted. The S&T official shall proceed by first available means to balance the tokens.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">d)</span> An entry in red ink shall be made in the Train Signal Register showing the number of tokens removed or inserted. This entry shall be signed by the Signal Inspector or the authorised official and the Station Master.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">e)</span> While balancing, the token should be taken out in the &apos;Line closed&apos; position.
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

export default BWMPartAPage40B