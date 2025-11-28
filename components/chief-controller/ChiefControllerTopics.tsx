"use client"
import React, { useState } from 'react'
import { Gauge, Clock, Ruler, FileText, ChevronDown, ChevronUp } from 'lucide-react'
import SpeedRestrictions from './SpeedRestrictions'
import Timings from './Timings'
import Distances from './Distances'
import Authorities from './Authorities'

const ChiefControllerTopics = () => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(prev => prev === topicId ? null : topicId)
  }

  const topics = [
    {
      id: 'speed-restrictions',
      title: 'Speed Restrictions',
      icon: <Gauge className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      description: 'Comprehensive guide to speed restrictions for AOM aspirants',
      component: SpeedRestrictions
    },
    {
      id: 'timings',
      title: 'Timings',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Comprehensive guide to timings for AOM aspirants',
      component: Timings
    },
    {
      id: 'distances',
      title: 'Distances',
      icon: <Ruler className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      description: 'Comprehensive guide to distances for AOM aspirants',
      component: Distances
    },
    {
      id: 'authorities',
      title: 'Authorities',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Comprehensive guide to authorities for AOM aspirants',
      component: Authorities
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 lg:p-3 p-2 rounded-full">
                <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHIEF CONTROLLER
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">COMPLETE TOPICS INDEX</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide covering Speed Restrictions, Timings, Distances, and Authorities - 
              Essential reference material for AOM aspirants in Indian Railways.
            </p>
            <div className="mt-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Chief Controller - Complete Study Material Reference</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {topics.map((topic) => {
                const TopicComponent = topic.component
                return (
                  <div
                    key={topic.id}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                  >
                    {/* Topic Header */}
                    <div 
                      className={`bg-gradient-to-r ${topic.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                      onClick={() => toggleTopic(topic.id)}
                    >
                      <div className="flex flex-col items-center text-center">
                        {/* Topic Icon */}
                        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                          {topic.icon}
                        </div>
                        
                        {/* Topic Title and Description */}
                        <div className="mb-4">
                          <h2 className="text-xl sm:text-2xl font-bold">
                            {topic.title}
                          </h2>
                          <p className="text-white/80 text-sm mt-2">
                            {topic.description}
                          </p>
                        </div>
                        
                        {/* Horizontal Line */}
                        <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                        
                        {/* Expand/Collapse Icon */}
                        <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                          {expandedTopic === topic.id ? (
                            <ChevronUp className="w-6 h-6 text-white" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-white" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Topic Content */}
                    {expandedTopic === topic.id && (
                      <div className="py-4 lg:px-4 px-2">
                        <TopicComponent />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-center space-x-3 mb-4">
                  <FileText className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete Chief Controller Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all essential topics for Chief Controller examination, 
                  providing complete reference material for Speed Restrictions, Timings, Distances, and Authorities 
                  required for AOM aspirants in Indian Railways.
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

export default ChiefControllerTopics

