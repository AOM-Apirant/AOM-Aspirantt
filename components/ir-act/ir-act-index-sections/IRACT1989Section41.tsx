'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  MessageSquare,
  ScaleIcon
} from 'lucide-react'

const IRACT1989Section41 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER VII - Railway Rates Tribunal</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 41 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <ScaleIcon className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                41. Burden of proof, etc.
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  {/* Main Provision */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-4">
                      In the case of any complaint under Cl. (a) of Sec. 36.-
                    </p>
                    
                    {/* Provisions */}
                    <div className="space-y-3 ml-4">
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-300 font-semibold text-sm">(a)</span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          whenever it is shown that a railway administration charges one trader or class of traders or the traders in any local area, lower rates for the same or similar goods or lower charges for the same or similar services than it charges to other traders in any other local area, the burden of providing that such lower rate or charge does not amount to an undue preference, shall lie of on the railway administration:
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-300 font-semibold text-sm">(b)</span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          In deciding whether a lower rate or charge does not anount to an undue preference, the Tribunal may, in addition to any other considerations affecting the case, take into consideration whether such lower rate or charge is necessary in the interests of the public.
                        </span>
                      </div>
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
                        Section 41(a) provides that where lower rates are charged, the burden of proving that such lower rate does not amount to undue preference shall lie on the railway administration.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (b) Provides that while considering the question of undue preference the Tribunal may take into consideration whether such lower rate charge is necessary in the interest of public.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        The burden of proof to disapprove negligence lies on the bailee. HE has to prove that he exercised die care and was not negligent.
                      </p>
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
              Indian Railways Act 1989 - Chapter VII
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

export default IRACT1989Section41