'use client'
import React from 'react'

const GSRChapterPage75C = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative p-4 lg:p-10">
              <div className="absolute -top-14 -left-14 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative space-y-6 text-blue-100/90 leading-relaxed text-base lg:text-lg">
                <h2 className="text-xl lg:text-3xl font-semibold text-white/90 tracking-wide">
                  3.67. Knowledge and possession of warning signals.—
                </h2>
                <div className="space-y-5">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        (1)(a) All concerned railway servants on whom this duty is laid by the Railway Administration shall keep a stock of such signal as may be prescribed by special instructions under rule 3.65;
                      </p>
                      <p>
                        (b) The Railway Administration shall be responsible for the supply, renewal and safe custody of such signals as may be prescribed by special instructions under rule 3.65 and for ensuring that their use is properly understood;
                      </p>
                      <p>
                        (c) The Railway Administration shall supply every Guard, Loco Pilot, Patrolman and Gateman working on the Double or Multiple line, Ghat, Suburban or Automatic Block Territories with such signal as may be prescribed by special instructions under rule 3.65;
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-indigo-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-cyan-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        (2) Every railway servant concerned with the use of signals as prescribed by special instructions under rule 3.65, shall have a correct knowledge of their use and keep them ready for immediate use.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-purple-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        (3)Every railway servant shall see that the railway servants in his charge concerned with the use of warning signals as prescribed by special instructions under rule 3.65 have a correct knowledge of their use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default GSRChapterPage75C