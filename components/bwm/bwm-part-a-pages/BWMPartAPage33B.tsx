"use client"
import React from 'react'

const BWMPartAPage33B: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              5.8
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">&apos;Train divided&apos; signal</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                <div>
                  <p>
                    <span className="font-semibold text-blue-300">a)</span> If during the passage of a train through the station &apos;X&apos;, it is observed that some portion of the train is missing, &apos;X&apos; shall not exhibit a stop hand signal but shall endeavor to attract the attention of the Driver or the Guard by shouting and gesticulating or by other means. The station &apos;X&apos; shall send the &apos;Train Divided&apos; signal to the station &apos;W&apos; in rear and &apos;Train passed without tail lamp/flashing tail lamp or tail board&apos; signal to the station &apos;Y&apos; in advance. The Station Master at W receiving the &apos;Train divided&apos; signal shall immediately take action to safeguard vehicles or train on the line especially if the gradient is a falling one. He shall not give &apos;Line clear&apos; for a following train and if a train is already in the block section, he shall stop it at the First Stop Signal and inform the Driver of the impending danger. If this train can be received and berthed on a line, this can be done before the run away vehicles are sighted and it is safe to do so.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">b)</span> If parting has occurred, a relief engine shall be sent only after a lapse of thirty minutes more than the running time of the slowest speed goods train, which has to be calculated from the time of the receipt of the &apos;Train Divided&apos; signal.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">c)</span> After the block section is cleared, the &apos;Train out of block section&apos; or &apos;Obstruction removed&apos; signal shall be sent.
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

export default BWMPartAPage33B