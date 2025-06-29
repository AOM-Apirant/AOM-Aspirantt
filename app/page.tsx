'use client';

import AuthForm from '@/components/AuthForm';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Show login form only when user is not logged in */}
      {!session ? (
        <>
          {/* Large devices - Two column layout */}
          <div className="hidden lg:flex min-h-screen">
            {/* Left div - Hero section */}
            <div className="w-1/2 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              <div className="relative z-10 text-center px-8 sm:px-12 max-w-xl">
                {/* Logo */}
                <div className="mb-8 sm:mb-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-2xl mb-4 sm:mb-6">
                    <span className="text-white text-2xl sm:text-3xl font-bold">AOM</span>
                  </div>
                </div>
                
                {/* Main heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Welcome to
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AOM Aspirant
                  </span>
                </h1>
                
                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed">
                  Your ultimate learning companion for AOM preparation. Master concepts, ace quizzes, and track your progress.
                </p>
                
                {/* Feature cards */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">Smart Quizzes</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">Adaptive learning with instant feedback</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">Study Resources</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">Comprehensive materials and notes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">Progress Analytics</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">Track your learning journey</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle background elements */}
              <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>

            {/* Right div - Login section */}
            <div className="w-1/2 flex items-center justify-center bg-white">
              <div className="w-full max-w-md px-8 sm:px-12">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <span className="text-white text-xl sm:text-2xl font-bold">A</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">AOM Aspirant</h2>
                  <p className="text-sm sm:text-base text-gray-600">Sign in to your account</p>
                </div>
                
                {/* Login form */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 sm:p-8">
                  <AuthForm />
                </div>
              </div>
            </div>
          </div>

          {/* Small devices - Single column layout */}
          <div className="lg:hidden flex items-center justify-center min-h-screen p-3 sm:p-4">
            <div className="w-full max-w-sm sm:max-w-md">
              <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 border border-gray-100">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <span className="text-white text-2xl sm:text-3xl font-bold">A</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">AOM Aspirant</h1>
                  <p className="text-sm sm:text-base text-gray-600">Your learning journey starts here</p>
                </div>
                <AuthForm />
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Show home content when user is logged in */
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center px-4 sm:px-8 max-w-4xl">
            {/* Welcome Message */}
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-2xl mb-6 sm:mb-8">
                <span className="text-white text-2xl sm:text-3xl font-bold">AOM</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Welcome back,
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {session.user?.name || 'AOM Aspirant'}
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
                Ready to continue your learning journey?
              </p>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Link href="/dashboard" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Dashboard</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">View your progress and analytics</p>
                </div>
              </Link>

              <Link href="/quiz" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Take Quiz</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Test your knowledge</p>
                </div>
              </Link>

              <Link href="/notes" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Study Notes</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Access study materials</p>
                </div>
              </Link>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Link href="/abbreviations" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Abbreviations</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Quick reference guide</p>
                </div>
              </Link>

              <Link href="/pdfs" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">PDF Resources</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Download study materials</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}