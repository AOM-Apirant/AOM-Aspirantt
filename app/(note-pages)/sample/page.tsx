import React from 'react'

const Sample = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-purple-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⚡️</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 tracking-tight">SIEMEN’S PANEL</h1>
          </div>
          <hr className="mb-6 border-purple-200" />
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-purple-700">(a)</span> The station diagram is depicted on the panel board.<br />
            <span className="font-semibold text-purple-700">(b)</span> Push buttons of the different colour codes are provided near the points, signals, etc., for their operations. Buttons for other purposes such as cancellation are also provided.
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><span className="text-2xl">🛠️</span>Normal Setup:</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-red-500 group-hover:scale-125 transition" />
                <span><strong>Signal buttons:</strong> <span className="text-red-600 font-semibold">Red GN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-gray-500 group-hover:scale-125 transition" />
                <span><strong>Route buttons:</strong> <span className="text-gray-700 font-semibold">Grey UN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition" />
                <span><strong>Point buttons:</strong> <span className="text-blue-700 font-semibold">Blue WN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-yellow-400 group-hover:scale-125 transition" />
                <span><strong>Shunt signal buttons:</strong> <span className="text-yellow-600 font-semibold">Yellow GN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-blue-400 group-hover:scale-125 transition" />
                <span><strong>Common/group point button:</strong> <span className="text-blue-600 font-semibold">Blue WWN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-red-700 group-hover:scale-125 transition" />
                <span><strong>Emergency signal/button:</strong> <span className="text-red-700 font-semibold">Red EGGN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-blue-800 group-hover:scale-125 transition" />
                <span><strong>Emergency point release button (sealed):</strong> <span className="text-blue-800 font-semibold">Blue EWN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-blue-300 border-2 border-blue-800 group-hover:scale-125 transition" />
                <span><strong>Emergency sub route release button (sealed and provided with counter):</strong> <span className="text-blue-800 font-semibold">Blue with dot EUYN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-gray-400 border-2 border-gray-700 group-hover:scale-125 transition" />
                <span><strong>Emergency full route release button (provided with counter):</strong> <span className="text-gray-700 font-semibold">Grey EUUYN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-gray-400 group-hover:scale-125 transition" />
                <span><strong>Point failure alarm, suppression button:</strong> <span className="text-gray-700 font-semibold">Grey WXYN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-gray-400 group-hover:scale-125 transition" />
                <span><strong>Signal failure alarm, suppression button:</strong> <span className="text-gray-700 font-semibold">Grey GXYN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-gray-400 group-hover:scale-125 transition" />
                <span><strong>Power failure alarm button:</strong> <span className="text-gray-700 font-semibold">Grey NXYN</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sample