"use client"
import React from 'react'

const IndustrialRelations = () => {
  const handleDownloadPDF = async () => {
    try {
      const response = await fetch('/syllabus/Industrial Relations.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Industrial Relations.pdf';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL object
      window.URL.revokeObjectURL(url);
      
      // For mobile devices, try to open the PDF after download
      if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Small delay to ensure download starts
        setTimeout(() => {
          window.open('/syllabus/Industrial Relations.pdf', '_blank');
        }, 1000);
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Fallback to direct link
      window.open('/syllabus/Industrial Relations.pdf', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDUSTRIAL RELATIONS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Indian Railways</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive overview of industrial relations in Indian Railways, one of the world&apos;s largest employers with over 1.2 million employees as of 2024
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Overview
            </h2>
            <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
              Industrial relations in Indian Railways have historically been shaped by a complex interplay of trade unions, government policies, and the railway&apos;s critical role in India&apos;s economy and social fabric. The system has generally maintained peaceful relations, with occasional disruptions from strikes, and is supported by structured mechanisms to ensure harmonious labor-management interactions.
            </p>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-6 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏢</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Trade Unions Evolution</h3>
                    <p className="text-gray-200 text-sm">First labor organization emerged in 1918, followed by AITUC in 1920 and AIRF in 1922</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Legal Recognition</h3>
                    <p className="text-gray-200 text-sm">Trade Union Act of 1926 granted legal recognition to registered unions</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🤝</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Union Mergers</h3>
                    <p className="text-gray-200 text-sm">AIRF and INRWF merged in 1953 to form NFIR</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Employee Strength</h3>
                    <p className="text-gray-200 text-sm">1.4 million regular employees plus 300,000 casual workers</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💰</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Labor Intensive</h3>
                    <p className="text-gray-200 text-sm">Pay and allowances account for 60% of Railways&apos; working expenses</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Productivity Bonus</h3>
                    <p className="text-gray-200 text-sm">Productivity Linked Bonus equivalent to 78 days&apos; wages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mechanisms Section */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-6 mb-6 text-white border border-indigo-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <h2 className="lg:text-3xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 text-center items-center justify-center">
              <svg className="lg:w-8 lg:h-8 w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mechanisms for Smooth Industrial Relations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Recognition of Unions - Official recognition fostering dialogue</span>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Permanent Negotiating Machinery (PNM) - Regular discussions</span>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Fort-Nightly Meetings (FNM) - Address immediate concerns</span>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Joint Consultative Machinery (JCM) - Collaborative decision-making</span>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Participation of Railway Employees in Management (PREM)</span>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">IRPS - Group &apos;A&apos; civil service cadre managing HR</span>
              </div>
            </div>
          </div>

          {/* Historical Context Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-6 flex lg:flex-row flex-col gap-3 text-center items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Historical Context & Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🕰️</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Peaceful Relations</h3>
                    <p className="text-gray-200 text-sm">Generally peaceful with notable exceptions during strikes</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏭</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Early Labor Movements</h3>
                    <p className="text-gray-200 text-sm">Influenced by poor working conditions and safety needs</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Early Challenges</h3>
                    <p className="text-gray-200 text-sm">Long hours and low wages prompted union formation</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">👁️</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Vigilance Measures</h3>
                    <p className="text-gray-200 text-sm">Heightened scrutiny of employees including contractual staff</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Safety Focus</h3>
                    <p className="text-gray-200 text-sm">Prevent sabotage in train operations</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Discipline Maintenance</h3>
                    <p className="text-gray-200 text-sm">Ongoing efforts to maintain discipline and safety</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Developments Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Electrification & Infrastructure */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 text-center items-center justify-center">
                <span className="mr-3">⚡</span>
                Modernization Efforts
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-200 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                  </svg>
                  96.59% broad-gauge network electrification
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-200 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                  </svg>
                  Dedicated Freight Corridor projects
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-200 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                  </svg>
                  Improved working conditions
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-200 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                  </svg>
                  Enhanced operational efficiency
                </li>
              </ul>
            </div>

            {/* Private Investment & Digital Tech */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 text-center items-center justify-center">
                <span className="mr-3">💻</span>
                Digital Transformation
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-200 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                  </svg>
                  $7.5 billion potential investments
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-200 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                  </svg>
                  Station redevelopment projects
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-200 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                  </svg>
                  Digital technologies & data analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-200 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                  </svg>
                  Impact on workforce roles
                </li>
              </ul>
            </div>
          </div>

          {/* Critical Perspective Section */}
          <div className="bg-gradient-to-r from-red-500 via-pink-600 to-orange-600 rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 text-white border border-red-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <h2 className="lg:text-3xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 text-center items-center justify-center">
              <svg className="lg:w-8 lg:h-8 w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Critical Perspective
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Government-controlled structures may limit union autonomy</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Privatization could lead to fare hikes and reduced accessibility</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Internal union conflicts suggest continuous effort needed</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Safety and modernization must balance employee grievances</span>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 mb-8">
            <h2 className="lg:text-4xl text-xl font-bold text-white mb-6 text-center">Key Statistics</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 mb-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  1.4M+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Regular Employees</h3>
                <p className="text-gray-200 text-lg">Indian Railways workforce</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 mb-3">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-indigo-500/50 transition-shadow">
                  300K+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Casual Workers</h3>
                <p className="text-gray-200 text-lg">Additional workforce</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 mb-3">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                  60%
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Working Expenses</h3>
                <p className="text-gray-200 text-lg">Pay and allowances</p>
              </div>
            </div>
          </div>

          {/* Download PDF Section */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 rounded-2xl shadow-2xl p-8 border border-emerald-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
              <div className="inline-block p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="lg:text-3xl text-2xl font-bold text-white mb-4">Download Industrial Relations in Indian Railways PDF File</h3>
              <p className="text-white/90 lg:text-lg text-base mb-8 max-w-2xl mx-auto">
                Get the complete Industrial Relations guide in PDF format for offline reading and reference
              </p>
                             <button 
                 onClick={handleDownloadPDF}
                 className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/30 group-hover:border-white/50"
               >
                 <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 Download PDF
               </button>
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

export default IndustrialRelations