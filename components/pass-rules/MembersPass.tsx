import React from 'react'

const MembersPass = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-2 border-indigo-200">
          <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                Members Permitted in Privilege Pass & PTOs
              </h2>
              <p className="text-indigo-600 font-medium text-sm sm:text-base">
                Eligible family members and dependents
              </p>
            </div>
          </div>

          {/* Family Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Spouse */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Spouse</h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Spouse of a railway servant whether earning or not
              </p>
            </div>

            {/* Sons under 21 */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Sons under 21</h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Son or sons who have not attained the age of 21 years and are
                wholly dependent on the railway servant
              </p>
            </div>

            {/* Sons/Dependent Brothers 21+ */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Sons/Dependent Brothers 21+
                </h4>
              </div>
              <div className="text-gray-700 text-xs sm:text-sm space-y-1 sm:space-y-2">
                <p>
                  Son or sons / Dependent brothers of the age of 21 and above
                  who are:
                </p>
                <ul className="list-disc pl-3 sm:pl-4 space-y-1">
                  <li>
                    Bonafide students of any recognized educational institution
                  </li>
                  <li>
                    Engaged in any research work and do not get any
                    scholarship/stipend
                  </li>
                  <li>
                    Working as an articled clerk under the Chartered Accountant
                  </li>
                  <li>
                    Invalid, on appropriate certificate from Railway Doctor
                  </li>
                </ul>
              </div>
            </div>

            {/* Unmarried Daughters */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">4</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Unmarried Daughters
                </h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Unmarried daughters of any age whether earning or not
              </p>
            </div>

            {/* Widowed Daughters */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">5</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Widowed Daughters
                </h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Widowed daughters provided they are dependent on the Railway
                Servant
              </p>
            </div>

            {/* Legally Divorced Daughter */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">6</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Legally Divorced Daughter
                </h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Legally divorced daughter who is dependent on the Railway
                Servant
              </p>
            </div>

            {/* Adopted Child */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">7</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Adopted Child</h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                &quot;Adopted child&quot; means a child for whom there is
                satisfactory proof of adoption irrespective of the fact whether
                such adoption is permissible or not under the personal law
                governing the Railway Servant concerned.
              </p>
            </div>

            {/* Mother */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">8</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Mother</h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Mother including a divorced mother
              </p>
            </div>

            {/* Unmarried/Widowed Sister */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">9</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Unmarried/Widowed Sister
                </h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Unmarried or widowed sister
              </p>
            </div>

            {/* Brother/Step-brother under 21 */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">10</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Brother/Step-brother under 21
                </h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Brother/step-brother under twenty one years of age [provided he
                is wholly dependent]
              </p>
            </div>

            {/* Invalid Brother */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">11</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Invalid Brother</h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Invalid brother of any age
              </p>
            </div>

            {/* Brother 21+ Student */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">12</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Brother 21+ Student
                </h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Brother who has attained the age of twenty one years and is a
                Bonafide student of a recognized educational institution
              </p>
            </div>

            {/* Legally Divorced Sister */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">13</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Legally Divorced Sister
                </h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Legally divorced sister (when father is not alive)
              </p>
            </div>
          </div>

          {/* Special Conditions */}
          <div className="space-y-4 sm:space-y-6">
            {/* Pass Validity Period */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border-2 border-green-200">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                <span className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white"
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
                Pass Validity Period (Point 14)
              </h4>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm">
                  <h5 className="font-semibold text-green-700 mb-2 text-sm sm:text-base">
                    [i] Son&apos;s Age Limit
                  </h5>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    The Privilege pass may be issued in favour of a Rly. Servant
                    with validity period up to the date preceding the date on
                    which the son will be attaining the age of 21 years.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm">
                  <h5 className="font-semibold text-green-700 mb-2 text-sm sm:text-base">
                    [ii] 5-Month Validity
                  </h5>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Privilege pass may be issued with validity of full 5 months
                    excluding the name of the son of the employee.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Conditions */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                <span className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white"
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
                Additional Conditions
              </h4>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-sm sm:text-base">15</span>
                  <p className="text-sm sm:text-base">
                    The word &apos;Adopted&apos; should not be mentioned on the
                    Pass/PTO
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-sm sm:text-base">16</span>
                  <p className="text-sm sm:text-base">
                    Step sons/step daughters may be included in the privilege
                    pass of Railway employees, on specific request…. (RBE
                    No.47/2003)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-sm sm:text-base">17</span>
                  <p className="text-sm sm:text-base">
                    Widows of ex-railway employees who are dependent on their
                    son / daughter employed on the Railways, may exercise an
                    option either to avail of pass facility as a dependent
                    widowed mother by getting their name included in the
                    privilege pass drawn by their son/ daughter or they may draw
                    pass(es) as per their entitlement under the &apos;Widow
                    Pass&apos; scheme…..ACS 20 issued. RBE 312/1999
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-sm sm:text-base">18</span>
                  <p className="text-sm sm:text-base">
                    Dependent widow mother of the deceased railway employee may
                    be included in the privilege pass of the widows appointed on
                    compassionate grounds
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-sm sm:text-base">19</span>
                  <p className="text-sm sm:text-base">
                    Widow mother-in-law in case of widows appointed on
                    compassionate grounds, whether her father is alive or
                    not….ACS 37 RBE 194/2001.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-sm sm:text-base">20</span>
                  <p className="text-sm sm:text-base">
                    Not more than two dependents can be included in pass/ PTO
                    subject to the condition that the total number of persons
                    included in the Pass/ PTO will not exceed 5 exclusive of
                    Attendants wherever permissible…. This limit will not apply
                    if only family members are included in the Pass/ PTO….. Para
                    3 (ii) under the head &quot;Conditions of entitlement&quot;
                    of Schedule II of Pass Rules
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-6 sm:mt-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-4 sm:p-6 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4"
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
                  <h4 className="text-base sm:text-lg font-semibold">
                    Family Member Assistance
                  </h4>
                  <p className="text-indigo-100 text-sm sm:text-base">
                    Contact HR department for family member inclusion in passes
                  </p>
                </div>
              </div>
              <button className="bg-white text-indigo-600 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-sm sm:text-base">
                Get Help
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default MembersPass