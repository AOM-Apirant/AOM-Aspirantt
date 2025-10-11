"use client"
import React from 'react'

const BWMAnnexureOnePage3: React.FC = () => {
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
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">2.3 SM&apos;s Block Panel is provided with ILLUMINATED INDICATORS</h4>
                    
                    <div className="space-y-4">
                      {/* Section 2.3.1 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.1</p>
                        <p className="text-gray-200 font-semibold mb-2">LINE CLOSED Indication</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Circular indications (TWO Number) in between the directional arrowhead.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          YELLOW
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate Block Section free from vehicles and LINE CLEAR not granted/received at train receiving/ train sending station respectively.
                        </p>
                      </div>

                      {/* Section 2.3.2 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.2</p>
                        <p className="text-gray-200 font-semibold mb-2">TRAIN COMING FROM indication</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          In a directional arrowhead pointing downward for incoming traffic towards station at train receiving station.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          GREEN
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate LINE CLEAR granted when TRAIN GOING TO Button and BELL button have been pressed at sending station and the conditions for the granting of LINE CLEAR at receiving station have been complied with and a rectangular indication named TCF lights up GREEN.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          RED
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate TRAIN ON LINE on entry of incoming train on LINE CLEAR.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          FLASHING GREEN
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate:
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          • Block section clear after arrival of train, but associated Signals and their controls not normal at either of station or LCB Key is OUT.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          • Cancellation of LINE CLEAR before entry of train in Block Section.
                        </p>
                      </div>

                      {/* Section 2.3.3 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.3</p>
                        <p className="text-gray-200 font-semibold mb-2">TRAIN GOING TO Indication</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          In an arrowhead pointing upward for outgoing traffic away from station at train sending station.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          GREEN
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate LINE CLEAR received when TRAIN GOING TO button and BELL button have been pressed on Block Panel of train sending station and the condition for taking the LINE CLEAR have ben complied with at both statins and a rectangular indication named TCF lights up GREEN
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          RED
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate TRAIN ON LINE on entry of outgoing train on LINE CLEAR.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          FLASHING GREEN
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To Indicate:
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          a) Block Section clear after arrival of train at other station, but associated signals and their controls not normal at either or both stations or LCB Key is OUT at receiving station.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          b) LINE CLEAR cancelled before entry of train in block section.
                        </p>
                      </div>

                      {/* Section 2.3.4 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.4</p>
                        <p className="text-gray-200 font-semibold mb-2">Cancel Co-Op indication YELLOW</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Indication to indicate co-operation extended by station at other end for cancellation of line clear by pressing Cancel Co-operation button.
                        </p>
                      </div>

                      {/* Section 2.3.5 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.5</p>
                        <p className="text-gray-200 font-semibold mb-2">CANCEL Indication</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Circular LED
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          FLASHING YELLOW
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate progress of LINE CLEAR cancellation timer of 120 seconds. The indication lights up on pressing of CANCEL Button along With BELL button, when TRAIN COMING FROM is displaying FLASHING GREEN indication
                        </p>
                      </div>

                      {/* Section 2.3.6 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.6</p>
                        <p className="text-gray-200 font-semibold mb-2">SNK Indications</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Two such indications are provided.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          SNK YELLOW
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          a) SNK (D): Yellow provided near TRAIN GOING TO directional arrowhead to Indicate LAST STOP SIGNAL and its controls at ON/ Normal.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          b) SNK (R): Yellow provided near TRAIN COMING FROM directional arrowhead to Indicate reception signal (s) & its controls at ON/Normal
                        </p>
                      </div>

                      {/* Section 2.3.7 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.7</p>
                        <p className="text-gray-200 font-semibold mb-2">SNOEK</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          (SNK other end) YELLOW
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          i) Provided near TRAIN COMING FROM directional arrowhead to Indicate LAST STOP SIGNAL and its controls at station in rear are at ON/ Normal.
                        </p>
                      </div>

                      {/* Section 2.3.8 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.8</p>
                        <p className="text-gray-200 font-semibold mb-2">Last Stop Signal Circular in monogram of signal, (LSS) Indications</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Circular in monogram of signal
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          RED
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate Last Stop Signal is at &apos;ON&apos;
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          GREEN
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate Last Stop Signal is at &apos;OFF&apos;
                        </p>
                      </div>

                      {/* Section 2.3.9 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.9</p>
                        <p className="text-gray-200 font-semibold mb-2">LINE FREE indication GREEN</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate Block Section is clear of vehicles.
                        </p>
                        <p className="text-gray-200 font-semibold mb-2">LINE OCUUPIED indication RED</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate Block Section occupied
                        </p>
                      </div>

                      {/* Section 2.3.10 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.10</p>
                        <p className="text-gray-200 font-semibold mb-2">ACKN indication YELLOW</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          A Indication near ACKN button.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate SECTION buzzer ON status
                        </p>
                      </div>

                      {/* Section 2.3.11 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.11</p>
                        <p className="text-gray-200 font-semibold mb-2">SM KEY &apos;IN&apos; indication GREEN</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Indication near SM KEY
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To indicate SM key &quot;IN&quot;
                        </p>
                      </div>

                      {/* Section 2.3.12 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.12</p>
                        <p className="text-gray-200 font-semibold mb-2">SSBPAC(D) OK indication</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Glows GREEN when SSBPAC(D) is OK otherwise Extinguished.
                        </p>
                      </div>

                      {/* Section 2.3.13 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.13</p>
                        <p className="text-gray-200 font-semibold mb-2">SSBPAC(D) FAIL indication</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Glows RED when SSBPAC(D) goes into a failure mode otherwise Extinguished.
                        </p>
                      </div>

                      {/* Section 2.3.14 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3.14</p>
                        <p className="text-gray-200 font-semibold mb-2">Communication LINK FAIL indication</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Glows steady YELLOW when LINK FAILS otherwise flickering
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

export default BWMAnnexureOnePage3