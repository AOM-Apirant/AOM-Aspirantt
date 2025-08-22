'use client'
import React from 'react'
import { 
  Train, 
  Globe, 
  Users, 
  MapPin, 
  BarChart3, 
  Shield, 
  Eye, 
  TrendingUp,
  BookOpen,
  Building2,
  Ship,
  Factory,
  Truck,
  Bus,
  Settings,
  Target,
  FileText,
  PauseCircle,
  AlertTriangle
} from 'lucide-react'

const OMPage1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Chapter I - Introduction</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to understanding the fundamentals of railway operations, 
              infrastructure, and the evolution of Indian Railways as a world-class transportation system.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Historical Background */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Historical Background
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-gray-700 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1">
                      <Factory className="lg:w-6 lg:h-6 w-4 h-4 text-cyan-300" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-cyan-200">Industrial Revolution:</span> The invention of the steam engine in the 1800s marked the beginning of rail transportation, making it a significant and energy-efficient mode of travel.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1">
                      <Ship className="lg:w-6 lg:h-6 w-4 h-4 text-blue-200" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-cyan-200">Global Connectivity:</span> Railways connected cities, ports, and industries, playing a vital role in the growth of supply chains and logistics worldwide.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1">
                      <Settings className="lg:w-6 lg:h-6 w-4 h-4 text-blue-300" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-cyan-200">Modernization:</span> Advancements in locomotives, track structures, and signaling systems have made railway operations safer, faster, and more efficient.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 p-2 rounded-full flex items-center justify-center mt-1">
                      <TrendingUp className="lg:w-6 lg:h-6 w-4 h-4 text-blue-300" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-cyan-200">Customer Focus:</span> Modern railways adapt to the needs of customers, supporting global trade and efficient movement of goods and people.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Indian Railways Overview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Globe className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Indian Railways Overview
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30 mb-6">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Of all the national railway networks in the world, Indian Railways is the fourth
                  largest. It carries about 8 billion passengers and 1.4 billion tonnes of freight per
                  year. About 15000 coaching trains and 8500 freight trains are run on a daily basis in
                  the IR network which extends over 7300 stations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-white/20">
                    <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">1.3 Million</p>
                    <p className="font-semibold text-green-300">Employees</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-white/20">
                    <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">17</p>
                    <p className="font-semibold text-blue-300">Zones</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-white/20">
                    <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">7300+</p>
                    <p className="font-semibold text-purple-300">Stations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* South Central Railway */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                South Central Railway (SCR)
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30 mb-6">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Among the zones, South Central Railway is the 5th largest in terms of freight
                  loading and 8th largest in terms of passenger trains run.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Freight Operations */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
                      <Truck className="w-5 h-5 mr-2" />
                      Freight Operations
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start">
                        <Factory className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        Coal mines of Singareni and Western Coal fields
                      </li>
                      <li className="flex items-start">
                        <Factory className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        Cement industries in Tadipatri, Manikgarh, Malkhaid, Tandur and Jaggiyapet
                      </li>
                      <li className="flex items-start">
                        <Ship className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        Major ports: Krishnapatnam and Kakinada
                      </li>
                      <li className="flex items-start">
                        <Truck className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        Food grain loading by FCI and State civil supplies
                      </li>
                    </ul>
                  </div>

                  {/* Passenger Operations */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
                      <Bus className="w-5 h-5 mr-2" />
                      Passenger Operations
                    </h4>
                    <p className="text-sm text-gray-200 mb-3">
                      Major terminals at:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-200">
                      <div>• Secunderabad</div>
                      <div>• Hyderabad</div>
                      <div>• Vijayawada</div>
                      <div>• Tirupathy</div>
                      <div>• Aurangabad</div>
                    </div>
                    <p className="text-sm text-gray-200 mt-3">
                      Strategically placed between zones like ECoR, CR, SWR and SR
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Operations */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Network Operations
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Train className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Train operations in the SCR network are spread across <span className="font-semibold text-orange-300">600 stations</span>.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Understanding of <span className="font-semibold text-orange-300">Stations</span>, <span className="font-semibold text-orange-300">Trains</span>, and their working is fundamental to train operations.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      These aspects are covered in the <span className="font-semibold text-orange-300">first two chapters</span> of the manual.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The <span className="font-semibold text-orange-300">Control Organization</span> chapter follows, acting as the nerve center for coordinating train operations across stations, sections, divisions, and zones.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Maintenance & Operations */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Maintenance & Operations
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <Settings className="w-6 h-6 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      In Railways, <span className="font-semibold text-pink-300">operations and maintenance</span> are closely linked, ensuring smooth and safe train running.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PauseCircle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Maintenance activities that require <span className="font-semibold text-pink-300">operational downtime</span> can impact train schedules as they consume valuable path.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="w-6 h-6 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The <span className="font-semibold text-pink-300">chapter on traffic blocks</span> in the manual addresses these operational challenges in detail.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Large-scale daily train operations are susceptible to <span className="font-semibold text-pink-300">failures and unusual occurrences</span>. If not detected or addressed, these can lead to unsafe situations.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-6 h-6 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The <span className="font-semibold text-pink-300">fifth chapter</span> of the manual briefly covers some of the important unusual incidents and their management.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Operational Efficiency */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Operational Efficiency
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-emerald-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  In order to attain the best operational efficiency, all assets have to be utilized
                  in the best possible way. The final output i.e. train running depends on how
                  everything is coordinated. It is the measure of these outputs that indicate the health
                  of the organization and the direction in which its performance is heading. The sixth
                  chapter „Operating Statistics‟ deals with all such indices that measure the various
                  performance parameters of the train operations.
                </p>
                {/* Operational Efficiency List */}
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-emerald-300">Maximize Asset Utilization:</span> Efficient use of all available resources is essential for optimal train operations.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="w-6 h-6 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-emerald-300">Performance Measurement:</span> Key indices and statistics are used to monitor and improve operational performance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="w-6 h-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-emerald-300">Coordination:</span> Seamless coordination between departments ensures smooth train running and minimizes delays.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-emerald-300">Teamwork:</span> Collaborative efforts among staff at all levels drive operational excellence.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-emerald-300">Continuous Improvement:</span> Regular analysis and adaptation help in achieving higher efficiency and better results.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Safety & Monitoring */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Eye className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Safety & Monitoring
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <Shield className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-yellow-300">Safe Working Practices:</span> All activities at stations, on trains, in control offices, and at work sites must be performed with utmost safety to ensure smooth operations.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Eye className="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-yellow-300">Continuous Monitoring:</span> Supervisory and officer levels closely monitor all operational activities to maintain high safety standards.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-yellow-300">Inspections:</span> Regular inspections are conducted to assess the quality and effectiveness of safety measures.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-yellow-300">Documentation:</span> Proper records of inspections and monitoring activities are maintained for accountability and improvement.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PauseCircle className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-yellow-300">Corrective Actions:</span> Any deficiencies found during monitoring or inspections are promptly addressed to uphold safety in train operations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Planning & Growth */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <TrendingUp className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Planning & Growth
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <Target className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-indigo-200">Continuous Planning:</span> Organizations must plan continuously to adapt to changing demands and business patterns.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Building2 className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-indigo-200">Long Gestation Projects:</span> Railway projects require significant time for completion, making early and careful planning essential.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <BarChart3 className="w-6 h-6 text-indigo-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-indigo-200">Traffic Forecasting:</span> Planning must consider future scenarios and trends to ensure capacity meets demand.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Truck className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-indigo-200">Facility Development:</span> Well-planned traffic facilities ensure smooth train operations and future growth.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FileText className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <span className="font-semibold text-indigo-200">Holistic Understanding:</span> Traffic planning is best appreciated after understanding all aspects of train operations, as discussed in the final chapter.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Operating Manual - South Central Railway
            </p>
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

export default OMPage1