import React from 'react'
import { Gauge, Clock, Ruler, FileText } from 'lucide-react'
import ChiefControllerIndex from '@/components/chief-controller/ChiefControllerIndex'

const ChiefController = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Chief Controller
            </h1>
            <div className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
              Study Material
            </div>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive study material for Chief Controller examination covering Speed Restrictions, 
              Timings, Distances, and Authorities. Essential reference guide for AOM aspirants in Indian Railways.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-20">
          {/* Speed Restrictions */}
          <div className="group relative bg-gradient-to-br from-red-50 via-white to-red-100 rounded-3xl p-6 shadow-2xl hover:shadow-red-300 transition-all duration-300 transform hover:-translate-y-3 border border-red-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-red-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-red-200 rounded-full mb-8 group-hover:bg-red-300 transition-colors z-10 relative shadow-lg">
              <Gauge className="lg:w-10 lg:h-10 w-8 h-8 text-red-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-red-900 mb-4 z-10 relative">Speed Restrictions</h3>
            <p className="lg:text-lg text-base text-red-700 leading-relaxed z-10 relative">
              Complete guide to speed restrictions for various railway operations and scenarios
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-red-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Timings */}
          <div className="group relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl p-6 shadow-2xl hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-3 border border-blue-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-blue-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-blue-200 rounded-full mb-8 group-hover:bg-blue-300 transition-colors z-10 relative shadow-lg">
              <Clock className="lg:w-10 lg:h-10 w-8 h-8 text-blue-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-blue-900 mb-4 z-10 relative">Timings</h3>
            <p className="lg:text-lg text-base text-blue-700 leading-relaxed z-10 relative">
              Essential timing regulations and intervals for railway operations and procedures
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Distances */}
          <div className="group relative bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl p-6 shadow-2xl hover:shadow-green-300 transition-all duration-300 transform hover:-translate-y-3 border border-green-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-green-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-green-200 rounded-full mb-8 group-hover:bg-green-300 transition-colors z-10 relative shadow-lg">
              <Ruler className="lg:w-10 lg:h-10 w-8 h-8 text-green-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-green-900 mb-4 z-10 relative">Distances</h3>
            <p className="lg:text-lg text-base text-green-700 leading-relaxed z-10 relative">
              Important distance measurements and clearance requirements for railway operations
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Authorities */}
          <div className="group relative bg-gradient-to-br from-purple-50 via-white to-purple-100 rounded-3xl p-6 shadow-2xl hover:shadow-purple-300 transition-all duration-300 transform hover:-translate-y-3 border border-purple-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-purple-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-purple-200 rounded-full mb-8 group-hover:bg-purple-300 transition-colors z-10 relative shadow-lg">
              <FileText className="lg:w-10 lg:h-10 w-8 h-8 text-purple-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-purple-900 mb-4 z-10 relative">Authorities</h3>
            <p className="lg:text-lg text-base text-purple-700 leading-relaxed z-10 relative">
              Complete list of authorities, forms, and permissions required for railway operations
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-100 rounded-tr-3xl blur-lg"></div>
          </div>
        </div>

        <ChiefControllerIndex />
      </div>
    </div>
  )
}

export default ChiefController