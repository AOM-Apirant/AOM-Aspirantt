import React from 'react'

const SplitPass = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-purple-200">
        <h2 className="lg:text-3xl text-xl font-bold mb-6 text-center">
          SPLIT PASS
        </h2>
        
        <div className="space-y-6 text-gray-800 leading-relaxed">
          
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-3">What is Split Pass?</h3>
            <p>
              When a Railway employee is unable to accompany his family, he can avail
              pass for himself and a pass for family.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-3">Pass Issuance Process</h3>
            <p>
              Separate passes will be issued which will constitute a set. Such passes shall
              be issued within a period of one month.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
            <h3 className="font-semibold text-yellow-800 mb-3">Important Restriction:</h3>
            <p>
              This facility is not applicable to retired railway employees.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-3">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Available for active railway employees only</li>
              <li>Separate passes for employee and family</li>
              <li>Passes constitute a set</li>
              <li>Must be issued within one month</li>
              <li>Not available for retired employees</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
            <h3 className="font-semibold text-blue-800 mb-3">When to Use Split Pass:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>When employee cannot travel with family</li>
              <li>When family needs to travel separately</li>
              <li>When employee has work commitments</li>
              <li>When family travel is urgent</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SplitPass