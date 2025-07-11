import React from 'react'

const YearendPass = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-teal-200">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Year-ending Passes/PTOs
              </h2>
              <p className="text-teal-600 font-medium">
                Advance issuance and validity rules for year-end travel benefits
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-teal-200 mb-8">
            <p className="text-gray-700 leading-relaxed">
              Year-ending passes on privilege or PRC account can be issued
              during the next FIVE months of the following year with specific
              validity and advance issuance rules.
            </p>
          </div>

          {/* Main Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Privilege/PRC Passes */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
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
                <h4 className="font-semibold text-gray-800">
                  Privilege/PRC Passes
                </h4>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm">
                  <strong>Issuance Period:</strong> Next FIVE months of
                  following year
                </p>
                <p className="text-sm">
                  <strong>Validity:</strong> Not beyond 31st MAY of following
                  year
                </p>
                <div className="bg-teal-50 rounded-lg p-3 border border-teal-200">
                  <p className="text-xs text-gray-700">
                    <strong>Note:</strong> This procedure applies to both
                    privilege and PRC account passes
                  </p>
                </div>
              </div>
            </div>

            {/* PTOs */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
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
                  <strong>Issuance Period:</strong> Next FIVE months of
                  following year
                </p>
                <p className="text-sm">
                  <strong>Validity:</strong> Not beyond 31st MAY of following
                  year
                </p>
                <div className="bg-cyan-50 rounded-lg p-3 border border-cyan-200">
                  <p className="text-xs text-gray-700">
                    <strong>Condition:</strong> Subject to same validity
                    restrictions as passes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advance Issue Rules */}
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Advance Issue Rules
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Regular Passes/PTOs */}
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800">
                    Regular Passes/PTOs
                  </h4>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">
                    <strong>Eligibility:</strong> When employee has availed all
                    passes due in calendar year
                  </p>
                  <p className="text-sm">
                    <strong>Issue:</strong> One set of passes and/or one set of
                    PTO
                  </p>
                  <p className="text-sm">
                    <strong>Journey:</strong> For journeys commencing in next
                    year only
                  </p>
                  <p className="text-sm">
                    <strong>Debit:</strong> To next year&apos;s pass account
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <p className="text-xs text-gray-700">
                      <strong>Validity:</strong> Should not exceed FIVE months
                      from date of issue
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                    <p className="text-xs text-gray-700">
                      <strong>Reference:</strong> RBE No.41/2012
                    </p>
                  </div>
                </div>
              </div>

              {/* PRC/Widow Passes */}
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800">
                    PRC/Widow Passes
                  </h4>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">
                    <strong>Eligibility:</strong> Retired railway servant on
                    request
                  </p>
                  <p className="text-sm">
                    <strong>Issue:</strong> One set of PRC Pass/Widow Pass in
                    advance
                  </p>
                  <p className="text-sm">
                    <strong>Period:</strong> Current calendar year from date of
                    issue
                  </p>
                  <p className="text-sm">
                    <strong>Journey:</strong> For journeys commencing in next
                    year
                  </p>
                  <p className="text-sm">
                    <strong>Debit:</strong> To next year&apos;s account
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <p className="text-xs text-gray-700">
                      <strong>Validity:</strong> FIVE months from date of issue
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                    <p className="text-xs text-gray-700">
                      <strong>Reference:</strong> RBE 41/2012
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Validity Period */}
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
                <h4 className="font-semibold text-gray-800">Validity Period</h4>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="text-sm">
                  <strong>Maximum:</strong> 31st MAY of following year
                </p>
                <p className="text-sm">
                  <strong>Advance Issue:</strong> FIVE months from date of issue
                </p>
                <p className="text-sm">
                  <strong>Extension:</strong> Not permitted beyond specified
                  period
                </p>
              </div>
            </div>

            {/* Issuance Conditions */}
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Issuance Conditions
                </h4>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="text-sm">
                  <strong>Regular:</strong> All passes availed in calendar year
                </p>
                <p className="text-sm">
                  <strong>PRC/Widow:</strong> On request basis
                </p>
                <p className="text-sm">
                  <strong>Account:</strong> Debited to next year&apos;s account
                </p>
              </div>
            </div>

            {/* Journey Restrictions */}
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
                <h4 className="font-semibold text-gray-800">
                  Journey Restrictions
                </h4>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="text-sm">
                  <strong>Timing:</strong> For journeys commencing in next year
                </p>
                <p className="text-sm">
                  <strong>Advance:</strong> Cannot be used for current year
                  travel
                </p>
                <p className="text-sm">
                  <strong>Validity:</strong> Strict adherence to time limits
                </p>
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
                    Year-ending passes have strict validity periods that cannot
                    be extended
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <p>
                    Advance issue is limited to FIVE months from date of issue
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <p>
                    All advance issues are debited to the next year&apos;s
                    account
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <p>
                    Regular employees must exhaust current year passes before
                    advance issue
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
                Application Process
              </h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    1
                  </div>
                  <span>Verify all current year passes have been utilized</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    2
                  </div>
                  <span>Submit application for advance issue</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    3
                  </div>
                  <span>Specify journey commencement date in next year</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    4
                  </div>
                  <span>Ensure travel within FIVE months validity period</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl p-6 text-white">
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
                    Year-ending Pass Assistance
                  </h4>
                  <p className="text-teal-100">
                    Contact your department for year-ending pass applications
                    and advance issue queries
                  </p>
                </div>
              </div>
              <button className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default YearendPass