import React from 'react'

const EDrishti = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            e-Drishti / RailDrishti
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Modern All-in-One DSS dashboard providing real-time insights and transparency for Indian Railways stakeholders
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
                Real-time availability of mammoth information to top management
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Zero compilation and information collection time delays
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Error free data for Quick-Analysis, decision making & monitoring
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Digitally promote Transparency and accountability
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Bring information from myriad sources under single window
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
                <span className="text-gray-700">Provide meaningful information through data mining</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Data Analytics based SWOT Analysis of major KPIs</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">24*7 availability of current information</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Development of G2C tool for government communication</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Empower citizens with Multi-media monitoring features</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* KPIs At a Glance */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">KPIs At a Glance</h3>
            <p className="text-gray-600 text-sm">
              Important KPIs including Earnings, Expenditure, Tickets, Passengers, Freight Loading, Punctuality, and more with trend analysis.
            </p>
          </div>

          {/* Services */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Services</h3>
            <p className="text-gray-600 text-sm">
              Six services including PNR enquiry, ODC application, Complaint Enquiry, Tender Enquiry, Shramik Enquiry, and Freight enquiries.
            </p>
          </div>

          {/* LIVE Kitchen Feeds */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">LIVE Kitchen Feeds</h3>
            <p className="text-gray-600 text-sm">
              Live feeds from Railway kitchens allowing public to observe food preparation and packaging for transparency.
            </p>
          </div>

          {/* Trains On Run */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Trains On Run</h3>
            <p className="text-gray-600 text-sm">
              Real-time view of all passenger and freight trains on country map with running status and contact information.
            </p>
          </div>

          {/* Grievances */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Grievances</h3>
            <p className="text-gray-600 text-sm">
              Track Railway-related grievances with status monitoring, zone-wise breakup, and complaint type analysis.
            </p>
          </div>

          {/* Shramik Kalyan */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 text-teal-600 p-3 rounded-lg mb-4 inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Shramik Kalyan</h3>
            <p className="text-gray-600 text-sm">
              Self-service enquiry mechanism for unorganized sector labourers to check wages, contractors, and mandays.
            </p>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-yellow-100 text-yellow-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              Achievements
            </h3>
            <p className="text-gray-600">
              View achievements of Indian Railways as a whole and achievements in various states and constituencies, including 100 days achievements of government.
            </p>
          </div>

          {/* Heritage */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Heritage
            </h3>
            <p className="text-gray-600">
              Cultural aspect showcasing Rail heritage, memorable journeys, 360 degree Virtual Tours, and tourism desk for Railway-related services.
            </p>
          </div>

          {/* Station Beautification */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              Station Beautification
            </h3>
            <p className="text-gray-600">
              Monitor progress of major initiatives for Passenger Amenities with before and after images across IR network.
            </p>
          </div>

          {/* Freight Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-pink-100 text-pink-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              Freight Calculator
            </h3>
            <p className="text-gray-600">
              Freight calculator for transportation by Railways and links to nine important Railway websites from citizen&apos;s perspective.
            </p>
          </div>
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
              <li>• Real time availability with zero delays</li>
              <li>• Automated data integrations</li>
              <li>• Minimal chances of data errors</li>
            </ul>
          </div>

          {/* Live Monitoring */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Live Monitoring
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Live Kitchen streams visibility</li>
              <li>• Station Development Photographs</li>
              <li>• Significant improvements in cleanliness</li>
            </ul>
          </div>

          {/* Digital India Initiative */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Digital India Initiative
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Single window for various stakeholders</li>
              <li>• As a &quot;Digital India Digital Rail initiative&quot;</li>
              <li>• Information and services availability</li>
            </ul>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Decision Support System */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              Decision Support System
            </h3>
            <p className="text-gray-600">
              First of a kind monitoring DSS mechanism for quick monitoring and decision making in Indian Railways, considered as one of the achievements in NDA government&apos;s 5 years achievement list.
            </p>
          </div>

          {/* Transparency */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
              Transparency
            </h3>
            <p className="text-gray-600">
              Digital step in promoting transparency and accountability by sharing government statistics, initiatives, and achievements with general public.
            </p>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Milestones Achieved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                3.25 Cr+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Page Views</h3>
              <p className="text-gray-600">Total page views on the platform</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                40+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Applications Integrated</h3>
              <p className="text-gray-600">Number of applications integrated into the platform</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                5 Lakh+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Station Photos</h3>
              <p className="text-gray-600">Station photographs uploaded to the platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EDrishti