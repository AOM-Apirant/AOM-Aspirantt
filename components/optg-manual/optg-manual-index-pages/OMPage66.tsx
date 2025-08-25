'use client'
import React from 'react'
import { 
  Shield, 
  AlertTriangle,
  Clock,
  Phone,
  Train,
  Zap,
  Settings,
  Users,
  FileText,
  Monitor,
  Wrench,
  Route,
  CheckCircle,
  Database,
  Target,
  TrendingUp,
  UserCheck,
  BarChart3,
  PhoneCall,
  PhoneIncoming,
  Home,
  ClipboardList,
  CheckCircle2,
} from 'lucide-react'

const OMPage66 = () => {
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
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATIONAL DISCIPLINE
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Control Orders & Operational Procedures</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to operational discipline, control orders, unusual reporting, 
              and modern control office applications for efficient railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Operational Discipline Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Operational Discipline
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-4">
                  <li className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <span className="flex-shrink-0 mt-1 mr-3 text-blue-300">
                      <ClipboardList className="w-6 h-6" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      All orders given by the Controller to Station Masters, Running staff, or lobby must be entered in the control order register by the staff. Each entry should be initialed with date & time. At the end of each duty, both the relieved and relieving Station Master or Loco Foreman must sign in full below the last entry. Any order received from control must be entered in the control register at the station.
                    </span>
                  </li>
                  <li className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <span className="flex-shrink-0 mt-1 mr-3 text-cyan-300">
                      <CheckCircle2 className="w-6 h-6" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Control orders are sacrosanct and must be obeyed by all Station staff, Shed staff, Crew, and Guards, following the General and Subsidiary Rules. Any inconsistency should be immediately reported to the CHC in charge, who will resolve the issue or issue modified orders.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Unusual Reporting Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Unusual Reporting
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Immediate Notification
                    </h5>
                    <p className="text-sm text-gray-200">
                      Any unusual occurrence has to be informed to the control by the Station
                      Master on duty at once.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-2 flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Equipment Defects
                    </h5>
                    <p className="text-sm text-gray-200">
                      Station Master must promptly advise the Controller of any defects of signals,
                      points, interlocking apparatus and line clear instruments at his/her station.
                      Information should also be given of any defects in any other station machinery
                      such as cranes, wagon weigh bridges, turn tables, water columns etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Engine Movements Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Engine Movements to and from Sheds
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400">
                      <Train className="w-5 h-5 mt-1" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The Power Controller or Traction Loco Controller must inform the control office about the exact time when a train engine leaves or returns to the shed.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400">
                      <UserCheck className="w-5 h-5 mt-1" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      This does not relieve the Station Master from the responsibility of sending all necessary messages regarding engine failures or troubles en route.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">
                      <ClipboardList className="w-5 h-5 mt-1" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The Controller must record the duration of such defects in the chart, diary, and registers.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Time Checking Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Clock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Time to be Checked with Control
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-yellow-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Station Master, Loco Sheds and Lobbies must check their time with control at
                      appointed hours every day when control gives a general ring for setting their
                      watches. It is usually done at 1600.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Phone Usage Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Phone className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Mode of Using the Control Phone
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-purple-300 mb-2 flex items-center">
                      <PhoneCall className="w-4 h-4 mr-2" />
                      (a) Standard Procedure
                    </h5>
                    <p className="text-sm text-gray-200">
                      Station Master and others must not ordinarily attempt to speak to control
                      unless they have ascertained by lifting the receiver and listening in, that the
                      line is free. They must then announce the name of the station/shed/ lobby or
                      site from where they are speaking and wait for its being repeated by the
                      controller before beginning the conversation.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-pink-300 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      (b) Urgent Messages
                    </h5>
                    <p className="text-sm text-gray-200">
                      When, however an urgent message has to be conveyed and the line happens
                      to be engaged, the station name must be called out and a demand made for
                      the telephone line to be cleared. The Controller will then discontinue all other
                      conversations in which he had been engaged and attend to the Station
                      making the interruption. Such „clear line‟ must be made exceptionally when
                      there is a genuine reason to do so.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center">
                        <PhoneIncoming className="w-4 h-4 mr-2" />
                        (c) Control Calls
                      </h6>
                      <p className="text-sm text-gray-200">
                        Station Masters must attend „Control Call‟ promptly.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-pink-300 mb-2 flex items-center">
                        <UserCheck className="w-4 h-4 mr-2" />
                        (d) Permission Required
                      </h6>
                      <p className="text-sm text-gray-200">
                        Staff must obtain Station Master‟s permission before speaking to Controller.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        (e) Official Use Only
                      </h6>
                      <p className="text-sm text-gray-200">
                        The Control telephone is to be used only for transmitting official information.
                        Private conversation is forbidden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accidents Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Accidents
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Controllers and other staff should thoroughly understand and act on the guidelines
                      contained in G&SR and Accident Manual.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working of Trains when Control is Interrupted Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Working of Trains when Control is Interrupted
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      When the control is interrupted and no communication with the Controller is possible,
                      Station Masters will be responsible for the working and regulation of trains, keeping
                      in view the instructions issued by the railway administration.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The section control is the focal point of coordination for train running. In order
                      to assist the section controller as well as to manage all the associated activities of
                      train operations, the division control office has the following department wise control
                      set up.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Operating Control
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h6 className="font-semibold text-blue-300 mb-3 flex flex-col lg:flex-row gap-3 text-center items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Operating Control Personnel & Functions
                    </h6>
                    <ul className="space-y-3 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <UserCheck className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                        <span>
                          <span className="font-semibold">Chief Controller (Main Line):</span> Supervises main line train operations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Database className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" />
                        <span>
                          <span className="font-semibold">Chief Controller (Stock):</span> Manages freight stock and related operations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="w-5 h-5 text-indigo-400 mr-3 mt-0.5" />
                        <span>
                          <span className="font-semibold">Chief Controller (Punctuality):</span> Ensures punctual running of coaching trains.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ClipboardList className="w-5 h-5 text-purple-400 mr-3 mt-0.5" />
                        <span>
                          <span className="font-semibold">Train Clerks & Assistant Staff:</span> Support controllers in daily duties.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span>
                          <span className="font-semibold">Key Functions:</span> Control train running, supervise loading/unloading, and oversee movement of goods and coaching traffic across the division.
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center">
                        <Database className="w-4 h-4 mr-2" />
                        (a) Stock Position
                      </h6>
                      <p className="text-sm text-gray-200">
                        Collecting stock position from the different stations, marshaling and
                        terminal yards.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        (b) Demand Information
                      </h6>
                      <p className="text-sm text-gray-200">
                        Collecting information on demands registered / outstanding for freight
                        loading at stations.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center">
                        <Train className="w-4 h-4 mr-2" />
                        (c) Wagon Supply
                      </h6>
                      <p className="text-sm text-gray-200">
                        Arranging supply of wagons against pending registration.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        (d) Stock Utilization
                      </h6>
                      <p className="text-sm text-gray-200">
                        Securing optimum utilization of stock, with minimum detention.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-green-300 mb-2 flex items-center">
                        <Monitor className="w-4 h-4 mr-2" />
                        (e) Infrastructure Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        Monitoring and coordinating working of yards, goods shed, sidings, locoshed,
                        C&W depots etc.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-yellow-300 mb-2 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        (f) Maximum Loads
                      </h6>
                      <p className="text-sm text-gray-200">
                        Securing maximum loads for trains.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 md:col-span-2">
                      <h6 className="font-semibold text-orange-300 mb-2 flex items-center">
                        <Route className="w-4 h-4 mr-2" />
                        (g) Inter-division Liaison
                      </h6>
                      <p className="text-sm text-gray-200">
                        To keep liaison with adjacent Railways and divisions for interchange
                        commitments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Power Control/Traction Loco Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Power Control/Traction Loco Control
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-emerald-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It functions to monitor and control the locomotives. Its area of working includes…
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-emerald-300 mb-2 flex items-center">
                        <Train className="w-4 h-4 mr-2" />
                        (a) Engine Requisitioning
                      </h6>
                      <p className="text-sm text-gray-200">
                        Requisitioning engine from loco sheds for all operating requirements, i.e.
                        Train working, Shunting and Banking.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-teal-300 mb-2 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        (b) Economic Usage
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring most economical use of engines by close supervision both in
                        Traffic Yards and sheds.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-green-300 mb-2 flex items-center">
                        <Route className="w-4 h-4 mr-2" />
                        (c) Schedule Planning
                      </h6>
                      <p className="text-sm text-gray-200">
                        Planning in co-ordination with DyCHC for Schedule due locos to work in
                        direction of sheds.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        (d) Crew Management
                      </h6>
                      <p className="text-sm text-gray-200">
                        Coordinating with DyCHC for moving of trains so that crew shall not
                        exceed 9hr rule.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        (e) Outstation Balance
                      </h6>
                      <p className="text-sm text-gray-200">
                        Balancing crew at outstation depots for smooth functioning of trains.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        (f) Link Locos
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring all link locos are moved in time to connect Exp/Pass services.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        (g) Relief Locos
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring relief loco for any loco failures.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-pink-300 mb-2 flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        (h) Special Equipment
                      </h6>
                      <p className="text-sm text-gray-200">
                        In the event of any unusual, when MRV/ART/140T crane are ordered,
                        ensuring proper locomotive for it on priority.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-orange-300 mb-2 flex items-center">
                        <Home className="w-4 h-4 mr-2" />
                        (i) Home Shed Return
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring the return of engines to &quot;Home Sheds&quot; at regular intervals for
                        servicing and maintenance.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-yellow-300 mb-2 flex items-center">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        (j) Engine Balance
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring an even balance of engines from running sheds for meeting
                        demands of traffic.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-red-300 mb-2 flex items-center">
                        <Route className="w-4 h-4 mr-2" />
                        (k) Light Engine Minimization
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring that light engine kilometers is kept to the minimum.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-emerald-300 mb-2 flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        (l) Troubleshooting
                      </h6>
                      <p className="text-sm text-gray-200">
                        Providing guidance to running staff for trouble shooting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carriage and Wagon Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Carriage and Wagon Control
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It functions include the monitoring of activities related to rolling stock – wagons and
                      coaches. They include the following.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        (a) Train Examination
                      </h6>
                      <p className="text-sm text-gray-200">
                        To ensure timely examination and fitness of all trains.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        (b) Sick Wagon Management
                      </h6>
                      <p className="text-sm text-gray-200">
                        To keep a watch over the detachment of sick wagons and to arrange for
                        their early repair and fitness, duly monitoring and ensuring availability of
                        critical components failing frequently.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center">
                        <Monitor className="w-4 h-4 mr-2" />
                        (c) Sick Line Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        To keep a watch over placement of wagons in sick line and their release.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center">
                        <Route className="w-4 h-4 mr-2" />
                        (d) POH Stock Movement
                      </h6>
                      <p className="text-sm text-gray-200">
                        To monitor movement of POH due stock to workshops.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-green-300 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        (e) Detention Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        To keep account of detention of trains on C&W account and take remedial
                        action.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-yellow-300 mb-2 flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        (f) Troubleshooting Support
                      </h6>
                      <p className="text-sm text-gray-200">
                        To provide guidance to running staff for trouble shooting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Commercial Control
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It monitors and manages the commercial aspects of train running over the division
                      like….
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-green-300 mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        (a) Passenger Train Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        To keep a watch on detention to passenger trains on account of Alarm
                        Chain Pulling, Parcel working etc., and take remedial measures.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-emerald-300 mb-2 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        (b) Loading/Unloading Activities
                      </h6>
                      <p className="text-sm text-gray-200">
                        To ensure loading and unloading activities targeted for the day as planned
                        by Operating control.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-teal-300 mb-2 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        (c) Public Amenities
                      </h6>
                      <p className="text-sm text-gray-200">
                        To ensure proper maintenance of public amenities available at stations.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        (d) Public Complaints
                      </h6>
                      <p className="text-sm text-gray-200">
                        Monitoring of public complaints lodged at the stations.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center">
                        <Train className="w-4 h-4 mr-2" />
                        (e) Transshipment
                      </h6>
                      <p className="text-sm text-gray-200">
                        To ensure quick transshipment of sick wagons by arranging matching
                        stock and labor.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        (f) Accident Relief
                      </h6>
                      <p className="text-sm text-gray-200">
                        To ensure relief, ex-gratia payment and assistance required during
                        accident relief and restoration.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 md:col-span-2">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center">
                        <Database className="w-4 h-4 mr-2" />
                        (g) Unclaimed Items
                      </h6>
                      <p className="text-sm text-gray-200">
                        To expeditiously dispose of unclaimed and unconnected wagons, loads,
                        smalls and parcel consignments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Traction Power Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Traction Power Control
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-yellow-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It houses the SCADA which monitors and controls the power supply of the traction
                      OHE over the entire division. It has critical role in…
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-yellow-300 mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        (a) Power Supply Management
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring continuous power supply at 25KV and arranging alternative
                        power supply in case of tripping etc., through remote control.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-orange-300 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        (b) Maintenance Blocks
                      </h6>
                      <p className="text-sm text-gray-200">
                        Arranging maintenance blocks for OHE.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-red-300 mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        (c) OHE Failure Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        Monitoring OHE failures and taking remedial action.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-pink-300 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        (d) Train Detention
                      </h6>
                      <p className="text-sm text-gray-200">
                        Monitoring detention of trains on O.H.E accounts.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        (e) Troubleshooting
                      </h6>
                      <p className="text-sm text-gray-200">
                        Guiding running / station staff in trouble shooting.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        (f) MD Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        It also monitors the MD of each sub section and takes necessary action in
                        coordination with operating control to advise changes required in CMD as
                        well as avoid penalty as far as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Wrench className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Engineering Control
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It coordinates and monitors the aspects regarding engineering department related to
                      train running like…
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        (a) Caution Orders
                      </h6>
                      <p className="text-sm text-gray-200">
                        Monitors imposition and cancellation of Caution Orders.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-pink-300 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        (b) Engineering Blocks
                      </h6>
                      <p className="text-sm text-gray-200">
                        Coordinating works during Engineering blocks.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center">
                        <Route className="w-4 h-4 mr-2" />
                        (c) Track Machine Coordination
                      </h6>
                      <p className="text-sm text-gray-200">
                        Coordinates with Traffic Controller for movements of Track machines and
                        material trains.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        (d) Safety Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensures safety in work spots and sensitive locations like recording and
                        monitoring of earth works being executed along the track in all the
                        sections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Security Control
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It monitors the security aspects of train running like…
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-red-300 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        (a) Law and Order
                      </h6>
                      <p className="text-sm text-gray-200">
                        Law and order situations.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-pink-300 mb-2 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        (b) Passenger Complaints
                      </h6>
                      <p className="text-sm text-gray-200">
                        Attending to complaints of passengers like theft, women safety etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signal & Telecom Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Phone className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Signal & Telecom Control
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It monitors all the aspects of Signaling and communication across the division. It
                      functions include…
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center">
                        <Monitor className="w-4 h-4 mr-2" />
                        (a) Equipment Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        Keeping watch over proper functioning of signals, communication
                        equipment along with their networks.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        (b) Failure Management
                      </h6>
                      <p className="text-sm text-gray-200">
                        Managing S&T failures and taking remedial action.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        (c) Emergency Controls
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring setting up of emergency controls at the site of accidents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Telecommunication Facilities Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-violet-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Phone className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Telecommunication Facilities in Control Office
              </h2>
              <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-violet-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Extensive, efficient and reliable communication network is necessary for the
                      efficient functioning of the Control organisation. The following telecommunication
                      network is available in control offices.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h5 className="font-semibold text-violet-300 mb-2 flex items-center">
                        <Route className="w-4 h-4 mr-2" />
                        Section Control Circuits
                      </h5>
                      <p className="text-sm text-gray-200">
                        These are exclusive omnibus circuits connecting Control Boards, Chief Controllers,
                        Dy. Chief Controllers and Operating Officers with Stations, Cabins, Yards, Crew
                        Lobbies etc.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h5 className="font-semibold text-purple-300 mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Traction Power Control Circuit
                      </h5>
                      <p className="text-sm text-gray-200">
                        This additional telephone circuit is available on the electrified sections connecting
                        Traction Power Controllers with OHE sub stations, railway stations, control boards
                        and other selected work places. The TPC can also be contacted from the emergency
                        sockets provided over the sections by means of portable telephone. The emergency
                        sockets are provided at every kilometer. Every OHE mast is provided with indications
                        with arrow mark directing towards the nearest point to enable crew to identify the
                        nearest socket.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h5 className="font-semibold text-indigo-300 mb-2 flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        Test Channel for S&T Staff
                      </h5>
                      <p className="text-sm text-gray-200">
                        In order to speedy conveying of S&T failures and ensure quick rectification, every
                        Control Board is provided with telephone connection to Test Room, which is
                        managed by the Test Room.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h5 className="font-semibold text-blue-300 mb-2 flex items-center">
                        <Database className="w-4 h-4 mr-2" />
                        FOIS and ICMS Networks
                      </h5>
                      <p className="text-sm text-gray-200">
                        FOIS and ICMS terminals are provided in Control office to get data from field units
                        and feed Divisional data.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h5 className="font-semibold text-cyan-300 mb-2 flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Hot Lines
                      </h5>
                      <p className="text-sm text-gray-200">
                        Hot lines are provided between:
                      </p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-start">
                          <span className="text-cyan-300 mr-2">•</span>
                          <p className="text-sm text-gray-200">Headquarter and Divisions</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-cyan-300 mr-2">•</span>
                          <p className="text-sm text-gray-200">Adjoining Divisions and Railways</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-cyan-300 mr-2">•</span>
                          <p className="text-sm text-gray-200">Intercom facility to various Officers and other functionaries concerned with
                          the control is connected with important work centres with STD or Trunk
                          Exchanges.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-3 border border-white/20 mt-8 animate-fade-in">
            <h2 className="text-xl lg:text-2xl font-bold text-amber-300 mb-6 flex flex-col lg:flex-row text-center items-center gap-3">
              <FileText className="w-7 h-7 text-amber-300" />
              Books & Documents to be Kept in Divisional Control Office
            </h2>
            <ul className="space-y-3 pl-2 text-white lg:text-base text-sm">
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">📘</span>
                <span>Station Working Rules of all stations with diagrams.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">🔗</span>
                <span>Rake links, Crew links, Loco links etc.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">📏</span>
                <span>Details of maximum moving dimensions permitted on the various sections of the railway.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">🗺️</span>
                <span>Map showing the maximum permissible axle load on all the railways with which traffic is interchanged.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">📝</span>
                <span>Index sections and plans of the various sections of the jurisdiction, including details of train watering and engine fuelling.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">📊</span>
                <span>Master charts depicting all trains indicated in the working time table in force.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">🗂️</span>
                <span>
                  Charts showing jurisdiction of various officials, including:
                  <ul className="pl-3 mt-1 space-y-1">
                    <li className="flex items-start"><span className="mr-2 text-blue-400">a)</span>Maintenance branch of the Signal & Telecommunication responsible for the upkeep of control communication in good condition.</li>
                    <li className="flex items-start"><span className="mr-2 text-blue-400">b)</span>The various departments of the railways.</li>
                    <li className="flex items-start"><span className="mr-2 text-blue-400">c)</span>Zone and telephone numbers of Civil, Police, Military authorities.</li>
                    <li className="flex items-start"><span className="mr-2 text-blue-400">d)</span>List of various hospitals with Telephone Numbers.</li>
                    <li className="flex items-start"><span className="mr-2 text-blue-400">e)</span>List of stations Civil, district-wise.</li>
                    <li className="flex items-start"><span className="mr-2 text-blue-400">f)</span>OHE Sectioning diagram.</li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">🛡️</span>
                <span>Line patrol chart.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-3 border border-white/20 mt-8 animate-fade-in">
            <h2 className="text-xl lg:text-2xl font-bold text-teal-300 mb-6 flex flex-col lg:flex-row text-center items-center gap-3">
              <BarChart3 className="w-7 h-7 text-teal-300" />
              Registers Generally Maintained in Divisional Control
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-teal-200 mb-2 flex flex-col lg:flex-row gap-3 text-center items-center">
                  <span className="mr-2"></span>1. Control Board Wise
                </h3>
                <ul className="pl-3 space-y-3 text-white lg:text-base text-sm">
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(a)</span>Sections Controller’s Diary and HOC/TOC Book</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(b)</span>Stock Report Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(c)</span>Incoming and Outgoing Trains RD (Running Diary) (other than passenger)</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(d)</span>Incoming and Outgoing Passenger Train Running Diary</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(e)</span>Train Advice / Train Notice</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(f)</span>Caution Order Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(g)</span>Caution Order Message Book</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(h)</span>Morning (6 O’Clock) Position Registers</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(i)</span>Interchange Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(j)</span>Control Failure Register</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-teal-200 mb-2 flex flex-col lg:flex-row gap-3 text-center items-center">
                  <span className="mr-2"></span>2. By the Chief Controller (Main Line), (Stock) and (Coaching)
                </h3>
                <ul className="pl-3 space-y-3 text-white lg:text-base text-sm">
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(a)</span>Yard Running Balance Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(b)</span>Dy. Chief Controller’s Diary & HOC/TOC Book</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(c)</span>Bans and Restrictions Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(d)</span>Forecast and Acceptance Book</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(e)</span>Train Ordering Book</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(f)</span>Punctuality Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(g)</span>Without Brake Van / Guard Movement Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(h)</span>Accident Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(i)</span>Conference Instructions Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(j)</span>Central Control Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(k)</span>Emergency Control Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(l)</span>FATO Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(m)</span>DRM’s Unusual Occurrence Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(n)</span>ODC Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(o)</span>Rajdhani Express (and similar trains) Caution Order Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(p)</span>Emergency and General Control Office Message Register (Outward)</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(q)</span>Interchange Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(r)</span>Inward Message Book</li>
                  <li className="flex items-start"><span className="mr-2 text-teal-400">(s)</span>Outward Message Book</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(t)</span>Working Order Registers</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(u)</span>Weather Warning and Acknowledgement Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(v)</span>Safety Circular Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(w)</span>Road Map Register</li>
                  <li className="flex items-start"><span className="mr-4 text-teal-400">(x)</span>Night Order Book</li>
                </ul>
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

export default OMPage66