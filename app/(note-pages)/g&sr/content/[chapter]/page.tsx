"use client"
import React, { useState, useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { chapterPageComponents } from '@/lib/g&sr-chapter-components'
import { appendixPageComponents } from '@/lib/g&sr-appendix-components'
import { getPageTitle } from '@/lib/g&sr-appendix-titles'

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const chapterPageId = params.chapter as string
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setIsLoading(false)
  }, [chapterPageId])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Check if it's a chapter or appendix page
  const ContentComponent = chapterPageComponents[chapterPageId] || appendixPageComponents[chapterPageId]
  const isAppendix = Boolean(appendixPageComponents[chapterPageId])

  const openPDF = () => {
    let pdfFileName = ''
    let pdfPath = ''
    
    if (isAppendix) {
      pdfFileName = `GSRAppendixPage${chapterPageId}.pdf`
      pdfPath = `/g&sr-pdf-pages/g&sr-appendix-pdf-pages/${pdfFileName}`
    } else {
      pdfFileName = `GSRChapterPage${chapterPageId}.pdf`
      pdfPath = `/g&sr-pdf-pages/g&sr-chapter-pdf-pages/${pdfFileName}`
    }
    
    window.open(pdfPath, '_blank')
  }

  // Get all available pages (chapters + appendices) for navigation
  const allPages = useMemo(() => {
    const allPageIds = [
      ...Object.keys(chapterPageComponents),
      ...Object.keys(appendixPageComponents)
    ]
    
    return allPageIds.sort((a, b) => {
      // Extract numeric part for sorting
      const numMatchA = a.match(/^(\d+)/)
      const numMatchB = b.match(/^(\d+)/)
      const numA = numMatchA ? parseInt(numMatchA[1]) : 0
      const numB = numMatchB ? parseInt(numMatchB[1]) : 0
      
      if (numA !== numB) return numA - numA - numB
      // If same number, sort by suffix (A, B, C, etc.)
      return a.localeCompare(b)
    })
  }, [])

  const currentIndex = allPages.indexOf(chapterPageId)
  const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null
  const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null

  // Get topic name from page ID (handles both chapters and appendices)
  const getTopicName = (pageId: string): string => {
    return getPageTitle(pageId)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-gray-300 mb-6">Content for Page {chapterPageId} is not available.</p>
            <button
              onClick={() => router.push('/g&sr')}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header Navigation - Sticky Top */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/g&sr')}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 mr-2"
              >
                <span>Back to Index</span>
              </button>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 mr-2 rounded-sm backdrop-blur-sm border border-blue-400/30">
              <p className="text-white text-xs lg:text-base text-center whitespace-nowrap">
                Topic : {getTopicName(chapterPageId)}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={openPDF}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-red-600 hover:to-pink-700 transition-all duration-300"
              >
                <span>Document</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto lg:px-4 px-2 py-4">
        <ContentComponent />

        {/* Navigation Buttons - Bottom */}
        <div className="mt-6 mb-6 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
          <div className="flex items-center justify-between space-x-4">
            {/* Previous Button */}
            <button
              onClick={() => {
                if (prevPage) {
                  router.push(`/g&sr/content/${prevPage}`)
                }
              }}
              disabled={!prevPage}
              className={`flex flex-col items-center space-y-1 px-4 py-3 rounded-sm text-white transition-all duration-300 ${
                prevPage
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Previous
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm text-center max-w-[200px] truncate" title={prevPage ? getPageTitle(prevPage) : ''}>
                {prevPage ? getPageTitle(prevPage) : 'Previous'}
              </span>
            </button>

            {/* Next Button */}
            <button
              onClick={() => {
                if (nextPage) {
                  router.push(`/g&sr/content/${nextPage}`)
                }
              }}
              disabled={!nextPage}
              className={`flex flex-col items-center space-y-1 px-4 py-3 rounded-sm text-white transition-all duration-300 ${
                nextPage
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Next
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm text-center max-w-[200px] truncate" title={nextPage ? getPageTitle(nextPage) : ''}>
                {nextPage ? getPageTitle(nextPage) : 'Next'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-700 text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 z-50 flex items-center justify-center animate-pulse"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ContentPage

