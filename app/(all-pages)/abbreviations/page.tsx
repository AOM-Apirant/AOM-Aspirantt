'use client'
import React, { useState, useMemo } from 'react'
import { abbreviations } from '@/assets/abbreviations'

const Abbreviations = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter abbreviations based on search term
  const filteredAbbreviations = useMemo(() => {
    if (!searchTerm.trim()) {
      return abbreviations
    }

    const filtered: Record<string, { acronym: string; fullForm: string }[]> = {}
    const searchLower = searchTerm.toLowerCase()

    Object.entries(abbreviations).forEach(([letter, items]) => {
      const filteredItems = items.filter(
        item =>
          item.acronym.toLowerCase().includes(searchLower) ||
          item.fullForm.toLowerCase().includes(searchLower)
      )
      
      if (filteredItems.length > 0) {
        filtered[letter] = filteredItems
      }
    })

    return filtered
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="lg:text-5xl text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Indian Railways Complete Abbreviations & Acronyms
          </h1>
          <p className="text-gray-600 lg:text-lg text-sm max-w-2xl mx-auto">
            Comprehensive guide to Indian Railways terminology and abbreviations.
          </p>
        </div>
        
        {/* Sticky Search Bar */}
        <div className="sticky top-20 z-50 mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search abbreviations or full forms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white/95 backdrop-blur-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transition-all duration-200"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Search Results Count */}
            {searchTerm && (
              <div className="mt-2 text-sm text-gray-600 text-center">
                {Object.values(filteredAbbreviations).flat().length} results found
              </div>
            )}
          </div>
        </div>
        
        {/* No Results Message */}
        {searchTerm && Object.keys(filteredAbbreviations).length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              No abbreviations found for &quot;{searchTerm}&quot;
            </div>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(filteredAbbreviations).map(([letter, items]) => (
            <div key={letter} className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-300 overflow-hidden">
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