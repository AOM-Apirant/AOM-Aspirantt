'use client'
import React from 'react'
import { 
  Users, 
  Building2, 
  Shield, 
  Settings, 
  Clock, 
  FileText,
  AlertTriangle,
  Calendar,
  Clipboard,
  Heart,
  Stethoscope,
  Route,
  Lock
} from 'lucide-react'

const OMPage10 = () => {
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
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              STATION STAFF & OPERATIONS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Chapter II - Working of Stations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to station staff responsibilities, medical fitness requirements, 
              and operational procedures for safe railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Station Staff Overview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Staff
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  The staff involved in train operations like Station Master, Shunting Jamedar,
                  Pointsman and Train clerks are referred to as station staff. They are bound to carry
                  out their duties and responsibilities prescribed under G&SR, Block Working Manual,
                  Accident Manual and Station Working Rules.
                </p>
              </div>
            </div>

            {/* Station Master */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Master
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Definition
                  </h4>
                  <p className="text-sm text-gray-200">
                    As per GR 1.02 (53), &ldquo;Station Master&rdquo; means the person on duty who is for the time
                    being responsible for the working of the traffic within station limits, and includes any
                    person who is for the time being in independent charge of the working of any signals
                    and responsible for the working of trains under the system of working in force&rdquo;.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Responsible for safe & efficient working of the station in his/her shift
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Update and maintain all train passing documents/registers during shifts correctly
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Properly appraise position of equipment, lines, block sections, speed restrictions, shunting operations to reliever
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Keep updated knowledge of rule books, manuals with latest amendments and safety literature
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ensure safe, efficient operations keeping detentions to minimum during abnormal situations
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Report deficiencies in safety equipment or procedures immediately to Station Manager
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Shunting Master/Shunting Jamedar */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Shunting Master/Shunting Jamedar
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  At major stations having continuous shunting operations, a separate supervisor for
                  carrying out shunting is provided as Shunting Master/Jamedar. He/she is responsible
                  for safe and timely shunting by duly ensuring all the proper procedures are followed
                  by the shunting staff working under him/her rigorously.
                </p>
              </div>
            </div>

            {/* Pointsman/Assistant Pointsman */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Route className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Pointsman/Assistant Pointsman
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-orange-300 mb-3 flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Primary Duties
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Performing shunting operations
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Exchange of all right signals
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Manning traffic LC gates
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Observing abnormalities in train, points, signals, track, OHE in station premises
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Clamping & padlocking of points in case of signal/point failure
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Cleanliness of SM office/cabins and other miscellaneous works
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-red-300 mb-3 flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Level Crossing Duties
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    While working as gateman, he/she need to follow the GWI and is responsible for
                    closing/opening of the LC gates duly observing safe running of trains.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ensure cleanliness of the gate lodge and rails on the road
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Initiate action and report to Station Master/official immediately for any abnormalities
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trains Clerks (TNC) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Trains Clerks (TNC)
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  They assist the SM on duty in obtaining the rolling stock position, availability &
                  location at the station yard, preparation of vehicle guidance to be handed over to the
                  guard of the train and entering the required data in the FOIS & ICMS at a station.
                  They also assist in maintenance of statistics and concerned registers.
                </p>
              </div>
            </div>

            {/* Medical Fitness of Staff */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Heart className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Medical Fitness of Staff
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-emerald-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    General Requirement
                  </h4>
                  <p className="text-sm text-gray-200">
                    All station staff needs to be medically fit to carry out their duties. The rules regarding
                    the medical fitness of a railway employee is provided in the para 514 of IRMM
                    (Indian Railway Medical Manual).
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-teal-300 mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Periodical Re-examination
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    In order to ensure the continuous ability of Railway employees in class A-1, A-2, A-3,
                    B-1 and B-2 to discharge their duties with safety, they will be required to appear for
                    re-examination at the following stated intervals throughout their service.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-emerald-200 mb-2 text-center">Up to 45 years</h6>
                      <div className="text-center">
                        <span className="text-xs text-gray-200 bg-emerald-500/30 px-2 py-1 rounded">Every 4 years</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-teal-200 mb-2 text-center">45-55 Years</h6>
                      <div className="text-center">
                        <span className="text-xs text-gray-200 bg-teal-500/30 px-2 py-1 rounded">Every 2 years</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-emerald-200 mb-2 text-center">Above 55 Years</h6>
                      <div className="text-center">
                        <span className="text-xs text-gray-200 bg-emerald-500/30 px-2 py-1 rounded">Every 1 year</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Classification of Staff
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    For the purpose of visual acuity and physical ability of candidates/serving railway
                    employees, medical standards for the Non-Gazetted Railway services are divided
                    into the following categories.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-emerald-200 mb-2 flex items-center">
                        <span className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></span>
                        Category A-1
                      </h6>
                      <p className="text-xs text-gray-200">
                        Foot plate staff, Rail car drivers and Navigating staff.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-teal-200 mb-2 flex items-center">
                        <span className="w-3 h-3 bg-teal-400 rounded-full mr-2"></span>
                        Category A-2
                      </h6>
                      <p className="text-xs text-gray-200">
                        Station Masters, Guards, Shunting staff, Pointsman.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-emerald-200 mb-2 flex items-center">
                        <span className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></span>
                        Category A-3
                      </h6>
                      <p className="text-xs text-gray-200">
                        Loco, signal and Transportation Inspectors, staff authorized to work
                        trolleys, Yard supervisory staff, Road motor drivers and gate keepers
                        on level crossings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-teal-300 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Special Medical Examination
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    The staff in the categories A-1, A-2, A-3 should be sent for special medical examination 
                    in the interest of safety under the following circumstances unless they have been under 
                    the treatment of a Railway Medical Officer:
                  </p>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Having undergone any treatment or operation for eye irrespective of the duration of sickness.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Absence from duty for a period in excess of 90 days.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      In case of A-1, A-2 and A-3 the employee may be asked to give an undertaking to his
                      supervisor when reporting back to duty after leave or absence, irrespective of the period, 
                      that he/she has not suffered from any eye disease or undergone an eye operation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Working of Stations */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Working of Stations
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-cyan-300 mb-3 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Roster & Attendance
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Station staff working hours are as per approved roster assigned to them, which is
                    made based on the workload and in accordance with HOER. The rosters are issued
                    by division office duly vetted by personnel branch.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Staff shall handover charge at the end of the hours of duty as prescribed at the station/yard to their proper reliever
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Assigned duty hours should not be changed without the permission of Station in charge
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
                    <Clipboard className="w-5 h-5 mr-2" />
                    Attendance Management
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      All staff shall sign in the appearance register and mention the duty timings performed
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Station in-charge or authorized person should endorse attendance of staff by closing the muster every day
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Muster copy for nominated period to be sent to SrDPO office through courier along with statements of NDA, NHA, OT etc.
                    </li>
                  </ul>
                </div>
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

export default OMPage10