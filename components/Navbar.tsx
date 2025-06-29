'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Loader from './Loader';

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut({ redirect: false });
    router.push('/');
    setIsMenuOpen(false);
    setIsLoading(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (href: string) => {
    setIsLoading(true);
    router.push(href);
    setIsMenuOpen(false);
    // Reset loading after a short delay to show the spinner
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <>
      {isLoading && <Loader />}
      <nav className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white shadow-lg border-b border-blue-500/20 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-opacity-95' : 'bg-opacity-100'
      }`}>
        <div className="container mx-auto mobile-container py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group" onClick={scrollToTop}>
              <span className="text-base sm:text-lg lg:text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text group-hover:border-white/60 transition-all duration-300">
                AOM
              </span>
              <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Aspirant
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavigation('/abbreviations')}
                className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
              >
                Abbreviations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavigation('/notes')}
                className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
              >
                Notes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavigation('/pdfs')}
                className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
              >
                PDFs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
              {session && (
                <>
                <button 
                  onClick={() => handleNavigation('/dashboard')}
                  className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
                >
                  Dashboard
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </button>
                <button 
                  onClick={() => handleNavigation('/quiz')}
                  className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
                >
                  Quizzes
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </button>
                </>
              )}
          
              <button 
                onClick={() => handleNavigation('/contact')}
                className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
            </div>

            {/* Desktop Auth Button */}
            <div className="hidden md:block">
              {session ? (
                <button
                  onClick={handleSignOut}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-sm hover:shadow-md transform hover:scale-105 touch-button text-sm lg:text-base"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/"
                  className="bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-sm hover:shadow-md transform hover:scale-105 touch-button text-sm lg:text-base"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 touch-button"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 transition-all duration-300 ease-in-out">
              <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-2xl max-h-[80vh] overflow-y-auto scrollbar-hide">
                {/* Navigation Links Section */}
                <div className="space-y-3 flex-1">
                  <button 
                    onClick={() => handleNavigation('/')}
                    className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105 touch-button group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <span>Home</span>
                  </button>
                  
                  <button 
                    onClick={() => handleNavigation('/about')}
                    className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105 touch-button group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>About</span>
                  </button>
                  
                  <button 
                    onClick={() => handleNavigation('/abbreviations')}
                    className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105 touch-button group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                    </div>
                    <span>Abbreviations</span>
                  </button>
                  
                  <button 
                    onClick={() => handleNavigation('/notes')}
                    className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105 touch-button group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span>Notes</span>
                  </button>
                  
                  <button 
                    onClick={() => handleNavigation('/pdfs')}
                    className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105 touch-button group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>PDFs</span>
                  </button>

                  {session && (
                    <>
                    <button 
                      onClick={() => handleNavigation('/dashboard')}
                      className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105 touch-button group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <span>Dashboard</span>
                    </button>
                    
                    <button 
                      onClick={() => handleNavigation('/quiz')}
                      className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10 hover:scale-105 touch-button group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span>Quizzes</span>
                    </button>
                    </>
                  )}
                  
                  <button 
                    onClick={() => handleNavigation('/contact')}
                    className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105 touch-button group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>Contact</span>
                  </button>
                </div>

                {/* Logout Button - Bottom position */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <button
                    onClick={() => {
                      console.log('Logout clicked, session:', session);
                      if (session) {
                        handleSignOut();
                        setIsMenuOpen(false);
                      } else {
                        console.log('No session found');
                      }
                    }}
                    className="w-full flex items-center space-x-3 text-white font-medium py-3 px-4 rounded-xl bg-red-500/20 hover:bg-red-500/30 transition-all duration-300 border border-red-400/30 hover:border-red-400/50 touch-button"
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </div>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}