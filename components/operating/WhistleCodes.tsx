"use client"
import React, { useState, useEffect } from 'react'
import { whistleCodes } from '@/assets/operating'

const WhistleCodes = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    // Generate particles only on client-side
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 4}s`
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-full mx-auto lg:px-16 px-4 py-12 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.08)_25%,rgba(59,130,246,0.08)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.08)_75%)] bg-[length:20px_20px]"></div>
        
        {/* Floating Particles Effect - Only render on client */}
        {particles.length > 0 && (
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.animationDelay,
                  animationDuration: particle.animationDuration
                }}
              />
            ))}
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-16">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Whistle Codes Reference
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Essential whistle codes for railway operations and safety communication
              </p>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced Codes Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whistleCodes.map((code, index) => (
              <div 
                key={code.id} 
                className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/80 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Top Badge with Enhanced Design */}
                <div className="absolute -top-4 -right-4 z-10">
                  <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white w-12 h-12 rounded-full text-sm font-bold shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                    {code.id}
                  </div>
                </div>

                {/* Enhanced Code Display */}
                <div className="mb-8">
                  <div className="inline-block bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4 rounded-lg border border-slate-600/50 shadow-inner">
                    <span className="text-blue-400 font-mono text-xl font-bold tracking-wider">
                      &ldquo;{code.code}&rdquo;
                    </span>
                  </div>
                </div>

                {/* Enhanced Description */}
                <div className="space-y-4">
                  <div className="text-slate-300 leading-relaxed whitespace-pre-line text-sm group-hover:text-slate-200 transition-colors duration-300">
                    {code.description}
                  </div>
                </div>

                {/* Interactive Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Bottom Info Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
                Important Whistle Code Guidelines
              </h3>
              <div className="space-y-6 text-left max-w-4xl mx-auto">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    SR 4.50.2 - Signal Illustration
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    The signals above are illustrated by <span className="font-mono text-blue-400">&apos;0&apos;</span> for a short whistle and <span className="font-mono text-blue-400">&apos;––&apos;</span> for a long whistle.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    SR 4.50.3 - Whistle Boards
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    Whistle Boards are provided at a distance of <span className="font-semibold text-yellow-400">600 metres</span> on the approaches to such manned level crossing gates outside station limits where a clear view of the line from the level crossing gate is not available. Loco Pilots of trains, on noticing whistle boards shall sound their engine whistle intermittently long from the time they approach a whistle board till they pass the relevant Level Crossing.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    SR 4.50.4 - Emergency Procedures
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    In the event of failure of whistle/horn of engine while working a train, the Loco Pilot should work the train cautiously to clear the block section and ask for repair or relief.
                  </p>
                </div>
              </div>
              
              {/* Additional Safety Note */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20">
                <div className="flex items-center justify-center gap-3 text-blue-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Always follow safety protocols and maintain clear communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default WhistleCodes