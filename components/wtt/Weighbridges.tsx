import React from 'react'

const Weighbridges = () => {
  const weighbridges = [
    { id: 1, name: "Rajahmundry", type: "Electronic", commissionDate: "14.06.06" },
    { id: 2, name: "Bitragunta", type: "Electronic", commissionDate: "05.05.06" },
    { id: 3, name: "Sarpavaram", type: "Electronic", commissionDate: "08.11.20" },
    { id: 4, name: "Samalkot", type: "Electronic", commissionDate: "24.10.14" },
    { id: 5, name: "Annavaram", type: "Electronic", commissionDate: "06.09.18" },
    { id: 6, name: "Gudivada", type: "Electronic", commissionDate: "18.07.22" },
    { id: 7, name: "Guntakal west", type: "Electronic", commissionDate: "12.04.97" },
    { id: 8, name: "Garladinne", type: "Electronic", commissionDate: "15.02.21" },
    { id: 9, name: "Malkapuram", type: "Electronic", commissionDate: "28.02.09" },
    { id: 10, name: "Koduru", type: "Electronic", commissionDate: "11.01.10" },
    { id: 11, name: "Nallapadu", type: "Electronic", commissionDate: "10.01.06" },
    { id: 12, name: "Nandyal", type: "Electronic", commissionDate: "30.06.20" },
    { id: 13, name: "Nadikudi", type: "Electronic", commissionDate: "24.03.23" },
    { id: 14, name: "Tondalagopavaram", type: "Electronic", commissionDate: "27.07.11" },
    { id: 15, name: "Manikgarh", type: "Electronic", commissionDate: "31.03.08" },
    { id: 16, name: "Kazipet", type: "Electronic", commissionDate: "30.10.06" },
    { id: 17, name: "Sulahelli", type: "Electronic", commissionDate: "24.01.20" },
    { id: 18, name: "Sultanabad", type: "Electronic", commissionDate: "09.06.15" },
    { id: 19, name: "Charlapalli", type: "Electronic", commissionDate: "10.02.15" },
    { id: 20, name: "Shankarpalli", type: "Electronic", commissionDate: "10.06.15" },
    { id: 21, name: "Hasanparthi Road", type: "Electronic", commissionDate: "11.06.15" },
    { id: 22, name: "Metpalli", type: "Electronic", commissionDate: "08.11.22" },
    { id: 23, name: "Sadashivapet Road", type: "Electronic", commissionDate: "13.03.23" },
    { id: 24, name: "Shivani Shivapur", type: "Electronic", commissionDate: "06.09.19" },
    { id: 25, name: "Maltekdi", type: "Electronic", commissionDate: "08.11.21" },
    { id: 26, name: "Aurangabad", type: "Electronic", commissionDate: "28.08.12" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🚂 Railway Weighbridges
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            South Central Railway - Electronic Weighbridge Network
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Weighbridges</p>
                <p className="text-2xl font-bold text-gray-900">{weighbridges.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Type</p>
                <p className="text-2xl font-bold text-gray-900">Electronic</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-full">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Latest Commission</p>
                <p className="text-2xl font-bold text-gray-900">2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weighbridges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {weighbridges.map((weighbridge) => (
            <div
              key={weighbridge.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {weighbridge.id}
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {weighbridge.type}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {weighbridge.name}
                </h3>
                
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Commissioned: {weighbridge.commissionDate}</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Weighbridge ID</span>
                  <span className="text-xs font-medium text-gray-700">#{weighbridge.id.toString().padStart(3, '0')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              📦 Parcel Van Weighment Services
            </h3>
            <p className="text-gray-600">
              All weighbridges are equipped with electronic systems for accurate parcel van weight measurement across South Central Railway network.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weighbridges