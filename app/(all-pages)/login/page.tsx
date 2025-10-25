'use client';

import LoginForm from '@/components/LoginForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/quiz');
    }
  }, [status, router]);

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

              {/* Benefits Section */}
              <div className="w-full max-w-md space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                  Continue Learning
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 shadow-sm">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Resume Your Studies</h4>
                      <p className="text-sm text-gray-600">Continue from where you left off</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-sm">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Track Progress</h4>
                      <p className="text-sm text-gray-600">Monitor your learning analytics</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200 shadow-sm">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Practice Tests</h4>
                      <p className="text-sm text-gray-600">Take quizzes and improve scores</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200 shadow-sm">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Latest Updates</h4>
                      <p className="text-sm text-gray-600">Access newest study materials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex items-center justify-center">
              <div className="w-full">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline font-medium">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
