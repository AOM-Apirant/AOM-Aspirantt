"use client"
import React from 'react'
import { Building2, Calendar, FileText, Shield, Award, Download } from 'lucide-react'
import Chapters from '@/components/gsr/Chapters'
import Appendix from '@/components/gsr/Appendix'

const GSRNotes = () => {
  const handleDownloadPDF = () => {
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, open PDF directly in browser
      window.open('/Digital SCR G&SR 2020 upto AS 21.pdf', '_blank');
    } else {
      // For desktop devices, trigger download
      const link = document.createElement('a');
      link.href = '/Digital SCR G&SR 2020 upto AS 21.pdf';
      link.download = 'Digital SCR G&SR 2020 upto AS 21.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Government Header Section */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Building2 className="w-12 h-12 text-yellow-300" />
              <h1 className="text-4xl sm:text-5xl font-bold">
                GOVERNMENT OF INDIA
              </h1>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                MINISTRY OF RAILWAYS
              </h2>
              <p className="text-xl text-yellow-200">
                (RAILWAY BOARD)
              </p>
            </div>
          </div>

          {/* Document Details */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Left Column */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-yellow-300" />
                <h3 className="text-lg font-semibold">Document Reference</h3>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium">No. 69-RR/4</p>
                <div className="flex items-center space-x-2 text-yellow-200">
                  <Calendar className="w-4 h-4" />
                  <span>DATED THE 11TH FEBRUARY 1976</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-yellow-300" />
                <h3 className="text-lg font-semibold">Document Type</h3>
              </div>
              <p className="text-lg font-medium">RESOLUTION</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-yellow-300" />
                <h3 className="text-lg font-semibold">General Rules</h3>
              </div>
              <p className="text-lg leading-relaxed">
                General Rules for Indian Railways (Open Lines) 1976 administered by the
                Government and for the time being used for the public carriage of passengers, 
                animals or goods.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-16 h-1 bg-yellow-300 rounded-full"></div>
            <div className="w-8 h-1 bg-yellow-300 rounded-full"></div>
            <div className="w-16 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* GSR Chapters Component */}
      <Chapters />
      <Appendix />
      {/* Download PDF Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="flex flex-col gap-4 items-center justify-center space-x-3 mb-6">
              <FileText className="w-12 h-12 text-yellow-300" />
              <h2 className="lg:text-3xl text-2xl font-bold text-white">
                Download Complete G&SR Document
              </h2>
            </div>
            
            <p className="lg:text-xl text-base text-blue-100 mb-8 leading-relaxed">
              Get the complete Digital SCR G&SR 2020 document with all amendments up to AS 21. 
              Perfect for offline study and reference.
            </p>

            <button
              onClick={handleDownloadPDF}
              className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-medium text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 rounded-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3">
                <Download className="w-6 h-6 animate-pulse" />
                <span>Download PDF</span>
              </div>
            </button>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default GSRNotes