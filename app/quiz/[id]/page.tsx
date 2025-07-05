'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { allQuizzes } from '@/assets/data';

// Category icons mapping
const categoryIcons: { [key: string]: string } = {
  'gsr': '📋',
  'operating': '🚂',
  'commercial': '💰',
  'establishment': '👥',
  'operating-manual': '📖',
  'accident-manual': '🚨',
  'bwm': '🛤️',
  'rajbhasha': '🗣️',
  'finance': '💳',
  'rgk': '🚆'
};

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { id } = React.use(params);
  const [quizStartTime, setQuizStartTime] = useState<number>(Date.now());
  
  // Get the category data
  const categoryData = allQuizzes[id as keyof typeof allQuizzes];
  const [currentQuizId, setCurrentQuizId] = useState('1'); // Start with first quiz
  
  // Get the current quiz questions
  const currentQuiz = categoryData?.quizzes?.[currentQuizId as keyof typeof categoryData.quizzes];
  const questions = currentQuiz || [];
  
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Get category icon
  const categoryIcon = categoryIcons[id] || '🧠';

  // Update userAnswers when questions change
  React.useEffect(() => {
    setUserAnswers(new Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setQuizStartTime(Date.now());
  }, [questions.length]);

  // Function to update user progress
  const updateUserProgress = async (finalScore: number, correctAnswers: number) => {
    try {
      const studyTime = Math.round((Date.now() - quizStartTime) / 1000 / 60); // Convert to minutes
      
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categoryId: id,
          quizId: currentQuizId,
          score: finalScore,
          totalQuestions: questions.length,
          correctAnswers: correctAnswers,
          studyTime: studyTime
        }),
      });

      if (!response.ok) {
        console.error('Failed to update progress');
      }
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Please log in to access this quiz.</p>
      </div>
    );
  }

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Quiz category not found.</p>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newUserAnswers);
  };

  const handleNext = () => {
    if (userAnswers[currentQuestion] === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      // Update progress when quiz is completed
      const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correct).length;
      const finalScore = Math.round((correctAnswers / questions.length) * 100);
      updateUserProgress(finalScore, correctAnswers);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setUserAnswers(new Array(questions.length).fill(null));
    setScore(0);
    setShowResults(false);
  };

  const handleNextQuiz = () => {
    const quizIds = Object.keys(categoryData.quizzes);
    const currentIndex = quizIds.indexOf(currentQuizId);
    if (currentIndex < quizIds.length - 1) {
      const nextQuizId = quizIds[currentIndex + 1];
      setCurrentQuizId(nextQuizId);
      setCurrentQuestion(0);
      setUserAnswers(new Array(categoryData.quizzes[nextQuizId as keyof typeof categoryData.quizzes].length).fill(null));
      setScore(0);
      setShowResults(false);
      setQuizStartTime(Date.now()); // Reset quiz start time for new quiz
    }
  };

  if (showResults) {
    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correct).length;
    const wrongAnswers = questions.length - correctAnswers;
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    const quizIds = Object.keys(categoryData.quizzes);
    const currentIndex = quizIds.indexOf(currentQuizId);
    const hasMoreQuizzes = currentIndex < quizIds.length - 1;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 sm:py-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">🎉 Quiz Completed!</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">Great job! Here&apos;s how you performed</p>
          </div>

          {/* Main Results Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8">
            {/* Score Display */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{percentage}%</div>
                  <div className="text-xs sm:text-sm text-blue-100">Score</div>
                </div>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                {percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good Job!' : percentage >= 40 ? 'Not Bad!' : 'Keep Practicing!'}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">You got {correctAnswers} out of {questions.length} questions correct</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">{categoryData.title} - Quiz {currentQuizId}</p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Correct Answers */}
              <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-green-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">{correctAnswers}</div>
                <div className="text-green-700 font-medium text-xs sm:text-sm lg:text-base">Correct Answers</div>
              </div>

              {/* Wrong Answers */}
              <div className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-red-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1 sm:mb-2">{wrongAnswers}</div>
                <div className="text-red-700 font-medium text-xs sm:text-sm lg:text-base">Wrong Answers</div>
              </div>

              {/* Total Questions */}
              <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-blue-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{questions.length}</div>
                <div className="text-blue-700 font-medium text-xs sm:text-sm lg:text-base">Total Questions</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => router.push('/quiz')}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full sm:rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Dashboard
                </div>
              </button>
              {hasMoreQuizzes ? (
                <button
                  onClick={handleNextQuiz}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full sm:rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <div className="flex items-center justify-center">
                    Next Quiz
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              ) : (
                <button
                  onClick={handleRestart}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Retake Quiz
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Question Review Section */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Question Review</h3>
            <div className="space-y-4">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                return (
                  <div key={index} className={`p-4 rounded-xl border-2 ${
                    isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">Question {index + 1}</h4>
                      <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {isCorrect ? (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Correct
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Incorrect
                          </>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{question.question}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Your answer:</span> {userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                    </div>
                    {!isCorrect && (
                      <div className="text-sm text-green-700 mt-1">
                        <span className="font-medium">Correct answer:</span> {question.options[question.correct]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* More Quizzes Section - Show remaining quizzes in the same category */}
          {hasMoreQuizzes && (
            <div className="bg-white rounded-xl shadow-2xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Continue Learning</h3>
              <p className="text-gray-600 text-center mb-8">Ready for your next challenge? Try these remaining quizzes!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizIds.slice(currentIndex + 1).map((quizId) => (
                  <div key={quizId} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-br ${categoryData.color} rounded-full flex items-center justify-center mb-4`}>
                      <span className="text-white text-lg font-bold">{quizId}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-700 mb-2">{categoryData.title} Quiz {quizId}</h4>
                    <p className="text-gray-600 text-sm mb-4">{categoryData.quizzes[quizId as keyof typeof categoryData.quizzes].length} Questions</p>
                    <button 
                      onClick={() => {
                        setCurrentQuizId(quizId);
                        setCurrentQuestion(0);
                        setUserAnswers(new Array(categoryData.quizzes[quizId as keyof typeof categoryData.quizzes].length).fill(null));
                        setScore(0);
                        setShowResults(false);
                        setQuizStartTime(Date.now()); // Reset quiz start time for new quiz
                      }}
                      className={`w-full bg-gradient-to-r ${categoryData.color} text-white py-2 sm:py-2 px-4 sm:px-6 rounded-full font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}
                    >
                      <span>Start Quiz</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link 
                  href="/quiz"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Back to All Categories
                </Link>
              </div>
            </div>
          )}

          {/* Other Categories Section */}
          <div className="bg-white rounded-xl shadow-2xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Explore Other Categories</h3>
            <p className="text-gray-600 text-center mb-8">Ready to try something different? Explore these categories!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(allQuizzes).map(([categoryId, category]) => {
                if (categoryId === id) return null; // Skip current category
                
                return (
                  <div key={categoryId} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-4`}>
                      <span className="text-white text-2xl">{categoryIcons[categoryId] || '🧠'}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{category.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <Link 
                      href={`/quiz/${categoryId}`}
                      className={`w-full bg-gradient-to-r ${category.color} text-white py-2 px-4 rounded-full font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}
                    >
                      <span>Start Category</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/quiz"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Back to All Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const selectedAnswer = userAnswers[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correct;
  const showExplanation = selectedAnswer !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-6 sm:py-8 px-3 sm:px-4">
      <div className="max-w-3xl mx-auto">
        {/* Simple and Beautiful Quiz Box */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">{categoryIcon}</span>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">{categoryData.title}</h1>
            </div>
            <div className="flex items-center justify-center text-gray-600 mb-3 sm:mb-4">
              <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                Quiz {currentQuizId}
              </span>
              <span className="mx-2">•</span>
              <span className="text-gray-500 text-xs sm:text-sm lg:text-base">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 sm:h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 leading-relaxed">
              {currentQ.question}
            </h2>
            
            {/* Options */}
            <div className="space-y-2 sm:space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === currentQ.correct;
                let optionClasses = 'w-full text-left p-2.5 sm:p-3.5 rounded-md sm:rounded-lg border-2 transition-all duration-200 flex items-center justify-between group';
                
                if (isSelected) {
                  if (isCorrectAnswer) {
                    optionClasses += ' border-green-500 bg-green-50 text-green-700 shadow-md';
                  } else {
                    optionClasses += ' border-red-500 bg-red-50 text-red-700 shadow-md';
                  }
                } else if (showExplanation && isCorrectAnswer) {
                  optionClasses += ' border-green-500 bg-green-50 text-green-700 shadow-md';
                } else {
                  optionClasses += ' border-gray-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`${optionClasses} ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 mr-3 sm:mr-4 flex items-center justify-center ${
                        isSelected 
                          ? isCorrectAnswer 
                            ? 'border-green-500 bg-green-500' 
                            : 'border-red-500 bg-red-500'
                          : showExplanation && isCorrectAnswer
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-300 group-hover:border-blue-400'
                      }`}>
                        {isSelected || (showExplanation && isCorrectAnswer) ? (
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-xs font-medium text-gray-400 group-hover:text-blue-400">
                            {String.fromCharCode(65 + index)}
                          </span>
                        )}
                      </div>
                      <span className="font-medium text-left text-sm sm:text-base lg:text-lg">{option}</span>
                    </div>
                    
                    {showExplanation && (
                      <div className="flex items-center">
                        {isCorrectAnswer ? (
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : isSelected ? (
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-md sm:rounded-lg border-1 ${
              isCorrect 
                ? 'bg-green-50 border-green-500 text-green-700' 
                : 'bg-red-50 border-rose-500 text-rose-700'
            }`}>
              <div className="flex items-start">
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 ${
                  isCorrect ? 'bg-green-500' : 'bg-rose-600'
                }`}>
                  {isCorrect ? (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">
                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed">{currentQ.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1);
                }
              }}
              disabled={currentQuestion === 0}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 rounded-md sm:rounded-lg border border-gray-400 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium flex items-center text-sm sm:text-base"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md sm:rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex items-center text-sm sm:text-base"
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 