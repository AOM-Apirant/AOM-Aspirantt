"use client"
import React from 'react'

const BWMAnnexureOnePage6C: React.FC = () => {
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
          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* Main Section */}
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">3.0 Operations of Block Panel:</h4>
                    
                    <div className="space-y-6">
                      {/* Section 3.1 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-3">3.1 Method of Signaling Trains from Block Station to Block Station on an UP/DN line in a Double Line section.</p>
                        
                        <div className="space-y-4">
                          {/* Point a */}
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-yellow-300 font-semibold mb-2">a)</p>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              SM of the station intending to send a train from his station has to obtain verbal consent on block telephone or alternate means from station in advance before taking LINE CLEAR on its Block Panel. Entries of train no. to be made in registers of both stations.
                            </p>
                          </div>

                          {/* Point b */}
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-yellow-300 font-semibold mb-2">b)</p>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                              Before a request for IS LINE CLEAR is sent to station in advance, SM of sending station shall ensure the following near TRAIN GOING TO arrowhead on its Block Panel;
                            </p>
                            <div className="ml-4 space-y-2">
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">i) LINE CLOSED indication YELLOW &</p>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">ii) LINE FREE indication GREEN &</p>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">iii) SNK indication YELLOW.</p>
                            </div>
                          </div>

                          {/* Point c */}
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-yellow-300 font-semibold mb-2">c)</p>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                              The station in advance while granting his verbal consent shall ensure the following near TRAIN COMING FROM arrowhead on its Block Panel;
                            </p>
                            <div className="ml-4 space-y-2">
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">i) LINE CLOSED indication YELLOW &</p>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">ii) LINE FREE indication GREEN &</p>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">iii) SNK indication YELLOW &</p>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">iv) SNOEK indication YELLOW</p>
                            </div>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed mt-3">
                              Then inserts and turns LCB key.
                            </p>
                          </div>

                          {/* Point d */}
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-yellow-300 font-semibold mb-2">d)</p>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              Thereafter SM of sending station presses BELL & TRAIN GOING TO buttons.
                            </p>
                          </div>

                          {/* Point e */}
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-yellow-300 font-semibold mb-2">e)</p>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              The arrowhead, TRAIN GOING TO TRAIN COMING FROM lights up green at sending/receiving station respectively.
                            </p>
                          </div>

                          {/* Point f */}
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-yellow-300 font-semibold mb-2">f)</p>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              SM of sending station releases BELL & TRAIN GOING TO buttons on getting TRAIN GOING TO green indication.
                            </p>
                          </div>

                          {/* Point g */}
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-yellow-300 font-semibold mb-2">g)</p>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              The sending station SM after obtaining LINE CLEAR on its Block Panel can send the train into Block Section by taking the LSS to &apos;OFF&apos;. On entry of train into section, TRAIN ON LINE lights up RED at both the stations in arrowhead indication. SECTION buzzer sounds at both the stations along with ACKN indication near respective ACKN button. Pressing of ACKN button of concerned line (Despatch/Receive) will turn off the buzzer and ACKN indication.
                            </p>
                          </div>

                          {/* Point h */}
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-yellow-300 font-semibold mb-2">h)</p>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              The train is received at receiving station on proper reception signals. On complete arrival of train, TRAIN GOING TO TRAIN COMING FROM arrowhead indication turns to FLASHING GREEN & LINE FREE indication turns to GREEN at both the stations. TRAIN GOING TO TRAIN COMING FROM arrowhead indication continues FLASHING GREEN at sending/receiving station respectively till reception & departure signals and their controls are not at normal or LCB Key is not &apos;IN&apos;. In case reception & departure signals and their controls are at normal & LCB key is IN, TRAIN GOING TO TRAIN COMING FROM arrowhead indication turns off and LINE CLOSED indication lights up YELLOW.
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

export default BWMAnnexureOnePage6C