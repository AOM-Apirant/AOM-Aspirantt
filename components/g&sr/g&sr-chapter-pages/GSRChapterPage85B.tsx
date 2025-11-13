'use client'
import React from 'react'

const GSRChapterPage85B = () => {
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
                  3.77. Defective or damaged points etc.—
                </h2>

                <div className="grid gap-5 lg:gap-6">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        (1)Whenever points, crossings or guard rails are defective or damaged, the railway servant in charge of operation of points shall protect them and immediately arrange to report the circumstances to the Station Master.
                      </p>
                      <p>
                        (2) The Station Master, on becoming aware of such defective or damaged points etc., shall -
                      </p>
                      <p>
                        (a) immediately arrange to have the defect rectified by the railway servant responsible for their maintenance,
                      </p>
                      <p>
                        (b) arrange to ensure the safe passage of trains, and
                      </p>
                      <p>
                        (c) keep the signal or signals concerned at ‘on’ until the defect is rectified.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-indigo-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-cyan-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        S.R.3.77.1. The railway servant noticing any damage to points shall immediately attract the attention of the Station Master by waving a Stop hand signal and also show Stop hand signal towards any approaching train. He shall not leave the points unless necessary precautions have been taken by the Station Master for any movement over such points.
                      </p>
                      <p>
                        S.R.3.77.2. Whenever a train trails through wrongly set points, the Loco Pilot shall, immediately bring his train to a stand, consult the Guard and the Station Master and then proceed onward only if he is satisfied that the train can pass safely over the points without any accident. Under no circumstances should a train be backed over the trailed through points.
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

export default GSRChapterPage85B