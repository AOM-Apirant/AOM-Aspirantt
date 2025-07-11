import React from 'react'

const GMPowers = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-purple-200">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          POWERS OF THE GENERAL MANAGERS TO CONDONE IRREGULARITIES
        </h2>
        
        <div className="space-y-6 text-gray-800 leading-relaxed">
          
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-3">Scope of Powers</h3>
            <p>
              Except in cases of transfer and settlement passes issued to Railway servants,
              General Managers may condone the irregularities in the cases enumerated below.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-4">Types of Irregularities That Can Be Condoned:</h3>
            
            <div className="space-y-3">
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">1. Higher Class Issue</h4>
                <p className="text-sm">Issue of higher class of Passes and Privilege Ticket Orders under misinterpretation of the extant rules.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">2. Excess Issue</h4>
                <p className="text-sm">Excess issue of Passes and Privilege Ticket Orders during a year.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">3. Early Issue</h4>
                <p className="text-sm">Issue of more than one set of Passes before completion of five years service.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">4. Extra Family Members</h4>
                <p className="text-sm">Inclusion of more than five members in a Pass/Privilege Ticket Orders when a dependent relative is included.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">5. Extra Dependent Relatives</h4>
                <p className="text-sm">Inclusion of more than two dependent relatives in a Pass/Privilege Ticket Order.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">6. Adult Sons Without Certificates</h4>
                <p className="text-sm">Inclusion of sons and dependent brothers aged 21 years or over in a Pass/Privilege Ticket Order without the production of the necessary school or college certificate.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">7. Guardian Passes</h4>
                <p className="text-sm">Issue of Passes for &quot;Guardians&quot; on school account when the son is aged 18 years or above.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">8. Post-retirement Dependent Relatives</h4>
                <p className="text-sm">Inclusion of dependent relatives in Post-retirement Passes to retired Railway servants.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">9. Class IV Retired Servants</h4>
                <p className="text-sm">Inclusion of children in Post-retirement Passes to retired Class IV Railway servants.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">10. Longer Route</h4>
                <p className="text-sm">Issue of Passes by a longer route.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">11. Incorrect Issue Period</h4>
                <p className="text-sm">Incorrect issue of a Pass by pass issuing authority for a period exceeding three months in the case of a single journey or 4 months in the case of return journey and its use by a Railway servant or his family after the period of availability.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium text-purple-600">12. Correct Issue but Late Use</h4>
                <p className="text-sm">Correct issue of a Pass by the pass issuing authority for a period not exceeding three months in the case of single journey and four months in the case of return journey and its use by a Railway servant or his family after the period of availability.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
            <h3 className="font-semibold text-yellow-800 mb-3">Important Note:</h3>
            <p>
              The irregularity mentioned in item (12) above may be condoned by debiting
              an extra pass to the Railway servant&apos;s account.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-3">Key Points:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>General Managers have discretionary powers to condone irregularities</li>
              <li>Transfer and settlement passes are excluded from this scope</li>
              <li>Various types of administrative errors can be condoned</li>
              <li>Proper documentation and justification required</li>
              <li>Some cases may require additional pass debiting</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GMPowers