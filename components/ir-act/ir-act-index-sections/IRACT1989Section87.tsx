'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  MessageSquare,
  FileCheck
} from 'lucide-react'

const IRACT1989Section87 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">CHAPTER IX</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Carriage of goods</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 87 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <FileCheck className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                87. Power to make rules in respect of matters in this Chapter.-
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (1) The Central Government may, by notification, make rules to carry out the purposes of this Chapter.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (2) in particular, and without prejudice to the generally of the foregoing power, such rules may provide for all or any of the following matters, namely:
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (a) goods in respect of which no forwarding note shall be executed under proviso sub-section (1`) of Sec. 64 ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (b) dangerous and offensive goods for the purposes of sub-section (1) of Sec. 67;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (c ) infectious or contagious diseases for the purposes of Sec. 68 ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (d) rates of penalty charges under Sec. 73 ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (e) the manner in which the consignment may be delivered without a railway receipt under Sec. 76;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (f) the manner in which the consignment or the sale proceeds to the person entitled thereto under Sec. 77 ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (g) the conditions subject to which and charges payable for allowing weighment and circumstances for not allowing weighment of consignment in wagon-load or train-load under Sec. 79 ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (h) the manner of giving open delivery under Sec. 81 ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (i) the form pf partial delivery certificate under sub-section (2) of Sec. 82 ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (j) the manner of sale of consignment or part thereof under ther proviso to sub-section (2) of Sec. 83 ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (k) the manner in which a notice under sub-section (3) of Sec. 83 may be given ; (l) generally, for regulating the carriage of goods by the railways.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (3) Any rule made under this section may provide that a contravention thereof shall be punishable with fine which may extend to one hundred and fifty rupees.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (4) Every railway administration shall keep at each station a copy or the rules for the time being in force under this section, and shall allow any person to refer to it free of charge.
                      </p>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comment</h3>
                    </div>
                    <div className="space-y-3 ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 87, sub-section (1) and (2) empower the Central Government to make rules for carrying out the purposes of Chapter IX. The matters in respect of which rules may be made by the Central Government are enumerated in detail in sub-section (2) sub-sections (3) and (4) empower the Central Government to provide for punishment fir contravention of rules made under this clause and impose an obligation on railway administration to allow the inspection of such rules free of charge.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Rules - Power of framing .- The general power of framing rules for effectuating the purposes of the Act would plainly authorize and sanctify the framing of such a rule.
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
              Indian Railways Act 1989 - Chapter IX
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

export default IRACT1989Section87