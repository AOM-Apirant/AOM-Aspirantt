import React from 'react'

const SahayaksPass = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-purple-200">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          PASSES/PTOS FOR LICENSED PORTES (SAHAYAKS)
        </h2>
        
        <div className="space-y-6 text-gray-800 leading-relaxed">
          
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-4">Pass Types and Eligibility</h3>
            
            <div className="space-y-4">
              <div className="border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-600 mb-2">1. Complimentary Administrative Cheque Passes</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Type:</span> Self & Spouse
                  </div>
                  <div>
                    <span className="font-medium">Class:</span> Second/Sleeper
                  </div>
                  <div>
                    <span className="font-medium">Number:</span> 1
                  </div>
                  <div>
                    <span className="font-medium">Validity:</span> 5 Months
                  </div>
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-600 mb-2">2. Privilege Ticket Orders (PTO)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Type:</span> Self & Spouse
                  </div>
                  <div>
                    <span className="font-medium">Class:</span> Second/Sleeper
                  </div>
                  <div>
                    <span className="font-medium">Number:</span> 2
                  </div>
                  <div>
                    <span className="font-medium">Validity:</span> 5 Months
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-3">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Available for licensed porters (Sahayaks)</li>
              <li>Both complimentary passes and PTOs available</li>
              <li>Self and spouse eligible for both types</li>
              <li>Second/Sleeper class travel only</li>
              <li>5 months validity period</li>
              <li>Different number of passes for each type</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
            <h3 className="font-semibold text-yellow-800 mb-3">Important Notes:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Only licensed porters are eligible for these passes</li>
              <li>Passes are non-transferable</li>
              <li>Must be used within validity period</li>
              <li>Subject to railway rules and regulations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SahayaksPass