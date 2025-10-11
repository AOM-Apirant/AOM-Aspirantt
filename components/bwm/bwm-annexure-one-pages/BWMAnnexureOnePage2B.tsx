"use client"
import React from 'react'

const BWMAnnexureOnePage2B: React.FC = () => {
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
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">2.2 SM&apos;S Block Panel is provided with non-locking PUSH BUTTONS</h4>
                    
                    <div className="space-y-4">
                      {/* Section 2.2.1 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.2.1</p>
                        <p className="text-gray-200 font-semibold mb-2">BELL button (Black in colour)</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          a) To transmit BELL codes to station at other end of Block section.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          b) To take LINE CLEAR, when pressed along with TRAIN GOING TO button.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To cancel LINE CLEAR, when pressed along with CANCEL button.
                        </p>
                      </div>

                      {/* Section 2.2.2 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.2.2</p>
                        <p className="text-gray-200 font-semibold mb-2">TRAIN GOING TO Button(RED in Colour)</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To transmit IS LINE CLEAR inquiry to station in advance for taking LINE CLEAR. It is used in conjunction with BELL button at train sending station to light up TRAIN COMING FROM (GREEN) indication on Block Panel of receiving station, which in turn automatically grants LINE CLEAR to light up and TRAIN COING to (GREEN) indication on Block Panel of sending station.
                        </p>
                      </div>

                      {/* Section 2.2.3 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.2.3</p>
                        <p className="text-gray-200 font-semibold mb-2">ACKN Button(s) (Black in Colour)</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Two such buttons are provided, one each for despatch line and receive line.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To silence the SECTION buzzer on occupation or clearance of block section.
                        </p>
                      </div>

                      {/* Section 2.2.4 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.2.4</p>
                        <p className="text-gray-200 font-semibold mb-2">Cancel Co-op Button (Green in Colour)</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          To give co-operation from sending station to cancel the line clear at receiving station.
                        </p>
                      </div>

                      {/* Section 2.2.5 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.2.5</p>
                        <p className="text-gray-200 font-semibold mb-2">CANCEL Button (Yellow in Colour)</p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          It is used in conjunction with BELL button at train receiving.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Station under following conditions:
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Train has not entered the block section and Line clear cancellation has to be done.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Complete train has been pushed back at train sending station.
                        </p>
                      </div>

                      {/* Section 2.3 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-2">2.3</p>
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

export default BWMAnnexureOnePage2B