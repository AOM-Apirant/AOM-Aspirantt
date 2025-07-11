import React from 'react'

const PrevilegePass = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-2 border-purple-200">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-800 mb-4 sm:mb-6 text-center">
          PRIVILEGE PASS
        </h2>
        
        <div className="space-y-4 sm:space-y-6 text-gray-800 leading-relaxed">
          
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">1. Definition and Purpose</h3>
            <p className="text-sm sm:text-base">
              Privilege Pass is a travel benefit issued to railway servants for personal
              travel. It allows the employee and their authorized family members to travel
              on Indian Railways at concessional rates or free of cost as per their
              entitlement level.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">2. Eligibility Criteria</h3>
            <p className="text-sm sm:text-base">
              Railway servants who have completed the required service period are eligible
              for privilege passes. The entitlement is based on their pay level and grade
              as per the railway rules and regulations.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">3. Family Member Inclusion</h3>
            <p className="text-sm sm:text-base">
              Family members including spouse, children, dependent relatives, and parents
              can be included in privilege passes as per the rules. The total number of
              persons cannot exceed the specified limit.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">4. Validity and Usage</h3>
            <p className="text-sm sm:text-base">
              Privilege passes are valid for a period of 5 months from the date of issue.
              They can be used for both single and return journeys within the validity
              period. Break of journey is permitted as per rules.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">5. Class of Travel</h3>
            <p className="text-sm sm:text-base">
              The class of travel depends on the employee&apos;s pay level and grade.
              Higher grades typically get higher class passes. Upgradation to higher
              class requires payment of fare difference.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>Personal travel benefit for railway employees</li>
              <li>Family members can be included as per rules</li>
              <li>5 months validity from issue date</li>
              <li>Class of travel based on pay level</li>
              <li>Break of journey permitted</li>
              <li>Upgradation possible with fare difference</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrevilegePass