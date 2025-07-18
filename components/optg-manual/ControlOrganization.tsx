"use client"
import React from 'react'

const ControlOrganization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-violet-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-violet-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-violet-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              OPERATING CONTROL OFFICE AND ITS FUNCTIONS
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Indian Railways for Operation, Coordination, Planning, Execution, Monitoring 
            </p>
          </div>

          {/* Organizational Chart */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              {/* Sr.DOM */}
              <div className="text-center mb-6">
                <div className="bg-blue-500 text-white px-4 py-6 rounded-lg shadow-lg inline-block">
                  <h3 className="text-base font-semibold">Sr.DOM</h3>
                  <p className="text-xs">Administrative control</p>
                </div>
                <div className="w-1 h-8 bg-gray-400 mx-auto mt-4"></div>
              </div>

              {/* Chief Controller */}
              <div className="text-center mb-8">
                <div className="bg-indigo-600 text-white px-4 py-8 rounded-xl shadow-xl inline-block">
                  <h2 className="text-lg font-bold mb-2">Chief Controller</h2>
                  <p className="text-xs opacity-90">(Head of the Control Office)</p>
                </div>
                <div className="w-1 h-6 bg-gray-400 mx-auto mt-4"></div>
              </div>

              {/* Functions - Mobile Grid */}
              <div className="grid grid-cols-1 gap-3">
                {/* Dy. Chief Controller Goods/Main line */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Dy. Chief Controller</h4>
                  <p className="text-xs text-gray-600 mb-2">Goods/Main line</p>
                  <div className="w-1 h-3 bg-gray-400 mx-auto mb-2"></div>
                  <div className="bg-cyan-200/60 p-2 rounded">
                    <p className="text-xs text-gray-700">Section Controller</p>
                  </div>
                </div>
                {/* Dy. Chief Controller Coaching */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Dy. Chief Controller</h4>
                  <p className="text-xs text-gray-600">Coaching</p>
                </div>
                {/* Dy. Chief Controller Stock */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-violet-500">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Dy. Chief Controller</h4>
                  <p className="text-xs text-gray-600">Stock</p>
                </div>
                {/* Chief Power Controller */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-indigo-500">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Chief Power Controller</h4>
                  <p className="text-xs text-gray-600 mb-2">(DSL)</p>
                  <div className="w-1 h-3 bg-gray-400 mx-auto mb-2"></div>
                  <div className="bg-cyan-200/60 p-2 rounded">
                    <p className="text-xs text-gray-700">PCOR</p>
                  </div>
                </div>
                {/* Chief Traction Loco Controller */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-blue-400">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Chief Traction Loco Controller</h4>
                  <div className="w-1 h-3 bg-gray-400 mx-auto mb-2"></div>
                  <div className="bg-cyan-200/60 p-2 rounded">
                    <p className="text-xs text-gray-700">TLC</p>
                  </div>
                </div>
                {/* Chief Traction Power Controller */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-indigo-400">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Chief Traction Power Controller</h4>
                  <div className="w-1 h-3 bg-gray-400 mx-auto mb-2"></div>
                  <div className="bg-cyan-200/60 p-2 rounded">
                    <p className="text-xs text-gray-700">TPC</p>
                  </div>
                </div>
                {/* TXR Controller */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-violet-400">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">TXR Controller</h4>
                </div>
                {/* Commercial Controller */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-blue-300">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Commercial Controller</h4>
                </div>
                {/* Engineering Controller */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-cyan-400">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Engineering Controller</h4>
                </div>
                {/* Test Room & S&T Incharge */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-blue-200">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Test Room & S&T Incharge</h4>
                </div>
                {/* Security Controller */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-indigo-300">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Security Controller</h4>
                </div>
                {/* FOIS Incharge */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-violet-300">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">FOIS Incharge</h4>
                </div>
                {/* CTNC */}
                <div className="bg-cyan-100/60 p-3 rounded-lg shadow-md border-l-4 border-blue-200">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">CTNC</h4>
                </div>
              </div>
            </div>
            {/* Desktop Layout */}
            <div className="hidden lg:flex justify-between items-start space-x-8">
              {/* Administrative Control */}
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 text-white px-6 py-8 rounded-lg shadow-lg transform -rotate-90 whitespace-nowrap text-center min-w-[200px]">
                  <h3 className="text-lg font-semibold">Sr.DOM</h3>
                  <p className="text-sm">Administrative control</p>
                </div>
                <div className="w-1 h-16 bg-gray-400 mt-4"></div>
              </div>
              {/* Chief Controller */}
              <div className="flex flex-col items-center flex-1">
                <div className="bg-indigo-600 text-white px-8 py-10 rounded-xl shadow-xl text-center min-w-[280px]">
                  <h2 className="text-xl font-bold mb-2">Chief Controller</h2>
                  <p className="text-sm opacity-90">(Head of the Control Office)</p>
                </div>
                {/* Functions Grid */}
                <div className="w-1 h-8 bg-gray-400 mt-4"></div>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-8 w-full">
                  {/* Dy. Chief Controller Goods/Main line */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Dy. Chief Controller</h4>
                    <p className="text-xs text-gray-600">Goods/Main line</p>
                    <div className="w-1 h-4 bg-gray-400 mx-auto mt-2"></div>
                    <div className="bg-cyan-200/60 p-2 rounded mt-2">
                      <p className="text-xs text-gray-700">Section Controller</p>
                    </div>
                  </div>
                  {/* Dy. Chief Controller Coaching */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-cyan-500">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Dy. Chief Controller</h4>
                    <p className="text-xs text-gray-600">Coaching</p>
                  </div>
                  {/* Dy. Chief Controller Stock */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-violet-500">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Dy. Chief Controller</h4>
                    <p className="text-xs text-gray-600">Stock</p>
                  </div>
                  {/* Chief Power Controller */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Chief Power Controller</h4>
                    <p className="text-xs text-gray-600">(DSL)</p>
                    <div className="w-1 h-4 bg-gray-400 mx-auto mt-2"></div>
                    <div className="bg-cyan-200/60 p-2 rounded mt-2">
                      <p className="text-xs text-gray-700">PCOR</p>
                    </div>
                  </div>
                  {/* Chief Traction Loco Controller */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-blue-400">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Chief Traction Loco Controller</h4>
                    <div className="w-1 h-4 bg-gray-400 mx-auto mt-2"></div>
                    <div className="bg-cyan-200/60 p-2 rounded mt-2">
                      <p className="text-xs text-gray-700">TLC</p>
                    </div>
                  </div>
                  {/* Chief Traction Power Controller */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-indigo-400">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Chief Traction Power Controller</h4>
                    <div className="w-1 h-4 bg-gray-400 mx-auto mt-2"></div>
                    <div className="bg-cyan-200/60 p-2 rounded mt-2">
                      <p className="text-xs text-gray-700">TPC</p>
                    </div>
                  </div>
                  {/* TXR Controller */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-violet-400">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">TXR Controller</h4>
                  </div>
                  {/* Commercial Controller */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-blue-300">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Commercial Controller</h4>
                  </div>
                  {/* Engineering Controller */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-cyan-400">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Engineering Controller</h4>
                  </div>
                  {/* Test Room & S&T Incharge */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-blue-200">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Test Room & S&T Incharge</h4>
                  </div>
                  {/* Security Controller */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-indigo-300">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Security Controller</h4>
                  </div>
                  {/* FOIS Incharge */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-violet-300">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">FOIS Incharge</h4>
                  </div>
                  {/* CTNC */}
                  <div className="bg-cyan-100/60 p-4 rounded-lg shadow-md border-l-4 border-blue-200">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">CTNC</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-200 border-b-2 border-blue-500 pb-3">
                  Control Organization Overview
                </h2>
              </div>
              <p className="text-lg font-semibold text-gray-200 mb-6">The main aspects of Control Organization are:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-sm text-gray-700">
                        {num === 1 && "The Control Organisation is one of the Principal Means by which the essential Co-ordination is obtained in Railway Operation."}
                        {num === 2 && "It is from where, the planning activities of day to day working are done and the orders are issued to the stations and yards for execution."}
                        {num === 3 && "It can be compared to the brain of human."}
                        {num === 4 && "Normally the Divisional Control Office is located in the Divisional Head Quarters and connected to the station and yards through various communication systems."}
                        {num === 5 && "Sr.DOM has the administrative control of the Divisional Control Office."}
                        {num === 6 && "Chief controller is the head of the control organisation."}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[7, 8, 9, 10, 11].map((num) => (
                    <div key={num} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-sm text-gray-700">
                        {num === 7 && "The Chief controller is assisted by Dy.Chief controller in Freight and Passenger train operations."}
                        {num === 8 && "Dy. CHC looks after the Traffic Control."}
                        {num === 9 && "For easy and effective controlling, the entire division is divided into various sections and each section is monitored by a Section Controller with a well knit communication between the SCOR and Stations for monitoring minute to minute activities at stations and yards."}
                        {num === 10 && "A section is generally of the range of 150 to 200 km stretch and the trains are controlled in the section by the Section Controller."}
                        {num === 11 && "The entire organization works round the clock, all days of the year without any interruption to monitor actual movement of trains on the entire rail network."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Functions of Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-200 border-b-2 border-cyan-500 pb-3">
                  Functions of Control
                </h2>
              </div>
              <p className="text-lg font-semibold text-gray-200 mb-6">The main functions of Traffic Control are:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <div key={num} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-sm text-gray-700">
                        {num === 1 && "Continuous supervision of the movement of all traffic in the controlled area with a view to achieve the maximum possible operating efficiency."}
                        {num === 2 && "Systematic maintenance of accurate charts of train movements and the arrangements of crossing and precedence to the greatest advantage."}
                        {num === 3 && "Analysis of detentions to trains"}
                        {num === 4 && "Planning, ordering and running of goods trains to the best possible paths."}
                        {num === 5 && "Maintaining the fluidity of marshalling yards/freight terminals."}
                        {num === 6 && "Taking remedial action in the event of yard/terminal congestion."}
                        {num === 7 && "Elimination of avoidable detentions to goods stock at loading and unloading points and at transhipment stations."}
                        {num === 8 && "Allotment and distribution of goods stock to stations,"}
                        {num === 9 && "Supply of information to adjoining controls, terminals and engine changing stations regarding the movements of trains to enable adequate timely arrangements for their reception and onward despatch."}
                        {num === 10 && "Arranging of engineering and other departments blocks with minimum detention to traffic."}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
                    <div key={num} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-sm text-gray-700">
                        {num === 11 && "Running of material trains and other track machines, tower wagons etc."}
                        {num === 12 && "Arranging relief for engine crews and Guards."}
                        {num === 13 && "Ensuring maximum utilization of locomotives."}
                        {num === 14 && "Issuing instructions for train working in case of equipment failures and whenever abnormal methods or working have to be resorted to."}
                        {num === 15 && "Speedy arrangements for relief rescue and restoration in the event of accident."}
                        {num === 16 && "To assist in the realistic planning of time tables and punctual running of passenger trains in co- ordination with various departments, other divisions and other railways."}
                        {num === 17 && "To keep a watch over damaged stock at road side stations, yards and sick lines and to ensure that they are promptly attended to"}
                        {num === 18 && "To rectify immediately the irregularities on the part of line staff and provide them necessary guidance."}
                        {num === 19 && "To provide operations management information."}
                        {num === 20 && "To ensure smooth functioning of FOIS and other IT applications."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Basic Functions Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-2 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-violet-200 border-b-2 border-violet-500 pb-3">
                  Basic Functions of Various Controls
                </h2>
              </div>
              
              {/* Train Control */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-violet-200 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-violet-200 rounded-full mr-3"></span>
                  Train Control
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">
                  Supervising & regulating movement of trains from station to station on the section to avoid delay to trains and to maximize utilization of the capacity of the section by:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                    <div key={num} className="flex items-start space-x-2 p-2 bg-purple-50 rounded">
                      <span className="flex-shrink-0 w-5 h-5 bg-purple-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {num === 1 && "Monitoring movement of trains from station to station and recording paths detention charts."}
                        {num === 2 && "Arranging crossing and precedence of trains judiciously. Arranging working of departmental and material trains."}
                        {num === 3 && "Giving time signal to all stations on the section daily at appointed time"}
                        {num === 4 && "Fulfilling interchange commitment."}
                        {num === 5 && "Arranging proper movement of assisting/banking /light engines."}
                        {num === 6 && "Clearance of sick wagons from Roadside stations."}
                        {num === 7 && "Arrangement of relief for 10 hrs duty staff."}
                        {num === 8 && "Incident management on rail network & at station"}
                        {num === 9 && "Arranging Engineering and/or power blocks in such a way as to involve minimum disturbance to train running."}
                        {num === 10 && "Maintaining fluidity of yards by controlling the flow of stock in and out of yard"}
                        {num === 11 && "Arranging Speedy relief in case of accidents."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traffic Control */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-violet-200 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-violet-200 rounded-full mr-3"></span>
                  Traffic Control
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">
                  Traffic Control is the general and over-riding control for supervision of the movement of goods and coaching traffic on the section. It is exercised by:
                </p>
                <p className="text-gray-200 mb-4 text-sm sm:text-base font-semibold">Collecting information from the various stations on the section in respect of –</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                    <div key={num} className="flex items-start space-x-2 p-2 bg-blue-50 rounded">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {num === 1 && "Registration for wagons outstanding at stations and arrangements for supply of wagons"}
                        {num === 2 && "Number of wagons loaded and empty wagons/rakes awaiting despatch."}
                        {num === 3 && "Arranging running, regulation, putting back and cancellation of trains.(both freight &coaching)"}
                        {num === 4 && "Securing maximum loads for trains."}
                        {num === 5 && "Collecting stock position from the different stations, marshalling and terminal yards."}
                        {num === 6 && "Arrangement of Crew & Guard for freight trains"}
                        {num === 7 && "To keep liaison with adjoining Railways and Divisions for interchange commitments"}
                        {num === 8 && "Monitoring and co-ordinating working of yards, goods sheds sidings, loco-shed, TXR depots etc."}
                        {num === 9 && "Supervising of stock control."}
                        {num === 10 && "Arranging supply of wagons against pending registration."}
                        {num === 11 && "Securing optimum utilization of stock, with minimum detention."}
                        {num === 12 && "To ensure optimum utilization of loco and staff."}
                        {num === 13 && "To arrange ART & Crane from adjoining Railway/Division in case of accidents and other coordination."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Power Control */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-rose-600 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-rose-600 rounded-full mr-3"></span>
                  Power Control
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">Power Control is responsible for:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
                    <div key={num} className="flex items-start space-x-2 p-2 bg-red-50 rounded">
                      <span className="flex-shrink-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {num === 1 && "Provision of motive power to all trains by maintaining position of availability of locomotives"}
                        {num === 2 && "Requisitioning engines from loco sheds for all operating requirements, i.e. Train working, Shunting and Banking."}
                        {num === 3 && "Ensuring economical use of engines by close supervision in Traffic Yards and sheds."}
                        {num === 4 && "Ensuring engines are returned to their &quot;Home Sheds&quot; at regular intervals for servicing and maintenance."}
                        {num === 5 && "Ensuring an even balance of engines and crews between running sheds for meeting demands of traffic,"}
                        {num === 6 && "Ensuring that light engine kilometres is kept to the minimum."}
                        {num === 7 && "Planning and directing engine movements so as to ensure efficient engine utilization and maintaining the prescribed charts, and regular statistics."}
                        {num === 8 && "Co-ordination with sheds and Dy. Chief Controllers (movement) for sending overdue engines and obtaining time of engines coming out of shed."}
                        {num === 9 && "Making timely arrangement for the relief of crew whose duty hours are likely to be exceeded enroute"}
                        {num === 10 && "Taking timely action to balance crew so as to prevent cancellation or putting back of trains on account of shortage of crew."}
                        {num === 11 && "Arranging relief in case of accidents"}
                        {num === 12 && "Maintaining charts indicating engine position/utilisation."}
                        {num === 13 && "Rendering advice and assistance to locomotive running staff regarding trouble shooting."}
                        {num === 14 && "Carrying out any other duties allotted to him by the Sr.DME/DME or Sr.DEE/DEE from time to time."}
                        {num === 15 && "Monitoring day-to-day stock position of HSD and lube oil and watching movement of diesel fuel tank wagons (for power controllers only)"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carriage and Wagon Control */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-yellow-600 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                  Carriage and Wagon Control
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">Carriage and Wagon Control is responsible to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <div key={num} className="flex items-start space-x-2 p-2 bg-yellow-50 rounded">
                      <span className="flex-shrink-0 w-5 h-5 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {num === 1 && "Assist the train and traffic control and to- ensure timely examination and fitness of all trains"}
                        {num === 2 && "To keep a watch over the detachment of sick wagons/coaches and to arrange for their early repair and fitness."}
                        {num === 3 && "Keeping a watch over availability of vital C&W components, like Air Hoses, Washers, Clamps etc..and efficient working of equipments &machines in C&W depot to avoid detention to trains."}
                        {num === 4 && "To keep a watch over placement of wagons/coaches in sick line and their release. To keep account of detention to trains on C&W account and take remedial action. To provide guidance to running staff for trouble shooting."}
                        {num === 5 && "For Electrical Multiple Units, this function is performed by EMU controller."}
                        {num === 6 && "Monitor the movement of POH due stock to workshops"}
                        {num === 7 && "Carrying out any other duties allotted to him by Sr.DME/DME from time to time."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Control */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  Commercial Control
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">Commercial Control assists the Traffic and Train Control:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div key={num} className="flex items-start space-x-2 p-2 bg-green-50 rounded">
                      <span className="flex-shrink-0 w-5 h-5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {num === 1 && "To expeditiously dispose off unclaimed and unconnected wagons, parcel consignments."}
                        {num === 2 && "To keep a watch on detention to trains on Commercial account like Alarm Chain Pulling, loading/unloading, sealing, issue of tickets etc.."}
                        {num === 3 && "Carriage watering, Parcel working etc., and take remedial measures."}
                        {num === 4 && "To ensure quick transhipment of sick wagons by arranging matching stock and labour."}
                        {num === 5 && "To keep a watch over submission of station returns."}
                        {num === 6 && "Monitoring of public complaints lodged at the stations."}
                        {num === 7 && "To ensure proper maintenance of public amenities available at stations."}
                        {num === 8 && "To collect figures of the station and daily put up to higher officials."}
                        {num === 9 && "Any other job entrusted by Sr. DCM/DCM."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traction Power Control */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Traction Power Control
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">Traction Power Control is provided to assist in Traffic and Train Control for:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-start space-x-2 p-2 bg-indigo-50 rounded">
                      <span className="flex-shrink-0 w-5 h-5 bg-indigo-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {num === 1 && "Arranging maintenance blocks for OHE"}
                        {num === 2 && "Arranging alternative power supply in case of tripping etc., through remote control."}
                        {num === 3 && "Monitoring OHE failures and taking remedial action."}
                        {num === 4 && "Monitoring detention of trains on OHE accounts."}
                        {num === 5 && "Guiding running/ station staff in trouble shooting."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Control */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-teal-500 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-teal-500 rounded-full mr-3"></span>
                  Engineering Control
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[1, 2].map((num) => (
                    <div key={num} className="flex items-start space-x-2 p-2 bg-teal-50 rounded">
                      <span className="flex-shrink-0 w-5 h-5 bg-teal-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {num}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {num === 1 && "Monitors imposition & cancellation of Engineering Restrictions, Working of track machines & monitoring integrated maintainable blocks."}
                        {num === 2 && "To co-ordinate works during maintenance blocks Running of Material trains."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signal Control */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-pink-500 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                  Signal Control
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">Signal Control assists Traffic and Train Control and is responsible:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['a', 'b', 'c'].map((letter) => (
                    <div key={letter} className="flex items-start space-x-2 p-2 bg-pink-50 rounded">
                      <span className="flex-shrink-0 w-5 h-5 bg-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {letter}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {letter === 'a' && "To keep a watch over the S&T failures and take remedial action."}
                        {letter === 'b' && "To ensure efficient working of communication channels"}
                        {letter === 'c' && "To record the number of failures and inform to their officers"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Control */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-orange-500 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  Security Control
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">Security Control is responsible for:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['a', 'b'].map((letter) => (
                    <div key={letter} className="flex items-start space-x-2 p-2 bg-orange-50 rounded">
                      <span className="flex-shrink-0 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {letter}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {letter === 'a' && "Prevention of theft of property and assists passengers in trains/stations.."}
                        {letter === 'b' && "To report to their higher officials any untoward incidents at stations/trains"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 sm:mt-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-4 sm:p-6 border border-white/20">
            <h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-3 sm:mb-4 flex items-center">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 p-2 rounded-full mr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
              </span>
              Chart Legend
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded"></div>
                <span className="text-gray-100">Administrative Control</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-indigo-600 rounded"></div>
                <span className="text-gray-100">Chief Controller</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-100 border-l-4 border-blue-500 rounded"></div>
                <span className="text-gray-100">Subordinate Functions</span>
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

export default ControlOrganization