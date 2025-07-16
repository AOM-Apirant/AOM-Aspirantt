import React from 'react'

const PMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Parcel Management System (PMS)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive IT-enabled solution for parcel booking, tracking, and management across Indian Railways
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
                To strengthen parcel booking and movement system using IT
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Removal of manual calculations and imposing of penalties
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Online Internet based parcel booking facility
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To facilitate tracking of parcels sent through Indian Railways
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To leverage state-of-art technological solutions
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
                <span className="text-gray-700">IT enablement of Parcel booking and tracking system throughout Indian Railways</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Automatic calculation of undercharge, demurrage and wharfage penalties</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Online access to General public for parcel booking activities</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Tracking parcel with barcode technology and SMS</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Technology driven Parcel Management System implementation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Parcel Booking */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Parcel Booking</h3>
            <p className="text-gray-600 text-sm">
              Forwarding note generation, Railways Receipt generation, Parcel Way Bills, and SMS-based alerts to consignor and consignee.
            </p>
          </div>

          {/* Barcode Printing */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Barcode Printing (IR)</h3>
            <p className="text-gray-600 text-sm">
              Generate 2D Barcode Stickers for tracking consignments with Receipt no., source and destination information.
            </p>
          </div>

          {/* Loading/Unloading */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Loading/Unloading</h3>
            <p className="text-gray-600 text-sm">
              Prioritized loading, advance information, Hand Held Terminals for real-time status updates and SMS alerts.
            </p>
          </div>

          {/* Delivery Module */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Delivery Module</h3>
            <p className="text-gray-600 text-sm">
              Generation of delivery gate pass, automatic calculation of charges, and SMS alerts upon delivery.
            </p>
          </div>

          {/* MIS Reporting */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">MIS Reporting</h3>
            <p className="text-gray-600 text-sm">
              Generate reports for daily transactions in various formats required by station, division, TA and zonal offices.
            </p>
          </div>

          {/* Lease e-Registration */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 text-teal-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Lease e-Registration</h3>
            <p className="text-gray-600 text-sm">
              Online registration for new Lease holders to participate in e-tendering of luggage compartments.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-yellow-100 text-yellow-600 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">⚡</span>
                Direct capture of parcel weight electronically
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">⚡</span>
                Universal windows for all destinations for booking
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">⚡</span>
                Single window for weighment and cash payment
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">⚡</span>
                Advance unloading guidance about inward parcel
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">⚡</span>
                Tracking parcel with barcode technology and SMS
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">⚡</span>
                Train Master entry along with scales by Railways
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">⚡</span>
                e-Forwarding Note facility for general public
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Customer Benefits */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Customer Benefits
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Track latest status through internet and SMS</li>
              <li>• Reduction in time required for weighment and booking</li>
            </ul>
          </div>

          {/* Staff Benefits */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Staff Benefits
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Automatic freight calculation based on latest rules</li>
              <li>• Reduction in human errors</li>
            </ul>
          </div>

          {/* Railway Benefits */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Railway Benefits
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Loading as per priority, curtailing malpractices</li>
              <li>• Beneficial to Accounts for internal check</li>
              <li>• Reduction in Claims</li>
              <li>• Potential for revenue generation</li>
            </ul>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Milestones Achieved</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                67
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Divisional HQs Commissioned</h3>
              <p className="text-gray-600">Successfully implemented across major divisional headquarters</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                87+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Stations Covered</h3>
              <p className="text-gray-600">Extensive network coverage across railway stations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PMS