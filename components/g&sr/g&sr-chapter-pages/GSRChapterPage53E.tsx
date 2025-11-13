'use client'
import React from 'react'

const GSRChapterPage53E = () => {
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
                        3.48
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold tracking-wide bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards]">
              Stoppage of trains out of course at stations provided with two aspect signalling.—
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-5 lg:p-10 space-y-6">
                <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide whitespace-pre-line">
                    {`3.48. Stoppage of trains out of course at stations provided with two aspect
signalling.—
When a train which is booked to run through has to be stopped out of course
at a station equipped with two aspect signals, it shall not be received until (a) at stations provided with working Warners but not provided with
Starters, the working Warner is kept at 'on',
(b) at stations provided with Starters but not provided with working
Warners, the relevant Starter is kept at 'on',
(c) at stations provided with both working Warners and Starters, both the
signals are kept at 'on', and
(d) at stations provided with neither a working Warner nor a Starter, the
first Stop signal is kept at 'on', and the train brought to a stand
outside it.
SR 3.48. For all the purposes, in this connection, goods trains should be considered as
through goods trains and this rule should be applied accordingly since with the introduction of
air brake operation, and with intensive BPC with the validity for 7500 Kilo Metres or 30 days
whichever is earlier, sectional goods trains have been abolished.`}
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

export default GSRChapterPage53E