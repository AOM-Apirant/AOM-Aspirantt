'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText
} from 'lucide-react'

const LeaveRules1949Rule539 = () => {
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

            {/* Rule 539 Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                539. Leave to Workshop staff.-
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-200 font-semibold mt-1">(1)</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">Skilled artisans as also semi-skilled and un-skilled workman will earn leave on average pay, half average pay and commuted leave not leave not due in accordance with these rules.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-200 font-semibold mt-1">(2)</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">Workshop staff may be allowed to take leave with pay, if due, or without pay for periods not less than half a day. For this purpose leave for half a day means authorised absence from duty for over half an hour either during the first period before interval or the second period of any day on which the workshop remains open for both the periods. This concession, however, is restricted to six occasions in a year.</span>
                  </li>
                </ul>
                <div className="mt-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-orange-400/30">
                  <div className="flex items-start gap-3">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-orange-200" />
                    </span>
                    <div className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="text-orange-300 font-semibold">Railway Ministry&apos;s decision.-</span> The practice of granting half a day&apos;s leave against leave account of staff other than those employed in workshops may be allowed to continue where it is covered by express orders on the subject.
                      <p className="mt-2 text-orange-300 font-semibold">(Rly.Ministry&apos;s letter no. F(E)49LE/25 dt.05-09-1949.)</p>
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
              Railway Services (Liberalised Leave) Rules, 1949 - Rule 539
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

export default LeaveRules1949Rule539