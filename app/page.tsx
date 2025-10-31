'use client';

import AuthForm from '@/components/AuthForm';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Show login form only when user is not logged in */}
      {!session ? (
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className={`w-full max-w-6xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Hero Section with Login */}
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
              {/* Decorative Header */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 p-8 text-center relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-4 left-8 w-12 h-12 bg-white rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-8 right-4 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-extrabold mb-3 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-lg">
                    AOM Aspirant
                  </h1>
                  <p className="text-blue-100 text-xl lg:text-2xl font-semibold mb-2">
                    Your Complete Learning Platform
                  </p>
                  <p className="text-blue-50 text-base lg:text-lg font-medium">
                    Indian Railways | Comprehensive Study Materials | Expert Guidance
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="w-32 h-1.5 bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:py-10 py-6 lg:px-8 px-4">
                {/* Left Side - Features & Image */}
                <div className="flex flex-col justify-center space-y-8">
                  

                  {/* Image Container */}
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
                </div>

                {/* Right Side - Login Form */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <AuthForm />
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Show dashboard content when user is logged in */
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className={`text-center px-4 max-w-6xl w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Welcome Message */}
            <div className="mb-12">
              <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
                Welcome back,
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                  {session.user?.name || 'AOM Champion'}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-2 font-medium">
                Ready to conquer new challenges?
              </p>
              <p className="text-lg text-gray-300">
                Continue your journey to excellence
              </p>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Link href="/dashboard" className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Smart Dashboard</h3>
                  <p className="text-gray-300 text-base">Monitor your progress and analytics</p>
                </div>
              </Link>

              <Link href="/quiz" className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Practice Quizzes</h3>
                  <p className="text-gray-300 text-base">Test your knowledge with interactive quizzes</p>
                </div>
              </Link>

              <Link href="/notes" className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Study Materials</h3>
                  <p className="text-gray-300 text-base">Access comprehensive study resources</p>
                </div>
              </Link>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/abbreviations" className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-white font-bold text-lg">Quick Reference</h3>
                  </div>
                  <p className="text-gray-300">Essential abbreviations and definitions guide</p>
                </div>
              </Link>

              <Link href="/pdfs" className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-white font-bold text-lg">Digital Library</h3>
                  </div>
                  <p className="text-gray-300">Download comprehensive PDF materials</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}