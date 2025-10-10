"use client"
import React from 'react'

const BWMPartCPage50C: React.FC = () => {
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
                  {/* 8.3 Section */}
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">8.3. Failure of block instrument:</h3>
                    
                    <div className="space-y-4">
                      {/* Section I */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                          <span className="text-yellow-300 font-semibold">I)</span> The block instrument shall be considered to have failed and block working suspended in the following circumstances:
                        </p>
                        
                        <div className="space-y-3 ml-4">
                          {/* Point a */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">a)</span> When the indications on the TGT dial at <span className="text-green-300 font-semibold">&apos;X&apos;</span> do not correspond with the indications of the TCF dial at <span className="text-green-300 font-semibold">&apos;Y&apos;</span>.
                            </p>
                          </div>

                          {/* Point b */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                              <span className="text-green-300 font-semibold">b)</span> Whenever there is reason to believe that there is contact between the block and any other circuit.
                            </p>
                            
                            {/* Note for b */}
                            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-3 border border-yellow-400/30">
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                                <span className="text-yellow-300 font-bold">Note:</span>If an intermittent contact exists between the block and the circuit an irregular movement of the indicator or irregular bell beats or both will be observed. If permanent contact exists there may be a permanent wrong indication or bell beats or both. A contact between block wires might cause signals given on the instrument to be repeated on the neighbouring instrument or change of indications in the instruments.
                              </p>
                            </div>
                          </div>

                          {/* Point c */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                              <span className="text-green-300 font-semibold">c)</span> When a train arrives at a station without <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span>.
                            </p>
                            
                            {/* Note for c */}
                            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-3 border border-yellow-400/30">
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                                <span className="text-yellow-300 font-bold">Note:</span> In this case the irregularity shall be reported as an accident unless the <span className="text-blue-300 font-semibold">Driver</span> is in possession of an authority as per S.R.6.02
                              </p>
                            </div>
                          </div>

                          {/* Point d */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">d)</span> If the block instrument or its battery counter is found without seals or locks.
                            </p>
                          </div>

                          {/* Point e */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">e)</span> Whenever single line working is introduced.
                            </p>
                          </div>

                          {/* Point f */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">f)</span> When the dial indicator glass is broken.
                            </p>
                          </div>

                          {/* Point g */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                              <span className="text-green-300 font-semibold">g)</span> If the Last Stop Signal can be taken <span className="text-yellow-300 font-semibold">&apos;OFF&apos;</span> with no <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span> indication on the TGT dial.
                            </p>
                            
                            {/* Note for g */}
                            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-3 border border-yellow-400/30">
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                                <span className="text-yellow-300 font-bold">Note:</span> This test shall be made when <span className="text-blue-300 font-semibold">Station Master</span> takes charge of the block instrument and an entry made in the Train Signal Register.
                              </p>
                            </div>
                          </div>

                          {/* Point h */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">h)</span> If the operating handle can be restored from TOL to <span className="text-yellow-300 font-semibold">&apos;Line closed&apos;</span> position before complete arrival of the train.
                            </p>
                          </div>

                          {/* Point i */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">i)</span> Where the operating handle cannot be turned to TOL or <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span> or to <span className="text-yellow-300 font-semibold">&apos;Line closed&apos;</span> in the process of granting or cancelling <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span>.
                            </p>
                          </div>

                          {/* Point j */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">j)</span> Where signals on the bell are not received distinctly or fail altogether.
                            </p>
                          </div>

                          {/* Point k */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">k)</span> When a train which has entered the block section on <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span> is pushed back for any reason into the station.
                            </p>
                          </div>

                          {/* Point l */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">l)</span> If it is known that the instrument is defective in any way not specified above.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section II */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                          <span className="text-yellow-300 font-semibold">II)</span> Block instruments failure record:
                        </p>
                        
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
A record of the failures of block instruments/signals and other gear connected with working of signals shall be maintained in the S&T failure register at the station.
                        </p>
                        
                        {/* Note for II */}
                        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-3 border border-yellow-400/30">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="text-yellow-300 font-bold">Note :</span> Block instrument failure either at station <span className="text-green-300 font-semibold">&apos;X&apos;</span> or station<span className="text-green-300 font-semibold">&apos;Y&apos;</span> shall be recorded by both <span className="text-blue-300 font-semibold">Station Masters</span> of <span className="text-green-300 font-semibold">X&apos;</span> and <span className="text-green-300 font-semibold">&apos;Y&apos;</span> in their S&T failure registers.
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

export default BWMPartCPage50C