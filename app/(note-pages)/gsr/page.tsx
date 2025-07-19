import React from 'react'
import GSRChapters from '@/components/gsr/GSRChapters'
import { Building2, Calendar, FileText, Shield, Award } from 'lucide-react'
import GSRAppendix from '@/components/gsr/GSRAppendix'

const GSRNotes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Government Header Section */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Building2 className="w-12 h-12 text-yellow-300" />
              <h1 className="text-4xl sm:text-5xl font-bold">
                GOVERNMENT OF INDIA
              </h1>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                MINISTRY OF RAILWAYS
              </h2>
              <p className="text-xl text-yellow-200">
                (RAILWAY BOARD)
              </p>
            </div>
          </div>

          {/* Document Details */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Left Column */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-yellow-300" />
                <h3 className="text-lg font-semibold">Document Reference</h3>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium">No. 69-RR/4</p>
                <div className="flex items-center space-x-2 text-yellow-200">
                  <Calendar className="w-4 h-4" />
                  <span>DATED THE 11TH FEBRUARY 1976</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-yellow-300" />
                <h3 className="text-lg font-semibold">Document Type</h3>
              </div>
              <p className="text-lg font-medium">RESOLUTION</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-yellow-300" />
                <h3 className="text-lg font-semibold">General Rules</h3>
              </div>
              <p className="text-lg leading-relaxed">
                General Rules for Indian Railways (Open Lines) 1976 administered by the
                Government and for the time being used for the public carriage of passengers, 
                animals or goods.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-16 h-1 bg-yellow-300 rounded-full"></div>
            <div className="w-8 h-1 bg-yellow-300 rounded-full"></div>
            <div className="w-16 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* GSR Chapters Component */}
      <GSRChapters />
      <GSRAppendix />
    </div>
  )
}

export default GSRNotes