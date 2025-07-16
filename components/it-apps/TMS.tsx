import React from 'react'

const TMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Train Management System (TMS)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive digital platform for Track Assets Management, Inspections, and Maintenance across Indian Railways
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
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Migration of Track Assets Management from manual to electronic system
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Integration with other Asset management platforms
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Single platform for Stores Management across Indian Railways
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                IOT enabled Real Time data collection and analysis
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Proactive track and related assets maintenance
              </li>
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
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Digitalization of Track Assets and maintenance records</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Elimination of physical inspection registers</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Automated data validation and verification processes</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Predictive and prioritized Asset Maintenance</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Single point destination for all Track Assets information</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Modules Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Data Acquisition */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Acquisition</h3>
            <p className="text-gray-600 text-sm">
              Various assets and inspection entry options to capture data from users at different levels.
            </p>
          </div>

          {/* Inspection Module */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Inspection Module</h3>
            <p className="text-gray-600 text-sm">
              Direct & Indirect inspections including Push Trolley, OMS, TRC, USFD and more.
            </p>
          </div>

          {/* Track Diagram */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Track Diagram</h3>
            <p className="text-gray-600 text-sm">
              Pictorial depiction of track structure data including PSR, TGI, and traffic density.
            </p>
          </div>

          {/* Stores Management */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Stores Management</h3>
            <p className="text-gray-600 text-sm">
              Centralized platform for 3000+ inventory holding units across the country.
            </p>
          </div>

          {/* Fracture Analysis */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fracture Analysis</h3>
            <p className="text-gray-600 text-sm">
              Decision support module with historical analysis and parameter-based fracture tracking.
            </p>
          </div>

          {/* Track Recording Car */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 text-teal-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Track Recording Car (TRC)</h3>
            <p className="text-gray-600 text-sm">
              IOT integration for real-time track parameters: Alignment, Twist, Gauge, TGI.
            </p>
          </div>
        </div>

        {/* Additional Modules Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Level Crossing Overhauling */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-yellow-100 text-yellow-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Level Crossing Overhauling
            </h3>
            <p className="text-gray-600">
              Analysis reports for level crossing overhauling with advance planning capabilities.
            </p>
          </div>

          {/* Field Sensor Devices */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-cyan-100 text-cyan-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </span>
              Field Sensor Devices
            </h3>
            <p className="text-gray-600">
              Real-time monitoring of rail temperature and bridge water levels for proactive maintenance.
            </p>
          </div>

          {/* Information Management */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Information Management
            </h3>
            <p className="text-gray-600">
              Single source for Railway Board Circulars, Zonal Circulars, and Important Instructions.
            </p>
          </div>

          {/* PCDO Module */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-violet-100 text-violet-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              PCDO Module
            </h3>
            <p className="text-gray-600">
              Periodical Confidential Demi Official reports with department-wise performance analysis.
            </p>
          </div>
        </div>

        {/* Mobile Version Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Mobile Version of TMS
          </h2>
          <p className="text-lg mb-4">
            Mobile application developed for use on mobile & tablets, very useful for senior management and officials on the move.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• Rail fracture analysis</li>
              <li>• IMR welds</li>
              <li>• Overdue Ultrasonic testing</li>
            </ul>
            <ul className="space-y-2">
              <li>• Track machine working reports</li>
              <li>• Engineering Control&apos;s morning position</li>
              <li>• Real-time alerts and notifications</li>
            </ul>
          </div>
        </div>

        {/* Misc Services Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </span>
            Miscellaneous Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Intelligent Actionable Reports available anytime anywhere
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Better decision making through data analysis at different levels
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Prioritization of Works based on inspection results
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Need Based Deployment of Gang and Machine
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Comparison of Track Quality Based on TRC & OMS Results
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Quality of inspection vastly improved
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Inventory management warning of stores falling below critical limit
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Message Centre for collaboration among users
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Monitoring Benefits */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Monitoring
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Elimination of manual record keeping</li>
              <li>• Effective monitoring of inspections & follow-ups</li>
              <li>• Improved transparency at every level</li>
              <li>• Proactive maintenance actions using Data Analytics</li>
            </ul>
          </div>

          {/* Availability Benefits */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
              </svg>
              Availability
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Holistic planning at Zonal/Divisional level</li>
              <li>• Quick access to information</li>
              <li>• Anywhere anytime access through web-based application</li>
              <li>• Complete data available through single window</li>
              <li>• Automated alerts</li>
            </ul>
          </div>

          {/* Management Benefits */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Management
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Better inventory management control</li>
              <li>• Optimum resource utilization</li>
              <li>• Green initiative, saving tonnes of paper annually</li>
              <li>• Officers free from routine activities</li>
              <li>• Focus on real engineering works</li>
            </ul>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Milestones Achieved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                1,70,000+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Inspections</h3>
              <p className="text-gray-600">Digital inspections completed across the network</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                90,000+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Asset Changes</h3>
              <p className="text-gray-600">Track assets managed and updated</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                1,00,000+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Registers Withdrawn</h3>
              <p className="text-gray-600">Physical registers replaced with digital system</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TMS