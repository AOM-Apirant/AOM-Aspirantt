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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      {/* Hero section */}
      <div className="text-center mb-8">
        <h1 className="lg:text-3xl text-xl font-bold text-gray-800 mb-4">IT Applications in Railways</h1>
        <p className="lg:text-base text-sm text-gray-600 max-w-4xl mx-auto">
          Information Technology plays a crucial role in modernizing Indian Railways. 
          This section covers various IT applications and systems used in railway operations.
        </p>
      </div>

      {/* Main IT Applications */}
      <div className="max-w-6xl mx-auto space-y-8">
        {itApplications.map((app, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Icon for small devices - centered at top */}
            <div className="flex justify-center mb-4 md:hidden">
              <span className="text-3xl">{app.icon}</span>
            </div>
            
            {/* Original layout for medium and larger devices */}
            <div className="hidden md:flex items-center mb-6">
              <span className="text-3xl mr-4">{app.icon}</span>
              <div>
                <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-2">{app.title}</h2>
                <p className="text-gray-600 lg:text-base text-sm">{app.description}</p>
              </div>
            </div>
            
            {/* Title and description for small devices */}
            <div className="md:hidden mb-6">
              <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-2 text-center">{app.title}</h2>
              <p className="text-gray-600 lg:text-base text-sm text-center">{app.description}</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="lg:text-lg text-base font-semibold text-gray-800 mb-4">Key Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {app.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

  

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 md:p-8 text-white">
          <h2 className="lg:text-2xl text-xl font-bold mb-6 text-center">Benefits of IT in Railways</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="lg:text-lg text-base font-semibold mb-2">Operational Efficiency</h3>
              <p className="text-sm opacity-90">Improved productivity and streamlined operations</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="lg:text-lg text-base font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-sm opacity-90">Better service delivery and user experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="lg:text-lg text-base font-semibold mb-2">Revenue Enhancement</h3>
              <p className="text-sm opacity-90">Increased revenue through digital services</p>
            </div>
          </div>
        </div>
      </div>

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
      {/* Important Notes */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Important Notes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Digital Transformation</h4>
              <p className="text-gray-600 text-sm">
                Indian Railways is undergoing massive digital transformation to improve efficiency and customer service.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Cybersecurity</h4>
              <p className="text-gray-600 text-sm">
                With increased digitization, cybersecurity has become crucial for protecting railway systems and data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ITApps