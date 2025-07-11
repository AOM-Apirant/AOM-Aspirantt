import React from 'react'

const OtherNotes = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-2 border-purple-200">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-800 mb-4 sm:mb-6 text-center">
          OTHER NOTES
        </h2>
        
        <div className="space-y-4 sm:space-y-6 text-gray-800 leading-relaxed">
          
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">1. Pass Validity and Journey Limits</h3>
            <p className="text-sm sm:text-base">
              A pass shall be valid for a period of 5 months from the date of issue. A
              railway servant may be issued with one set of passes in a year. A railway
              servant may be issued with one set of passes in a year. A railway servant
              may be issued with one set of passes in a year. A railway servant may be
              issued with one set of passes in a year.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">2. Family Member Inclusion</h3>
            <p className="text-sm sm:text-base">
              The family members of a railway servant may be included in the pass. The
              family members of a railway servant may be included in the pass. The family
              members of a railway servant may be included in the pass. The family
              members of a railway servant may be included in the pass.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">3. Dependent Relative Inclusion</h3>
            <p className="text-sm sm:text-base">
              Not more than two dependent relatives may be included in a pass. Not more
              than two dependent relatives may be included in a pass. Not more than two
              dependent relatives may be included in a pass. Not more than two dependent
              relatives may be included in a pass.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">4. Total Member Limit</h3>
            <p className="text-sm sm:text-base">
              The total number of persons included in a pass shall not exceed 5. The
              total number of persons included in a pass shall not exceed 5. The total
              number of persons included in a pass shall not exceed 5. The total number
              of persons included in a pass shall not exceed 5.
            </p>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">5. Attendant Travel</h3>
            <p className="text-sm sm:text-base">
              An attendant may be carried in the same class as the pass holder. An
              attendant may be carried in the same class as the pass holder. An attendant
              may be carried in the same class as the pass holder. An attendant may be
              carried in the same class as the pass holder.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Important Guidelines:</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>Pass validity is strictly 5 months from issue date</li>
              <li>Only one set of passes per year is allowed</li>
              <li>Family members can be included in passes</li>
              <li>Maximum 2 dependent relatives per pass</li>
              <li>Total persons cannot exceed 5 per pass</li>
              <li>Attendants travel in same class as pass holder</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OtherNotes