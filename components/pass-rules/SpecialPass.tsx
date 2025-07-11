import React from 'react'

const SpecialPass = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-cyan-200">
          <div className="flex flex-col lg:flex-row items-center mb-8">
            <div className="lg:w-16 lg:h-16 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-6 shadow-lg mb-4 lg:mb-0">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className='text-center lg:text-left'>
              <h2 className="lg:text-3xl text-2xl font-bold text-gray-800 mb-2">
                Special Pass
              </h2>
              <p className="text-cyan-600 font-medium">
                Special circumstances travel authorization for railway servants
                and family members
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-cyan-200 mb-8">
            <p className="text-gray-700 leading-relaxed">
              A special pass may be issued to Railway servants, family members
              or dependent relatives as the case may be, on various grounds
              including medical, sports, official duties, and other special
              circumstances.
            </p>
          </div>

          {/* Grounds Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Medical Grounds */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="font-semibold text-gray-800">Medical Grounds</h4>
              </div>
              <p className="text-gray-700 text-sm">
                For medical treatment and health-related travel
              </p>
            </div>

            {/* Sports Account */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="font-semibold text-gray-800">Sports Account</h4>
              </div>
              <p className="text-gray-700 text-sm">
                For participation in sports activities and competitions
              </p>
            </div>

            {/* RRB/Selection Board */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  RRB/Selection Board
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                For appearing before RRB/Selection Board while on leave or on
                duty
              </p>
            </div>

            {/* Courts */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h4 className="font-semibold text-gray-800">Courts</h4>
              </div>
              <p className="text-gray-700 text-sm">For attending Courts</p>
            </div>

            {/* Disciplinary Enquiries */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Disciplinary Enquiries
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                For attending departmental disciplinary enquiries and for
                inspection of documents
              </p>
            </div>

            {/* Complainant's Enquiry */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Complainant&apos;s Enquiry
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                For attending complainant&apos;s enquiry
              </p>
            </div>

            {/* Appellate Authority */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Appellate Authority
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                For personal hearing of the Appellate Authority
              </p>
            </div>

            {/* Railway Unions */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
                <h4 className="font-semibold text-gray-800">Railway Unions</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Office bearer and representative of recognised railway unions
                and of the Federation for whom grant of Pass is governed by the
                instructions issued by Railway Board from time to time
              </p>
            </div>

            {/* Staff Benefit Fund */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">9</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Staff Benefit Fund
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Members of Staff Benefit Fund Committee etc.
              </p>
            </div>

            {/* Special Class Railway Apprentices */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">10</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Special Class Railway Apprentices
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                For Special Class Railway Apprentices
              </p>
            </div>

            {/* Other Apprentices */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">11</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Other Apprentices
                </h4>
              </div>
              <p className="text-gray-700 text-sm">For other apprentices</p>
            </div>

            {/* Scout and Guide */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">12</span>
                </div>
                <h4 className="font-semibold text-gray-800">Scout and Guide</h4>
              </div>
              <p className="text-gray-700 text-sm">
                For Scout and Guide activities
              </p>
            </div>

            {/* St. John's Ambulance */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-violet-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">13</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  St. John&apos;s Ambulance
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                For St. John&apos;s Ambulance Brigade
              </p>
            </div>

            {/* Settlement Dues */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">14</span>
                </div>
                <h4 className="font-semibold text-gray-800">Settlement Dues</h4>
              </div>
              <p className="text-gray-700 text-sm">
                To receive settlement dues
              </p>
            </div>

            {/* Motor Vehicle */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-lime-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">15</span>
                </div>
                <h4 className="font-semibold text-gray-800">Motor Vehicle</h4>
              </div>
              <p className="text-gray-700 text-sm">
                For motor vehicle related travel
              </p>
            </div>

            {/* First Appointment */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">16</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  First Appointment
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                On First appointment to Railway Service
              </p>
            </div>

            {/* Retirement/Decease */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-slate-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">17</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Retirement/Decease
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                On retirement/decease - grant of settlement pass
              </p>
            </div>

            {/* Railway Safety */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-stone-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-stone-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">18</span>
                </div>
                <h4 className="font-semibold text-gray-800">Railway Safety</h4>
              </div>
              <p className="text-gray-700 text-sm">
                For enquiries by Commissioners for Railway Safety
              </p>
            </div>

            {/* Quasi Railway Institutions */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-neutral-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-neutral-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">19</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Quasi Railway Institutions
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                To staff of quasi Railway Institutions
              </p>
            </div>

            {/* Suspension */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-zinc-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-zinc-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">20</span>
                </div>
                <h4 className="font-semibold text-gray-800">Suspension</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Railway servants under suspension
              </p>
            </div>

            {/* Conferences */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">21</span>
                </div>
                <h4 className="font-semibold text-gray-800">Conferences</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Attending conferences, congresses or meetings
              </p>
            </div>

            {/* Territorial Army */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">22</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Territorial Army
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Family passes to Territorial Army Personnel proceeding to camps
              </p>
            </div>

            {/* RRB Candidates */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">23</span>
                </div>
                <h4 className="font-semibold text-gray-800">RRB Candidates</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Candidates summoned for test/interview by Railway Recruitment
                Boards and Railway Administrations
              </p>
            </div>

            {/* Children's Camps */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">24</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Children&apos;s Camps
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Journeys in connection with children&apos;s camps
              </p>
            </div>

            {/* Cultural Activities */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">25</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Cultural Activities
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Attending cultural activities etc.
              </p>
            </div>

            {/* Railway User&apos;s Committees */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">26</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Railway User&apos;s Committees
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Passes to members of Railway User&apos;s Consultative
                Committees, National Railway User&apos;s Consultative Council
              </p>
            </div>

            {/* Reservists */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">27</span>
                </div>
                <h4 className="font-semibold text-gray-800">Reservists</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Passes for families of reservists
              </p>
            </div>

            {/* Retired Railway Servants */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">28</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Retired Railway Servants
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Retired Railway servants for perusal of documents for
                preparation of his Defence in disciplinary case instituted
                against him
              </p>
            </div>

            {/* Medically Decategorised */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">29</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Medically Decategorised
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Medically decategorised staff when called for adjudging their
                suitability for alternative appointment
              </p>
            </div>

            {/* Retired Railway Servant Assistance */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">30</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Retired Railway Servant Assistance
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                To retired Railway servant for assistance to defend a Railway
                servant involved in disciplinary proceedings, to attend any
                meeting of a commission of enquiry or of a Board, Conference,
                Committee, or departmental enquiry convened under proper
                authority or is required to perform any public duty in an
                honorary capacity
              </p>
            </div>

            {/* Casual Labour */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">31</span>
                </div>
                <h4 className="font-semibold text-gray-800">Casual Labour</h4>
              </div>
              <p className="text-gray-700 text-sm">
                To Casual Labour on recruitment/discharge
              </p>
            </div>

            {/* Railway Accidents */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">32</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Railway Accidents
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Complimentary passes to next of kin of the victims as well as to
                the surviving victims involved in Railway accidents
              </p>
            </div>

            {/* RPF Dogs */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">33</span>
                </div>
                <h4 className="font-semibold text-gray-800">RPF Dogs</h4>
              </div>
              <p className="text-gray-700 text-sm">
                RPF Dogs with Handler/Inspectors
              </p>
            </div>

            {/* Bazar Passes */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-violet-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">34</span>
                </div>
                <h4 className="font-semibold text-gray-800">Bazar Passes</h4>
              </div>
              <p className="text-gray-700 text-sm">Issue of Bazar Passes</p>
            </div>

            {/* Visiting Lecturer */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">35</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Visiting Lecturer
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Grant of I AC Complimentary Pass to the visiting Lecturer of a
                appropriate status
              </p>
            </div>

            {/* Zonal Unions */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-lime-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-lime-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">36</span>
                </div>
                <h4 className="font-semibold text-gray-800">Zonal Unions</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Whole time employees of the Zonal Recognised Unions and
                Federations
              </p>
            </div>

            {/* Railway Magistrates */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">37</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Railway Magistrates
                </h4>
              </div>
              <p className="text-gray-700 text-sm">Railway Magistrates</p>
            </div>

            {/* Government Railway Police */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-slate-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">38</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Government Railway Police
                </h4>
              </div>
              <p className="text-gray-700 text-sm">Government Railway Police</p>
            </div>

            {/* Workers Education */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-stone-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-stone-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">39</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Workers Education
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Participants in Workers Education Programmes Conducted by
                AIRF/NFIR in the Zonal Headquarters Station/Divl. Headquarters
                Station/Centralised Training Institutes
              </p>
            </div>

            {/* MR/MOS(R)/DMR */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-neutral-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-neutral-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">40</span>
                </div>
                <h4 className="font-semibold text-gray-800">MR/MOS(R)/DMR</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Rail travel facilities to MR/MOS(R)/DMR
              </p>
            </div>

            {/* Non-Railwaymen */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-zinc-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-zinc-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">41</span>
                </div>
                <h4 className="font-semibold text-gray-800">Non-Railwaymen</h4>
              </div>
              <p className="text-gray-700 text-sm">Non-Railwaymen</p>
            </div>

            {/* Railway Claims Tribunal */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-600">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">42</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Railway Claims Tribunal
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Claimant before Railway Claims Tribunal
              </p>
            </div>

            {/* Railway Inquiry Officers */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">43</span>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Railway Inquiry Officers
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Retired Railway Officers of Selection Grade and above who are
                empanelled as Railway Inquiry Officers in D&AR cases to
                undertake journey either for conduct of inquiry or for training
                or any other official purpose in this connection
              </p>
            </div>

            {/* Medical Staff */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">44</span>
                </div>
                <h4 className="font-semibold text-gray-800">Medical Staff</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Doctors/para medical staff invited in connection with blood
                donation/eye testing camps being organised on the Railways
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
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
                </span>
                Important Notes
              </h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <p>
                    Special passes are issued based on specific circumstances
                    and requirements
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <p>
                    Each ground has specific eligibility criteria and
                    documentation requirements
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <p>
                    Passes must be properly authorized and signed by competent
                    authority
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <p>
                    Validity periods may vary based on the purpose of travel
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </span>
                Application Process
              </h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    1
                  </div>
                  <span>Submit application with supporting documents</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    2
                  </div>
                  <span>Get approval from competent authority</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    3
                  </div>
                  <span>Collect pass from issuing office</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    4
                  </div>
                  <span>Ensure proper documentation for travel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
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
                  <h4 className="text-lg font-semibold">
                    Special Pass Assistance
                  </h4>
                  <p className="text-cyan-100">
                    Contact your department for special pass applications and
                    documentation
                  </p>
                </div>
              </div>
              <button className="bg-white text-cyan-600 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default SpecialPass