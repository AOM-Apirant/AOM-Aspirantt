import StationYard from '@/components/optg-manual/StationYard'
import RegisterPreserve from '@/components/optg-manual/RegisterPreserve'
import Punctuality from '@/components/optg-manual/Punctuality'
import React from 'react'
import ControlOrganization from '@/components/optg-manual/ControlOrganization'
import ChiefController from '@/components/optg-manual/ChiefController'
import SectionController from '@/components/optg-manual/SectionController'
import WorkingOfTrains from '@/components/optg-manual/WorkingOfTrains'
import SystemOfWorking from '@/components/optg-manual/SystemOfWorking'
import CoachingTrainOperations from '@/components/optg-manual/CoachingTrainOperations'
import NumberingOfTrains from '@/components/optg-manual/NumberingOfTrains'
import CoachingLocomotives from '@/components/optg-manual/CoachingLocomotives'
import CoachingStock from '@/components/optg-manual/CoachingStock'
import FreightTrainOperations from '@/components/optg-manual/FreightTrainOperations'

const OperatingManual = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="lg:text-4xl text-3xl font-bold mb-6">
              Operating Manual
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8 rounded-full"></div>
            <p className="lg:text-xl text-base text-blue-100 leading-relaxed max-w-4xl mx-auto">
              &lsquo;Operating Manual for Indian Railways&rsquo; was issued in the year 2008 with an
              objective to provide a ready handbook to officers and staff involved in train
              operations. Railway Board has advised Zonal Railways for preparing Operating
              Manuals for their Railway Zone.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">About Operating Manual</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                The Operating Manual serves as a comprehensive guide for railway personnel 
                involved in train operations. It provides essential procedures, guidelines, 
                and best practices to ensure safe and efficient railway operations across 
                the Indian Railways network.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Objectives:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  Ready handbook for officers and staff
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  Standardized operating procedures
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  Safety guidelines and protocols
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  Zone-specific operational manuals
                </li>
              </ul>
            </div>
          </div>
        </div>

        
            <StationYard />
        <RegisterPreserve />
        <Punctuality />
        <ControlOrganization />
        <ChiefController />
        <SectionController />
        <WorkingOfTrains />
        <SystemOfWorking />
        <CoachingTrainOperations />
        <NumberingOfTrains />
        <CoachingLocomotives />
        <CoachingStock />
        <FreightTrainOperations />
      </div>

      
    </div>
  )
}

export default OperatingManual