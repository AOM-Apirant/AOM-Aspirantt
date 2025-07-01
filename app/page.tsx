'use client';

import AuthForm from '@/components/AuthForm';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      {/* Show login form only when user is not logged in */}
      {!session ? (
        <>
          {/* Large devices - Two column layout */}
          <div className="hidden lg:flex min-h-screen">
            {/* Left div - Hero section */}
            <div className="w-1/2 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              <div className={`relative z-10 text-center px-8 sm:px-12 max-w-xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Logo with animation */}
                <div className="mb-8 sm:mb-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full shadow-2xl mb-4 sm:mb-6 animate-pulse hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl sm:text-3xl font-bold">AOM</span>
                  </div>
                </div>
                
                {/* Main heading with enhanced typography */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Discover the World of
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    AOM Mastery
                  </span>
                </h1>
                
                {/* Enhanced description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed">
                  Embark on an extraordinary learning journey with our comprehensive AOM preparation platform. Master complex concepts, conquer challenging quizzes, and track your progress with precision.
                </p>
                
                {/* Enhanced feature cards with hover effects */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">Intelligent Quizzes</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">AI-powered adaptive learning with instant feedback</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">Premium Resources</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">Curated study materials and expert notes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">Advanced Analytics</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">Detailed insights into your learning journey</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* New stats section */}
                <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400">500+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Questions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400">50+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Topics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-400">1000+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Students</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right div - Login section */}
            <div className="w-1/2 flex items-center justify-center bg-white">
              <div className={`w-full max-w-md px-8 sm:px-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Enhanced Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl sm:text-2xl font-bold">A</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">AOM Aspirant</h2>
                  <p className="text-sm sm:text-base text-gray-600">Begin your success story today</p>
                </div>
                
                {/* Enhanced Login form */}
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-3xl transition-shadow duration-300">
                  <AuthForm />
                </div>

                {/* New trust indicators */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 mb-2">Trusted by thousands of aspirants</p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small devices - Single column layout */}
          <div className="lg:hidden flex items-center justify-center min-h-screen p-3 sm:p-4">
            <div className={`w-full max-w-sm sm:max-w-md transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl sm:text-3xl font-bold">A</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">AOM Aspirant</h1>
                  <p className="text-sm sm:text-base text-gray-600">Your gateway to AOM excellence</p>
                </div>
                <AuthForm />
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Show home content when user is logged in */
        <div className="flex items-center justify-center min-h-screen">
          <div className={`text-center px-4 sm:px-8 max-w-4xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Welcome Message */}
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full shadow-2xl mb-6 sm:mb-8 animate-pulse hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl sm:text-3xl font-bold">AOM</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Welcome back,
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  {session.user?.name || 'AOM Champion'}
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
                Ready to conquer new challenges and achieve your goals?
              </p>
            </div>

            {/* Enhanced Quick Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Link href="/dashboard" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Smart Dashboard</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Monitor your progress and analytics</p>
                </div>
              </Link>

              <Link href="/quiz" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Challenge Yourself</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Take intelligent quizzes</p>
                </div>
              </Link>

              <Link href="/notes" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Study Materials</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Access premium study resources</p>
                </div>
              </Link>
            </div>

            {/* Enhanced Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Link href="/abbreviations" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Quick Reference</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Essential abbreviations guide</p>
                </div>
              </Link>

              <Link href="/pdfs" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Digital Library</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Download comprehensive materials</p>
                </div>
              </Link>
            </div>

            {/* New motivational section */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-gray-300 text-sm sm:text-base italic">
                &ldquo;Success is not final, failure is not fatal: it is the courage to continue that counts.&rdquo; - Winston Churchill
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}