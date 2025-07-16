import React from 'react'

const ICMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Integrated Coaching Management System (ICMS)
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Challenges Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-500">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-red-100 text-red-600 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Online Punctuality Analysis & Monitoring
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Online asset failure reporting and analysis
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Online analysis of coach holding and its utilization for better decision making
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Maintenance of Train Master over Indian Railways to avoid duplicity
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To provide support to the entire gamut of coaching operations through digitalization
              </li>
            </ul>
          </div>

          {/* Goals Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Goals
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Online monitoring and reporting of Punctuality performance of passenger carrying trains
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Digitalization of all operational activities related to Locomotives, Coaches and Rakes
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Seamless Integration with train operation applications
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Centralized data entry and reporting
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Integrated application framework for seamless integration with various systems
              </li>
            </ul>
          </div>
        </div>

        {/* Modules Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Core Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* PAM Module */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">PAM</h3>
              <p className="text-gray-700">
                Punctuality Analysis & Monitoring (PAM) module provides various functionalities and reports for monitoring the punctuality performance of passenger carrying trains.
              </p>
            </div>

            {/* COIS Module */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">COIS</h3>
              <p className="text-gray-700">
                Coaching Operations Information System (COIS) module supports all operational activities related to passenger Coaches and Rakes.
              </p>
            </div>

            {/* Passenger Loco Module */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Passenger Loco Module</h3>
              <p className="text-gray-700">
                This module captures all operational activities of locos under passenger service. Integrated with FOIS for Shed-In/Shed-out and Service exchange (Passenger → Goods & Goods → Passenger).
              </p>
            </div>

            {/* Utility & Mail */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border border-teal-200">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Utility & Mail</h3>
              <p className="text-gray-700">
                Facilitates user feedback submission, ICMS user management, and provides separate mailing facility for communication among ICMS users.
              </p>
            </div>

            {/* Integration Service */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 border border-indigo-200">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Integration Service</h3>
              <p className="text-gray-700">
                ICMS modules are integrated with important IR systems including COA, NTES, FOIS, PRS, CMM, SATSaNG, CMS, PMS, and CTTL.
              </p>
            </div>

            {/* MIS Reports */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 border border-pink-200">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">MIS Reports</h3>
              <p className="text-gray-700">
                Provides various reports including master data, monitoring, user performance, historical, analytical, and utility reports for all user levels.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Improved Accuracy */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Improved Accuracy
              </h3>
              <ul className="space-y-2 text-gray-700 ml-12">
                <li>• Single point of Data entry</li>
                <li>• Single point centralized reporting</li>
                <li>• Trend analysis of past years for improvement</li>
                <li>• System-generated Caution orders</li>
                <li>• Accurate coach reporting</li>
              </ul>
            </div>

            {/* Automation */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Automation
              </h3>
              <ul className="space-y-2 text-gray-700 ml-12">
                <li>• Automated System generated VG</li>
                <li>• Automation of coach number sending to PRS</li>
                <li>• Improved Passenger Loco reporting</li>
                <li>• Online FTR Train(s) / Coach(es) booking</li>
                <li>• Time Table Integration & Distribution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">20+</div>
              <div className="text-lg">Integrated Applications</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">400+</div>
              <div className="text-lg">Terminals</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24X7</div>
              <div className="text-lg">Helpdesk</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ICMS