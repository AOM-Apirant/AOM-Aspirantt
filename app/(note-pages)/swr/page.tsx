import React from 'react'

const SWR = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <span className="text-2xl">🚉</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Station Working Rules
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive guide to station working rules and procedures for railway operations
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Station Working Rules Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🚂 Station Operations</h3>
                <p className="text-gray-700">
                  Essential rules and procedures for safe and efficient station operations including train movements, signaling, and passenger safety.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">📋 Safety Protocols</h3>
                <p className="text-gray-700">
                  Critical safety measures and emergency procedures to ensure the well-being of passengers and staff at railway stations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Topics Covered</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Station layout and infrastructure management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Train arrival and departure procedures
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Passenger handling and crowd management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Emergency response protocols
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Communication systems and coordination
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Content Coming Soon</h3>
                         <p className="text-gray-600 mb-6">
               We&apos;re working hard to bring you comprehensive Station Working Rules content. 
               This section will include detailed explanations, examples, and practice questions.
             </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                <span className="text-sm font-medium text-gray-600">📖 Detailed Notes</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                <span className="text-sm font-medium text-gray-600">🎯 Practice Questions</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                <span className="text-sm font-medium text-gray-600">📋 Quick Reference</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SWR






