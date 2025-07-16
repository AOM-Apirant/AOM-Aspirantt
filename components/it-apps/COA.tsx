import React from 'react'

const COA = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Control Office Application (COA)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A comprehensive system designed to automate and streamline train operations control rooms, 
          ensuring systematic monitoring and fluidity of train movements 24/7.
        </p>
      </div>

      {/* Challenges Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
            Challenges
          </span>
        </h2>
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              To automate the nerve centre of Train operations i.e. the Control Rooms.
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              To ensure systematic control, monitoring and fluidity of train movements 24*7.
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              To capture the train movements Real Time / Near Real Time.
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              To provide an analytical DSS tool for improving operational efficiency.
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              To design a challenging cohesive system integrable with a number of applications to effectively utilize the train operations information.
            </li>
          </ul>
        </div>
      </div>

      {/* Goals Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
            Goals
          </span>
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Charting of train running, reporting of unusual events, monitoring line occupancy, caution orders, and any abnormal working.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Handing over of train to the adjacent divisions as per its physical movement to maintain continuous flow of information.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Provision to the controllers to order trains, view all possible routes, divert or re-route trains, crew, locomotive details, etc.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Provision to forecast or extrapolate the running of trains which allows the controller to plan better.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              The system must be able to share all data of train movements, BPC (Break Power Certificate), Caution Order, Train Order, Regulation, Stabling, Yarding, schedule modification, diversions, etc in between respective applications.
            </li>
          </ul>
        </div>
      </div>

      {/* COA Overview Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
            COA Overview
          </span>
        </h2>
        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed">
            The Control Office Application requires the controllers to enter data related to the train operations as they receive information from the control points or stations. The application charts the running of the train in a section (a portion of the divisional network) and also generates the advance forecast based on various operational parameters.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The train is then virtually handed over to the adjacent division as per its physical movement to maintain continuous flow of information. The key features of the application include the ability of the controller to order trains, view all possible routes, divert or re-route trains, if required.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The application has the facility for capturing and viewing details of consist or composition of the train, details of the crew and locomotive. Reporting of unusual events is enabled through the user friendly interface. There is also a chart that shows details of line occupancy, caution orders, and abnormal working.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            One of the key elements of the application is the ability to forecast or extrapolate the running of trains which allows the controller to plan better. For managerial supervision the charts can be printed apart from the fact that structured MIS reports are also generated. COA has been designed to facilitate its integration with any other application.
          </p>
        </div>
      </div>

      {/* Integration Services Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
            Integration Services
          </span>
        </h2>
        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
          <p className="text-gray-700 mb-4">
            All applications like <strong>FOIS</strong>, <strong>ICMS</strong>, <strong>NTES</strong>, <strong>PAM</strong>, <strong>RTIS</strong>, <strong>REMMLOT</strong> and <strong>CMS</strong> are integrated with COA.
          </p>
          <p className="text-gray-700">
            Train BPC, Caution Order, Train Order, Regulation, Stabling, Yarding, Train schedule modification, Consist and Train Modification (like Diversion) is shared in between respective applications. TSR data is sent to COA divisional server. Further, this data updates in NTES, FOIS and ICMS through CAS server.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
            Benefits
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-3">Automation</h3>
            <p className="text-gray-700">Removes drudgery of the manual system of drawing control charts with various colour pencils</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-3">Information Availability</h3>
            <p className="text-gray-700">All details of trains running in a section are available which helps to take more informed decisions quickly.</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-3">Quick Information</h3>
            <p className="text-gray-700">Quick reference tools such as Blocks, cautions, loco details, crew details, stabled/regulated trains and siding position reduces retrieval time of information.</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-3">Alerts</h3>
            <p className="text-gray-700">Alerts such as more than stipulated hours on run etc. to help controller in planning. Reduces time taken for shift change.</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-3">Paperless</h3>
            <p className="text-gray-700">Usage of paper has been reduced considerably thereby taking one step towards green environment.</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-3">Accurate and Prompt</h3>
            <p className="text-gray-700">COA System has made train information available accurately and promptly to the passengers. The National Train Enquiry System (NTES) gets update as soon as the time for train movement is marked by section controller in COA.</p>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
            Milestones
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-indigo-800 mb-2">Train Signal Register</h3>
            <p className="text-gray-600">Core operational component</p>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-indigo-800 mb-2">600+ Locations</h3>
            <p className="text-gray-600">COA Implementation</p>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-indigo-800 mb-2">All Divisions</h3>
            <p className="text-gray-600">Comprehensive coverage</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default COA