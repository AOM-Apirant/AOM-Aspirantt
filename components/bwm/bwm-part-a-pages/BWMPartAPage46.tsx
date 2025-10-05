"use client"
import React from 'react'

const BWMPartAPage46: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER VIII
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">FAILURE OF TOKEN BLOCK INSTRUMENTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                <div className="text-center mb-8">
                  <h5 className="lg:text-2xl text-xl font-bold text-blue-300 mb-4">8.2. Loss of Token:</h5>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">a)</span> When a token is lost, the Station Master shall immediately advise the Signal Inspector. If subsequent to the issue of the advice to the Signal Inspector, the lost token is found, the Station Master should not use it, but keep it in his safe custody and hand it over to the Signal Inspector.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">b)</span> The Signal Inspector on receipt of the advice shall proceed by first means to the station. If the token has since been recovered, he shall insert it in the block instrument and restore token working. If the token is not recovered, he shall phase the block instrument, exchange &apos;Testing&apos; signal with the Station Master at the other end and after satisfying that the block Instruments are in working condition advise the Station Master at either end of the block section of the number of the lost token and to resume token working.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      <span className="font-semibold text-blue-300">c)</span> Entries should be made in the Train Signal Register at both the stations at either end of the block section regarding the lost token, suspension and restoration of token working by the Signal Inspector. In addition, the Signal Inspector should paste a &apos;lost token notice&apos; in the following form at both the Stations.
                    </p>
                    <div className="bg-white/10 rounded-lg p-6 border border-white/20 ml-6">
                      <h6 className="text-blue-300 font-bold text-lg mb-4 text-center">Lost token notice</h6>
                      <div className="space-y-3 text-gray-200">
                        <p className="lg:text-base text-sm leading-relaxed">
                          Token No………………… pertaining to the Block Section from………….. Station to ........................... Station has been lost. If handed over to the Station Master at either end of the Block Section, it shall not be used but kept in the safe custody by the Station Master who shall advise me forthwith.
                        </p>
                        <div className="mt-6 space-y-2">
                          <p className="lg:text-base text-sm leading-relaxed">Date................................</p>
                          <p className="lg:text-base text-sm leading-relaxed">.............................................</p>
                          <p className="lg:text-base text-sm leading-relaxed font-semibold">Signal Inspector</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">d)</span> The Signal Inspector should advise the Chief Crew Controller/Crew Controller and Train Examiner of the Depots, regarding the lost token to notify the Drivers, not to accept the lost token as authority to proceed.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">e)</span> The Lost Token Notice shall remain in force for a period of six months from the date of pasting and the Signal Inspector shall remove it after this period.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-blue-300">f)</span> If the lost token is found after restoration, the Station Master shall keep in safe custody and immediately advise the Signal Inspector. The Station Master shall not hand over this token on any account to the Loco Pilot of a train as &apos;Authority to proceed&apos;. The Station Master shall hand over the token to the Signal Inspector and obtain his acknowledgement in the Train Signal Register. The Signal Inspector shall insert the token in the block instrument if it is in good condition and phase the block instrument. He shall, thereafter, advise both the Station Masters, Chief Crew Controller /Crew Controller, Train Examiner and DRM/T and S&T. The Lost Token Notice pasted in the Loco shed shall be removed and the official of the Loco shed shall notify the Loco Pilots accordingly.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      <span className="font-semibold text-blue-300">g)</span> If the lost token is not found, arrangements shall be made to replace it after a period of six months. A new token should bear the consecutive number next to the highest number in use on the block section. The replacement of the lost token may be done under the orders of the DRM/T and S&T. In case the lost token is found after indenting for a new token, it shall not be inserted in the instrument but shall be broken by the Signal Inspector and returned to the Stores.
                    </p>
                    <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-400/20 ml-6">
                      <p className="text-yellow-200 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold text-yellow-300">Note:</span> In case the token which was notified as lost has actually been over carried beyond the block section either in the same jurisdiction of the Signal Inspector or beyond his jurisdiction the token should be handed over to the nearest Station Master. The Station Master should keep it in safe custody and advise the Signal Inspector of the section, sending a copy to the Signal Inspector of the section to which the token pertains. The Signal Inspector should take over the token from the Station Master of his jurisdiction and forward it to the Signal Inspector concerned for necessary action.
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

export default BWMPartAPage46