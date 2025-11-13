'use client'
import React from 'react'

const GSRChapterPage81C = () => {
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
                  3.73. Passing of a gate Stop signal at ‘on’.—
                </h2>

                <div className="grid gap-5 lg:gap-6">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        (1) When a Loco Pilot finds a gate Stop signal at ‘on’, he shall sound the prescribed code of whistle and bring his train to a stop in rear of the signal.
                      </p>
                      <p>
                        (2) (a) If the gate Stop signal is provided with a ‘G’ marker, the Loco Pilot shall wait at the signal for one minute by day and two minutes by night, and if the signal is not taken ‘off’ within this period, he may draw his train ahead cautiously up to the level crossing and
                      </p>
                      <p>
                        (b) if the Gateman is available and exhibiting hand signals, proceed further past the gate cautiously or
                      </p>
                      <p>
                        (c) if the Gateman is not available or is available but not exhibiting hand signals, he shall stop short of the level crossing, where he shall then be hand signaled past the gate by the Gateman, if there is one or in the absence of a Gateman, by one of the members of the engine crew of the train after ascertaining that the gates are closed against the road traffic.
                      </p>
                      <p>
                        (3) If the Loco Pilot finds, after stopping at the signal, that there is no ‘G’ marker, he shall proceed further only in accordance with the procedure laid down under special instructions.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-indigo-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-cyan-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        S.R.3.73.1. If the Gateman is absent, the train shall be hand-signaled past the gate by one of the crew members of the train after ensuring that the gates are closed and locked against road traffic. Thereafter, the gate shall be re-opened for road traffic.
                      </p>
                      <p>
                        S.R.3.73.2. When the Gateman is not found at the gate, the Loco Pilot of the first train will stop out of course at the next station and report the absence of the Gateman to the Station Master.
                      </p>
                      <p>
                        S.R.3.73.3. When a level crossing is located between the Home signal and the Distant signal at a station equipped with manually operated multiple aspect signals, the gate-cum-Distant signal shall be located at a distance of not less than 180 metres in rear of the gate. This signal shall be provided with a ‘G’ marker. A gate Distant signal shall also be located at an adequate distance in rear of the gate-cum-Distant signal.
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

export default GSRChapterPage81C