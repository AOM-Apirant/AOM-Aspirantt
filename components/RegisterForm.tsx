'use client';

import { signIn } from 'next-auth/react';

export default function RegisterForm() {

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/quiz' });
  };

  return (
    <div className="w-full">
      {/* Beautiful Header */}
      <div className="text-center mb-10">
        <div className="mb-6">
          {/* Decorative icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-green-800 bg-clip-text text-transparent mb-3">
          AOM Aspirant
        </h1>
        <p className="text-gray-600 text-lg font-medium">
          Your gateway to become AOM
        </p>
        
        {/* Decorative line */}
        <div className="mt-6 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-600 rounded-full"></div>
        </div>
      </div>
      
      {/* Google Sign-up Button */}
      <div className="mb-8">
        <button
          onClick={handleGoogleSignIn}
          className="group w-full bg-white border-2 border-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:border-green-300 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 flex items-center justify-center gap-4 transform hover:scale-[1.02]"
        >
          {/* Google Logo with animation */}
          <div className="relative">
            <div className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
          </div>
          
          {/* Button Text */}
          <span className="text-lg">Sign up with Google</span>
          
          {/* Arrow icon */}
          <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </button>
        
        {/* Subtitle */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Create your account instantly with Google and start learning
        </p>
      </div>

      {/* Features */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span>Free Registration</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span>Instant Access to Materials</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span>Personalized Learning Path</span>
        </div>
      </div>
    </div>
  );
} 