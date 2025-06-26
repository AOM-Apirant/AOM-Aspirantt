import React from 'react'
import { abbreviations } from '@/assets/abbreviations'

const Abbreviations = () => {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Military Abbreviations & Acronyms
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive guide to military terminology and abbreviations used in defense operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(abbreviations).map(([letter, items]) => (
            <div key={letter} className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-300 overflow-hidden">
              {/* Letter Header */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="relative p-6 text-center">
                  <h2 className="text-5xl font-black text-white drop-shadow-lg mb-2">
                    {letter}
                  </h2>
                  <div className="w-16 h-1 bg-white/60 rounded-full mx-auto"></div>
                  <p className="text-white/90 text-sm font-medium mt-2">
                    {items.length} {items.length === 1 ? 'Term' : 'Terms'}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div 
                      key={index} 
                      className="group/item border-l-4 border-blue-400 pl-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-r-lg transition-all duration-200 hover:border-l-8 hover:pl-6"
                    >
                      <h3 className="font-bold text-gray-800 text-lg group-hover/item:text-blue-600 transition-colors">
                        {item.acronym}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1 group-hover/item:text-gray-700">
                        {item.fullForm}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Abbreviations