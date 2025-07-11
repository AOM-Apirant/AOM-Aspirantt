import React from 'react'

const DistanceRestrictions = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-2 border-teal-200">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-800 mb-4 sm:mb-6 text-center">
          DISTANCE RESTRICTIONS
        </h2>
        
        <div className="space-y-4 sm:space-y-6 text-gray-800 leading-relaxed">
          <p className="text-base sm:text-lg">
            Privilege pass shall be issued for journeys from the starting station to the destination
            station as desired by the railway servant, via shortest route, provided that a longer
            route may be permitted on the Privilege Pass in the following circumstances:
          </p>

          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
              <h3 className="font-semibold text-teal-700 mb-2 text-sm sm:text-base">1. Alternative Routes Available</h3>
              <p className="text-sm sm:text-base">
                Two alternative routes are available for a destination. For example – Bombay
                to Calcutta via Nagpur or via Allahabad and Bombay to Delhi by the Central
                Railway or by the Western Railway… such passes may be permitted by either
                route irrespective of the distance involved.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
              <h3 className="font-semibold text-teal-700 mb-2 text-sm sm:text-base">2. Longer Route Within 15% Distance</h3>
              <p className="text-sm sm:text-base">
                If the distance to destination via a longer route preferred by the Railway
                Servant does not exceed by fifteen percent of the distance via the direct route, such
                passes may be issued even if a double journey over a small portion is
                involved (for example - ex. Chittaranjan to Kancharapara via Howrah or ex-
                Lucknow to a station on the Southern/ South Central Railway via Bombay
                V.T.), provided the distance does not exceed the distance via the shortest
                route by more than 15% to take advantage of terminal facilities as in
                Bombay V.T.,- Kalyan or Madras- Arkonam sections.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
              <h3 className="font-semibold text-teal-700 mb-2 text-sm sm:text-base">3. Quicker Route Option</h3>
              <p className="text-sm sm:text-base">
                If the longer route to destination is quicker than the direct route irrespective
                of distance involved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DistanceRestrictions