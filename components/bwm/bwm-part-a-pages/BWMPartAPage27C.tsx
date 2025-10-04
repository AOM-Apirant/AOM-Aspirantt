"use client"
import React from 'react'

const BWMPartAPage27C: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              3.22
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Private Number</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                <div>
                  <p className="mb-4">
                    <span className="font-semibold text-blue-300">a)</span> Two PN sheets shall be supplied to each Station Master. The PN
                    sheets issued shall be numbered by the Traffic Inspector in the
                    order in which they are to be used and shall bear the signature of
                    Traffic Inspector. The PN sheets shall be kept under lock and key in
                    the personal custody of the Station Master on duty to whom they
                    are issued. A page of the PN sheet is given below as a specimen:
                  </p>
                  <p className="mb-4 text-blue-200 font-medium">Note: Train Number is represented as TN.</p>
                  
                  {/* PN Sheet Table */}
                  <div className="bg-white/5 rounded-lg p-4 my-6 border border-white/10">
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div className="font-semibold text-blue-300">Date</div>
                      <div className="font-semibold text-blue-300">Date</div>
                      <div className="font-semibold text-blue-300">Date</div>
                      <div className="font-semibold text-blue-300">Date</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-center mt-2">
                      <div className="font-semibold text-indigo-300">PN TN</div>
                      <div className="font-semibold text-indigo-300">PN TN</div>
                      <div className="font-semibold text-indigo-300">PN TN</div>
                      <div className="font-semibold text-indigo-300">PN TN</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-center mt-4 space-y-2">
                      <div>25 24</div>
                      <div>21 18</div>
                      <div>32 15</div>
                      <div>64 29</div>
                      <div>29 16</div>
                      <div>34 57</div>
                      <div>37 27</div>
                      <div>18 21</div>
                      <div>23 39</div>
                      <div>15 42</div>
                      <div>12 43</div>
                      <div>22 18</div>
                      <div>31 58</div>
                      <div>26 35</div>
                      <div>10 14</div>
                      <div>38 42</div>
                      <div>14 10</div>
                      <div>47 66</div>
                      <div>56 11</div>
                      <div>55 48</div>
                      <div>18 17</div>
                      <div>69 74</div>
                      <div>44 32</div>
                      <div>12 83</div>
                    </div>
                  </div>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">b)</span> A Private Number shall be given for each train for which the Station
                    Master grants Line Clear to the Station Master applying for Line Clear.
                    Both Station Masters shall record the Private Number given and
                    received for the train in the Train Signal Register. Numbers shall be
                    allotted to the successive trains in the order in which the numbers are
                    printed in the sheet in use. When a number is allotted to a train, it shall
                    be scored out with a line drawn horizontally through it, the number of
                    the train for which it is issued and the date on which it is issued being
                    entered in the columns provided for the purpose. If a Private Number
                    has been allotted to a train the running of which is subsequently
                    cancelled, the same Private Number shall not be re-allotted to any
                    succeeding train.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">c)</span> If the next number to be used is the same as the one last issued, the
                    sender shall cancel the number in his sheet, add the remark as
                    last sign it and issue the next number. If the similar number had
                    already been given before it is detected, the station to which the
                    number has been given shall be advised so that the number can be
                    cancelled and the next number issued. The Station Master receiving
                    the Private number shall be held responsible for seeing that no two
                    consecutive Private Numbers are received from the same station giving
                    Line Clear.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">d)</span> No person (except Inspecting Officials) shall be allowed to have access
                    to it. Each sheet, when exhausted, shall be sent in a sealed cover to the
                    Traffic Inspector of the section who shall replace it by another.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">e)</span> Only one sheet shall be in use at a time. Care shall be taken to see that
                    adjacent stations are supplied with sheets bearing different numbers.
                    The PN sheets shall not be issued to individuals and shall be issued to a
                    post. Not more than two PN sheets shall be available with staff on duty.
                    PN sheets shall be serially numbered before issue.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">f)</span> Traffic Inspector or any other Inspecting Official when visiting stations
                    shall see that PNs are scored out correctly and that the train number
                    and date are entered against each.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">g)</span> When a PN sheet in use is lost or mislaid, the Station Master shall utilise,
                    if available, the PN sheet supplied for future use. The Station Master
                    shall also immediately write to the Traffic Inspector for a fresh PN sheet
                    stating the reasons.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">h)</span> Used up PN sheets shall be preserved for 6 months after the half year in
                    which they are completed and after that they shall be treated as old
                    records and disposed off.
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

export default BWMPartAPage27C