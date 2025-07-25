'use client'

import React from 'react'
import { bellCodes } from '@/assets/bwm'  

const BellCodes = () => {
  return (
    <div className="max-w-full mx-auto px-6 py-12 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_25%,rgba(16,185,129,0.05)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.05)_75%)] bg-[length:20px_20px]"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-300">
              Bell Codes Reference
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Bell Codes Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bellCodes.map((code) => (
              <div 
                key={code.id} 
                className="group relative bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Top Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {code.id}
                  </div>
                </div>

                {/* Bell Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.5l-2 2v1h16v-1l-2-2V8a6 6 0 00-6-6zM10 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                  </div>
                </div>

                {/* Code Display */}
                <div className="mb-6 text-center">
                  <div className="inline-block bg-slate-700 px-4 py-2 rounded-lg">
                    <span className="text-green-400 font-mono text-lg font-bold">
                      &ldquo;{code.code}&rdquo;
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wide mb-2">
                      Indication
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {code.indication}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                    <div className="text-center">
                      <h4 className="text-green-400 font-semibold text-xs uppercase tracking-wide mb-1">
                        Signalled
                      </h4>
                      <p className="text-slate-300 text-xs">
                        {code.signalled}
                      </p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-green-400 font-semibold text-xs uppercase tracking-wide mb-1">
                        Acknowledged
                      </h4>
                      <p className="text-slate-300 text-xs">
                        {code.acknowledged}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-16 text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-green-300 mb-4">
                Bell Code Guidelines
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-300">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Clear Communication</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Safety Protocol</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Standard Signals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BellCodes