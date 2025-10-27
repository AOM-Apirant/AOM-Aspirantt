'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  MessageSquare,
  PackageX
} from 'lucide-react'

const IRACT1989Section84 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">CHAPTER IX</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Carriage of goods</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 84 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <PackageX className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                84. Unclaimed consignment.-
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (1) if any person fails to take delivery of-
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (a) any consignment ; or
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (b) the consignment released from detention made under sub-section (1) of Sec. 83 ; or
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (c) any remaining part of the consignment under sub-section (2) of Sec. 83.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2">
                        Such consignment shall be treated as unclaimed.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (2) The railway administration may,-
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (a) in the case of an unclaimed consignment which is perishable in nature, sell such consignment in the manner provided in Cl. (a) of sub-section (2) of Sec. 83 or
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (b) in the case of an unclaimed consignment which is not perishable in nature, cause a notice to be served upon the consignee if his name and address are known, and upon the consignor if the name and address of the consignee are not known, requiring him to remove the goods within a period of seven days from the receipt thereof and if such notice cannot be served or there is a failure to comply with the requisition in the notice, sell such consignment in the manner provided in Cl. (b) of sub-section (2) of Sec. 83.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (3) The railway administration shall out of the sale proceeds received under sub-section (2) retain a sum equal to the freight and other charges including expenses for the sale due to it and the surplus, if any, of such sale proceeds shall be rendered to the person entitled thereto.
                      </p>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comment</h3>
                    </div>
                    <div className="space-y-3 ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 84 provides for treating certain consignments as unclaimed and the manner of disposal of such consignments and rendering the surplus of sale proceeds to the person entitled thereto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Indian Railways Act 1989 - Chapter IX
            </p>
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

export default IRACT1989Section84