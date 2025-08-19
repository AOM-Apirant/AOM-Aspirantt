"use client"
import React, { useState } from 'react'
import { BookOpen, AlertTriangle, CheckCircle, AlertCircle, Search, Clipboard, ChevronDown, ChevronUp, Train, Signal, Wrench, AlertTriangle as ExclamationTriangle } from 'lucide-react'

const BWMPartC = () => {
  const [expandedChapters, setExpandedChapters] = useState<number[]>([])

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters(prev => {
      if (prev.includes(chapterId)) {
        return prev.filter(id => id !== chapterId)
      }
      return [chapterId]
    })
  }

  const chapters = [
    {
      id: 1,
      title: "DESCRIPTION - BLOCK INSTRUMENTS, INDOOR APPARATUS AND OUTDOOR APPARATUS",
      icon: <Signal className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Comprehensive overview of block instruments and their components for double line working",
      rules: [
        { number: "1.1", title: "Provision of Block Instrument", page: "1" },
        { number: "1.2", title: "Parts of Block Instrument", page: "1" },
        { number: "1.3", title: "Description of Block Instrument", page: "1" },
        { number: "1.4", title: "Indoor Apparatus", page: "1" },
        { number: "1.5", title: "Home signal contacts", page: "1" },
        { number: "1.6", title: "Outdoor Apparatus", page: "1" }
      ]
    },
    {
      id: 2,
      title: "SYSTEMS OF WORKING, BLOCK COMPETENCY CERTIFICATE, CODE OF BELL SIGNALS, PRECEDENCE OF TRAINS, AND TRAIN SIGNAL REGISTER",
      icon: <Train className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Working systems, competency requirements, bell codes, and signal management procedures",
      rules: [
        { number: "2.1", title: "Systems of working", page: "2" },
        { number: "2.2", title: "Block Competency Certificate", page: "2" },
        { number: "2.3", title: "Bell Code", page: "2" },
        { number: "2.4", title: "Acknowledgement of Signals", page: "2" },
        { number: "2.5", title: "Advise of code signals by Cabin Station Master to Station Master at the Station", page: "2" },
        { number: "2.6", title: "Precedence of trains", page: "2" },
        { number: "2.7", title: "Train Signal Register", page: "2" },
        { number: "2.8", title: "Station Masters handing over and taking over charge of duties", page: "2" },
        { number: "2.9", title: "Inspection of Train Signal Register", page: "2" },
        { number: "2.10", title: "Preservation of Train Signal Register", page: "2" }
      ]
    },
    {
      id: 3,
      title: "METHOD OF WORKING BLOCK INSTRUMENTS",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Detailed procedures for operating block instruments and signaling on double lines",
      rules: [
        { number: "3.1", title: "Access to and operation of equipment", page: "3" },
        { number: "3.2", title: "Signalling of a train from one Block station to another", page: "3" },
        { number: "3.2(A)(i)", title: "Despatching a train", page: "3" },
        { number: "3.2(A)(ii)", title: "To cancel &apos;Line clear&apos; before the train enters the block section", page: "3" },
        { number: "3.2(A)(iii)", title: "Procedure for dispatching a train involving IBS", page: "3" },
        { number: "3.2(B)", title: "Exchange of Private Numbers between Station Master and cabin /cabins for reception of trains", page: "3" },
        { number: "3.3", title: "The &apos;Call attention&apos; signal", page: "4" },
        { number: "3.4", title: "Precautions before asking &apos;Is line clear&apos;", page: "4" },
        { number: "3.5", title: "The &apos;Is line clear&apos; signal - when to be sent", page: "4" },
        { number: "3.6", title: "Precautions before giving &apos;Line clear&apos;", page: "4" },
        { number: "3.7", title: "Acceptance of the &apos;Is line clear&apos; signal and sending of &apos;Line clear&apos; signal", page: "4" },
        { number: "3.8", title: "Driver&apos;s authority to proceed", page: "4" },
        { number: "3.9", title: "The &apos;Train entering block section&apos; signal", page: "4" },
        { number: "3.10", title: "Change of indications from &apos;Line clear&apos; to &apos;Train on line&apos;", page: "4" },
        { number: "3.11", title: "Conditions for closing the block section", page: "4" },
        { number: "3.12", title: "Precautions before giving the &apos;Train out of block section&apos; or &apos;Obstruction removed&apos; signal", page: "4" }
      ]
    },
    {
      id: 4,
      title: "CAUTION ORDERS",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      description: "Caution order procedures and safety protocols for double line operations",
      rules: [
        { number: "4.1", title: "Caution order (G.R. 4.09)", page: "5" }
      ]
    },
    {
      id: 5,
      title: "USE OF SPECIAL SIGNALS AND PROCEDURE IN EMERGENCIES",
      icon: <ExclamationTriangle className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Emergency procedures and special signal usage protocols for double line working",
      rules: [
        { number: "5.1", title: "Refusal of the &apos;Is Line clear&apos; signal, and sending of the &apos;Obstruction danger&apos; signal", page: "6" },
        { number: "5.2", title: "Special use of &apos;Obstruction danger&apos; signal", page: "6" },
        { number: "5.3", title: "Obstruction on double line in the block section in advance (right line) - Block Forward", page: "6" },
        { number: "5.4", title: "Obstruction on double line in the block section in rear (wrong line) - Block Back", page: "6" },
        { number: "5.5", title: "Cancel last signal", page: "6" },
        { number: "5.6", title: "Train wrongly described", page: "6" },
        { number: "5.7", title: "Train unusually delayed", page: "6" },
        { number: "5.8", title: "&apos;Stop and examine train&apos; signal", page: "6" },
        { number: "5.9", title: "Train passed without Tail Lamp / Flashing Tail Lamp or Tail Board", page: "6" },
        { number: "5.10", title: "&apos;Train divided&apos; signal to block station in rear", page: "6" },
        { number: "5.11", title: "Vehicles running away in wrong direction", page: "6" },
        { number: "5.12", title: "Vehicles running away in right direction", page: "6" },
        { number: "5.13", title: "Signal given in error", page: "6" },
        { number: "5.14", title: "Government or Railway Telecommunication branch officials working on line affecting train signalling wires", page: "6" }
      ]
    },
    {
      id: 6,
      title: "BLOCKING THE LINE FOR MATERIAL TRAINS, MOTOR TROLLIES, LORRIES, TROLLIES, RAIL DOLLIES AND RAIL-CUM-ROAD VEHICLES",
      icon: <Clipboard className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      description: "Procedures for blocking lines for various types of vehicles and material trains",
      rules: [
        { number: "6.1", title: "Material trains", page: "7" },
        { number: "6.2", title: "Lorries, Push Trollies, Cycle Trollies, Motor trollies, Rail Dollies and Rail-cum-Road Vehicles", page: "7" }
      ]
    },
    {
      id: 7,
      title: "TESTING OF BLOCK INSTRUMENTS",
      icon: <Search className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Testing procedures and maintenance protocols for block instruments",
      rules: [
        { number: "7.1", title: "Persons authorized to test", page: "8" },
        { number: "7.2", title: "Block Section to be clear during test", page: "8" },
        { number: "7.3", title: "Procedure for testing", page: "8" },
        { number: "7.4", title: "Consent required before interfering with block working equipment", page: "8" },
        { number: "7.5", title: "Block instrument maintenance work by S&T staff", page: "8" }
      ]
    },
    {
      id: 8,
      title: "FAILURE OF BLOCK INSTRUMENTS OR APPARATUS",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      description: "Failure handling procedures and emergency communication protocols for double line working",
      rules: [
        { number: "8.1", title: "Failure of Last Stop Signal", page: "9" },
        { number: "8.2", title: "Failure of the operating handle lock", page: "9" },
        { number: "8.3", title: "Failure of block instrument", page: "9" },
        { number: "8.4", title: "Reports to be sent", page: "9" },
        { number: "8.5", title: "Paper line clear ticket", page: "9" },
        { number: "8.6", title: "Working of trains during failure or suspension of Block Instrument", page: "9" },
        { number: "8.7", title: "Procedure for obtaining/granting Line Clear using telephone attached to Block Instrument, Station to Station fixed telephone, Fixed telephone such as Railway auto-phone and BSNL phone as a means of communication between stations &apos;X&apos; and &apos;Y&apos;", page: "9" },
        { number: "8.8", title: "Procedure for obtaining/granting Line Clear using Control telephone as a means of communication between stations &apos;X&apos; and &apos;Y&apos;", page: "9" },
        { number: "8.9", title: "Procedure for obtaining/granting Line Clear using VHF sets as a means of communication between stations &apos;X&apos; and &apos;Y&apos;", page: "9" },
        { number: "8.10", title: "Total interruption of communications on double line", page: "9" },
        { number: "8.11", title: "Restoration of working with block instruments", page: "9" },
        { number: "8.12", title: "Rules and regulations for Temporary Single Line (TSL) working on a double line section when one line is obstructed", page: "9" },
        { number: "8.13", title: "Rules and regulations for Temporary Single Line (TSL) working on a double line section during total interruption of communications", page: "9" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              BLOCK WORKING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">PART-C - DOUBLE LINE BWMD</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Chapter Index for Block Working Manual Part-C - Comprehensive guide covering all 8 chapters 
              with detailed procedures, safety protocols, and operational guidelines for double line block working.
            </p>
            <div className="mt-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">BWMD 2008 - For Official Use Only</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Chapter Header */}
                  <div 
                    className={`bg-gradient-to-r ${chapter.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleChapter(chapter.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Chapter Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {chapter.icon}
                      </div>
                      
                      {/* Chapter Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          Chapter - {chapter.id}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                          {chapter.title}
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                          {chapter.description}
                        </p>
                      </div>
                      
                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Page Range */}
                      <p className="text-white/70 text-sm font-medium mb-4">
                        Pages {Math.min(...chapter.rules.map(rule => parseInt(rule.page)))} - {Math.max(...chapter.rules.map(rule => parseInt(rule.page)))}
                      </p>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedChapters.includes(chapter.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rules List */}
                  {expandedChapters.includes(chapter.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {chapter.rules.map((rule, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {rule.number.split('.')[1] || rule.number.split('(')[0]}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium">
                                {rule.title}
                              </p>
                              <p className="text-gray-400 text-sm mt-1">
                                Rule {rule.number} • Page - {rule.page}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete Block Working Manual Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all 8 chapters of the Block Working Manual Part-C, providing essential information 
                  for railway block working operations, safety protocols, emergency procedures, and operational guidelines for double line working systems.
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

export default BWMPartC