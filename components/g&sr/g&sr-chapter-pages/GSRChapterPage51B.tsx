'use client'
import React from 'react'

const GSRChapterPage51B = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-[pulse-slow_6s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-[pulse-slow_7s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-[pulse-slow_5.5s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-gradient-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-gradient-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <span className="lg:text-2xl text-xl font-bold tracking-wide text-white/85">
                        3.40
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold tracking-wide bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards]">
              Conditions for taking ‘off’ Home signal.—
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-5 lg:p-10 space-y-6">
                <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide whitespace-pre-line">
                    {`3.40. Conditions for taking ‘off’ Home signal.—
(1)When a train is approaching a Home signal otherwise than at a
terminal station, the signal shall not be taken ‘off’ until the train has
first been brought to a stand outside it, unlessa)
on a double line, the line is clear for an adequate distance beyond
the Starter or
b) on a single line, line is clear for an adequate distance beyond the
trailing points, or for an adequate distance beyond the place at
which the train is required to come to a stand.
(2) Where a train has first been brought to a stand outside the Home
signal, the signal may be taken ‘off’, ifa)
on a double line, the line is clear up to the Starter, or
b) on a single line, the line is clear up to the trailing points or under
approved special instructions up to the place at which the train is
required to come to a stand.
(3) Except under approved special instructions, the adequate distance
referred to in sub-rule (1) shall never be less thana)
180 metres at stations equipped with two-aspect lower quadrant or
two-aspect colour light signals, or
b) 120 metres in the case of stations provided with multiple-aspect
signals or modified lower quadrant signals.
(4)Where a sand hump of approved design, or under approved special
instructions a derailing switch, has been provided for the line on
which a train is to be received, they shall be deemed to be efficient
substitutes for the adequate distance referred to in sub-rule (3).
S.R.3.40.1. The adequate distance for taking ‘off’ signals shall be specified in the Station
Working Rules of the stations concerned and when the approval of the CRS has been
obtained in terms of Rule 3.40 (1) (b) and (4), this shall also be indicated in the Station
Working Rules.
S.R.3.40.2. Whenever a stopping train is to be received on a line not provided with track
circuit or axle counter, Station Master shall ensure personally that the nominated line is clear
of vehicles not only up to berthing place but also for an adequate distance beyond it.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default GSRChapterPage51B