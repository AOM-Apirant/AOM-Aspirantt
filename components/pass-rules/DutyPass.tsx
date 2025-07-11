import React from 'react'

const DutyPass = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Duty Pass
              </h2>
              <p className="text-orange-600 font-medium">
                Official travel authorization for railway servants
              </p>
            </div>
          </div>

          {/* Duty Pass Entitlement Cards - Mobile Friendly */}
          <div className="space-y-6 mb-8">
            {/* Gazetted Cadre */}
            <div className="font-bold text-orange-700 text-lg mb-2">
              Gazetted Cadre
            </div>
            <div className="grid gap-4">
              <div className="bg-white rounded-xl shadow border-l-4 border-yellow-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">
                    (a) (i) CRB & Board Members including FC
                  </div>
                  <div className="text-gray-600 text-sm">
                    (ii) DGs & GMs granted Apex Scale
                  </div>
                  <div className="text-gray-600 text-sm">
                    (iii) Chief Commissioner for Railway Safety
                  </div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 17
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold text-sm">
                    Gold Pass
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-gray-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">
                    (b) GMs & other equivalent Officers
                  </div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 16
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-semibold text-sm">
                    Silver Pass
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-gray-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">
                    (c) HAG Officers (Including NF-HAG)
                  </div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 15
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-semibold text-sm">
                    Silver Pass
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-yellow-700 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">
                    (d) SAG Officers (Including NF-SAG)
                  </div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 14
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm">
                    Bronze/First Class &apos;A&apos; Pass (1-AC authority)
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-yellow-700 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">
                    (e) Selection Grade Officers
                  </div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 13
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm">
                    Bronze/First Class &apos;A&apos; Pass (1-AC authority)
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-yellow-700 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">
                    (f) JAG Officers
                  </div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 12
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm">
                    Bronze/First Class &apos;A&apos; Pass (1-AC authority)
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-yellow-700 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">
                    (g) Other Group &apos;A&apos; &amp; &apos;B&apos; Gazetted
                    Officers
                  </div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 11, 10, 9, 8
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm">
                    Bronze/First Class &apos;A&apos; Pass
                  </span>
                </div>
              </div>
            </div>
            <div className="font-bold text-orange-700 text-lg mt-6 mb-2">
              Non-gazetted Cadre
            </div>
            <div className="grid gap-4">
              <div className="bg-white rounded-xl shadow border-l-4 border-green-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">
                    6 &amp; above
                  </div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 6 &amp; above
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm">
                    First Class Pass
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-green-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">5</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 5
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm">
                    First Class Pass
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-blue-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">4</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 4
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold text-sm">
                    Second Class &apos;A&apos; Pass
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-blue-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">3</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 3
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold text-sm">
                    Second Class &apos;A&apos; Pass
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-indigo-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">2</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 2
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold text-sm">
                    Second/Sleeper Class Pass
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-indigo-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">1</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">
                    PLPM: 1
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold text-sm">
                    Second/Sleeper Class Pass
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Existing content below remains unchanged */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-orange-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
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
                  Eligibility & Purpose
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    A railway servant may be issued a duty pass for performing
                    journey on duty.
                  </p>

                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>For Travel entitlement</strong> please refer RBE
                      No. 16/2019 Dated 31/01/2019
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  Key Features
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    Issued for official duty travel only
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    Valid for specific journey and duration
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    Must be properly authorized and signed
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    Subject to travel entitlement rules
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Special Notes */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-red-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </span>
                  Special Note
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Officers in PLPM 8, 9, 10 &amp; 11</strong> shall
                      continue to be issued Bronze Pass/First Class
                      &apos;A&apos; Card Pass with validity for travel only over
                      Zonal Railways or Indian Railways as per existing
                      conditions.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Important Points:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2 mt-1">•</span>
                        Bronze Pass for specific officer categories
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2 mt-1">•</span>
                        First Class &apos;A&apos; Card Pass validity
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2 mt-1">•</span>
                        Limited to Zonal Railways or Indian Railways
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2 mt-1">•</span>
                        Subject to existing conditions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 shadow-md border border-green-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
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
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      1
                    </div>
                    <span className="text-gray-700">
                      Submit duty pass application
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      2
                    </div>
                    <span className="text-gray-700">
                      Attach duty order/authorization
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      3
                    </div>
                    <span className="text-gray-700">
                      Get approval from competent authority
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      4
                    </div>
                    <span className="text-gray-700">
                      Collect pass from issuing office
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold">
                    Need Help with Duty Pass?
                  </h4>
                  <p className="text-orange-100">
                    Contact your department head or HR office for assistance
                  </p>
                </div>
              </div>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default DutyPass