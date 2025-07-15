import React from 'react'

const StoppageCost = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-orange-600 text-white py-4 px-6 rounded-lg shadow-lg mb-6">
            <h1 className="text-3xl font-bold mb-2">🚫 Stoppage Cost Analysis</h1>
            <p className="text-xl font-semibold">Railway Operations & Efficiency Impact</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-orange-700 mb-4">&ldquo;Unnecessary Stoppages - Revenue Loss&rdquo;</h2>
            <p className="text-lg text-gray-700 mb-4">
              Stoppages result in <span className="font-bold text-orange-600">significant revenue loss</span> and
              <span className="font-bold text-orange-600"> operational inefficiency!</span>
            </p>
            
            <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
              <h3 className="text-xl font-bold text-red-800 mb-2">Critical Impact:</h3>
              <p className="text-lg text-red-700">
                Every minute of unnecessary stoppage costs money and affects<br/>
                passenger satisfaction and freight delivery timelines.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Analysis Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Passenger Trains */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white py-4 px-6">
              <h3 className="text-xl font-bold">🚂 PASSENGER TRAINS</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3 text-lg">Express Trains</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="font-medium">Rajdhani Express</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">₹2,500/min</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="font-medium">Shatabdi Express</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">₹2,200/min</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Duronto Express</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">₹2,000/min</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3 text-lg">Mail Trains</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-green-100">
                      <span className="font-medium">Superfast Mail</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹1,800/min</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Ordinary Mail</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">₹1,500/min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Freight Trains */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-600 text-white py-4 px-6">
              <h3 className="text-xl font-bold">🚛 FREIGHT TRAINS</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3 text-lg">Container Trains</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-purple-100">
                      <span className="font-medium">Double Stack</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold">₹3,200/min</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Single Stack</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold">₹2,800/min</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-3 text-lg">Bulk Freight</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-orange-100">
                      <span className="font-medium">Coal Trains</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded font-bold">₹2,500/min</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-orange-100">
                      <span className="font-medium">Iron Ore</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded font-bold">₹2,300/min</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">General Goods</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded font-bold">₹2,000/min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Analysis */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Revenue Loss</h3>
              <p className="text-gray-600">Direct financial impact on railway revenue due to stoppages</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-700 mb-2">Time Loss</h3>
              <p className="text-gray-600">Cumulative delay affecting multiple train services</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Customer Impact</h3>
              <p className="text-gray-600">Reduced passenger satisfaction and freight reliability</p>
            </div>
          </div>
        </div>

        {/* Prevention Strategies */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">🛡️ Prevention Strategies</h3>
            <p className="text-gray-600">Effective measures to minimize unnecessary stoppages</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Proactive Maintenance</h4>
                  <p className="text-gray-600 text-sm">Regular inspection and maintenance of rolling stock</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Signal Optimization</h4>
                  <p className="text-gray-600 text-sm">Efficient signal management and route planning</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Staff Training</h4>
                  <p className="text-gray-600 text-sm">Enhanced training for operational staff</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">4</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Technology Integration</h4>
                  <p className="text-gray-600 text-sm">Advanced monitoring and control systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">5</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Emergency Response</h4>
                  <p className="text-gray-600 text-sm">Quick response teams for rapid issue resolution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">6</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Performance Monitoring</h4>
                  <p className="text-gray-600 text-sm">Real-time tracking and performance analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">⚡ Minimize Stoppages, Maximize Efficiency</h3>
          <p className="text-xl mb-4">
            Every minute saved is revenue earned and customer satisfaction improved
          </p>
          <p className="text-sm opacity-90">(For Official Railway Operations Reference)</p>
        </div>
      </div>
    </div>
  )
}

export default StoppageCost