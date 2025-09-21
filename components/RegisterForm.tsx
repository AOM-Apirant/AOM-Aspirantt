'use client';

import { signIn } from 'next-auth/react';

export default function RegisterForm() {

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/quiz' });
  };

  return (
    <div className="w-full">
      {/* Beautiful Header */}
      <div className="text-center mb-8">
        
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 via-blue-600 to-green-800 bg-clip-text text-transparent mb-3 tracking-tight">
          AOM Aspirant
        </h1>
        <p className="text-gray-700 text-xl font-medium italic">
          Your gateway to become AOM
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 via-blue-500 to-green-600 rounded-full shadow-sm"></div>
        </div>
      </div>
      
      
      {/* Beautiful Google Sign-up Button */}
      <div className="mb-8">
        <div className="snake-border">
          <button
            onClick={handleGoogleSignIn}
            className="group relative w-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white py-5 px-6 rounded-full font-semibold hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-4 touch-button focus-ring overflow-hidden backdrop-blur-sm"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-500 rounded-full"></div>
          
          {/* Google Logo with animation */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
          </div>
          
          {/* Button Text */}
          <span className="relative z-10 text-lg font-bold text-white group-hover:text-white transition-all duration-300">
            Sign up with Google
          </span>
          
          {/* Arrow icon with animation */}
          <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          </button>
        </div>
        
        {/* Subtitle */}
        <p className="text-center text-sm text-gray-500 mt-4 font-medium">
            Create your account instantly with Google
        </p>
      </div>

    </div>
  );
} 