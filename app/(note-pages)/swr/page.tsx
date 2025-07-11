'use client'
import React from 'react'

const SWR = () => {
  const topics = [
    "Station Working Rule diagram",
    "Description of station",
    "General (location)",
    "Block stations, IBH, IBS on either side and their distance and Outlying Sidings",
    "Block section limits on either side of the station on different directions",
    "Gradients, if any",
    "Layout",
    "Running lines, Direction of movement & holding capacity in CSR",
    "Non running lines and their capacity in CSR",
    "Any special feature in the layout",
    "Level crossings",
    "System and means of working",
    "System of signalling and interlocking",
    "Custody of Relay Room key and procedure for its handing over and taking over between Station Master and S&T maintenance staff",
    "Power supply",
    "Telecommunication",
    "System of train working",
    "Duties of train working staff",
    "Train working staff in each shift",
    "Responsibility for ascertaining clearance of the lines and Zones of responsibility",
    "Assurance of staff in the assurance register",
    "Conditions for granting Line Clear",
    "Any special conditions to be observed while receiving or despatching a train",
    "Conditions for taking 'off' approach signals",
    "Commissioner of Railway Safety approval",
    "Responsibility of Station Master for restoration of signals to 'on'",
    "Simultaneous reception/despatch, crossing and precedence of trains",
    "Complete arrival of trains",
    "Despatch of trains",
    "Trains running through",
    "Working in case of failure",
    "Provision for working of trollies/motor trollies /material lorries",
    "Blocking of lines",
    "Shunting",
    "Abnormal conditions",
    "Total failure of communication",
    "Temporary single line working on double line section",
    "Despatch of train under authority to proceed without Line Clear or to assist the crippled train (T/A.602)",
    "Visibility Test Object",
    "Essential equipment at the station",
    "Fog signalmen nominated to be called in case of fog"
  ]

  const appendices = [
    {
      title: "Appendix 'A'",
      subtitle: "Working of Level Crossing Gates",
      description: "(Interlocked LC gates – to be jointly signed by DSTE, DOM & DEN) (Non-interlocked LC gates – to be jointly signed by DEN & DOM)",
      icon: "🚦"
    },
    {
      title: "Appendix 'B'",
      subtitle: "System of signaling and interlocking and communication arrangements at the station",
      description: "(to be signed by DSTE)",
      icon: "⚡"
    },
    {
      title: "Appendix 'C'",
      subtitle: "Anti Collision Device (Raksha Kavach)",
      description: "(as and when brought into force)",
      icon: "🛡️"
    },
    {
      title: "Appendix 'D'",
      subtitle: "Duties of train passing staff and staff in each shift",
      description: "(to be signed by DOM)",
      icon: "👥"
    },
    {
      title: "Appendix 'E'",
      subtitle: "List of essential equipment provided at the station",
      description: "(to be signed by DOM)",
      icon: "🔧"
    },
    {
      title: "Appendix 'F'",
      subtitle: "Rules for working of DK stations, Halts, IBH, IBS and outlying sidings",
      description: "(to be jointly signed by DOM & DSTE)",
      icon: "🚉"
    },
    {
      title: "Appendix 'G'",
      subtitle: "Rules for working trains in electrified sections",
      description: "(to be jointly signed by Sr.DOM, Sr.DEE (TRD) & Sr.DSTE or DOM, DEE(TRD) & DSTE)",
      icon: "⚡"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 md:mb-6 shadow-lg hover:scale-110 hover:rotate-6 transition-all duration-300">
            <span className="text-2xl md:text-3xl">🚉</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4">
            Station Working Rules
          </h1>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6'>
            Appendix - XIV
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive guide to station working rules and procedures for railway operations
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto">
          {/* Topics Section */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl p-6 md:p-8 mb-6 md:mb-8 border border-gray-100 opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 md:mr-4">
                <span className="text-white text-lg md:text-xl">📋</span>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Topics Covered in Station Working Rules</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 md:p-4 rounded-lg border-l-4 border-blue-500 hover:border-purple-500 hover:scale-105 hover:translate-x-2 transition-all duration-300 opacity-0"
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                    animation: 'fadeIn 0.8s ease-out forwards'
                  }}
                >
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2 md:mr-3 min-w-[16px] md:min-w-[20px] text-sm md:text-base">{index + 1}.</span>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appendices Section */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl md:shadow-2xl border border-yellow-200 opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Appendices</h2>
              <p className="text-gray-600 text-sm md:text-base">Essential documentation and procedures</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {appendices.map((appendix, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 opacity-0"
                  style={{
                    animationDelay: `${(index + 45) * 100}ms`,
                    animation: 'fadeIn 0.8s ease-out forwards'
                  }}
                >
                  <div className="text-center mb-3 md:mb-4">
                    <div className="text-3xl md:text-4xl mb-2 md:mb-3">{appendix.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-1 md:mb-2">{appendix.title}</h3>
                    <h4 className="text-sm md:text-lg font-semibold text-gray-800 mb-1 md:mb-2 leading-tight">{appendix.subtitle}</h4>
                    <p className="text-xs md:text-sm text-gray-600 italic">{appendix.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 md:mt-12 text-center opacity-0 animate-[slideUp_0.8s_ease-out_0.6s_forwards]">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-xl md:shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Master Station Working Rules?</h3>
              <p className="text-base md:text-lg mb-4 md:mb-6 opacity-90">
                Explore our comprehensive study materials and practice tests to excel in your railway examinations.
              </p>
              <button className="bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base">
                Start Learning Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
    </div>
  )
}

export default SWR






