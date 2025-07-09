import React from 'react'

const RSPassRules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            RAILWAY SERVANTS (PASS) RULES, 1986
          </h1>
          <p className="text-lg text-gray-600 text-center mb-4">
            (1993 EDITION)
          </p>
          <p className="text-sm text-gray-500 text-center italic">
            [With Latest instructions]
          </p>
        </section>

        {/* Important Definitions Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
            IMPORTANT DEFINITIONS
          </h2>
          
          <div className="space-y-6">
            {/* Definition a */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-700 mb-2">
                a) &apos;Attendant&apos; means
              </h3>
              <p className="text-gray-600 leading-relaxed">
                a person exclusively employed on salary in the personal service of a railway servant.
              </p>
            </div>

            {/* Definition b */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-700 mb-2">
                b) &apos;adopted child&apos; means
              </h3>
              <p className="text-gray-600 leading-relaxed">
                a child for whom there is satisfactory proof of adoption irrespective of the fact whether such adoption is permissible or not under the personal law governing the railway servant concerned.
              </p>
            </div>

            {/* Definition c */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-700 mb-3">
                c) &apos;Dependent relative&apos;-
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">➢</span>
                  Mother including a divorced mother
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">➢</span>
                  Unmarried or widowed sister
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">➢</span>
                  Brother/step-brother under twenty one years of age
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">➢</span>
                  Invalid brother of any age
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">➢</span>
                  Brother who has attained the age of twenty one years and is a bonafide student
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">➢</span>
                  Legally divorced sister
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">➢</span>
                  Widow mother-in-law in case of widows appointed on compassionate grounds, whether her father is alive or not.
                </li>
              </ul>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Provided that</strong> a person shall not be considered to be a dependent relative if his/her income from all sources including pension, dearness relief, etc. exceeds 15% of pay per month of the Railway servant or the amount arrived at by adding minimum Pension/Family Pension of Rs 9000/- (excluding the element of additional pension to old pensioners) and the dearness relief admissible to the pensioners/family pensioners on pension rounded off to the nearest ten rupee figure, whichever is more. (Revised limit for dependency w.e.f 01.01.2016 RBE 132/2016 Dated 24/11/2016)
                </p>
              </div>
              
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Provided further that</strong> dependent relatives may be included in the Privilege Passes/PT0s given to the railway servants in cases where father is missing for a period of at least 7 years Passes/PT0s can also be given to the sisters in similar circumstances. However, an affidavit as to the period since when the person is missing, duly attested by a Magistrate is necessary.
                </p>
              </div>
            </div>

            {/* Definition c - Family */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-700 mb-3">
                c) &apos;Family&apos; includes
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">➢</span>
                  Spouse of a railway servant whether earning or not;
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">➢</span>
                  Son or sons who have not attained the age of 21 years and are wholly dependent on the railway servant;
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">➢</span>
                  Son or sons of the age of 21 and above who are bonafide student
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">➢</span>
                  Unmarried daughters of any age whether earning or not;
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">➢</span>
                  Widowed daughters provided they are dependent on the railway servant;
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">➢</span>
                  Legally divorced daughter who is dependent on the railway servant;
                </li>
              </ul>
              
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> For the purpose of issue of Special Pass on medical grounds under Schedule-VII, the term &quot;family&quot; and &quot;dependant relatives&quot; shall be as defined in Paras 601(5) and 601(6) respectively of IRMM,2000.
                </p>
              </div>
            </div>

            {/* Definition d */}
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-700 mb-2">
                d) &apos;Pay&apos; means
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">➢</span>
                  Basic pay; (Pay in PAY MATRIX LEVEL)
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">➢</span>
                  In the case of Running Staff, basic pay plus 30% thereof;
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">➢</span>
                  Any other pay which may be specially classified as pay by the President.
                </li>
              </ul>
            </div>

            {/* Definition e */}
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-gray-700 mb-2">
                e) &quot;Set&quot; means
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                one Pass or P.T.0 for outward and return journeys;
              </p>
              <h4 className="font-medium text-gray-700 mb-2">
                &quot;Half-set&quot; means
              </h4>
              <p className="text-gray-600 leading-relaxed">
                a Pass or P.T.0 issued from one station to another
              </p>
            </div>

            {/* Definition f */}
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-semibold text-gray-700 mb-2">
                f) &apos;year&apos; means
              </h3>
              <p className="text-gray-600 leading-relaxed">
                a Calendar Year.
              </p>
            </div>
          </div>
        </section>

        {/* Authority and Types Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-purple-200">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Competent Authority
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    A pass or PTO may be issued by such officer or authority and may be signed by such officer as the Central Government (Ministry of Railways) may from time to time specify.
                  </p>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Provided that</strong> until such authorities or officers are specified, the Pass or PTO shall be signed and issued in accordance with the instructions/orders issued by the Central Government in the Ministry of Railways and in force at the commencement of these Rules.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Kinds of Passes
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <span className="font-medium text-gray-700">Duty Pass</span>
                    <span className="text-pink-600 font-semibold">Official</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-700">Privilege Pass</span>
                    <span className="text-purple-600 font-semibold">Employee Benefit</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium text-gray-700">School Pass</span>
                    <span className="text-green-600 font-semibold">Educational</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="font-medium text-gray-700">Post-retirement Complimentary Pass</span>
                    <span className="text-blue-600 font-semibold">Retirement Benefit</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <span className="font-medium text-gray-700">Widow Pass</span>
                    <span className="text-orange-600 font-semibold">Compassionate</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg border border-teal-200">
                    <span className="font-medium text-gray-700">Residential Card Pass</span>
                    <span className="text-teal-600 font-semibold">Residential</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <span className="font-medium text-gray-700">Special Pass</span>
                    <span className="text-red-600 font-semibold">Medical/Urgent</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 shadow-md border border-yellow-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold">Need Assistance?</h4>
                  <p className="text-purple-100">Contact your department head for pass-related queries</p>
                </div>
              </div>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Get Help
              </button>
            </div>
          </div>
        </section>
        {/* Duty Pass Section */}
        <section className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <div className="font-bold text-orange-700 text-lg mb-2">Gazetted Cadre</div>
            <div className="grid gap-4">
              <div className="bg-white rounded-xl shadow border-l-4 border-yellow-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">(a) (i) CRB & Board Members including FC</div>
                  <div className="text-gray-600 text-sm">(ii) DGs & GMs granted Apex Scale</div>
                  <div className="text-gray-600 text-sm">(iii) Chief Commissioner for Railway Safety</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 17</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold text-sm">Gold Pass</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-gray-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">(b) GMs & other equivalent Officers</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 16</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-semibold text-sm">Silver Pass</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-gray-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">(c) HAG Officers (Including NF-HAG)</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 15</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-semibold text-sm">Silver Pass</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-yellow-700 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">(d) SAG Officers (Including NF-SAG)</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 14</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm">Bronze/First Class &apos;A&apos; Pass (1-AC authority)</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-yellow-700 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">(e) Selection Grade Officers</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 13</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm">Bronze/First Class &apos;A&apos; Pass (1-AC authority)</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-yellow-700 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">(f) JAG Officers</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 12</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm">Bronze/First Class &apos;A&apos; Pass (1-AC authority)</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-yellow-700 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">(g) Other Group &apos;A&apos; &amp; &apos;B&apos; Gazetted Officers</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 11, 10, 9, 8</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm">Bronze/First Class &apos;A&apos; Pass</span>
                </div>
              </div>
            </div>
            <div className="font-bold text-orange-700 text-lg mt-6 mb-2">Non-gazetted Cadre</div>
            <div className="grid gap-4">
              <div className="bg-white rounded-xl shadow border-l-4 border-green-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">6 &amp; above</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 6 &amp; above</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm">First Class Pass</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-green-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">5</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 5</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm">First Class Pass</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-blue-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">4</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 4</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold text-sm">Second Class &apos;A&apos; Pass</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-blue-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">3</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 3</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold text-sm">Second Class &apos;A&apos; Pass</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-indigo-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">2</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 2</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold text-sm">Second/Sleeper Class Pass</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border-l-4 border-indigo-400 p-4 flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">1</div>
                  <div className="mt-2 text-xs text-orange-500 font-medium">PLPM: 1</div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-6 flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold text-sm">Second/Sleeper Class Pass</span>
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
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Eligibility & Purpose
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    A railway servant may be issued a duty pass for performing journey on duty.
                  </p>
                  
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>For Travel entitlement</strong> please refer RBE No. 16/2019 Dated 31/01/2019
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </span>
                  Special Note
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Officers in PLPM 8, 9, 10 &amp; 11</strong> shall continue to be issued Bronze Pass/First Class &apos;A&apos; Card Pass with validity for travel only over Zonal Railways or Indian Railways as per existing conditions.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Important Points:</h4>
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
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Application Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">1</div>
                    <span className="text-gray-700">Submit duty pass application</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">2</div>
                    <span className="text-gray-700">Attach duty order/authorization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">3</div>
                    <span className="text-gray-700">Get approval from competent authority</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">4</div>
                    <span className="text-gray-700">Collect pass from issuing office</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold">Need Help with Duty Pass?</h4>
                  <p className="text-orange-100">Contact your department head or HR office for assistance</p>
                </div>
              </div>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>
        {/* Pass on Transfer Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-emerald-200">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Pass on Transfer
              </h2>
              <p className="text-emerald-600 font-medium">
                Governing Entitlement of Kit Passes
              </p>
            </div>
          </div>

          {/* Entitlement Cards - Mobile Friendly */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Category A */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-500">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">PLPM 11 TO 17</h4>
                  <span className="text-emerald-700 text-sm font-medium">Senior Officers</span>
                </div>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li><strong>6000 Kgs</strong> by Goods train plus reimbursement of transportation of motor car by road</li>
                <li><strong>OR</strong> One Container (40 Feet E.U.) or two Containers (20 Feet E.U.) (including cost of door-to-door movement of Container) plus reimbursement of transportation of motor car by road</li>
                <li><strong>OR</strong> One VPU by passenger carrying trains subject to a cut of 20% in the admissible amount of Composite Transfer Grant if a car is carried in the VPU and of 25% if car is not carried</li>
              </ul>
            </div>
            {/* Category B */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">PLPM 6 TO 11</h4>
                  <span className="text-teal-700 text-sm font-medium">Mid-Level Officers</span>
                </div>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li><strong>6000 Kgs</strong> by Goods train plus reimbursement of transportation of motor car by road</li>
                <li><strong>OR</strong> One Container (1TEU) (including cost of door-to-door movement of Container) plus reimbursement of transportation of motor car by road</li>
                <li><strong>OR</strong> One VP/VPU by passenger carrying trains subject to a cut of 20% in the admissible amount of Composite Transfer Grant if a car is carried in the VPU and of 25% if car is not carried</li>
              </ul>
            </div>
            {/* Category C */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">PLPM 5</h4>
                  <span className="text-blue-700 text-sm font-medium">PLPM 5</span>
                </div>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li><strong>3000 Kgs</strong> of luggage plus one Motor Cycle/Scooter by Goods trains</li>
                <li><strong>OR</strong> by Parcel Van/Brake van attached to passenger carrying trains or by road</li>
              </ul>
            </div>
            {/* Category D */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">PLPM 1 TO 4</h4>
                  <span className="text-purple-700 text-sm font-medium">Junior Staff</span>
                </div>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li><strong>1500 Kgs</strong> of luggage plus one Motor Cycle/Scooter/Moped/Bicycle by Goods trains</li>
                <li><strong>OR</strong> by Parcel Van/Brake van attached to passenger carrying trains or by road</li>
              </ul>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Important Note</h4>
                <p className="text-gray-700 leading-relaxed">
                  The entitlements and other terms &amp; conditions as detailed in <strong>ACS No.71 to RSPR -1986</strong>, issued vide Board&apos;s letter No.E(w)2004/PS5-9/1 dated 01.08.2011, shall continue to be applicable.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Reference Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h4 className="font-semibold text-gray-800">Senior Officers</h4>
              </div>
              <p className="text-sm text-gray-600">PLPM 11-17: Maximum benefits with multiple transport options</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <h4 className="font-semibold text-gray-800">Mid-Level Officers</h4>
              </div>
              <p className="text-sm text-gray-600">PLPM 6-11: Comprehensive transport and container options</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <h4 className="font-semibold text-gray-800">PLPM 5</h4>
              </div>
              <p className="text-sm text-gray-600">3000 Kgs luggage + Motor Cycle/Scooter transport</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <h4 className="font-semibold text-gray-800">Junior Staff</h4>
              </div>
              <p className="text-sm text-gray-600">PLPM 1-4: 1500 Kgs luggage + Motor Cycle/Scooter/Moped/Bicycle</p>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold">Transfer Assistance</h4>
                  <p className="text-emerald-100">Contact HR department for transfer-related queries and documentation</p>
                </div>
              </div>
              <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                Get Help
              </button>
            </div>
          </div>
        </section>
         {/* Privilege Pass Section */}
         <section className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-purple-200">
           <div className="flex items-center mb-8">
             <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
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
               A railway servant may be issued on his/her request a privilege pass or a privilege ticket order in the prescribed format from one station to another as requested by him/her.
             </p>
             <div className="mt-4 bg-purple-50 rounded-lg p-4 border border-purple-200">
               <p className="text-sm text-gray-700">
                 <strong>For Travel entitlement</strong> please refer RBE No. 16/2019 Dated 31/01/2019
               </p>
             </div>
           </div>

           {/* Gazetted Cadre Section */}
           <div className="mb-8">
             <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
               <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
                     <h4 className="font-semibold text-gray-800">CRB & Board Members</h4>
                     <span className="text-purple-700 text-sm">PLPM 17</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Class:</strong> First Class &apos;A&apos;</p>
                   <p><strong>PP:</strong> 06 SETS</p>
                   <p><strong>PTO:</strong> 04 SETS</p>
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
                   <p><strong>Class:</strong> First Class &apos;A&apos;</p>
                   <p><strong>PP:</strong> 06 SETS</p>
                   <p><strong>PTO:</strong> 04 SETS</p>
                 </div>
               </div>

               {/* Other Equivalent Officers */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                     <span className="text-white font-bold text-sm">3</span>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800">Other Equivalent Officers</h4>
                     <span className="text-purple-700 text-sm">PLPM 16</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Class:</strong> First Class &apos;A&apos;</p>
                   <p><strong>PP:</strong> 06 SETS</p>
                   <p><strong>PTO:</strong> 04 SETS</p>
                 </div>
               </div>

               {/* HAG Officers */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                     <span className="text-white font-bold text-sm">4</span>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800">HAG Officers</h4>
                     <span className="text-purple-700 text-sm">PLPM 15</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Class:</strong> First Class &apos;A&apos;</p>
                   <p><strong>PP:</strong> 06 SETS</p>
                   <p><strong>PTO:</strong> 04 SETS</p>
                 </div>
               </div>

               {/* SAG Officers */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                     <span className="text-white font-bold text-sm">5</span>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800">SAG Officers</h4>
                     <span className="text-purple-700 text-sm">PLPM 14</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Class:</strong> First Class &apos;A&apos;</p>
                   <p><strong>PP:</strong> 06 SETS</p>
                   <p><strong>PTO:</strong> 04 SETS</p>
                 </div>
               </div>

               {/* Selection Grade Officers */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                     <span className="text-white font-bold text-sm">6</span>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800">Selection Grade Officers</h4>
                     <span className="text-purple-700 text-sm">PLPM 13</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Class:</strong> First Class &apos;A&apos;</p>
                   <p><strong>PP:</strong> 06 SETS</p>
                   <p><strong>PTO:</strong> 04 SETS</p>
                 </div>
               </div>

               {/* JAG Officers */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                     <span className="text-white font-bold text-sm">7</span>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800">JAG Officers</h4>
                     <span className="text-purple-700 text-sm">PLPM 12</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Class:</strong> First Class &apos;A&apos;</p>
                   <p><strong>PP:</strong> 06 SETS</p>
                   <p><strong>PTO:</strong> 04 SETS</p>
                 </div>
               </div>

               {/* Sr Scale Officers */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                     <span className="text-white font-bold text-sm">8</span>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800">Sr Scale Officers</h4>
                     <span className="text-purple-700 text-sm">PLPM 11</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Class:</strong> First Class &apos;A&apos;</p>
                   <p><strong>PP:</strong> 06 SETS</p>
                   <p><strong>PTO:</strong> 04 SETS</p>
                 </div>
               </div>

               {/* Other Group A & B Officers */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                     <span className="text-white font-bold text-sm">9</span>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800">Other Group A & B Officers</h4>
                     <span className="text-purple-700 text-sm">PLPM 10, 9, & 8</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Class:</strong> First Class &apos;A&apos;</p>
                   <p><strong>PP:</strong> 06 SETS</p>
                   <p><strong>PTO:</strong> 04 SETS</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Non-Gazetted Cadre Section */}
           <div className="mb-8">
             <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
               <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
                     <h4 className="font-semibold text-gray-800">PLPM 6 and Above</h4>
                     <span className="text-pink-700 text-sm">First Class</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Service Period:</strong></p>
                   <ul className="list-disc pl-4 space-y-1">
                     <li>ONE SET upto the end of 5th year railway service</li>
                     <li>AND 3 SETS thereafter</li>
                   </ul>
                   <p><strong>PTO:</strong> 04 SETS</p>
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
                     <span className="text-pink-700 text-sm">Second Class A</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Service Period:</strong></p>
                   <ul className="list-disc pl-4 space-y-1">
                     <li>ONE SET upto the end of 5th year railway service</li>
                     <li>AND 3 SETS thereafter</li>
                   </ul>
                   <p><strong>PTO:</strong> 04 SETS</p>
                 </div>
               </div>

               {/* PLPM 4, 3, 2 & 1 */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                     <span className="text-white font-bold text-sm">3</span>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800">PLPM 4, 3, 2 & 1</h4>
                     <span className="text-pink-700 text-sm">Second/Sleeper</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Service Period:</strong></p>
                   <ul className="list-disc pl-4 space-y-1">
                     <li>ONE SET upto the end of 5th year railway service</li>
                     <li>AND 3 SETS thereafter</li>
                   </ul>
                   <p><strong>PTO:</strong> 04 SETS</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Important Notes */}
           <div className="space-y-6">
             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
               <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                 <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </span>
                 Important Notes
               </h4>
               <div className="space-y-4 text-gray-700">
                 <div className="flex items-start">
                   <span className="text-blue-500 mr-3 mt-1">(i)</span>
                   <p>6 Sets of PTOs instead of 4 sets shall continue to be admissible to railway servants in all PLPMs who had joined Railway service before 12.03.1987 and not opted for widow pass facility.</p>
                 </div>
                 <div className="flex items-start">
                   <span className="text-blue-500 mr-3 mt-1">(ii)</span>
                   <p>The travel entitlements shall continue to be in accordance with the administrative instructions issued in this regard from time to time.</p>
                 </div>
                 <div className="flex items-start">
                   <span className="text-blue-500 mr-3 mt-1">(iii)</span>
                   <p>The upgraded pass facility i.e 01 Set of Second Class &apos;A&apos; Pass in lieu of 01 Set of Second/Sleeper Class Pass to serving railway employees in PLPM 1,2,3 & 4, even with less than 05 years of railway service, shall continue.</p>
                 </div>
               </div>
             </div>

             <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
               <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                 <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                   </svg>
                 </span>
                 Special Notes
               </h4>
               <div className="space-y-4 text-gray-700">
                 <div>
                   <p className="font-semibold mb-2">NOTE 1:</p>
                   <p>Till the books of Second Class &apos;A&apos; pass of yellow colour is supplied, a rubber stamp may be prepared and affixed on the Sleeper/2nd Class pass being issued to the entitled employees as under:</p>
                   <div className="mt-2 p-3 bg-yellow-100 rounded-lg border border-yellow-300">
                     <p className="text-sm italic">&quot;Entitled to travel by AC-3 tier class in trains other than Rajdhani, Shatabdi and Duronto Express Trains.&quot;</p>
                   </div>
                 </div>
                 <div>
                   <p className="font-semibold mb-2">NOTE 2:</p>
                   <p>First Class-&apos;A&apos; Privilege Pass entitles the holder to carry one attendant in Second Class</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Bottom Info Bar */}
           <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white">
             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <div>
                   <h4 className="text-lg font-semibold">Privilege Pass Assistance</h4>
                   <p className="text-purple-100">Contact your department for privilege pass applications and queries</p>
                 </div>
               </div>
               <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                 Apply Now
               </button>
             </div>
           </div>
         </section>
         {/* Members Permitted in Privilege Pass Section */}
         <section className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-indigo-200">
           <div className="flex items-center mb-8">
             <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
               <p className="text-gray-700 text-sm">Spouse of a railway servant whether earning or not</p>
             </div>

             {/* Sons under 21 */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">2</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Sons under 21</h4>
               </div>
               <p className="text-gray-700 text-sm">Son or sons who have not attained the age of 21 years and are wholly dependent on the railway servant</p>
             </div>

             {/* Sons/Dependent Brothers 21+ */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">3</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Sons/Dependent Brothers 21+</h4>
               </div>
               <div className="text-gray-700 text-sm space-y-2">
                 <p>Son or sons / Dependent brothers of the age of 21 and above who are:</p>
                 <ul className="list-disc pl-4 space-y-1">
                   <li>Bonafide students of any recognized educational institution</li>
                   <li>Engaged in any research work and do not get any scholarship/stipend</li>
                   <li>Working as an articled clerk under the Chartered Accountant</li>
                   <li>Invalid, on appropriate certificate from Railway Doctor</li>
                 </ul>
               </div>
             </div>

             {/* Unmarried Daughters */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">4</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Unmarried Daughters</h4>
               </div>
               <p className="text-gray-700 text-sm">Unmarried daughters of any age whether earning or not</p>
             </div>

             {/* Widowed Daughters */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">5</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Widowed Daughters</h4>
               </div>
               <p className="text-gray-700 text-sm">Widowed daughters provided they are dependent on the Railway Servant</p>
             </div>

             {/* Legally Divorced Daughter */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">6</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Legally Divorced Daughter</h4>
               </div>
               <p className="text-gray-700 text-sm">Legally divorced daughter who is dependent on the Railway Servant</p>
             </div>

             {/* Adopted Child */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">7</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Adopted Child</h4>
               </div>
               <p className="text-gray-700 text-sm">&quot;Adopted child&quot; means a child for whom there is satisfactory proof of adoption irrespective of the fact whether such adoption is permissible or not under the personal law governing the Railway Servant concerned.</p>
             </div>

             {/* Mother */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">8</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Mother</h4>
               </div>
               <p className="text-gray-700 text-sm">Mother including a divorced mother</p>
             </div>

             {/* Unmarried/Widowed Sister */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">9</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Unmarried/Widowed Sister</h4>
               </div>
               <p className="text-gray-700 text-sm">Unmarried or widowed sister</p>
             </div>

             {/* Brother/Step-brother under 21 */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">10</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Brother/Step-brother under 21</h4>
               </div>
               <p className="text-gray-700 text-sm">Brother/step-brother under twenty one years of age [provided he is wholly dependent]</p>
             </div>

             {/* Invalid Brother */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">11</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Invalid Brother</h4>
               </div>
               <p className="text-gray-700 text-sm">Invalid brother of any age</p>
             </div>

             {/* Brother 21+ Student */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">12</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Brother 21+ Student</h4>
               </div>
               <p className="text-gray-700 text-sm">Brother who has attained the age of twenty one years and is a Bonafide student of a recognized educational institution</p>
             </div>

             {/* Legally Divorced Sister */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">13</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Legally Divorced Sister</h4>
               </div>
               <p className="text-gray-700 text-sm">Legally divorced sister (when father is not alive)</p>
             </div>
           </div>

           {/* Special Conditions */}
           <div className="space-y-6">
             {/* Pass Validity Period */}
             <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
               <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                 <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </span>
                 Pass Validity Period (Point 14)
               </h4>
               <div className="space-y-4 text-gray-700">
                 <div className="flex items-start">
                   <span className="text-green-500 mr-3 mt-1">[i]</span>
                   <p>The Privilege pass may be issued in favour of a Rly. Servant with validity period up to the date preceding the date on which the son will be attaining the age of 21 years</p>
                 </div>
                 <div className="flex items-start">
                   <span className="text-green-500 mr-3 mt-1">[ii]</span>
                   <p>Privilege pass may be issued with validity of full 5 months excluding the name of the son of the employee</p>
                 </div>
               </div>
             </div>

             {/* Additional Conditions */}
             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
               <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                 <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </span>
                 Additional Conditions
               </h4>
               <div className="space-y-4 text-gray-700">
                 <div className="flex items-start">
                   <span className="text-blue-500 mr-3 mt-1">15</span>
                   <p>The word &apos;Adopted&apos; should not be mentioned on the Pass/PTO</p>
                 </div>
                 <div className="flex items-start">
                   <span className="text-blue-500 mr-3 mt-1">16</span>
                   <p>Step sons/step daughters may be included in the privilege pass of Railway employees, on specific request…. (RBE No.47/2003)</p>
                 </div>
                 <div className="flex items-start">
                   <span className="text-blue-500 mr-3 mt-1">17</span>
                   <p>Widows of ex-railway employees who are dependent on their son / daughter employed on the Railways, may exercise an option either to avail of pass facility as a dependent widowed mother by getting their name included in the privilege pass drawn by their son/ daughter or they may draw pass(es) as per their entitlement under the &apos;Widow Pass&apos; scheme…..ACS 20 issued. RBE 312/1999</p>
                 </div>
                 <div className="flex items-start">
                   <span className="text-blue-500 mr-3 mt-1">18</span>
                   <p>Dependent widow mother of the deceased railway employee may be included in the privilege pass of the widows appointed on compassionate grounds</p>
                 </div>
                 <div className="flex items-start">
                   <span className="text-blue-500 mr-3 mt-1">19</span>
                   <p>Widow mother-in-law in case of widows appointed on compassionate grounds, whether her father is alive or not….ACS 37 RBE 194/2001.</p>
                 </div>
                 <div className="flex items-start">
                   <span className="text-blue-500 mr-3 mt-1">20</span>
                   <p>Not more than two dependents can be included in pass/ PTO subject to the condition that the total number of persons included in the Pass/ PTO will not exceed 5 exclusive of Attendants wherever permissible…. This limit will not apply if only family members are included in the Pass/ PTO….. Para 3 (ii) under the head &quot;Conditions of entitlement&quot; of Schedule II of Pass Rules</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Bottom Info Bar */}
           <div className="mt-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-6 text-white">
             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <div>
                   <h4 className="text-lg font-semibold">Family Member Assistance</h4>
                   <p className="text-indigo-100">Contact HR department for family member inclusion in passes</p>
                 </div>
               </div>
               <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                 Get Help
               </button>
             </div>
           </div>
         </section>
         {/* School Pass Section */}
         <section className="bg-gradient-to-br from-green-50 to-teal-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-green-200">
           <div className="flex items-center mb-8">
             <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
               </svg>
             </div>
             <div>
               <h2 className="text-3xl font-bold text-gray-800 mb-2">
                 School Pass
               </h2>
               <p className="text-green-600 font-medium">
                 Educational travel benefits for railway servants&apos; children
               </p>
             </div>
           </div>

           {/* Introduction */}
           <div className="bg-white rounded-xl p-6 shadow-md border border-green-200 mb-8">
             <p className="text-gray-700 leading-relaxed">
               A school pass may be issued to the son or daughter of a railway servant who is a bona-fide student of any recognized educational institution.
             </p>
             <div className="mt-4 bg-green-50 rounded-lg p-4 border border-green-200">
               <p className="text-sm text-gray-700">
                 <strong>For Travel entitlement</strong> please refer RBE No. 16/2019 Dated 31/01/2019
               </p>
             </div>
           </div>

           {/* Key Features Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
             {/* School Cheque Pass */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">School Cheque Pass</h4>
               </div>
               <p className="text-gray-700 text-sm">Can be issued to each such student son/daughter who is dependent on the railway servant on production of a certificate from the recognized institution where the student is studying and which is away from the headquarters of the Railway servant.</p>
             </div>

             {/* Both Parents Railway Servants */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Both Parents Railway Servants</h4>
               </div>
               <p className="text-gray-700 text-sm">In cases where both husband and wife are railway servants, the passes shall be allowed against the account of either of the two.</p>
             </div>

             {/* Parent/Guardian Inclusion */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Parent/Guardian Inclusion</h4>
               </div>
               <p className="text-gray-700 text-sm">In case of a boy less than 18 years and a girl of any age, the parent or guardian may be included in the pass issued.</p>
             </div>

             {/* Separate Pass for Parent */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Separate Pass for Parent</h4>
               </div>
               <p className="text-gray-700 text-sm">A parent including a stepparent or guardian in the same class may be included in a pass - outward or inward and he/she may be issued a separate pass for going to bring the student or returning alone after leaving the student at school/college.</p>
             </div>

             {/* Guardian II Class Pass */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Guardian II Class Pass</h4>
               </div>
               <p className="text-gray-700 text-sm">If the attendant be a guardian he/she will be issued only a II Class Pass.</p>
             </div>

             {/* Vacation Duration */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Vacation Duration</h4>
               </div>
               <p className="text-gray-700 text-sm">This should be in case of recognized vacations of not less than three consecutive days duration (Sunday being included) or closure of institution due to unforeseen circumstances.</p>
             </div>

             {/* Admission/Jointing Travel */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Admission/Jointing Travel</h4>
               </div>
               <p className="text-gray-700 text-sm">To travel to recognized institution for admission/joining and back to head quarters of the railway servant.</p>
             </div>

             {/* Break of Journey */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Break of Journey</h4>
               </div>
               <p className="text-gray-700 text-sm">Break of journey en-route is permissible on school pass if endorsement to this effect is made on the pass.</p>
             </div>

             {/* Gazette Officer Approval */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Gazette Officer Approval</h4>
               </div>
               <p className="text-gray-700 text-sm">In cases where a school Pass is sought to/from a place other than the Railway servant&apos;s headquarters or the permanent place of residence of the other parent, if it be different, the grant of such pass shall have the approval of the gazette officer.</p>
             </div>

             {/* Pass Stoppage */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Pass Stoppage</h4>
               </div>
               <p className="text-gray-700 text-sm">Issue of School passes will not be affected by the stoppage of privilege passes of an employee on any account including by way of punishment.</p>
             </div>

             {/* Suspension Incidents */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Suspension Incidents</h4>
               </div>
               <p className="text-gray-700 text-sm">Incidents of suspension will not affect the eligibility of Railway employees to such passes.</p>
             </div>

             {/* Bonafide Certificate */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Bonafide Certificate</h4>
               </div>
               <p className="text-gray-700 text-sm">Bonafide Certificate from institution to be submitted once in a year at the beginning of the academic year for School Pass.</p>
             </div>

             {/* Advance Issue */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Advance Issue</h4>
               </div>
               <p className="text-gray-700 text-sm">School Passes may also be issued up to 4 months advance (RBE 101/2011).</p>
             </div>

             {/* Without Certificate */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Without Certificate</h4>
               </div>
               <p className="text-gray-700 text-sm">School Passes may be issued without Bonafide Certificate at the time of issuing but it should be submitted within a month.</p>
             </div>
           </div>

           {/* Entitlement Section */}
           <div className="mb-8">
             <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
               <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </span>
               Entitlement
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Group A & B Gazetted Officers */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                     </svg>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800">Group A & B Gazetted Officers</h4>
                     <span className="text-teal-700 text-sm">PLPM 8 TO 17</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Class:</strong> TO BE ISSUED WITH THE CLASS OF PASS WHICH THE RAILWAY SERVANT IS ENTITLED AS ON PRIVILEGE ACCOUNT.</p>
                 </div>
               </div>

               {/* Non-Gazetted */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                     </svg>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800">Non-Gazetted</h4>
                     <span className="text-teal-700 text-sm">PLPM 1 TO 6 AND ABOVE</span>
                   </div>
                 </div>
                 <div className="space-y-2 text-sm text-gray-700">
                   <p><strong>Class:</strong> TO BE ISSUED WITH THE CLASS OF PASS WHICH THE RAILWAY SERVANT IS ENTITLED AS ON PRIVILEGE ACCOUNT.</p>
                 </div>
               </div>
             </div>

             {/* Special Case Note */}
             <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
               <div className="flex items-start">
                 <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="text-lg font-semibold text-gray-800 mb-2">Special Case</h4>
                   <p className="text-gray-700 leading-relaxed">
                     HOWEVER, THE CHILDREN OF RAILWAY SERVANTS STUDYING IN OAK GROVE SCHOOL, JHARPANI WHO ARE NOT ORDINARILY ENTITLED FC PASSES MAY BE ISSUED FIRST CLASS PASS AS A SPECIAL CASE
                   </p>
                 </div>
               </div>
             </div>
           </div>

           {/* Bottom Info Bar */}
           <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white">
             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <div>
                   <h4 className="text-lg font-semibold">School Pass Assistance</h4>
                   <p className="text-green-100">Contact your department for school pass applications and documentation</p>
                 </div>
               </div>
               <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                 Apply Now
               </button>
             </div>
           </div>
         </section>
         {/* Post-Retirement Complimentary Pass Section */}
         <section className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-amber-200">
           <div className="flex items-center mb-8">
             <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <div>
               <h2 className="text-3xl font-bold text-gray-800 mb-2">
                 Post-Retirement Complimentary Pass
               </h2>
               <p className="text-amber-600 font-medium">
                 Retirement benefits for railway servants
               </p>
             </div>
           </div>

           {/* Introduction */}
           <div className="bg-white rounded-xl p-6 shadow-md border border-amber-200 mb-8">
             <p className="text-gray-700 leading-relaxed">
               A post-retirement complimentary pass may be issued to a railway servant after retirement or after he ceases to be a railway servant.
             </p>
             <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200">
               <p className="text-sm text-gray-700">
                 <strong>For Travel entitlement</strong> please refer RBE No. 16/2019 Dated 31/01/2019
               </p>
             </div>
           </div>

           {/* Key Features Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
             {/* Advance Issue */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Advance Issue</h4>
               </div>
               <p className="text-gray-700 text-sm">A retired railway servant may be issued, on request, one set of PRC Pass/Widow Pass in advance of the current calendar year from the date of issue, for journeys commencing in the next year duly debiting such issue of complimentary pass in the next year&apos;s account. The validity of the Pass will be for FIVE months, from the date of issue. RBE 41/2012</p>
             </div>

             {/* Medical Decategorisation */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Medical Decategorisation</h4>
               </div>
               <p className="text-gray-700 text-sm">A benefit of additional 5 years service for post-retirement complimentary passes may be allowed to those medically decategorised/unfit Railway servants who retire either by refusing to accept the alternative post or the alternative post being not available.</p>
             </div>

             {/* Retirement Year Entitlement */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Retirement Year Entitlement</h4>
               </div>
               <p className="text-gray-700 text-sm">In the year in which the Railway servant retires from service he is entitled to that number of single journey Post-retirement complimentary passes which represents the difference between the number of privilege passes he is normally entitled to in a calendar year while in service and the number actually availed by him.</p>
             </div>

             {/* Both Spouses Retired */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Both Spouses Retired</h4>
               </div>
               <p className="text-gray-700 text-sm">In cases where both husband and wife are retired Railway servants, they may avail the complimentary passes on each other&apos;s account.</p>
             </div>

             {/* Voluntary Retirement */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Voluntary Retirement</h4>
               </div>
               <p className="text-gray-700 text-sm">A benefit of 5 years service on voluntary retirement is granted towards the qualifying service for the grant of post-retirement complimentary passes on the same conditions as are laid down in Board&apos;s letter No. E (P&A) I 77 RT-46 dated 09.11.1977.</p>
             </div>

             {/* Identity Verification */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Identity Verification</h4>
               </div>
               <p className="text-gray-700 text-sm">Pass Issuing Authority shall satisfy himself about the identity of the retired Railway employee before issuing the Post retirement complimentary passes.</p>
             </div>

             {/* Identity Card */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Identity Card</h4>
               </div>
               <p className="text-gray-700 text-sm">Railway administration shall issue an identity card bearing the photographs of superannuated/retired railway employee and the family members eligible for inclusion in the post retirement passes.</p>
             </div>

             {/* Last Month Issue */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Last Month Issue</h4>
               </div>
               <p className="text-gray-700 text-sm">A retired Railway servant may be issued on his request one set of complimentary pass in the last month of the current calendar year for journey commencing in the next year duly debiting such issue of complimentary pass in the next year&apos;s account. The validity will be for 5 months, as the case may be from the date of issue.</p>
             </div>

             {/* Choice of Office */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Choice of Office</h4>
               </div>
               <p className="text-gray-700 text-sm">A retired Railway servant, if he so, desires, can obtain his post-retirement complimentary passes from an office of his choice authorized to issue such passes irrespective of the Railway or office from where he had retired.</p>
             </div>

             {/* Senior Citizen Companion */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Senior Citizen Companion</h4>
               </div>
               <p className="text-gray-700 text-sm">The retired senior citizen Railway servant eligible to travel with companion instead of attendant in same class provided if the retired railway servant is at the age of 70 years and above.</p>
             </div>

             {/* Nilgiri Railway Restriction */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Nilgiri Railway Restriction</h4>
               </div>
               <p className="text-gray-700 text-sm">Passes to retired employees are not admissible over the Nilgiri Railway during the months of April, May and June.</p>
             </div>

             {/* Level 1 Employees */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800">Level 1 Employees</h4>
               </div>
               <p className="text-gray-700 text-sm">Employees in LEVEL 1 entitled for post retirement Passes/PTOs. (RB Letter No. E(W)2010/PS-5/8-4 dated 02.03.2012)</p>
             </div>
           </div>

           {/* Entitlement Section */}
           <div className="mb-8">
             <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
               <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </span>
               Category & Number of PRC Passes Admissible (RBE 16/2019 DATED 31.01.2019)
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* Gazetted Officers */}
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                 <h4 className="font-semibold text-gray-800 mb-4">Gazetted Officers</h4>
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
                 <h4 className="font-semibold text-gray-800 mb-4">Non-Gazetted Officers</h4>
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
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                 </svg>
               </span>
               Members Permitted in PRC Passes
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                 <h4 className="font-semibold text-gray-800 mb-3">Family Members</h4>
                 <ul className="space-y-2 text-sm text-gray-700">
                   <li>• Spouse and Children (Subject to the same conditions of serving employees)</li>
                   <li>• Post Retrial Spouse</li>
                   <li>• Children who are above 21 years of age</li>
                   <li>• Widowed daughter/ Legally divorced daughter</li>
                   <li>• Widowed Mother</li>
                   <li>• Family in case of Group &apos;D&apos;</li>
                   <li>• &quot;Handicapped wards, Bonafide students etc….&quot;</li>
                 </ul>
               </div>

               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                 <h4 className="font-semibold text-gray-800 mb-3">Children Above 21 Years</h4>
                 <p className="text-sm text-gray-700 mb-3">Must be:</p>
                 <ul className="space-y-2 text-sm text-gray-700">
                   <li>• [a] Bonafide students of any recognized educational institution</li>
                   <li>• [b] engaged in any research work</li>
                   <li>• [c] working as an articled clerk</li>
                   <li>• [d] Invalid, on appropriate certificate from Railway Doctor</li>
                 </ul>
               </div>
             </div>
           </div>

           {/* Bottom Info Bar */}
           <div className="mt-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 text-white">
             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <div>
                   <h4 className="text-lg font-semibold">Retirement Pass Assistance</h4>
                   <p className="text-amber-100">Contact HR department for post-retirement pass applications</p>
                 </div>
               </div>
               <button className="bg-white text-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                 Apply Now
               </button>
             </div>
           </div>
         </section>
         {/* Widow Pass Section */}
         <section className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-rose-200">
           <div className="flex items-center mb-8">
             <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
               After the demise of a railway employee, eligible widows are entitled to special travel benefits through the Widow Pass scheme. The main rules, eligibility, and special conditions are detailed below.
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
                 <h4 className="font-semibold text-gray-800">In Service on 12.03.1987</h4>
               </div>
               <p className="text-gray-700 text-sm">
                 Widows of railway employees who were in service as on 12.03.1987, or who joined after that date and are compulsorily governed under the Widow Pass scheme, are eligible. They are entitled to 4 sets of PTOs per year while in service.
               </p>
             </div>
             {/* One-time Payment */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">2</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">One-time Payment</h4>
               </div>
               <p className="text-gray-700 text-sm">
                 Widows of employees who were in service prior to 12.03.1987 are eligible for the Widow Pass scheme on a one-time payment of Rs. 250.
               </p>
             </div>
             {/* Public Sector Absorption */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-500">
               <div className="flex items-center mb-4">
                 <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center mr-3">
                   <span className="text-white font-bold text-sm">3</span>
                 </div>
                 <h4 className="font-semibold text-gray-800">Public Sector Absorption</h4>
               </div>
               <p className="text-gray-700 text-sm">
                 Widows of employees who were permanently absorbed in public sector/autonomous bodies prior to 12.03.1987 and were in receipt of post-retirement complimentary passes are also eligible for the Widow Pass scheme on a one-time payment of Rs. 250.
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
                 Widows who had opted out of the Widow Pass scheme can also be admitted to the scheme on a one-time payment of Rs. 250.
               </p>
             </div>
           </div>

           {/* Passes Admissible Section */}
           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 mb-8">
             <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
               <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </span>
               Passes Admissible Per Year
             </h4>
             <ul className="list-disc pl-6 text-gray-700 space-y-2">
               <li><b>Group D Widows:</b> One complimentary pass every alternate year.</li>
               <li><b>Widows of employees who die in service:</b> At least one complimentary pass every alternate year (even if qualifying service is less).</li>
               <li><b>Multiple widows:</b> Passes are given by rotation in specified years.</li>
               <li><b>Widows above 65 years:</b> Companion facility is available.</li>
             </ul>
           </div>

           {/* Class and Conditions */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <h4 className="font-semibold text-gray-800 mb-3">Class of Pass</h4>
               <p className="text-gray-700 text-sm">
                 The class of Widow Pass will be the same as that admissible to the employee on retirement or as would be admissible notionally if the date of death is reckoned as the date of retirement.
               </p>
             </div>
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
               <h4 className="font-semibold text-gray-800 mb-3">Special Conditions</h4>
               <p className="text-gray-700 text-sm">
                 The terms and conditions applicable to Privilege Passes also apply to Widow Passes, except that dependent relatives are not eligible. However, the dependent widow mother can be included as a family member.
               </p>
             </div>
           </div>

           {/* Special Conditions */}
           <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 mb-8">
             <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
               <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </span>
               Important Rules
             </h4>
             <ul className="list-disc pl-6 text-gray-700 space-y-2">
               <li>Dependent relatives are not eligible for inclusion in Widow Passes. However, the dependent widow mother of the deceased employee can be included as a family member.</li>
               <li>If the widow becomes otherwise eligible for pass facility due to her son&apos;s/daughter&apos;s employment in Railways, her own employment, or remarriage, she will not be entitled to the Widow Pass. Once an option is exercised, it is final and cannot be changed.</li>
             </ul>
           </div>

           {/* Options Section */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
               <h4 className="font-semibold text-gray-800 mb-3">Option on Compassionate Appointment</h4>
               <p className="text-gray-700 text-sm">
                 Widows appointed on compassionate grounds may choose either to avail pass facilities as a railway servant or continue under the Widow Pass scheme. Once exercised, the option is final.
               </p>
             </div>
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
               <h4 className="font-semibold text-gray-800 mb-3">Option at Retirement</h4>
               <p className="text-gray-700 text-sm">
                 At the time of retirement/quitting service, widows may choose to be governed by the Widow Pass Scheme or the Post-retirement Complimentary Pass Scheme as per their status. Once exercised, the option is final.
               </p>
             </div>
           </div>

           {/* Senior Citizen Companion */}
           <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200 mb-8">
             <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
               <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
               </span>
               Senior Citizen Companion Facility
             </h4>
             <ul className="list-disc pl-6 text-gray-700 space-y-2">
               <li>Companion facility in 1st/1st &apos;A&apos; Widow Pass is available only for widows above 65 years of age.</li>
               <li>Companion facility is available in lieu of Attendant, only when the widow herself travels in Sleeper/2nd Class.</li>
               <li>Specific request must be made for companion facility. The ages of persons above 65 years included in the pass must be mentioned.</li>
             </ul>
             <div className="mt-4 space-y-2">
               <div className="p-4 bg-indigo-100 rounded-lg border border-indigo-300">
                 <p className="text-sm italic text-gray-700">
                   &quot;Companion in lieu of Attendant permitted when the Pass Holder travel in Sleeper Class/2nd Class.&quot;
                 </p>
               </div>
               <div className="p-4 bg-purple-100 rounded-lg border border-purple-300">
                 <p className="text-sm italic text-gray-700">
                   &quot;Companion in lieu of Attendant is permitted only when the pass holder and/or other family member of more than 65 years of age is/are travelling in Sleeper Class/II Class.&quot;
                 </p>
               </div>
             </div>
           </div>

           {/* Exclusions */}
           <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200 mb-8">
             <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
               <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                 </svg>
               </span>
               Exclusions
             </h4>
             <ul className="list-disc pl-6 text-gray-700 space-y-2">
               <li>This scheme does not apply to widows of employees who retired or died before 12.03.1987.</li>
               <li>It does not apply to casual labour unless they are absorbed as regular employees.</li>
               <li>The facility available to the widow of a male employee is also available to the widower of a female employee.</li>
             </ul>
           </div>

           {/* Members Permitted */}
           <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 mb-8">
             <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
               <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                 </svg>
               </span>
               Members Permitted in Widow Pass
             </h4>
             <ul className="list-disc pl-6 text-gray-700 space-y-2">
               <li>The dependent widow mother of the deceased employee can be included as a family member.</li>
               <li className="text-red-600">Children born out of void marriage are not eligible for inclusion in the Widow Pass.</li>
             </ul>
           </div>

           {/* Bottom Info Bar */}
           <div className="mt-8 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl p-6 text-white">
             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <div>
                   <h4 className="text-lg font-semibold">Widow Pass Assistance</h4>
                   <p className="text-rose-100">Contact your HR department for Widow Pass applications and documentation</p>
                 </div>
               </div>
               <button className="bg-white text-rose-600 px-6 py-2 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
                 Apply Now
               </button>
             </div>
           </div>
         </section>
      </div>
    </div>
  )
}

export default RSPassRules