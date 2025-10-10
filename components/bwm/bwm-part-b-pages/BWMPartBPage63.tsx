"use client"
import React from 'react'

const BWMPartBPage63: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Vehicles Running Away
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold text-indigo-300 mb-4">Emergency Procedures for Runaway Vehicles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">5.10. &apos;Vehicles running away into the block section&apos; signal:</h3>
                    
                    <div className="space-y-4">
                      {/* Section a */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-blue-200 font-bold lg:text-xl text-lg mb-3">
                          <span className="text-yellow-300">a)</span> Signal Sending and Relief Engine Timing
                        </h4>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                          If an engine or vehicles have escaped and be running away into <span className="text-green-300 font-semibold">&apos;X&apos;</span>-<span className="text-green-300 font-semibold">&apos;Y&apos;</span> block section, the Station Master at <span className="text-green-300 font-semibold">&apos;X&apos;</span> shall send <span className="text-red-400 font-semibold">&apos;Vehicles running away into the block section&apos;</span> signal to the station <span className="text-green-300 font-semibold">&apos;Y&apos;</span> and the Station Master shall acknowledge it by repeating it and take positive measures and no train shall be allowed to enter the block section from either end, until information is received that the engine or vehicles have been brought back to the station <span className="text-green-300 font-semibold">&apos;X&apos;</span>. A relief engine should be sent, if the engine or vehicles running away have not arrived even after a lapse of <span className="text-yellow-300 font-semibold">30 minutes</span> more than the running time of the slowest speed goods train, which has to be calculated from the time of the receipt of the <span className="text-red-400 font-semibold">&apos;Vehicles running away into the block section&apos;</span> signal.
                        </p>
                        
                        <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
                          <p className="text-yellow-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-bold text-yellow-300">Note:</span> If the vehicles contain passengers, <span className="text-green-300 font-semibold">&apos;X&apos;</span> shall also specifically convey this information to <span className="text-green-300 font-semibold">&apos;Y&apos;</span> on block telephone.
                          </p>
                        </div>
                      </div>

                      {/* Section b */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-blue-200 font-bold lg:text-xl text-lg mb-3">
                          <span className="text-yellow-300">b)</span> Receiving Station Action
                        </h4>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          On receipt of the <span className="text-red-400 font-semibold">&apos;Vehicles running away into the block section&apos;</span> signal from station <span className="text-green-300 font-semibold">&apos;X&apos;</span>, the Station Master at <span className="text-green-300 font-semibold">&apos;Y&apos;</span> shall acknowledge it by repeating the signal, stop any train about to enter into the <span className="text-green-300 font-semibold">&apos;Y&apos;</span>-<span className="text-green-300 font-semibold">&apos;X&apos;</span> block section and take such protective measures as may be considered expedient under the circumstances to prevent an accident.
                        </p>
                      </div>

                      {/* Section c */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-blue-200 font-bold lg:text-xl text-lg mb-3">
                          <span className="text-yellow-300">c)</span> Stopping Runaway Vehicles on Falling Gradient
                        </h4>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          If his station is on a gradient falling in the direction of the next station towards which the engine or vehicles are running, or if a train is approaching his station from the next station in that direction, whether there is falling gradient or not, he shall do all in his power to stop the run-away vehicles. This shall be done by covering the rails heavily with sand, earth or small broken stones, for as great a distance as possible, before the vehicles come in sight and the points shall be set for a through loop or dead-end siding to receive the vehicles. In case it is not stopped by the obstruction on the rails, the trailing points of such loop shall be set and locked to force the vehicle to trail through them. It is preferable to receive the run away vehicles on a loop line than receiving them on a deadend siding.
                        </p>
                      </div>

                      {/* Section d */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-blue-200 font-bold lg:text-xl text-lg mb-3">
                          <span className="text-yellow-300">d)</span> Allowing Vehicles to Run Through
                        </h4>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          If no train is approaching with which the vehicle can collide and the line is not on a falling grade, the vehicles may be allowed to run through the station but a warning shall be sent promptly to the Station Master at the next station.
                        </p>
                      </div>

                      {/* Section e */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-blue-200 font-bold lg:text-xl text-lg mb-3">
                          <span className="text-yellow-300">e)</span> Vehicles Containing Passengers or Railway Servants
                        </h4>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          If the vehicles contain passengers or railway servants, it shall not ordinarily be turned out into a dead-end siding, unless for the purpose of avoiding a more serious accident.
                        </p>
                      </div>

                      {/* Section f */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-blue-200 font-bold lg:text-xl text-lg mb-3">
                          <span className="text-yellow-300">f)</span> Resuming Normal Working
                        </h4>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          When the obstruction has been removed and the block section is clear <span className="text-yellow-300 font-semibold">&apos;Line closed&apos;</span> push button shall be operated for resuming normal working in case of push button block instruments and <span className="text-blue-300 font-semibold">&apos;Train out of block section&apos;</span> signal in case of handle type tokenless block instruments.
                        </p>
                      </div>

                      {/* Section g */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-blue-200 font-bold lg:text-xl text-lg mb-3">
                          <span className="text-yellow-300">g)</span> Controller Notification
                        </h4>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          On controlled sections, the Controller shall also be advised immediately.
                        </p>
                      </div>
                    </div>

                  </div>
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

export default BWMPartBPage63
