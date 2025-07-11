import React from 'react'

const PassTypes = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-2 border-purple-200">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-800 mb-4 sm:mb-6 text-center">
          PASS TYPES
        </h2>
        
        <div className="space-y-4 sm:space-y-6 text-gray-800 leading-relaxed">
          
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">1. Privilege Pass</h3>
            <p className="text-sm sm:text-base">
              Privilege Pass is issued to railway servants for personal travel. It allows
              the employee and their family members to travel on Indian Railways at
              concessional rates or free of cost as per their entitlement.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">2. Duty Pass</h3>
            <p className="text-sm sm:text-base">
              Duty Pass is issued for official travel purposes. It is used when railway
              servants need to travel for work-related purposes such as training,
              meetings, inspections, or other official duties.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">3. Post-Retirement Pass</h3>
            <p className="text-sm sm:text-base">
              Post-Retirement Pass is issued to retired railway employees. It allows
              them to continue traveling on Indian Railways with certain benefits and
              restrictions as per retirement rules.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">4. Widow Pass</h3>
            <p className="text-sm sm:text-base">
              Widow Pass is issued to widows of deceased railway employees. It provides
              travel benefits to help them with their transportation needs after the
              death of their railway employee spouse.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">5. School Pass</h3>
            <p className="text-sm sm:text-base">
              School Pass is issued for children of railway employees to travel to and
              from their educational institutions. It helps with the transportation
              needs of railway employee families.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Pass Type Guidelines:</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>Each pass type has specific eligibility criteria</li>
              <li>Pass types determine travel entitlements and benefits</li>
              <li>Different pass types have different validity periods</li>
              <li>Pass types may have different family member inclusion rules</li>
              <li>Some pass types are for specific purposes only</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PassTypes