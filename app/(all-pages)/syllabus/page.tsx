'use client'
import React from 'react'
import { Download, FileText } from 'lucide-react'

const Syllabus = () => {
  const handleDownloadNotification = () => {
    const link = document.createElement('a')
    link.href = '/AOM Notification.pdf'
    link.download = 'AOM Notification.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Auto-open PDF on mobile devices after download
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      setTimeout(() => {
        window.open('/AOM Notification.pdf', '_blank')
      }, 1000) // Wait 1 second for download to start
    }
  }
  const trafficTopics = [
    {
      title: "TRAFFIC (TRANSPORTATION) - GENERAL",
      content: `1. Organizational structure and hierarchy of Operating Department (Division --> Zone --> Railway Board).
2. G&SR
3. Accident Manual
4. Operating Manual
5. Block Working Manual
6. Red Tariff
7. Indian Railway Act, 1989`
    },
  ];

  const operatingTopics = [
    {
      title: "OPERATING DEPARTMENT",
      content: `1. Responsibility and function of Guard before starting and while on run and during abnormal/unusual situations.
2. Role & Responsibility of Station Staff in Working of Trains.
3. Various Systems of Working of Trains and Conditions for Granting LC.
4. Classification of Stations.
5. Standards of Interlocking.
6. Signalling Systems, Equipment & their working.
7. Station Working Rules and Block Working.
8. Level Crossings.
9. Line Capacity.
10. Method of Calculating Line Capacity.
11. Measures for augmenting it.
12. Token less working.`
    },
    
  ];

  const operatingManualTopics = [
    {
      title: "OPERATING MANUAL",
      content: `1.	Objective and set up of Control Offices.
2.	Functions of Control Organization pertaining to Train Ordering
3.	Punctuality
4.	Maintenance of Operating Statistics
5.	Wagon & Loco Stock Management
6.	Duties and responsibilities of Chief Controllers
7.	Dy. Chief Controllers 
8.	Section Controllers
9.	TNCs, Recorders and their Coordination with Lobbies
10.	Station & Yards.
11.	Freight Train Operations (FTO) 
12.	Freight Train Ordering Principles with or without coordination with Crew Lobbies.
13.	Power Control Organization - Engine and Crew Scheduling.
14.	Factors affecting Wagon & Engine utilization and methods of improvements.
15.	Wagon Turn Round Time (WTR) & Factors affecting Optimum Utilization of the Wagon Fleet and methods of improvement.
16.	Merry-Go-Round (MGR) System. 
17.	Engine on Load (EOL) System.
`
    },
    
  ];

  const organizationTopics = [
    {
      title: "TRAFFIC, TRAIN AND POWER CONTROL ORGANIZATION",
      content: `1.	Blocks Management and Management during Accident 
2.	Unusual Situations Circumstances
3.	Special Instructions during abnormal conditions of working & during emergencies like Cyclone, Civil Disturbances, and Accidents etc.
4.	Daily Performances Reporting from Stations/Yards/Sheds to Area Sub-control, Area Sub-control to Divisional Control Office and from Divisional Control Office to Zonal Control Office and from Zonal Control Office to Railway Board.
5.	Basic and important Documents/Registers maintained in Control Office and their basis.
6.	Periodical Performance Reporting and Analysis of Operating Performance along with compilation of Statistical Data.
7.	Working pertaining to issue of Caution Orders from Nominated and Notice Stations.
8.	Liaison / Co-ordination with Control Establishments of other Departments like Engineering, Traction Control, Signalling Control, Mechanical etc.
`
    },
    
  ];

  const freightTopics = [
    {
      title: "FREIGHT TRAIN OPERATIONS",
      content: `1.	Functioning of Crew & Guard Lobbies.
2.	Integrated Lobbies.
3.	Crew Management: Assessment of Crew Requirement
4.	Running Room and its Management.
5.	Engine Utilization aspects requiring special attention: 
6.	Engine Crew and Train Crew Schedule.
7.	Rules regarding Outstation, Home Station Rest etc. to ensure observation of 10 Hour Rule or Rules applicable from time to time, Role of LI and Crew Control.
8.	Power Plan: Assessment of Loco Requirement. 
9.	Movement of Dead Locomotives.
10.	Management of Maintenance Schedule of Locomotives.
11.	Shed and Traffic Outage of Locomotives.
12.	Specific Fuel Consumption and Assessment of Fuel Requirement.
13.	Shunting Operations in Yards or Roadside Stations.
14.	Working of Marshalling Yards & Transhipment Points.
15.	Causes of Yard and Section Congestion and remedial strategies.
16.	All India Marshalling Order and Railway-wise Marshalling Orders - Principles and Procedures.
17.	Rules regarding Carriage of Explosive and other General Goods.
18.	Preferential Traffic Schedule, Priority within same class and ODR.
19.	Indent Allotment and Supply of Freight Stock at Stations
20.	Premium Indents and procedure to place Premium Indents
21.	Allotment of Rakes in case of Quota Restrictions.
22.	Notified Stations.
23.	Wagon Stock Management for Loading and Unloading Operations.
24.	Imposition of Operating Restrictions on Wagon Loading 
25.	Acceptance of Wagon Indents
26.	Cancellation and Withdrawal of Indents.
27.	Observance of Civil ban and Carriage of Contraband Goods etc,
28.	Important Documents & Registers maintained in Yards & at Stations.
29.	Running of Unit Trains and formation of Captive Rakes. 
30.	Block Train Operations.
31.	Nominated Day Loading.
32.	Rationalization Scheme of movement of Freight Traffic for avoiding congestion by specific routes.
33.	Mini/Two Point Multi Point Rake System.
34.	Container Train Operation, Hub and Spoke system.
35.	Supervision and control over movement of Special type of Stock, ODC.
36.	Definition, meaning and methods of compilation of the Primary, Fundamental and Derived units.
37.	Engine Tickets and maintenance of Engine Tickets
38.	Analysis of the Operating Statistics.
39.	Important Operating Efficiency Indices, their meaning and uses, WTR, NTKM, GTKM, Average Speed etc.
40.	Operating Ratio: Different types of Expenditures and Plan Heads, Revenue Earnings and Non-Revenue Earnings.
`
    },
    
  ];

  const passengerTopics = [
    {
      title: "PASSENGER TRAINS OPERATIONS",
      content: `1.	General Principles and Methodology of Time Tabling of Passenger Trains. 
2.	Zero Based Time Tabling.
3.	Platform and Pit Occupancy Planning and 
4.	Preparing Charts.
5.	Consultative Machinery for revision of Timetable at Divisional, Zonal and Railway Board levels.
6.	Publication of Working Timetable, 
7.	Public Timetable & Sheet Timetable, 
8.	Components of WTT and PTT.
9.	Punctuality of Passenger Carrying Trains.
10.	Factors affecting Punctuality of Passenger carrying Trains and methods of improving the Punctuality, Monitoring of Asset Failures and Planning of blocks for Track, 
11.	Signal and OHE maintenance. 
12.	Corridor Blocks, 
13.	Integrated Maintenance Blocks.
14.	Augmentation of Train Loads for meeting Traffic requirements, 
15.	Rules of Marshalling and Slip Coaches etc.
16.	Running of Tourists Coaches, Special Carriages and Special Trains.
17.	Planning & Running of Holiday Specials, Mela Specials, Tourist Specials, etc.
18.	Introduction of new Trains, extension of Train runs, introduction of Through and Sectional Coaches.
19.	Preparation of Engine Links, Driver/Guards Links & Rake Links.
20.	Commuter Service Operations.
21.	Vande Bharat Trains
22.	High Speed Corridors and Trains.
`
    },
    
  ];


  const trainWorkingTopics = [
    {
      title: "WORKING OF TRAINS GENERALLY AND GENERAL AND SUBSIDIARY RULES",
      content: `1.	Responsibility and Function of Engine Crew before starting and while on run and during abnormal/unusual situations.
2.	Consignments.
3.	Maximum Moving Dimensions. Wagon Census.
4.	Relevant Rules and important Policy guidelines.
5.	C&W examination for STR, Intensive, Round Trips, Premium and Close Circuit Rakes.
6.	Sickliness and TXR Repair Depots including POH & ROH Depots and their functions.
7.	Supply of Coaches/Wagons to C&W shops for POH and special repairs, 
8.	Cycle period of different Stocks 
9.	Workshop Feed Management.
10.	Working of Travelling Traffic Cranes for handling heavy Consignments at Intermediate Stations.
11.	Detaching of Sick Wagons at enroute Stations and their repair and clearance.
12.	Interchange transactions - Junction returns of Inter Railway Inter Change Traffic.
13.	Weighment of Rakes,  
14.	Electronic In-Motion Weighbridge,  
15.	Automatic Pre-Weighing System, 
16.	Nominated and Alternative Weighbridges, 
17.	Load Adjustment, 
18.	Exempted Commodities, 
19.	Maintenance of Weighbridges and Role of Weights
20.	Measures Department,  
21.	Metrological Department and other Railway Departments, Integration of Weighbridge with FOIS.
22.	MIL RAIL.
23.	Permissible Axle Loads, 
24.	Heavy Haul and Long-Haul Operations, 
25.	factors affecting Axle Load, 
26.	Rules regarding Heavy Haul and Long-Haul Operations.
27.	'Payload' to 'Tare' Ratio of Wagons. 
28.	Factors affecting Payload and Tare Weight.
29.	Concept of Convoy Trains.
30.	Foreign Traffic and its components@attern.
`
    },
    
  ];

  const statisticsTopics = [
    {
      title: "OPERATING STATISTICS",
      content: `1.	Centralized Traffic Control, 
2.	Doubling, 
3.	Automatic Block, IBS / IBH, 
4.	Advanced Signalling and Interlocking.
5.	Combined Train Report, 
6.	Guard's Rough Journal Book,
7.	Vehicle Guidance, 
8.	Driver’s Ticket, 
9.	Brake Power Certificate etc.
10.	Rules regarding Marshalling of vehicles on Passenger, Mixed and Freight Trains.
11.	Air Brake Systems along with Continuity Test.
12.	Precautions to be taken on Ghat Sections.
`
    }
  ]

  const accidentTopics = [
    {
      title: "ACCIDENTS AND SAFETY ORGANIZATION",
      content: `1.	Accidents, Types and their Classification, Causes and their Prevention.
2.	Functioning of Railway Safety Organization.
3.	Chief Commissioner of Railway Safety Organization and his Functions.
4.	Rules for reporting Accidents.
5.	Accident Relief Medical Equipment (ARMEs) & 
6.	Accident Relief Trains (ARTs).
7.	Role & Responsibilities of various Officials and Departments during Accidents.
8.	Responsibility of the Control Organization Station Masters and Traffic Staff on the affected Section.
9.	Accidents Enquiries and DAR action against Staff held responsible for the Accidents, minimum recommended penalties in case of various Accidents.
10.	Review and Analysis of Accidents for taking Corrective Measures.
11.	Disaster Management on Indian Railways, 
12.	DISASTER MANAGEMENT ACT, 2005
13.	Disaster Management Plan, 
14.	Role of NDMA and NDRF.
`
    }
  ]

  const accidentsPreventionTopics = [
    {
      title: "ACCIDENTS PREVENTION",
    content: `1.	Aptitude Testing of Station Masters, Loco Pilots and Motor Men, Components of Aptitude Testing.
2.	Psycho-Technical Analysis in case of Accidents attributed to Human Failures.
3.	SPAD and its Prevention.
4.	Train Operation during Fog, Fog PASS.
5.	Improved Technological Aids to prevent Human Errors like
6.	Improved Signalling and Inter-locking arrangement
7.	SM's central and inter cabin control over route
8.	Track circuit and Axle counters
9.	Route Relay Inter-locking
10.	Solid State Interlocking/Electronic Interlocking
11.	Automatic Train Protection (ATP), 
12.	KAVACH (TCAS - Train Collision Avoidance System)
13.	WHEEL IMPACT LOAD DETECTOR (WILD)
14.	END OF TRAIN TELEMETRY (EOTT) AND ITS FUNCTIONS.
15.	Centralised Traffic Control (CTC)
16.	On Board Monitoring of Rolling Stock (OMRS).
17.	Refresher Courses, Safety Camps, Safety Campaigns and Safety Drives.
18.	Planning of PME and Refresher of Safety Category Staff.
`
    }
      
  ]

  const railwayPlanningTopics = [
    {
      title: "PLANNING ON THE RAILWAYS",
      content: `1.	SET UP & FUNCTIONS OF PLANNING WING ON INDIAN RAILWAYS
2.	Corporate Plan and Annual Plan
3.	NATIONAL RAIL PLAN
4.	MISSION 3000MT
5.	NATIONAL LOGISTICS POLICY
6.	Traffic Survey.
7.	Calculation of Line Capacity.
8.	Traffic Planning and 
9.	Augmentation of Line Capacity Works.
10.	Station Redevelopment.
11.	Doubling, Bypass & Flyover Planning Works.
12.	ESP, SIP, DPR, ROR etc
13.	CONTAINER RAIL TERMINALS
14.	GATI SHAKTI TERMINALS.
15.	Minimum Essential Facilities at Goods Sheds and Stations.
`
    }
  ]

  const financialRulesTopics = [
    {
      title: "FINANCIAL RULES",
      content: `1.	Parliamentary Control over Railway Finance, 
2.	Public Accountability, 
3.	Cannons of Financial Propriety.
4.	Railway Budget – 
5.	Budgetary terms, 
6.	Types of Budgets, 
7.	Budget cycle, 
8.	Demand of Grants, 
9.	Budgetary and Financial Reviews.
10.	Rules of Allocation – 
11.	Classification of expenditure – 
12.	Control of expenditure 
13.	Responsibility Accounting – 
14.	Performance Budgeting – 
15.	Exchequer Control – 
16.	Financial Results of Working lines.
17.	Works Programme – 
18.	Financial justification of Works – 
19.	Surveys –
20.	Preparation of Estimates – 
21.	Capital Budget – 
22.	Control over Capital Expenditure – 
23.	Reappropriation of Funds.
24.	Financial control over Stores Expenditure – 
25.	Purchase and Stores Keeping Procedure – 
26.	Inventory Control and ABC Analysis.
27.	Financial & Cost Control in Railway Workshops/Sheds units.
28.	Rules and procedure relating to Tenders and contracts for execution of works and 
29.	Procurement of Stores, 
30.	M&P Programme and RSP.
31.	Procedure for Possessing and finalizing Audit Objections and Draft Paras.
32.	Delegation of Powers.
33.	Losses, Frauds and Embezzlements.
34.	General Financial Rules
35.	Government e-Market (GeM)
36.	Classification of Railway Revenue (Earnings)
37.	Information Technology in general with specific reference to Railway's IT Applications
38.	Taxation matters with special focus on GST & Income Tax
39.	Organization of CGA and C&AG
40.	Any other topic felt necessary from time to time.
`
    }
  ]

  const establishmentRulesTopics = [
    {
      title: "ESTABLISHMENT RULES",
      content: `1.	Organization of the Personnel Department in Railways objectives functions and policies of Personnel Department.
2.	Recruitment and Training, 
3.	Classification of Services, 
4.	Recruitment in Different services,  
5.	Railway Recruitment Boards 
6.	Railway Recruitment Cells 
7.	Compassionate Ground Appointments, 
8.	Initial & In Service Training, 
9.	Refresher Courses, 
10.	Central Training Institutes, 
11.	Training Centres in Zones, Divisions & Workshops
12.	Training Modules for different posts, 
13.	Training under Apprentices Act, 
14.	Online Training, 
15.	APAR (ANNUAL PERFORMANCE APPRAISAL REPORT)
16.	General conditions of service in Railways, 
17.	Seniority, Lien, Inter Railway & Inter Division transfers, 
18.	Deputation, Promotion Policy & methods. 
19.	Selection, Suitability, Trade Tests, 
20.	Leave Rules, Pass Rules, Joining Time Reservation policy, HOER,
21.	Overtime, 
22.	Payment of wages, 
23.	current CPC Pay Rules, 
24.	Advances in Railways. 
25.	Manpower planning, 
26.	Rightsizing & Benchmarking, 
27.	creation, extension and surrender of posts, 
28.	creation of posts against new assets, 
29.	different types of posts including work charged posts.
30.	The Railway Servants (Discipline & Appeal) Rules, 1968 and related instructions. 
31.	The Railway Services (Conduct) Rules, 1966 and related instructions.
32.	Retirement benefits, 
33.	qualifying service, 
34.	pension, 
35.	family pension, 
36.	commutation gratuity, 
37.	new pension scheme (NPS)
38.	Staff welfare, 
39.	STAFF BENEFIT FUND (SBF)
40.	RAILWAY INSTITUTES, 
41.	RAILWAY SCHOOLS, 
42.	Ex-gratia payment, 
43.	Incentive Bonus Scheme, 
44.	Staff Grievances Redressal Mechanisms.
45.	INDUSTRIAL RELATIONS IN RAILWAYS
46.	recognized trade unions, industrial disputes. 
47.	THE INDUSTRIAL DISPUTES ACT, 1947
48.	THE INDUSTRIAL RELATIONS CODE, 2020
49.	THE TRADE UNIONS ACT, 1926 
50.	PNM (PERMANENT NEGOTIATING MACHINERY)
51.	PREM (Participation of Railway Employees in Management)
52.	JCM (Joint Consultative Machinery)
53.	Various Associations & Informal Meetings. 
54.	THE FACTORIES ACT, 1948
55.	THE WORKMEN'S COMPENSATION ACT, 1923
56.	Functions of Labour Enforcement Officers, Right to Information Act.
`
    }
  ]

  const languageTopics = [
    {
      title: "OFFICIAL LANGUAGE",
      content: `1.	Official Language Policy, 
2.	Act, 
3.	Rules, 
4.	Incentive Schemes
`
    }
  ]

  const sections = [
    {
      title: "TRAFFIC (TRANSPORTATION)",
      topics: trafficTopics,
      color: "from-blue-500 to-blue-600",
      icon: "🚂"
    },
    {
      title: "OPERATING DEPARTMENT",
      topics: operatingTopics,
      color: "from-green-500 to-green-600",
      icon: "💰"
    },
    {
      title: "OPERATING MANUAL",
      topics: operatingManualTopics,
      color: "from-purple-500 to-purple-600",
      icon: "📊"
    },
    {
      title: "TRAFFIC, TRAIN AND POWER CONTROL ORGANIZATION",
      topics: organizationTopics,
      color: "from-orange-500 to-orange-600",
      icon: "👥"
    },
    {
      title: "FREIGHT TRAIN OPERATIONS",
      topics: freightTopics,
      color: "from-red-500 to-red-600",
      icon: "🚨"
    },
    {
      title: "PASSENGER TRAINS OPERATIONS",
      topics: passengerTopics,
      color: "from-indigo-500 to-indigo-600",
      icon: "🛤️"
    },
    {
      title: "WORKING OF TRAINS GENERALLY AND GENERAL AND SUBSIDIARY RULES",
      topics: trainWorkingTopics,
      color: "from-pink-500 to-pink-600",
      icon: "🌐"
    },
    {
      title: "OPERATING STATISTICS",
      topics: statisticsTopics,
      color: "from-amber-500 to-amber-600",
      icon: "📊"
    },
    {
      title: "ACCIDENTS AND SAFETY ORGANIZATION",
      topics: accidentTopics,
      color: "from-red-500 to-red-600",
      icon: "🚨"
    },
    {
      title: "ACCIDENTS PREVENTION",
      topics: accidentsPreventionTopics,
      color: "from-green-500 to-green-600",
      icon: "🚨"
    },
    {
      title: "PLANNING ON THE RAILWAYS",
      topics: railwayPlanningTopics,
      color: "from-yellow-500 to-yellow-600",
      icon: "📊"
    },
    {
      title: "FINANCIAL RULES",
      topics: financialRulesTopics,
      color: "from-red-500 to-red-600",
      icon: "🚨"
    },
    {
      title: "ESTABLISHMENT RULES",
      topics: establishmentRulesTopics,
      color: "from-green-500 to-green-600",
      icon: "🚨"
    },
    {
      title: "OFFICIAL LANGUAGE",
      topics: languageTopics,
      color: "from-yellow-500 to-yellow-600",
      icon: "📊"
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto lg:px-4 px-2">
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
            <div key={sectionIndex} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              {/* Section Header */}
              <div className={`bg-gradient-to-r ${section.color} lg:p-6 p-3 text-white`}>
                <div className="flex items-center flex-col gap-3 space-x-3">
                  <span className="lg:text-3xl text-2xl">{section.icon}</span>
                  <h2 className="lg:text-2xl text-xl font-bold text-center">{section.title}</h2>
                </div>
              </div>

              {/* Section Content */}
              <div className="lg:p-6 p-2">
                <div className="space-y-4">
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="group">
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md">
                        <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-blue-400">
                          {topic.title}
                        </h3>
                        <div className="space-y-2">
                          {topic.content.split('\n').filter(line => line.trim()).map((line, lineIndex) => {
                            const trimmedLine = line.trim();
                            // Check if line starts with a number followed by a period or tab
                            const match = trimmedLine.match(/^(\d+)\.\s*(.+)$/);
                            if (match) {
                              return (
                                <div 
                                  key={lineIndex} 
                                  className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item"
                                >
                                  <span className="flex-shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                                    {match[1]}
                                  </span>
                                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-lg text-sm font-medium">
                                    {match[2]}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Eligibility Criteria Section */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 lg:p-6 p-3 text-white">
            <div className="flex items-center flex-col gap-3 space-x-3">
              <span className="lg:text-3xl text-2xl">📋</span>
              <h2 className="lg:text-2xl text-xl font-bold text-center uppercase">Eligibility Criteria</h2>
            </div>
          </div>
          
          <div className="lg:p-6 p-2 space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg lg:p-6 p-3 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">General Eligibility</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405M19.595 15.595A2.5 2.5 0 1121 17V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h4" />
                    </svg>
                  </span>
                  <span className="text-gray-700 flex-1">
                    As per Railway Board&apos;s letter <span className="font-semibold">E(GP)2024/2/28, dated 08.10.2024 (RBE No. 93/2024)</span>:
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 flex-1">
                    All eligible employees who volunteer for selection to Group <span className="font-bold">&apos;B&apos;</span> posts in all departments shall be considered.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M12 8v8" />
                    </svg>
                  </span>
                  <span className="text-gray-700 flex-1">
                    There is <span className="font-bold">no limitation on number</span> of employees considered for selection, similar to the procedure adopted for Assistant Personnel Officer selections.
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg lg:p-6 p-3 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Group &apos;C&apos; Employees</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-emerald-600 text-xl" aria-label="Employee" title="Eligible Employees">👩‍💼</span>
                    <span className="text-gray-700 flex-1">
                      <span className="font-semibold">Eligibility:</span> All Group <span className="font-bold">&apos;C&apos;</span> employees serving in <span className="font-semibold">Level-6</span> and above of the <span className="font-semibold">7<sup>th</sup> CPC Pay Matrix</span>.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-emerald-600 text-xl" aria-label="Calendar" title="Service Duration">📅</span>
                    <span className="text-gray-700 flex-1">
                      <span className="font-semibold">Experience Required:</span> Minimum <span className="font-semibold">3 years</span> of non-fortuitous service in Level-6 and above as on <span className="font-semibold">01.01.2025</span>.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-emerald-600 text-xl" aria-label="Department" title="Operating Department">🏢</span>
                    <span className="text-gray-700 flex-1">
                      Applicable to employees in the <span className="font-semibold">Operating Department</span> (including equivalent non-fortuitous service in previous grades).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-emerald-600 text-xl" aria-label="Document" title="Reference Letter">📝</span>
                    <span className="text-gray-700 flex-1">
                      <span className="font-semibold">Reference:</span> Railway Board’s letter No. <span className="font-mono bg-gray-100 px-1 rounded">E(GP)2019/2/25</span> dated <span className="font-semibold">27.12.2019</span> <span className="text-xs text-gray-500">(RBE No. 216/2019)</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg lg:p-6 p-3 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Running Staff</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-purple-600 text-xl" aria-label="Train" title="Running Staff">🚄</span>
                    <span className="text-gray-700 flex-1">
                      <span className="font-semibold">Eligible Category:</span> All Group <span className="font-bold">&apos;C&apos;</span> Running staff serving in <span className="font-semibold">Level-6</span> and above of the 7<sup>th</sup> CPC Pay Matrix.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-purple-600 text-xl" aria-label="Calendar" title="Experience">⏳</span>
                    <span className="text-gray-700 flex-1">
                      <span className="font-semibold">Experience Required:</span> Minimum <span className="font-semibold">3 years</span> of non-fortuitous service in Level-6 and above as on <span className="font-semibold">01.01.2025</span>.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-purple-600 text-xl" aria-label="Document" title="Reference">📄</span>
                    <span className="text-gray-700 flex-1">
                      <span className="font-semibold">Reference:</span> As per Railway Board&apos;s letter No. <span className="font-mono bg-gray-100 px-1 rounded">E(GP)2005/2/87</span> dated <span className="font-semibold">18.08.2015</span> (<span className="text-xs text-gray-500">RBE No. 92/2015</span>), including non-fortuitous service rendered in the corresponding pre-revised grades.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg lg:p-6 p-3 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Note</h3>
              <ul className="list-none space-y-3 text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-yellow-500 text-xl" aria-label="Arrow Up" title="Promotion">⬆️</span>
                  <span>
                    If <span className="font-semibold">juniors</span> have completed their qualifying or eligibility service and are being considered for promotion,
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-yellow-500 text-xl" aria-label="Person" title="Seniors">👨‍💼</span>
                  <span>
                    Their <span className="font-semibold">seniors</span> will also be considered,
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-yellow-500 text-xl" aria-label="Timer" title="Eligibility Period">⏳</span>
                  <span>
                    Provided they are not short of the required qualifying or eligibility service by more than <span className="font-semibold">half of such service</span> or <span className="font-semibold">two years</span> (whichever is less),
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-yellow-500 text-xl" aria-label="Check" title="Probation">✔️</span>
                  <span>
                    And they have successfully completed their <span className="font-semibold">probation period</span> for promotion to the next higher grade <span className="font-semibold">along with their juniors</span>.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg lg:p-6 p-3 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Scribe and Compensatory Time for PwBD Employees</h3>
              <ul className="list-none space-y-3 text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-red-500 text-xl" aria-label="Letter" title="Official Letter">📜</span>
                  <span>
                    As per Railway Board&apos;s letter No. <span className="font-semibold">E(NG)I/2022/PM4/9</span>, dated <span className="font-semibold">09.12.2022</span> (<span className="text-xs text-gray-500">RBE No. 162/2022</span>):
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-blue-500 text-xl" aria-label="Accessibility" title="PwBD Facility">♿</span>
                  <span>
                    The facility of <span className="font-semibold">scribe and/or compensatory time</span> will be provided only to eligible PwBD employees who have difficulty in writing.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-green-500 text-xl" aria-label="Document" title="Certificate Requirement">✅</span>
                  <span>
                    Employees must submit a <span className="font-semibold">certificate</span> from the competent Railway medical authority, certifying that they have a limitation to write and require a scribe to appear in the examination.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-purple-500 text-xl" aria-label="Attachment" title="Annexure C">📎</span>
                  <span>
                    The required certificate should be as per the <span className="font-semibold">proforma enclosed as Annexure ‘C’</span>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scheme of Selection Section */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 lg:p-6 p-3 text-white">
            <div className="flex items-center flex-col gap-3 space-x-3">
              <span className="lg:text-3xl text-2xl">🎯</span>
              <h2 className="lg:text-2xl text-xl font-bold text-center uppercase">Scheme of Selection</h2>
            </div>
          </div>
          
          <div className="lg:p-6 p-2 space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg lg:p-6 p-3 border border-blue-200">
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

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg lg:p-6 p-3 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">A) Written Examination through Centralized Computer Based Test</h3>
              <div className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-1 text-blue-600" role="img" aria-label="notification">📄</span>
                    <span>
                      <span className="font-semibold">Reference:</span> Railway Board&apos;s letter No. <span className="font-semibold">E(GP)2018/2/31</span> dated <span className="font-semibold">19.03.2019 (RBE No. 53/2019)</span> and No. <span className="font-semibold">E(GP)2005/2/69</span> dated <span className="font-semibold">04.12.2023 (RBE No. 134/2023)</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-1 text-green-600" role="img" aria-label="exam">🖥️</span>
                    <span>
                      <span className="font-semibold">Examination Mode:</span> Centralized Computer Based Test (CBT).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-1 text-yellow-600" role="img" aria-label="marks">💯</span>
                    <span>
                      <span className="font-semibold">Total Marks:</span> 100 marks.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-1 text-purple-600" role="img" aria-label="question">❓</span>
                    <span>
                      <span className="font-semibold">Type of Questions:</span> 100% objective type multiple choice questions (MCQs) only.
                    </span>
                  </li>
                </ul>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Question Paper Details</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5" role="img" aria-label="list">🔢</span>
                        <span>110 questions in total</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-0.5" role="img" aria-label="language">🗣️</span>
                        <span>10 optional questions on Raj Bhasha (Official Language)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5" role="img" aria-label="selection">✅</span>
                        <span>Only the first 100 attempted questions will be evaluated</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-0.5" role="img" aria-label="marks">⚖️</span>
                        <span>All questions carry equal marks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600 mt-0.5" role="img" aria-label="time">⏰</span>
                        <span>Duration of the test is two hours</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Important Notes</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600 text-lg" role="img" aria-label="check">✔️</span>
                        <span>No negative marking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600 text-lg" role="img" aria-label="medal">🏅</span>
                        <span>Final panels made on seniority basis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600 text-lg" role="img" aria-label="computer">💻</span>
                        <span>Computer Based Test format</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg lg:p-6 p-3 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">B) Medical Examination</h3>
              <ul className="text-gray-700 leading-relaxed space-y-3 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-lg mt-0.5" role="img" aria-label="stethoscope">🩺</span>
                  <span>
                    Candidates who qualify in the written examination (CBT) must undergo the prescribed Medical Examination as per the Medical Manual for Group <b>&apos;B&apos; (Technical)</b> posts.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 text-lg mt-0.5" role="img" aria-label="checkmark">✅</span>
                  <span>
                    Only those declared medically fit will be called for Viva-voce in accordance with prevailing instructions.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg lg:p-6 p-3 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">C) Viva-voce and Record of Service</h3>
              <p className="text-gray-700 leading-relaxed">
                The following marks are allotted for viva-voce and Record of service.
              </p>
            </div>
          </div>
        </div>
        {/* Marks Distribution Section */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 lg:p-6 p-3 text-white">
            <div className="flex items-center flex-col gap-3 space-x-3">
              <span className="lg:text-3xl text-2xl">📊</span>
              <h2 className="lg:text-2xl text-xl font-bold text-center uppercase">Marks Distribution</h2>
            </div>
          </div>
          
          <div className="lg:p-6 p-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg lg:p-6 p-3 border border-blue-200 text-center">
                <span className="text-4xl mb-4 block">📚</span>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Professional Subject</h3>
                <p className="text-2xl font-bold text-blue-600">70 Marks</p>
                <p className="text-sm text-gray-600 mt-2">Including optional questions of 10 marks on Official language policy and Rules</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg lg:p-6 p-3 border border-green-200 text-center">
                <span className="text-4xl mb-4 block">📋</span>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Establishment & Financial Rules</h3>
                <p className="text-2xl font-bold text-green-600">30 Marks</p>
                <p className="text-sm text-gray-600 mt-2">Rules and regulations</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg lg:p-6 p-3 border border-purple-200 text-center">
                <span className="text-4xl mb-4 block">🎯</span>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Qualifying Marks</h3>
                <p className="text-2xl font-bold text-purple-600">60 Marks</p>
                <p className="text-sm text-gray-600 mt-2">Minimum required to qualify</p>
              </div>
            </div>
          </div>
        </div>

        {/* Viva-voce and Record of Service Section */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 lg:p-6 p-3 text-white">
            <div className="flex items-center flex-col gap-3 space-x-3">
              <span className="lg:text-3xl text-2xl">👥</span>
              <h2 className="lg:text-2xl text-xl font-bold text-center uppercase">Viva-voce and Record of Service</h2>
            </div>
          </div>
          
          <div className="lg:p-6 p-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg lg:p-6 p-3 border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="lg:text-3xl text-2xl">🗣️</span>
                  <h3 className="lg:text-xl text-lg font-semibold text-yellow-800">Viva-voce</h3>
                </div>
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-600">25</p>
                    <p className="text-sm text-gray-600">Maximum Marks</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg lg:p-6 p-3 border border-red-200">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="lg:text-3xl text-2xl">📋</span>
                  <h3 className="lg:text-xl text-lg font-semibold text-red-800">Record of Service</h3>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-600">25</p>
                    <p className="text-sm text-gray-600">Maximum Marks</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg lg:p-6 p-3 border border-indigo-200">
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
        <div className="mt-12 bg-white rounded-xl shadow-xl lg:p-8 p-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Important Notes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg lg:p-6 p-3 border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">📚 Study Materials</h3>
              <p className="text-yellow-700">
                All topics are covered in the study notes and PDF materials available in the respective sections.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg lg:p-6 p-3 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Exam Focus</h3>
              <p className="text-green-700">
                Focus on practical applications and current railway procedures for better understanding.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg lg:p-6 p-3 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">📖 Reference Books</h3>
              <p className="text-blue-700">
                Refer to official railway manuals and updated circulars for the latest information.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg lg:p-6 p-3 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">🔄 Updates</h3>
              <p className="text-purple-700">
                Syllabus may be updated from time to time. Stay informed about the latest changes.
              </p>
            </div>
          </div>
        </div>

        {/* Download Notification Section */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 p-6 text-white">
            <div className="flex items-center flex-col gap-3 space-x-3">
              <span className="lg:text-3xl text-2xl">📢</span>
              <h2 className="lg:text-2xl text-xl font-bold text-center uppercase">Official Notification</h2>
            </div>
          </div>
          
          <div className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">AOM Notification</h3>
                <p className="text-gray-600 mb-6">
                  Download the official AOM notification for complete details about the examination, 
                  eligibility criteria, and selection process.
                </p>
              </div>
              
              <button
                onClick={handleDownloadNotification}
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Download Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Syllabus