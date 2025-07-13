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
          <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent mb-4">
            Syllabus for AOM & ACM
          </h1>
          <p className="lg:text-xl text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
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

        {/* Eligibility Criteria Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">📋</span>
              <h2 className="text-2xl font-bold">Eligibility Criteria</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">General Eligibility</h3>
              <p className="text-gray-700 leading-relaxed">
                In terms of Railway Board&apos;s letter No. E(GP)2024/2/28, dated 08.10.2024 (RBE No. 93/2024), in respect of selections to Group &apos;B&apos; posts in all departments, all employees who are eligible and who volunteer for the selection, should be considered without any limitation of number, as is being done in case of selection to the Group &apos;B&apos; post of Assistant Personnel Officer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Group &apos;C&apos; Employees</h3>
                <p className="text-gray-700 leading-relaxed">
                  All the Group &apos;C&apos; employees working in Level-6 and above of 7th CPC Pay Matrix with three (3) years of non-fortuitous service in Level-6 and above as on 01.01.2025 in Operating Department (including non-fortuitous service rendered in the corresponding pre-revised grades) in terms of Railway Board&apos;s letter No. E(GP)2019/2/25 dated 27.12.2019 (RBE No. 216/2019).
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Running Staff</h3>
                <p className="text-gray-700 leading-relaxed">
                  All Group &apos;C&apos; Running staff working in Level-6 and above of 7th CPC Pay Matrix with three (3) years of non-fortuitous service in Level-6 and above as on 01.01.2025 as per Railway Board&apos;s letter No. E(GP)2005/2/87 dated 18.08.2015 (RBE No. 92/2015) (including non-fortuitous service rendered in the corresponding pre-revised grades).
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Note</h3>
              <p className="text-gray-700 leading-relaxed">
                Where juniors who have completed their qualifying or eligibility service and are being considered for promotion, their seniors would also be considered provided they are not short of the requisite qualifying or eligibility service by more than half of such qualifying or eligibility service or two years, whichever is less and have successfully completed their probation period for promotion to the next higher grade along with their juniors who have already completed such qualifying or eligibility service.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Scribe and Compensatory Time for PwBD Employees</h3>
              <p className="text-gray-700 leading-relaxed">
                In terms of Railway Board&apos;s letter No. E(NG)I/2022/PM4/9, dated 09.12.2022 (RBE No. 162/2022), the facility of scribe and/or compensatory time shall be granted solely to those eligible PwBD employees having difficulty in writing subject to production of a certificate to the effect that person concerned has limitation to write and that scribe is essential to write examination on his/her behalf from the competent Railway medical authority as per proforma enclosed as Annexure — &apos;C&apos;.
              </p>
            </div>
          </div>
        </div>

        {/* Scheme of Selection Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🎯</span>
              <h2 className="text-2xl font-bold">Scheme of Selection</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Selection Process</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The selection will consist of:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center border border-blue-200">
                  <span className="text-2xl mb-2 block">📝</span>
                  <h4 className="font-semibold text-blue-800">A) Written Examination</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-green-200">
                  <span className="text-2xl mb-2 block">🏥</span>
                  <h4 className="font-semibold text-green-800">B) Medical Examination</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-purple-200">
                  <span className="text-2xl mb-2 block">👥</span>
                  <h4 className="font-semibold text-purple-800">C) Viva-voce & Record of Service</h4>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">A) Written Examination through Centralized Computer Based Test</h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  In terms of Railway Board&apos;s letter No. E(GP)2018/2/31 dated 19.03.2019 (RBE No. 53/2019) and letter No. E(GP)2005/2/69 dated 04.12.2023 (RBE No. 134/2023), the written examination through the Centralized Computer Based Test shall comprise of 100 marks consisting of 100% objective type multiple choice questions only.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Question Paper Details</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 110 questions total</li>
                      <li>• 10 questions on Raj Bhasha (optional)</li>
                      <li>• First 100 attempted questions evaluated</li>
                      <li>• All questions carry equal marks</li>
                      <li>• Duration: Two hours</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Important Notes</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• No negative marking</li>
                      <li>• Final panels made on seniority basis</li>
                      <li>• Computer Based Test format</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">B) Medical Examination</h3>
              <p className="text-gray-700 leading-relaxed">
                Those who qualify in the written examination (CBT) will have to appear for prescribed medical Examination as per Medical Manual i.e. Group &apos;B&apos; (Technical) for promotion to Group &apos;B&apos; post of Assistant Operations Manager/Assistant Traffic Manager. Those who are found fit in the prescribed medical examination will only be called for Viva-voce as per extant instructions.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">C) Viva-voce and Record of Service</h3>
              <p className="text-gray-700 leading-relaxed">
                The following marks are allotted for viva-voce and Record of service.
              </p>
            </div>
          </div>
        </div>
        {/* Marks Distribution Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 text-white">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">📊</span>
              <h2 className="text-2xl font-bold">Marks Distribution</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 text-center">
                <span className="text-4xl mb-4 block">📚</span>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Professional Subject</h3>
                <p className="text-2xl font-bold text-blue-600">70 Marks</p>
                <p className="text-sm text-gray-600 mt-2">Including optional questions of 10 marks on Official language policy and Rules</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 text-center">
                <span className="text-4xl mb-4 block">📋</span>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Establishment & Financial Rules</h3>
                <p className="text-2xl font-bold text-green-600">30 Marks</p>
                <p className="text-sm text-gray-600 mt-2">Rules and regulations</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200 text-center">
                <span className="text-4xl mb-4 block">🎯</span>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Qualifying Marks</h3>
                <p className="text-2xl font-bold text-purple-600">60 Marks</p>
                <p className="text-sm text-gray-600 mt-2">Minimum required to qualify</p>
              </div>
            </div>
          </div>
        </div>

        {/* Viva-voce and Record of Service Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">👥</span>
              <h2 className="text-2xl font-bold">Viva-voce and Record of Service</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">🗣️</span>
                  <h3 className="text-xl font-semibold text-yellow-800">Viva-voce</h3>
                </div>
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-600">25</p>
                    <p className="text-sm text-gray-600">Maximum Marks</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border border-red-200">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">📋</span>
                  <h3 className="text-xl font-semibold text-red-800">Record of Service</h3>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-600">25</p>
                    <p className="text-sm text-gray-600">Maximum Marks</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Important Note</h3>
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-indigo-600">30 marks</span> (including at least <span className="font-semibold text-indigo-600">15 marks under record of service</span>) for both Viva-voce and Record of Service combined.
                </p>
              </div>
            </div>
          </div>
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