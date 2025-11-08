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
  const [isNotesDropdownOpen, setIsNotesDropdownOpen] = useState(false);
  const [isMobileNotesOpen, setIsMobileNotesOpen] = useState(false);
  const [isPdfsDropdownOpen, setIsPdfsDropdownOpen] = useState(false);
  const [isMobilePdfsOpen, setIsMobilePdfsOpen] = useState(false);
  const [isQuizzesDropdownOpen, setIsQuizzesDropdownOpen] = useState(false);
  const [isMobileQuizzesOpen, setIsMobileQuizzesOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (session?.user?.email) {
        try {
          const response = await fetch('/api/users');
          if (response.ok) {
            const data = await response.json();
            setIsAdmin(data.isAdmin || false);
          }
        } catch (error) {
          console.error('Error checking admin status:', error);
        }
      }
    };

    checkAdminStatus();
  }, [session]);

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
    setIsNotesDropdownOpen(false);
    setIsMobileNotesOpen(false);
    setIsPdfsDropdownOpen(false);
    setIsMobilePdfsOpen(false);
    setIsQuizzesDropdownOpen(false);
    setIsMobileQuizzesOpen(false);
    // Reset loading after a short delay to show the spinner
    setTimeout(() => setIsLoading(false), 500);
  };

  const notesPages = [
    { name: 'Accident Manual', href: '/accident', icon: '🚨' },
    { name: 'Accounts', href: '/accounts', icon: '💰' },
    { name: 'Appendix', href: '/appendix', icon: '📄' },
    { name: 'Block Working Manual', href: '/bwm', icon: '📋' },
    { name: 'Commercial', href: '/commercial', icon: '🏢' },
    { name: 'Disaster Management Act - 2005', href: '/disaster-act', icon: '🚨' },
    { name: 'Establishment Rules', href: '/establishment', icon: '🏛️' },
    { name: 'Factories Act - 1948', href: '/factories-act', icon: '🏭' },
    { name: 'G&SR', href: '/g&sr', icon: '📜' },
    { name: 'Indian Railway Act - 1989', href: '/ir-act', icon: '🚂' },
    { name: 'Industrial Disputes Act - 1947', href: '/disputes-act', icon: '⚖️' },
    { name: 'Industrial Relations Code - 2020', href: '/industrial-code', icon: '🏭' },
    { name: 'IT Applications', href: '/it-apps', icon: '💻' },
    { name: 'Operating', href: '/operating', icon: '⚙️' },
    { name: 'Operating Manual', href: '/optg-manual', icon: '📖' },
    { name: 'Rajabhasha', href: '/rajabhasha', icon: '🌐' },
    { name: 'Right To Information Act - 2005', href: '/rti-act-2005', icon: '📋' },
    { name: 'Railway Services Conduct Rules - 1966', href: '/conduct-rules', icon: '⚖️' },
    { name: 'Railway Servants DA Rules - 1968', href: '/da-rules', icon: '💰' },
    { name: 'Railway Compensation Act - 2010', href: '/ec-act', icon: '🏛️' },
    { name: 'Workmen Compensation Act - 1923', href: '/workmen-act', icon: '💰' },
    { name: 'Railway Servants Pass Rules - 1986', href: '/pass-rules', icon: '🎫' },
    { name: 'Railway Servants Rest Rules - 2005', href: '/rest-rules', icon: '🛏️' },
    { name: 'Station Working Rules', href: '/swr', icon: '🚉' },
    { name: 'Trade Union Act - 1926', href: '/trade-union', icon: '🏛️' },
    { name: 'Working Time Table', href: '/wtt', icon: '⏰' },
  ];

  const pdfsPages = [
    { name: 'AM Amendments', href: '/accident-amendment', icon: '🚨' },
    { name: 'Authorities', href: '/authorities', icon: '🏛️' },
    { name: 'BWM Amendments', href: '/bwm-amendment', icon: '📋' },
    { name: 'Circulars', href: '/circulars', icon: '📢' },
    { name: 'G&SR Amendments', href: '/gsr-amendments', icon: '📜' },
    { name: 'JPOs', href: '/jpo', icon: '📄' },
  ];

  const quizzesPages = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Quizzes', href: '/quiz', icon: '📝' },
    { name: 'Previous Papers', href: '/previous', icon: '📚' },
  ];

  return (
    <>
      {isLoading && <Loader />}
      <nav className={`fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white shadow-lg border-b border-blue-500/20 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-opacity-95' : 'bg-opacity-100'
      }`}>
        <div className="container mx-auto mobile-container h-full py-3">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1 group" onClick={scrollToTop}>
              <span className="text-base sm:text-xl lg:text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text group-hover:border-white/60 transition-all duration-300 animate-pulse">
                AOM
              </span>
              <span className="text-base sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
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
                onClick={() => handleNavigation('/syllabus')}
                className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
              >
                Syllabus
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
                onClick={() => handleNavigation('/definitions')}
                className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
              >
                Definitions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
              
              {/* Notes/Topics Dropdown */}
              <div className="relative group">
                <button 
                  onMouseEnter={() => setIsNotesDropdownOpen(true)}
                  onMouseLeave={() => setIsNotesDropdownOpen(false)}
                  className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base flex items-center space-x-1"
                >
                  Topics
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </button>
                
                {/* Enhanced Dropdown Menu */}
                {isNotesDropdownOpen && (
                  <div 
                    onMouseEnter={() => setIsNotesDropdownOpen(true)}
                    onMouseLeave={() => setIsNotesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-white/95 via-blue-50/95 to-purple-50/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/30 py-3 z-50 transform transition-all duration-300 ease-out animate-fadeIn"
                  >
                    
                    <div className="py-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                      {notesPages.map((page) => (
                        <button
                          key={page.href}
                          onClick={() => handleNavigation(page.href)}
                          className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 text-sm group"
                        >
                          <span className="text-medium group-hover:scale-110 transition-transform duration-200">
                            {page.icon}
                          </span>
                          <span className="font-medium">{page.name}</span>
                          {/* Right arrow removed as per instruction */}
                        </button>
                      ))}
                    </div>
                    
                  </div>
                )}
              </div>
              
              {/* PDFs Dropdown */}
              <div className="relative group">
                <button 
                  onMouseEnter={() => setIsPdfsDropdownOpen(true)}
                  onMouseLeave={() => setIsPdfsDropdownOpen(false)}
                  className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base flex items-center space-x-1"
                >
                  PDFs
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </button>
                
                {/* PDFs Dropdown Menu */}
                {isPdfsDropdownOpen && (
                  <div 
                    onMouseEnter={() => setIsPdfsDropdownOpen(true)}
                    onMouseLeave={() => setIsPdfsDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-br from-white/95 via-red-50/95 to-orange-50/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/30 py-3 z-50 transform transition-all duration-300 ease-out animate-fadeIn"
                  >
                    
                    <div className="py-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                      {pdfsPages.map((page) => (
                        <button
                          key={page.href}
                          onClick={() => handleNavigation(page.href)}
                          className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 hover:text-red-600 transition-all duration-200 text-sm group"
                        >
                          <span className="text-medium group-hover:scale-110 transition-transform duration-200">
                            {page.icon}
                          </span>
                          <span className="font-medium">{page.name}</span>
                          {/* Right arrow removed as per instruction */}
                        </button>
                      ))}
                    </div>
                    
                  </div>
                )}
              </div>
              
              {/* Quizzes Dropdown */}
              <div className="relative group">
                <button 
                  onMouseEnter={() => setIsQuizzesDropdownOpen(true)}
                  onMouseLeave={() => setIsQuizzesDropdownOpen(false)}
                  className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base flex items-center space-x-1"
                >
                  Quizzes
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </button>
                
                {/* Quizzes Dropdown Menu */}
                {isQuizzesDropdownOpen && (
                  <div 
                    onMouseEnter={() => setIsQuizzesDropdownOpen(true)}
                    onMouseLeave={() => setIsQuizzesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-br from-white/95 via-green-50/95 to-teal-50/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/30 py-3 z-50 transform transition-all duration-300 ease-out animate-fadeIn"
                  >
                    
                    <div className="py-2">
                      {quizzesPages.map((page) => (
                        <button
                          key={page.href}
                          onClick={() => handleNavigation(page.href)}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 hover:text-green-600 transition-all duration-200 text-sm group"
                        >
                          <span className="text-medium group-hover:scale-110 transition-transform duration-200">
                            {page.icon}
                          </span>
                          <span className="font-medium">{page.name}</span>
                          {/* Right arrow removed as per instruction */}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
          
              <button 
                onClick={() => handleNavigation('/contact')}
                className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group text-sm lg:text-base"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
            </div>

            {/* Desktop Auth Button */}
            <div className="hidden md:flex items-center gap-3">
              {isAdmin && (
                <button 
                  onClick={() => handleNavigation('/admin')}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 lg:px-5 py-1.5 rounded-md font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-sm lg:text-base flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Admin
                </button>
              )}
              {session ? (
                <button
                  onClick={handleSignOut}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-1.5 rounded-md font-medium hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-sm hover:shadow-md transform hover:scale-105 text-sm lg:text-base"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => handleNavigation('/login')}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-1.5 rounded-md font-medium hover:bg-white/20 transition-colors duration-200 border border-white/20 hover:border-white/40 text-sm lg:text-base"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden"
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
            <div className="md:hidden mt-4 pb-4 transition-all duration-500 ease-in-out animate-bounce-in">
              <div className="flex flex-col bg-gradient-to-br from-slate-800/95 via-purple-900/90 to-blue-900/95 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-2xl max-h-[80vh] overflow-y-auto scrollbar-hide relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
                {/* Navigation Links Section */}
                <div className="space-y-4 flex-1 relative z-10">
                  <button 
                    onClick={() => handleNavigation('/')}
                    className="w-full flex items-center space-x-4 text-white font-semibold transition-all duration-300 py-4 px-5 rounded-lg hover:bg-white/20 hover:scale-[1.02] touch-button group bg-gradient-to-r from-white/10 to-white/15 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                  >
                    <div className="w-9 h-9 bg-gradient-to-r from-blue-400 to-blue-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <span className="text-base">Home</span>
                  </button>
                  
                  <button 
                    onClick={() => handleNavigation('/about')}
                    className="w-full flex items-center space-x-4 text-white font-semibold transition-all duration-300 py-4 px-5 rounded-lg hover:bg-white/20 hover:scale-[1.02] touch-button group bg-gradient-to-r from-white/10 to-white/15 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                  >
                    <div className="w-9 h-9 bg-gradient-to-r from-green-400 to-green-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-base">About</span>
                  </button>
                  
                  <button 
                    onClick={() => handleNavigation('/syllabus')}
                    className="w-full flex items-center space-x-4 text-white font-semibold transition-all duration-300 py-4 px-5 rounded-lg hover:bg-white/20 hover:scale-[1.02] touch-button group bg-gradient-to-r from-white/10 to-white/15 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                  >
                    <div className="w-9 h-9 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-base">Syllabus</span>
                  </button>
                  
                  <button 
                    onClick={() => handleNavigation('/abbreviations')}
                    className="w-full flex items-center space-x-4 text-white font-semibold transition-all duration-300 py-4 px-5 rounded-lg hover:bg-white/20 hover:scale-[1.02] touch-button group bg-gradient-to-r from-white/10 to-white/15 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                  >
                    <div className="w-9 h-9 bg-gradient-to-r from-purple-400 to-purple-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                    </div>
                    <span className="text-base">Abbreviations</span>
                  </button>
                  
                  <button 
                    onClick={() => handleNavigation('/definitions')}
                    className="w-full flex items-center space-x-4 text-white font-semibold transition-all duration-300 py-4 px-5 rounded-lg hover:bg-white/20 hover:scale-[1.02] touch-button group bg-gradient-to-r from-white/10 to-white/15 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                  >
                    <div className="w-9 h-9 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-base">Definitions</span>
                  </button>
                  
                  {/* Enhanced Mobile Notes Section */}
                  <div className="space-y-2">
                    <button 
                      onClick={() => setIsMobileNotesOpen(!isMobileNotesOpen)}
                      className="w-full flex items-center justify-between text-white font-semibold transition-all duration-300 py-3 px-2 rounded-lg hover:bg-white/20 hover:scale-[1.02] touch-button group bg-gradient-to-r from-white/10 to-white/15 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-9 h-9 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <span className="text-base">Topics</span>
                      </div>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${isMobileNotesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Animated Notes Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobileNotesOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="ml-2 space-y-2 bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-1 border border-white/10 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                        {notesPages.map((page, index) => (
                          <button 
                            key={page.href}
                            onClick={() => handleNavigation(page.href)}
                            className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-2 rounded-lg hover:bg-white/15 touch-button group transform hover:scale-[1.02]"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400/30 to-yellow-500/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-sm">{page.icon}</span>
                            </div>
                            <span className="text-sm font-medium">{page.name}</span>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Mobile PDFs Section */}
                  <div className="space-y-2">
                    <button 
                      onClick={() => setIsMobilePdfsOpen(!isMobilePdfsOpen)}
                      className="w-full flex items-center justify-between text-white font-semibold transition-all duration-300 py-4 px-5 rounded-lg hover:bg-white/20 hover:scale-[1.02] touch-button group bg-gradient-to-r from-white/10 to-white/15 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-9 h-9 bg-gradient-to-r from-red-400 to-red-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-base">PDFs</span>
                      </div>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${isMobilePdfsOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Animated PDFs Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobilePdfsOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="ml-4 space-y-2 bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-1 border border-white/10 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                        {pdfsPages.map((page, index) => (
                          <button 
                            key={page.href}
                            onClick={() => handleNavigation(page.href)}
                            className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/15 touch-button group transform hover:scale-[1.02]"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className="w-8 h-8 bg-gradient-to-r from-red-400/30 to-red-500/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-sm">{page.icon}</span>
                            </div>
                            <span className="text-sm font-medium">{page.name}</span>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Mobile Quizzes Section */}
                  <div className="space-y-2">
                    <button 
                      onClick={() => setIsMobileQuizzesOpen(!isMobileQuizzesOpen)}
                      className="w-full flex items-center justify-between text-white font-semibold transition-all duration-300 py-4 px-5 rounded-lg hover:bg-white/20 hover:scale-[1.02] touch-button group bg-gradient-to-r from-white/10 to-white/15 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-9 h-9 bg-gradient-to-r from-green-400 to-teal-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-base">Quizzes</span>
                      </div>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${isMobileQuizzesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Animated Quizzes Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobileQuizzesOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="ml-4 space-y-2 bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-1 border border-white/10">
                        {quizzesPages.map((page, index) => (
                          <button 
                            key={page.href}
                            onClick={() => handleNavigation(page.href)}
                            className="w-full flex items-center space-x-3 text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/15 touch-button group transform hover:scale-[1.02]"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className="w-8 h-8 bg-gradient-to-r from-green-400/30 to-teal-500/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-sm">{page.icon}</span>
                            </div>
                            <span className="text-sm font-medium">{page.name}</span>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleNavigation('/contact')}
                    className="w-full flex items-center space-x-4 text-white font-semibold transition-all duration-300 py-4 px-5 rounded-lg hover:bg-white/20 hover:scale-[1.02] touch-button group bg-gradient-to-r from-white/10 to-white/15 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                  >
                    <div className="w-9 h-9 bg-gradient-to-r from-pink-400 to-pink-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-base">Contact</span>
                  </button>
                  
                  {isAdmin && (
                    <button 
                      onClick={() => handleNavigation('/admin')}
                      className="w-full flex items-center space-x-4 text-white font-semibold transition-all duration-300 py-4 px-5 rounded-lg hover:bg-white/20 hover:scale-[1.02] touch-button group bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 border border-yellow-400/40 hover:border-yellow-400/60 shadow-lg hover:shadow-xl"
                    >
                      <div className="w-9 h-9 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <span className="text-base">Admin Dashboard</span>
                    </button>
                  )}
                </div>

                {/* Logout Button - Bottom position */}
                <div className="mt-6 pt-6 border-t border-white/20 relative z-10">
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
                    className="w-full flex items-center space-x-4 text-white font-semibold py-4 px-5 rounded-lg bg-gradient-to-r from-red-500/40 to-red-600/40 hover:from-red-500/60 hover:to-red-600/60 transition-all duration-300 border border-red-400/50 hover:border-red-400/70 touch-button shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  >
                    <div className="w-9 h-9 bg-gradient-to-r from-red-500 to-red-600 rounded-md flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </div>
                    <span className="text-base">Logout</span>
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