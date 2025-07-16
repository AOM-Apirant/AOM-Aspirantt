import React from 'react'

const TDMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Traction Distribution Management System (TDMS)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Digital platform for Traction Assets Management, Inspections, and Maintenance across Indian Railways
          </p>
        </div>

        {/* Challenges Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-red-100 text-red-600 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </span>
            Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Migration of Traction Assets Management from manual to electronic system</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Integration with other Asset management platforms</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Real time information capturing during inspections</li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Forecasting of Asset life based on codal life and inspection results</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Proactive traction maintenance for improved reliability</li>
            </ul>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span className="text-gray-700">Digitalization of Traction Assets and maintenance records</span></div>
              <div className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span className="text-gray-700">Elimination of physical inspection registers</span></div>
              <div className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span className="text-gray-700">Automated data validation and verification</span></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span className="text-gray-700">Predictive and prioritized Asset Maintenance</span></div>
              <div className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span className="text-gray-700">Single point destination for all Traction Assets information</span></div>
            </div>
          </div>
        </div>

        {/* Modules Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Traction Assets Master */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6a2 2 0 012-2h2a2 2 0 012 2v13" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Traction Assets Master</h3>
            <p className="text-gray-600 text-sm">Submodules for Mast/Portal, Turnout/X-over, ATD, Cantilever, Section Insulator, Over line Structure, and more.</p>
          </div>
          {/* Inspection & Maintenance */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Inspection & Maintenance</h3>
            <p className="text-gray-600 text-sm">Captures asset maintenance details, planning, and generates exception/compliances.</p>
          </div>
          {/* Failure Recording */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414A9 9 0 105.636 18.364l1.414-1.414A7 7 0 1116.95 7.05z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Failure Recording</h3>
            <p className="text-gray-600 text-sm">Records OHE failures affecting punctuality and Power Block/Traffic Block.</p>
          </div>
          {/* Real Time Data Logging */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Real Time Data Logging</h3>
            <p className="text-gray-600 text-sm">Mobile app enables real time capturing and reporting of OHE defects with photographs.</p>
          </div>
          {/* GPS Based Tracking */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">GPS Based Tracking</h3>
            <p className="text-gray-600 text-sm">Online map-based tracking of Patrolling teams and OHE assets.</p>
          </div>
          {/* Alerts & Integration */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Alerts & Integration</h3>
            <p className="text-gray-600 text-sm">Exception generation, SMS alerts, and seamless integration with other Railway Asset systems.</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Improved Data Accuracy */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Improved Data Accuracy
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Digitalization improves data collection and reduces errors</li>
              <li>• Optimal utilization of staff</li>
            </ul>
          </div>
          {/* Availability */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
              </svg>
              Availability
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• No need to carry registers, all reports available online</li>
              <li>• Historical data retrieval for any number of years</li>
            </ul>
          </div>
          {/* Reliable & Timely */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Reliable & Timely
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Optimum resource utilization and proactive maintenance</li>
              <li>• No time lag between data gathering and analysis</li>
            </ul>
          </div>
        </div>

        {/* More Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </span>
            More Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Standardized formats for data capture at centralized location</li>
              <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Automatic validation and verification of data</li>
              <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Forecasting of Asset life based on codal life and inspection results</li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Customized/parameter-driven reports for better decision making</li>
              <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Intelligent actionable reports available anytime anywhere</li>
            </ul>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Milestone</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-orange-100 text-orange-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              2018
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Implemented Since</h3>
            <p className="text-gray-600">TDMS has been successfully implemented since 2018</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TDMS