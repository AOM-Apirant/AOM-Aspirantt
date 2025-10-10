"use client"
import React from 'react'

const BWMPartCPage10: React.FC = () => {
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
              Precedence of Trains
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 2.6 Section */}
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">2.6. Precedence of trains:</h3>
                    
                    <div className="space-y-4">
                      {/* Section a */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-yellow-300 font-semibold">a)</span> On <span className="text-green-300 font-semibold">controlled sections</span>, trains shall be worked strictly in accordance with the orders of the <span className="text-blue-300 font-semibold">control</span>.
                        </p>
                      </div>

                      {/* Section b */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                          <span className="text-yellow-300 font-semibold">b)</span> On <span className="text-green-300 font-semibold">non-controlled sections</span> or in the event of breakdown of <span className="text-blue-300 font-semibold">control</span>, the trains shall be given precedence over each other in the following order:
                        </p>
                        <div className="space-y-2 ml-4">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">1st</span> - Relief trains or light engines proceeding to the accident spot.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">2nd</span> - Postal Specials.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">3rd</span> - Mail/Express trains. <span className="text-yellow-300 font-semibold">4th</span> - Troop trains.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">5th</span> - Passenger trains, including Rail cars.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">6th</span> - Specials engaged by Public.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">7th</span> -Inspection trains, whether working on time table or not and light engines when not going to an accident spot.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">8th</span> - Mixed trains.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">9th</span> - Parcel trains.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">10th</span> – Relief trains returning from accident spot. (If with injured passengers higher priority shall be given)
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">11th</span> - Fast through goods trains.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">12th</span> - Work trains/Road Goods trains/Empty passenger stock trains. <span className="text-yellow-300 font-semibold">13th</span> - Material trains.
                          </p>
                        </div>
                      </div>

                      {/* Section c */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-yellow-300 font-semibold">(c)</span> If owing to the irregular running of trains, two or more trains are ready to start from the same end of a <span className="text-green-300 font-semibold">block section</span>, preference shall be given to the trains standing higher in the <span className="text-green-300 font-semibold">table of precedence</span>. If both trains have the same order of precedence, preference shall be given to the one having the greater distance to run.
                        </p>
                      </div>

                      {/* Section d */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                          <span className="text-yellow-300 font-semibold">(d)</span> In order to avoid excessive detention to trains of lesser importance:
                        </p>
                        <div className="space-y-2 ml-4">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">i)</span> A <span className="text-blue-300 font-semibold">Mail or Express train</span> running less than <span className="text-yellow-300 font-semibold">ten minutes</span> late may be detained up to a total of <span className="text-yellow-300 font-semibold">ten minutes</span> in order to save a delay of <span className="text-yellow-300 font-semibold">thirty minutes</span> or more to a <span className="text-blue-300 font-semibold">passenger train</span> or <span className="text-yellow-300 font-semibold">forty five minutes</span> to a <span className="text-blue-300 font-semibold">goods train</span>.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">ii)</span> A <span className="text-blue-300 font-semibold">passenger train</span> running less than <span className="text-yellow-300 font-semibold">ten minutes</span> late may be detained up to a total of <span className="text-yellow-300 font-semibold">ten minutes</span> in order to avoid a delay of <span className="text-yellow-300 font-semibold">thirty minutes</span> or more to a <span className="text-blue-300 font-semibold">goods train</span>.
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

export default BWMPartCPage10