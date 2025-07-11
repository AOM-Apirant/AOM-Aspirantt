import React from 'react'

const SuspensionPass = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-gray-200">
          <div className="flex flex-col lg:flex-row items-center mb-8">
            <div className="lg:w-16 lg:h-16 w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-600 rounded-lg flex items-center justify-center mr-6 shadow-lg mb-4 lg:mb-0">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className='text-center lg:text-left'>
              <h2 className="lg:text-3xl text-2xl font-bold text-gray-800 mb-2">
                Suspension Passes & Distance Restrictions
              </h2>
              <p className="text-gray-600 font-medium">
                Special provisions for suspended employees and route
                restrictions
              </p>
            </div>
          </div>

          {/* Suspension Passes Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
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
              Issue of Passes/PTOs to Railway Servants Under Suspension
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Passes */}
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800">Passes</h4>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">
                    <strong>Group C & D:</strong> Not more than one set of Pass
                  </p>
                  <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                    <p className="text-xs text-gray-700">
                      <strong>Condition:</strong> If only one set of Pass
                      remains in the Railway Servant&apos;s account for the
                      year, no pass can be issued.
                    </p>
                  </div>
                  <p className="text-sm">
                    <strong>Retention:</strong> If retained in service after
                    release from suspension, passes issued during suspension
                    period within current calendar year shall be debited to pass
                    account.
                  </p>
                </div>
              </div>

              {/* PTOs */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800">PTOs</h4>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">
                    <strong>Limit:</strong> Not more than 2 sets per year
                  </p>
                  <p className="text-sm">
                    <strong>Stipulations:</strong> Other stipulations similar to
                    those for passes shall also apply
                  </p>
                  <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                    <p className="text-xs text-gray-700">
                      <strong>Reference:</strong> RBE No. 159/2019 dated
                      29/11/2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Distance Restrictions Section */}
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              Distance Restrictions
            </h3>

            <div className="bg-white rounded-xl p-6 shadow-md border border-blue-200 mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Privilege pass shall be issued for journeys from the starting
                station to the destination station as desired by the railway
                servant, via shortest route, provided that a longer route may be
                permitted in the following circumstances:
              </p>
            </div>

            {/* Route Conditions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Alternative Routes */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">
                    Alternative Routes
                  </h4>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">
                    Two alternative routes are available for a destination.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <p className="text-xs text-gray-700">
                      <strong>Examples:</strong>
                      <br />
                      • Bombay to Calcutta via Nagpur or via Allahabad
                      <br />• Bombay to Delhi by Central Railway or Western
                      Railway
                    </p>
                  </div>
                  <p className="text-sm">
                    <strong>Condition:</strong> Such passes may be permitted by
                    either route irrespective of the distance involved
                  </p>
                </div>
              </div>

              {/* Longer Route within 15% */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">
                    15% Distance Rule
                  </h4>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">
                    If the distance via longer route does not exceed by 15% of
                    the direct route.
                  </p>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-xs text-gray-700">
                      <strong>Examples:</strong>
                      <br />
                      • Chittaranjan to Kancharapara via Howrah
                      <br />• Lucknow to Southern/South Central Railway via
                      Bombay V.T.
                    </p>
                  </div>
                  <p className="text-sm">
                    <strong>Condition:</strong> Even if double journey over
                    small portion is involved, provided distance doesn&apos;t
                    exceed shortest route by more than 15%
                  </p>
                </div>
              </div>

              {/* Quicker Route */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">Quicker Route</h4>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">
                    If the longer route to destination is quicker than the
                    direct route.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <p className="text-xs text-gray-700">
                      <strong>Condition:</strong> Irrespective of distance
                      involved
                    </p>
                  </div>
                  <p className="text-sm">
                    <strong>Benefit:</strong> To take advantage of terminal
                    facilities as in Bombay V.T.-Kalyan or Madras-Arkonam
                    sections
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="space-y-6">
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Important Notes
              </h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <p>
                    Suspension passes are strictly limited and subject to
                    remaining pass balance
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <p>
                    Distance restrictions ensure optimal route usage while
                    allowing flexibility
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <p>
                    15% rule allows for practical route choices considering
                    terminal facilities
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <p>
                    Quicker route option prioritizes time efficiency over
                    distance
                  </p>
                </div>
              </div>
            </div>

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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Application Guidelines
              </h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    1
                  </div>
                  <span>Check remaining pass balance before applying</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    2
                  </div>
                  <span>Specify preferred route with justification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    3
                  </div>
                  <span>
                    Provide distance calculations if longer route requested
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    4
                  </div>
                  <span>Ensure proper documentation for route approval</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl p-6 text-white">
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
                    Suspension & Route Assistance
                  </h4>
                  <p className="text-gray-100">
                    Contact your department for suspension passes and
                    route-related queries
                  </p>
                </div>
              </div>
              <button className="bg-white text-gray-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default SuspensionPass