"use client"
import React from 'react'

const BWMPartCPage60A: React.FC = () => {
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
                  {/* 8.11 Section */}
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">8.11. Restoration of working with block instruments.</h3>
                    
                    <div className="space-y-4">
                      {/* Section a */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                          <span className="text-yellow-300 font-semibold">a)</span> Working with block instrument, which is suspended in accordance with Rule 8.3, shall not be resumed until the instrument has been tested by the <span className="text-blue-300 font-semibold">Signal Inspector</span> except in the following cases where the <span className="text-blue-300 font-semibold">Station Masters</span> themselves may resume without such test –
                        </p>
                        
                        <div className="space-y-3 ml-4">
                          {/* Sub-section i */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">i)</span> When the block instrument is suspended due to the introduction of single line working, block working may be resumed when double line working is restored.
                            </p>
                          </div>

                          {/* Sub-section ii */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">ii)</span> If the Last Stop Signal cannot be taken <span className="text-yellow-300 font-semibold">&apos;off&apos;</span> even after <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span> has been received and when it is definitely known that the failure is due to uninsulated trolly or material lorry, block working may be resumed after the passage of the first train.
                            </p>
                          </div>

                          {/* Sub-section iii */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">iii)</span> Power failure at stations where signals are lit by electricity, block working may be resumed when power is restored.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section b */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-yellow-300 font-semibold">b)</span> The <span className="text-blue-300 font-semibold">Station Masters</span> at both ends of the block section on which block working was suspended shall, in all cases, satisfy themselves that the line between their stations is clear of trains by exchanging messages, giving the time of arrival and departure of the last train at each end of the block section before restoring block working
                        </p>
                      </div>

                      {/* Section c */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-yellow-300 font-semibold">c)</span> When block working is resumed, the <span className="text-blue-300 font-semibold">Station Masters</span> at both ends of the block section shall at once make entries, in red ink in the Train Signal Register showing the date and time of resumption, before any further train entries are made in the Train Signal Register and then advise each other under exchange of Private Numbers, by telephone of the resumption of block working and also advise the <span className="text-blue-300 font-semibold">Signal Inspector</span> and <span className="text-blue-300 font-semibold">Divisional Railway Manager/T</span> and <span className="text-blue-300 font-semibold">S&T</span> by telephone.
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

export default BWMPartCPage60A