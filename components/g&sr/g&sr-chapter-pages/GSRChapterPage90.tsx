'use client'
import React from 'react'

const GSRChapterPage90 = () => {
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
                  3.85. Reporting of defects in signals.—
                </h2>

                <div className="grid gap-5 lg:gap-6">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        (1) Should a Loco Pilot or a Guard observe that a signal is rendered imperfectly visible by branches of trees or by any other cause, or that a signal light is partially obscured or not burning brightly enough to give a clear aspect, he shall report the matter to the Station Master at the next station at which the train stops.
                      </p>
                      <p>
                        (2) When such a report is made by a Loco Pilot or a Guard, the Station Master shall take immediate steps to advise the Station Master concerned who shall get it rectified.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-indigo-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-cyan-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <p>
                        SR.3.85.
                      </p>
                      <p>
                        (1) A register to record observations of Loco Pilot during his run must be maintained in all lobbies. The observations recorded by Loco should be conveyed to Traction / Power Controller under exchange of private numbers. The Traction/Power Controller should, in turn, convey these observations to their respective counterparts of concerned departments under clear acknowledgement.
                      </p>
                      <p>
                        The observations of the Loco Pilot as conveyed by the Traction/ Power Controller to the respective counterparts of the concerned department should be invariably recorded in the register maintained for this purpose;
                      </p>
                      <p>
                        OR
                      </p>
                      <p>
                        While signing off, observations of Loco Pilot during his run should be recorded in CMS. This information in turn should be conveyed to Test Room/Engineering Controller/CTL through CMS. In turn, the Loco Pilot‘s observations should be conveyed to concerned supervisor by respective Controller. After rectification or attention of the defects, deficiencies or observations recorded by the Loco Pilot, concerned Controller should send information to lobby through CMS. CC should acknowledge the feedback in CMS and send an automated SMS to concerned Loco Pilot through CMS.
                      </p>
                      <p>
                        (2) Follow-up action taken should be recorded within 24 hours, which should be monitored by the Divisional officers as well as Divisional Safety Officer. Disciplinary action should be initiated against the concerned supervisor in case the same defect surfaces within the next 72 hours.
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

export default GSRChapterPage90