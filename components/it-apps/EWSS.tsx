import React from 'react'

const EWSS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            E-WORKING SOFTWARE SOLUTION (EWSS)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Workflow-based electronic office solution customized for Railway needs to handle file movements and office automation
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
                To reduce time involved in physical movement of files
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To enable immediate tracking of any file within office, division or zone
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                A major shift in working culture from manual notings to online remarks
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To ensure accountability for all actions by maintaining an audit trail
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To conceptualise an effective electronic office management system
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
                <span className="text-gray-700">Improve efficiency and decision-making ability through digitalization</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Provide effective online tracking mechanism for files/documents</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Enhance decision-making capabilities with extensive search</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Eliminate wear and tear associated with manual files</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Workflow-based solution customized for Railway needs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Modules Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* File Movement & Tracking */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">File Movement & Tracking</h3>
            <p className="text-gray-600 text-sm">
              Complete solution for electronic file handling with Dakpad, File tray, E-Letter, forwarding letters, and search capabilities.
            </p>
          </div>

          {/* Manual File Tracking System */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Manual File Tracking System</h3>
            <p className="text-gray-600 text-sm">
              Tracks movement of manual files across SECR departments with search engine and performance evaluation reports.
            </p>
          </div>

          {/* Leave Module */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Leave Module</h3>
            <p className="text-gray-600 text-sm">
              Manages all leave types: Casual Leave, Restricted Holiday, HQ Leave, Average Pay, Half Pay, Encashment, and Ex-India Leave.
            </p>
          </div>

          {/* Tour Program Module */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tour Program Module</h3>
            <p className="text-gray-600 text-sm">
              Online application and sanction of Tour Programs with tracking and automatic TA bill generation through TAJ application.
            </p>
          </div>

          {/* Non Stock Indent */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Non Stock Indent</h3>
            <p className="text-gray-600 text-sm">
              Raising of Non Stock Indent requisition with customizable flow, online status tracking, and useful reports generation.
            </p>
          </div>

          {/* Add-ons */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 text-teal-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Add-ons</h3>
            <p className="text-gray-600 text-sm">
              Store Tender Monitoring, Sick list entry, Emergency Quot, and other modules enhancing EWSS usability.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* File Tracking Benefits */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              File Tracking
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Easy tracking with reports and search engine</li>
              <li>• Saves time and effort</li>
              <li>• Effective utilization of Human Resources</li>
              <li>• Central repository for information access</li>
            </ul>
          </div>

          {/* Decision Making Benefits */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Decision Making
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Extensive search capabilities</li>
              <li>• Instant access (24x7) to information</li>
              <li>• Reduces process completion time</li>
              <li>• Increases employee efficiency</li>
            </ul>
          </div>

          {/* Environment Friendly Benefits */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Environment Friendly
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Considerable reduction in paper usage</li>
              <li>• Major step towards green environment</li>
              <li>• Sustainable office practices</li>
              <li>• Digital transformation benefits</li>
            </ul>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Milestones Achieved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                3000+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Registered Zonal Users</h3>
              <p className="text-gray-600">Active users across railway zones</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                15
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Years of Usage</h3>
              <p className="text-gray-600">Proven track record of successful implementation</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 text-emerald-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                50+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Departments Covered</h3>
              <p className="text-gray-600">Comprehensive coverage across railway departments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EWSS