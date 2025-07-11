import React from 'react'

const MembersPass = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-indigo-200">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Members Permitted in Privilege Pass & PTOs
              </h2>
              <p className="text-indigo-600 font-medium">
                Eligible family members and dependents
              </p>
            </div>
          </div>

          {/* Family Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Spouse */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="font-semibold text-gray-800">Spouse</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Spouse of a railway servant whether earning or not
              </p>
            </div>

            {/* Sons under 21 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="font-semibold text-gray-800">Sons under 21</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Son or sons who have not attained the age of 21 years and are
                wholly dependent on the railway servant
              </p>
            </div>

            {/* Sons/Dependent Brothers 21+ */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Sons/Dependent Brothers 21+
                </h4>
              </div>
              <div className="text-gray-700 text-sm space-y-2">
                <p>
                  Son or sons / Dependent brothers of the age of 21 and above
                  who are:
                </p>
                <ul className="list-disc pl-4 space-y-1">
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
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Unmarried Daughters
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Unmarried daughters of any age whether earning or not
              </p>
            </div>

            {/* Widowed Daughters */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Widowed Daughters
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Widowed daughters provided they are dependent on the Railway
                Servant
              </p>
            </div>

            {/* Legally Divorced Daughter */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Legally Divorced Daughter
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Legally divorced daughter who is dependent on the Railway
                Servant
              </p>
            </div>

            {/* Adopted Child */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                <h4 className="font-semibold text-gray-800">Adopted Child</h4>
              </div>
              <p className="text-gray-700 text-sm">
                &quot;Adopted child&quot; means a child for whom there is
                satisfactory proof of adoption irrespective of the fact whether
                such adoption is permissible or not under the personal law
                governing the Railway Servant concerned.
              </p>
            </div>

            {/* Mother */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
                <h4 className="font-semibold text-gray-800">Mother</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Mother including a divorced mother
              </p>
            </div>

            {/* Unmarried/Widowed Sister */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">9</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Unmarried/Widowed Sister
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Unmarried or widowed sister
              </p>
            </div>

            {/* Brother/Step-brother under 21 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">10</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Brother/Step-brother under 21
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Brother/step-brother under twenty one years of age [provided he
                is wholly dependent]
              </p>
            </div>

            {/* Invalid Brother */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">11</span>
                </div>
                <h4 className="font-semibold text-gray-800">Invalid Brother</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Invalid brother of any age
              </p>
            </div>

            {/* Brother 21+ Student */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">12</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Brother 21+ Student
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Brother who has attained the age of twenty one years and is a
                Bonafide student of a recognized educational institution
              </p>
            </div>

            {/* Legally Divorced Sister */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">13</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Legally Divorced Sister
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Legally divorced sister (when father is not alive)
              </p>
            </div>
          </div>

          {/* Special Conditions */}
          <div className="space-y-6">
            {/* Pass Validity Period */}
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Pass Validity Period (Point 14)
              </h4>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500 shadow-sm">
                  <h5 className="font-semibold text-green-700 mb-2">
                    [i] Son&apos;s Age Limit
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    The Privilege pass may be issued in favour of a Rly. Servant
                    with validity period up to the date preceding the date on
                    which the son will be attaining the age of 21 years.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500 shadow-sm">
                  <h5 className="font-semibold text-green-700 mb-2">
                    [ii] 5-Month Validity
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    Privilege pass may be issued with validity of full 5 months
                    excluding the name of the son of the employee.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Conditions */}
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
                Additional Conditions
              </h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">15</span>
                  <p>
                    The word &apos;Adopted&apos; should not be mentioned on the
                    Pass/PTO
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">16</span>
                  <p>
                    Step sons/step daughters may be included in the privilege
                    pass of Railway employees, on specific request…. (RBE
                    No.47/2003)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">17</span>
                  <p>
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
                  <span className="text-blue-500 mr-3 mt-1">18</span>
                  <p>
                    Dependent widow mother of the deceased railway employee may
                    be included in the privilege pass of the widows appointed on
                    compassionate grounds
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">19</span>
                  <p>
                    Widow mother-in-law in case of widows appointed on
                    compassionate grounds, whether her father is alive or
                    not….ACS 37 RBE 194/2001.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">20</span>
                  <p>
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
          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-6 text-white">
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
                    Family Member Assistance
                  </h4>
                  <p className="text-indigo-100">
                    Contact HR department for family member inclusion in passes
                  </p>
                </div>
              </div>
              <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Get Help
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default MembersPass