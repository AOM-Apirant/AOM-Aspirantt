"use client"
import React from 'react'
import { FileText, AlertTriangle, CheckCircle, BookOpen, Heart } from 'lucide-react'
import { AlertCircle, Gavel } from 'lucide-react'
import { FileSpreadsheet } from 'lucide-react'

const GSRAppendix = () => {
  const appendices = [
    {
      id: 1,
      title: "APPENDIX - I",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "CAUTION ORDERS",
      pageRange: "350 to 355",
      content: [
        { number: "1", title: "Circumstances for issue of Caution Order", page: "350" },
        { number: "2", title: "Method of notifying imposition of speed restriction or special precautions", page: "351" },
        { number: "3", title: "Method of obtaining acknowledgement from the Station Master of ‗Notice Station‘", page: "352" },
        { number: "4", title: "List of ‗Notice Stations‘", page: "352" },
        { number: "5", title: "Description and preparation of Caution Order", page: "352" },
        { number: "6", title: "Procedure for issue of Caution Order by the Station Master of Notice Station", page: "353" },
        { number: "7", title: "In case of train originating from station other than ‘Notice Stations’", page: "353" },
        { number: "8", title: "Change of train crew en route", page: "354" },
        { number: "9", title: "Attaching of assisting/banking engine", page: "354" },
        { number: "10", title: "In case of Local/Suburban trains", page: "354" },
        { number: "11", title: "Action by the SM after cancellation of the speed restriction", page: "354" },
        { number: "12", title: "Record of Caution Order message registers", page: "354" },
        { number: "13", title: "Preservation of Caution Orders", page: "355" },
      ]
    },
    {
      id: 2,
      title: "APPENDIX - II",
      icon: <Heart className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "LEVEL CROSSING GATES",
      pageRange: "356 to 382",
      content: [
        { number: "1", title: "Census of traffic at Level Crossings", page: "356" },
        { number: "2", title: "Classification of Level Crossings", page: "356" },
        { number: "3", title: "General instructions for all types of Level Crossing (LC) gates", page: "356" },
        { number: "4", title: "Special Instructions for different types of level crossings", page: "363" },
        { number: "5", title: "Annexure-I", page: "364" },
        { number: "6", title: "Annexure-II", page: "368" },
        { number: "7", title: "Annexure-III", page: "372" },
        { number: "8", title: "Annexure-IV", page: "374" },
        { number: "9", title: "Annexure-V", page: "377" },
        { number: "10", title: "Annexure-VI", page: "379" },
        { number: "11", title: "Annexure-VII", page: "381" },
      ]
    },
    {
      id: 3,
      title: "APPENDIX - III",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "NON-INTERLOCKED WORKING",
      pageRange: "383 to 386",
      content: [
        {number: "1", title: "Definition", page: "383"},
        {number: "2", title: "Occasions for non-interlocked working", page: "383"},
        {number: "3", title: "Engineering & S&T Joint works", page: "384"},
        {number: "4", title: "Action before commencement of NI working", page: "384"},
        {number: "5", title: "Rules for NI Working", page: "386"},
        
      ]
    },
    {
      id: 4,
      title: "APPENDIX - IV",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "SPECIAL INSTRUCTIONS REGARDING LINE PATROLLING",
      pageRange: "387 to 397",
      content: [
        {number: "1", title: "Definition", page: "387"},
        {number: "2", title: "Occasions when line patrolling is necessary", page: "387"},
        {number: "3", title: "Equipment for Patrolmen", page: "389"},
        {number: "4", title: "Procedure for monsoon patrolling", page: "389"},
        {number: "5", title: "Beat books", page: "390"},
        {number: "6", title: "Selection of Patrolmen", page: "391"},
        {number: "7", title: "Duties of Patrolmen", page: "391"},
        {number: "8", title: "Duties of Gangmates", page: "392"},
        {number: "9", title: "Duties of PWIs", page: "392"},
        {number: "10", title: "Duties of Station Masters", page: "393"},
        {number: "11", title: "Action to be taken by Patrolman when line is obstructed or breached", page: "394"},
        {number: "12", title: "When the line is unsafe but not actually breached and the Patrolman can cross the damaged place", page: "395"},
        {number: "13", title: "When the line is breached and the breach cannot be crossed", page: "396"},
        {number: "14", title: "The following minimum checks shall be exercised by the PWIs and AENs on the working of monsoon Patrolmen", page: "397"},   
      ]
    },
    {
      id: 5,
      title: "APPENDIX - V",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "SPECIAL INSTRUCTIONS REGARDING NEW WORKS",
      pageRange: "398 to 408",
      content: [
        {number: "1", title: "General", page: "398"},
        {number: "2", title: "Sanction of the Central Government to the opening of railway (section 21)", page: "398"},
        {number: "3", title: "Application for sanction for works", page: "399"},
        {number: "4", title: "Application for running of new types of locomotives and for rolling stock and for increase in speed (Annexure 13/4 of IRPWM)", page: "399"},
        {number: "5", title: "Repetition of application to obtain the sanction of the CRS shall be avoided", page: "399"},
        {number: "6", title: "Documents to accompany application for sanction", page: "399"},
        {number: "7", title: "Inspection by the CRS", page: "400"},
        {number: "8", title: "Submission of Safety Certificates (Annexure 13/5)", page: "400"},
        {number: "9", title: "Deviation from plans approved by the CRS", page: "400"},
        {number: "10", title: "Special instructions regarding Safety Certificate for Signalling Works", page: "400"},
        {number: "11", title: "Notification to railway Officials when opening works", page: "401"},
        {number: "12", title: "Opening of temporary diversions or bridges", page: "401"},
        {number: "13", title: "Works resulting from accidents", page: "402"},
        {number: "14", title: "Opening of new works within station limits", page: "402"},
        {number: "15", title: "Opening of new works outside station limits", page: "403"},
        {number: "16", title: "Provision for locking bolts, cotters, padlocks and clamps", page: "403"},
        {number: "17", title: "Special Instructions in connection with signalling and engineering works (Rules 15.06 and 15.08)", page: "403"},
        {number: "18", title: "Special instructions for Line Block – single and double lines (Rules 15.06 and 15.08)", page: "404"},
        {number: "19", title: "Obtaining Line Block on Portable radio communication", page: "408"},
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