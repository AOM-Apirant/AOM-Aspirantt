import React from 'react'

const ODC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-blue-600 text-white py-6 px-8 rounded-lg shadow-lg mb-6">
            <h1 className="text-4xl font-bold mb-2">📦 Over Dimensional Consignment (ODC)</h1>
            <p className="text-xl font-semibold">Conditions for Movement of ISMD/ODC</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Regulatory Framework</h2>
            <div className="space-y-3 text-left">
              <p className="text-gray-700">
                <strong>Ref:</strong> 1. RAILWAY BOARD&rsquo;S LETTER No.2014/CEDO/SR/04 Dtd 20.10.2014
              </p>
              <p className="text-gray-700">
                <strong>Ref:</strong> 2. RAILWAY BOARD&rsquo;s LETTER No. 2022/TT-1/27/6 Dtd 23.06.2022
              </p>
              <p className="text-gray-700">
                <strong>Ref:</strong> 3. DIAGRAM NO:1 D(EDO/T-2202 OF ACS No.27 TO IRSOD-2014
              </p>
            </div>
          </div>
        </div>

        {/* Definition Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📋 Definition</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-lg text-gray-700 leading-relaxed">
              Consignments which when loaded upon a wagon, would infringe the maximum standard moving
              Dimension, at any point, on the entire route, from the booking station to the Destination is called
              an <strong className="text-blue-700">Over Dimensional Consignment (ODC)</strong>.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Any consignment exceeding the Dimension quoted below shall not be registered for booking
              unless prior sanction for its acceptance has been obtained from the zonal headquarters.
            </p>
          </div>
        </div>

        {/* Dimension Limits */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📏 Dimension Limits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-green-800">Height at centre</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">4265 mm</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-800">Height at side</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">3735 mm</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-purple-800">Width</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold">3250 mm</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">up to a height of 3735 mm and 2030 mm beyond 3735 mm</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-orange-800">Maximum width</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded font-bold">3250 mm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ODC Classification */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🏷️ ODC Classification</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Class A */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">Class &lsquo;A&rsquo;</h4>
                <p className="text-green-100">Permitted out of gauge Loads</p>
              </div>
              <div className="p-6">
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-green-800 font-semibold">
                    Gross clearance of <strong>228.6 mm (9&rdquo;)</strong> and above
                  </p>
                </div>
                <h5 className="font-bold text-gray-800 mb-3">Sanctioning Authority:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Within Division: <strong>DRM</strong></li>
                  <li>• Inter Division of the same Zone: <strong>COM</strong></li>
                  <li>• Inter Railway: <strong>COM of the Zone and COM of the concern Railway</strong></li>
                </ul>
              </div>
            </div>

            {/* Class B */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-yellow-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">Class &lsquo;B&rsquo;</h4>
                <p className="text-yellow-100">Exceptional out of gauge Loads</p>
              </div>
              <div className="p-6">
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <p className="text-yellow-800 font-semibold">
                    Gross clearance of <strong>152.4 mm (6&rdquo;)</strong> and above, but less than <strong>228.6 mm (9&rdquo;)</strong>
                  </p>
                </div>
                <h5 className="font-bold text-gray-800 mb-3">Sanctioning Authority:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Local: <strong>DRM</strong></li>
                  <li>• Inter Division/Foreign Railway: <strong>COM</strong></li>
                </ul>
              </div>
            </div>

            {/* Class C */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">Class &lsquo;C&rsquo;</h4>
                <p className="text-red-100">Extra-ordinary out of gauge Loads</p>
              </div>
              <div className="p-6">
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <p className="text-red-800 font-semibold">
                    Gross clearance of less than <strong>152.4 mm (6&rdquo;)</strong> but not less than <strong>101.6 mm (4&rdquo;)</strong>
                  </p>
                </div>
                <h5 className="font-bold text-gray-800 mb-3">Sanctioning Authority:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>CRS</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Movement Conditions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🚂 Conditions for Movement of ODC</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Class A Conditions */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="text-lg font-bold text-green-800 mb-4">Class &lsquo;A&rsquo; Conditions</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Speed:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">Sectional Speed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Permitted:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">Day & Night</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Escort:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">Not Necessary</span>
                </div>
              </div>
            </div>

            {/* Class B Conditions */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-lg font-bold text-yellow-800 mb-4">Class &lsquo;B&rsquo; Conditions</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Speed:</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">Max 40 kmph</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Permitted:</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">Day & Night</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Escort:</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">TXR Required</span>
                </div>
              </div>
            </div>

            {/* Class C Conditions */}
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="text-lg font-bold text-red-800 mb-4">Class &lsquo;C&rsquo; Conditions</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Speed:</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">Max 25 kmph</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Permitted:</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">Day Time Only</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Escort:</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">SSE/P.WAY, SSE/C&W, TI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Electrified Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">⚡ In Electrified Section</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
            <p className="text-lg text-gray-700">
              The following are the clearances from contact wire for the passage of ODCs through
              electrified sections and the special restrictions required: <strong>C-10 (SCR)</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="text-lg font-bold text-green-800 mb-3">✅ More than 250 mm</h4>
              <p className="text-green-700">
                A special speed restriction is <strong>not required</strong>
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-lg font-bold text-yellow-800 mb-3">⚠️ 250 mm to 200 mm</h4>
              <p className="text-yellow-700">
                Speed must be restricted to <strong>15 kmph</strong><br/>
                <span className="text-sm">(ODC would not be stopped under critical locations. Representative of the OHE section should accompany the Train)</span>
              </p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="text-lg font-bold text-red-800 mb-3">🚫 Less than 200 mm</h4>
              <p className="text-red-700">
                Speed must be restricted to <strong>15 kmph</strong> and power to OHE must be <strong>switched off</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">📋 ODC Movement Guidelines</h3>
          <p className="text-xl mb-4">
            Strict adherence to clearance requirements and speed restrictions ensures safe transportation
          </p>
          <p className="text-sm opacity-90">(For Official Railway Operations Reference)</p>
        </div>
      </div>
    </div>
  )
}

export default ODC