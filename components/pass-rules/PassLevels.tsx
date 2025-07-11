import React from 'react'

const PassLevels = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-2 border-purple-200">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-800 mb-4 sm:mb-6 text-center">
          PASS LEVELS
        </h2>
        
        <div className="space-y-4 sm:space-y-6 text-gray-800 leading-relaxed">
          
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">1. First Class Pass</h3>
            <p className="text-sm sm:text-base">
              First Class Pass is issued to railway servants who are entitled to First Class
              travel. This includes officers in higher grades and certain categories of
              employees as per the rules.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">2. Second Class Pass</h3>
            <p className="text-sm sm:text-base">
              Second Class Pass is issued to railway servants who are entitled to Second
              Class travel. This is the most common type of pass issued to regular
              employees.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">3. Sleeper Class Pass</h3>
            <p className="text-sm sm:text-base">
              Sleeper Class Pass is issued to railway servants who are entitled to Sleeper
              Class travel. This is typically for lower grade employees.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">4. AC Class Pass</h3>
            <p className="text-sm sm:text-base">
              AC Class Pass is issued to railway servants who are entitled to AC Class
              travel. This includes certain categories of officers and employees.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Pass Level Guidelines:</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>Pass level is determined by employee grade and entitlement</li>
              <li>Higher grades typically get higher class passes</li>
              <li>Pass level affects travel comfort and facilities</li>
              <li>Upgradation to higher class requires fare difference payment</li>
              <li>Pass level is non-negotiable and rule-based</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PassLevels