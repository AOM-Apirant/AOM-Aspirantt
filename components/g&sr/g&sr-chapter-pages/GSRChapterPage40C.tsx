import React from "react"

const GSRChapterPage40C = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-[pulse-slow_6s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-[pulse-slow_7s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-[pulse-slow_5.5s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-gradient-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-gradient-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <span className="lg:text-2xl text-xl font-bold tracking-wide text-white/85">
                        3.23
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold tracking-wide bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards]">
              Electric repeater.—
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-5 lg:p-10 space-y-6">
                <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide whitespace-pre-line">
                    3.23. Electric repeater.—
The arm and light of any fixed signal which cannot be seen from the place from
which the signal is worked shall be repeated to such place by means of an
efficient electric repeater.
                  </p>
                </div>

                <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide whitespace-pre-line">
                    SR 3.23.1.Miniature Signal repeaters are provided on Station Master’s Control Panels/VDUs
to repeat the aspect displayed by each signal.
                  </p>
                </div>

                <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide whitespace-pre-line">
                    3.23.2. Responsibility of Station Master regarding failure and restoration of repeater:
(1) At stations, where signal repeaters are provided, the Station Master shall satisfy
himself by observing indications of the repeaters that the signals are working
properly. Whenever any signal repeater is not in working order, the relevant fixed
signal need not be treated as defective, if it is possible for the Station Master to
observe personally the position of the signal by proceeding to a convenient place
outside his office from where it can be seen. If it is not possible for the Station Master
to personally ensure that the signal is in the correct position by proceeding to a
convenient place outside his office, at stations provided with cabins at either ends of
the yard, the Station Master at the station shall ascertain from the Station Master of
the cabin concerned that the signal is working properly and exchange Private
Numbers.
(2) Whenever the miniature light repeater in the colour light signaling territory is found to
be defective and the signal light aspect is not visible from the station / cabin, the
signal which it repeats shall be treated as defective and not taken ‘off’ for any train
and action taken in accordance with Rule 3.68 to 3.72 and the Subsidiary Rules there
under until it is rectified by the authorized official of the S&T department.
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

export default GSRChapterPage40C
