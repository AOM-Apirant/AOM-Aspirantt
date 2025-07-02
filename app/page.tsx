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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Show login form only when user is not logged in */}
      {!session ? (
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className={`w-full max-w-md transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
              <AuthForm />
            </div>
          </div>
        </div>
      ) : (
        /* Show home content when user is logged in */
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className={`text-center px-4 max-w-4xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Welcome Message */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Welcome back,
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {session.user?.name || 'AOM Champion'}
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8">
                Ready to conquer new challenges and achieve your goals?
              </p>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Link href="/dashboard" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Smart Dashboard</h3>
                  <p className="text-gray-400">Monitor your progress and analytics</p>
                </div>
              </Link>

              <Link href="/quiz" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Challenge Yourself</h3>
                  <p className="text-gray-400">Take intelligent quizzes</p>
                </div>
              </Link>

              <Link href="/notes" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Study Materials</h3>
                  <p className="text-gray-400">Access premium study resources</p>
                </div>
              </Link>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/abbreviations" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <h3 className="text-white font-semibold text-lg mb-2">Quick Reference</h3>
                  <p className="text-gray-400">Essential abbreviations guide</p>
                </div>
              </Link>

              <Link href="/pdfs" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <h3 className="text-white font-semibold text-lg mb-2">Digital Library</h3>
                  <p className="text-gray-400">Download comprehensive materials</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}