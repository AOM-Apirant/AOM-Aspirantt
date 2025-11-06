'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  XCircle
} from 'lucide-react'

const RTIAct2005Section31 = () => {
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
              RIGHT TO INFORMATION ACT 2005
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER VI</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">MISCELLANEOUS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Repeal Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <XCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                31. Repeal
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Main Content */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="lg:w-5 lg:h-5 w-4 h-4 text-blue-200" />
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        The Freedom of Information Act, 2002 (5 of 2003) is hereby repealed.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* THE FIRST SCHEDULE SECTION */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-purple-300/30 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                THE FIRST SCHEDULE
              </h2>
              <div className="space-y-4 lg:text-lg text-base text-gray-200 leading-relaxed">
                <div className="flex items-center gap-3">
                  <span className="inline-flex bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                    <Scale className="w-5 h-5 text-cyan-200" />
                  </span>
                  <span>
                    <strong>Applicable Sections:</strong> 13(3) and 16(3)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                    <FileText className="w-5 h-5 text-cyan-200" />
                  </span>
                  <span>
                    <strong>Form of Oath or Affirmation</strong><br/>
                    To be made by the Chief Information Commissioner, Information Commissioner, State Chief Information Commissioner, or State Information Commissioner
                  </span>
                </div>
                <div className="rounded-lg border-l-4 border-purple-400 bg-white/5 p-4 mt-2">
                  <span className="block text-center text-lg lg:text-xl font-semibold text-pink-100 mb-4">
                    Oath / Affirmation Text
                  </span>
                  <blockquote className="italic text-cyan-100">
                    “I, <span className="text-pink-200 font-bold">.....................</span>, having been appointed Chief Information Commissioner / Information Commissioner / State Chief Information Commissioner / State Information Commissioner,
                    <br />
                    <span className="inline-flex items-center gap-2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full px-2 py-0.5 text-xs font-semibold text-white">swear in the name of God</span>
                      <span className="text-gray-300">or</span>
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full px-2 py-0.5 text-xs font-semibold text-white">solemnly affirm</span>
                    </span>
                    <br />
                    that I will bear true faith and allegiance to the Constitution of India as by law established, that I will uphold the sovereignty and integrity of India, that I will duly and faithfully and to the best of my ability, knowledge and judgment perform the duties of my office without fear or favour, affection or ill-will and that I will uphold the Constitution and the laws.”
                  </blockquote>
                </div>
              </div>
            </div>


            {/* THE SECOND SCHEDULE SECTION */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-pink-400/30 hover:bg-white/15 transition-all duration-300 mt-10">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Scale className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                THE SECOND SCHEDULE
              </h2>
              <div className="space-y-3 lg:text-lg text-base text-gray-200 leading-relaxed">
                <div className="flex items-center gap-3">
                  <span className="inline-flex bg-gradient-to-r from-pink-400 to-purple-600 rounded-full p-2">
                    <FileText className="w-5 h-5 text-pink-100" />
                  </span>
                  <span>
                    <strong>Reference:</strong> See Section 24
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex bg-gradient-to-r from-pink-400 to-purple-600 rounded-full p-2">
                    <Scale className="w-5 h-5 text-pink-100" />
                  </span>
                  <span>
                    <strong>Title:</strong> Intelligence and Security Organisations established by the Central Government
                  </span>
                </div>
                <div className="rounded-lg border-l-4 border-pink-400 bg-white/5 p-4 mt-3 overflow-x-auto">
                  <ol className="space-y-2 list-decimal list-inside pl-2 text-cyan-100">
                    <li>
                      Intelligence Bureau
                    </li>
                    <li>
                      Research and Analysis Wing (RAW), including its technical wing, namely, the Aviation Research Centre of the Cabinet Secretariat
                      <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 319(E), dated 4-5-2021)</span>
                    </li>
                    <li>
                      Directorate of Revenue Intelligence
                    </li>
                    <li>
                      Central Economic Intelligence Bureau
                    </li>
                    <li>
                      Directorate of Enforcement
                    </li>
                    <li>
                      Narcotics Control Bureau
                    </li>
                    <li className="line-through text-gray-400">
                      [Omitted]
                      <span className="block text-xs text-gray-400 ml-2">(Serial Number 7 omitted by notification No. G.S.R. 319(E), dated 4-5-2021)</span>
                    </li>
                    <li>
                      Special Frontier Force of the Cabinet Secretariat
                      <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 319(E), dated 4-5-2021)</span>
                    </li>
                    <li>Border Security Force</li>
                    <li>Central Reserve Police Force</li>
                    <li>Indo-Tibetan Border Police</li>
                    <li>Central Industrial Security Force</li>
                    <li>National Security Guards</li>
                    <li>Assam Rifles</li>
                    <li>
                      Sashastra Seema Bal
                      <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 347, dated 28-9-2005)</span>
                    </li>
                    <li>
                      Directorate General of Income-tax (Investigation)
                      <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 235(E), dated 27-3-2008)</span>
                    </li>
                    <li>
                      National Technical Research Organisation
                      <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 235(E), dated 27-3-2008)</span>
                    </li>
                    <li>
                      Financial Intelligence Unit, India
                      <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 235(E), dated 27-3-2008)</span>
                    </li>
                    <li>
                      <div>
                        <div>Special Protection Group</div>
                        <div>Defence Research and Development Organisation</div>
                        <div>Border Road Development Board</div>
                        <span className="block text-xs text-gray-400 mt-1">[Added by notification No. G.S.R. 347, dated 28-9-2005. Partly omitted by G.S.R. 235(E), dated 27-3-2008]</span>
                      </div>
                    </li>
                    <li>
                      National Security Council Secretariat
                      <span className="block text-xs text-gray-400 mt-1">(Added by notification No. G.S.R. 726(E), dated 8-10-2008)</span>
                    </li>
                    <li>
                      <div>
                        <div>Central Bureau of Investigation</div>
                        <div>National Investigation Agency</div>
                        <div>National Intelligence Grid</div>
                        <span className="block text-xs text-gray-400 mt-1">(Added by notification No. G.S.R. 442(E), dated 9-6-2011)</span>
                      </div>
                    </li>
                    <li>
                      Strategic Forces Command
                      <span className="block text-xs text-gray-400 mt-1">(Inserted by notification No. G.S.R. 673(E) dated 8-7-2016)</span>
                    </li>
                  </ol>
                </div>
                {/* Notification footnotes */}
                <div className="mt-6 text-sm text-gray-400 space-y-1">
                  <div>
                    <span className="font-semibold">References & Notifications:</span>
                    <ul className="list-disc list-inside space-y-1 mt-1">
                      <li>Item 2: Substituted by notification No. G.S.R. 319(E), dated 4-5-2021</li>
                      <li>Item 7: Serial Number 7 omitted by notification No. G.S.R. 319(E), dated 4-5-2021</li>
                      <li>Item 8: Substituted by notification No. G.S.R. 319(E), dated 4-5-2021</li>
                      <li>Item 15: Substituted by notification No. G.S.R. 347, dated 28-9-2005</li>
                      <li>Items 16, 17, 18: Substituted by notification No. G.S.R. 235(E), dated 27-3-2008</li>
                      <li>Items 19–21: Added by notification No. G.S.R. 347, dated 28-9-2005. Some omitted by G.S.R. 235(E), dated 27-3-2008</li>
                      <li>Item 22: Added by notification No. G.S.R. 726(E), dated 8-10-2008</li>
                      <li>Items 23–25: Added by notification No. G.S.R. 442(E), dated 9-6-2011</li>
                      <li>Item 26: Inserted by notification No. G.S.R. 673(E), dated 8-7-2016</li>
                    </ul>
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
              Right to Information Act 2005 - Chapter VI
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

export default RTIAct2005Section31