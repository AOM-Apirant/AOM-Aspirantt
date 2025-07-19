import React from 'react'
import { FileText, AlertTriangle, Train, Shield, Settings, Users, Wrench, Zap, MapPin, CheckCircle, BookOpen, Gauge, Lock, ClipboardList, Car, Building } from 'lucide-react'

const GSRAppendix = () => {
  const appendices = [
    {
      id: 1,
      title: "Special Instructions regarding issue of Caution Orders (G.R.4.09)",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Guidelines for issuing caution orders to ensure safe railway operations"
    },
    {
      id: 2,
      title: "Level Crossing gates",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Safety protocols and procedures for level crossing operations"
    },
    {
      id: 3,
      title: "Non-interlocked (NI) working",
      icon: <Lock className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Procedures for working with non-interlocked signaling systems"
    },
    {
      id: 4,
      title: "Special Instructions regarding line patrolling (G.R.15.05)",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Comprehensive guidelines for railway line patrolling activities"
    },
    {
      id: 5,
      title: "Special Instructions regarding new works",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Procedures and safety measures for new railway construction works"
    },
    {
      id: 6,
      title: "Brake power on trains (Deleted)",
      icon: <Train className="w-6 h-6" />,
      color: "from-gray-500 to-gray-600",
      description: "This appendix has been deleted from current regulations"
    },
    {
      id: 7,
      title: "Special Instructions for the use of detonating (fog) signals at stations to indicate to the Loco Pilots of approaching trains, the location of a signals (G.R. & S.R.3.59 to 3.64)",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      description: "Detailed procedures for using detonating signals in foggy conditions"
    },
    {
      id: 8,
      title: "Marshalling",
      icon: <ClipboardList className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      description: "Rules and procedures for train marshalling operations"
    },
    {
      id: 9,
      title: "Rules applicable to different categories",
      icon: <Users className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Specific rules for different railway staff categories",
      subCategories: [
        "Rules applicable to SMs/ASMs",
        "Rules applicable to Guards",
        "Rules applicable to Switchmen",
        "Rules applicable to Cabinmen/Pointsmen/Shunting Staff",
        "Rules applicable to Loco Running staff",
        "Rules applicable to Signaling staff",
        "Rules applicable to Engineering staff",
        "Rules applicable to Electrical staff"
      ]
    },
    {
      id: 10,
      title: "Automatic danger level indicators",
      icon: <Gauge className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      description: "Guidelines for automatic danger level monitoring systems"
    },
    {
      id: 11,
      title: "Interlocking",
      icon: <Lock className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      description: "Procedures and safety measures for interlocking systems"
    },
    {
      id: 12,
      title: "Shunting",
      icon: <Train className="w-6 h-6" />,
      color: "from-lime-500 to-lime-600",
      description: "Comprehensive guidelines for shunting operations"
    },
    {
      id: 13,
      title: "S&T maintenance works – Testing of points, signals and other equipment – disconnection Notice",
      icon: <Settings className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      description: "Maintenance procedures for signaling and telecommunications equipment"
    },
    {
      id: 14,
      title: "Station Working Rules",
      icon: <Building className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      description: "Comprehensive station operation and management guidelines"
    },
    {
      id: 15,
      title: "Operating Forms",
      icon: <FileText className="w-6 h-6" />,
      color: "from-violet-500 to-violet-600",
      description: "Standard forms and documentation for railway operations"
    },
    {
      id: 16,
      title: "Working of EMUs / MEMUs",
      icon: <Zap className="w-6 h-6" />,
      color: "from-sky-500 to-sky-600",
      description: "Operating procedures for Electric Multiple Units and Mainline Electric Multiple Units"
    },
    {
      id: 17,
      title: "Sidings",
      icon: <Car className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      description: "Guidelines for siding operations and management"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpen className="w-8 h-8 text-yellow-300" />
            <h1 className="text-3xl sm:text-4xl font-bold text-center">
              GSR Appendix
            </h1>
          </div>
          <p className="text-center text-indigo-100 text-lg max-w-2xl mx-auto">
            General and Subsidiary Rules - Supplementary Appendices and Special Instructions
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:gap-8">
          {appendices.map((appendix) => (
            <div
              key={appendix.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Appendix Header */}
              <div className={`bg-gradient-to-r ${appendix.color} text-white p-6`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
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
                  <p className="text-gray-700 text-base leading-relaxed">
                    {appendix.description}
                  </p>
                </div>

                {/* Sub Categories for Appendix IX */}
                {appendix.subCategories && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Staff Categories:
                    </h4>
                    <div className="grid gap-3">
                      {appendix.subCategories.map((category, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">
                              {category}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Special Note for Deleted Appendix */}
                {appendix.id === 6 && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <p className="text-red-700 font-medium">
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
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-300">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-800">
                Complete GSR Appendix Reference
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This comprehensive collection of appendices provides detailed supplementary instructions, 
              special procedures, and category-specific rules that complement the main GSR chapters 
              for comprehensive railway operations management.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GSRAppendix