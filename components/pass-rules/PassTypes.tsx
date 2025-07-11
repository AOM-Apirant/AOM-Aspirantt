import React from 'react'

const PassTypes = () => {
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Authority & Pass Types
              </h2>
              <p className="text-purple-600 font-medium">
                Competent authorities and different types of passes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Authority */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-purple-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
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
                  Competent Authority
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    A pass or PTO may be issued by such officer or authority and
                    may be signed by such officer as the Central Government
                    (Ministry of Railways) may from time to time specify.
                  </p>

                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Provided that</strong> until such authorities or
                      officers are specified, the Pass or PTO shall be signed
                      and issued in accordance with the instructions/orders
                      issued by the Central Government in the Ministry of
                      Railways and in force at the commencement of these Rules.
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  Key Points
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Central Government specifies competent officers
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Passes must be properly signed and issued
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Follow existing instructions until new ones are specified
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Ministry of Railways has authority to issue guidelines
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Pass Types */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-pink-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
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
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </span>
                  Kinds of Passes
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <span className="font-medium text-gray-700">Duty Pass</span>
                    <span className="text-pink-600 font-semibold">
                      Official
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-700">
                      Privilege Pass
                    </span>
                    <span className="text-purple-600 font-semibold">
                      Employee Benefit
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium text-gray-700">
                      School Pass
                    </span>
                    <span className="text-green-600 font-semibold">
                      Educational
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="font-medium text-gray-700">
                      Post-retirement Complimentary Pass
                    </span>
                    <span className="text-blue-600 font-semibold">
                      Retirement Benefit
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <span className="font-medium text-gray-700">
                      Widow Pass
                    </span>
                    <span className="text-orange-600 font-semibold">
                      Compassionate
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg border border-teal-200">
                    <span className="font-medium text-gray-700">
                      Residential Card Pass
                    </span>
                    <span className="text-teal-600 font-semibold">
                      Residential
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <span className="font-medium text-gray-700">
                      Special Pass
                    </span>
                    <span className="text-red-600 font-semibold">
                      Medical/Urgent
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 shadow-md border border-yellow-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  Important Notes
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">⚠</span>
                    Each pass type has specific eligibility criteria
                  </p>
                  <p className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">⚠</span>
                    Passes must be issued by competent authority only
                  </p>
                  <p className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">⚠</span>
                    Different passes have different validity periods
                  </p>
                  <p className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">⚠</span>
                    Special passes require additional documentation
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
                  <h4 className="text-lg font-semibold">Need Assistance?</h4>
                  <p className="text-purple-100">
                    Contact your department head for pass-related queries
                  </p>
                </div>
              </div>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Get Help
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default PassTypes