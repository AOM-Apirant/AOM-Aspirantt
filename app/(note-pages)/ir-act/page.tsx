import React from 'react'
import IRAct1989 from '@/components/ir-act/IRAct1989'
import { BookOpen, Scale, Shield, Users, Clock, FileText } from 'lucide-react'

const IRAct = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Indian Railways Act
            </h1>
            <div className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
              1989
            </div>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              The Indian Railways Act, 1989 is a comprehensive piece of legislation enacted by the Parliament of India 
              to regulate all aspects of rail transport in the country. It came into force on July 1, 1989, 
              replacing the Indian Railways Act of 1890.
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-200 transition-colors">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Framework</h3>
            <p className="text-gray-600 leading-relaxed">
              Provides a legal framework for railway operations, administration, construction, and regulation
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-6 group-hover:bg-green-200 transition-colors">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Provisions</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive safety provisions and guidelines for passenger and goods transportation
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl mb-6 group-hover:bg-purple-200 transition-colors">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Passenger Rights</h3>
            <p className="text-gray-600 leading-relaxed">
              Detailed provisions for passenger rights, responsibilities, and protection
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl mb-6 group-hover:bg-orange-200 transition-colors">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Provisions for railway service timing and line management
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-xl mb-6 group-hover:bg-red-200 transition-colors">
              <FileText className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Investigation Procedures</h3>
            <p className="text-gray-600 leading-relaxed">
              Investigation procedures and penalties for violations and accidents
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-6 group-hover:bg-indigo-200 transition-colors">
              <Scale className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Procedures</h3>
            <p className="text-gray-600 leading-relaxed">
              Guidelines for dispute resolution and legal procedures
            </p>
          </div>
        </div>

        
            <IRAct1989 />
      </div>

      
    </div>
  )
}

export default IRAct