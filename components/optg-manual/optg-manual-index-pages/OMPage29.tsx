'use client'
import React from 'react'
import { 
  Train, 
  Settings, 
  Shield, 
  BarChart3, 
  Zap,
  Lock,
  Route,
  Signal,
  Network,
  Target,
  Users,
  Clock,
  FileText,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Car,
  Cog,
  Eye,
  ArrowUpRight,
  Flame,
  Fuel,
  Bolt,
  ListOrdered,
  PlusCircle,
  LampCeiling,
  CheckCircle2
} from 'lucide-react'

const OMPage29 = () => {
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
                <Train className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Chapter III - Working of Trains</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to understanding train operations, components, crew management, 
              and systems of working in railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Train Definition */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Definition
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <Train className="w-6 h-6 text-blue-400" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      A train consists of a locomotive (driving unit) usually attached to haul a trailing
                      load / formation of coaches or wagons. Based on the type of vehicles in the
                      formation, trains are classified as coaching trains (made for carrying passengers),
                      goods trains (made for carrying goods and animals) and mixed trains which consist
                      of both coaches & wagons.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <Cog className="w-6 h-6 text-cyan-400" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      In some trains like Vandebharat, the driving unit is integrated in the formation itself. 
                      As per GR 1.02 (58) &ldquo;train&rdquo; means an engine with or without vehicles attached, or any 
                      self-propelled vehicle with or without a trailer, which cannot be readily lifted off the track.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <Users className="w-6 h-6 text-purple-400" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Trains are worked between stations by competent crew according to a laid down system of working.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Components of a Train */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Components of a Train
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                
                {/* Locomotive */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Locomotive
                  </h4>
                  <ul className="space-y-4 ml-2">
                    <li className="flex items-start gap-3">
                      <ArrowUpRight className="w-5 h-5 text-green-400 mt-1" />
                      <span className="text-sm text-gray-200">
                        A locomotive or engine provides the motive power for hauling a train. It is normally attached in front of the train for hauling the formation behind. In few cases, it is attached in the rear of the train for pushing the formation like in ghat section working or for banking.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flame className="w-5 h-5 text-orange-400 mt-1" />
                      <span className="text-sm text-gray-200">
                        Railway transport system in initial days was conceived with steam engines. With improvements in technology, locomotives have become better in terms of horse power, reliability and energy efficiency.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Fuel className="w-5 h-5 text-yellow-400 mt-1" />
                      <span className="text-sm text-gray-200">
                        Steam locomotives were gradually replaced by diesel locomotives.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Bolt className="w-5 h-5 text-blue-400 mt-1" />
                      <span className="text-sm text-gray-200">
                        With electrification, diesel locomotives have largely been replaced by electric locomotives.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Formation */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-emerald-300 mb-5 flex flex-col lg:flex-row gap-4 items-center justify-center">
                    <Car className="w-5 h-5 mr-2" />
                    Formation
                  </h4>
                  <ul className="space-y-5 ml-2">
                    <li className="flex items-start gap-3">
                      <Train className="w-5 h-5 text-emerald-400 mt-1" />
                      <span className="text-sm text-gray-200">
                        Coaches and wagons form the basic unit of passenger and goods trains respectively. These units are attached to each other through coupling and usually piped through for enabling the braking system.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ListOrdered className="w-5 h-5 text-green-400 mt-1" />
                      <span className="text-sm text-gray-200">
                        The sequence in which the units are coupled in a formation is called Marshaling order, which is designed duly keeping in mind safety and convenience. Normally a formation is complete with a brake van or SLR at the rear most.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <PlusCircle className="w-5 h-5 text-lime-400 mt-1" />
                      <span className="text-sm text-gray-200">
                        However in exceptional cases, two more additional vehicles can be attached behind the brake van or SLR.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <LampCeiling className="w-5 h-5 text-yellow-400 mt-1" />
                      <span className="text-sm text-gray-200">
                        An LV board or tail lamp is attached to the last vehicle that signifies the intactness of the formation as complete.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                      <span className="text-sm text-gray-200">
                        Each formation is certified its fitness through a Brake Power Certificate.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-cyan-400 mt-1" />
                      <span className="text-sm text-gray-200">
                        The particulars of the formation and the destination to which it is booked to are provided in a document called Vehicle Guidance which is prepared by the station staff and handed over to the crew.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Train Sets */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                    <Cog className="w-5 h-5 mr-2" />
                    Train Sets
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Train sets are the latest technology where the engines are integrated in the
                    formation. Such train sets like Vandebharat / DEMU / MEMU / EMU are provided
                    with driving cabs at both ends for the loco pilot to work.
                  </p>
                  <p className="text-sm text-gray-200">
                    As the tractive power is distributed in such trains, they accelerate / decelerate faster. 
                    Similarly self-propelled vehicles like Track machines, Tower cars also have inbuilt driving units.
                  </p>
                </div>
              </div>
            </div>

            {/* Crew */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Crew
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Train Crew are competent railway staff who are authorized to operate, or support the
                  operation of a locomotive / train. Loco pilots, Assistant Loco Pilots, Guards,
                  Motorman and operators of tower wagons, track machines etc. form train crew.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Crew Responsibilities
                    </h4>
                    <p className="text-sm text-gray-200">
                      They run trains duly observing signals, speed restrictions in force. In order to ensure
                      they&apos;re working train in a safe and proper manner at all times, train crew are selected
                      based on eyesight, psycho test and are rigorously trained for handling locomotives.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Crew Types
                    </h4>
                    <p className="text-sm text-gray-200">
                      There are designated crews for working Mail/express, passenger trains and goods trains based on their service
                      and experience. Some crews posted at major stations for performing shunting only
                      are designated as shunters.
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h5 className="font-semibold text-purple-300 mb-2 flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Training Requirements
                  </h5>
                  <p className="text-sm text-gray-200">
                    Crew members learn routes and to respond in emergency situations through comprehensive training programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Path */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Route className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Path
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Path is the time and space consumed by a train while running between two stations.
                  As trains are run through many stations which form a section, paths are visualized
                  and charted out in such sections.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-orange-300 mb-3 flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Line Capacity
                    </h4>
                    <p className="text-sm text-gray-200">
                      The number of paths that can be charted out in a section represents the line capacity of the section. 
                      In saturated sections, giving the train a clear path is very essential for achieving the best utilization 
                      of all the assets - locomotive, formation and crew.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-red-300 mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Performance Impact
                    </h4>
                    <p className="text-sm text-gray-200">
                      It also improves the average speed of the train and ensures optimal asset utilization 
                      across the railway network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Train Ordering */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Clock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Ordering
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  A train is ordered to run when all the requirements for running it - locomotive,
                  formation, crew and path are ready or expected to be ready.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-indigo-300 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Coaching Trains
                    </h4>
                    <p className="text-sm text-gray-200">
                      Coaching trains are run to a schedule on the basis of time table / notification and do not require ordering
                      separately.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Goods Trains
                    </h4>
                    <p className="text-sm text-gray-200">
                      Goods trains and other trains are usually ordered individually by Section
                      controllers through train advice/notice. In some major yards, SMs may also order
                      goods trains duly receiving inputs from control.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-indigo-300 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Crew Booking Process
                  </h4>
                  <p className="text-sm text-gray-200">
                    On receipt of the train advice/notice, the crew booking point in charge will serve call book to the Loco Pilot, 
                    Assistant Loco Pilot and Guard as per turn.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Efficiency Benefits
                  </h4>
                  <p className="text-sm text-gray-200">
                    An efficient train order will result in low pre departure detention and less transit time in the section.
                  </p>
                </div>
              </div>
            </div>

            {/* System of Working */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Network className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                System of Working
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  A Train is run between stations through a system of working. There are different
                  systems of working viz. Absolute Block, Automatic Block, One train only, Following
                  train, Pilot guard and Train staff & ticket system.
                </p>

                <div className="space-y-6">
                  {/* Absolute Block System */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-cyan-300 mb-3 flex items-center">
                      <Lock className="w-5 h-5 mr-2" />
                      Absolute Block System
                    </h4>
                    <p className="text-sm text-gray-200">
                      At any point of time, only one train can run in the block section. This system ensures 
                      maximum safety by maintaining complete separation between trains.
                    </p>
                  </div>

                  {/* Automatic Block System */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-teal-300 mb-3 flex items-center">
                      <Signal className="w-5 h-5 mr-2" />
                      Automatic Block System
                    </h4>
                    <p className="text-sm text-gray-200">
                      The block section is divided into small auto signaling sections controlled by
                      automatic signals which assume off aspects automatically depending on the
                      movement of trains. In some metro systems, intelligent trains work on concept of
                      moving block sections.
                    </p>
                  </div>

                  {/* One Train Only System */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-cyan-300 mb-3 flex items-center">
                      <Train className="w-5 h-5 mr-2" />
                      One Train Only System
                    </h4>
                    <p className="text-sm text-gray-200">
                      When very less number of train/trains is/are required to be run in a section, 
                      One Train Only System is adopted.
                    </p>
                  </div>

                  {/* Authority and Caution Orders */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-teal-300 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Authority and Caution Orders
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      In all systems of working, a train requires an authority to proceed to leave a block station 
                      and enter the block section. As per GR 1.02 (10) &ldquo;block section&rdquo; means that portion of the 
                      running line between two block stations on to which no running train may enter until Line Clear 
                      has been received from the block station at the other end of the block section.
                    </p>
                    <p className="text-sm text-gray-200">
                      Apart from the authority to proceed, the station also issues a Caution Order which lists out
                      the various temporary speed restrictions to be followed by the crew in the section till
                      the next Caution order notice station.
                    </p>
                  </div>
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

export default OMPage29