'use client'
import React from 'react'
import { 
  Scale,
  AlertTriangle,
  FileText
} from 'lucide-react'

const IRACT1989Section14 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER IV - CONSTRUCTION AND MAINTENANCE OF WORKS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Temporary entry upon land Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                14. Temporary entry upon land to remove obstruction, to repair or to prevent accident
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  {/* Sub-section (1) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-md text-white font-semibold text-sm flex-shrink-0 mt-1">
                        (1)
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                          Where in the opinion of a Railway administration -
                        </p>
                        <div className="space-y-3 ml-4">
                          <div className="flex items-start gap-2">
                            <span className="text-orange-300 font-semibold text-sm">(a)</span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              there is imminent danger that any tree, post or structure may fall on the railway so as to obstruct the movement of the rolling stock; or
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-orange-300 font-semibold text-sm">(b)</span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              any tree, post, structure or light obstructs the view of any signal provided for movement of rolling stock; or
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-orange-300 font-semibold text-sm">(c)</span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              any tree, post or structure obstructs any telephone or telegraph line maintained on it,
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-3">
                          it may take such steps as may be necessary to avert such danger or remove such obstruction and submit a report thereof to the Central Government in such manner and within such time as may be prescribed.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-md text-white font-semibold text-sm flex-shrink-0 mt-1">
                        (2)
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                          Where in the opinion of a railway administration -
                        </p>
                        <div className="space-y-3 ml-4">
                          <div className="flex items-start gap-2">
                            <span className="text-orange-300 font-semibold text-sm">(a)</span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              a slip or accident has occurred; or
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-orange-300 font-semibold text-sm">(b)</span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              there is apprehension of any slip or accident to any cutting embankment or other work on a railway,
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-3">
                          it may enter upon any lands adjoining the railway and do all such works as may be necessary for the purpose of repairing or preventing such slip or accident and submit a report thereof to the Central Government in such manner and within such time as may be prescribed.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sub-section (3) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-md text-white font-semibold text-sm flex-shrink-0 mt-1">
                        (3)
                      </span>
                      <div className="flex-1">
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          The Central Government may, after considering the report under subsection (1) or sub-section (2), in the interest of public safety, by order, direct the railway administration that further action under sub-section (1) or Subsection( 2) shall be stopped or the same shall be subject to such condition as may be specified in that order.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Indian Railways Act 1989 - Chapter IV
            </p>
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

export default IRACT1989Section14