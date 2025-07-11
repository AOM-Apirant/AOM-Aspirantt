import React from 'react'
import { whistleCodes } from '@/assets/operating'
import OperatingForms from '@/components/operating/OperatingForms'
import PaperAuthorities from '@/components/operating/PaperAuthorities'
import SpeedRestrictions from '@/components/operating/SpeedRestrictions'
import BellCodes from '@/components/bwm/BellCodes'

const Operating = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Railway Operating Manual
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Essential whistle codes and signals for safe railway operations and effective communication
            </p>
          </div>
        </div>
      </div>

      {/* Whistle Codes Section */}
      <div className="max-w-full mx-auto lg:px-16 px-4 py-12 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.08)_25%,rgba(59,130,246,0.08)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.08)_75%)] bg-[length:20px_20px]"></div>
        
        {/* Content */}
        <div className="relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-300">
            Whistle Codes Reference
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Codes Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whistleCodes.map((code) => (
            <div 
              key={code.id} 
              className="group relative bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Top Badge */}
              <div className="absolute -top-3 -right-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  #{code.id}
                </div>
              </div>

              {/* Code Display */}
              <div className="mb-6">
                <div className="inline-block bg-slate-700 px-4 py-2 rounded-lg">
                  <span className="text-blue-400 font-mono text-lg font-bold">
                    &ldquo;{code.code}&rdquo;
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <div className="text-slate-300 leading-relaxed whitespace-pre-line text-sm">
                  {code.description}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">
              Important Notes
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-300">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Safety First</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Clear Communication</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Standard Protocol</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

                                

      
{/* Speed of Trains in Different Circumstances */}
        <SpeedRestrictions />





      {/* Operating Forms */}
      <OperatingForms />


{/* Paper Authorities */}
      <PaperAuthorities />


{/* Bell Codes */}
<BellCodes />





    </div>
  )
}

export default Operating