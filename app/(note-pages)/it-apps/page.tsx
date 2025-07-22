"use client"
import React from 'react'
import UTSApplication from '@/components/it-apps/UTS'
import PRSApplication from '@/components/it-apps/PRS'
import NTES from '@/components/it-apps/NTES';
import RSHC from '@/components/it-apps/RSHC';
import COA from '@/components/it-apps/COA';
import ICMS from '@/components/it-apps/ICMS';
import PMS from '@/components/it-apps/PMS';
import TMS from '@/components/it-apps/TMS';
import TDMS from '@/components/it-apps/TDMS';
import RSMS from '@/components/it-apps/RSMS';
import EWSS from '@/components/it-apps/EWSS';
import ESS from '@/components/it-apps/ESS';
import EDrishti from '@/components/it-apps/EDrishti';

const ITApps = () => {
  const itApplications = [
    {
      title: "1. FOIS (Freight Operations Information System)",
      description: "Comprehensive freight management system for tracking and managing freight operations",
      features: [
        "Real-time tracking of freight trains",
        "Wagon management and allocation",
        "Freight billing and revenue management",
        "Customer relationship management",
        "Performance analytics and reporting"
      ],
      icon: "🚂"
    },
    {
      title: "2. COIS (Coaching Operations Information System)",
      description: "Management system for coaching stock and passenger services",
      features: [
        "Coaching stock management",
        "Maintenance scheduling",
        "Allocation and deployment",
        "Performance monitoring",
        "Quality control"
      ],
      icon: "🚃"
    },
    {
      title: "3. IRCTC (Indian Railway Catering and Tourism Corporation)",
      description: "E-commerce platform for railway services",
      features: [
        "Online food ordering",
        "Tourism packages",
        "Hotel bookings",
        "Payment gateway integration",
        "Customer support"
      ],
      icon: "🍽️"
    },
    {
      title: "4. CRIS (Centre for Railway Information Systems)",
      description: "IT arm of Indian Railways for system development",
      features: [
        "Software development",
        "System integration",
        "Data center management",
        "Network infrastructure",
        "Cybersecurity"
      ],
      icon: "💻"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              IT APPLICATIONS IN RAILWAYS
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Information Technology plays a crucial role in modernizing Indian Railways. 
              This section covers various IT applications and systems used in railway operations.
            </p>
          </div>

          {/* Main IT Applications */}
          <div className="space-y-8 mb-12">
            {itApplications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                {/* Icon for small devices - centered at top */}
                <div className="flex justify-center mb-4 lg:hidden">
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-3 rounded-full backdrop-blur-sm">
                    <span className="text-3xl">{app.icon}</span>
                  </div>
                </div>
                
                {/* Original layout for medium and larger devices */}
                <div className="hidden lg:flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-3 rounded-full backdrop-blur-sm mr-4">
                    <span className="text-3xl">{app.icon}</span>
                  </div>
                  <div>
                    <h2 className="lg:text-2xl text-xl font-bold text-white mb-2">{app.title}</h2>
                    <p className="text-gray-300 lg:text-base text-sm">{app.description}</p>
                  </div>
                </div>
                
                {/* Title and description for small devices */}
                <div className="lg:hidden mb-6">
                  <h2 className="lg:text-2xl text-xl font-bold text-white mb-2 text-center">{app.title}</h2>
                  <p className="text-gray-300 lg:text-base text-sm text-center">{app.description}</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                  <h3 className="lg:text-lg text-base font-semibold text-blue-200 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Key Features:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-200 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-2xl shadow-2xl p-6 lg:p-8 text-white border border-green-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 mb-12">
            <h2 className="lg:text-2xl text-xl font-bold mb-6 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Benefits of IT in Railways
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group hover:transform hover:translate-y-2 transition-all duration-300">
                <div className="bg-white/20 p-4 rounded-full mb-4 inline-block group-hover:bg-white/30 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="lg:text-lg text-base font-semibold mb-2">Operational Efficiency</h3>
                <p className="text-sm opacity-90">Improved productivity and streamlined operations</p>
              </div>
              
              <div className="text-center group hover:transform hover:translate-y-2 transition-all duration-300">
                <div className="bg-white/20 p-4 rounded-full mb-4 inline-block group-hover:bg-white/30 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="lg:text-lg text-base font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-sm opacity-90">Better service delivery and user experience</p>
              </div>
              
              <div className="text-center group hover:transform hover:translate-y-2 transition-all duration-300">
                <div className="bg-white/20 p-4 rounded-full mb-4 inline-block group-hover:bg-white/30 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="lg:text-lg text-base font-semibold mb-2">Revenue Enhancement</h3>
                <p className="text-sm opacity-90">Increased revenue through digital services</p>
              </div>
            </div>
          </div>

          {/* IT Applications Components */}
          <div className="space-y-8">
            <UTSApplication />
            <PRSApplication />
            <NTES/>
            <RSHC/>
            <COA/>
            <ICMS/>
            <PMS/>
            <TMS/>
            <TDMS/>
            <RSMS/>
            <EWSS/>
            <ESS/>
            <EDrishti/>
          </div>

          {/* Important Notes */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 lg:p-8 border border-white/20 mt-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Important Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 backdrop-blur-sm group hover:bg-blue-500/15 transition-all duration-300">
                <h4 className="text-lg font-semibold text-blue-200 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Digital Transformation
                </h4>
                <p className="text-gray-300 text-sm">
                  Indian Railways is undergoing massive digital transformation to improve efficiency and customer service.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 backdrop-blur-sm group hover:bg-green-500/15 transition-all duration-300">
                <h4 className="text-lg font-semibold text-green-200 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Cybersecurity
                </h4>
                <p className="text-gray-300 text-sm">
                  With increased digitization, cybersecurity has become crucial for protecting railway systems and data.
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

export default ITApps