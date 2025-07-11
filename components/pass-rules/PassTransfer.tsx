import React from 'react'

const PassTransfer = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-emerald-200">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Pass on Transfer
              </h2>
              <p className="text-emerald-600 font-medium">
                Governing Entitlement of Kit Passes
              </p>
            </div>
          </div>

          {/* Entitlement Cards - Mobile Friendly */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Category A */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-500">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">PLPM 11 TO 17</h4>
                  <span className="text-emerald-700 text-sm font-medium">
                    Senior Officers
                  </span>
                </div>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>
                  <strong>6000 Kgs</strong> by Goods train plus reimbursement of
                  transportation of motor car by road
                </li>
                <li>
                  <strong>OR</strong> One Container (40 Feet E.U.) or two
                  Containers (20 Feet E.U.) (including cost of door-to-door
                  movement of Container) plus reimbursement of transportation of
                  motor car by road
                </li>
                <li>
                  <strong>OR</strong> One VPU by passenger carrying trains
                  subject to a cut of 20% in the admissible amount of Composite
                  Transfer Grant if a car is carried in the VPU and of 25% if
                  car is not carried
                </li>
              </ul>
            </div>
            {/* Category B */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">PLPM 6 TO 11</h4>
                  <span className="text-teal-700 text-sm font-medium">
                    Mid-Level Officers
                  </span>
                </div>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>
                  <strong>6000 Kgs</strong> by Goods train plus reimbursement of
                  transportation of motor car by road
                </li>
                <li>
                  <strong>OR</strong> One Container (1TEU) (including cost of
                  door-to-door movement of Container) plus reimbursement of
                  transportation of motor car by road
                </li>
                <li>
                  <strong>OR</strong> One VP/VPU by passenger carrying trains
                  subject to a cut of 20% in the admissible amount of Composite
                  Transfer Grant if a car is carried in the VPU and of 25% if
                  car is not carried
                </li>
              </ul>
            </div>
            {/* Category C */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">PLPM 5</h4>
                  <span className="text-blue-700 text-sm font-medium">
                    PLPM 5
                  </span>
                </div>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>
                  <strong>3000 Kgs</strong> of luggage plus one Motor
                  Cycle/Scooter by Goods trains
                </li>
                <li>
                  <strong>OR</strong> by Parcel Van/Brake van attached to
                  passenger carrying trains or by road
                </li>
              </ul>
            </div>
            {/* Category D */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">PLPM 1 TO 4</h4>
                  <span className="text-purple-700 text-sm font-medium">
                    Junior Staff
                  </span>
                </div>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>
                  <strong>1500 Kgs</strong> of luggage plus one Motor
                  Cycle/Scooter/Moped/Bicycle by Goods trains
                </li>
                <li>
                  <strong>OR</strong> by Parcel Van/Brake van attached to
                  passenger carrying trains or by road
                </li>
              </ul>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Important Note
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  The entitlements and other terms &amp; conditions as detailed
                  in <strong>ACS No.71 to RSPR -1986</strong>, issued vide
                  Board&apos;s letter No.E(w)2004/PS5-9/1 dated 01.08.2011,
                  shall continue to be applicable.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Reference Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h4 className="font-semibold text-gray-800">Senior Officers</h4>
              </div>
              <p className="text-sm text-gray-600">
                PLPM 11-17: Maximum benefits with multiple transport options
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Mid-Level Officers
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                PLPM 6-11: Comprehensive transport and container options
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <h4 className="font-semibold text-gray-800">PLPM 5</h4>
              </div>
              <p className="text-sm text-gray-600">
                3000 Kgs luggage + Motor Cycle/Scooter transport
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <h4 className="font-semibold text-gray-800">Junior Staff</h4>
              </div>
              <p className="text-sm text-gray-600">
                PLPM 1-4: 1500 Kgs luggage + Motor Cycle/Scooter/Moped/Bicycle
              </p>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold">Transfer Assistance</h4>
                  <p className="text-emerald-100">
                    Contact HR department for transfer-related queries and
                    documentation
                  </p>
                </div>
              </div>
              <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                Get Help
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default PassTransfer