import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AOM Aspirant
              </h3>
              <p className="text-gray-400 text-sm">Your Success Partner</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
               AOM Aspirant © {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-end space-x-1">
              <span>Made with</span>
              <span className="text-rose-500 animate-pulse">❤️</span>
              <span>for Aspirants</span>
            </p>
          </div>
        </div>

        
      </div>
    </footer>
  )
}

export default Footer