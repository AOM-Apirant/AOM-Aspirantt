import React from 'react'

const WidowPass = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-rose-200">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Widow Pass
              </h2>
              <p className="text-rose-600 font-medium">
                Compassionate travel benefits for widows of railway servants
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-rose-200 mb-8">
            <p className="text-gray-700 leading-relaxed">
              After the demise of a railway employee, eligible widows are
              entitled to special travel benefits through the Widow Pass scheme.
              The main rules, eligibility, and special conditions are detailed
              below.
            </p>
          </div>

          {/* Eligibility Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Service on 12.03.1987 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  In Service on 12.03.1987
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Widows of railway employees who were in service as on
                12.03.1987, or who joined after that date and are compulsorily
                governed under the Widow Pass scheme, are eligible. They are
                entitled to 4 sets of PTOs per year while in service.
              </p>
            </div>
            {/* One-time Payment */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  One-time Payment
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Widows of employees who were in service prior to 12.03.1987 are
                eligible for the Widow Pass scheme on a one-time payment of Rs.
                250.
              </p>
            </div>
            {/* Public Sector Absorption */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Public Sector Absorption
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Widows of employees who were permanently absorbed in public
                sector/autonomous bodies prior to 12.03.1987 and were in receipt
                of post-retirement complimentary passes are also eligible for
                the Widow Pass scheme on a one-time payment of Rs. 250.
              </p>
            </div>
            {/* Opted Out Cases */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h4 className="font-semibold text-gray-800">Opted Out Cases</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Widows who had opted out of the Widow Pass scheme can also be
                admitted to the scheme on a one-time payment of Rs. 250.
              </p>
            </div>
          </div>

          {/* Passes Admissible Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 mb-8">
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
              Passes Admissible Per Year
            </h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <b>Group D Widows:</b> One complimentary pass every alternate
                year.
              </li>
              <li>
                <b>Widows of employees who die in service:</b> At least one
                complimentary pass every alternate year (even if qualifying
                service is less).
              </li>
              <li>
                <b>Multiple widows:</b> Passes are given by rotation in
                specified years.
              </li>
              <li>
                <b>Widows above 65 years:</b> Companion facility is available.
              </li>
            </ul>
          </div>

          {/* Class and Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <h4 className="font-semibold text-gray-800 mb-3">
                Class of Pass
              </h4>
              <p className="text-gray-700 text-sm">
                The class of Widow Pass will be the same as that admissible to
                the employee on retirement or as would be admissible notionally
                if the date of death is reckoned as the date of retirement.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <h4 className="font-semibold text-gray-800 mb-3">
                Special Conditions
              </h4>
              <p className="text-gray-700 text-sm">
                The terms and conditions applicable to Privilege Passes also
                apply to Widow Passes, except that dependent relatives are not
                eligible. However, the dependent widow mother can be included as
                a family member.
              </p>
            </div>
          </div>

          {/* Special Conditions */}
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Important Rules
            </h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Dependent relatives are not eligible for inclusion in Widow
                Passes. However, the dependent widow mother of the deceased
                employee can be included as a family member.
              </li>
              <li>
                If the widow becomes otherwise eligible for pass facility due to
                her son&apos;s/daughter&apos;s employment in Railways, her own
                employment, or remarriage, she will not be entitled to the Widow
                Pass. Once an option is exercised, it is final and cannot be
                changed.
              </li>
            </ul>
          </div>

          {/* Options Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <h4 className="font-semibold text-gray-800 mb-3">
                Option on Compassionate Appointment
              </h4>
              <p className="text-gray-700 text-sm">
                Widows appointed on compassionate grounds may choose either to
                avail pass facilities as a railway servant or continue under the
                Widow Pass scheme. Once exercised, the option is final.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <h4 className="font-semibold text-gray-800 mb-3">
                Option at Retirement
              </h4>
              <p className="text-gray-700 text-sm">
                At the time of retirement/quitting service, widows may choose to
                be governed by the Widow Pass Scheme or the Post-retirement
                Complimentary Pass Scheme as per their status. Once exercised,
                the option is final.
              </p>
            </div>
          </div>

          {/* Senior Citizen Companion */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200 mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
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
              Senior Citizen Companion Facility
            </h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Companion facility in 1st/1st &apos;A&apos; Widow Pass is
                available only for widows above 65 years of age.
              </li>
              <li>
                Companion facility is available in lieu of Attendant, only when
                the widow herself travels in Sleeper/2nd Class.
              </li>
              <li>
                Specific request must be made for companion facility. The ages
                of persons above 65 years included in the pass must be
                mentioned.
              </li>
            </ul>
            <div className="mt-4 space-y-2">
              <div className="p-4 bg-indigo-100 rounded-lg border border-indigo-300">
                <p className="text-sm italic text-gray-700">
                  &quot;Companion in lieu of Attendant permitted when the Pass
                  Holder travel in Sleeper Class/2nd Class.&quot;
                </p>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg border border-purple-300">
                <p className="text-sm italic text-gray-700">
                  &quot;Companion in lieu of Attendant is permitted only when
                  the pass holder and/or other family member of more than 65
                  years of age is/are travelling in Sleeper Class/II
                  Class.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Exclusions */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200 mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
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
              Exclusions
            </h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                This scheme does not apply to widows of employees who retired or
                died before 12.03.1987.
              </li>
              <li>
                It does not apply to casual labour unless they are absorbed as
                regular employees.
              </li>
              <li>
                The facility available to the widow of a male employee is also
                available to the widower of a female employee.
              </li>
            </ul>
          </div>

          {/* Members Permitted */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 mb-8">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              Members Permitted in Widow Pass
            </h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                The dependent widow mother of the deceased employee can be
                included as a family member.
              </li>
              <li className="text-red-600">
                Children born out of void marriage are not eligible for
                inclusion in the Widow Pass.
              </li>
            </ul>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl p-6 text-white">
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
                    Widow Pass Assistance
                  </h4>
                  <p className="text-rose-100">
                    Contact your HR department for Widow Pass applications and
                    documentation
                  </p>
                </div>
              </div>
              <button className="bg-white text-rose-600 px-6 py-2 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default WidowPass