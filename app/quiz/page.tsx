'use client';

import Link from 'next/link';
import UserAvatar from '@/components/UserAvatar';
import { allQuizzes } from '@/assets/data';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Quiz() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loadingCategory, setLoadingCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setLoadingCategory(categoryId);
    // Simulate loading time and then navigate
    setTimeout(() => {
      router.push(`/quiz/${categoryId}`);
    }, 800);
  };

  const quizCategories = [
    {
      id: 'gsr',
      title: 'G & SR Rules',
      description: 'Test your general knowledge with various topics',
      icon: '📋',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700',
      quizzes: Object.keys(allQuizzes.gsr.quizzes).length
    },
    {
      id: 'operating',
      title: 'Operating Department',
      description: 'Explore world operating department with various topics',
      icon: '🚂',
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      quizzes: Object.keys(allQuizzes.operating.quizzes).length
    },
    {
      id: 'commercial',
      title: 'Commercial Department',
      description: 'Discover commercial facts with various topics',
      icon: '💰',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'from-purple-600 to-purple-700',
      quizzes: Object.keys(allQuizzes.commercial.quizzes).length
    },
    {
      id: 'personnel',
      title: 'Personnel Department',
      description: 'Learn about personnel management with various topics',
      icon: '👥',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'from-pink-600 to-pink-700',
      quizzes: Object.keys(allQuizzes.personnel.quizzes).length
    },
    {
      id: 'operating-manual',
      title: 'Operating Manual',
      description: 'Test your operating manual with various topics',
      icon: '📖',
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'from-teal-600 to-teal-700',
      quizzes: Object.keys(allQuizzes['operating-manual'].quizzes).length
    },
    {
      id: 'accident-manual',
      title: 'Accident Manual',
      description: 'Explore accident manual with various topics',
      icon: '🚨',
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'from-indigo-600 to-indigo-700',
      quizzes: Object.keys(allQuizzes['accident-manual'].quizzes).length
    },
    {
      id: 'bwm',
      title: 'Block Working Manual',
      description: 'Discover block working manual with various topics',
      icon: '🛤️',
      color: 'from-cyan-500 to-cyan-600',
      hoverColor: 'from-cyan-600 to-cyan-700',
      quizzes: Object.keys(allQuizzes.bwm.quizzes).length
    },
    {
      id: 'rajbhasha',
      title: 'Rajbhasha',
      description: 'Learn about rajbhasha with various topics',
      icon: '🗣️',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'from-pink-600 to-pink-700',
      quizzes: Object.keys(allQuizzes.rajbhasha.quizzes).length
    },
    {
      id: 'finance',
      title: 'Finance',
      description: 'Test your finance with various topics',
      icon: '💳',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700',
      quizzes: Object.keys(allQuizzes.finance.quizzes).length
    },
    {
      id: 'rgk',
      title: 'Railway GK',
      description: 'Explore railway general knowledge with various topics',
      icon: '🚆',
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      quizzes: Object.keys(allQuizzes.rgk.quizzes).length
    },
  ];

  // Calculate total questions (assuming 10 questions per quiz)
  const totalQuestions = quizCategories.reduce((total, category) => {
    const categoryQuizzes = allQuizzes[category.id as keyof typeof allQuizzes];
    if (categoryQuizzes && categoryQuizzes.quizzes) {
      const questionsInCategory = Object.values(categoryQuizzes.quizzes).reduce((quizTotal, quiz) => {
        return quizTotal + quiz.length;
      }, 0);
      return total + questionsInCategory;
    }
    return total;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Quiz Dashboard
          </h1>
          
          {session ? (
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
              <UserAvatar 
                userImage={session.user?.image}
                userName={session.user?.name}
                size={50}
              />
              <div className="text-center sm:text-left">
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Welcome back, <span className="text-blue-600 font-semibold">{session.user?.name}</span>!
                </p>
                <p className="text-xs sm:text-sm text-gray-500">Choose a category to start your quiz journey</p>
              </div>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4">
                Please log in to access quizzes
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login Now
              </Link>
            </div>
          )}
        </div>

        {session && (
          <>
            {/* Quiz Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {quizCategories.map((category) => (
                <div key={category.id} className="group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 overflow-hidden cursor-pointer">
                    {/* Header */}
                    <div className={`bg-gradient-to-br ${category.color} p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 translate-x-8 sm:translate-x-12 lg:translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-white/10 rounded-full translate-y-6 sm:translate-y-8 lg:translate-y-12 -translate-x-6 sm:-translate-x-8 lg:-translate-x-12"></div>
                      
                      <div className="relative z-10">
                        <div className="text-3xl sm:text-4xl lg:text-6xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                          {category.icon}
                        </div>
                        <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-1 sm:mb-2">{category.title}</h2>
                        <p className="text-white/90 text-xs sm:text-sm lg:text-lg">{category.description}</p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-semibold text-xs sm:text-sm lg:text-base">{category.quizzes} Quizzes</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-semibold text-xs sm:text-sm lg:text-base">~40 min</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs sm:text-sm lg:text-base">Multiple choice questions</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs sm:text-sm lg:text-base">Detailed explanations</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs sm:text-sm lg:text-base">Progress tracking</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 sm:mt-8">
                        <button 
                          onClick={() => handleCategoryClick(category.id)}
                          disabled={loadingCategory === category.id}
                          className={`w-full bg-gradient-to-r ${category.hoverColor} text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full sm:rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg group-hover:shadow-xl ${
                            loadingCategory === category.id ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
                          }`}
                        >
                          {loadingCategory === category.id ? (
                            <>
                              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                                <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
                                <div className="absolute inset-0 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
                              </div>
                              <span className="text-sm sm:text-base lg:text-lg">Loading...</span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm sm:text-base lg:text-lg">Start Category</span>
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-12 sm:mt-16 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Quiz Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{quizCategories.length}</div>
                  <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">{quizCategories.reduce((total, category) => total + category.quizzes, 0)}</div>
                  <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Total Quizzes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">{totalQuestions}</div>
                  <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1 sm:mb-2">∞</div>
                  <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Retakes</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}