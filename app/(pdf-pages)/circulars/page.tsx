'use client'
import React, { useState } from 'react'
import { 
  alertAdvicePdfFiles, 
  flyLeafPdfFiles,
  operatingSafetyCircularPdfFiles,
  operatingGeneralCircularPdfFiles,
  fortnightlySafetyBulletinPdfFiles,
  monthlySafetyBulletinPdfFiles,
  safetyDrivePdfFiles,
  ruleOfTheMonthPdfFiles
} from '@/assets/circulars'
import { FileText, Download, Calendar, AlertTriangle, Clock, CheckCircle, Loader2, Shield, BookOpen, BarChart3, Zap } from 'lucide-react'

const Circulars = () => {
  const [loadingFile, setLoadingFile] = useState<string | null>(null)
  const handlePdfClick = async (filename: string) => {
    if (filename) {
      setLoadingFile(filename)
      try {
        // Check if it's a mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        
        if (isMobile) {
          // For mobile devices, try multiple approaches
          const pdfUrl = `/circularpdfs/${filename}`
          
          // Method 1: Try to open directly first (works on some mobile browsers)
          try {
            const directWindow = window.open(pdfUrl, '_blank')
            
            // If direct opening fails, try download approach
            if (!directWindow || directWindow.closed) {
              throw new Error('Direct opening failed')
            }
                     } catch {
            // Method 2: Download and then open
            try {
              const response = await fetch(pdfUrl)
              if (!response.ok) {
                throw new Error(`HTTP ${response.status}`)
              }
              
              const blob = await response.blob()
              const url = window.URL.createObjectURL(blob)
              
              // Create a temporary link element for download
              const link = document.createElement('a')
              link.href = url
              link.download = filename
              link.style.display = 'none'
              
              // Trigger download
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
              
              // Try to open the PDF after download
              setTimeout(() => {
                try {
                  window.open(url, '_blank')
                                 } catch {
                  console.log('Could not open PDF automatically, user can access from downloads')
                }
              }, 1500)
              
              // Clean up the URL object after some time
              setTimeout(() => {
                window.URL.revokeObjectURL(url)
              }, 10000)
              
            } catch (downloadError) {
              console.error('Download failed:', downloadError)
              // Final fallback: try direct opening again
              window.open(pdfUrl, '_blank')
            }
          }
        } else {
          // For desktop, open directly in new tab
          window.open(`/circularpdfs/${filename}`, '_blank')
        }
      } catch (error) {
        console.error('Error handling PDF:', error)
        // Ultimate fallback
        window.open(`/circularpdfs/${filename}`, '_blank')
      } finally {
        setLoadingFile(null)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              South Central Railway Circulars
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest railway circulars, alert advice, and fly leaf documents 
              for AOM aspirants. Access official documents anytime, anywhere.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-red-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-red-500/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{alertAdvicePdfFiles.length}</h3>
              <p className="text-red-200">Alert Advice</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-green-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-green-500/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="lg:w-8 lg:h-8 w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{flyLeafPdfFiles.length}</h3>
              <p className="text-green-200">Fly Leaf</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-orange-500/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{operatingSafetyCircularPdfFiles.length}</h3>
              <p className="text-orange-200">Operating Safety Circular</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-blue-500/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{operatingGeneralCircularPdfFiles.length}</h3>
              <p className="text-blue-200">Operating General Circular</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-purple-500/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{fortnightlySafetyBulletinPdfFiles.length}</h3>
              <p className="text-purple-200">Fortnightly Safety Bulletin</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-teal-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-teal-500/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{monthlySafetyBulletinPdfFiles.length}</h3>
              <p className="text-teal-200">Monthly Safety Bulletin</p>
            </div>
            
            <div className="bg-gradient-to-br from-zinc-500/20 to-gray-500/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-zinc-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-zinc-500/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{safetyDrivePdfFiles.length}</h3>
              <p className="text-zinc-200">Safety Drive</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-amber-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-amber-500/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{ruleOfTheMonthPdfFiles.length}</h3>
              <p className="text-amber-200">Rule of the Month</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Alert Advice Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-3 text-center items-center mb-6">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-full mr-4 shadow-lg">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Alert Advice</h2>
                  <p className="text-gray-300">Latest alert advice circulars for 2025</p>
                </div>
              </div>

              <div className="space-y-3">
                {alertAdvicePdfFiles.map((file, index) => (
                  <div
                    key={index}
                    className={`py-4 lg:px-4 px-2 rounded-lg border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                      file.filename 
                        ? 'border-red-400/30 hover:border-red-400 bg-gradient-to-r from-red-500/10 to-pink-500/10 hover:from-red-500/20 hover:to-pink-500/20' 
                        : 'border-gray-400/30 bg-gray-500/10 opacity-60 cursor-not-allowed'
                    }`}
                    onClick={() => file.filename && handlePdfClick(file.filename)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3 ${
                          file.filename ? 'bg-red-500/20' : 'bg-gray-500/20'
                        }`}>
                          <FileText className={`w-4 h-4 ${
                            file.filename ? 'text-red-400' : 'text-gray-400'
                          }`} />
                        </div>
                        <div>
                          <h3 className={`font-medium ${
                            file.filename ? 'text-white' : 'text-gray-400'
                          }`}>
                            {file.name}
                          </h3>
                          <p className={`text-sm ${
                            file.filename ? 'text-red-200' : 'text-gray-500'
                          }`}>
                            {file.filename ? 'Available for download' : 'Coming soon'}
                          </p>
                        </div>
                      </div>
                                             {file.filename && (
                         loadingFile === file.filename ? (
                           <Loader2 className="w-5 h-5 text-red-400 animate-spin" />
                         ) : (
                           <Download className="w-5 h-5 text-red-400 hover:text-red-300 transition-colors" />
                         )
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fly Leaf Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-3 text-center items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full mr-4 shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Fly Leaf</h2>
                  <p className="text-gray-300">Monthly fly leaf documents for 2025</p>
                </div>
              </div>

              <div className="space-y-3">
                {flyLeafPdfFiles.map((file, index) => (
                  <div
                    key={index}
                    className={`py-4 lg:px-4 px-2 rounded-lg border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                      file.filename 
                        ? 'border-green-400/30 hover:border-green-400 bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20' 
                        : 'border-gray-400/30 bg-gray-500/10 opacity-60 cursor-not-allowed'
                    }`}
                    onClick={() => file.filename && handlePdfClick(file.filename)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3 ${
                          file.filename ? 'bg-green-500/20' : 'bg-gray-500/20'
                        }`}>
                          <Calendar className={`w-4 h-4 ${
                            file.filename ? 'text-green-400' : 'text-gray-400'
                          }`} />
                        </div>
                        <div>
                          <h3 className={`font-medium ${
                            file.filename ? 'text-white' : 'text-gray-400'
                          }`}>
                            {file.name}
                          </h3>
                          <p className={`text-sm ${
                            file.filename ? 'text-green-200' : 'text-gray-500'
                          }`}>
                            {file.filename ? 'Available for download' : 'Coming soon'}
                          </p>
                        </div>
                      </div>
                                             {file.filename && (
                         loadingFile === file.filename ? (
                           <Loader2 className="w-5 h-5 text-green-400 animate-spin" />
                         ) : (
                           <Download className="w-5 h-5 text-green-400 hover:text-green-300 transition-colors" />
                         )
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Operating Safety Circular Section */}
          <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-3 text-center items-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full mr-4 shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Operating Safety Circular</h2>
                <p className="text-gray-300">Safety circulars for 2025</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {operatingSafetyCircularPdfFiles.map((file, index) => (
                <div
                  key={index}
                  className={`py-4 lg:px-4 px-2 rounded-lg border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                    file.filename 
                      ? 'border-orange-400/30 hover:border-orange-400 bg-gradient-to-r from-orange-500/10 to-red-500/10 hover:from-orange-500/20 hover:to-red-500/20' 
                      : 'border-gray-400/30 bg-gray-500/10 opacity-60 cursor-not-allowed'
                  }`}
                  onClick={() => file.filename && handlePdfClick(file.filename)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        file.filename ? 'bg-orange-500/20' : 'bg-gray-500/20'
                      }`}>
                        <Shield className={`w-4 h-4 ${
                          file.filename ? 'text-orange-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`font-medium ${
                          file.filename ? 'text-white' : 'text-gray-400'
                        }`}>
                          {file.name}
                        </h3>
                        <p className={`text-sm ${
                          file.filename ? 'text-orange-200' : 'text-gray-500'
                        }`}>
                          {file.filename ? 'Available for download' : 'Coming soon'}
                        </p>
                      </div>
                    </div>
                    {file.filename && (
                      loadingFile === file.filename ? (
                        <Loader2 className="w-5 h-5 text-orange-400 animate-spin" />
                      ) : (
                        <Download className="w-5 h-5 text-orange-400 hover:text-orange-300 transition-colors" />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operating General Circular Section */}
          <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-3 text-center items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full mr-4 shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Operating General Circular</h2>
                <p className="text-gray-300">General operating circulars for 2025</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {operatingGeneralCircularPdfFiles.map((file, index) => (
                <div
                  key={index}
                  className={`py-4 lg:px-4 px-2 rounded-lg border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                    file.filename 
                      ? 'border-blue-400/30 hover:border-blue-400 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 hover:from-blue-500/20 hover:to-indigo-500/20' 
                      : 'border-gray-400/30 bg-gray-500/10 opacity-60 cursor-not-allowed'
                  }`}
                  onClick={() => file.filename && handlePdfClick(file.filename)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        file.filename ? 'bg-blue-500/20' : 'bg-gray-500/20'
                      }`}>
                        <BookOpen className={`w-4 h-4 ${
                          file.filename ? 'text-blue-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`font-medium ${
                          file.filename ? 'text-white' : 'text-gray-400'
                        }`}>
                          {file.name}
                        </h3>
                        <p className={`text-sm ${
                          file.filename ? 'text-blue-200' : 'text-gray-500'
                        }`}>
                          {file.filename ? 'Available for download' : 'Coming soon'}
                        </p>
                      </div>
                    </div>
                    {file.filename && (
                      loadingFile === file.filename ? (
                        <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                      ) : (
                        <Download className="w-5 h-5 text-blue-400 hover:text-blue-300 transition-colors" />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fortnightly Safety Bulletin Section */}
          <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-3 text-center items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mr-4 shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Fortnightly Safety Bulletin</h2>
                <p className="text-gray-300">Bi-weekly safety bulletins for 2025</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {fortnightlySafetyBulletinPdfFiles.map((file, index) => (
                <div
                  key={index}
                  className={`py-4 lg:px-4 px-2 rounded-lg border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                    file.filename 
                      ? 'border-purple-400/30 hover:border-purple-400 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20' 
                      : 'border-gray-400/30 bg-gray-500/10 opacity-60 cursor-not-allowed'
                  }`}
                  onClick={() => file.filename && handlePdfClick(file.filename)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        file.filename ? 'bg-purple-500/20' : 'bg-gray-500/20'
                      }`}>
                        <BarChart3 className={`w-4 h-4 ${
                          file.filename ? 'text-purple-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`font-medium ${
                          file.filename ? 'text-white' : 'text-gray-400'
                        }`}>
                          {file.name}
                        </h3>
                        <p className={`text-sm ${
                          file.filename ? 'text-purple-200' : 'text-gray-500'
                        }`}>
                          {file.filename ? 'Available for download' : 'Coming soon'}
                        </p>
                      </div>
                    </div>
                    {file.filename && (
                      loadingFile === file.filename ? (
                        <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
                      ) : (
                        <Download className="w-5 h-5 text-purple-400 hover:text-purple-300 transition-colors" />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Safety Bulletin Section */}
          <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-3 text-center items-center mb-6">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-full mr-4 shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Monthly Safety Bulletin</h2>
                <p className="text-gray-300">Monthly safety bulletins for 2025</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {monthlySafetyBulletinPdfFiles.map((file, index) => (
                <div
                  key={index}
                  className={`py-4 lg:px-4 px-2 rounded-lg border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                    file.filename 
                      ? 'border-teal-400/30 hover:border-teal-400 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 hover:from-teal-500/20 hover:to-cyan-500/20' 
                      : 'border-gray-400/30 bg-gray-500/10 opacity-60 cursor-not-allowed'
                  }`}
                  onClick={() => file.filename && handlePdfClick(file.filename)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        file.filename ? 'bg-teal-500/20' : 'bg-gray-500/20'
                      }`}>
                        <BarChart3 className={`w-4 h-4 ${
                          file.filename ? 'text-teal-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`font-medium ${
                          file.filename ? 'text-white' : 'text-gray-400'
                        }`}>
                          {file.name}
                        </h3>
                        <p className={`text-sm ${
                          file.filename ? 'text-teal-200' : 'text-gray-500'
                        }`}>
                          {file.filename ? 'Available for download' : 'Coming soon'}
                        </p>
                      </div>
                    </div>
                    {file.filename && (
                      loadingFile === file.filename ? (
                        <Loader2 className="w-5 h-5 text-teal-400 animate-spin" />
                      ) : (
                        <Download className="w-5 h-5 text-teal-400 hover:text-teal-300 transition-colors" />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Drive Section */}
          <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-3 text-center items-center mb-6">
              <div className="bg-gradient-to-r from-zinc-500 to-gray-500 p-3 rounded-full mr-4 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Safety Drive</h2>
                <p className="text-gray-300">Safety drive circulars for 2025</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {safetyDrivePdfFiles.map((file, index) => (
                <div
                  key={index}
                  className={`py-4 lg:px-4 px-2 rounded-lg border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                    file.filename 
                      ? 'border-zinc-400/30 hover:border-zinc-400 bg-gradient-to-r from-zinc-500/10 to-gray-500/10 hover:from-zinc-500/20 hover:to-gray-500/20' 
                      : 'border-gray-400/30 bg-gray-500/10 opacity-60 cursor-not-allowed'
                  }`}
                  onClick={() => file.filename && handlePdfClick(file.filename)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        file.filename ? 'bg-zinc-500/20' : 'bg-gray-500/20'
                      }`}>
                        <Shield className={`w-4 h-4 ${
                          file.filename ? 'text-zinc-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`font-medium ${
                          file.filename ? 'text-white' : 'text-gray-400'
                        }`}>
                          {file.name}
                        </h3>
                        <p className={`text-sm ${
                          file.filename ? 'text-zinc-200' : 'text-gray-500'
                        }`}>
                          {file.filename ? 'Available for download' : 'Coming soon'}
                        </p>
                      </div>
                    </div>
                    {file.filename && (
                      loadingFile === file.filename ? (
                        <Loader2 className="w-5 h-5 text-zinc-400 animate-spin" />
                      ) : (
                        <Download className="w-5 h-5 text-zinc-400 hover:text-zinc-300 transition-colors" />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rule of the Month Section */}
          <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-3 text-center items-center mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-full mr-4 shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Rule of the Month</h2>
                <p className="text-gray-300">Monthly rule highlights for 2025</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {ruleOfTheMonthPdfFiles.map((file, index) => (
                <div
                  key={index}
                  className={`py-4 lg:px-4 px-2 rounded-lg border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                    file.filename 
                      ? 'border-amber-400/30 hover:border-amber-400 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 hover:from-amber-500/20 hover:to-yellow-500/20' 
                      : 'border-gray-400/30 bg-gray-500/10 opacity-60 cursor-not-allowed'
                  }`}
                  onClick={() => file.filename && handlePdfClick(file.filename)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        file.filename ? 'bg-amber-500/20' : 'bg-gray-500/20'
                      }`}>
                        <BookOpen className={`w-4 h-4 ${
                          file.filename ? 'text-amber-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`font-medium ${
                          file.filename ? 'text-white' : 'text-gray-400'
                        }`}>
                          {file.name}
                        </h3>
                        <p className={`text-sm ${
                          file.filename ? 'text-amber-200' : 'text-gray-500'
                        }`}>
                          {file.filename ? 'Available for download' : 'Coming soon'}
                        </p>
                      </div>
                    </div>
                    {file.filename && (
                      loadingFile === file.filename ? (
                        <Loader2 className="w-5 h-5 text-amber-400 animate-spin" />
                      ) : (
                        <Download className="w-5 h-5 text-amber-400 hover:text-amber-300 transition-colors" />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Official Documents</h3>
              <p className="text-gray-300 text-sm">
                All circulars are official documents from Indian Railways, ensuring authenticity and reliability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-time Updates</h3>
              <p className="text-gray-300 text-sm">
                Stay updated with the latest circulars and notifications as they are released.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="bg-emerald-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Easy Access</h3>
              <p className="text-gray-300 text-sm">
                Download and access circulars anytime, anywhere with our mobile-friendly platform.
              </p>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-2 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-3 items-center justify-center">
                <span className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                Important Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">⚠️</span>
                    <p className="text-gray-200 text-sm">
                      All circulars are official documents from Indian Railways. Please ensure you have the latest versions for your AOM preparation.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">📱</span>
                    <p className="text-gray-200 text-sm">
                      Documents are optimized for mobile viewing and can be downloaded for offline access.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">🔄</span>
                    <p className="text-gray-200 text-sm">
                      Documents marked as &quot;Coming soon&quot; will be available shortly as they are processed.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">📊</span>
                    <p className="text-gray-200 text-sm">
                      Regular updates ensure you have access to the most current railway information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Circulars