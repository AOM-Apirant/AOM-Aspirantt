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
      case 'operational': return 'from-blue-50 to-blue-100 border-blue-200';
      case 'technical': return 'from-purple-50 to-purple-100 border-purple-200';
      case 'safety': return 'from-red-50 to-red-100 border-red-200';
      case 'administrative': return 'from-green-50 to-green-100 border-green-200';
      default: return 'from-gray-50 to-gray-100 border-gray-200';
    }
  };

  const getPeriodColor = (period: string) => {
    if (period.includes('Permanent')) return 'bg-red-100 text-red-800 border-red-200';
    if (period.includes('3 years')) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (period.includes('1 year')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (period.includes('6 months')) return 'bg-green-100 text-green-800 border-green-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Register Preservation Periods</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Introduction Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
        <p className="text-gray-700 leading-relaxed">
          The period for which Station Operating Registers and Records are required to be
          preserved is advised by division office. An indicative period of preservation from the
          date of completion of various registers / records is as follows:
        </p>
      </div>

      {/* Registers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {registerData.map((register, index) => (
          <div key={index} className={`bg-gradient-to-br ${getCategoryColor(register.category)} p-6 rounded-lg border`}>
            <div className="flex justify-between items-start mb-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPeriodColor(register.period)}`}>
                {register.period}
              </span>
            </div>
            <h3 className="text-gray-800 font-semibold leading-relaxed">{register.name}</h3>
          </div>
        ))}
      </div>

      {/* Important Notes Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">!</span>
          Important Notes
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">i</span>
            <p className="text-gray-700">
              In calculating the one year or the three years period, the year to which the books
              and documents relate, and the year in which they are to be destroyed should be
              excluded.
            </p>
          </div>
          <div className="flex items-start">
            <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">ii</span>
            <p className="text-gray-700">
              Record pertaining to Court cases, departmental enquiries should not be
              destroyed till three years from the date the case is decided.
            </p>
          </div>
          <div className="flex items-start">
            <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">iii</span>
            <p className="text-gray-700">
              Record pertaining to public claims etc., or those under reference from Home or
              other railways, should not be destroyed without permission from DRM
              concerned.
            </p>
          </div>
          <div className="flex items-start">
            <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">iv</span>
            <p className="text-gray-700">
              Each book/register when completed must be stocked in a bundle with a cover
              showing dates of commencement and completion.
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Preservation Period Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <span className="w-4 h-4 bg-red-100 border border-red-200 rounded mr-2"></span>
            <span className="text-sm text-gray-700">Permanent</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-yellow-100 border border-yellow-200 rounded mr-2"></span>
            <span className="text-sm text-gray-700">3 Years</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-blue-100 border border-blue-200 rounded mr-2"></span>
            <span className="text-sm text-gray-700">1 Year</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-green-100 border border-green-200 rounded mr-2"></span>
            <span className="text-sm text-gray-700">6 Months</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPreserve