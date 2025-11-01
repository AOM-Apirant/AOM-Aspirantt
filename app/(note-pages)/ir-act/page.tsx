import React from 'react'
import { BookOpen, Scale, Shield, Users, Clock } from 'lucide-react'
import Link from 'next/link'
import IRAct1989 from '@/components/ir-act/IRAct1989'

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-20">
          {/* Legal Framework */}
          <div className="group relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl p-6 shadow-2xl hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-3 border border-blue-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-blue-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-blue-200 rounded-full mb-8 group-hover:bg-blue-300 transition-colors z-10 relative shadow-lg">
              <BookOpen className="lg:w-10 lg:h-10 w-8 h-8 text-blue-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-blue-900 mb-4 z-10 relative">Legal Framework</h3>
            <p className="lg:text-lg text-base text-blue-700 leading-relaxed z-10 relative">
              Provides a legal framework for railway operations, administration, construction, and regulation
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Safety Provisions */}
          <div className="group relative bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl p-6 shadow-2xl hover:shadow-green-300 transition-all duration-300 transform hover:-translate-y-3 border border-green-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-green-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-green-200 rounded-full mb-8 group-hover:bg-green-300 transition-colors z-10 relative shadow-lg">
              <Shield className="lg:w-10 lg:h-10 w-8 h-8 text-green-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-green-900 mb-4 z-10 relative">Safety Provisions</h3>
            <p className="lg:text-lg text-base text-green-700 leading-relaxed z-10 relative">
              Comprehensive safety provisions and guidelines for passenger and goods transportation
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Passenger Rights */}
          <div className="group relative bg-gradient-to-br from-purple-50 via-white to-purple-100 rounded-3xl p-6 shadow-2xl hover:shadow-purple-300 transition-all duration-300 transform hover:-translate-y-3 border border-purple-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-purple-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-purple-200 rounded-full mb-8 group-hover:bg-purple-300 transition-colors z-10 relative shadow-lg">
              <Users className="lg:w-10 lg:h-10 w-8 h-8 text-purple-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-purple-900 mb-4 z-10 relative">Passenger Rights</h3>
            <p className="lg:text-lg text-base text-purple-700 leading-relaxed z-10 relative">
              Detailed provisions for passenger rights, responsibilities, and protection
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Time Management */}
          <div className="group relative bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-3xl p-6 shadow-2xl hover:shadow-orange-300 transition-all duration-300 transform hover:-translate-y-3 border border-orange-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-orange-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-orange-200 rounded-full mb-8 group-hover:bg-orange-300 transition-colors z-10 relative shadow-lg">
              <Clock className="lg:w-10 lg:h-10 w-8 h-8 text-orange-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-orange-900 mb-4 z-10 relative">Time Management</h3>
            <p className="lg:text-lg text-base text-orange-700 leading-relaxed z-10 relative">
              Provisions for railway service timing and line management
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-100 rounded-tr-3xl blur-lg"></div>
          </div>
        </div>

        <IRAct1989 />
      </div>

      {/* PDF Download Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 lg:p-12 text-white border border-blue-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm animate-pulse">
              <svg className="w-12 h-12 lg:w-16 lg:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h3 className="lg:text-4xl text-2xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Indian Railways Act 1989
            </h3>
            <p className="lg:text-xl text-base text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get the complete Indian Railways Act, 1989 document in PDF format for offline reference and detailed study. 
              This comprehensive legislation covers all aspects of railway operations, administration, and regulations.
            </p>
            
            <Link 
              href="/ir-act-1989/Indian Railways Act 1989.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="Indian Railways Act 1989.pdf"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold lg:text-lg text-base rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default IRAct