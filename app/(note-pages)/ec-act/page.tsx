import React from 'react'
import { Shield, Heart, DollarSign, Clock, UserCheck, AlertTriangle, FileText, Award } from 'lucide-react'

const ECAct = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-700 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Employees Compensation Act
            </h1>
            <div className="text-2xl md:text-3xl font-light mb-8 text-green-100">
              2010
            </div>
            <p className="text-lg md:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              The Employees Compensation Act, 2010 is a comprehensive legislation that provides for the payment 
              of compensation to employees and their dependents in case of injury or death arising out of and 
              in the course of employment.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-20">
          {/* Employee Protection */}
          <div className="group relative bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl p-6 shadow-2xl hover:shadow-green-300 transition-all duration-300 transform hover:-translate-y-3 border border-green-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-green-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-green-200 rounded-full mb-8 group-hover:bg-green-300 transition-colors z-10 relative shadow-lg">
              <UserCheck className="lg:w-10 lg:h-10 w-8 h-8 text-green-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-green-900 mb-4 z-10 relative">Employee Protection</h3>
            <p className="lg:text-lg text-base text-green-700 leading-relaxed z-10 relative">
              Comprehensive protection for employees against workplace injuries and occupational diseases
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Compensation Benefits */}
          <div className="group relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 rounded-3xl p-6 shadow-2xl hover:shadow-emerald-300 transition-all duration-300 transform hover:-translate-y-3 border border-emerald-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-emerald-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-emerald-200 rounded-full mb-8 group-hover:bg-emerald-300 transition-colors z-10 relative shadow-lg">
              <DollarSign className="lg:w-10 lg:h-10 w-8 h-8 text-emerald-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-emerald-900 mb-4 z-10 relative">Compensation Benefits</h3>
            <p className="lg:text-lg text-base text-emerald-700 leading-relaxed z-10 relative">
              Financial compensation for medical expenses, disability benefits, and death benefits
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Health Coverage */}
          <div className="group relative bg-gradient-to-br from-teal-50 via-white to-teal-100 rounded-3xl p-6 shadow-2xl hover:shadow-teal-300 transition-all duration-300 transform hover:-translate-y-3 border border-teal-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-teal-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-teal-200 rounded-full mb-8 group-hover:bg-teal-300 transition-colors z-10 relative shadow-lg">
              <Heart className="lg:w-10 lg:h-10 w-8 h-8 text-teal-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-teal-900 mb-4 z-10 relative">Health Coverage</h3>
            <p className="lg:text-lg text-base text-teal-700 leading-relaxed z-10 relative">
              Medical treatment coverage and rehabilitation support for injured employees
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-teal-100 rounded-tr-3xl blur-lg"></div>
          </div>

          {/* Quick Settlement */}
          <div className="group relative bg-gradient-to-br from-cyan-50 via-white to-cyan-100 rounded-3xl p-6 shadow-2xl hover:shadow-cyan-300 transition-all duration-300 transform hover:-translate-y-3 border border-cyan-300 overflow-hidden">
            <div className="absolute -top-6 -right-6 lg:w-24 lg:h-24 w-16 h-16 bg-cyan-200/30 rounded-full blur-2xl z-0"></div>
            <div className="flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16 bg-cyan-200 rounded-full mb-8 group-hover:bg-cyan-300 transition-colors z-10 relative shadow-lg">
              <Clock className="lg:w-10 lg:h-10 w-8 h-8 text-cyan-700 drop-shadow-lg" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-cyan-900 mb-4 z-10 relative">Quick Settlement</h3>
            <p className="lg:text-lg text-base text-cyan-700 leading-relaxed z-10 relative">
              Time-bound procedures for quick settlement of compensation claims
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-100 rounded-tr-3xl blur-lg"></div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-10 border border-green-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Provisions of the Act</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-green-600" />
                  Employer Liability
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Employers are liable to pay compensation for personal injury or death of employees arising 
                  out of and in the course of employment, regardless of fault.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-emerald-600" />
                  Compensation Amount
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Compensation is calculated based on the nature of injury, age of employee, and monthly wages. 
                  Death benefits are provided to dependents of deceased employees.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200">
                <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-teal-600" />
                  Medical Benefits
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Employers must provide medical treatment and rehabilitation facilities to injured employees 
                  until recovery or until the employee is declared fit for work.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
                <h3 className="text-xl font-bold text-cyan-800 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-cyan-600" />
                  Claim Procedures
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Simplified procedures for filing compensation claims with designated authorities. 
                  Time limits are specified for different types of claims.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  Occupational Diseases
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Special provisions for compensation in case of occupational diseases contracted 
                  during employment, with extended time limits for claims.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-indigo-600" />
                  Dispute Resolution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Special tribunals and authorities for resolving compensation disputes with 
                  powers to award compensation and enforce compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Important Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2010</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Enactment Year</h3>
              <p className="text-gray-600">Modern legislation replacing the old Workmen's Compensation Act</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">100%</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Coverage</h3>
              <p className="text-gray-600">Applies to all employees in organized and unorganized sectors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Protection</h3>
              <p className="text-gray-600">Round-the-clock protection for employees during employment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ECAct