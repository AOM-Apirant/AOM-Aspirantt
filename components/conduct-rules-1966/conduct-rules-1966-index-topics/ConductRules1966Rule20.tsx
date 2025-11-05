'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  Award,
  Ban,
  AlertCircle
} from 'lucide-react'

const ConductRules1966Rule20 = () => {
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
              THE RAILWAY SERVICES (CONDUCT) RULES, 1966
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* 20. Canvassing of Non-official or other Influence */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Ban className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                20. Canvassing of Non-official or other Influence
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                
                {/* Main Rule */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <Award className="lg:w-6 lg:h-6 w-4 h-4 text-blue-200" />
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        No railway servant shall bring or attempt to bring any political or other influence to bear upon any superior authority to further his interests in respect of matters pertaining to his service under the Government.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Railway Ministry's decision */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <AlertCircle className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                      <span className="font-semibold text-orange-300">Railway Ministry&apos;s decision.</span> —Railway servants are advised to strictly refrain from bringing pressure from the M.Ps and other influential outsiders to secure benefits out of turn or regarding any matter arising out of their service. If such occasions arise, the name of the officer or the member of the staff concerned will be brought to the notice of the Head of the Department for such disciplinary action as may be considered necessary.
                    </p>
                    <p className="text-gray-300 lg:text-sm text-xs leading-relaxed">
                      (E (D&A) 70 RG6-9 dt. 7-7-71.)
                    </p>
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
              Railway Services (Conduct) Rules, 1966
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

export default ConductRules1966Rule20