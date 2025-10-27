'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  MessageSquare,
  PackageX
} from 'lucide-react'

const IRACT1989Section98 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">CHAPTER XI</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Responsibilities of Railway Administration as Carriers</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 98 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <PackageX className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                98. Goods in defective condition or defectively packed. –
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (1) Notwithstanding anything contained in the foregoing provisions of this chapter, when any goods entrusted to a railway administration for carriage –
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (a) are in a defective condition as a consequence of which they are liable to damage, deterioration, leakage or wastage ; or
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (b) are either defectively packed or not packed in such manner as may be prescribed and as a result of such defective or improper packing are liable to damage, deterioration, leakage or wastage,
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2">
                        and the fact or such condition or defective or improper packing has been recorded by the consignor or his agent in the forwarding note, the railway administration shall not be responsible for any damage, deterioration, leakage or wastage or for the condition in which such goods are available for delivery at destination :
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2">
                        Proved that the railway administration shall be responsible for any such damage, deterioration, leakage or wastage or for the condition in which such goods are available for delivery at destination if negligence or misconduct on the part of the railway administration or of any of its servants is proved.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        (2) When any goods entrusted to a railway administration for carriage are found on arrival at the destination station to have been damaged or to have suffered deterioration, leakage or wastage , the railway administration shall not be responsible for the damage, deterioration, leakage or wastage of the goods on proof by railway administration –
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (a) that he goods were, at the time of entrustment to the railway administration, in a defective condition, or were at that time either defectively packed or not packed in such manner as may be prescribed and as a result of which were liable to damage, deterioration, leakage or wastage; and
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        (b) that such defective condition or defective or improper packing was not brought to the notice of the railway administration or any of its servants at the time of entrustment of the goods to the railway administration for carriage by railways;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2">
                        provided that the railway administration shall be responsible for any such damage, deterioration, leakage or wastage if negligence or misconduct on the part of the railway administration or of any of its servants is proved.
                      </p>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3 ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 98 provided for the responsibility of railways in cases of consignment which are in defective condition or are defectively packed.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Proviso. – In Abdul Jabar Butt v. Satte of Jammu and Kashmir, it was held that a proviso must be considered with ralation to the principle matter to which it stands as a proviso.
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
              Indian Railways Act 1989 - Chapter XI
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

export default IRACT1989Section98