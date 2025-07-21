"use client"
import React from 'react'

const ChiefController = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-3 sm:py-8 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-3 sm:mb-4 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-2 sm:p-3 rounded-full">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl sm:text-3xl text-xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-3 sm:mb-4 animate-fade-in">
              CHIEF CONTROLLER DUTIES & RESPONSIBILITIES
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-3 sm:mb-4 rounded-full"></div>
            <p className="text-sm sm:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Indian Railways Control Office Chief Controller&apos;s Duties and Responsibilities
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 sm:space-y-8">
            {/* Chief Controller (In-charge) Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-green-200 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2 sm:pb-3 flex items-center justify-center gap-4 flex-col text-center">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 p-2 rounded-full mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Chief Controller (In-charge)
              </h2>
              <p className="text-sm sm:text-base text-gray-200 mb-4 leading-relaxed">
                The Chief controller is in overall charge of control office and is responsible to use his expertise in train and traffic controlling. His duties include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
                  <div key={num} className="flex items-start space-x-2 lg:p-4 p-3 bg-green-50/10 rounded-lg hover:bg-green-50/20 transition-all duration-300">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      {num}
                    </span>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {num === 1 && "A review of previous day&apos;s performance to confirm that all forecasts made have been fully met. For shortfalls, reasons have to be pinpointed to prevent recurrence"}
                      {num === 2 && "Prepare current forecast indicating assistance needed from Headquarters, adjoining Divisions, railways generally related to interchange, loading and locomotive utilization."}
                      {num === 3 && "Checking control charts and bringing to the notice of the Senior DOM/DOM all avoidable detention to trains."}
                      {num === 4 && "Punctuality performance with particular reference to trains which lost punctuality. Maintaining statistics regarding the punctuality of passenger trains. Scrutiny of stock papers, Monitoring interchange obligations."}
                      {num === 5 && "Watching detention to stock at stations and terminals"}
                      {num === 6 && "Watching the work of marshalling yards/freight terminals."}
                      {num === 7 && "Maintaining liaison with neighboring Divisions"}
                      {num === 8 && "Watching utilization of loco and their terminal detention."}
                      {num === 9 && "Checking duty hours of running staff and balancing of crews."}
                      {num === 10 && "Granting engineering blocks, power blocks etc., as per schedule/plan."}
                      {num === 11 && "Have a good liaison with other departments like Loco, C&W, S&T, etc."}
                      {num === 12 && "Maintain the staff position and ensure nobody is put to over working"}
                      {num === 13 && "Attending control office in cases of accident"}
                      {num === 14 && "Establishment work of control office"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chief Controller (Movement) Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-emerald-200 mb-4 sm:mb-6 border-b-2 border-emerald-500 pb-2 sm:pb-3 flex items-center justify-center gap-4 flex-col text-center">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 p-2 rounded-full mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Chief Controller (Movement) / Dy. Chief Controller / Shift Duty
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
                  <div key={num} className="flex items-start space-x-2 lg:p-4 p-3 bg-emerald-50/10 rounded-lg hover:bg-emerald-50/20 transition-all duration-300">
                    <span className="flex-shrink-0 w-5 h-5 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      {num}
                    </span>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {num === 1 && "General supervision of control office in the absence of CHC and supervision of the work over SCOR and PCOR."}
                      {num === 2 && "Gather information from all the section control boards about the flow of trains."}
                      {num === 3 && "Co-ordinate the work of various Section Controllers."}
                      {num === 4 && "Receive specific orders/standing instructions from Sr.DOM/DOM for the movement of trains and plan accordingly."}
                      {num === 5 && "Contact adjoining divisions, interchange points of other railways, collect the expected incoming train particulars and repeat the outgoing train particulars for interchange."}
                      {num === 6 && "Ensure trains are running with valid BPC whenever required arrange for checking by the TXR depots."}
                      {num === 7 && "Monitor movements of locos in and out from shed and connect them to appropriate trains."}
                      {num === 8 && "Keep close watch on the control boards and give suggestions wherever required."}
                      {num === 9 && "Keep special watch over movement of CC rakes, Container specials, Perishable and live stocks and ODC traffic."}
                      {num === 10 && "Allotting empty stock/rakes to loading stations in accordance with current priority"}
                      {num === 11 && "Dealing immediately with significant detentions or transport bottlenecks and other unusuals."}
                      {num === 12 && "Keeping constant touch with the working of major terminals & Marshalling yards and taking timely action to deal with congestion."}
                      {num === 13 && "Giving advice of serious accidents to all concerned, and taking, charge of the affected sections."}
                      {num === 14 && "Maintain discipline among control staff in the absence of Chief Controller."}
                      {num === 15 && "Maintain co-ordination and liaison with various functionaries involved in train running."}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chief Controller (Stock) Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-teal-200 mb-4 sm:mb-6 border-b-2 border-teal-500 pb-2 sm:pb-3 flex items-center justify-center gap-4 flex-col text-center">
                <span className="bg-gradient-to-r from-teal-400 to-green-400 p-2 rounded-full mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </span>
                Chief Controller (Stock) / Dy. Chief Controller
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
                  <div key={num} className="flex items-start space-x-2 lg:p-4 p-3 bg-teal-50/10 rounded-lg hover:bg-teal-50/20 transition-all duration-300">
                    <span className="flex-shrink-0 w-5 h-5 bg-teal-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      {num}
                    </span>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {num === 1 && "To receive the wagon demands from different loading points and register them in sequence in a register."}
                      {num === 2 && "Scrutinizing the indent register in detail with regard to the oldest date of registration, nature of goods and type of stock required for transport at various stations."}
                      {num === 3 && "Assisting the Sr. DOM/DOM in allotments."}
                      {num === 4 && "While allotting cross checking the daily Bans & Restriction Bulletin with Restriction Messages received from HQ office and issuing the same."}
                      {num === 5 && "Checking Divisional stock report and position of empties as per demand."}
                      {num === 6 && "Planning to issue loading order to stations in advance the supply of stock, checking, loading and clearance keeping in view interchange obligation and orders received"}
                      {num === 7 && "In case shortfall arrange to get the wagons from adjoining division/zone."}
                      {num === 8 && "Checking transhipment activity"}
                      {num === 9 && "In case of cancellation of demand after physical supply or sluggish loading , ascertain cause and record."}
                      {num === 10 && "Chasing movements of stock as per supply order issued on the previous day. Keeping a close watch over hot axle, special type and unconnected wagons and special type of rakes for their speedy movement."}
                      {num === 11 && "Keeping a close watch over the movements of seasonal perishable traffic and supply of suitable stock for its clearance."}
                      {num === 12 && "Watching movements of damaged loaded stock in sick line and yards on their division."}
                      {num === 13 && "Informing all major customers about their inward trains&apos; expected arrival based on FOIS pipe line, Optimizing loading, unloading, transhipment etc."}
                      {num === 14 && "Maintaining record of performance of the corresponding previous period for comparison"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deputy Chief Controller (Punctuality) Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-green-300 mb-4 sm:mb-6 border-b-2 border-green-400 pb-2 sm:pb-3 flex items-center justify-center gap-4 flex-col text-center">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 p-2 rounded-full mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Deputy Chief Controller (Punctuality)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
                  <div key={num} className="flex items-start space-x-2 lg:p-4 p-3 bg-green-50/10 rounded-lg hover:bg-green-50/20 transition-all duration-300">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-400 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      {num}
                    </span>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {num === 1 && "Responsible to monitor the punctuality position of Passenger/Express/Suburban trains."}
                      {num === 2 && "Have a special watch on movement of Special trains and other important passenger carrying trains ( daily/non daily)"}
                      {num === 3 && "Ensure rake links are properly materialized."}
                      {num === 4 && "Ensure rake composition are not disturbed."}
                      {num === 5 && "Monitor overlapping rakes and scratch rakes for properly used in case of exigencies."}
                      {num === 6 && "Try to maintain the ineffective % of coaches are not exceeding the authorized limit."}
                      {num === 7 && "Correct the &quot;Master Chart&quot; in case of any mistake or variation in train timing."}
                      {num === 8 && "Meticulously plan movement of tourist traffic, marriage parties, student/delegate specials, VIP coaches, officers saloon etc."}
                      {num === 9 && "Project the operational constraints in the time table meeting."}
                      {num === 10 && "Dy CHC (Punctuality) is to receive and record accidents/unusual occurrences convey them to all concerned."}
                      {num === 11 && "Order MRT/ART and monitor their run."}
                      {num === 12 && "Be responsible in planning and diverting cancelling/regulating passenger carrying train whenever accidents takes place."}
                      {num === 13 && "Record all the information received from accident spot in a log book."}
                      {num === 14 && "Inform the developments at the site of accident to the officers whenever required."}
                      {num === 15 && "Maintaining Detention Reports of Coaching trains."}
                    </p>
                  </div>
                ))}
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

export default ChiefController