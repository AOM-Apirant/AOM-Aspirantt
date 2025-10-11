"use client"
import React from 'react'

const BWMAnnexurePage1: React.FC = () => {
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
                  {/* Main Title */}
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">WORKING OF TRAINS THROUGH PAPER LINE CLEAR TICKETS (T/C.1425-UP PLCT & T/D.1425-DOWN PLCT</h3>
                    
                    {/* Section 1.1 */}
                    <div className="space-y-4">
                      <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg">1.1. Use of Line clear inquiry message-(T/A 1425-Outward/T/B 1425 Inward):</h4>
                      
                      {/* Point a */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">a)</span> The Train Signal Register shall always be referred to before any entries are made in Line clear inquiry message (outward) to ensure that the entries in the Train Signal Register are complete and the block section is clear.
                        </p>
                      </div>

                      {/* Point b */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">b)</span> The Line Clear inquiry message for dispatch -(T/A 1425-Outward) and the Line Clear inquiry message received-(T/B. 1425-Inward) shall be written personally by the Station Masters &apos;X&apos; and &apos;Y&apos;. Care shall be taken to ensure that the messages are complete and correct in all respects. If a mistake is made while writing the message, the wrong entry shall be cancelled drawing a line lightly through it, so that it can be read at any time and not by erasure and the correction initialled by the Station Master.
                        </p>
                      </div>

                      {/* Point c */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">c)</span> Immediately after despatching or receiving each message, the Station Masters at either end shall exchange their initials and enter the initials in the columns &apos;received from&apos; and &apos;received by&apos;-(T/A 1425-Outward/T/B 1425-Inward).
                        </p>
                      </div>

                      {/* Point d */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">d)</span> After recording a message in the Line Clear inquiry message (outward/inward), if interruption occurs, this fact shall be recorded against the last entry in the message.
                        </p>
                      </div>

                      {/* Point e */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">e)</span> No abbreviation or curtailment of words or train description shall be used in the body of any message -(T/A 1425-Outward/T/B. 1425-Inward) or PLCT (T/C1425 or T/D1425).
                        </p>
                      </div>

                      {/* Point f */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">f)</span> The direction of train ie., up or down shall also be recorded. The numerical number of train in two / three / four digits shall be spelt out fully.(Ex.FL.10 / 170 / 2718 etc., instead of last digits 18 ). Similarly the timings &apos;Out report&apos; and &apos;In report&apos; shall also be spelt out in four digits. . (Ex.21.35 hrs. and 21.55 hrs. etc., instead of last digits 35 and 55).
                        </p>
                      </div>

                      {/* Point g */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">g)</span> The &apos;Station Master stamp&apos; should be affixed on the PLCT. The name of the station to which the Driver is authorised to proceed shall be written in full, confirming to the official spelling of the station&apos;s name as given in the Working Time Table.
                        </p>
                      </div>

                      {/* Point h */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">h)</span> The Driver shall check that the PLCT is correctly and completely filled without any alterations and that the train number and description, date, direction and the name of the &apos;station to&apos; are correct.
                        </p>
                      </div>

                      {/* Point i */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">i)</span> When &apos;Line clear&apos; is obtained through block phone or control phone or VHF set, the Station Master shall write the same in the column &apos; by means of&apos; in the &apos;A&apos; portion of outward message - T/A1425.
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

export default BWMAnnexurePage1