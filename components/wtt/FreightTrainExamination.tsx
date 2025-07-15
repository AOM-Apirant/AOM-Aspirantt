import React from 'react'

const FreightTrainExamination = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-orange-600 text-white py-6 px-8 rounded-lg shadow-lg mb-6">
            <h1 className="text-4xl font-bold mb-2">🔍 Freight Train Examination</h1>
            <p className="text-xl font-semibold">Examination Points in South Central Railway</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-orange-700 mb-4">Examination Infrastructure</h2>
            <p className="text-lg text-gray-700 mb-4">
              The examination points on SCR shall be as under for ensuring safe and efficient freight operations
            </p>
            
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Special Note:</h3>
              <p className="text-lg text-yellow-700">
                62 Nos of privately owned Tank Wagons (BTCS) loaded with Caustic soda owned by M/s
                Andhra sugar Ltd, Tanuku, being examined on end-to-end pattern at freight examination
                facilities developed at KVR by the firm.
              </p>
            </div>
          </div>
        </div>

        {/* Examination Points by Division */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">📍 Examination Points by Division</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SC Division */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 SC Division</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">CC+ Premium Base Depot</h5>
                    <p className="text-blue-700">RDM, BPA & SNF</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">Premium Examination Point</h5>
                    <p className="text-green-700">RDM, BPA, SNF, DKJ</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">End to End Examination</h5>
                    <p className="text-purple-700">RDM, BPA, SNF, DKJ & KZJ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BZA Division */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 BZA Division</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">CC+ Premium Base Depot</h5>
                    <p className="text-green-700">BZA & COA</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">Premium Examination Point</h5>
                    <p className="text-blue-700">BZA, COA & BTTR</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">End to End Examination</h5>
                    <p className="text-purple-700">BZA, COA, BTTR & RJY*</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GTL Division */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 GTL Division</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">CC+ Premium Base Depot</h5>
                    <p className="text-purple-700">GY</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">Premium Examination Point</h5>
                    <p className="text-green-700">GY</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">End to End Examination</h5>
                    <p className="text-blue-700">GY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* NED Division */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 NED Division</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-bold text-red-800 mb-2">CC+ Premium Base Depot</h5>
                    <p className="text-red-700">-</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-800 mb-2">Premium Examination Point</h5>
                    <p className="text-orange-700">PAU</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-800 mb-2">End to End Examination</h5>
                    <p className="text-yellow-700">PAU</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GNT Division */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 GNT Division</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-bold text-indigo-800 mb-2">CC+ Premium Base Depot</h5>
                    <p className="text-indigo-700">-</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">Premium Examination Point</h5>
                    <p className="text-blue-700">NLPD</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">End to End Examination</h5>
                    <p className="text-green-700">NLPD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HYB Division */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-teal-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 HYB Division</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-bold text-teal-800 mb-2">CC+ Premium Base Depot</h5>
                    <p className="text-teal-700">-</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">Premium Examination Point</h5>
                    <p className="text-blue-700">-</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">End to End Examination</h5>
                    <p className="text-green-700">NZB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Material Train Depots */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🚛 Material Train Depots</h3>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
            <h4 className="text-xl font-bold text-orange-800 mb-4">For Only Material Train (Depots):</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {['GY', 'KZJ', 'RJY', 'BTTR', 'NLPD', 'PAU'].map((depot, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-orange-200 text-center">
                  <span className="text-xl font-bold text-orange-600">{depot}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📋 Important Notes</h3>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-bold text-blue-800 mb-3">a. Infrastructure Upgradation</h4>
              <p className="text-blue-700">
                All CC rake and premium points should be upgraded to &lsquo;A&rsquo; category, and works sanctioned
                should be completed.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="text-lg font-bold text-green-800 mb-3">b. ROH Depots</h4>
              <p className="text-green-700">
                RDM, BPA, SNF (for BLC, BCFC & BCCW), BZA and GY are nominated as ROH depots.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="text-lg font-bold text-purple-800 mb-3">c. Infrastructure Requirements</h4>
              <p className="text-purple-700">
                For carrying out CC & Premium rake examination, Divisions should plan and provide the
                following infrastructure facilities, Machinery & Plants without fail.
              </p>
            </div>
          </div>
        </div>

        {/* Types of Examinations */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🔍 Types of Examinations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">1. CC RAKE EXAMINATION</h4>
              </div>
              <div className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚂</span>
                  </div>
                  <p className="text-gray-700">
                    Comprehensive examination of Container Carrying rakes for safety and compliance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">2. PREMIUM RAKE EXAMINATION</h4>
              </div>
              <div className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <p className="text-gray-700">
                    High-priority examination for premium freight trains with enhanced safety protocols
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">3. END TO END EXAMINATION</h4>
              </div>
              <div className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <p className="text-gray-700">
                    Complete examination covering entire train length from start to finish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🔍 Freight Train Safety</h3>
          <p className="text-xl mb-4">
            Comprehensive examination system ensuring safe and efficient freight operations
          </p>
          <p className="text-sm opacity-90">(For Official Railway Operations Reference)</p>
        </div>
      </div>
    </div>
  )
}

export default FreightTrainExamination