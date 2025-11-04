'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText,
  AlertCircle
} from 'lucide-react'

const LeaveRules1949Rule512 = () => {
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
              RAILWAY SERVICES (LIBERALISED LEAVE) RULES, 1949
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Grant and return from leave Section Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 lg:px-4 px-3 border border-white/20">
              <h2 className="lg:text-2xl text-xl font-bold text-cyan-300 text-center">
                Grant and return from leave
              </h2>
            </div>

            {/* Rule 512 Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                512. Grant of leave.-Priority of claim to leave.-
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="flex items-start gap-4 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <FileText className="lg:w-6 lg:h-6 w-4 h-4 text-blue-200" />
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    In case where all application for leave cannot, in the interest of the public service, be granted, an authority competent to grant should, in deciding which applications should be granted, take into the account the following considerations-
                  </span>
                </div>
                <ul className="space-y-3 ml-12">
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-300 font-semibold mt-1">(a)</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The railway servants who can, for the time being best be spared.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-300 font-semibold mt-1">(b)</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The amount of leave due to the various applicants.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-300 font-semibold mt-1">(c)</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The amount and character of the service rendered by each applicant since he last returned from leave.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-300 font-semibold mt-1">(d)</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The fact that any such applicant was compulsorily recalled from his last leave.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-300 font-semibold mt-1">(e)</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The fact that any such applicant has been refused leave in the public interest.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Railway Ministry's Decision 1 Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Railway Ministry&apos;s Decision 1.-
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <FileText className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    The order sanctioning leave on average pay/half average pay to Railway servant shall indicate the balances of such leave at his credit. <span className="text-orange-300 font-semibold">[E(P&A) 176 LE 3/1 dt.11-03-1977.]</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Railway Ministry's Decision 2 Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Railway Ministry&apos;s Decision 2.-
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <FileText className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      In order to save time, effort and expense, it has been decided that instead of issuing individual leave orders should, as for as possible, be issued in a consolidated form for each category of staff separately, if not already being done. The consolidated leave orders may be issued once in a fortnight, say ,on 20th of the month in respect of persons who proceeded on leave between 1st and 15th and on 5th of the next month in respect of those who proceeded on leave between 16th and the last working day of the previous month. These dates may, if necessary be varied to suit local convenience. Exception may be made, if necessary, in the types of cases mentioned below :
                    </span>
                  </div>
                  <ul className="space-y-3 ml-12">
                    <li className="flex items-start gap-4">
                      <span className="text-orange-300 font-semibold mt-1">(i)</span>
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        Where the Railway servant and his leave sanctioning authority are located at different stations, and
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-300 font-semibold mt-1">(ii)</span>
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        Where officiating arrangement is to be made in the leave vacancy.
                      </span>
                    </li>
                  </ul>
                  <div className="flex items-start gap-4 mt-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <FileText className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Where a Railway servant is proceeding on leave before the date of issue of the consolidate leave order, the act whether the leave applied for by him has been sanctioned or not may informally be ascertained from administration section by the individual concerned. The general principle should, however, be that after the leave has been recommended by the Railway servant&apos;s immediate controlling authority, the leave may be deemed to have been sanctioned unless he is given an intimation to the contrary.
                    </span>
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
              Railway Services (Liberalised Leave) Rules, 1949 - Rule 512
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

export default LeaveRules1949Rule512