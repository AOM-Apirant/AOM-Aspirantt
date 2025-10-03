"use client"
import React from 'react'

const BWMPartAPage13B = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              3.2. Signalling of a train from one block station to another block station
            </h1>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Content */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">3.2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-6">
                      {/* Rule Section */}
                      <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-400 text-xl mt-1">🚂</span>
                          <div>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              Taking &apos;X&apos; and &apos;Y&apos; as two consecutive Block Stations, the sequential procedure for despatching a train, cancelling Line Clear etc., are detailed below. Before asking for Line Clear on controlled sections, the Station Master shall obtain the permission of the Controller.
                            </p>
                          </div>
                        </div>

                        {/* 
                          ఈ భాగం పూర్తిగా ఇంగ్లీష్‌లో టేబుల్ ఫార్మాట్‌లో ఉంది. 
                          Content is already in English and table format as per the instructions.
                        */}
                        <div className="mb-6">
                          <h3 className="text-lg lg:text-xl font-semibold text-blue-300 mb-2">
                            A) Token Block Instruments – Despatching a Train
                          </h3>
                          <div className="text-gray-200 mb-2">
                            <span className="font-semibold">Sending Station:</span> ‘X’ &nbsp; | &nbsp;
                            <span className="font-semibold">Receiving Station:</span> ‘Y’
                          </div>
                          <div className="overflow-x-auto">
                            <table className="min-w-full border border-blue-400/20 rounded-lg bg-gradient-to-r from-blue-900/40 to-indigo-900/40 text-gray-100">
                              <thead>
                                <tr>
                                  <th className="px-3 py-2 border-b border-blue-400/20 text-left">Step</th>
                                  <th className="px-3 py-2 border-b border-blue-400/20 text-left">Action</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-blue-400/10">
                                <tr>
                                  <td className="px-3 py-2">1</td>
                                  <td className="px-3 py-2">Insert SM’s Key and turn.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">2</td>
                                  <td className="px-3 py-2">Give ‘Call attention’ signal.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">3</td>
                                  <td className="px-3 py-2">Insert SM’s Key and turn.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">4</td>
                                  <td className="px-3 py-2">Acknowledge. Attend telephone and give out station name.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">5</td>
                                  <td className="px-3 py-2">On receipt of acknowledgement, attend telephone. Give out station name.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">6</td>
                                  <td className="px-3 py-2">After ensuring correct station has responded, ask for ‘Is line clear for ------- train’.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">7</td>
                                  <td className="px-3 py-2">Ensure correctness of station to which ‘Line Clear’ is required to be given. If line is clear and conditions for granting ‘Line Clear’ are complied with, inform ‘Line is clear’ for train and give Private Number (e.g., 24 - two, four).</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">8</td>
                                  <td className="px-3 py-2">Repeat the Private Number.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">9</td>
                                  <td className="px-3 py-2">Give ‘Call Attention’ signal.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">10</td>
                                  <td className="px-3 py-2">Acknowledge.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">11</td>
                                  <td className="px-3 py-2">Give ‘Is Line Clear’ signal. Prolong the last beat.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">12</td>
                                  <td className="px-3 py-2">Turn the Operating handle to ‘Train Coming From’ position. Acknowledge ‘Is Line Clear’ signal. Prolong the last beat till the needle of Galvanometer deflects.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">13</td>
                                  <td className="px-3 py-2">Turn the Operating Handle to ‘Train Going To’ position, a token comes out.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">14</td>
                                  <td className="px-3 py-2">Give ‘Call attention’ signal.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">15</td>
                                  <td className="px-3 py-2">Acknowledge and attend telephone.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">16</td>
                                  <td className="px-3 py-2">Give token number and class.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">17</td>
                                  <td className="px-3 py-2">Repeat token number with class.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">18</td>
                                  <td className="px-3 py-2">
                                    <div className="mb-1">a) Take ‘OFF’ Last Stop Signal, if any.</div>
                                    <div className="mb-1">b) Hand over token to Driver.</div>
                                    <div>c) On train entering the block section put back the Last Stop Signal if any, to ‘ON’.</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">19</td>
                                  <td className="px-3 py-2">Send ‘Call attention’ signal.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">20</td>
                                  <td className="px-3 py-2">Acknowledge.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">21</td>
                                  <td className="px-3 py-2">Give ‘Train entering block section’ signal.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">22</td>
                                  <td className="px-3 py-2">Acknowledge, attend telephone and note departure time.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">23</td>
                                  <td className="px-3 py-2">Attend telephone and give departure time.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">24</td>
                                  <td className="px-3 py-2">
                                    <div className="mb-1">a) Take ‘OFF’ reception signals.</div>
                                    <div className="mb-1">b) Ensure that train has arrived complete.</div>
                                    <div className="mb-1">c) Put back reception signals to ‘ON’.</div>
                                    <div className="mb-1">d) Obtain the token from the Driver and ensure its correctness.</div>
                                    <div>e) Insert the token into block instrument.</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">25</td>
                                  <td className="px-3 py-2">Give ‘Call attention’ signal, attend telephone and give arrival time.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">26</td>
                                  <td className="px-3 py-2">Acknowledge, attend telephone and note arrival time.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">27</td>
                                  <td className="px-3 py-2">Give ‘Train out of block section’ signal. Prolong the last beat.</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">28</td>
                                  <td className="px-3 py-2">
                                    <div>Turn the Operating Handle to ‘Line closed’ position.</div>
                                    <div>Acknowledge the ‘Train out of block section’ signal. Prolong the last beat.</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">29</td>
                                  <td className="px-3 py-2">Turn the operating handle to ‘Line closed’ position.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="mt-6 bg-blue-900/30 border border-blue-400/20 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-blue-300 text-xl mr-2">💡</span>
                            <span className="text-blue-200 font-semibold">Important Note:</span>
                          </div>
                          <p className="text-gray-200 mb-2">
                            Before turning the Operating Handle, always ensure the Galvanometer is showing the correct deflection as per the following conditions:
                          </p>
                          <ul className="list-none space-y-2 pl-0 text-white">
                            <li className="flex items-start">
                              <span className="mr-2 text-green-400">🔒</span>
                              <span>
                                <span className="font-semibold">Both instruments in ‘Line Closed’ position:</span> Incoming and outgoing beats give <span className="text-green-300 font-semibold">clockwise</span> deflections.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-yellow-400">🔑</span>
                              <span>
                                <span className="font-semibold">Both instruments not in ‘Line Closed’ position and a token is out:</span> Incoming and outgoing beats give <span className="text-yellow-300 font-semibold">anticlockwise</span> deflections.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-purple-400">🔄</span>
                              <span>
                                <span className="font-semibold">Each instrument not in the same position:</span> Outgoing and incoming beats give deflections in <span className="text-purple-300 font-semibold">opposite directions</span>.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default BWMPartAPage13B