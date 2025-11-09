"use client"
import React from 'react'
import { FileText, AlertTriangle, CheckCircle, BookOpen, Heart } from 'lucide-react'
import { AlertCircle, Gavel } from 'lucide-react'
import { FileSpreadsheet } from 'lucide-react'

const GSRAppendix = () => {
  const appendices = [
    {
      id: 1,
      title: "CAUTION ORDERS",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Caution Order",
      pageRange: "135 to 138",
      content: [
        { number: "1", title: "Circumstances for issue of Caution Order", page: "412" },
        { number: "2", title: "Method of notifying imposition of speed restriction or special precautions", page: "412" },
        { number: "3", title: "Method of obtaining acknowledgement from the Station Master of ‗Notice Station‘", page: "413" },
        { number: "4", title: "List of ‗Notice Stations‘", page: "413" },
        { number: "5", title: "Description and preparation of Caution Order", page: "413" },
        { number: "6", title: "Procedure for issue of Caution Order by the Station Master of Notice Station", page: "414" },
        { number: "7", title: "In case of train originating from station other than ‘Notice Stations’", page: "414" },
        { number: "8", title: "Change of train crew en route", page: "415" },
        { number: "9", title: "Attaching of assisting/banking engine", page: "415" },
        { number: "10", title: "In case of Local/Suburban trains", page: "415" },
        { number: "11", title: "Action by the SM after cancellation of the speed restriction", page: "415" },
        { number: "12", title: "Record of Caution Order message registers", page: "415" },
        { number: "13", title: "Preservation of Caution Orders", page: "416" },
      ]
    },
    {
      id: 2,
      title: "FIRST AID",
      icon: <Heart className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Essential first aid procedures and medical response guidelines",
      pageRange: "139 to 147",
      content: [
        { number: "1", title: "Aim / Objectives", page: "139A" },
        { number: "2", title: "Contents of the First Aid box", page: "139B" },
        { number: "3", title: "Types of Accident Relief Medical Equipment", page: "139C" },
        { number: "4", title: "Steps to be followed while rendering effective help to a person", page: "140" },
        { number: "5", title: "ASPHYXIA (SUFFOCATION)", page: "141" },
        { number: "6", title: "SHOCK", page: "142" },
        { number: "7", title: "WOUNDS AND HEMORRHAGES (BLEEDINGS)", page: "143" },
        { number: "8", title: "BURNS AND SCALDS", page: "145" },
        { number: "9", title: "FRACTURE, DISLOCATION, SPRAIN AND CRAMP", page: "145" },
        { number: "10", title: "POISONS", page: "146" },
        { number: "11", title: "SNAKE / DOG / SCORPION BITE TREATMENT", page: "146" },
        { number: "12", title: "UNCONSCIOUSNESS (INSENSIBILITY)", page: "147" },
        { number: "13", title: "EPILEPSY (FITS)", page: "147" },
      ]
    },
    {
      id: 3,
      title: "EXTRACT FROM THE RAILWAYS ACT, 1989",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Relevant sections from the Railways Act applicable to accident management",
      pageRange: "148 to 155",
      content: [
        {number: "1", title: "Sections relating to Commissioner of Railway Safety", page: "148"},
        {number: "2", title: "Sections relating to Construction and Maintenance of Works", page: "148"},
        {number: "3", title: "Sections relating to Opening of Railways", page: "149"},
        {number: "4", title: "Sections relating to Accidents", page: "149"},
        {number: "5", title: "Sections relating to Liability of Railway administration for Death and Injury to passengers due to Accidents", page: "151"},
        {number: "6", title: "Sections relating to Penalties and Offences", page: "153"},
        
      ]
    },
    {
      id: 4,
      title: "WEATHER WARNING - CYCLONE WARNINGS",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Weather-related safety protocols and cyclone warning systems",
      pageRange: "156 to 170",
      content: [
        {number: "1", title: "Weather Warning Message", page: "156"},
        {number: "1.1", title: "Terminology Used in Meteorological Bulletins regarding Cyclones", page: "156"},
        {number: "1.2", title: "Normal Weather Warnings", page: "156"},
        {number: "1.3", title: "Dissemination of Messages within Railway", page: "157"},
        {number: "1.4", title: "Flood Warning", page: "160"},
        {number: "1.5", title: "Danger to track and bridges due to Railway Affecting Tanks", page: "161"},
        {number: "1.6", title: "Action to be taken in the event of the East Coast being threatened by Cyclonic storms: Receipt and Transmission of Messages", page: "161"},
        {number: "1.7", title: "Action to be taken in case of hold up of trains due to Cyclone-(General)", page: "162"},
        {number: "2", title: "ANNEXURE-‘A’", page: "163"},
        {number: "3", title: "ANNEXURE-‘B’", page: "168"},
        {number: "4", title: "Annexure ‘C’", page: "169"},
      ]
    },
    {
      id: 5,
      title: "PUNISHMENT NORMS IN ACCIDENT CASES",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Disciplinary procedures and punishment guidelines for accident cases",
      pageRange: "171 to 176",
      content: [
        {number: "1", title: "PUNISHMENT NORMS IN ACCIDENT CASES", page: "171"},
        {number: "2", title: "PUNISHMENT NORMS IN ACCIDENT CASES CIVIL ENGINEERING DEPARTMENT", page: "174"},
        {number: "3", title: "STAFF OF ELECTRICAL DEPARTMENT", page: "175"},
        {number: "4", title: "Penalties for Serving Railway Employees", page: "176"},
      ]
    },
    {
      id: 6,
      title: "SPECIMEN FORMS",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Standard forms and templates for accident reporting and documentation",
      pageRange: "177 to 208",
      content: [
        {number: "1", title: "Specimen Form Acc 1 (i)", page: "177"},
        {number: "2", title: "Specimen Form Acc 1 (ii)", page: "178"},
        {number: "3", title: "Specimen Form Acc 1(iii)", page: "179"},
        {number: "4", title: "Specimen Form Acc.2", page: "180"},
        {number: "5", title: "Specimen form ACC.3", page: "181"},
        {number: "6", title: "Specimen Form ACC.4", page: "183"},
        {number: "7", title: "Specimen Form ACC.5", page: "185"},
        {number: "8", title: "Specimen Form ACC.6", page: "186"},
        {number: "9", title: "Specimen form Acc. 6-A", page: "188"},
        {number: "10", title: "Specimen Form ACC, 6-B", page: "188"},
        {number: "11", title: "Specimen Form Acc. 6-C", page: "189"},
        {number: "12", title: "Specimen Form ACC 6-D", page: "190"},
        {number: "13", title: "Specimen Form Acc. 7", page: "190"},
        {number: "14", title: "Specimen Form Acc. 8", page: "191"},
        {number: "15", title: "Form Acc.9", page: "192"},
        {number: "16", title: "Form Acc. 9-A", page: "193"},
        {number: "17", title: "Form Acc 9-B", page: "194"},
        {number: "18", title: "Form Acc. 9-C", page: "195"},
        {number: "19", title: "Form Acc. 9-D", page: "196"},
        {number: "20", title: "Form Acc. 9-E", page: "197"},
        {number: "21", title: "Form Acc. 9-F", page: "198"},
        {number: "22", title: "Form Acc. 9-G", page: "199"},
        {number: "23", title: "Form Acc. 9-H", page: "200"},
        {number: "24", title: "Form Acc. 9-I", page: "201"},
        {number: "25", title: "Form Acc. 9-J", page: "202"},
        {number: "26", title: "Form Acc. 9-K", page: "203"},
        {number: "27", title: "Form Acc. 9-L", page: "204"},
        {number: "28", title: "Form Acc. 9-M", page: "205"},
        {number: "29", title: "Form Acc. 9-N", page: "205"},
        {number: "30", title: "Form Acc. 9-O", page: "205"},
        {number: "31", title: "Form Acc.10", page: "206"},
        {number: "32", title: "Form Acc.11", page: "207"},
        {number: "32", title: "Form Acc.12", page: "208"},
        {number: "32", title: "Form Acc.13", page: "208"},
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              GSR APPENDIX
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Supplementary Instructions & Special Procedures</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive collection of appendices providing detailed supplementary instructions, 
              special procedures, and category-specific rules that complement the main GSR chapters.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid gap-6 md:gap-8">
              {appendices.map((appendix) => (
                <div
                  key={appendix.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Appendix Header */}
                  <div className={`bg-gradient-to-r ${appendix.color} text-white p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        {appendix.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          Appendix {appendix.id}
                        </h2>
                        <p className="text-white/90 text-sm sm:text-base mt-1">
                          {appendix.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Appendix Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-gray-200 text-base leading-relaxed">
                        {appendix.description}
                      </p>
                    </div>

                    {/* Sub Categories for Appendix IX */}
                    {appendix.content && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <span className="w-3 h-3 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mr-3 animate-pulse"></span>
                          Staff Categories:
                        </h4>
                        <div className="grid gap-3">
                          {appendix.content.map((category, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 font-medium">
                                  {category.title}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Special Note for Deleted Appendix */}
                    {appendix.id === 6 && (
                      <div className="mt-4 p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                          <p className="text-red-200 font-medium">
                            This appendix has been deleted from current regulations
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete GSR Appendix Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive collection of appendices provides detailed supplementary instructions, 
                  special procedures, and category-specific rules that complement the main GSR chapters 
                  for comprehensive railway operations management.
                </p>
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

export default GSRAppendix