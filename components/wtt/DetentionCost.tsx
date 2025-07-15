import React from 'react'

const DetentionCost = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-red-600 text-white py-4 px-6 rounded-lg shadow-lg mb-6">
            <h1 className="text-3xl font-bold mb-2">⚠️ Attention !!!</h1>
            <p className="text-xl font-semibold">Traffic, C & W and Loco Officials</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-red-700 mb-4">&ldquo;Avoidable Detention to Rolling Stock&rdquo;</h2>
            <p className="text-lg text-gray-700 mb-4">
              Detentions result in <span className="font-bold text-red-600">Loss of Earnings</span> besides
              <span className="font-bold text-red-600"> higher Maintenance Costs!</span>
            </p>
            
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Do You Know?</h3>
              <p className="text-lg text-yellow-700">
                How much would Detention for one Hour Costs? Or<br/>
                How much Money can you save by preventing Detention for one Hour?
              </p>
            </div>
          </div>
        </div>

        {/* Cost Details Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Locomotives */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white py-4 px-6">
              <h3 className="text-xl font-bold">I. LOCOMOTIVES</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Diesel</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">WDM-2</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">₹16,754</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">WDG-3A</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">₹16,760</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">WDG-4</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">₹17,015</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">WDM-3D</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">₹16,801</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Electrical</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">WAP-7</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹23,174</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">WAM-4</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹21,333</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">WAG-9</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹21,125</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coaches */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white py-4 px-6">
              <h3 className="text-xl font-bold">II. COACHES</h3>
            </div>
            <div className="p-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">AC 1st</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹1,687</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">AC 2Tier</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹2,020</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">AC 3Tier</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹1,913</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">AC Chair Car</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹2,044</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Sleeper</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹1,297</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">General</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹1,242</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">II Chair</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹1,303</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">II+Lug+Brake</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹1,480</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Pantry</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹1,173</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wagons */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-600 text-white py-4 px-6">
              <h3 className="text-xl font-bold">III. WAGONS</h3>
            </div>
            <div className="p-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">BCN</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold">₹1,273</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">BOXN</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold">₹1,309</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Bogie BCNHL</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold">₹1,533</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Bogie BTPN</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold">₹1,145</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🚂 Minimise &ldquo;Detentions&rdquo; Keep Rolling Stock &ldquo;Moving&rdquo;</h3>
          <p className="text-xl mb-4">
            Enhance Revenue, Reduce Expenses, Improve Productivity
          </p>
          <p className="text-sm opacity-90">(For Official Communication only)</p>
        </div>
      </div>
    </div>
  )
}

export default DetentionCost