import React from 'react'

const Definitions = () => {
  return (
    <div>
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
                a person exclusively employed on salary in the personal service
                of a railway servant.
              </p>
            </div>

            {/* Definition b */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-700 mb-2">
                b) &apos;adopted child&apos; means
              </h3>
              <p className="text-gray-600 leading-relaxed">
                a child for whom there is satisfactory proof of adoption
                irrespective of the fact whether such adoption is permissible or
                not under the personal law governing the railway servant
                concerned.
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
                  Brother who has attained the age of twenty one years and is a
                  bonafide student
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">➢</span>
                  Legally divorced sister
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">➢</span>
                  Widow mother-in-law in case of widows appointed on
                  compassionate grounds, whether her father is alive or not.
                </li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Provided that</strong> a person shall not be
                  considered to be a dependent relative if his/her income from
                  all sources including pension, dearness relief, etc. exceeds
                  15% of pay per month of the Railway servant or the amount
                  arrived at by adding minimum Pension/Family Pension of Rs
                  9000/- (excluding the element of additional pension to old
                  pensioners) and the dearness relief admissible to the
                  pensioners/family pensioners on pension rounded off to the
                  nearest ten rupee figure, whichever is more. (Revised limit
                  for dependency w.e.f 01.01.2016 RBE 132/2016 Dated 24/11/2016)
                </p>
              </div>

              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Provided further that</strong> dependent relatives may
                  be included in the Privilege Passes/PT0s given to the railway
                  servants in cases where father is missing for a period of at
                  least 7 years Passes/PT0s can also be given to the sisters in
                  similar circumstances. However, an affidavit as to the period
                  since when the person is missing, duly attested by a
                  Magistrate is necessary.
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
                  Son or sons who have not attained the age of 21 years and are
                  wholly dependent on the railway servant;
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">➢</span>
                  Son or sons of the age of 21 and above who are bonafide
                  student
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">➢</span>
                  Unmarried daughters of any age whether earning or not;
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">➢</span>
                  Widowed daughters provided they are dependent on the railway
                  servant;
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">➢</span>
                  Legally divorced daughter who is dependent on the railway
                  servant;
                </li>
              </ul>

              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> For the purpose of issue of Special
                  Pass on medical grounds under Schedule-VII, the term
                  &quot;family&quot; and &quot;dependant relatives&quot; shall
                  be as defined in Paras 601(5) and 601(6) respectively of
                  IRMM,2000.
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
                  Any other pay which may be specially classified as pay by the
                  President.
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
              <p className="text-gray-600 leading-relaxed">a Calendar Year.</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Definitions