import React from 'react'

const RetirementPass = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8 border-2 border-amber-200">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
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
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                Post-Retirement Complimentary Pass
              </h2>
              <p className="text-amber-600 font-medium text-sm sm:text-base">
                Retirement benefits for railway servants
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-amber-200 mb-8">
            <p className="text-gray-700 leading-relaxed">
              A post-retirement complimentary pass may be issued to a railway
              servant after retirement or after he ceases to be a railway
              servant.
            </p>
            <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-sm text-gray-700">
                <strong>For Travel entitlement</strong> please refer RBE No.
                16/2019 Dated 31/01/2019
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Advance Issue */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                <h4 className="font-semibold text-gray-800">Advance Issue</h4>
              </div>
              <p className="text-gray-700 text-sm">
                A retired railway servant may be issued, on request, one set of
                PRC Pass/Widow Pass in advance of the current calendar year from
                the date of issue, for journeys commencing in the next year duly
                debiting such issue of complimentary pass in the next
                year&apos;s account. The validity of the Pass will be for FIVE
                months, from the date of issue. RBE 41/2012
              </p>
            </div>

            {/* Medical Decategorisation */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Medical Decategorisation
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                A benefit of additional 5 years service for post-retirement
                complimentary passes may be allowed to those medically
                decategorised/unfit Railway servants who retire either by
                refusing to accept the alternative post or the alternative post
                being not available.
              </p>
            </div>

            {/* Retirement Year Entitlement */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                <h4 className="font-semibold text-gray-800">
                  Retirement Year Entitlement
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                In the year in which the Railway servant retires from service he
                is entitled to that number of single journey Post-retirement
                complimentary passes which represents the difference between the
                number of privilege passes he is normally entitled to in a
                calendar year while in service and the number actually availed
                by him.
              </p>
            </div>

            {/* Both Spouses Retired */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Both Spouses Retired
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                In cases where both husband and wife are retired Railway
                servants, they may avail the complimentary passes on each
                other&apos;s account.
              </p>
            </div>

            {/* Voluntary Retirement */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                  Voluntary Retirement
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                A benefit of 5 years service on voluntary retirement is granted
                towards the qualifying service for the grant of post-retirement
                complimentary passes on the same conditions as are laid down in
                Board&apos;s letter No. E (P&A) I 77 RT-46 dated 09.11.1977.
              </p>
            </div>

            {/* Identity Verification */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Identity Verification
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Pass Issuing Authority shall satisfy himself about the identity
                of the retired Railway employee before issuing the Post
                retirement complimentary passes.
              </p>
            </div>

            {/* Identity Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">Identity Card</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Railway administration shall issue an identity card bearing the
                photographs of superannuated/retired railway employee and the
                family members eligible for inclusion in the post retirement
                passes.
              </p>
            </div>

            {/* Last Month Issue */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                <h4 className="font-semibold text-gray-800">
                  Last Month Issue
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                A retired Railway servant may be issued on his request one set
                of complimentary pass in the last month of the current calendar
                year for journey commencing in the next year duly debiting such
                issue of complimentary pass in the next year&apos;s account. The
                validity will be for 5 months, as the case may be from the date
                of issue.
              </p>
            </div>

            {/* Choice of Office */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                  Choice of Office
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                A retired Railway servant, if he so, desires, can obtain his
                post-retirement complimentary passes from an office of his
                choice authorized to issue such passes irrespective of the
                Railway or office from where he had retired.
              </p>
            </div>

            {/* Senior Citizen Companion */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Senior Citizen Companion
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                The retired senior citizen Railway servant eligible to travel
                with companion instead of attendant in same class provided if
                the retired railway servant is at the age of 70 years and above.
              </p>
            </div>

            {/* Nilgiri Railway Restriction */}
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Nilgiri Railway Restriction
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Passes to retired employees are not admissible over the Nilgiri
                Railway during the months of April, May and June.
              </p>
            </div>

            {/* Level 1 Employees */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Level 1 Employees
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Employees in LEVEL 1 entitled for post retirement Passes/PTOs.
                (RB Letter No. E(W)2010/PS-5/8-4 dated 02.03.2012)
              </p>
            </div>
          </div>

          {/* Entitlement Section */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 flex items-center">
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
              Category & Number of PRC Passes Admissible (RBE 16/2019 DATED
              31.01.2019)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gazetted Officers */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                <h4 className="font-semibold text-gray-800 mb-4">
                  Gazetted Officers
                </h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>CRB & Board Members</span>
                    <span className="font-semibold">3 SETS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DGs & GMs</span>
                    <span className="font-semibold">3 SETS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Other Equivalent Officers</span>
                    <span className="font-semibold">3 SETS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HAG Officers</span>
                    <span className="font-semibold">3 SETS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SAG Officers</span>
                    <span className="font-semibold">3 SETS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selection Grade Officers</span>
                    <span className="font-semibold">3 SETS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>JAG Officers</span>
                    <span className="font-semibold">3 SETS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sr Scale Officers</span>
                    <span className="font-semibold">3 SETS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Other Group A & B Officers</span>
                    <span className="font-semibold">3 SETS</span>
                  </div>
                  <div className="mt-3 p-2 bg-orange-50 rounded text-xs">
                    <strong>Class:</strong> First Class &apos;A&apos;
                  </div>
                  <div className="p-2 bg-yellow-50 rounded text-xs">
                    <strong>Remarks:</strong> AFTER 20 YEARS OF RAILWAY SERVICE
                  </div>
                </div>
              </div>

              {/* Non-Gazetted Officers */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                <h4 className="font-semibold text-gray-800 mb-4">
                  Non-Gazetted Officers
                </h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>6 AND ABOVE</span>
                    <span className="font-semibold">2 SETS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5</span>
                    <span className="font-semibold">2 SETS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>4, 3, 2 & 1</span>
                    <span className="font-semibold">2 SETS</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="p-2 bg-orange-50 rounded text-xs">
                      <strong>6 AND ABOVE:</strong> First Class
                    </div>
                    <div className="p-2 bg-orange-50 rounded text-xs">
                      <strong>5:</strong> Second Class A
                    </div>
                    <div className="p-2 bg-orange-50 rounded text-xs">
                      <strong>4, 3, 2 & 1:</strong> Second/Sleeper
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Members Permitted Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              Members Permitted in PRC Passes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Family Members
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    • Spouse and Children (Subject to the same conditions of
                    serving employees)
                  </li>
                  <li>• Post Retrial Spouse</li>
                  <li>• Children who are above 21 years of age</li>
                  <li>• Widowed daughter/ Legally divorced daughter</li>
                  <li>• Widowed Mother</li>
                  <li>• Family in case of Group &apos;D&apos;</li>
                  <li>
                    • &quot;Handicapped wards, Bonafide students etc….&quot;
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Children Above 21 Years
                </h4>
                <p className="text-sm text-gray-700 mb-3">Must be:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    • [a] Bonafide students of any recognized educational
                    institution
                  </li>
                  <li>• [b] engaged in any research work</li>
                  <li>• [c] working as an articled clerk</li>
                  <li>
                    • [d] Invalid, on appropriate certificate from Railway
                    Doctor
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 text-white">
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
                    Retirement Pass Assistance
                  </h4>
                  <p className="text-amber-100">
                    Contact HR department for post-retirement pass applications
                  </p>
                </div>
              </div>
              <button className="bg-white text-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default RetirementPass