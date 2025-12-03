'use client';

import LoginForm from '@/components/LoginForm';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';

function LoginPageContent() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/quiz';
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl);
    }
  }, [status, router, callbackUrl]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-8 lg:px-8 px-3">
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Beautiful Frame */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/40 overflow-hidden">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 p-8 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full animate-pulse delay-100"></div>
              <div className="absolute bottom-4 left-8 w-12 h-12 bg-white rounded-full animate-pulse delay-200"></div>
              <div className="absolute bottom-8 right-4 w-24 h-24 bg-white rounded-full animate-pulse delay-300"></div>
            </div>
            
            <div className="relative z-10">
              <h1 className="lg:text-5xl text-3xl font-bold text-white mb-3 text-center">
                Welcome Back!
              </h1>
              <p className="text-blue-100 lg:text-xl text-base font-medium">
                Sign in to continue your learning journey
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-32 h-1 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:py-8 py-4 lg:px-4 px-3">
            {/* Left Side - Image & Info */}
            <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
              {/* Image Container */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl lg:p-8 p-4 shadow-2xl border-2 border-white">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30 animate-pulse delay-200"></div>
                  
                  {/* Main Image */}
                  <div className="relative z-10">
                    <Image 
                      src="/master.jpg" 
                      alt="AOM Aspirant" 
                      width={400}
                      height={500}
                      className="w-full max-w-md h-auto rounded-2xl shadow-xl border-4 border-white"
                      priority
                    />
                    
                    {/* Image overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">AOM Aspirant</h3>
                      <p className="text-sm text-gray-600">Your Learning Partner</p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Right Side - Login Form */}
            <div className="flex items-center justify-center">
              <div className="w-full">
                <Suspense fallback={
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                }>
                  <LoginForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    }>
      <LoginPageContent />
    </Suspense>
  );
}
