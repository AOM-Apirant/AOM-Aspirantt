'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  MessageSquare,
  Bell
} from 'lucide-react'

const IRACT1989Section89 = () => {
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
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">CHAPTER X</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Special Provisions as to Goods Booked to Notified Stations</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 89 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Bell className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                89. Power to declare notified stations.-
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (1) The Central Government may , if it is satisfied that it is necessary that goods entrusted for carriage by train intended solely for the carriage of goods to any railway station should be removed without delay from such railway station, declare, by notification, such railway station to be a notified station for such period as may be specified in the notification :
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2">
                        Provided that before declaring any railway station to be a notified station under this Sub-Section, the Central Government shall have regarded to all or any of the following factors, namely :-
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (a) the volume of traffic and the storage space available at such railway station ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (b) the nature and quantities of goods generally booked to such railway station ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (c) the scope for causing scarcity of such goods by not removing them for long periods from such railway station and the hardship which such scarcity may cause to the community ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (d) the number of wagons likely to be held up at such railway station if goods are not removed there from quickly and the need for quick movement and availability of such wagons ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (e) Such other factors (being relevant from the point of view of the interest of the general public) as may be prescribed :
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2">
                        Provided further that the period specified in any notification issued under this subsection in respect of any railway station shall not exceed six months in the first instance, but such period may by notification, be extended from time to time by a period not exceeding six months on each occasion.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (2) If any person entrusting any goods to a railway administration to be carried to a notified station makes an application in which form and manner as may be prescribed and specifies therein the address of the person to whom intimation by registered post of the arrival of the goods at the notified station shall be given and pays the postage of the arrival of the goods at the notified station shall be given and pays the postage charges required for giving such intimation, the railway administration shall, as soon as may be after the arrival of the goods at the notified station, shall such intimation accordingly.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (3) There shall be exhibited at a conspicuous place at each notified station a statement in the prescribed form setting out the description of the goods which by reason of the fact that they have not been removed from the station within a period of seven days from the termination of transit thereof are liable to be sold, in accordance with the provision, of sub-section (1) of sec. 90 by public auction and the dates on which they would be do sold :
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2">
                        Provided that different statements may be so exhibited in respect of goods proposed to be sold on different dates.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (4) If the goods specified in any statement to be exhibited under subsection (3) include essential commodities, the railway servant preparing the statement shall, as soon as may be after the preparation of such statement, forward a copy thereof to -
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (a) the representative of the Central Government nominated by that Government in this behalf ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (b) the representative of the State Government, nominated by that Government in this behalf; and
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (c) the District Magistrate within the local limits of whose jurisdiction the railway station is situated.
                      </p>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comment</h3>
                    </div>
                    <div className="space-y-3 ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 89, sub-section (1) empowers the Central Government to declare a station to be notified station for the purposes of removing consignment without delay under the circumstances specified therein.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-section (2) lays down the manner of giving notice of goods carried to a notified station.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-section (3) provides that goods not removed from a notified station within seven days from the termination of transit may be sold under subclause (1) of Cl. 88 by public auction.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-section (4) provides that if the goods to be sold include essential commodities, the copy of statement may be sent to the representative of the Central Government, the State Government and the District Magistrate within whose local limits such notified station is situated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Indian Railways Act 1989 - Chapter X
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

export default IRACT1989Section89