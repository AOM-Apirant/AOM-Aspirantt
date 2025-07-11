import React from 'react'

const PassTransfer = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-2 border-purple-200">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-800 mb-4 sm:mb-6 text-center">
          PASS TRANSFER
        </h2>
        
        <div className="space-y-4 sm:space-y-6 text-gray-800 leading-relaxed">
          
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">1. Transfer Conditions</h3>
            <p className="text-sm sm:text-base">
              Passes and PTOs are not transferable and should be used only by the person
              in whose favour they have been issued. Transfer of passes to other persons
              is strictly prohibited and may result in disciplinary action.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">2. Authorized Usage</h3>
            <p className="text-sm sm:text-base">
              Only the railway servant and their authorized family members or dependents
              as specified in the pass rules can use the passes. Unauthorized usage by
              any other person is not permitted.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">3. Penalties for Transfer</h3>
            <p className="text-sm sm:text-base">
              Any attempt to transfer or allow unauthorized persons to use passes may
              result in disciplinary action including suspension, dismissal, or other
              penalties as per railway rules.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">4. Reporting Violations</h3>
            <p className="text-sm sm:text-base">
              Railway authorities should be immediately informed of any suspected
              transfer or misuse of passes. Timely reporting helps prevent further
              violations and protects legitimate pass holders.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Important Guidelines:</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>Passes are strictly non-transferable</li>
              <li>Only authorized family members can use passes</li>
              <li>Transfer violations lead to disciplinary action</li>
              <li>Report any suspected misuse immediately</li>
              <li>Pass holders are responsible for pass security</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PassTransfer