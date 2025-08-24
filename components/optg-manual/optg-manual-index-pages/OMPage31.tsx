'use client'
import React from 'react'
import { 
  Train, 
  Settings, 
  Zap,
  Clock,
  Star,
  Users,
  Target,
  Car,
  Building2,
  ArrowRight,
  Award,
  Globe,
  Heart,
  Crown,
  Bus,
  Mail,
  MapPin,
  Info,
  Wrench,
  Route,
  CheckCircle,
  AlertTriangle,
  FileText,
  Shield,
  Plus,
  BarChart3
} from 'lucide-react'

const OMPage31 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Coaching Train Operations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to understanding coaching train operations, types of services, 
              and passenger satisfaction strategies in Indian Railways.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Overview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <Train className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Coaching train operations are planned, run and maintained to cater to the
                      travel needs of the public so as to provide maximum level of satisfaction. Different
                      passengers have different needs and consequently different criteria for satisfaction.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-cyan-300 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      While freight services are mainly end to end oriented services, the coaching services
                      cater to enroute passengers also. Therefore, coaching train operations are planned
                      to a reasonably predictable, systematic and regular pattern.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-6 h-6 text-indigo-300 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Time tabling and punctual running are the two corner stones of coaching train operations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Types of Coaching Services */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Types of Coaching Services
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Indian Railways have evolved various types of services keeping in view of the public
                  demand, such as&hellip;
                </p>

                <div className="space-y-6">
                  {/* Vandebharat */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Vandebharat
                    </h4>
                    <p className="text-sm text-gray-200">
                      These are the latest train services using train sets that can run up to
                      160kmph. Named as Train-18 in the design stage, these semi high speed train sets
                      currently manufactured by Integral Coach Factory Chennai are provided with latest
                      passenger friendly features. At present they have only seating facility, while sleeper
                      berth facilities are under development.
                    </p>
                  </div>

                  {/* Rajdhani */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                      <Crown className="w-5 h-5 mr-2" />
                      Rajdhani
                    </h4>
                    <p className="text-sm text-gray-200">
                      These are super-fast semi high speed trains connecting New Delhi and
                      state capitals. These are elite trains provided with all AC sleeper coaches and given
                      highest priority in timetabling and running.
                    </p>
                  </div>

                  {/* Shatabdi */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Shatabdi
                    </h4>
                    <p className="text-sm text-gray-200">
                      These are intercity super-fast trains conceptualized in 1989, on 100th birth
                      anniversary of Pt. Jawaharlal Nehru. They run between state capitals, usually having
                      a travel time of 6-8 hours. Only AC chair cars and executive chair cars are provided
                      in these trains.
                    </p>
                  </div>

                  {/* Duronto */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Duronto
                    </h4>
                    <p className="text-sm text-gray-200">
                      These are non-stop superfast trains that run between source and
                      destination stations. They don&apos;t stop enroute except for operational reasons like crew
                      change. Duronto means &ldquo;restless&rdquo; in Bengali and the rakes are painted with unique
                      yellow green livery.
                    </p>
                  </div>

                  {/* Sampark Kranti */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Sampark Kranti
                    </h4>
                    <p className="text-sm text-gray-200">
                      The word Sampark means contact and Kranti means Revolution.
                      The combined name denotes revolution in public contact i.e., the steps taken by
                      Indian Railways to provide high speed train connections from cities around our
                      country with the National Capital through the provision of few stops and running at
                      high speeds.
                    </p>
                  </div>

                  {/* Superfast */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Superfast
                    </h4>
                    <p className="text-sm text-gray-200">
                      These are express trains with limited halts at the important stations in
                      order to achieve an average speed of 55kmph or more. Rajdhani, Shatabdi, Duronto
                      and many long distance trains are all super-fast trains connecting major cities with
                      additional premium features associated with their brand.
                    </p>
                  </div>

                  {/* Mail and Express Trains */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Mail and Express Trains
                    </h4>
                    <p className="text-sm text-gray-200">
                      These are high speed services carrying passenger and
                      postal mails and stopping only at important stations. These are run between distant
                      places as inter-regional or between the important cities as intercity trains.
                    </p>
                  </div>

                  {/* Garib Rath */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      Garib Rath
                    </h4>
                    <p className="text-sm text-gray-200">
                      In order to provide a superfast AC train affordable to common man, the
                      concept of Garib Rath (means chariot of the poor) was evolved. The coaches used in
                      this service are slightly larger than normal coaches with middle berth in the side
                      portion also.
                    </p>
                  </div>

                  {/* Intercity */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                      <Building2 className="w-5 h-5 mr-2" />
                      Intercity
                    </h4>
                    <p className="text-sm text-gray-200">
                      In order to provide quick movement day journey travel between nearest
                      cities, the Intercity Express services are provided. The trains are less expensive than
                      other express trains, and usually reach their destinations within 5&ndash;6 hours. As they
                      complete a round trip in a day, returning to the origin station at night, they are usually
                      run with single rake.
                    </p>
                    <p className="text-sm text-gray-200 mt-3">
                      They connect various major cities that are adjacent to each
                      other, all over the country. They contain a large number of general class
                      coaches with a few reserved coaches.
                    </p>
                  </div>

                  {/* Jan Shatabdi */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Jan Shatabdi
                    </h4>
                    <p className="text-sm text-gray-200">
                      As the Shatabdi trains are expensive; non-AC trains with
                      Shatabdi features at affordable prices were planned as Jan Shatabdi. These trains
                      have both AC and non-AC accommodations.
                    </p>
                  </div>

                  {/* Premium Trains */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Premium Trains
                    </h4>
                    <p className="text-sm text-gray-200 mb-3">
                      In order to cater to the need of public that need to travel at short
                      notice, Premium trains services are evolved. These trains are generally superfast
                      trains. The Advance Reservation Period (ARP) is 15 days only and no wait-listed
                      tickets will be issued. There is no cancellation facility and no refund is allowed.
                    </p>
                    <p className="text-sm text-gray-200">
                      Unique feature of these trains is its dynamic pricing system. The prices vary
                      according to the demand. As the seats are being filled the fare will increase, as in
                      case of pricing of flight tickets in vogue.
                    </p>
                  </div>

                  {/* Passenger trains / MEMU / DEMU */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                      <Bus className="w-5 h-5 mr-2" />
                      Passenger trains / MEMU / DEMU
                    </h4>
                    <p className="text-sm text-gray-200">
                      These trains contain only general coaches and
                      stops at all the stations including the stations in villages. They take highest running
                      time because of the number of stops, and hence average speeds are lowest. These
                      services cater to the needs of short distance travelling public, of both rural & urban
                      areas. Their fares are also low.
                    </p>
                  </div>

                  {/* Suburban trains / EMU */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                      <Car className="w-5 h-5 mr-2" />
                      Suburban trains / EMU
                    </h4>
                    <p className="text-sm text-gray-200">
                      These services cater to the need of mass transportation in
                      densely populated cities. The fare is very minimal. The priority is to transport
                      maximum people in least possible time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Numbering of Trains */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Numbering of Trains
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Every coaching train in Indian Railways is provided with unique number, following a
                  five digit numbering system in vogue since December 20, 2010. In this scheme, the
                  first digit indicates the type of the passenger train, as follows:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* First Digit */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-4 flex lg:flex-row flex-col gap-3 items-center">
                      <Star className="w-5 h-5 mr-2" />
                      1st Digit - Type of Trains
                    </h4>
                    <div className="space-y-3 text-sm text-gray-200">
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-purple-200">0</span>
                        <span className="text-xs text-gray-200">Special trains (summer specials, holiday specials, etc.)</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-purple-200">1</span>
                        <span className="text-xs text-gray-200">Long-distance trains (Rajdhani, Shatabdi, Jan Sadharan, Sampark Kranti, Garib Rath, Duronto)</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-purple-200">2</span>
                        <span className="text-xs text-gray-200">Long-distance trains (when series 1 is exhausted)</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-purple-200">3</span>
                        <span className="text-xs text-gray-200">Kolkata suburban trains</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-purple-200">4</span>
                        <span className="text-xs text-gray-200">Suburban trains in Chennai, New Delhi, Secunderabad, and other metropolitan areas</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-purple-200">5</span>
                        <span className="text-xs text-gray-200">Passenger trains with conventional coaches</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-purple-200">6</span>
                        <span className="text-xs text-gray-200">MEMU trains</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-purple-200">7</span>
                        <span className="text-xs text-gray-200">DMU (DEMU) and railcar services</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-purple-200">9</span>
                        <span className="text-xs text-gray-200">Mumbai area suburban trains</span>
                      </div>
                    </div>
                  </div>

                  {/* Second Digit */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-4 flex lg:flex-row flex-col gap-3 items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      2nd Digit - Zonal Codes
                    </h4>
                    <div className="space-y-3 text-sm text-gray-200">
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">0</span>
                        <span className="text-xs text-gray-200">Konkan Railway</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">1</span>
                        <span className="text-xs text-gray-200">CR, WCR and NCR</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">2</span>
                        <span className="text-xs text-gray-200">Superfast, Shatabdi, Jan Shatabdi (regardless of zones)</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">3</span>
                        <span className="text-xs text-gray-200">ER and ECR</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">4</span>
                        <span className="text-xs text-gray-200">NR, NCR and NWR</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">5</span>
                        <span className="text-xs text-gray-200">NER and NFR</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">6</span>
                        <span className="text-xs text-gray-200">SR and SWR</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">7</span>
                        <span className="text-xs text-gray-200">SCR and SWR</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">8</span>
                        <span className="text-xs text-gray-200">SER and ECoR</span>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">9</span>
                        <span className="text-xs text-gray-200">WR, NWR and WCR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coaching Locomotives */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Coaching Locomotives
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Locomotives are categorized as coaching, freight and mixed based on their design
                  specifications especially hauling power and gear ratio. It finds mention in the
                  locomotive syntax which generally has three digits followed by a number and
                  subsequent digit if any.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-orange-300 mb-4 flex lg:flex-row flex-col gap-3 items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Locomotive Syntax
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-orange-200 mb-2">First Digit - Gauge</h6>
                      <div className="space-y-2 text-xs text-gray-200">
                        <div><span className="font-medium">W</span> - Broad gauge</div>
                        <div><span className="font-medium">Y</span> - Meter gauge</div>
                        <div><span className="font-medium">Z</span> - Narrow gauge (2ft6in)</div>
                        <div><span className="font-medium">N</span> - Narrow gauge (2ft)</div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-red-200 mb-2">Second Digit - Motive Power</h6>
                      <div className="space-y-2 text-xs text-gray-200">
                        <div><span className="font-medium">D</span> - Diesel</div>
                        <div><span className="font-medium">C</span> - DC electric</div>
                        <div><span className="font-medium">A</span> - AC</div>
                        <div><span className="font-medium">CA</span> - Both DC & AC</div>
                        <div><span className="font-medium">B</span> - Battery</div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-orange-200 mb-2">Third Digit - Job Type</h6>
                      <div className="space-y-2 text-xs text-gray-200">
                        <div><span className="font-medium">G</span> - Goods</div>
                        <div><span className="font-medium">P</span> - Passenger</div>
                        <div><span className="font-medium">M</span> - Mixed (Pass. & Goods)</div>
                        <div><span className="font-medium">S</span> - Shunting</div>
                        <div><span className="font-medium">U</span> - Multiple units</div>
                        <div><span className="font-medium">R</span> - Rail cars</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-red-300 mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Example: WDM3A
                  </h4>
                  <p className="text-sm text-gray-200">
                    <span className="font-semibold text-red-200">W</span> - Broad gauge; 
                    <span className="font-semibold text-red-200">D</span> - Diesel; 
                    <span className="font-semibold text-red-200">M</span> - can work both passenger & goods; 
                    <span className="font-semibold text-red-200">3A</span> - denotes 3100 hp
                  </p>
                </div>
              </div>
            </div>

            {/* Loco Maintenance */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Wrench className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Loco Maintenance
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Locos are maintained in the loco sheds. Depending upon the type of locomotives,
                  kms worked and time spent on line, different schedules for maintenance are
                  mandated.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-indigo-300 mb-4 flex lg:flex-row flex-col gap-3 items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Maintenance Schedules
                  </h4>
                  

                  {/* Visually Appealing Card Format */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Trip inspection (TI) */}
                    <div className="bg-gradient-to-br from-indigo-900/60 to-blue-900/40 rounded-xl p-5 border border-indigo-400/30 shadow-lg">
                      <h5 className="text-indigo-200 font-bold text-lg mb-2">Trip inspection (TI)</h5>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>
                          <span className="font-semibold text-blue-200">Duration:</span> 2 hrs
                        </li>
                        <li>
                          <span className="font-semibold text-indigo-200">Periodicity:</span> After 4500 kms or one trip whichever is later
                        </li>
                      </ul>
                    </div>
                    {/* IA */}
                    <div className="bg-gradient-to-br from-blue-900/60 to-indigo-900/40 rounded-xl p-5 border border-blue-400/30 shadow-lg">
                      <h5 className="text-blue-200 font-bold text-lg mb-2">IA</h5>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>
                          <span className="font-semibold text-blue-200">Duration:</span> 4 hrs
                        </li>
                        <li>
                          <span className="font-semibold text-indigo-200">Periodicity:</span> 60 days
                        </li>
                      </ul>
                    </div>
                    {/* IC */}
                    <div className="bg-gradient-to-br from-indigo-900/60 to-blue-900/40 rounded-xl p-5 border border-indigo-400/30 shadow-lg">
                      <h5 className="text-indigo-200 font-bold text-lg mb-2">IC</h5>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>
                          <span className="font-semibold text-blue-200">Duration:</span> 8 hrs
                        </li>
                        <li>
                          <span className="font-semibold text-indigo-200">Periodicity:</span> 120 days
                        </li>
                      </ul>
                    </div>
                    {/* AOH */}
                    <div className="bg-gradient-to-br from-blue-900/60 to-indigo-900/40 rounded-xl p-5 border border-blue-400/30 shadow-lg">
                      <h5 className="text-blue-200 font-bold text-lg mb-2">AOH</h5>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>
                          <span className="font-semibold text-blue-200">Duration:</span> 6 working days
                        </li>
                        <li>
                          <span className="font-semibold text-indigo-200">Periodicity:</span>
                          <ul className="ml-4 list-disc">
                            <li>18 months + 15 days (WAP-4 & WAG-5)</li>
                            <li>12 months + 15 days (WAP-1)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* IOH */}
                    <div className="bg-gradient-to-br from-indigo-900/60 to-blue-900/40 rounded-xl p-5 border border-indigo-400/30 shadow-lg">
                      <h5 className="text-indigo-200 font-bold text-lg mb-2">IOH</h5>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>
                          <span className="font-semibold text-blue-200">Duration:</span> 9 working days
                        </li>
                        <li>
                          <span className="font-semibold text-indigo-200">Periodicity:</span>
                          <ul className="ml-4 list-disc">
                            <li>36 months + 1 month or 6 lakh km, whichever is earlier (WAP-1 & WAG-5)</li>
                            <li>54 months (4 ½ years) + 1 month or 9 lakh km, whichever is earlier (WAP-4)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* POH */}
                    <div className="bg-gradient-to-br from-blue-900/60 to-indigo-900/40 rounded-xl p-5 border border-blue-400/30 shadow-lg">
                      <h5 className="text-blue-200 font-bold text-lg mb-2">POH</h5>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>
                          <span className="font-semibold text-blue-200">Duration:</span> 24 working days
                        </li>
                        <li>
                          <span className="font-semibold text-indigo-200">Periodicity:</span>
                          <ul className="ml-4 list-disc">
                            <li>6 years + 3 months or 15 lakh km, whichever is earlier (WAP-1 & WAG-5)</li>
                            <li>108 months (9 years) + 3 months or 18 lakh km, whichever is earlier (WAP-4)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loco Links */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Route className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Loco Links
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Locomotives nominated to work coaching trains are programmed to match the time
                  table. These schedules are called loco links. While preparing loco links, factors like
                  adequate powering for the train service, permitted speed of locos, time slots for
                  maintenance schedules, fueling slots in case of diesel, time for shed in / out
                  movements have to be kept in mind.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-cyan-300 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Key Considerations
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Adequate powering for the train service
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Permitted speed of locos
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Time slots for maintenance schedules
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Fueling slots in case of diesel
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Time for shed in / out movements
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-teal-300 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Efficiency Metrics
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <h6 className="font-semibold text-teal-200 mb-2">Performance Assessment</h6>
                        <p className="text-xs text-gray-200">
                          The efficiency of loco links is assessed by train kms per engine day in use.
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <h6 className="font-semibold text-teal-200 mb-2">Optimal Utilization</h6>
                        <p className="text-xs text-gray-200">
                          Care has to be taken to ensure optimum utilization of loco shed capacity by avoiding bunching of locos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-cyan-300 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Important Guidelines
                  </h4>
                  <div className="space-y-3 text-sm text-gray-200">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Lie over periods have to be kept bare minimum duly taking into account the time needed for the terminal operations required to pick up the next train.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Power interception for a train should not be planned unless it is unavoidable.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Diesel loco working under wire to be kept minimum.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Where ARMVs and ARTs are stationed and no powers are designated, links have to be made strategically so as to make available at least one diesel loco at any point of time.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coaching Stock */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Car className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Coaching Stock
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-yellow-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  For providing the various types of services mentioned above, different types of
                  coaches have been designed, manufactured and put into service. They form the
                  coaching stock. There are two types of Coaching Stock.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Passenger Coaching Vehicle */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-yellow-300 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Passenger Coaching Vehicle (PCV)
                    </h4>
                    <p className="text-sm text-gray-200">
                      A vehicle in which whole or some portion is being utilized for carrying passengers.
                    </p>
                  </div>

                  {/* Other Coaching Vehicle */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-orange-300 mb-3 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Other Coaching Vehicle (OCV)
                    </h4>
                    <p className="text-sm text-gray-200 mb-3">
                      These vehicles do not have a passenger carrying portion but are planned to be attached to coaching trains for
                      providing other facilities.
                    </p>
                    <p className="text-sm text-gray-200">
                      Saloons, inspection cars, medical cars, tourist cars, parcels & horse van, composite luggage Power Cars, 
                      Pantry Cars & brake van are some of the OCVs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Coaches and Their Codes */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Types of Coaches and Their Codes
              </h2>
              <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-pink-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  All coaching vehicles are provided with an alphabetical code indicating the facilities
                  provided in them. The meanings of the letters in the code are as follows.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Basic Codes */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-4 flex lg:flex-row flex-col gap-3 items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Basic Facility Codes
                    </h4>
                    <div className="space-y-3 text-sm text-gray-200">
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">W</span>
                        <span className="text-xs text-gray-200">Vestibuled</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">G</span>
                        <span className="text-xs text-gray-200">Self-Generating</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">S</span>
                        <span className="text-xs text-gray-200">Second Class</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">F</span>
                        <span className="text-xs text-gray-200">First Class</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">L</span>
                        <span className="text-xs text-gray-200">Luggage Van</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">R</span>
                        <span className="text-xs text-gray-200">Guard Brake Van</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">Y</span>
                        <span className="text-xs text-gray-200">Ladies Compartment</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">J</span>
                        <span className="text-xs text-gray-200">Ice Compartment</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">Q</span>
                        <span className="text-xs text-gray-200">Attendant</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">D</span>
                        <span className="text-xs text-gray-200">Vendors Compartment</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">P</span>
                        <span className="text-xs text-gray-200">Postal Van</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">U</span>
                        <span className="text-xs text-gray-200">Kitchen</span>
                      </div>
                    </div>
                  </div>

                  {/* Special Service Codes */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-rose-300 mb-4 flex lg:flex-row flex-col gap-3 items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Special Service Codes
                    </h4>
                    <div className="space-y-3 text-sm text-gray-200">
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">CB</span>
                        <span className="text-xs text-gray-200">Pantry Car</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">CD</span>
                        <span className="text-xs text-gray-200">Dining Car</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">CN</span>
                        <span className="text-xs text-gray-200">Sleeper Class Three Tier</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">CW</span>
                        <span className="text-xs text-gray-200">Sleeper Class Two Tier</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">CZ</span>
                        <span className="text-xs text-gray-200">Chair Car</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">CT</span>
                        <span className="text-xs text-gray-200">Tourist Car</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">AC</span>
                        <span className="text-xs text-gray-200">Air Conditioned</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">FC</span>
                        <span className="text-xs text-gray-200">First Class with Coupe</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">GS</span>
                        <span className="text-xs text-gray-200">Second Class with Self Generating Equipment</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">JJ</span>
                        <span className="text-xs text-gray-200">Refrigerator Compartment</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Military and Special Codes */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-pink-300 mb-4 flex lg:flex-row flex-col gap-3 items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Military and Special Codes
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-3 text-sm text-gray-200">
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">M</span>
                        <span className="text-xs text-gray-200">Military Car Ordinary</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">MA</span>
                        <span className="text-xs text-gray-200">Military Car Ambulance</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">ML</span>
                        <span className="text-xs text-gray-200">Military Car Kitchen</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-pink-200">MF</span>
                        <span className="text-xs text-gray-200">Military First Class</span>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm text-gray-200">
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">CTS</span>
                        <span className="text-xs text-gray-200">Tourist Car for 2nd Class Passengers</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">CZACEN</span>
                        <span className="text-xs text-gray-200">Air Conditioned Chair Car with End on Generation</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">EN</span>
                        <span className="text-xs text-gray-200">End-on-Generation</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">FCS</span>
                        <span className="text-xs text-gray-200">First Class Coupe and Second Class</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Codes */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-rose-300 mb-4 flex lg:flex-row flex-col gap-3 items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Additional Codes
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-3 text-sm text-gray-200">
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">FSCN</span>
                        <span className="text-xs text-gray-200">First cum 2nd Class 3-tier Sleeper</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="font-medium text-rose-200">LR</span>
                        <span className="text-xs text-gray-200">Luggage with Brake Van</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-pink-200 mb-2">LHB Coaches</h6>
                      <p className="text-xs text-gray-200">
                        The above codes are generally given to coaches of IRS make having screw coupling. 
                        For the LHB coaches an additional alphabet L is prefixed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coach Maintenance */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-emerald-500 to-green-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Wrench className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Coach Maintenance
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-emerald-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  The following schedules of maintenance are followed for coaching trains&hellip;
                </p>

                <div className="space-y-6">
                  {/* Primary Maintenance */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex lg:flex-row flex-col gap-3 items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Primary Maintenance
                    </h4>
                    <p className="text-sm text-gray-200">
                      Passenger carrying trains are required to be checked for rakes with ICF coaches after every 3500 kms 
                      and LHB Rakes after 4000kms in pit line for 6 hours thoroughly by mechanical & electrical
                      departments for fitness of undergear equipment, passenger facilities and cleanliness.
                    </p>
                  </div>

                  {/* Secondary Maintenance and OEM */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex lg:flex-row flex-col gap-3 items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Secondary Maintenance and OEM (Other end maintenance)
                    </h4>
                    <p className="text-sm text-gray-200">
                      The rakes that have undergone primary maintenance in the originating station are subjected
                      to secondary / other end maintenance in the destination station depending upon the distance traveled.
                    </p>
                  </div>

                  {/* IOH */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex lg:flex-row flex-col gap-3 items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      IOH (Intermediate over hauling)
                    </h4>
                    <p className="text-sm text-gray-200">
                      It is a scheduled maintenance of coaches, checked thoroughly in IOH sheds separately for each coach.
                    </p>
                  </div>

                  {/* POH */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex lg:flex-row flex-col gap-3 items-center">
                      <Wrench className="w-5 h-5 mr-2" />
                      POH (Periodic over hauling)
                    </h4>
                    <p className="text-sm text-gray-200">
                      It is a scheduled maintenance of coaches checked thoroughly in workshops separately for each coach.
                    </p>
                  </div>
                </div>

                {/* Policy Guidelines */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mt-6">
                  <h4 className="font-semibold text-emerald-300 mb-4 flex lg:flex-row flex-col gap-3 items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Policy Guidelines regarding Revised Maintenance pattern of coaching trains
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    (Railway Board letter no. 95/M(C)/141/I Pt. Dated 14.6.17):
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 rounded-xl p-6 border border-emerald-400/20 shadow-lg">
                      <h5 className="text-emerald-200 font-bold text-lg mb-2">1. Rajdhani / Duranto</h5>
                      <p className="text-gray-200">Primary maintenance is carried out at both originating and destination stations.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 rounded-xl p-6 border border-emerald-400/20 shadow-lg">
                      <h5 className="text-emerald-200 font-bold text-lg mb-2">2. Mail/Express round trip more than 3500km for ICF / 4000km for LHB stock</h5>
                      <p className="text-gray-200">Primary maintenance is carried out at both originating and destination stations.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 rounded-xl p-6 border border-emerald-400/20 shadow-lg">
                      <h5 className="text-emerald-200 font-bold text-lg mb-2">3. Mail/Express round trip up to 3500km for ICF / 4000km for LHB stock and touch primary depot within validity</h5>
                      <p className="text-gray-200">Primary maintenance is done at the primary end only once within the limit of 3500 Kms (ICF) or 4000 Kms (LHB) / 96 hours, whichever is earlier.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 rounded-xl p-6 border border-emerald-400/20 shadow-lg">
                      <h5 className="text-emerald-200 font-bold text-lg mb-2">4. Interconnected Mail/Express Trains round trip run up to 3500 Kms (ICF) or 4000 Kms (LHB)</h5>
                      <p className="text-gray-200">To be done within 3500 Kms (ICF) or 4000 Kms (LHB) or 96 hours after the issue of original BPC, whichever is earlier, only at the primary end.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 rounded-xl p-6 border border-emerald-400/20 shadow-lg">
                      <h5 className="text-emerald-200 font-bold text-lg mb-2">5. Passenger trains with toilets including interconnected passenger trains/shuttles</h5>
                      <p className="text-gray-200">Done within 3500 Kms or 96 hours after the issue of original BPC, whichever is earlier, only at the primary end.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 rounded-xl p-6 border border-emerald-400/20 shadow-lg">
                      <h5 className="text-emerald-200 font-bold text-lg mb-2">6. Passenger trains without toilets</h5>
                      <p className="text-gray-200">To be done after 3500 Kms or 7 days, whichever is earlier, only at the primary end.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 rounded-xl p-6 border border-emerald-400/20 shadow-lg">
                      <h5 className="text-emerald-200 font-bold text-lg mb-2">7. Dedicated Parcel Trains</h5>
                      <p className="text-gray-200">To be done after 4500 Kms or 10 days, whichever is earlier.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 rounded-xl p-6 border border-emerald-400/20 shadow-lg">
                      <h5 className="text-emerald-200 font-bold text-lg mb-2">8. Military/Election Special trains</h5>
                      <p className="text-gray-200">To be done within 3500 Kms (ICF) or 4000 Kms (LHB) or 96 hours, whichever is earlier. Other end under gear examination may be permitted only once.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 rounded-xl p-6 border border-emerald-400/20 shadow-lg">
                      <h5 className="text-emerald-200 font-bold text-lg mb-2">9. DEMU/MEMU/EMU<span className="text-xs text-gray-300 ml-2">*</span></h5>
                      <p className="text-gray-200">
                        At the maintenance shed during every trip inspection. 7 days periodicity for 700 HP units; 10 days periodicity for other units.
                        <br />
                        <span className="text-xs text-gray-300 mt-1 block">*At present, BPC for EMU is being given for 14 days instead of 10 days.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spare Coaches */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Car className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Spare Coaches
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  These are general guidelines for spare coaching to be kept at station where Primary
                  maintenance takes place:
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-blue-300 mb-4 flex lg:flex-row flex-col gap-3 items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Spare Coaching Guidelines
                  </h4>
                  <div className="space-y-5">
                    <div className="mb-4">
                      <h5 className="text-blue-200 font-semibold text-lg mb-2">AC Coaches</h5>
                      <ul className="list-disc pl-6 text-gray-200 text-sm space-y-1">
                        <li>
                          <span className="font-semibold text-indigo-200">Traffic Spare:</span> 5%
                        </li>
                        <li>
                          <span className="font-semibold text-blue-200">Mechanical Spare:</span> 6%
                        </li>
                        <li>
                          <span className="font-semibold text-indigo-200">Total Spare:</span> 11%
                        </li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h5 className="text-blue-200 font-semibold text-lg mb-2">Non AC Coaches</h5>
                      <ul className="list-disc pl-6 text-gray-200 text-sm space-y-1">
                        <li>
                          <span className="font-semibold text-indigo-200">Traffic Spare:</span> 4%
                        </li>
                        <li>
                          <span className="font-semibold text-blue-200">Mechanical Spare:</span> 5%
                        </li>
                        <li>
                          <span className="font-semibold text-indigo-200">Total Spare:</span> 9%
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-blue-200 font-semibold text-lg mb-2">Rajdhani/Shatabdi Coaches</h5>
                      <ul className="list-disc pl-6 text-gray-200 text-sm space-y-1">
                        <li>
                          <span className="font-semibold text-indigo-200">Traffic Spare:</span> 5%
                        </li>
                        <li>
                          <span className="font-semibold text-blue-200">Mechanical Spare:</span> 6%
                        </li>
                        <li>
                          <span className="font-semibold text-indigo-200">Total Spare:</span> 11%
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-indigo-300 mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    ICMS Integration
                  </h4>
                  <p className="text-sm text-gray-200">
                    However, with advent of ICMS, it is possible to position spare coaches against
                    IOH/POH on days of expected due and also replace coaches with trouble. Traffic
                    spares have to be fully utilized for catering to demand by attaching to train.
                  </p>
                </div>
              </div>
            </div>

            {/* Crew Links */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-violet-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Crew Links
              </h2>
              <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-violet-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Coaching crew is scheduled to work coaching trains as per time table. These
                  schedules are called crew links. These links are prepared for optimum utilization of
                  crew duly ensuring compliance to HOER.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-violet-300 mb-4 flex items-center">
                    <Route className="w-5 h-5 mr-2" />
                    Separate Crew Links
                  </h4>
                  <p className="text-sm text-gray-200">
                    Separate links are prepared for Mail/Express, passenger and suburban trains.
                  </p>
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

export default OMPage31