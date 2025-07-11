import React from 'react'

const ComplimentaryPass = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-red-50 to-pink-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-red-200">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Complimentary Card Passes
              </h2>
              <p className="text-red-600 font-medium">
                Freedom Fighters & Widows - Special travel benefits
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-red-200 mb-8">
            <p className="text-gray-700 leading-relaxed">
              Freedom fighters and their widows are entitled to special
              complimentary card passes for free rail travel on All Indian
              Railways with specific conditions and restrictions.
            </p>
          </div>

          {/* Travel Entitlements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Regular Trains */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">Regular Trains</h4>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm">
                  <strong>Class:</strong> 1st Class/2nd AC
                </p>
                <p className="text-sm">
                  <strong>Companion:</strong> Allowed in same class
                </p>
                <p className="text-sm">
                  <strong>Restrictions:</strong> Any train other than
                  Rajdhani/Shatabdi trains
                </p>
                <p className="text-sm">
                  <strong>Coverage:</strong> All Indian Railways [except Metro
                  Railway/Kolkata]
                </p>
              </div>
            </div>

            {/* Rajdhani/Shatabdi Trains */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Rajdhani/Shatabdi Trains
                </h4>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm">
                  <strong>Rajdhani:</strong> 3rd AC
                </p>
                <p className="text-sm">
                  <strong>Shatabdi/Jan Shatabdi:</strong> Chair Car [CC]
                </p>
                <p className="text-sm">
                  <strong>Companion:</strong> Allowed in same class
                </p>
                <p className="text-sm">
                  <strong>Note:</strong> Special stamping required
                </p>
              </div>
            </div>
          </div>

          {/* Pass Stamping Requirements */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
              Pass Stamping Requirements
            </h4>
            <div className="bg-yellow-100 rounded-lg p-4 border border-yellow-300">
              <p className="text-sm italic text-gray-700">
                &quot;Valid for travel in 3rd AC in Rajdhani trains and Chair
                Car [CC] in Shatabdi/Jan-Shatabdi trains along with a companion
                in same class...&quot;
              </p>
            </div>
          </div>

          {/* Pass Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Validity */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">Validity</h4>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="text-sm">
                  <strong>Persons:</strong> Two persons (self and companion)
                </p>
                <p className="text-sm">
                  <strong>Duration:</strong> Life-time basis
                </p>
                <p className="text-sm">
                  <strong>Renewal:</strong> Every year
                </p>
              </div>
            </div>

            {/* Issuance Period */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">Issuance Period</h4>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="text-sm">
                  <strong>Grant Period:</strong> One year
                </p>
                <p className="text-sm">
                  <strong>Renewal:</strong> Annual renewal required
                </p>
                <p className="text-sm">
                  <strong>Validity:</strong> Continuous lifetime benefit
                </p>
              </div>
            </div>

            {/* Issuing Authority */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Issuing Authority
                </h4>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="text-sm">
                  <strong>Location:</strong> Divisional/Zonal Headquarters only
                </p>
                <p className="text-sm">
                  <strong>Restriction:</strong> Cannot be issued at other
                  offices
                </p>
                <p className="text-sm">
                  <strong>Centralized:</strong> Controlled issuance
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Important Notes
              </h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <p>
                    Passes are valid for lifetime but require annual renewal
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <p>Companion facility is available in all cases</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <p>Metro Railway/Kolkata is excluded from coverage</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <p>
                    Special stamping is mandatory for Rajdhani/Shatabdi travel
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Application Process
              </h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    1
                  </div>
                  <span>
                    Submit application with freedom fighter certificate
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    2
                  </div>
                  <span>Visit Divisional/Zonal Headquarters only</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    3
                  </div>
                  <span>Collect pass with proper stamping</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    4
                  </div>
                  <span>Renew annually as required</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold">
                    Freedom Fighter Pass Assistance
                  </h4>
                  <p className="text-red-100">
                    Contact Divisional/Zonal Headquarters for freedom fighter
                    pass applications
                  </p>
                </div>
              </div>
              <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ComplimentaryPass