import React from 'react'

const ReliefTrains = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-red-600 text-white py-6 px-8 rounded-lg shadow-lg mb-6">
            <h1 className="text-4xl font-bold mb-2">🚨 Accident Relief Equipment</h1>
            <p className="text-xl font-semibold">Status of 140T BD Cranes, ARTs, ARMVs & RARVs over SCR</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Emergency Response Infrastructure</h2>
            <p className="text-lg text-gray-700 mb-4">
              Comprehensive network of <span className="font-bold text-red-600">Accident Relief Trains (ARTs)</span> and
              <span className="font-bold text-red-600"> specialized vehicles</span> across South Central Railway
            </p>
            
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Equipment Classification:</h3>
              <p className="text-lg text-yellow-700">
                <strong>&ldquo;A&rdquo; Class ART:</strong> 140T DHBD Crane + HRE Set<br/>
                <strong>&ldquo;B&rdquo; Class ART:</strong> HRE Set Only
              </p>
            </div>
          </div>
        </div>

        {/* ART Locations Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">📍 ART Locations Across Divisions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* SC Division */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 SC Division</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">SC Station</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Type:</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">&quot;A&quot; Class</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Crane:</span>
                        <span className="text-sm text-gray-600">Cowans Sheldon New Design-140T</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">SC Station</h5>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Type:</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class (SPART)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* KZJ Division */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 KZJ Division</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">KZJ Station</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Type:</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">&quot;A&quot; Class</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Crane:</span>
                        <span className="text-sm text-gray-600">Cowans Sheldon Old Design-140T</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">KZJ Station</h5>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Type:</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class (SPART)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BZA Division */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 BZA Division</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">BZA Station</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Type:</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-bold">&quot;A&quot; Class</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Crane:</span>
                        <span className="text-sm text-gray-600">Cowans Sheldon Old Design-140T</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-800 mb-2">BZA Station</h5>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Type:</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class (SPART)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Divisions */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-orange-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 Other Locations</h4>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">BPA</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">HYB NZB</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">RJY</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">BTTR</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GTL Division */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h4 className="text-xl font-bold">🚂 GTL Division</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-bold text-indigo-800 mb-2">GY Station</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Type:</span>
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-bold">&quot;A&quot; Class</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Crane:</span>
                        <span className="text-sm text-gray-600">Cowans Sheldon Old Design-140T</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                                          <div className="flex justify-between items-center py-1">
                        <span className="font-medium">GTL</span>
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class</span>
                      </div>
                                          <div className="flex justify-between items-center py-1">
                        <span className="font-medium">RU</span>
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="font-medium">DMM</span>
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class</span>
                    </div>
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
                    <h5 className="font-bold text-red-800 mb-2">PAU Station</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Type:</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">&quot;A&quot; Class</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Crane:</span>
                        <span className="text-sm text-gray-600">Gottwald New Design-140T</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">GNT Station</h5>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Type:</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">&quot;B&quot; Class</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 140-T DHBD Cranes Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🏗️ 140-T DHBD Cranes Specifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { location: 'SC', division: 'SC', type: '"A" Class', capacity: '140 Ton', make: 'Cowans Sheldon', design: 'New', year: '2001', returnDate: '2029', speed: '100 kmph' },
              { location: 'KZJ', division: 'SC', type: '"A" Class', capacity: '140 Ton', make: 'Cowans Sheldon', design: 'Old', year: '1989', returnDate: '2025', speed: '75 kmph' },
              { location: 'BZA', division: 'BZA', type: '"A" Class', capacity: '140 Ton', make: 'Cowans Sheldon', design: 'Old', year: '1990', returnDate: '2026', speed: '75 kmph' },
              { location: 'GY', division: 'GTL', type: '"A" Class', capacity: '140 Ton', make: 'Cowans Sheldon', design: 'Old', year: '1990', returnDate: '2026', speed: '75 kmph' },
              { location: 'PAU', division: 'NED', type: '"A" Class', capacity: '140 Ton', make: 'Gottwald', design: 'New', year: '2009', returnDate: '2025', speed: '100 kmph' }
            ].map((crane, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-blue-800">{crane.location}</h4>
                  <p className="text-sm text-gray-600">{crane.division} Division</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Type:</span>
                    <span className="font-bold text-blue-600">{crane.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Capacity:</span>
                    <span className="font-bold text-green-600">{crane.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Make:</span>
                    <span className="text-sm text-gray-600">{crane.make}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Design:</span>
                    <span className={`font-bold ${crane.design === 'New' ? 'text-green-600' : 'text-orange-600'}`}>
                      {crane.design}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Year:</span>
                    <span className="text-sm text-gray-600">{crane.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">POH/MLR:</span>
                    <span className="text-sm text-gray-600">{crane.returnDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Speed:</span>
                    <span className="font-bold text-purple-600">{crane.speed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ARMVs and RARVs */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* ARMVs */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white py-4 px-6">
              <h3 className="text-xl font-bold">🚑 Accident Relief Medical Vans (ARMVs)</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {[
                  { div: 'SC', location: 'SC', type: 'SPARMV' },
                  { div: 'SC', location: 'KZJ', type: 'HS-SPARMV' },
                  { div: 'SC', location: 'HYB NZB', type: 'SPARMV' },
                  { div: 'BZA', location: 'BZA', type: 'HS-SPARMV' },
                  { div: 'BZA', location: 'RJY', type: 'SPARMV' },
                  { div: 'BZA', location: 'BTTR', type: 'SPARMV' },
                  { div: 'GTL', location: 'GTL', type: 'HS-SPARMV' },
                  { div: 'GTL', location: 'RU', type: 'Conventional' },
                  { div: 'GTL', location: 'DMM', type: 'Conventional' },
                  { div: 'GTL', location: 'GNT', type: 'HS-SPARMV' },
                  { div: 'NED', location: 'PAU', type: 'HS-SPARMV' }
                ].map((armv, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <span className="font-medium text-gray-800">{armv.location}</span>
                      <span className="text-sm text-gray-500 ml-2">({armv.div})</span>
                    </div>
                    <span className={`px-3 py-1 rounded text-sm font-bold ${
                      armv.type.includes('HS') ? 'bg-green-100 text-green-800' : 
                      armv.type === 'Conventional' ? 'bg-blue-100 text-blue-800' : 
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {armv.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RARVs */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-600 text-white py-4 px-6">
              <h3 className="text-xl font-bold">🚛 Road Accident Restoration Vehicles (RARVs)</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {[
                  { div: 'SC', location: 'SC' },
                  { div: 'SC', location: 'BDCR' },
                  { div: 'SC', location: 'HYB KCG' },
                  { div: 'BZA', location: 'BZA' },
                  { div: 'GTL', location: 'GTL' },
                  { div: 'GTL', location: 'GNT' },
                  { div: 'NED', location: 'PAU' }
                ].map((rarv, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <div>
                        <span className="font-medium text-gray-800">{rarv.location}</span>
                        <span className="text-sm text-gray-500 ml-2">({rarv.div})</span>
                      </div>
                    </div>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm font-bold">
                      RARV
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🆘 Emergency Response Network</h3>
          <p className="text-xl mb-4">
            Comprehensive accident relief infrastructure ensuring rapid response across South Central Railway
          </p>
          <p className="text-sm opacity-90">(For Emergency Operations Reference)</p>
        </div>
      </div>
    </div>
  )
}

export default ReliefTrains