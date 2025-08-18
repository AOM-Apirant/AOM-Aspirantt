"use client"
import React, { useState } from 'react'
import { BookOpen, FileText, AlertTriangle, CheckCircle, AlertCircle, Gavel, Heart, ChevronDown, ChevronUp, FileSpreadsheet } from 'lucide-react'

const AMAppendix = () => {
  const [expandedAppendix, setExpandedAppendix] = useState<number[]>([])

  const toggleAppendix = (appendixId: number) => {
    setExpandedAppendix(prev => {
      // If appendix is already expanded, collapse it
      if (prev.includes(appendixId)) {
        return prev.filter(id => id !== appendixId)
      }
      // If appendix is collapsed, expand it and collapse all others (accordion behavior)
      return [appendixId]
    })
  }

  const appendices = [
    {
      id: 1,
      title: "DISASTER MANAGEMENT",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Comprehensive disaster management procedures and protocols",
      pageRange: "135 to 138",
      content: [
        "Emergency response procedures",
        "Disaster coordination protocols",
        "Resource mobilization guidelines",
        "Communication systems during disasters"
      ]
    },
    {
      id: 2,
      title: "FIRST AID",
      icon: <Heart className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Essential first aid procedures and medical response guidelines",
      pageRange: "139 to 147",
      content: [
        "Basic first aid procedures",
        "Medical equipment usage",
        "Emergency medical protocols",
        "Injury assessment guidelines"
      ]
    },
    {
      id: 3,
      title: "EXTRACT FROM THE RAILWAYS ACT, 1989",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Relevant sections from the Railways Act applicable to accident management",
      pageRange: "148 to 155",
      content: [
        "Legal provisions for accidents",
        "Railway administration responsibilities",
        "Statutory requirements",
        "Compliance guidelines"
      ]
    },
    {
      id: 4,
      title: "WEATHER WARNING - CYCLONE WARNINGS",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Weather-related safety protocols and cyclone warning systems",
      pageRange: "156 to 170",
      content: [
        "Cyclone warning procedures",
        "Weather monitoring systems",
        "Safety protocols during extreme weather",
        "Emergency response coordination"
      ]
    },
    {
      id: 5,
      title: "PUNISHMENT NORMS IN ACCIDENT CASES",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Disciplinary procedures and punishment guidelines for accident cases",
      pageRange: "171 to 176",
      content: [
        "Disciplinary procedures",
        "Punishment guidelines",
        "Accountability measures",
        "Compliance requirements"
      ]
    },
    {
      id: 6,
      title: "SPECIMEN FORMS",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Standard forms and templates for accident reporting and documentation",
      pageRange: "177 to 208",
      content: [
        "Accident report forms",
        "Investigation templates",
        "Documentation standards",
        "Reporting procedures"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              ACCIDENT MANUAL APPENDIX
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-blue-300 mb-4">Comprehensive Reference Guide for Railway Accidents</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Appendix Index for Railway Accident Manual - Essential reference materials covering disaster management, 
              first aid, legal extracts, weather warnings, punishment norms, and specimen forms for comprehensive accident response.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {appendices.map((appendix) => (
                <div
                  key={appendix.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Appendix Header */}
                  <div 
                    className={`bg-gradient-to-r ${appendix.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleAppendix(appendix.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Appendix Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {appendix.icon}
                      </div>
                      
                      {/* Appendix Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          APPENDIX - {appendix.id}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                          {appendix.title}
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                          {appendix.description}
                        </p>
                      </div>
                      
                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Page Range */}
                      <p className="text-white/70 text-sm font-medium mb-4">
                        Pages {appendix.pageRange}
                      </p>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedAppendix.includes(appendix.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Appendix Content */}
                  {expandedAppendix.includes(appendix.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {appendix.content.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium">
                                {item}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete Appendix Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive appendix guide covers all 6 appendices of the Accident Manual, providing essential reference materials 
                  for disaster management, first aid procedures, legal extracts, weather protocols, disciplinary guidelines, and documentation standards.
                </p>
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

export default AMAppendix