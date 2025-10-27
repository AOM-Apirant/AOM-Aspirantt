'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  MessageSquare,
  Shield
} from 'lucide-react'

const IRACT1989Section93 = () => {
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
            
            {/* Section 93 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                93. General responsibilities of a railway administration as carrier of goods. –
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Save as otherwise provided in this Act, a railway administration shall be responsible for the loss, destruction, damage or deterioration in transit, or Nondelivery of any consignment, arising from any cause except the following namely. -
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        i. act of God ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        ii. act of War ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        iii. act of public enemies;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        iv. arrest, restrain or seizure under legal process;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        v. orders or restrictions imposed by the Central Government or a State Government or by an officer or authority subordinate to the Central Government or a State Government authorized by it in this behalf ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        vi. act or omission or negligence of the consignor or the consignee or the endorsee or the agent or servant of the consignor or the consignee or the endorsee;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        vii. natural deterioration or wastage in bulk or weight due to inherent defect, quality or vice of the goods ;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        viii. latent defects;
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2 ml-4">
                        ix. fire, explosion or any unforeseen risk :
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-2">
                        Provided that even where such loss, destruction, damage, deterioration or non-delivery is proved to have arisen from any one or more of the aforesaid causes, the railway administration shall not be relieved of its responsibility for th loss, destruction, damage, deterioration or non-delivery unless the railway administration further proves that it has used reasonable foresight and care in the carriage of the goods.
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
                        Section 93 provides that railway administration shall be responsible for the loss, destruction, damage, etc., of any consignment arising from any cause except the causes mentioned therein.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Railway&apos;s liability :
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        The learned counsel for the appellant has argued that if the goods are seized from the possession of the railways, only then this provisions can be taken report to by the railways in escaping the liability. This contention raised by the counsel for the appellant has no force as there is no limitation placed in Cl. (d) where the goods were stolen and were soon after recovered and were seized and they remained in legal process. Obviously if any deterioration has taken place in the goods during the period of seizure and legal process, the liability cannot be imposed on the railways.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Limitation :
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Right to apply for compensation accrued to the claimant within the meaning of Art. 137 of 1963 Act on the date when open delivery was granted. In the present case, open delivery having been granted on 11th April, 1980, the claim application filed before the Tribunal on 18th May. 1963 was well within the statutory period of three years and two months as two months time sis granted for service of statutory notice.
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

export default IRACT1989Section93