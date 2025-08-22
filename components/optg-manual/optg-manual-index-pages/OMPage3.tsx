'use client'
import React from 'react'
import { 
  Train, 
  Building2, 
  Settings, 
  Shield, 
  MapPin, 
  BarChart3, 
  Zap,
  Lock,
  Gauge,
  Route,
  Signal,
  Monitor,
  Cpu,
  Network,
  Target
} from 'lucide-react'

const OMPage3 = () => {
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
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Chapter II - Working of Stations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to understanding station operations, yard management, 
              signaling systems, and interlocking mechanisms in railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Station Definition */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <MapPin className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Definition
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                  Station is a nodal point in dealing trains. As per GR 1.02 (51), „station means
                  any place on a line of railway at which traffic is dealt with, or at which an authority to
                  proceed is given under the system of working.‟
                </p>
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  A station comprises of a station yard on which trains are dealt by station staff through signals operated from panel room,
                  cabins etc. Station is also the place where passengers board / alight; wagons are
                  loaded / unloaded. Hence, the station is also provided with passenger and other
                  user amenities like platform, waiting halls, circulating area and goods sheds.
                </p>
              </div>
            </div>

            {/* Station Yard */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Yard
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  A station yard is basically a grid of lines where trains are dealt. The grid is made of
                  tracks which are connected to each other through points and crossings.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Running Lines */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                      <Train className="w-5 h-5 mr-2" />
                      Running Lines
                    </h4>
                    <p className="text-sm text-gray-200">
                      The lines in the station yard which have facility for direct reception
                      and dispatch of trains on signals. They are usually track circuited.
                    </p>
                  </div>

                  {/* Non-running Lines */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Non-running Lines
                    </h4>
                    <p className="text-sm text-gray-200">
                      These lines do not have the provision for direct reception and
                      dispatch of trains. They are utilized for stabling, maintenance, shunting, etc.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-2 flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Stabling Lines
                    </h5>
                    <p className="text-sm text-gray-200">
                      Non-running lines that are earmarked for the purpose of stabling
                      vehicles. Normally stabling lines are provided only at major stations where activities
                      of examination/loading/unloading are frequent.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center">
                      <Route className="w-4 h-4 mr-2" />
                      Sidings
                    </h5>
                    <p className="text-sm text-gray-200">
                      Lines taking off from station yard for serving various activities like freight
                      train loading/unloading, IOH/POH/ROH maintenance of rolling stocks, stabling of
                      Track machine/Tower cars with their rest vans, saloon sidings for stabling of
                      inspection/VIP carriages, etc.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-2 flex items-center">
                      <Gauge className="w-4 h-4 mr-2" />
                      Pit Lines
                    </h5>
                    <p className="text-sm text-gray-200">
                      Sidings normally provided at coaching terminal stations for the
                      maintenance of rake by Mechanical and Electrical departments. These lines are
                      provided with cat walks to check exterior and pits to check undergear.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Sick Lines
                    </h5>
                    <p className="text-sm text-gray-200">
                      Sidings where repair of coaches/wagons are done by Mechanical and
                      Electrical departments. These lines are provided with facilities like welding, lifting etc.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Shunting Neck
                    </h5>
                    <p className="text-sm text-gray-200">
                      Provided at stations where regular and frequent shunting takes
                      place. Provision of shunting neck ensures that main line train operations are not
                      affected during shunting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signals */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Signal className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Signals
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  The movement of trains in station yards is controlled through signals. Signals are of
                  various types viz. fixed signals, hand signals, detonating signals and warning
                  signals.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
                      <Monitor className="w-5 h-5 mr-2" />
                      Fixed Signals
                    </h4>
                    <p className="text-sm text-gray-200">
                      Most of the station yards are provided with fixed signals but few of them are
                      not. The movements in yards having no fixed signals are fully dependent on hand
                      signals / authorities issued by station staff.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Signal Operation
                    </h4>
                    <p className="text-sm text-gray-200">
                      In stations provided with fixed signals, they are operated by Station Master through a panel or
                      VDU (Visual display unit).
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h5 className="font-semibold text-purple-300 mb-2 flex items-center">
                    <Route className="w-4 h-4 mr-2" />
                    Level Crossing Gates
                  </h5>
                  <p className="text-sm text-gray-200">
                    Some station yards have Level Crossing Gate, which is a gate provided at the
                    intersection of road with railway track at the same level. Such gates within station
                    yards are usually interlocked with signals. They are manned by operating staff who
                    ensure that the gate is closed for road traffic during passage of trains.
                  </p>
                </div>
              </div>
            </div>

            {/* Station Yard Features */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Yard Features
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                
                {/* Station Gradient */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-orange-300 mb-3 flex items-center">
                    <Gauge className="w-5 h-5 mr-2" />
                    Station Gradient
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Station yards are generally provided on a level gradient. Whenever station is on a
                    steeper gradient, protective sidings like slip & catch sidings are provided.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-orange-200 mb-2">Slip Siding</h6>
                      <p className="text-xs text-gray-200">
                        Intended to prevent vehicles escaping into block section. Provided where falling gradient towards the block section is steeper than 1 in 100.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-red-200 mb-2">Catch Siding</h6>
                      <p className="text-xs text-gray-200">
                        Intended to catch vehicles coming out of control from the adjacent block section. Provided where falling gradient towards the station section is steeper than 1 in 80.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Isolation */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-red-300 mb-3 flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Isolation
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                                         As per GR 1.02 (32), &ldquo;isolation&rdquo; means an arrangement, secured by the setting of
                     points or other approved means, to protect the line so isolated from the danger of
                     obstruction from other connected line or lines.
                  </p>
                  <p className="text-sm text-gray-200 mb-4">
                    Isolation can be achieved by any of the following methods:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Connection to another line or long siding
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provision of short dead end siding
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provision of trap
                    </li>
                  </ul>
                </div>

                {/* Adequate Distance */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-orange-300 mb-3 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Adequate Distance
                  </h4>
                  <p className="text-sm text-gray-200">
                                         As per GR 1.02 (2), &ldquo;adequate distance&rdquo; means the distance sufficient to ensure
                     safety. Adequate distance is mandated by GR in various occasions like distance
                     between signals, distance required for granting line clear (commonly referred as
                     Block overlap), distance required for taking off home signals on to a line (commonly
                     referred as Signal overlap) etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Interlocking */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Network className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Interlocking
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Signals are usually interlocked with track/routes through track circuiting & relays.
                  Such an arrangement of signals, points and track circuits/axle counters, operated
                  from a panel, interconnected by mechanical / electrical / electronic locking so that
                  their operation must take place in a proper sequence which ensures safety is called
                  Interlocking.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-indigo-300 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Objectives of Interlocking
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Setting of route
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Locking of route
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Holding of route
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Preventing conflicting movements
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Mechanical Interlocking */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-indigo-300 mb-3 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Mechanical Interlocking
                    </h4>
                    <p className="text-sm text-gray-200">
                      In yards where points and signals are operated by levers,
                      sequence of pulling levers is ensured by mechanical arrangements in lever frames.
                      Lock bars are provided for locking points. Mechanical slots are provided for ensuring
                      coordination between staff to enable a single operation. However, such interlocking
                      is restricted by the size of the lever frames and hence not feasible for bigger yards.
                      It is also maintenance intensive as alignments need to be consistently checked and
                      maintained so that levers operate smoothly and interlocking is not compromised.
                    </p>
                  </div>

                  {/* Relay Interlocking */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Relay Interlocking
                    </h4>
                    <p className="text-sm text-gray-200">
                      Electromagnetic relays connected to track circuits, point
                      machines and signals are used in relay interlocking. When operations of points and
                      signals in the station are enabled through panels, such interlocking is named as
                      Panel Interlocking (PI). In bigger yards, where interlocking is done between one
                      route and another route such that simultaneous operation for various routes does not
                      lead to conflicting movements, it is named as Route Relay Interlocking (RRI).
                      Another feature in RRI is that the Station Master need not operate individual points in
                      a route and can take off signals by pressing the concerned signal button and route
                      button.
                    </p>
                  </div>

                  {/* Electronic/Solid State Interlocking */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-indigo-300 mb-3 flex items-center">
                      <Cpu className="w-5 h-5 mr-2" />
                      Electronic/Solid State Interlocking (EI/SSI)
                    </h4>
                    <p className="text-sm text-gray-200">
                      In this system, the interlocking is
                      achieved through computerized microprocessor based software, which gets its input
                      through relays connected to track circuits, point machines and signals. The complex
                      sets of relays required for achieving route wise interlocking in RRI is replaced by a
                      small computer hardware hosting the designed software. Thus, this system is most
                      advanced, easy to maintain, safest as it is subjected to rigorous testing in factory as
                      well as site and less prone to interference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <Building2 className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Operating Manual - Chapter II: Working of Stations
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

export default OMPage3