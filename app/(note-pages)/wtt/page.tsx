'use client'
import React from 'react'
import { Download, FileText } from 'lucide-react'

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

  const wttTopics = [
    {
      title: "Working Time Table (WTT) - Train Schedule",
      description: "Important document used to manage train timings in Railways",
      icon: "⏰"
    },
    {
      title: "Definition of WTT",
      content: "Working Time Table is an official document that contains train timings, distances between stations, stops, and other important information in Railways."
    },
    {
      title: "Key Features of WTT",
      points: [
        "Train numbers and their types",
        "Origin and destination stations",
        "Stopping times at each station",
        "Train routes and distances",
        "Speed limits and restrictions",
        "Crossing and overtaking timings"
      ]
    },
    {
      title: "Types of WTT",
      types: [
        {
          name: "Main Line WTT",
          description: "For main line routes"
        },
        {
          name: "Branch Line WTT", 
          description: "For branch line routes"
        },
        {
          name: "Suburban WTT",
          description: "For suburban train services"
        },
        {
          name: "Freight WTT",
          description: "For freight train services"
        }
      ]
    },
    {
      title: "WTT Preparation Process",
      steps: [
        "Analysis of train routes",
        "Calculation of distances between stations",
        "Determination of stopping times",
        "Planning of crossing timings",
        "Determination of speed profiles",
        "Official approval"
      ]
    },
    {
      title: "Importance of WTT",
      importance: [
        "Timely management of train services",
        "Passenger convenience",
        "Efficiency of railway operations",
        "Maintenance of safety standards",
        "Resource optimization"
      ]
    }
  ];

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

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {wttTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Topic Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  {topic.icon && <span className="text-2xl">{topic.icon}</span>}
                  {topic.title}
                </h2>
                {topic.description && (
                  <p className="text-blue-100 mt-2">{topic.description}</p>
                )}
              </div>

              {/* Topic Content */}
              <div className="p-6">
                {topic.content && (
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {topic.content}
                  </p>
                )}

                {topic.points && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Points:</h3>
                    <ul className="space-y-2">
                      {topic.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {topic.types && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of WTT:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {topic.types.map((type, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{type.name}</h4>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {topic.steps && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Preparation Process:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {topic.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg">
                          <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {topic.importance && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Importance:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {topic.importance.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
                          <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm">
                            ✓
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center gap-3">
              <span className="text-2xl">💡</span>
              Important Notes
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>• WTT is an important document for railway operations</p>
              <p>• It is updated every year</p>
              <p>• Train services are operated according to WTT</p>
              <p>• It serves as a guide for passengers and railway staff</p>
            </div>
          </div>
        </div>

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