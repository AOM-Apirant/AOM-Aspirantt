"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

// Import all BWM Part A content components
import BWMPartAPage1A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage1A'
import BWMPartAPage1B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage1B'
import BWMPartAPage3 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage3'
import BWMPartAPage4A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage4A'
import BWMPartAPage4B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage4B'
import BWMPartAPage5A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage5A'
import BWMPartAPage5B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage5B'
import BWMPartAPage6 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage6'
import BWMPartAPage7 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage7'
import BWMPartAPage8A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage8A'
import BWMPartAPage8B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage8B'
import BWMPartAPage10 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage10'
import BWMPartAPage11A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage11A'
import BWMPartAPage11B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage11B'
import BWMPartAPage13A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage13A'
import BWMPartAPage13B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage13B'
import BWMPartAPage15 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage15'
import BWMPartAPage17 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage17'
import BWMPartAPage18 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage18'
import BWMPartAPage19 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage19'
import BWMPartAPage21A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage21A'
import BWMPartAPage21B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage21B'
import BWMPartAPage21C from '@/components/bwm/bwm-part-a-pages/BWMPartAPage21C'
import BWMPartAPage22A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage22A'
import BWMPartAPage22B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage22B'
import BWMPartAPage22C from '@/components/bwm/bwm-part-a-pages/BWMPartAPage22C'
import BWMPartAPage23A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage23A'
import BWMPartAPage23B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage23B'
import BWMPartAPage23C from '@/components/bwm/bwm-part-a-pages/BWMPartAPage23C'
import BWMPartAPage24 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage24'
import BWMPartAPage26A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage26A'
import BWMPartAPage26B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage26B'
import BWMPartAPage26C from '@/components/bwm/bwm-part-a-pages/BWMPartAPage26C'
import BWMPartAPage27A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage27A'
import BWMPartAPage27B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage27B'
import BWMPartAPage27C from '@/components/bwm/bwm-part-a-pages/BWMPartAPage27C'
import BWMPartAPage29 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage29'
import BWMPartAPage30A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage30A'
import BWMPartAPage30B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage30B'
import BWMPartAPage30C from '@/components/bwm/bwm-part-a-pages/BWMPartAPage30C'
import BWMPartAPage31A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage31A'
import BWMPartAPage31B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage31B'
import BWMPartAPage32 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage32'
import BWMPartAPage33A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage33A'
import BWMPartAPage33B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage33B'
import BWMPartAPage34 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage34'
import BWMPartAPage35 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage35'
import BWMPartAPage37 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage37'
import BWMPartAPage38A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage38A'
import BWMPartAPage38B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage38B'
import BWMPartAPage38C from '@/components/bwm/bwm-part-a-pages/BWMPartAPage38C'
import BWMPartAPage38D from '@/components/bwm/bwm-part-a-pages/BWMPartAPage38D'
import BWMPartAPage39 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage39'
import BWMPartAPage40A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage40A'
import BWMPartAPage40B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage40B'
import BWMPartAPage41 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage41'
import BWMPartAPage42A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage42A'
import BWMPartAPage42B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage42B'
import BWMPartAPage43 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage43'
import BWMPartAPage46 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage46'
import BWMPartAPage47A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage47A'
import BWMPartAPage47B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage47B'
import BWMPartAPage48 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage48'
import BWMPartAPage50 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage50'
import BWMPartAPage51 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage51'
import BWMPartAPage52 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage52'
import BWMPartAPage53 from '@/components/bwm/bwm-part-a-pages/BWMPartAPage53'
import BWMPartAPage55A from '@/components/bwm/bwm-part-a-pages/BWMPartAPage55A'
import BWMPartAPage55B from '@/components/bwm/bwm-part-a-pages/BWMPartAPage55B'

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const pageNumber = params.page as string
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setIsLoading(false)
  }, [pageNumber])

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

  // Map page numbers to components
  const pageComponents: { [key: string]: React.ComponentType } = {
    '1': BWMPartAPage1A,
    '1A': BWMPartAPage1A,
    '1B': BWMPartAPage1B,
    '3': BWMPartAPage3,
    '4': BWMPartAPage4A,
    '4A': BWMPartAPage4A,
    '4B': BWMPartAPage4B,
    '5': BWMPartAPage5A,
    '5A': BWMPartAPage5A,
    '5B': BWMPartAPage5B,
    '6': BWMPartAPage6,
    '7': BWMPartAPage7,
    '8': BWMPartAPage8A,
    '8A': BWMPartAPage8A,
    '8B': BWMPartAPage8B,
    '10': BWMPartAPage10,
    '11': BWMPartAPage11A,
    '11A': BWMPartAPage11A,
    '11B': BWMPartAPage11B,
    '13': BWMPartAPage13A,
    '13A': BWMPartAPage13A,
    '13B': BWMPartAPage13B,
    '15': BWMPartAPage15,
    '17': BWMPartAPage17,
    '18': BWMPartAPage18,
    '19': BWMPartAPage19,
    '21': BWMPartAPage21A,
    '21A': BWMPartAPage21A,
    '21B': BWMPartAPage21B,
    '21C': BWMPartAPage21C,
    '22': BWMPartAPage22A,
    '22A': BWMPartAPage22A,
    '22B': BWMPartAPage22B,
    '22C': BWMPartAPage22C,
    '23': BWMPartAPage23A,
    '23A': BWMPartAPage23A,
    '23B': BWMPartAPage23B,
    '23C': BWMPartAPage23C,
    '24': BWMPartAPage24,
    '26': BWMPartAPage26A,
    '26A': BWMPartAPage26A,
    '26B': BWMPartAPage26B,
    '26C': BWMPartAPage26C,
    '27': BWMPartAPage27A,
    '27A': BWMPartAPage27A,
    '27B': BWMPartAPage27B,
    '27C': BWMPartAPage27C,
    '29': BWMPartAPage29,
    '30': BWMPartAPage30A,
    '30A': BWMPartAPage30A,
    '30B': BWMPartAPage30B,
    '30C': BWMPartAPage30C,
    '31': BWMPartAPage31A,
    '31A': BWMPartAPage31A,
    '31B': BWMPartAPage31B,
    '32': BWMPartAPage32,
    '33': BWMPartAPage33A,
    '33A': BWMPartAPage33A,
    '33B': BWMPartAPage33B,
    '34': BWMPartAPage34,
    '35': BWMPartAPage35,
    '37': BWMPartAPage37,
    '38': BWMPartAPage38A,
    '38A': BWMPartAPage38A,
    '38B': BWMPartAPage38B,
    '38C': BWMPartAPage38C,
    '38D': BWMPartAPage38D,
    '39': BWMPartAPage39,
    '40': BWMPartAPage40A,
    '40A': BWMPartAPage40A,
    '40B': BWMPartAPage40B,
    '41': BWMPartAPage41,
    '42': BWMPartAPage42A,
    '42A': BWMPartAPage42A,
    '42B': BWMPartAPage42B,
    '43': BWMPartAPage43,
    '46': BWMPartAPage46,
    '47': BWMPartAPage47A,
    '47A': BWMPartAPage47A,
    '47B': BWMPartAPage47B,
    '48': BWMPartAPage48,
    '50': BWMPartAPage50,
    '51': BWMPartAPage51,
    '52': BWMPartAPage52,
    '53': BWMPartAPage53,
    '55': BWMPartAPage55A,
    '55A': BWMPartAPage55A,
    '55B': BWMPartAPage55B
  }

  // Rule titles mapping based on page numbers
  const getRuleTitle = (page: string): string => {
    const ruleTitles: { [key: string]: string } = {
      '1': 'Provision of Token Block Instruments',
      '1A': 'Provision of Token Block Instruments',
      '1B': 'Description of Neale\'s Ball Token Instrument',
      '3': 'Description of Neale\'s Tablet Token Instrument',
      '4': 'Indoor Apparatus',
      '4A': 'Indoor Apparatus',
      '4B': 'Outdoor Apparatus',
      '5': 'Systems of working',
      '5A': 'Systems of working',
      '5B': 'Block Competency Certificate',
      '6': 'Bell Code',
      '7': 'Precedence of trains',
      '8': 'Acknowledgement of Signals',
      '8A': 'Acknowledgement of Signals',
      '8B': 'Train Signal Register',
      '10': 'Inspection of Train Signal Register',
      '11': 'Station Masters handing over / taking over charge',
      '11A': 'Preservation of Train Signal Register',
      '11B': 'Station Masters handing over / taking over charge',
      '13': 'Access to and operation of equipment',
      '13A': 'Access to and operation of equipment',
      '13B': 'Signalling of a train from one block station to another',
      '15': 'To cancel Line Clear before train enters into Block Section',
      '17': 'Shunting between the Last Stop Signal',
      '18': 'Outlying sidings controlled by the token',
      '19': 'Exchange of Private Numbers',
      '21': 'The \'Is line clear\' signal',
      '21A': 'The \'Call attention\' signal',
      '21B': 'The \'Is line clear\' signal – when to be sent',
      '21C': 'Precautions before asking \'Line clear\'',
      '22': 'Acceptance of the \'Is line clear\' signal',
      '22A': '\'Is line clear\' - when to be asked',
      '22B': 'Acceptance of the \'Is line clear\' signal',
      '22C': 'Precautions before giving \'line clear\'',
      '23': 'Giving \'Line Clear\'',
      '23A': 'Giving \'Line Clear\'',
      '23B': 'Securing of token for delivery',
      '23C': 'Authority to proceed',
      '24': 'Delivery of token to the Driver',
      '26': '\'Train entering block section\' signal',
      '26A': '\'Train entering block section\' signal',
      '26B': 'Surrendering of token by Driver at station',
      '26C': 'Insertion of token in the block instrument',
      '27': 'Insertion of token in the block instrument',
      '27A': 'Giving the \'Train out of block section\' signal',
      '27B': 'Token neither to be transferred from one train to another',
      '27C': 'Private Numbers',
      '29': 'Caution order',
      '30': 'Refusal of the \'Is line clear\' signal',
      '30A': 'Refusal of the \'Is line clear\' signal',
      '30B': 'Special use of \'Obstruction danger\' signal',
      '30C': '\'Cancel last signal\'',
      '31': '\'Cancel last signal\'',
      '31A': '\'Signal given in error\' signal',
      '31B': 'Trains unusually delayed',
      '32': '\'Stop and examine train\' signal',
      '33': 'Trains unusually delayed',
      '33A': '\'Train passed without tail lamp\'',
      '33B': '\'Train divided\' signal',
      '34': '\'Vehicles running away into the block section\' signal',
      '35': 'Precautions when Government staff required to work',
      '37': 'Blocking the line for lorries',
      '38': 'The \'Testing\' signal',
      '38A': 'The \'Testing\' signal',
      '38B': 'Persons authorized to Test',
      '38C': 'Block Section to be clear during Test',
      '38D': 'Procedure for Testing',
      '39': 'Removal of defective Tokens',
      '40': 'Removal of defective Tokens',
      '40A': 'Replacement of token instruments',
      '40B': 'Balancing of tokens in token instruments',
      '41': 'Procedure for extracting the Last Stop Signal control key',
      '42': 'Balancing of tokens',
      '42A': 'Consent required before interfering with equipment',
      '42B': 'Block instruments maintenance work by S & T staff',
      '43': 'Failure of token block instruments',
      '46': 'Loss of token',
      '47': 'Block instruments failure record',
      '47A': 'Block instruments failure record',
      '47B': 'Reports to be sent',
      '48': 'Train signalling during interruption',
      '50': 'Procedure when \'Train entering block section\' signal cannot be given',
      '51': 'Procedure for obtaining Line Clear using telephone',
      '52': 'Procedure using Control telephone',
      '53': 'Procedure using VHF sets',
      '55': 'Resumption of block working after interruption',
      '55A': 'Resumption of block working after interruption',
      '55B': 'Total interruption of communications on single line'
    }
    return ruleTitles[page] || 'Block Working Manual Content'
  }

  const ContentComponent = pageComponents[pageNumber]

  const openPDF = () => {
    const pdfFileName = `BWMPartAPage${pageNumber}.pdf`
    const pdfPath = `/bwmpdfs/BWMPartAPages/${pdfFileName}`
    
    try {
      // Open PDF in new tab
      window.open(pdfPath, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error opening PDF:', error)
      // Fallback: try without parameters
      window.open(pdfPath, '_blank')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-gray-300 mb-6">Content for page {pageNumber} is not available.</p>
            <button
              onClick={() => router.push('/bwm')}
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"> 
      {/* Header Navigation */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/bwm')}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 mr-2"
              >
                <span>Back to Index</span>
              </button>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 mr-2 rounded-sm backdrop-blur-sm border border-blue-400/30">
              <ul className="space-y-1 text-center">
                <li className="flex items-center justify-center space-x-2">
                  <span className="text-white text-xs lg:text-sm">Topic: {getRuleTitle(pageNumber)}</span>
                </li>
              </ul>
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
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-2">
            <div className="flex items-center justify-center space-x-3">
              <div>
                <h1 className="text-2xl lg:text-3xl font-semibold text-center uppercase">Block Working Manual</h1>
                <hr className="border-white/20"/>
                <p className="text-blue-100 text-sm lg:text-base text-center mt-2">
                  PART-A - SINGLE LINE - TOKEN
                </p>
                <p className="text-white text-sm lg:text-base text-center mt-1">
                  Topic: {getRuleTitle(pageNumber)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:p-6 p-1">
            <ContentComponent />
          </div>

          {/* Navigation Buttons */}
          <div className="mt-1 mb-1 p-3">
            <div className="flex items-center justify-between space-x-8">
              {/* Previous Page Button */}
              <button
                onClick={() => {
                  const currentPageNum = pageNumber
                  const availablePages = Object.keys(pageComponents)
                  const currentIndex = availablePages.indexOf(currentPageNum)
                  
                  if (currentIndex > 0) {
                    const prevPage = availablePages[currentIndex - 1]
                    router.push(`/bwm/content/${prevPage}`)
                  }
                }}
                disabled={(() => {
                  const currentPageNum = pageNumber
                  const availablePages = Object.keys(pageComponents)
                  const currentIndex = availablePages.indexOf(currentPageNum)
                  return currentIndex <= 0
                })()}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                  (() => {
                    const currentPageNum = pageNumber
                    const availablePages = Object.keys(pageComponents)
                    const currentIndex = availablePages.indexOf(currentPageNum)
                    return currentIndex > 0
                  })()
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                    : 'bg-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>
                  Previous
                </span>
                <hr className="border-white/30 w-full my-1" />
                <span className='text-xs lg:text-sm'>
                  {(() => {
                    const currentPageNum = pageNumber
                    const availablePages = Object.keys(pageComponents)
                    const currentIndex = availablePages.indexOf(currentPageNum)
                    
                    if (currentIndex > 0) {
                      const prevPage = availablePages[currentIndex - 1]
                      return getRuleTitle(prevPage)
                    }
                    return "Previous"
                  })()}
                </span>
              </button>

              {/* Next Page Button */}
              <button
                onClick={() => {
                  const currentPageNum = pageNumber
                  const availablePages = Object.keys(pageComponents)
                  const currentIndex = availablePages.indexOf(currentPageNum)
                  
                  if (currentIndex < availablePages.length - 1) {
                    const nextPage = availablePages[currentIndex + 1]
                    router.push(`/bwm/content/${nextPage}`)
                  }
                }}
                disabled={(() => {
                  const currentPageNum = pageNumber
                  const availablePages = Object.keys(pageComponents)
                  const currentIndex = availablePages.indexOf(currentPageNum)
                  return currentIndex >= availablePages.length - 1
                })()}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                  (() => {
                    const currentPageNum = pageNumber
                    const availablePages = Object.keys(pageComponents)
                    const currentIndex = availablePages.indexOf(currentPageNum)
                    return currentIndex < availablePages.length - 1
                  })()
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                    : 'bg-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>
                  Next
                </span>
                <hr className="border-white/30 w-full my-1" />
                <span className='text-xs lg:text-sm'>
                  {(() => {
                    const currentPageNum = pageNumber
                    const availablePages = Object.keys(pageComponents)
                    const currentIndex = availablePages.indexOf(currentPageNum)
                    
                    if (currentIndex < availablePages.length - 1) {
                      const nextPage = availablePages[currentIndex + 1]
                      return getRuleTitle(nextPage)
                    }
                    return "Next"
                  })()}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-700 text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 z-50 flex items-center justify-center animate-pulse"
          aria-label="Scroll to top"
        >
          {/* Up Arrow Icon */}
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

