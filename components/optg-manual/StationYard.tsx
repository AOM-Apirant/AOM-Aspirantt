import React from 'react'

const StationYard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Station Yard</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Introduction Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
        <p className="text-gray-700 leading-relaxed">
          Station is a nodal point in dealing trains. As per GR 1.02 (51), &ldquo;station means
          any place on a line of railway at which traffic is dealt with, or at which an authority to
          proceed is given under the system of working.&rdquo; A station comprises of a station yard
          on which trains are dealt by station staff through signals operated from panel room,
          cabins etc. Station is also the place where passengers board / alight; wagons are
          loaded / unloaded. Hence, the station is also provided with passenger and other
          user amenities like platform, waiting halls, circulating area and goods sheds.
        </p>
      </div>

      {/* Station Yard Definition */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
          Station Yard
        </h2>
        <p className="text-gray-700 mb-4">
          A station yard is basically a grid of lines where trains are dealt. The grid is made of
          tracks which are connected to each other through points and crossings.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Types of Lines Found in a Station Yard:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Running lines",
            "Non-running lines", 
            "Staging lines",
            "Sidings",
            "Pit Lines",
            "Sick lines",
            "Shunting Neck"
          ].map((line, index) => (
            <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                {index + 1}
              </span>
              <span className="text-gray-700 font-medium">{line}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Station Yard Features */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
          Station Yard Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Station Gradient",
            "Isolation", 
            "Adequate distance",
            "Interlocking",
            "Standards of Interlocking"
          ].map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-700 font-semibold">{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Station Equipment */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
          Station Equipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Panel",
            "Visual Display Unit (VDU)",
            "Block Instrument", 
            "Station isolators",
            "Data logger"
          ].map((equipment, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-700 font-semibold">{equipment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Station Building */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
          Station Building
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Platforms",
            "Enquiry/Booking Office",
            "Reservation Office",
            "Parcel Office", 
            "Goods shed",
            "Waiting Hall",
            "Retiring rooms/Dormitory",
            "Cloak Rooms",
            "Sign Boards/Displays",
            "Public Utilities",
            "Food stalls",
            "Utility stalls"
          ].map((building, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-700 font-semibold">{building}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StationYard