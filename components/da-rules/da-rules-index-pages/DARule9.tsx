'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  FileText,
  Gavel,
  Users,
  ClipboardList,
  UserCheck
} from 'lucide-react'

const DARule9 = () => {
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
              DISCIPLINARY & APPEAL RULES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - IV</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">PROCEDURE FOR IMPOSING PENALTIES</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Main Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Gavel className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                9. Procedure for imposing Major Penalties
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-cyan-200">(1)</span> No order imposing any of the penalties specified in clauses (v) to (ix) of Rule 6 shall be made except after an inquiry held, as far as may be, in the manner provided in this rule and Rule 10, or in the manner provided by the Public Servants (Inquiries) Act, 1850 (37 of 1850) where such inquiry is held under that Act.
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Users className="w-5 h-5 text-purple-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-purple-200">(2)</span> Whenever the disciplinary authority is of the opinion that there are grounds for inquiring into the truth of any imputation of misconduct or misbehaviour against a Railway servant, it may itself inquire into, or appoint under this rule or under the provisions of the Public Servants (Inquiries) Act, 1850, as the case may be, a Board of Inquiry or other authority to inquire into the truth thereof.
                    <div className="mt-4 bg-purple-900/30 rounded-lg p-4 border border-purple-400/30">
                      <span className="font-semibold text-yellow-300">Provided that</span> where there is a complaint of sexual harassment within the meaning of rule 3 C of the Railway Services (Conduct) Rules, 1966, the Complaints Committee established for inquiring into such complaints, shall be deemed to be the inquiring authority appointed by the disciplinary authority for the purpose of these rules and the Complaints Committee shall hold, if separate procedure has not been prescribed for the Complaints Committee for holding the inquiry into the complaints of sexual harassment, the inquiry as far as practicable in accordance with the procedure laid down in these rules.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (3) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-cyan-200">(3)</span> Where a Board of Inquiry is appointed under sub-rule (2) it shall consist of not less than two members, each of whom shall be higher in rank than the Railway servant against whom the inquiry is being held and none of whom shall be subordinate to the other member or members as the case may be, of such Board.
                  </div>
                </div>
              </div>

              {/* Sub-rule (4) */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-purple-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-purple-200">(4)</span> Where the Board of Inquiry consists of two or more than two members, the senior member shall be the Presiding Officer.
                  </div>
                </div>
              </div>

              {/* Sub-rule (5) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-cyan-200">(5)</span> Every decision of the Board of Inquiry shall be passed by majority of votes, and where there is an equality of votes on the findings, the finding of each member shall be incorporated in the report prepared under clause (i) of sub-rule (25).
                    <div className="mt-4 bg-blue-900/30 rounded-lg p-4 border border-blue-400/30">
                      <span className="font-semibold text-yellow-300">Explanation</span> - Where the disciplinary authority itself holds the inquiry, any reference in sub-rule (12) and in sub-rules (14) to (25), to the inquiring authority shall be construed as a reference to the disciplinary authority.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (6) */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-purple-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-purple-200">(6)</span> Where it is proposed to hold an inquiry against a Railway servant under this rule and Rule 10, the disciplinary authority shall draw up or cause to be drawn up -
                    <div className="mt-4 ml-8 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-purple-200">(i)</span>
                        <span>the substance of the imputations of misconduct or misbehaviour into definite and distinct articles of charge;</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-purple-200">(ii)</span>
                        <div className="flex-1">
                          <span>a statement of the imputations of misconduct or misbehaviour in support of each article of charge which shall contain -</span>
                          <div className="mt-3 ml-6 space-y-2">
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-purple-200">(a)</span>
                              <span>a statement of all relevant facts including any admission or confession made by the Railway servant;</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="font-semibold text-purple-200">(b)</span>
                              <span>a list of documents by which, and a list of witnesses by whom, the articles of charge are proposed to be sustained.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (7) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-cyan-200">(7)</span> The disciplinary authority shall deliver or cause to be delivered to the Railway servant a copy of the articles of charge, the statement of the imputations of misconduct or misbehaviour and a list of documents and witnesses by which each article of charge is proposed to be sustained and shall require the Railway servant to submit a written statement of his defence within ten days or such further time as the disciplinary authority may allow.
                    <div className="mt-4 bg-blue-900/30 rounded-lg p-4 border border-blue-400/30">
                      <span className="font-semibold text-yellow-300">Note:</span> - If copies of documents have not been delivered to the Railway servant along with the articles of charge and if he desires to inspect the same for the preparation of his defence, he may do so, within 10 days from the date of receipt of the articles of charge by him and complete inspection within ten days thereafter and shall state whether he desires to be heard in person.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (8) */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-purple-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-purple-200">(8)</span> The Railway servant may, for the purpose of his defence submit with the written statement of his defence, a list of witnesses to be examined on his behalf.
                    <div className="mt-4 bg-purple-900/30 rounded-lg p-4 border border-purple-400/30">
                      <span className="font-semibold text-yellow-300">Note:</span> - If the Railway servant applies in writing for the supply of copies of the statements of witnesses mentioned in the list referred to in sub-rule (6), the disciplinary authority shall furnish him with a copy each of such statement as early as possible and in any case not later than three days before the commencement of the examination of the witnesses on behalf of the disciplinary authority.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (9) */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-indigo-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Gavel className="w-5 h-5 text-indigo-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed w-full">
                    <span className="font-semibold text-indigo-200">(9)</span>
                    <ul className="mt-2 space-y-5 ml-4">
                      <li>
                        <div className="flex items-start gap-3">
                          <span className="font-semibold text-indigo-200">(a)</span>
                          <div>
                            <ul className="ml-1 space-y-2">
                              <li className="flex items-start gap-3">
                                {/* gavel icon */}
                                <span>
                                  <Gavel className="w-4 h-4 text-purple-300 inline-block mr-1" />
                                </span>
                                <span>
                                  <span className="font-semibold text-purple-200">(i)</span>{" "}
                                  Upon receiving the written statement of defence, the disciplinary authority must review it and decide whether to proceed with the inquiry under this rule.
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <span>
                                  <FileText className="w-4 h-4 text-teal-300 inline-block mr-1" />
                                </span>
                                <span>
                                  <span className="font-semibold text-purple-200">(ii)</span>{" "}
                                  If the authority decides to continue the inquiry, it may itself investigate the articles of charge that have not been admitted, or it may appoint a Board of Inquiry or another authority (as per sub-rule 2) for this purpose.
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <span>
                                  <BookOpen className="w-4 h-4 text-cyan-300 inline-block mr-1" />
                                </span>
                                <span>
                                  <span className="font-semibold text-purple-200">(iii)</span>{" "}
                                  If all charges are admitted by the Railway servant in the written defence, the authority shall record its findings for each charge—after taking any further evidence it considers necessary—and then proceed as described in Rule 10.
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <span>
                                  <Scale className="w-4 h-4 text-amber-300 inline-block mr-1" />
                                </span>
                                <span>
                                  <span className="font-semibold text-purple-200">(iv)</span>{" "}
                                  If, after reviewing the written statement, the authority believes a major penalty is not warranted, it may discontinue the major penalty proceedings. However, this does not restrict its right to impose any minor penalty (not requiring action under sub-rule (2) of Rule 11). If a minor penalty is to be imposed, an order can be issued directly, and the Railway servant need not be given another opportunity to make a representation before the penalty is imposed.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start gap-3">
                          <span className="font-semibold text-indigo-200">(b)</span>
                          <span>
                            <FileText className="w-4 h-4 text-blue-300 inline-block mr-1" />
                            If the Railway servant does not submit any written statement of defence, the disciplinary authority may itself inquire into the charges or, if necessary, appoint (under sub-rule 2) an inquiring authority for the purpose. The Railway servant should be informed about such an appointment.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start gap-3">
                          <span className="font-semibold text-indigo-200">(c)</span>
                          <span>
                            <Gavel className="w-4 h-4 text-fuchsia-300 inline-block mr-1" />
                            When the disciplinary authority itself inquires into a charge, or appoints a Board of Inquiry or other inquiring authority for this purpose, it may—by written order—appoint any Railway servant or other Government servant as the <span className="font-semibold text-yellow-200">Presenting Officer</span> to present its case in support of the charges.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sub-rule (10) */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-400/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-indigo-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-indigo-200">(10)</span>{" "}
                    When the disciplinary authority is <span className="font-semibold">not</span> the inquiring authority, it must forward to the inquiring authority:
                    <ul className="list-inside mt-4 mb-2">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-purple-200">(i)</span>{" "}
                        <span>A copy of the articles of charge and the statement of imputations of misconduct or misbehaviour.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-purple-200">(ii)</span>{" "}
                        <span>A copy of the written statement of defence, if any, submitted by the Railway servant.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-purple-200">(iii)</span>{" "}
                        <span>A copy of the statement of witnesses, if any, referred to in sub-rule (6).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-purple-200">(iv)</span>{" "}
                        <span>Proof of delivery of the documents (referred to in sub-rule 6) to the Railway servant.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-purple-200">(v)</span>{" "}
                        <span>A copy of the order appointing the Presenting Officer, if any.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-purple-200">(vi)</span>{" "}
                        <span>A copy of the list of witnesses, if any, furnished by the Railway servant.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sub-rule (11) */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-400/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-cyan-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-cyan-200">(11)</span>{" "}
                    The Railway servant must appear in person before the inquiring authority on the specified date and time—within ten working days from the date on which the inquiring authority receives the appointment order, or within such further time (not exceeding ten days) as allowed by the inquiring authority.
                  </div>
                </div>
              </div>

              {/* Sub-rule (12) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-emerald-400/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-blue-500 to-emerald-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Gavel className="w-5 h-5 text-blue-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-blue-200">(12)</span>{" "}
                    If the Railway servant fails to appear within the specified time, or refuses/omits to plead,
                    the inquiring authority shall require the Presenting Officer (if any) to produce evidence to prove the charges. The case must then be adjourned to a date not exceeding thirty days, and an order be recorded specifying that the Railway servant, for the purpose of preparing their defence, may give notice within ten days (or further allowed time not exceeding ten days) to request discovery or production of documents in the possession of Railway Administration—but not listed under sub-rule (6).
                    <div className="mt-4 bg-blue-900/30 rounded-lg p-4 border border-blue-400/30">
                      <span className="font-semibold text-yellow-300">Note:</span> The Railway servant must indicate the relevance of each document they request to be discovered or produced by the Railway Administration.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (13) */}
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-purple-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-5">
                    <div>
                      <span className="font-semibold text-purple-200">(13)(a)</span>{" "}
                      The Railway servant may represent their case with assistance from any other Railway servant (including a Railway servant on leave preparatory to retirement) working under the same Railway Administration, subject to whose control they are working. Legal practitioners are not permitted for this purpose unless the Presenting Officer is a legal practitioner, or the disciplinary authority, considering the circumstances, specifically permits it. If the Railway servant is employed in the office of the Railway Board, its attached or subordinate offices, they may similarly be assisted by a Railway servant (including one on leave preparatory to retirement) from the same office.
                    </div>
                    <div>
                      <span className="font-semibold text-purple-200">(b)</span>{" "}
                      Assistance from a retired Railway servant is also permitted, as per terms and conditions notified by the President through general or special order.
                    </div>
                    {/* Notes */}
                    <div className="mt-4 bg-purple-900/40 rounded-lg p-4 border border-purple-400/20 space-y-2">
                      <div>
                        <span className="font-bold text-yellow-200">Note 1:</span>{" "}
                        A non-gazetted Railway servant may seek assistance from an official of a recognized Railway Trade Union (under the Railway Administration where the servant works) to present their case before the inquiring authority. Legal practitioners are not allowed as representatives except as stated in clause (a). A Trade Union official may only appear on behalf of a Railway employee if they have served at least one continuous year in a recognized Railway Trade Union, and must not accept any fees for such assistance.
                      </div>
                      <div>
                        <span className="font-bold text-yellow-200">Note 2:</span>
                        <ul className="list-decimal list-inside pl-5 space-y-1 mt-1 text-base text-purple-100">
                          <li>
                            Nomination of an assisting Railway servant or a recognized full-time Railway Trade Union official must be made within twenty days from the appointment date of the inquiring authority.
                          </li>
                          <li>
                            The nomination will not be accepted if the assisting person already has three pending disciplinary cases to assist. 
                            <span className="block mt-1">
                              <span className="font-semibold text-teal-200">Provided</span> that an official of a recognized Railway Trade Union may assist in more than three pending cases.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (14) */}
              <div className="bg-gradient-to-br from-teal-600/20 to-blue-400/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-teal-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-teal-500 to-blue-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-teal-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-teal-200">(14)</span>{" "}
                    After nominating the assisting Railway servant or Trade Union official and completing other preliminary steps, the inquiry date is fixed—generally within one month from the appointment of the inquiring authority. The Railway servant must be informed accordingly.
                  </div>
                </div>
              </div>

              {/* Sub-rule (15) */}
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-400/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-blue-200">(15)</span>{" "}
                    Upon receiving a request for discovery or production of documents, the inquiring authority forwards the request (or copies) to the officer in custody of the documents, requiring them to produce the documents by a specified date. 
                    <div className="mt-3 bg-blue-900/20 rounded p-3 border border-blue-400/20">
                      <span className="font-semibold text-yellow-300">Note:</span> The inquiring authority may, for recorded reasons, refuse to requisition documents they consider not relevant to the case.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (16) */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-violet-400/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-indigo-500 to-violet-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-indigo-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-indigo-200">(16)</span>{" "}
                    Upon such requisition, the authority holding the documents must produce them before the inquiring authority by the specified time.
                    <div className="mt-3 bg-indigo-900/20 rounded p-3 border border-indigo-400/20">
                      <span className="font-semibold text-yellow-300">Exception:</span> If production of any document is deemed against public interest or State security, the authority must record reasons in writing, inform the inquiring authority, and the request will be withdrawn for such documents. The Railway servant must be notified accordingly.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (17) */}
              <div className="bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-cyan-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-cyan-200">(17)</span>{" "}
                    On the fixed date for inquiry, the oral and documentary evidence to prove the charges must be presented by, or on behalf of, the disciplinary authority. All witnesses will be examined by the Presenting Officer (if any) and may be cross-examined by the Railway servant or their representative. The Presenting Officer can re-examine witnesses on matters from cross-examination (not new topics, unless permitted by the inquiring authority). Additionally, the inquiring authority may also put questions to the witnesses as deemed necessary.
                  </div>
                </div>
              </div>
              {/* Sub-rule (18) */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-cyan-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-cyan-200">(18)</span>{" "}
                    Before closing the case on behalf of the disciplinary authority, the inquiring authority may, at its discretion, permit the Presenting Officer (if any) to produce additional evidence not included in the original list or may itself call for new evidence or recall and re-examine any witness.<br /><br />
                    In such cases, the Railway servant is entitled, upon request, to receive a copy of the list of further evidence to be produced and to be granted an adjournment of the inquiry for three clear days (excluding the day of adjournment and the day to which the inquiry is adjourned) before the new evidence is produced. The Railway servant must also be given an opportunity to inspect these documents before they are officially included in the records.<br /><br />
                    The inquiring authority may also allow the Railway servant to produce fresh evidence if it considers such production necessary in the interest of justice.
                    <div className="mt-3 bg-cyan-900/20 rounded p-3 border border-cyan-400/20">
                      <span className="font-semibold text-yellow-300">Note:</span> New evidence or witnesses must not be permitted solely to fill gaps in the initial evidence. Such evidence should only be introduced if there is a genuine shortcoming or defect in the evidence previously produced.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (19) */}
              <div className="bg-gradient-to-br from-violet-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-pink-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-violet-500 to-pink-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-pink-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-pink-200">(19)</span>{" "}
                    Once the case on behalf of the disciplinary authority is closed, the Railway servant must present his defence either orally or in writing, as he prefers. If given orally, the defence is recorded and signed by the Railway servant. In all cases, a copy of the defence statement should be provided to the Presenting Officer, if present.
                  </div>
                </div>
              </div>

              {/* Sub-rule (20) */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Users className="w-5 h-5 text-indigo-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-indigo-200">(20)</span>{" "}
                    The Railway servant then produces his own evidence, and may examine himself if he so wishes. The witnesses brought by the Railway servant are examined on his behalf, and may be cross-examined by the Presenting Officer. The Railway servant may re-examine the witnesses on points raised during cross-examination, but not on any new topic without permission of the inquiring authority. The inquiring authority may also question the witnesses as deemed fit.
                  </div>
                </div>
              </div>

              {/* Sub-rule (21) */}
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-400/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-pink-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-pink-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-pink-200">(21)</span>{" "}
                    After the Railway servant concludes his case, the inquiring authority may, and if the Railway servant has not examined himself shall, generally question him about the circumstances that appear against him in the evidence. This allows the Railway servant to explain or clarify any such circumstance.
                  </div>
                </div>
              </div>

              {/* Sub-rule (22) */}
              <div className="bg-gradient-to-br from-indigo-400/20 to-emerald-300/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-300/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-emerald-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-emerald-200">(22)</span>{" "}
                    Once all evidence has been produced, the inquiring authority may hear both the Presenting Officer (if any) and the Railway servant, or permit them to submit written briefs of their cases, if they so desire.
                  </div>
                </div>
              </div>

              {/* Sub-rule (23) */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-orange-400/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-orange-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <FileText className="w-5 h-5 text-orange-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-orange-200">(23)</span>{" "}
                    If the Railway servant, despite receiving the articles of charge, does not submit the written statement of defence by the specified date or fails to appear before the inquiring authority or comply with the rules requirements, the inquiring authority may proceed with the inquiry ex parte (in their absence).
                  </div>
                </div>
              </div>

              {/* Sub-rule (24) */}
              <div className="bg-gradient-to-br from-fuchsia-500/20 to-indigo-300/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-fuchsia-400/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-fuchsia-500 to-indigo-400 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-fuchsia-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-fuchsia-200">(24)</span>{" "}
                    If the inquiring authority, after hearing and recording part or all of the evidence, is replaced by another authority, the successor may rely on the evidence already recorded or may partly record fresh evidence itself. If the new inquiring authority considers it necessary for the interest of justice, it can recall, examine, cross-examine, and re-examine any witness, as permitted earlier.
                  </div>
                </div>
              </div>

              {/* Sub-rule (25) */}
              <div className="bg-gradient-to-br from-emerald-400/20 to-yellow-300/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-emerald-300/30 mb-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-emerald-400 to-yellow-200 p-2 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Scale className="w-5 h-5 text-yellow-200" />
                  </span>
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3">
                    <span className="font-semibold text-yellow-200">(25)</span>{" "}
                    <span className="font-semibold">Preparation and Contents of Inquiry Report:</span>
                    <ul className="list-disc ml-6 mt-2 text-base lg:text-lg space-y-2">
                      <li>
                        <span className="font-semibold text-emerald-300">a)</span> The articles of charge and the statement of imputations of misconduct or misbehaviour.
                      </li>
                      <li>
                        <span className="font-semibold text-emerald-300">b)</span> The defence of the Railway servant for each article of charge.
                      </li>
                      <li>
                        <span className="font-semibold text-emerald-300">c)</span> An assessment of the evidence for each article of charge.
                      </li>
                      <li>
                        <span className="font-semibold text-emerald-300">d)</span> The findings and reasons for each article of charge.
                      </li>
                    </ul>
                    <div className="mt-3 bg-emerald-900/20 rounded p-3 border border-emerald-400/20 text-sm">
                      <span className="font-semibold text-yellow-300">Explanation:</span> If, during the inquiry, a different article of charge (from the original) is established, the inquiring authority may record its findings, provided the Railway servant has either admitted the underlying facts or had a fair chance to defend against such charge.
                    </div>
                    <span className="font-semibold">Submission of Records:</span>
                    <ul className="list-disc ml-6 mt-2 text-base lg:text-lg space-y-2">
                      <li>
                        The report prepared above.
                      </li>
                      <li>
                        The written statement of defence (if any) from the Railway servant.
                      </li>
                      <li>
                        All oral and documentary evidence produced during the inquiry.
                      </li>
                      <li>
                        Written briefs (if any) filed by the Presenting Officer and/or the Railway servant.
                      </li>
                      <li>
                        Orders made by the disciplinary authority relating to the inquiry.
                      </li>
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
              Disciplinary & Appeal Rules - Part IV, Rule 9
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

export default DARule9