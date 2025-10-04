"use client"
import React from 'react'

const BWMPartAPage33A: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              5.7
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">&apos;Train passed without tail lamp / flashing tail lamp or tail board&apos; signal (G.R. 4.17)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                <div>
                  <p>
                    <span className="font-semibold text-blue-300">a)</span> If the Station Master at &apos;X&apos; observes a train passing his station without a tail lamp/flashing tail lamp or tail board, as the case may be, he should send the &apos;Train passed without tail lamp / flashing tail lamp or tail board&apos; signal to the station &apos;Y&apos;. The Station Master at &apos;X&apos; shall not give the &apos;Train out of block section&apos; signal to the station in rear, till he receives the complete arrival report of the train from the station &apos;Y&apos;. If &apos;X&apos; suspects parting of train he shall also send the &apos;Train Divided&apos; signal and act in accordance with para 5.8. The Station Master at &apos;Y&apos; receiving the signal should stop the train even if it is not booked to stop and examine it. If on inspection only the tail board is missing or the tail lamp / flashing tail lamp is extinguished, the same shall be rectified and thereupon the &apos;train out of block section&apos; signal shall be sent.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">b)</span> If the Station Master at &apos;Y&apos; on examination, finds any portion of the train missing, the occurrence shall be reported as an accident and Station Masters at &apos;W&apos;, &apos;X&apos; and &apos;Y&apos; shall take necessary action thereon.
                  </p>
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

export default BWMPartAPage33A