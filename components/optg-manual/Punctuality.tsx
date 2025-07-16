import React from 'react'

const Punctuality = () => {
  const trainCategories = [
    {
      title: "M/Express trains",
      description: "Vandebharat, Rajdhani, Duronto, Shatabdi, Garib Rath, Jan-Shatabdi, Superfast, Mail/Express & Suvidha trains",
      icon: "🚄",
      color: "from-blue-50 to-blue-100 border-blue-200"
    },
    {
      title: "Passenger trains", 
      description: "DEMU, MEMU, Holiday Specials, Conventional rakes",
      icon: "🚂",
      color: "from-green-50 to-green-100 border-green-200"
    },
    {
      title: "Sub-urban trains",
      description: "Local and suburban train services",
      icon: "🚇",
      color: "from-purple-50 to-purple-100 border-purple-200"
    }
  ];

  const punctualityNorms = [
    {
      type: "Intra zonal & Terminating trains",
      condition: "arriving more than 15 minutes late at destination",
      time: "15 minutes",
      color: "bg-red-100 text-red-800 border-red-200"
    },
    {
      type: "Originating & Passing through trains", 
      condition: "handing over by more than 3 minutes at interchange point",
      time: "3 minutes",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200"
    },
    {
      type: "Sub-urban trains",
      condition: "arriving more than 5 minutes late at destination",
      time: "5 minutes",
      color: "bg-blue-100 text-blue-800 border-blue-200"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Train Punctuality</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Introduction Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
        <p className="text-gray-700 leading-relaxed">
          Punctuality in running of the passenger carrying trains is one of the significant
          indices of the Railway efficiency. It is monitored at various levels of Railway
          operations and management. Any serious dislocation of passenger trains also
          affects goods train running and corridor blocks. Thus punctuality is not only important
          for passenger satisfaction, but also have significant bearing on the freight operations
          maintenance & safety.
        </p>
      </div>

      {/* Monitoring System Section */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
          Monitoring System
        </h2>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <p className="text-gray-700 leading-relaxed mb-4">
            Punctuality statistics on Division / Railway is monitored on daily basis for
            improvement through Punctuality Analysis Module (PAM) of Integrated Coaching
            Management System (ICMS). Based on ICMS data, inputs of which are made at
            different levels detailed analysis of bad runners, bad sections are done and action
            plan are drawn in order to improve punctuality. Integration of ICMS to COA ensures
            real time status of the train services.
          </p>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg border border-green-300">
            <span className="text-2xl mr-3">📊</span>
            <span className="text-lg font-semibold text-gray-800">PAM - Punctuality Analysis Module</span>
          </div>
        </div>
      </div>

      {/* Train Categories Section */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
          Train Categories
        </h2>
        <p className="text-gray-700 mb-6">
          To monitor the Passenger carrying trains effectively according to their importance,
          relevance and stock they are grouped into following categories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainCategories.map((category, index) => (
            <div key={index} className={`bg-gradient-to-br ${category.color} p-6 rounded-lg border`}>
              <div className="text-center mb-4">
                <span className="text-4xl mb-3 block">{category.icon}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{category.title}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Punctuality Norms Section */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
          Punctuality Norms
        </h2>
        <p className="text-gray-700 mb-6">
          Train arriving late is considered to be &ldquo;Lost Train&rdquo; based on the following norms.
        </p>
        <div className="space-y-4">
          {punctualityNorms.map((norm, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">{norm.type}</h3>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-bold border ${norm.color}`}>
                  {norm.time}
                </span>
              </div>
              <p className="text-gray-700 ml-11">{norm.condition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Punctuality Formula Section */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg border border-orange-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Punctuality Calculation Formula</h2>
        <div className="bg-white p-6 rounded-lg border border-orange-300 text-center">
          <div className="text-3xl font-bold text-gray-800 mb-4">
            % Punctuality = 
          </div>
          <div className="text-xl text-gray-700 mb-4">
            (Total No. of trains - No. of trains lost Punctuality) × 100
          </div>
          <div className="text-2xl font-bold text-gray-800">
            (Total No. of trains)
          </div>
        </div>
        <div className="mt-6 text-center">
          <span className="text-lg text-gray-700 font-semibold">
            📈 This formula helps calculate the overall punctuality percentage of train services
          </span>
        </div>
      </div>
    </div>
  )
}

export default Punctuality