import React from 'react'

const InvalidBPC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-red-600 text-white py-6 px-8 rounded-lg shadow-lg mb-6">
            <h1 className="text-4xl font-bold mb-2">⚠️ BPC Invalidation Conditions</h1>
            <p className="text-xl font-semibold">When BPC becomes Invalid for Different Types of Examinations</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Brake Power Certificate (BPC) Validity</h2>
            <p className="text-lg text-gray-700 mb-4">
              BPC becomes invalid under the following conditions for different types of examinations
            </p>
            
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Important Note:</h3>
              <p className="text-lg text-yellow-700">
                As per Railway Board letter No. 2002/M (N)/204/10/Vol.I dated 30.07.2009 regarding
                validity of BPC for detachment/ attachment of 5 BLC/BLL wagons permitted en-route during
                validity of BPC.
              </p>
            </div>
          </div>
        </div>

        {/* Invalidation Conditions */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚫 BPC Invalidation Conditions</h3>
          <div className="space-y-8">
            {/* Condition 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">1</span>
                <h4 className="text-2xl font-bold text-red-700">Rake Integrity Disturbance</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h5 className="text-lg font-bold text-blue-800 mb-3">CC Examination</h5>
                  <p className="text-blue-700">
                    Rake integrity disturbed by more than 4 wagons within the validity of the BPC. Only
                    up to 4 wagons attachment/detachment of CC fit wagons is permitted
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h5 className="text-lg font-bold text-green-800 mb-3">Premium Examination</h5>
                  <p className="text-green-700">
                    Rake integrity disturbed by more than 4 wagons within the validity of the BPC.
                    Only up to 4 wagons attachment/ detachment is permitted enroute during
                    validity of BPC.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h5 className="text-lg font-bold text-purple-800 mb-3">End to End Examination</h5>
                  <p className="text-purple-700">
                    Rake integrity disturbed by more than 4 wagons within the validity of the BPC.
                    Only up to 4 wagons attachment/ detachment is permitted enroute during
                    validity of BPC.
                  </p>
                </div>
              </div>
            </div>

            {/* Condition 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">2</span>
                <h4 className="text-2xl font-bold text-red-700">Stabling Duration Limit</h4>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                <h5 className="text-xl font-bold text-orange-800 mb-3">All Examination Types</h5>
                <p className="text-orange-700 text-lg">
                  The rake shall not be stabled for more than <strong>24 hours</strong> at Train examination Yard.
                </p>
              </div>
            </div>

            {/* Condition 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">3</span>
                <h4 className="text-2xl font-bold text-red-700">Zone Movement Restriction</h4>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h5 className="text-xl font-bold text-blue-800 mb-3">CC Examination Only</h5>
                <p className="text-blue-700 text-lg">
                  CC rakes moved to any other Zone not mentioned in the circuit.
                </p>
              </div>
            </div>

            {/* Condition 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">4</span>
                <h4 className="text-2xl font-bold text-red-700">Movement & Loading Conditions</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h5 className="text-lg font-bold text-blue-800 mb-3">CC Examination</h5>
                  <p className="text-blue-700">
                    Overdue CC rake is not moved in the direction of PME depot.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h5 className="text-lg font-bold text-green-800 mb-3">Premium Examination</h5>
                  <p className="text-green-700">
                    Premium rake moves for loading after 12 days from the date of issue of BPC.
                  </p>
                </div>
              </div>
            </div>

            {/* Condition 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">5</span>
                <h4 className="text-2xl font-bold text-red-700">Time & Distance Limits</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h5 className="text-lg font-bold text-blue-800 mb-3">CC Examination</h5>
                  <p className="text-blue-700">
                    CC Rake running more than <strong>35 days/7500 kms</strong> or as per latest
                    guidelines issued by Railway Board.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h5 className="text-lg font-bold text-green-800 mb-3">Premium Examination</h5>
                  <p className="text-green-700">
                    Empty rake running after the <strong>12th day</strong> of issue of BPC or as per latest
                    guidelines issued by Railway Board.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h5 className="text-lg font-bold text-purple-800 mb-3">End to End Examination</h5>
                  <p className="text-purple-700">
                    Destination stations not mentioned or unsigned corrections of destination
                    name in the BPC of loaded rakes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">📊 Examination Type Summary</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 CC Examination</h4>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">Rake integrity (4 wagons limit)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">24hrs stabling limit</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">Zone movement restriction</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">PME depot movement</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">35 days/7500 kms limit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">⭐ Premium Examination</h4>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">Rake integrity (4 wagons limit)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">24hrs stabling limit</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">12 days loading limit</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">12 days empty rake limit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🔍 End to End Examination</h4>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">Rake integrity (4 wagons limit)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">24hrs stabling limit</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">Destination station validation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🔑 Key Points</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">!</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Wagon Limit</h4>
                  <p className="text-gray-600 text-sm">Maximum 4 wagons attachment/detachment permitted</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">!</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Stabling Time</h4>
                  <p className="text-gray-600 text-sm">24 hours maximum at Train examination Yard</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">!</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Time Limits</h4>
                  <p className="text-gray-600 text-sm">CC: 35 days/7500 kms, Premium: 12 days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">!</span>
                <div>
                  <h4 className="font-semibold text-gray-800">BLC/BLL Wagons</h4>
                  <p className="text-gray-600 text-sm">5 BLC/BLL wagons permitted en-route</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">⚠️ BPC Compliance</h3>
          <p className="text-xl mb-4">
            Strict adherence to BPC validity conditions ensures safe and compliant freight operations
          </p>
          <p className="text-sm opacity-90">(For Official Railway Operations Reference)</p>
        </div>
      </div>
    </div>
  )
}

export default InvalidBPC