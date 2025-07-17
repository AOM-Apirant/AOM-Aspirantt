import React from 'react'

const RSHC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="lg:text-4xl text-xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            RPF Security Helpline 182 (RSHC)
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Challenges Section */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-red-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-red-100 text-red-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </span>
            Challenges
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>To build a CRM (Customer Relationship Management) tool for handling Distressed Passengers Calls and to ensure their early resolution.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Provision to alert nearby RPF personnel to immediately attend the Distressed Passengers.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Provision to facilitate desired help to passengers on board or at forthcoming stations.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Provision to have an outgoing conference call with the complainant to further assist him/her till complaint resolution.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>A challenging task of establishing a Passenger Helpline CRM tool with a full proof end to end distress handling mechanism.</p>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-green-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Goals
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>To facilitate The Call Center Executive to record minimal necessary details obtained from distressed passenger.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Seamless Integration with PRS and NTES Systems to obtain passenger details and train running details automatically in the event of distress.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Capability to transfer the incident details to concerned RPF staff and the RPF escorting party for early resolution of the problem.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Facility to have an outgoing conference call with the complainant to help him / her.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>An Automatic Call Distribution (ACD) supported and integrated system to ensure lodging, reporting, monitoring, tracking and resolution of travellers security complaints.</p>
            </div>
          </div>
        </div>

        {/* Passenger Complaint */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-blue-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
            Passenger Complaint
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>When a distressed passenger initiates a call it lands at RPF Divisional control room closest to the person</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>A Ticket is generated after the call is attended recording the necessary details</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>SMS for ticket generation is sent to the complainant along with unique ticket ID</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Conversation between the complainant and the Call Centre Representative is recorded and available for reference</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Registered ticket is forwarded to the post personnel</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>If the train is running in another division or zone, ticket can be forwarded to the concerned Division directly</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Post, on receiving the ticket, assigns the same to one of their field officers</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Once the issue is addressed, divisional control room is informed about the action taken who will contact the passenger to confirm if his/her issue has been resolved</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Ticket is closed or re-assigned accordingly</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Facility of conference calling enables one to one communication among division, complainant and post officer in-charge</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>SMS is sent to complainant on ticket (case) closure</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>In case ticket is handed over to GRP, provision is there to provide concerned contact person&apos;s details</p>
            </div>
          </div>
        </div>

        {/* Integration with PRS, NTES */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-purple-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Integration with PRS, NTES
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Integration has been provided with the Passenger Reservation System and National Train Enquiry System</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>If complainant provides PNR details, system fetches travelling passenger details from Passenger Reservation System</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>If complainant provides train number, travel date and boarding station, onward journey can be fetched using National Train Enquiry System</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>This facilitates providing help at the forthcoming stations also</p>
            </div>
          </div>
        </div>

        {/* Decision Support System (DSS) */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-orange-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
            Decision Support System (DSS)
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>The system provides a dashboard for a snapshot view of the number of complaints received and attended</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Monitoring and analytic purposes are served through comprehensive reports</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Comprehensive reports have been provided to facilitate day to day working of the RPF personnel</p>
            </div>
          </div>
        </div>

        {/* Alerting RPF Escort Party */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-teal-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-teal-100 text-teal-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1zM4 11h6v-2H4v2zM10 5h6V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1zM10 11h6v-2h-6v2z" />
              </svg>
            </span>
            Alerting RPF Escort Party
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>The system internally transfers the incident details to concerned RPF staff and the RPF escorting party</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Early resolution of the problem is facilitated</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Facility to have an outgoing conference call with the complainant to help him</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Option to listen to the call recordings at a later point of time</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>An SMS is also sent to the complainant at the time of ticket closure</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-emerald-500">
          <h2 className="lg:text-3xl text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-emerald-100 text-emerald-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Benefits
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Monitoring</h3>
                <p className="text-gray-700 text-sm">Easy monitoring of call Centre performance. Passenger can check their registered Ticket status by calling 182 from any location.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Reporting</h3>
                <p className="text-gray-700 text-sm">Comprehensive reports provided to facilitate day to day working like Daily Summary Report, tickets generated in a day. Caller report for the number of calls received from a particular number of Ticket report details.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Analysis</h3>
                <p className="text-gray-700 text-sm">Comprehensive dashboard has been made available to provide at a glance snapshot view of number of complaints received and attended. It also provides statistics related to Total, new and pending complaints including the specific number of complaints which are pending at various levels for action.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="lg:text-3xl text-2xl font-bold mb-8 text-center">Milestones</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="lg:text-3xl text-xl font-bold mb-2">72</div>
              <div className="text-red-100">Divisions Integrated with ACD</div>
            </div>
            
            <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="lg:text-3xl text-xl font-bold mb-2">10K+</div>
              <div className="text-red-100">Average calls received Daily</div>
            </div>
            
            <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="lg:text-3xl text-xl font-bold mb-2">2K+</div>
              <div className="text-red-100">Average Security Related calls Monthly</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSHC