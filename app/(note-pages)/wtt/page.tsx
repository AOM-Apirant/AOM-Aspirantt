'use client'
import React from 'react'
import { Download, FileText } from 'lucide-react'
import DetentionCost from '@/components/wtt/DetentionCost'
import StoppageCost from '@/components/wtt/StoppageCost'
import ReliefTrains from '@/components/wtt/ReliefTrains'
import ODC from '@/components/wtt/ODC'
import CCRoutes from '@/components/wtt/CCRoutes'
import FreightTrainExamination from '@/components/wtt/FreightTrainExamination'
import InvalidBPC from '@/components/wtt/InvalidBPC'
import Weighbridges from '@/components/wtt/Weighbridges'
import TimeTabling from '@/components/wtt/TimeTabling'

const WTT = () => {
  const handleDownloadWTT = (division: string, filename: string) => {
    const link = document.createElement('a')
    link.href = `/wttpdfs/${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Auto-open PDF on mobile devices after download
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      setTimeout(() => {
        window.open(`/wttpdfs/${filename}`, '_blank')
      }, 1000) // Wait 1 second for download to start
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">⏰</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Working Time Table
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Important document used to manage train timings in Railways
          </p>
        </div>
        <DetentionCost />
        <StoppageCost />
        <ReliefTrains />
        <ODC />
        <CCRoutes />
        <FreightTrainExamination />
        <InvalidBPC />
        <Weighbridges />
        <TimeTabling />


        {/* Download WTT Section */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden border border-purple-200">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">📋</span>
              <h2 className="text-2xl font-bold">Official WTT Document</h2>
            </div>
          </div>
          
          <div className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Working Time Table</h1>
                <h1 className="text-lg font-semibold text-gray-800 mb-2">Edition - 79</h1>
                <h1 className="text-xl font-semibold text-gray-800 mb-2">Secunderabad Division</h1>
                <h3 className='text-gray-600 mb-6'>Download the official Working Time Table for SC Division containing complete train schedules, timings, and operational details.</h3>
              </div>
              
              <button
                onClick={() => handleDownloadWTT('SC', 'WTT 79 SC DIVISION.pdf')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Download WTT 79 SC DIVISION
              </button>
            </div>
          </div>
        </div>

        {/* Additional WTT Divisions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* NED Division */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-200 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 text-white">
              <h3 className="text-lg font-bold text-center">NED Division</h3>
            </div>
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-4">Nanded Division</p>
              <button
                onClick={() => handleDownloadWTT('NED', 'WTT 79 NED DIVISION.pdf')}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-md hover:shadow-lg text-sm"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download WTT 79 NED DIVISION
              </button>
            </div>
          </div>

          {/* HYD Division */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-200 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 text-white">
              <h3 className="text-lg font-bold text-center">HYD Division</h3>
            </div>
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-4">Hyderabad Division</p>
              <button
                onClick={() => handleDownloadWTT('HYD', 'WTT 79 HYD DIVISION.pdf')}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-md hover:shadow-lg text-sm"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download WTT 79 HYD DIVISION
              </button>
            </div>
          </div>

          {/* BZA Division */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-200 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 text-white">
              <h3 className="text-lg font-bold text-center">BZA Division</h3>
            </div>
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-4">Vijayawada Division</p>
              <button
                onClick={() => handleDownloadWTT('BZA', 'WTT 79 BZA DIVISION.pdf')}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-md hover:shadow-lg text-sm"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download WTT 79 BZA DIVISION
              </button>
            </div>
          </div>

          {/* GTL Division */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-teal-200 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 text-white">
              <h3 className="text-lg font-bold text-center">GTL Division</h3>
            </div>
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-4">Guntakal Division</p>
              <button
                onClick={() => handleDownloadWTT('GTL', 'WTT 79 GTL DIVISION.pdf')}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-md hover:shadow-lg text-sm"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download WTT 79 GTL DIVISION
              </button>
            </div>
          </div>

          {/* GNT Division */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-200 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-4 text-white">
              <h3 className="text-lg font-bold text-center">GNT Division</h3>
            </div>
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-4">Guntur Division</p>
              <button
                onClick={() => handleDownloadWTT('GNT', 'WTT 79 GNT DIVISION.pdf')}
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-md hover:shadow-lg text-sm"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download WTT 79 GNT DIVISION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WTT