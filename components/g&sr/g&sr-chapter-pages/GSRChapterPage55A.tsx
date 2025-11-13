'use client'
import React from 'react'

const GSRChapterPage55A = () => {
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
                        3.50
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold tracking-wide bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards]">
              Traps, slip sidings and catch sidings.—
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-5 lg:p-10 space-y-6">
                <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide whitespace-pre-line">
                    {`3.50. Traps, slip sidings and catch sidings.—
The Station Master shall take steps to ensure that the points of all traps, slip
sidings and catch sidings and other points are set against the line which they
are intended to isolate, except when it is not necessary that they should be
open for the purpose of isolation.
SR 3.50.1. Traps on siding (which may be Scotch Block, Derail, Derailing Switch or Trap
Switch) are intended to derail vehicles, which escape from the sidings. Except when
required to be taken away from the line or reversed for the passage of trains or vehicles, the
Traps shall normally be kept as under :-
1. Scotch Blocks and Derails shall be kept locked in position on the rail.
2. Derailing switches shall be kept locked in the open position; and
3. Trap switches shall be set against the running line and locked in that position. The
staff in possession of the keys of the traps shall be held responsible for carrying out
these instructions.
SR 3.50.2. Trap indicators are used to indicate the position of derailing switches or derails,
protecting the siding or running line. They show a red target by day and a red light by night
in both the directions, when the derailing switch is open or the derail is on the rail, and the
knife edge of the disc by day and a green light in both directions by night when the derailing
switch is closed or derail is off the rail. Points leading to a short dead-end and used solely
for the purpose of trapping the running line or sidings shall be treated as derailing switches.
SR 3.50.3. Slip sidings and Catch sidings:
1. Slip sidings are intended to prevent vehicles at stations from escaping on to the main
line. On no account shall slip sidings be used for shunting purposes. Stabling of
vehicles on slip siding is prohibited.
2. Catch sidings/Kopcke sidings are intended to catch vehicles which have escaped
from the adjacent station or trains or parted portions of train coming out of control
from the adjacent block section. On no account shall vehicle be shunted/stabled on
the catch/Kopcke sidings.
Note: - Kopcke sidings are catch sidings of another design and serve the same
purpose.
3. Except when expressly opened for the passage of trains in the facing direction, the
points of the slip sidings and the catch/Kopcke sidings shall be kept set for these
sidings normally and the keys of such points, if any, shall be kept in the safe custody
of the Station Master. The rules incorporated in the Station Working Rules with regard
to the operation of these points shall be strictly observed.`}
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

export default GSRChapterPage55A