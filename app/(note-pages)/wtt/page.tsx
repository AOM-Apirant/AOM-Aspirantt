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

const WTT = () => {
  const handleDownloadWTT = () => {
    const link = document.createElement('a')
    link.href = '/wttpdfs/WTT 79 SC DIVISION.pdf'
    link.download = 'WTT 79 SC DIVISION.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Auto-open PDF on mobile devices after download
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      setTimeout(() => {
        window.open('/wttpdfs/WTT 79 SC DIVISION.pdf', '_blank')
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
                onClick={handleDownloadWTT}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Download WTT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WTT