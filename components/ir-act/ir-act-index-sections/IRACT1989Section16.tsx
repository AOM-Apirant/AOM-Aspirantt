'use client'
import React from 'react'
import { 
  Scale,
  Home,
  FileText,
  MessageSquare,
  Info
} from 'lucide-react'

const IRACT1989Section16 = () => {
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
            
            {/* Accommodation Works Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Home className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                16. Accommodation Works
              </h2>
              <div className="bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-fuchsia-400/30">
                <div className="space-y-4">
                  {/* Sub-section (1) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 px-3 py-1 rounded-md text-white font-semibold text-sm flex-shrink-0 mt-1">
                        (1)
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                          A railway administration shall make and maintain the following works for the accommodation of the owners and occupiers of lands adjoining the railway, namely :
                        </p>
                        <div className="space-y-3 ml-4">
                          <div className="flex items-start gap-2">
                            <span className="text-fuchsia-300 font-semibold text-sm">(a)</span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              such crossings, bridges, culverts and passages over, under or by the sides of, or leading to or from, the railway as may, in the opinion of the State Government, be necessary for the purpose of making good any interruptions caused by the railway to the use of the lands through which the railway is made ; and
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-fuchsia-300 font-semibold text-sm">(b)</span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              all necessary bridges, tunnels, culverts, drains, water sources or other passages, over, under or by the sides of the railway, of such dimensions as will, in the opinion of the state government, be sufficient at all times to convey water as freely from or to the lands lying near or affected by the railway as it was before the making of the railway or as nearly as possible.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 px-3 py-1 rounded-md text-white font-semibold text-sm flex-shrink-0 mt-1">
                        (2)
                      </span>
                      <div className="flex-1">
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          Subject to the other provisions of this Act, the works specified in subsection( 1) shall be made at the cost of the railway administration during or immediately after the laying out or formation of the railway over the lands traversed an din such a manner as to cause as little damage or inconvenience as possible to persons interested in the lands or affected by the works :
                        </span>
                        <div className="mt-3 ml-0 pl-4 border-l-2 border-fuchsia-400">
                          <p className="text-fuchsia-200 font-semibold text-sm mb-3">Provided that –</p>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <span className="text-fuchsia-300 font-semibold text-sm">(a)</span>
                              <span className="text-gray-300 lg:text-base text-sm leading-relaxed">
                                a railway administration shall not be required to make any accommodation works in such a manner as would prevent or obstruct the working or using of the railway, or to make any accommodation works with respect to which the owners or occupiers of the lands have been paid compensation in consideration of their not requiring the said works to be maid :
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-fuchsia-300 font-semibold text-sm">(b)</span>
                              <span className="text-gray-300 lg:text-base text-sm leading-relaxed">
                                save as hereinafter, in this chapter, provided, no railway administration shall be liable to execute any further or additional accommodation works for the use of the owners or occupiers of the lands after the expiration of ten years from the date on which the railway passing through the lands was first opened for public traffic ;
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-fuchsia-300 font-semibold text-sm">(c)</span>
                              <span className="text-gray-300 lg:text-base text-sm leading-relaxed">
                                where a railway administration has provided suitable accommodation work for the crossing of a road or stream and the road or stream is afterwards diverted by the actor neglect of the person having the control thereof, the railway administration shall not be compelled to provide any other accommodation work for the crossing of such road or stream.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-section (3) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 px-3 py-1 rounded-md text-white font-semibold text-sm flex-shrink-0 mt-1">
                        (3)
                      </span>
                      <div className="flex-1">
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          The State Government may specify a date for the commencement of any work to be executed under sub-section (1) and, if within three months next after that date, the railway administration fails to commence the work or having commenced it, fails to proceed diligently to execute it, the Central Government shall, on such failure being brought to its notice by the State Government, issue such directions to the railway administration as it thinks fit.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Explanation Section */}
                  <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30">
                    <div className="flex items-start gap-3 mb-2">
                      <Info className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                      <h3 className="text-cyan-200 font-bold lg:text-lg text-base">Explanation</h3>
                    </div>
                    <div className="ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        For the purposes of this section, the expression &quot;lands&quot; shall include public roads.
                      </p>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 mt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3 ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 16 provides for the nature of accommodation works and the circumstances in which such accommodation works may be carried out by a railway administration.
                      </p>
                      <div className="mt-3 pt-3 border-t border-blue-400/30">
                        <p className="text-blue-200 font-semibold lg:text-base text-sm mb-2">Proviso.</p>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          it is a well settled principle of construction that unless clearly indicated, a proviso would not take away substantive rights given by the section or subsection.
                        </p>
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

export default IRACT1989Section16