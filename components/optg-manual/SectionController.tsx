"use client"
import React from 'react'

const SectionController = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-rose-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-3 sm:py-8 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 sm:mb-4 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-500 to-rose-600 p-2 sm:p-3 rounded-full">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl sm:text-3xl text-xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent mb-3 sm:mb-4 animate-fade-in">
              SECTION CONTROLLER DUTIES & RESPONSIBILITIES
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-rose-600 mx-auto mb-3 sm:mb-4 rounded-full"></div>
            <p className="text-sm sm:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Indian Railways Section Control Office Section Controller&apos;s Duties and Responsibilities
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 sm:space-y-8">
            {/* Section Controller Duties Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-200 mb-4 sm:mb-6 border-b-2 border-purple-500 pb-2 sm:pb-3 flex items-center justify-center gap-4 flex-col text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
                Section Controller Duties
              </h2>
              <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                SCOR is a competent person with profound knowledge and vast experience. <br/> <br/> He should have thorough knowledge of the section which he controls (topography, system of working, signals, traffic facilities, nature of traffic. Etc.). <br/> <br/> Hence he is a friend, philosopher and guide to field staff. He controls trains in his section. <br/> <br/> Some important duties are mentioned below:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((num) => (
                  <div key={num} className="flex items-start space-x-2 lg:p-4 p-3 bg-purple-50/10 rounded-lg hover:bg-purple-50/20 transition-all duration-300">
                    <span className="flex-shrink-0 w-5 h-5 bg-purple-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      {num}
                    </span>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {num === 1 && "Appear on duty as per roster after availing rest."}
                      {num === 2 && "Collect instructions from Dy.CHC, CHC particularly about any special movements."}
                      {num === 3 && "After noting the instructions on the chart, take over charge enquiring about special task to be carried out."}
                      {num === 4 && "Arranging for the supply and clearance of stock as ordered by Dy. Controller."}
                      {num === 5 && "In case chart is computerized plan the running of trains 2 hours advancedly."}
                      {num === 6 && "Record all special events for every train in remarks column of chart."}
                      {num === 7 && "Inform terminal stations and crew control cell about late running of trains to avoid the calling of Crew and Guards earlier than necessary or to put back trains wherever advisable."}
                      {num === 8 && "Repeat forecast programmes of trains and locos to terminal points/yards/loading points."}
                      {num === 9 && "Monitor every train constantly; any delay is caused to the train draw attention of LP/Guard through SM."}
                      {num === 10 && "Judiciously arrange crossing and precedence. Be an opportunist to utilize the path whenever delay is caused to regular train."}
                      {num === 11 && "Ensure passenger trains running punctually."}
                      {num === 12 && "Keeping in close touch with Engineering-blocks and working of material trains so as to give the maximum possible time with least detention to other traffic."}
                      {num === 13 && "Incident management to include adjusting movements of trains in view of the likely impact of the incident, informing all concerned"}
                      {num === 14 && "As far as possible avoid stabling of trains. If it is warranted ensure stabling is not done on main line."}
                      {num === 15 && "Be vigilant in noting the Block instrument and signal failures and accordingly change the planning."}
                      {num === 16 && "Give time signal at 16.00 hrs to all stations."}
                      {num === 17 && "Record signal failures and convey to test room."}
                      {num === 18 && "Record and transmit caution order messages to notice stations."}
                      {num === 19 && "Repeat promptly, weather warning messages and take acknowledgement from stations."}
                      {num === 20 && "Maintain prescribed registers correctly."}
                      {num === 21 && "Record accident messages and repeat the same to all concerned."}
                      {num === 22 && "Regulate traffic during accidents."}
                      {num === 23 && "A special register to be opened to record all events during accidents in a sequence."}
                      {num === 24 && "Order MRT/ART when message of accident is received."}
                      {num === 25 && "Maintain chart neat."}
                      {num === 26 && "While handing over chart do not be in a hurry. Make the reliever understand all instructions."}
                      {num === 27 && "Keeping a watch over damaged vehicles detached at road side stations and arranging repairs or transhipment of their contents and proper attention on the part of the train examining staff."}
                      {num === 28 && "Making timely arrangements for the relief of Guards /loco pilots whose duty hours are likely to exceed enroute."}
                      {num === 29 && "Recording stock report (where stock clerks are not posted)"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Working of Trains when Control is interrupted Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-pink-200 mb-4 sm:mb-6 border-b-2 border-pink-500 pb-2 sm:pb-3 flex items-center justify-center gap-4 flex-col text-center">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 p-2 rounded-full mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </span>
                Working of Trains when Control is interrupted
              </h2>
              <div className="bg-pink-50/10 p-4 rounded-lg border-l-4 border-pink-400">
                <p className="text-sm text-gray-200 leading-relaxed">
                  When the control is interrupted and no communication with the Controller is possible, Station Masters will be responsible for the working and regulating of trains, keeping in view the instructions issued by the railway administration.
                </p>
              </div>
            </div>

            {/* Books/Documents Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-rose-200 mb-4 sm:mb-6 border-b-2 border-rose-500 pb-2 sm:pb-3 flex items-center justify-center gap-4 flex-col text-center">
                <span className="bg-gradient-to-r from-rose-400 to-purple-400 p-2 rounded-full mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                Books/Documents and basic records to be kept in Control Office
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((num) => (
                  <div key={num} className="flex items-start space-x-2 lg:p-4 p-3 bg-rose-50/10 rounded-lg hover:bg-rose-50/20 transition-all duration-300">
                    <span className="flex-shrink-0 w-5 h-5 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      {num}
                    </span>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {num === 1 && "Station Working Rules of all stations."}
                      {num === 2 && "Working facilities available on the transhipment sheds."}
                      {num === 3 && "Schedule of shunting engines in the various yards."}
                      {num === 4 && "Link diagrams of rakes and engines working the passenger services and also of goods trains where laid down."}
                      {num === 5 && "Crew link diagram of the various services, for the running staff."}
                      {num === 6 && "Details of maximum moving dimensions permitted on the various section of the railway."}
                      {num === 7 && "Map showing the maximum permissible axle load on all the railways with which traffic is interchanged."}
                      {num === 8 && "Charts showing line capacity of the various sections."}
                      {num === 9 && "Index sections and plans of the various sections of the jurisdiction and details of train watering, Engine fuelling etc."}
                      {num === 10 && "Master charts depicting all trains indicated in the working time table in force."}
                      {num === 11 && "Charts showing jurisdiction of the various officials"}
                      {num === 12 && "Zone and telephone numbers of Civil, Police, Military authorities"}
                      {num === 13 && "List of various hospitals with Telephone Numbers."}
                      {num === 14 && "List of stations Civil, district-wise."}
                      {num === 15 && "OHE Sectioning diagram."}
                      {num === 16 && "Diagrams showing the layout of line wires of the Control Circuit."}
                      {num === 17 && "Line patrol chart"}
                      {num === 18 && "A calendar of returns"}
                      {num === 19 && "Cranes and Wagon weigh bridges. Turn tables and Triangles."}
                      {num === 20 && "List of spare coaches based in the division as well as slip coaches running on and across the division."}
                      {num === 21 && "List of coaching Rakes allotted to the division and those passing over division."}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Registers Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-300 mb-4 sm:mb-6 border-b-2 border-purple-400 pb-2 sm:pb-3 flex items-center justify-center gap-4 flex-col text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Registers generally maintained in Control
              </h2>
              
              {/* By the Section controller */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-pink-200 mb-3 sm:mb-4 flex items-center justify-center gap-4 flex-col text-center">
                  <span className="w-3 h-3 bg-pink-500 rounded-full mr-2 sm:mr-3"></span>
                  By the Section controller:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                    <div key={num} className="flex items-start space-x-2 lg:p-4 p-3 bg-pink-50/10 rounded-lg hover:bg-pink-50/20 transition-all duration-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {num === 1 && "Section controller&apos;s diary and charge book. Inward message book."}
                        {num === 2 && "Sick wagon register. Yard report registers."}
                        {num === 3 && "In-coming and out-going trains RD (Running Daily) (other than passenger)."}
                        {num === 4 && "Train Advice (T. A Book)."}
                        {num === 5 && "Caution Order Register."}
                        {num === 6 && "Caution Order Message Book."}
                        {num === 7 && "Morning (6.O clock) Position Register"}
                        {num === 8 && "Interchange Register."}
                        {num === 9 && "Load Register."}
                        {num === 10 && "Incoming and Outgoing passenger Train Running Daily."}
                        {num === 11 && "Points and S & T Failure Register."}
                        {num === 12 && "Important Yard Balance Register."}
                        {num === 13 && "Control Failure Register."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* By the Chief Controller */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-rose-200 mb-3 sm:mb-4 flex items-center justify-center gap-4 flex-col text-center">
                  <span className="w-3 h-3 bg-rose-500 rounded-full mr-2 sm:mr-3"></span>
                  By the Chief Controller (Movement),(Coaching)/Dy. Chief Controller:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii', 'xiii', 'xiv'].map((letter) => (
                    <div key={letter} className="flex items-start space-x-2 lg:p-4 p-3 bg-rose-50/10 rounded-lg hover:bg-rose-50/20 transition-all duration-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {letter}
                      </span>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {letter === 'i' && "Yard Running Balance Register."}
                        {letter === 'ii' && "Dy. Chief Controller&apos;s Diary & Charge Book. Train Advise book."}
                        {letter === 'iii' && "Forecast and Acceptance Book. Train Ordering Book."}
                        {letter === 'iv' && "Punctuality Register."}
                        {letter === 'v' && "Accident Register."}
                        {letter === 'vi' && "HQ&apos;s Conference Register."}
                        {letter === 'vii' && "Goods Train Performance Register."}
                        {letter === 'viii' && "GM&apos;s Unusual Occurrence Register."}
                        {letter === 'ix' && "CTNL (Movement)/(Coaching)/Dy TNL&apos;s Order Book."}
                        {letter === 'x' && "ODC Register."}
                        {letter === 'xi' && "Rajdhani Express (and similar trains)"}
                        {letter === 'xii' && "Caution Order Register."}
                        {letter === 'xiii' && "Emergency and General Control Office Message Register (Inward). Engine Book."}
                        {letter === 'xiv' && "Emergency and General Control Office Message Register (Outward.) Interchange Register."}
                      </p>
                    </div>
                  ))}
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

export default SectionController