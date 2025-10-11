"use client"
import React from 'react'

const BWMAnnexurePage5A: React.FC = () => {
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
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">1.9 Applying for &apos;Line clear&apos; for shunting train outside the First Stop Signal on Single line token territory and Single line tokenless territory:</h4>
                    
                    <div className="space-y-4">
                      {/* Point a */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">a)</span> When the Station Master at &apos;X&apos; requires to shunt a train partly or fully outside the First Stop Signal in the direction of the station &apos;Y&apos;, he shall obtain &apos;Line clear&apos; from the Station Master at &apos;Y&apos; as per the procedure laid down in 1 to 3 of 1.4 above.
                        </p>
                      </div>

                      {/* Point b */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">b)</span> The Station Master shall then issue to the Driver, along with the PLCT, a memo authorising him to shunt outside the First Stop Signal and return to the station and obtain his acknowledgement. The shunting shall not be commenced until this is done. When the shunting is completed and the &apos;X&apos; – &apos;Y&apos; block section is again clear, &apos;X&apos; shall cancel the &apos;Line clear&apos; and inform &apos;Y&apos;.
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

export default BWMAnnexurePage5A