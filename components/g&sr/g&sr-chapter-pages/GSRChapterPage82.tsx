'use client'
import React from 'react'

const GSRChapterPage82 = () => {
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
                  3.74. Absence of a fixed signal or a signal without a light.—
                </h2>

                <div className="grid gap-5 lg:gap-6">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        (1) (a) If there is no fixed signal at a place where a fixed signal is ordinarily shown, or
                      </p>
                      <p>
                        (b) if the light of a signal is not burning when it should, or
                      </p>
                      <p>
                        (c) if a white light is shown in place of a colour light, or
                      </p>
                      <p>
                        (d) if the aspect of a signal is misleading or imperfectly shown, or
                      </p>
                      <p>
                        (e) if more than one aspect is displayed, the Loco Pilot shall act as if the signal was showing its most restrictive aspect,
                      </p>
                      <p>
                        provided that, during night in the case of a semaphore Stop signal for approaching trains only, if the Loco Pilot finds the signal light extinguished, he shall bring his train to a stop at such signal. If he finds that the day aspect of such signal is clearly visible and is satisfied that the signal is in the ‘off’ position, he shall proceed past it up to the station cautiously at a restricted speed obeying all intermediate Stop signals, if any, relating to him and report the matter to the Station Master for necessary action.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-indigo-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-cyan-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        (2) At stations equipped with a colour light signal provided with a ‘P’ marker, the Loco Pilot shall bring his train to a stand if it does not show any light or shows an imperfect aspect and having satisfied himself that the signal is provided with a ‘P’ marker, shall proceed preparing to stop at the next Stop signal and shall be guided further by its aspect.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-purple-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        S.R.3.74 When a Loco Pilot comes across a signal which is flickering / bobbing, he should consider that signal to be showing the most restrictive aspect and bring his train to a stop short of it. If the signal assumes a steady aspect and remains steady for 60 seconds, he should take further action according to the steady aspect shown. If, however, the signal continues to flicker/bob and does not assume a steady aspect for 60 seconds, he should treat the signal as defective and take further action accordingly. If the signal shows more than one aspect simultaneously, it should also be treated as defective in case of a manual Stop signal. However, in case of an automatic signal showing more than one aspect simultaneously, the most restrictive aspect should be obeyed.
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

export default GSRChapterPage82