import React from 'react'

const PrevilegePass = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-purple-200">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
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
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Privilege Pass Account
              </h2>
              <p className="text-purple-600 font-medium">
                Employee benefit passes and ticket orders
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-purple-200 mb-8">
            <p className="text-gray-700 leading-relaxed">
              A railway servant may be issued on his/her request a privilege
              pass or a privilege ticket order in the prescribed format from one
              station to another as requested by him/her.
            </p>
            <div className="mt-4 bg-purple-50 rounded-lg p-4 border border-purple-200">
              <p className="text-sm text-gray-700">
                <strong>For Travel entitlement</strong> please refer RBE No.
                16/2019 Dated 31/01/2019
              </p>
            </div>
          </div>

          {/* Gazetted Cadre Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
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
              Gazetted Cadre
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* CRB & Board Members */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      CRB & Board Members
                    </h4>
                    <span className="text-purple-700 text-sm">PLPM 17</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Class:</strong> First Class &apos;A&apos;
                  </p>
                  <p>
                    <strong>PP:</strong> 06 SETS
                  </p>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>

              {/* DGs & GMs */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">DGs & GMs</h4>
                    <span className="text-purple-700 text-sm">PLPM 17</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Class:</strong> First Class &apos;A&apos;
                  </p>
                  <p>
                    <strong>PP:</strong> 06 SETS
                  </p>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>

              {/* Other Equivalent Officers */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Other Equivalent Officers
                    </h4>
                    <span className="text-purple-700 text-sm">PLPM 16</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Class:</strong> First Class &apos;A&apos;
                  </p>
                  <p>
                    <strong>PP:</strong> 06 SETS
                  </p>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>

              {/* HAG Officers */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      HAG Officers
                    </h4>
                    <span className="text-purple-700 text-sm">PLPM 15</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Class:</strong> First Class &apos;A&apos;
                  </p>
                  <p>
                    <strong>PP:</strong> 06 SETS
                  </p>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>

              {/* SAG Officers */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      SAG Officers
                    </h4>
                    <span className="text-purple-700 text-sm">PLPM 14</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Class:</strong> First Class &apos;A&apos;
                  </p>
                  <p>
                    <strong>PP:</strong> 06 SETS
                  </p>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>

              {/* Selection Grade Officers */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Selection Grade Officers
                    </h4>
                    <span className="text-purple-700 text-sm">PLPM 13</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Class:</strong> First Class &apos;A&apos;
                  </p>
                  <p>
                    <strong>PP:</strong> 06 SETS
                  </p>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>

              {/* JAG Officers */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">7</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      JAG Officers
                    </h4>
                    <span className="text-purple-700 text-sm">PLPM 12</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Class:</strong> First Class &apos;A&apos;
                  </p>
                  <p>
                    <strong>PP:</strong> 06 SETS
                  </p>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>

              {/* Sr Scale Officers */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">8</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Sr Scale Officers
                    </h4>
                    <span className="text-purple-700 text-sm">PLPM 11</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Class:</strong> First Class &apos;A&apos;
                  </p>
                  <p>
                    <strong>PP:</strong> 06 SETS
                  </p>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>

              {/* Other Group A & B Officers */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">9</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Other Group A & B Officers
                    </h4>
                    <span className="text-purple-700 text-sm">
                      PLPM 10, 9, & 8
                    </span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Class:</strong> First Class &apos;A&apos;
                  </p>
                  <p>
                    <strong>PP:</strong> 06 SETS
                  </p>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Non-Gazetted Cadre Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3">
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
              Non-Gazetted Cadre
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* PLPM 6 and Above */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      PLPM 6 and Above
                    </h4>
                    <span className="text-pink-700 text-sm">First Class</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Service Period:</strong>
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>ONE SET upto the end of 5th year railway service</li>
                    <li>AND 3 SETS thereafter</li>
                  </ul>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>

              {/* PLPM 5 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">PLPM 5</h4>
                    <span className="text-pink-700 text-sm">
                      Second Class A
                    </span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Service Period:</strong>
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>ONE SET upto the end of 5th year railway service</li>
                    <li>AND 3 SETS thereafter</li>
                  </ul>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
              </div>

              {/* PLPM 4, 3, 2 & 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      PLPM 4, 3, 2 & 1
                    </h4>
                    <span className="text-pink-700 text-sm">
                      Second/Sleeper
                    </span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Service Period:</strong>
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>ONE SET upto the end of 5th year railway service</li>
                    <li>AND 3 SETS thereafter</li>
                  </ul>
                  <p>
                    <strong>PTO:</strong> 04 SETS
                  </p>
                </div>
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
                  <span className="text-blue-500 mr-3 mt-1">(i)</span>
                  <p>
                    6 Sets of PTOs instead of 4 sets shall continue to be
                    admissible to railway servants in all PLPMs who had joined
                    Railway service before 12.03.1987 and not opted for widow
                    pass facility.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">(ii)</span>
                  <p>
                    The travel entitlements shall continue to be in accordance
                    with the administrative instructions issued in this regard
                    from time to time.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">(iii)</span>
                  <p>
                    The upgraded pass facility i.e 01 Set of Second Class
                    &apos;A&apos; Pass in lieu of 01 Set of Second/Sleeper Class
                    Pass to serving railway employees in PLPM 1,2,3 & 4, even
                    with less than 05 years of railway service, shall continue.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </span>
                Special Notes
              </h4>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-2">NOTE 1:</p>
                  <p>
                    Till the books of Second Class &apos;A&apos; pass of yellow
                    colour is supplied, a rubber stamp may be prepared and
                    affixed on the Sleeper/2nd Class pass being issued to the
                    entitled employees as under:
                  </p>
                  <div className="mt-2 p-3 bg-yellow-100 rounded-lg border border-yellow-300">
                    <p className="text-sm italic">
                      &quot;Entitled to travel by AC-3 tier class in trains
                      other than Rajdhani, Shatabdi and Duronto Express
                      Trains.&quot;
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">NOTE 2:</p>
                  <p>
                    First Class-&apos;A&apos; Privilege Pass entitles the holder
                    to carry one attendant in Second Class
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white">
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
                    Privilege Pass Assistance
                  </h4>
                  <p className="text-purple-100">
                    Contact your department for privilege pass applications and
                    queries
                  </p>
                </div>
              </div>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default PrevilegePass