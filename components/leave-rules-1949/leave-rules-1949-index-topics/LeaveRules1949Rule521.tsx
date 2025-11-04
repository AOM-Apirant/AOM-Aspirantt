'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText,
  AlertCircle
} from 'lucide-react'

const LeaveRules1949Rule521 = () => {
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

            {/* Rule 521 Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                521. Grant of leave on medical certificate to Group C & D Railway servants.-
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-200 font-semibold mt-1">(1)</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Subject to the provisions contained in sub-rule (2) to (5) of rule 520, an application for leave on medical certificate made by a railway servant in Group C and Group D shall be accompanied by a medical certificate given by a Railway Medical Officer, defining as clearly as possible the nature and duration of the illness.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-200 font-semibold mt-1">(2)</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      When a Railway servant residing outside the jurisdiction of a Railway Medical Officer requires leave on medical certificate he should submit, within 48 hours, a sick certificate from a registered medical practitioner. Such a certificate should be, as nearly as possible, in the prescribed form as given in Annexure III, and should state the nature of the illness and the period for which the Railway servant is likely to be unable to perform his duties. The competent authority may, at its discretion accept the certificate or, in cases where it has reasons to suspect the bonafides, refer the case to the Divisional Medical Officer for advice or investigation. The medical certificate from registered private practitioners produced by Railway servant in support of their application for leave may be rejected by the competent authority only after a Railway Medical Officer has conducted the necessary verifications and on the basis of the advice tendered by him after such verification.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Note Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Note.-
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <FileText className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Ordinarily, the jurisdiction of a Railway Medical Officer will be taken on cover Railway servant residing within a radius of 2.5 Kilometres of Railway hospital or health unit to which the doctor is attached, and within a radius of one kilometre of a Railway station of the doctor&apos;s beat.
                  </span>
                </div>
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
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <FileText className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Where a Railway employee remained on medical leave up to and including 3 days duration and reported back for duty with a fitness from the medical practitioner, he may be allowed to join duty without obtaining fitness certificate from the Railway Medical Officer subject to the conditions that the employee furnished a declaration that he had not suffered during this period from any eye disease. In the other cases where the duration of the sickness is more than 3 days, the railway employee should be put back to duty within 24 hours on his producing fitness certificate from a private medical practitioner, provided he is found fit by the competent railway medical officer. In case there is any delay beyond 24 hours in obtaining the fitness certificate from the competent Railway medical Officer, the employee concerned will be deemed to have been put back to duty within 24 hours of his producing the medical certificate of the private medical officer.
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <FileText className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                    </span>
                    <span className="text-orange-300 lg:text-lg text-base leading-relaxed font-semibold">
                      .(Rly. Ministry&apos;s letter No. E(G)78LE 1-17dt.18-1-1979)
                    </span>
                  </div>
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
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full flex items-center justify-center mt-1">
                    <FileText className="lg:w-6 lg:h-6 w-4 h-4 text-orange-200" />
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    With a view to preventing misuse, the Railway administration may withdraw for specified periods (From 1st April to 30th June in Summer, from 1st October to 15th November during Diwali and when mass sick reporting is contemplated by staff of any department) the privilege of acceptance of medical certificate from Registered Medical Practitioners for grant of Medical Certificate to Group C and Group D Railway servants..<span className="text-orange-300 font-semibold"> (No. E(G)72LE-1-11dt. 28-9-1972)</span>
                  </span>
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
              Railway Services (Liberalised Leave) Rules, 1949 - Rule 521
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

export default LeaveRules1949Rule521