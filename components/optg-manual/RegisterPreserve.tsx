"use client"
import React from 'react'

const RegisterPreserve = () => {
  const registerData = [
    { name: "Train passing Registers/Books/Forms", period: "1 year", category: "operational" },
    { name: "Stabled stock/Damaged Stock Register/Sick Wagon Register", period: "3 years", category: "operational" },
    { name: "Caution order/message books", period: "1 year", category: "operational" },
    { name: "Registers pertaining to S&T other than S&T failure", period: "3 years", category: "technical" },
    { name: "S&T failure register", period: "Permanent Record", category: "technical" },
    { name: "Fog signal register", period: "3 years", category: "safety" },
    { name: "Weather warning register", period: "3 years", category: "safety" },
    { name: "SWR assurance and other assurance register", period: "Permanent Record", category: "safety" },
    { name: "Attendance register/Muster Roll", period: "Permanent Record", category: "administrative" },
    { name: "Control Order book/Conference book", period: "3 years", category: "operational" },
    { name: "Station Diary and charge Book", period: "1 year", category: "operational" },
    { name: "Guard's Duty Register", period: "3 years", category: "operational" },
    { name: "Guard's Rough Journal", period: "3 years", category: "operational" },
    { name: "Register of Train Advices", period: "6 months", category: "operational" },
    { name: "Form of Train Examination Advices", period: "1 year", category: "operational" },
    { name: "Officers/Inspectors/Surprise night/Cabin/LC gates Inspection register", period: "Permanent Record", category: "administrative" },
    { name: "Joint inspection of Points& crossing/Track circuits/OHE bond", period: "3 years", category: "technical" },
    { name: "Accident register", period: "Permanent record", category: "safety" },
    { name: "Staff Bio-data/Gradation Home Addresses of staff register", period: "Permanent Record", category: "administrative" },
    { name: "Staff grievance register", period: "Permanent Record", category: "administrative" },
    { name: "Public complaints register", period: "Permanent Record", category: "administrative" },
    { name: "General standing order book", period: "Permanent Record", category: "administrative" },
    { name: "Establishment register", period: "Permanent Record", category: "administrative" },
    { name: "Wagon Demand/Priority Register", period: "3 years", category: "operational" },
    { name: "Indent and Loading Register", period: "3 years", category: "operational" },
    { name: "Tool & Plant (Dead stock) register", period: "Permanent Record", category: "administrative" },
    { name: "Safety meeting register", period: "3 years", category: "safety" },
    { name: "Record of Station Equipment sent for repairs", period: "Permanent Record", category: "technical" },
    { name: "Register of outward and inward letters", period: "3 years", category: "administrative" },
    { name: "Register of important Circulars", period: "Permanent Record", category: "administrative" },
    { name: "Station Order Book", period: "Permanent Record", category: "administrative" },
    { name: "Spectacles Register", period: "1 year", category: "operational" },
    { name: "Unconnected Wagon Register", period: "3 years", category: "operational" },
    { name: "Register showing Analysis of late starts to Goods Trains at important yards", period: "3 years", category: "operational" },
    { name: "Summary of Daily receipt and dispatch of wagons and work done", period: "Local orders to be issued by DRM", category: "operational" },
    { name: "Register showing load of Goods trains and Goods trains run under load", period: "3 years", category: "operational" },
    { name: "Unusual Register, other registers and Records maintained in control offices and at specified stations", period: "Local Orders to be issued by DRM", category: "operational" },
    { name: "Unusual Incident register", period: "Permanent", category: "safety" }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'operational': return 'from-emerald-500/20 to-teal-500/20 border-emerald-400/30';
      case 'technical': return 'from-purple-500/20 to-indigo-500/20 border-purple-400/30';
      case 'safety': return 'from-red-500/20 to-pink-500/20 border-red-400/30';
      case 'administrative': return 'from-blue-500/20 to-cyan-500/20 border-blue-400/30';
      default: return 'from-gray-500/20 to-slate-500/20 border-gray-400/30';
    }
  };

  const getPeriodColor = (period: string) => {
    if (period.includes('Permanent')) return 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-red-400';
    if (period.includes('3 years')) return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-yellow-400';
    if (period.includes('1 year')) return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-400';
    if (period.includes('6 months')) return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400';
    return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white border-gray-400';
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Register Preservation Periods
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to station operating registers and records preservation periods
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Introduction
            </h2>
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                The period for which Station Operating Registers and Records are required to be
                preserved is advised by division office. An indicative period of preservation from the
                date of completion of various registers / records is as follows:
              </p>
            </div>
          </div>

          {/* Registers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {registerData.map((register, index) => (
              <div key={index} className={`bg-gradient-to-br ${getCategoryColor(register.category)} backdrop-blur-lg p-6 rounded-xl border hover:shadow-xl hover:scale-105 transition-all duration-300`}>
                <div className="flex justify-between items-start mb-4">
                  <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </span>
                  <span className={`px-4 py-2 rounded-full text-xs font-semibold border shadow-lg ${getPeriodColor(register.period)}`}>
                    {register.period}
                  </span>
                </div>
                <h3 className="text-gray-200 font-semibold leading-relaxed lg:text-lg text-base">{register.name}</h3>
              </div>
            ))}
          </div>

          {/* Important Notes Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 p-2 lg:p-4 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Important Notes
            </h2>
            <div className="space-y-6">
              {[
                "In calculating the one year or the three years period, the year to which the books and documents relate, and the year in which they are to be destroyed should be excluded.",
                "Record pertaining to Court cases, departmental enquiries should not be destroyed till three years from the date the case is decided.",
                "Record pertaining to public claims etc., or those under reference from Home or other railways, should not be destroyed without permission from DRM concerned.",
                "Each book/register when completed must be stocked in a bundle with a cover showing dates of commencement and completion."
              ].map((note, index) => (
                <div key={index} className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-red-400/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <span className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 lg:p-4 rounded-full shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white">Preservation Period Legend</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { period: "Permanent", color: "from-red-500 to-pink-500", border: "border-red-400" },
                { period: "3 Years", color: "from-yellow-500 to-orange-500", border: "border-yellow-400" },
                { period: "1 Year", color: "from-blue-500 to-cyan-500", border: "border-blue-400" },
                { period: "6 Months", color: "from-green-500 to-emerald-500", border: "border-green-400" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:shadow-lg transition-all duration-300">
                  <span className={`w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-r ${item.color} border ${item.border} rounded mr-3 shadow-lg`}></span>
                  <span className="text-gray-200 font-semibold lg:text-lg text-base">{item.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-10 px-4 border border-white/20">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 text-center">Register Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-emerald-400/30">
                <div className="text-3xl font-bold text-white">{registerData.filter(r => r.category === 'operational').length}</div>
                <div className="lg:text-lg text-sm text-gray-300 mt-2">Operational</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-purple-400/30">
                <div className="text-3xl font-bold text-white">{registerData.filter(r => r.category === 'technical').length}</div>
                <div className="lg:text-lg text-sm text-gray-300 mt-2">Technical</div>
              </div>
              <div className="text-center bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-red-400/30">
                <div className="text-3xl font-bold text-white">{registerData.filter(r => r.category === 'safety').length}</div>
                <div className="lg:text-lg text-sm text-gray-300 mt-2">Safety</div>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-blue-400/30">
                <div className="text-3xl font-bold text-white">{registerData.filter(r => r.category === 'administrative').length}</div>
                <div className="lg:text-lg text-sm text-gray-300 mt-2">Administrative</div>
              </div>
            </div>
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

export default RegisterPreserve