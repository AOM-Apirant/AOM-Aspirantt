import React from 'react'

const RSMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            RPF Security Management System (RSMS)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital platform for Railway Protection Force operations, crime management, and security control
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
                Modernize Control Room Operations and strengthen RPF Security Management
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Enable quick sharing of multimedia rich information with Action Takers
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Facilitate electronic recording and maintenance of Crime Records & Registers
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Automate recording and exchange of Intelligence information
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Leverage state-of-art technology for IT enablement of RPF operations
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
                <span className="text-gray-700">Digitalize Control Room Multimedia Messaging (Emergency, Crime, Intelligence)</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Fully digitize Crime Records & Registers with minimum data entry</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Online Crime Reviews & monitoring through DSS dashboards</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Effective response to crisis situations through better monitoring</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Easy to use system even for non-technical users</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Modules Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Decision Support System */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Decision Support System (DSS)</h3>
            <p className="text-gray-600 text-sm">
              Dashboard providing crisp glimpse of actions, alerts, upcoming events, crime cases, and performance metrics.
            </p>
          </div>

          {/* Control Room Messaging */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Control Room Messaging</h3>
            <p className="text-gray-600 text-sm">
              Compose, Inbox, Outbox, Emergency messaging, attachments, archiving, and integration with crime records.
            </p>
          </div>

          {/* Crime Record and Register */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Crime Record and Register</h3>
            <p className="text-gray-600 text-sm">
              Electronic maintenance of C3, C4, C5, RPUP Act registers with inter-linkage and advanced features.
            </p>
          </div>

          {/* Special Intelligence Branch */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Special Intelligence Branch</h3>
            <p className="text-gray-600 text-sm">
              Automated recording and exchange of Intelligence information, forecasts, alerts, and mandatory reports.
            </p>
          </div>

          {/* Miscellaneous Crime */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Miscellaneous Crime (MC)</h3>
            <p className="text-gray-600 text-sm">
              Covers crimes not in CRR module, non-crime incidents, heinous crimes, and passenger-related crimes.
            </p>
          </div>

          {/* Monthly Crime Review */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Monthly Crime Review (MCR)</h3>
            <p className="text-gray-600 text-sm">
              Report generating module with automatic compilation, data validation, and systematic report generation.
            </p>
          </div>
        </div>

        {/* Helpdesk Module */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414A9 9 0 105.636 18.364l1.414-1.414A7 7 0 1116.95 7.05z" />
            </svg>
            Helpdesk Module
          </h2>
          <p className="text-lg">
            Providing hand holding support to users for registering complaints and suggestions for the software.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Information Availability */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
              </svg>
              Information Availability
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• 24X7 browser based system</li>
              <li>• Online Tracking Mechanism for all cases</li>
              <li>• Simultaneous availability at multiple locations</li>
              <li>• Effective crisis response through monitoring</li>
              <li>• Seamless data exchange between modules</li>
            </ul>
          </div>

          {/* Easy to Use */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Easy to Use
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Auto generated reports through system data</li>
              <li>• User-friendly for non-technical users</li>
              <li>• Multi-lingual interface</li>
              <li>• Role based access & Audit Trail</li>
              <li>• Pictorial view for comparative analysis</li>
            </ul>
          </div>

          {/* Workflow */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Workflow
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Workflow system for all types of approvals</li>
              <li>• Paperless working environment</li>
              <li>• Easing out work management</li>
              <li>• Audit trail of all actions</li>
              <li>• Future reference maintenance</li>
            </ul>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Milestones Achieved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                6000+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Registered Users</h3>
              <p className="text-gray-600">Active users across the RPF network</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                3,00,000+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cases Registered</h3>
              <p className="text-gray-600">Crime cases processed through the system</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                1 Cr. +
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Messages Transmitted</h3>
              <p className="text-gray-600">Total messages sent across the network</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSMS