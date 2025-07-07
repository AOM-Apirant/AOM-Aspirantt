import React from 'react'

const Syllabus = () => {
  const trafficTopics = [
    {
      title: "1. GENERAL",
      content: "Hierarchical set up and line of control of Operating Department at the Divisional, Zonal and Railway Board level."
    },
    {
      title: "II. TRAFFIC, TRAIN AND POWER CONTROL ORGANIZATION",
      content: "Traffic control organization, train control, and power management systems."
    },
    {
      title: "III. FREIGHT OPERATIONS",
      content: "Indent Allotment and Supply of Freight Stock at Stations, Premium Indents and procedure to place Premium Indents, Allotment of Rakes in case of Quota Restrictions."
    },
    {
      title: "IV. WAGON MANAGEMENT",
      content: "Wagon Stock Management for Loading and Unloading Operations, Imposition of Operating Restrictions on Wagon Loading and Acceptance of Wagon Indents."
    },
    {
      title: "V. SPECIAL OPERATIONS",
      content: "Container Train Operation, Hub and Spoke system, Supervision and control over movement of Special type of Stock, ODC."
    },
    {
      title: "VI. STATISTICS AND METRICS",
      content: "Definition, meaning and methods of compilation of the Primary, Fundamental and Derived units."
    }
  ];

  const commercialTopics = [
    {
      title: "1. GENERAL COMMERCIAL",
      content: "Commercial organization and hierarchy in Railways."
    },
    {
      title: "2. PASSENGER TRAFFIC",
      content: "Passenger traffic management, ticketing systems, and passenger services."
    },
    {
      title: "3. FREIGHT TRAFFIC",
      content: "Freight traffic management, cargo handling, and freight services."
    },
    {
      title: "4. TARIFF AND PRICING",
      content: "Railway tariff structure, pricing policies, and fare calculation."
    },
    {
      title: "5. CONTRACTS AND AGREEMENTS",
      content: "Commercial contracts, agreements, and business partnerships."
    },
    {
      title: "6. REVENUE MANAGEMENT",
      content: "Revenue collection, accounting, and financial management."
    }
  ];

  const accountsTopics = [
    {
      title: "1. ACCOUNTING PRINCIPLES",
      content: "Basic accounting principles and practices in Railways."
    },
    {
      title: "2. BUDGET MANAGEMENT",
      content: "Budget preparation, allocation, and monitoring."
    },
    {
      title: "3. FINANCIAL CONTROL",
      content: "Financial control systems and audit procedures."
    },
    {
      title: "4. COST ACCOUNTING",
      content: "Cost accounting methods and cost control measures."
    },
    {
      title: "5. TAXATION",
      content: "Taxation matters with special focus on GST & Income Tax."
    },
    {
      title: "6. IT APPLICATIONS",
      content: "Information Technology in general with specific reference to Railway's IT Applications."
    }
  ];

  const establishmentTopics = [
    {
      title: "1. MANPOWER PLANNING",
      content: "Manpower planning, Rightsizing & Benchmarking, creation, extension and surrender of posts."
    },
    {
      title: "2. PAY AND ALLOWANCES",
      content: "Overtime, Payment of wages, current CPC Pay Rules, Advances in Railways."
    },
    {
      title: "3. DISCIPLINE RULES",
      content: "The Railway Servants (Discipline & Appeal) Rules, 1968 and related instructions."
    },
    {
      title: "4. CONDUCT RULES",
      content: "The Railway Services (Conduct) Rules, 1966 and related instructions."
    },
    {
      title: "5. RETIREMENT BENEFITS",
      content: "Retirement benefits, qualifying service, pension, family pension, commutation gratuity, new pension scheme."
    },
    {
      title: "6. STAFF WELFARE",
      content: "Staff welfare, SBF, Railway institutes, Railway schools, Ex-gratia payment, Incentive Bonus Scheme."
    }
  ];

  const accidentTopics = [
    {
      title: "1. ACCIDENT PREVENTION",
      content: "Preventive measures and safety protocols to avoid accidents."
    },
    {
      title: "2. ACCIDENT INVESTIGATION",
      content: "Procedures for investigating railway accidents and incidents."
    },
    {
      title: "3. SAFETY EQUIPMENT",
      content: "Safety equipment, signaling systems, and protective measures."
    },
    {
      title: "4. EMERGENCY RESPONSE",
      content: "Emergency response procedures and crisis management."
    },
    {
      title: "5. SAFETY TRAINING",
      content: "Safety training programs and awareness campaigns."
    },
    {
      title: "6. COMPLIANCE",
      content: "Safety compliance and regulatory requirements."
    }
  ];

  const bwmTopics = [
    {
      title: "1. BLOCK WORKING",
      content: "Block working procedures and safety protocols."
    },
    {
      title: "2. SIGNALING",
      content: "Signaling systems and interlocking arrangements."
    },
    {
      title: "3. TRACK SAFETY",
      content: "Track safety measures and maintenance procedures."
    },
    {
      title: "4. TRAIN OPERATION",
      content: "Train operation rules and procedures."
    },
    {
      title: "5. COMMUNICATION",
      content: "Communication systems and protocols."
    },
    {
      title: "6. EMERGENCY PROCEDURES",
      content: "Emergency procedures and contingency plans."
    }
  ];

  const operatingTopics = [
    {
      title: "1. TRAIN OPERATION",
      content: "Train operation rules, procedures, and safety measures."
    },
    {
      title: "2. SIGNALING AND INTERLOCKING",
      content: "Signaling systems, interlocking arrangements, and safety protocols."
    },
    {
      title: "3. TRACK MAINTENANCE",
      content: "Track maintenance procedures and safety measures."
    },
    {
      title: "4. ROLLING STOCK",
      content: "Rolling stock management and maintenance."
    },
    {
      title: "5. POWER SUPPLY",
      content: "Power supply systems and electrical safety."
    },
    {
      title: "6. SAFETY SYSTEMS",
      content: "Safety systems and emergency procedures."
    }
  ];

  const rajabhashaTopics = [
    {
      title: "1. OFFICIAL LANGUAGE POLICY",
      content: "Official Language Policy, Act, Rules, Incentive Schemes etc."
    },
    {
      title: "2. HINDI IMPLEMENTATION",
      content: "Implementation of Hindi as official language in Railways."
    },
    {
      title: "3. LANGUAGE TRAINING",
      content: "Language training programs and incentives."
    },
    {
      title: "4. DOCUMENTATION",
      content: "Documentation in official language and translation services."
    },
    {
      title: "5. COMPLIANCE",
      content: "Compliance with official language requirements."
    },
    {
      title: "6. MONITORING",
      content: "Monitoring and evaluation of language implementation."
    }
  ];

  const sections = [
    {
      title: "TRAFFIC (TRANSPORTATION)",
      topics: trafficTopics,
      color: "from-blue-500 to-blue-600",
      icon: "🚂"
    },
    {
      title: "COMMERCIAL",
      topics: commercialTopics,
      color: "from-green-500 to-green-600",
      icon: "💰"
    },
    {
      title: "ACCOUNTS",
      topics: accountsTopics,
      color: "from-purple-500 to-purple-600",
      icon: "📊"
    },
    {
      title: "ESTABLISHMENT",
      topics: establishmentTopics,
      color: "from-orange-500 to-orange-600",
      icon: "👥"
    },
    {
      title: "ACCIDENT MANUAL",
      topics: accidentTopics,
      color: "from-red-500 to-red-600",
      icon: "🚨"
    },
    {
      title: "BLOCK WORKING MANUAL",
      topics: bwmTopics,
      color: "from-indigo-500 to-indigo-600",
      icon: "🛤️"
    },
    {
      title: "OPERATING MANUAL",
      topics: operatingTopics,
      color: "from-teal-500 to-teal-600",
      icon: "⚙️"
    },
    {
      title: "RAJABHASHA",
      topics: rajabhashaTopics,
      color: "from-pink-500 to-pink-600",
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent mb-4">
            Syllabus for AOM & ACM
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive syllabus for 70% Selection & 30% LDCE for promotion to Group &apos;B&apos; posts of AOM & ACM in the Traffic (Transportation and Commercial) Departments
          </p>
        </div>

        {/* Syllabus Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              {/* Section Header */}
              <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{section.icon}</span>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
              </div>

              {/* Section Content */}
              <div className="p-6">
                <div className="space-y-4">
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="group">
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-gray-200 hover:border-blue-300">
                        <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {topic.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {topic.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Important Notes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">📚 Study Materials</h3>
              <p className="text-yellow-700">
                All topics are covered in the study notes and PDF materials available in the respective sections.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Exam Focus</h3>
              <p className="text-green-700">
                Focus on practical applications and current railway procedures for better understanding.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">📖 Reference Books</h3>
              <p className="text-blue-700">
                Refer to official railway manuals and updated circulars for the latest information.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">🔄 Updates</h3>
              <p className="text-purple-700">
                Syllabus may be updated from time to time. Stay informed about the latest changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Syllabus