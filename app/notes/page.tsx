import React from 'react'

const Notes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 sm:py-8 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
            Notes
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
              Official Language Act 1963
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-8 text-center">
              Articles 343 to 351
            </p>

            {/* Chapter I */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-2 sm:mb-4 border-b-2 border-blue-200 pb-1 sm:pb-2">
                Chapter I - Language of the Union
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 343:</strong> Official language of the Union.</span>
                </li>
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 344:</strong> Commission and Committee of Parliament on official language.</span>
                </li>
              </ul>
            </div>

            {/* Chapter II */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-2 sm:mb-4 border-b-2 border-blue-200 pb-1 sm:pb-2">
                Chapter II - Regional Languages
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 345:</strong> Official language or languages of a State</span>
                </li>
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 346:</strong> Official language for communication between one State and another or between a State and the Union.</span>
                </li>
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 347:</strong> Special provision relating to language spoken by a section of the population of a State.</span>
                </li>
              </ul>
            </div>

            {/* Chapter III */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-2 sm:mb-4 border-b-2 border-blue-200 pb-1 sm:pb-2">
                Chapter III - Language of the Supreme Court, High Courts, etc.
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 348:</strong> Language to be used in the Supreme Court and in the High Courts and for Acts, Bills, etc.</span>
                </li>
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 349:</strong> Special procedure for enactment of certain laws relating to language.</span>
                </li>
              </ul>
            </div>

            {/* Chapter IV */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-2 sm:mb-4 border-b-2 border-blue-200 pb-1 sm:pb-2">
                Chapter IV - Special Directives
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 350:</strong> Language to be used in representations for redress of grievances.</span>
                </li>
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 350A:</strong> Facilities for instruction in mother-tongue at primary stage.</span>
                </li>
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 350B:</strong> Special Officer for linguistic minorities.</span>
                </li>
                <li className="flex items-start text-sm sm:text-base md:text-lg">
                  <span className="text-blue-600 font-semibold mr-2 sm:mr-3">•</span>
                  <span><strong>Article 351:</strong> Directive for development of the Hindi language.</span>
                </li>
              </ul>
            </div>

            {/* Official Languages Rules */}
            <div className="mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                Official Languages Rules - 1976
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 italic">
                  G.S.R 1052 - In exercise of the powers conferred by section 8, read with sub-section(4) of section 3 of the Official Languages Act, 1963 (19 of 1963), the Central Government hereby makes the following rules, namely;
                </p>
              </div>

              {/* Rules */}
              <div className="space-y-6 sm:space-y-8">
                {/* Rule 1 */}
                <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                    1. Short title, extent and commencement
                  </h4>
                  <div className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                    <p><strong>i.</strong> These rules may be called the Official Languages (Use for Official Purposes of the Union) Rules, 1976.</p>
                    <p><strong>ii.</strong> They shall extend to the whole of India, except the State of Tamilnadu.</p>
                    <p><strong>iii.</strong> They shall come into force on the date of their publication in the Official Gazette.</p>
                  </div>
                </div>

                {/* Rule 2 */}
                <div className="border-l-4 border-green-500 pl-4 sm:pl-6">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                    2. Definitions
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4">In these rules, unless the context otherwise requires:</p>
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-700">
                    <p><strong>a.</strong> &ldquo;Act&rdquo; means the Official Languages Act, 1963 (19 of 1963):</p>
                    <p><strong>b.</strong> &ldquo;Central Government Office&rdquo; includes:</p>
                    <div className="ml-4 sm:ml-6 space-y-1">
                      <p><strong>i.</strong> any Ministry, Department or office of the Central Government,</p>
                      <p><strong>ii.</strong> any office of a Commission, Committee or Tribunal appointed by the Central Government; and</p>
                      <p><strong>iii.</strong> any office of a corporation or company owned or controlled by the Central Government;</p>
                    </div>
                    <p><strong>c.</strong> &ldquo;Employee&rdquo; means any person employed in a Central Government office;</p>
                    <p><strong>d.</strong> &ldquo;Notified Office&rdquo; means an office notified under sub-rule (4) of rule 10;</p>
                    <p><strong>e.</strong> &ldquo;Proficiency in Hindi&rdquo; means proficiency in Hindi as described in rule 9;</p>
                    <p><strong>f.</strong> &ldquo;Region A&rdquo; means the States of Bihar, Haryana, Himachal Pradesh, Madhya Pradesh, Chhattisgarh, Jharkhand, Uttarakhand, Rajasthan and Uttar Pradesh and the Union Territories of Delhi and Andaman and Nicobar Islands;</p>
                    <p><strong>g.</strong> &ldquo;Region B&rdquo; means the States of Gujarat, Maharashtra and Punjab and the Union Territory of Chandigarh, Daman and Diu and Dadra and Nagar Haveli;</p>
                    <p><strong>h.</strong> &ldquo;Region C&rdquo; means the States and the Union Territories other than those referred to in clauses (f) and (g);</p>
                    <p><strong>i.</strong> &ldquo;Working knowledge of Hindi&rdquo; means working knowledge of Hindi as described in rule 10.</p>
                  </div>
                </div>

                {/* Additional Rules Summary */}
                <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-3 sm:mb-4">
                    Additional Rules (3-12)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm md:text-base">
                    <div>
                      <p><strong>Rule 3:</strong> Communications to States</p>
                      <p><strong>Rule 4:</strong> Communications between Central Government Offices</p>
                      <p><strong>Rule 5:</strong> Replies to communications received in Hindi</p>
                      <p><strong>Rule 6:</strong> Use of both Hindi and English</p>
                    </div>
                    <div>
                      <p><strong>Rule 7:</strong> Application, representations etc.</p>
                      <p><strong>Rule 8:</strong> Noting in Central Government offices</p>
                      <p><strong>Rule 9:</strong> Proficiency in Hindi</p>
                      <p><strong>Rule 10:</strong> Working knowledge of Hindi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comprehensive Rajbhasha Section */}
            <div className="mt-12 sm:mt-16 border-t-4 border-purple-500 pt-6 sm:pt-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                Rajbhasha (Official Language) - Complete Guide
              </h2>

              {/* Definition & Constitutional Basis */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                  Definition & Constitutional Basis
                </h3>
                <div className="bg-purple-50 rounded-lg p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-purple-700 mb-1 sm:mb-2">Rajbhasha Definition</h4>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700">Official Language (Raj Bhasha) means the language to be used for official transaction. According to constitutional provisions Hindi in Devanagari script is the official language and English is an associate language.</p>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-purple-700 mb-1 sm:mb-2">Article 343(1) Provisions</h4>
                      <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                        <li>• Hindi in Devanagari script is the Official Language</li>
                        <li>• International form of Indian Numerals shall be used for official purpose of the union</li>
                        <li>• English shall be used for 15 years from 26.01.1950</li>
                        <li>• President may order during the said period for the use of Hindi and Devanagari numerals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Language Act 1963 */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                  Official Language Act 1963
                </h3>
                <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">As per Article 343(1) of the constitution of India, the Official language of the Union shall be in Hindi in Devanagari script. Article 343(2) empowers the President of India to authorize the use of the Hindi language in addition to the English language.</p>
                    
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3">Key Provisions of the Act:</h4>
                      <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                        <li>• Continuance of English language in addition to Hindi for all official purposes</li>
                        <li>• Formation of a committee on official language consisting of thirty members</li>
                        <li>• Authorisation of Hindi translation of Central and State Acts</li>
                        <li>• Optional use of Hindi or other official language of the State in Judgment, decree or order passed by the High Court</li>
                        <li>• Central Government to make rules for carrying out the purposes of this Act</li>
                        <li>• Provisions not to apply to the state of Jammu and Kashmir</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Salient Features of Rules 1976 */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                  Salient Features of Official Language Rules 1976
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-semibold text-green-700 mb-2 sm:mb-3">Key Features (1-4)</h4>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                      <li>• Apply to all Central Government Offices</li>
                      <li>• Region A communications in Hindi</li>
                      <li>• Region B communications ordinarily in Hindi</li>
                      <li>• Region C communications in English</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-semibold text-orange-700 mb-2 sm:mb-3">Key Features (5-8)</h4>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                      <li>• Hindi in proportions as determined</li>
                      <li>• Manuals and codes in both languages</li>
                      <li>• Officer responsibility for bilingual documents</li>
                      <li>• Administrative head responsibility</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Regional Classification */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                  Regional Classification
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  {/* Region A */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-green-700 mb-2 sm:mb-3 flex items-center">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-2">A</span>
                      Region A (K Kshetra)
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">Bihar, Haryana, Himachal Pradesh, Rajasthan, Madhya Pradesh, Uttar Pradesh, Delhi, Chhattisgarh, Jharkhand, Uttarakhand and Andaman and Nicobar Islands</p>
                  </div>

                  {/* Region B */}
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-3 sm:p-4 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-orange-700 mb-2 sm:mb-3 flex items-center">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-2">B</span>
                      Region B (Kha Kshetra)
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">Gujarat, Maharashtra, Punjab and Union Territory of Chandigarh</p>
                  </div>

                  {/* Region C */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-red-700 mb-2 sm:mb-3 flex items-center">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-2">C</span>
                      Region C (Ga Kshetra)
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">All other states and UTs: J&K, Assam, Nagaland, Manipur, Mizoram, Tripura, Arunachal Pradesh, Meghalaya, Sikkim, Andhra Pradesh, Tamil Nadu, Karnataka, Kerala, Goa, Daman and Diu, Lakshadweep, Pondicherry</p>
                  </div>
                </div>
              </div>

              {/* Section 3(3) Requirements */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                  Section 3(3) - Bilingual Use Requirements
                </h3>
                <div className="bg-yellow-50 rounded-lg p-4 sm:p-6">
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4">Section 3(3) of the Act is about the bilingual use in important places. According to this section, the use of Hindi and English both is compulsory. Hindi should be bold and used before or above English.</p>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-yellow-700 mb-2 sm:mb-3">Documents under Section 3(3):</h4>
                    <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                      <li>• Resolutions, general orders, rules, notifications, administrative and other reports or press communiqués</li>
                      <li>• Administrative and other reports and official papers laid before Parliament</li>
                      <li>• Contracts and agreements executed and licenses, permits, notices and forms of tender</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Monetary Benefits & Incentives */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                  Monetary Benefits & Incentives
                </h3>
                
                {/* Personal Pay */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-green-700 mb-2 sm:mb-3">A. Personal Pay Benefits</h4>
                  <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2 sm:mb-3">Benefit of personal Pay equal to the amount of one Increment for 12 months for:</p>
                    <ul className="space-y-1 text-xs sm:text-sm md:text-base text-gray-700">
                      <li>• All non-gazetted staff for passing Hindi PRAGYA examination</li>
                      <li>• Non-gazetted officials for whom &lsquo;PRAVEEN&rsquo; or &lsquo;PRABODH&rsquo; is prescribed</li>
                      <li>• All gazetted officers for whom &lsquo;PRAVEEN&rsquo; or &lsquo;PRAGYA&rsquo; is the last requisite examination</li>
                      <li>• Employees passing Hindi examination equivalent to Metric and Higher standard</li>
                      <li>• All non-gazetted employees on passing Hindi Typing and stenography examination</li>
                    </ul>
                  </div>
                </div>

                {/* Cash Awards */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-blue-700 mb-2 sm:mb-3">B. Cash Awards</h4>
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm md:text-base">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-1 sm:p-2">Marks</th>
                            <th className="text-left p-1 sm:p-2">Pragya</th>
                            <th className="text-left p-1 sm:p-2">Praveen</th>
                            <th className="text-left p-1 sm:p-2">Prabodh</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-1 sm:p-2">70% or more</td>
                            <td className="p-1 sm:p-2">Rs. 2400/-</td>
                            <td className="p-1 sm:p-2">Rs. 1800/-</td>
                            <td className="p-1 sm:p-2">Rs. 1600/-</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-1 sm:p-2">60% or more</td>
                            <td className="p-1 sm:p-2">Rs. 1600/-</td>
                            <td className="p-1 sm:p-2">Rs. 1200/-</td>
                            <td className="p-1 sm:p-2">Rs. 800/-</td>
                          </tr>
                          <tr>
                            <td className="p-1 sm:p-2">55% or more</td>
                            <td className="p-1 sm:p-2">Rs. 800/-</td>
                            <td className="p-1 sm:p-2">Rs. 600/-</td>
                            <td className="p-1 sm:p-2">Rs. 400/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Other Incentives */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-purple-700 mb-2 sm:mb-3">C. Other Incentives</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
                      <h5 className="font-semibold text-purple-700 mb-1 sm:mb-2 text-sm sm:text-base">Essay & Speech Competitions</h5>
                      <ul className="space-y-1 text-xs sm:text-sm md:text-base text-gray-700">
                        <li>• 1st Prize: Rs. 1200/-</li>
                        <li>• 2nd Prize: Rs. 1000/-</li>
                        <li>• 3rd Prize: Rs. 900/-</li>
                        <li>• Consolation: Rs. 250/- (Each)</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-3 sm:p-4">
                      <h5 className="font-semibold text-indigo-700 mb-1 sm:mb-2 text-sm sm:text-base">Noting & Drafting Competition</h5>
                      <ul className="space-y-1 text-xs sm:text-sm md:text-base text-gray-700">
                        <li>• All India 1st Prize: Rs. 3000/-</li>
                        <li>• All India 2nd Prize: Rs. 2500/-</li>
                        <li>• All India 3rd Prize: Rs. 2000/-</li>
                        <li>• Consolation: Rs. 1500/- (Each)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Guidelines */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                  Implementation Guidelines
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">Administrative Responsibilities</h4>
                      <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                        <li>• Ensure constitutional provisions compliance</li>
                        <li>• Implement annual programme targets</li>
                        <li>• Maximum use of Hindi in correspondences</li>
                        <li>• Implementation of 3(3) Rules</li>
                        <li>• Organize Hindi classes for employees</li>
                        <li>• Implement all incentive schemes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">Operational Activities</h4>
                      <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                        <li>• Use Hindi in noting & drafting</li>
                        <li>• Observe Hindi Divas/Week/Cultural Programmes</li>
                        <li>• Conduct Hindi workshops</li>
                        <li>• Form Official Language committees</li>
                        <li>• Inspect bilingual use in offices</li>
                        <li>• Devise effective checkpoints</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">
                  Important Notes
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• These rules apply as per Official Language Rules 1976</li>
                  <li>• The language policy aims to promote Hindi while maintaining English where necessary</li>
                  <li>• Regional variations are considered for effective communication</li>
                  <li>• Both Hindi and English translations may be provided in certain cases</li>
                  <li>• Administrative heads are responsible for proper implementation</li>
                  <li>• Regular monitoring and evaluation is essential for success</li>
                </ul>
              </div>
            </div>

            {/* Train Speed Information Section */}
            <div className="mt-16 border-t-4 border-green-500 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Speed of Trains in Different Circumstances
              </h2>
              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <p className="text-gray-700 mb-6 text-center">
                  The following table indicates at a glance the speeds of the trains under various circumstances. 
                  Relevant GRs and SRs should be referred for details.
                </p>
                
                {/* Section I - At Station */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
                    Section I - AT STATION
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-green-200">
                      <thead>
                        <tr className="bg-green-200">
                          <th className="p-2 text-left">Sl. No.</th>
                          <th className="p-2 text-left">Description</th>
                          <th className="p-2 text-left">Speed</th>
                          <th className="p-2 text-left">Restriction</th>
                          <th className="p-2 text-left">Rule Reference</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b">
                          <td className="p-2">1</td>
                          <td className="p-2">On Non-Interlocked points</td>
                          <td className="p-2">15/30 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R.4.10.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">2</td>
                          <td className="p-2">Speed of incoming Goods trains inside station section at Terminal yard</td>
                          <td className="p-2">15 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 3.36.4</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">3</td>
                          <td className="p-2">Motor Trolley while running over points and crossings</td>
                          <td className="p-2">15 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 15.25.10.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">4</td>
                          <td className="p-2">Motor Trolley shall not exceed a speed during night time</td>
                          <td className="p-2">30 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 15.25.10.2</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">5</td>
                          <td className="p-2">The speed over turn outs having 1 in 8 1/2 straight switch<br/>
                            (A) For passenger carrying trains<br/>
                            (B) For Goods trains</td>
                          <td className="p-2">(A) 10 kmph<br/>(B) 15 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 4.10.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">6</td>
                          <td className="p-2">The speed over the turn outs having 1 in 8 1/2 curved switches of 52/60 Kg rails, on PSC sleepers for both passenger carrying trains and goods trains</td>
                          <td className="p-2">15 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 4.10.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">7</td>
                          <td className="p-2">In case of 1:8.5 symmetrical split with curved switches with 52/60 kg including TWS (Thick Web Switch) on PSC sleepers, a maximum speed permitted under approved special instructions is</td>
                          <td className="p-2">30 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 4.10.2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section II - In Block Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">
                    Section II - IN BLOCK SECTION
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-blue-200">
                      <thead>
                        <tr className="bg-blue-200">
                          <th className="p-2 text-left">Sl. No.</th>
                          <th className="p-2 text-left">Description</th>
                          <th className="p-2 text-left">Speed</th>
                          <th className="p-2 text-left">Restriction</th>
                          <th className="p-2 text-left">Rule Reference</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b">
                          <td className="p-2">1</td>
                          <td className="p-2">When IB Home is defective and phone is not working</td>
                          <td className="p-2">15 kmph (day view clear)<br/>8 kmph (night or view not clear)</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 3.75.4</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">2</td>
                          <td className="p-2">When relief engine/train is being dispatched on T/A 602 (Double Line and Single Line) into obstructed block section</td>
                          <td className="p-2">15/10 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 6.02.6.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">3</td>
                          <td className="p-2">Speed of the Light engine sent to open communication is restricted to (T/B 602). Day or view clear/Night view obstructed</td>
                          <td className="p-2">15/10 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 6.02.4.6.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">4</td>
                          <td className="p-2">Speed of the train dispatched during TIC on D/L (T/C 602) Straight/curve or obstructed</td>
                          <td className="p-2">25/10 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 6.02.3.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">5</td>
                          <td className="p-2">When Light engine/Goods trains is being dispatched on Block Ticket (T/J 602)</td>
                          <td className="p-2">15/8 kmph</td>
                          <td className="p-2">Be prepared to stop short of obstruction</td>
                          <td className="p-2">As mentioned in the Authority</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">6</td>
                          <td className="p-2">The speed of the first train during TSL working</td>
                          <td className="p-2">25 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 6.02.1.15</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">7</td>
                          <td className="p-2">The speed of the second and subsequent trains during TSL working</td>
                          <td className="p-2">Sectional Speed</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 6.02.1.15</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">8</td>
                          <td className="p-2">When major work in progress, for trains on adjacent line on double line or multiple lines</td>
                          <td className="p-2">50 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 15.09.6</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">9</td>
                          <td className="p-2">When the electric head light becomes defective en-route during the hours of darkness and/or thick and foggy weather the train shall be worked cautiously</td>
                          <td className="p-2">Temporary speed restriction imposed in the B/S or 40kmph whichever is less</td>
                          <td className="p-2">-</td>
                          <td className="p-2">G.R. 4.14</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">10</td>
                          <td className="p-2">When engine is pushing the train and Guard is in leading vehicle/not in leading vehicle</td>
                          <td className="p-2">25/8 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 4.12.2.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">11</td>
                          <td className="p-2">&ldquo;A&rdquo; Class ODC by train-gross clearance of 22.86 cm (9 inches) and above</td>
                          <td className="p-2">Sectional Speed</td>
                          <td className="p-2">-</td>
                          <td className="p-2">I R Operating Manual</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">12</td>
                          <td className="p-2">&ldquo;B&rdquo; Class ODC by train-gross clearance of 15.24 cm (6 inches) and above, but less than 22.86 cm (9 inches)</td>
                          <td className="p-2">40 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">I R Operating Manual</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">13</td>
                          <td className="p-2">&ldquo;C&rdquo; class ODC by train- gross clearance of less than 15.24 cm (6 inches) but not less than 10.16 cm (4 inches)</td>
                          <td className="p-2">25 kmph</td>
                          <td className="p-2">To be moved in day only</td>
                          <td className="p-2">I R Operating Manual</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">14</td>
                          <td className="p-2">When caution order is issued if patrolman not turned up</td>
                          <td className="p-2">40 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">App. IV (10).4.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">15</td>
                          <td className="p-2">When water rises over ballast-level but is below rail-level (When two men walked abreast one at either sleeper)</td>
                          <td className="p-2">Stop dead and Proceed with SR 8 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 15.17.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">16</td>
                          <td className="p-2">When water over tops the rail, after SSE/SE&rsquo;s certificate</td>
                          <td className="p-2">-do-</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 15.17.3.2</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">17</td>
                          <td className="p-2">The Maximum speed of track machine<br/>The speed of TTM over all points and crossings</td>
                          <td className="p-2">As prescribed through JSC (Joint Safety Certificate)</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 4.65.1.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">18</td>
                          <td className="p-2">During the Engg. Block, when track Machine is following another Track Machine</td>
                          <td className="p-2">25 kmph Day /view clear,<br/>10 kmph Night /view not clear</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 15.06.4.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">19</td>
                          <td className="p-2">When passing through Neutral section</td>
                          <td className="p-2">Not less than 30 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 17.07.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">20</td>
                          <td className="p-2">Light Engine returning to pick up 2nd portion when a train is divided</td>
                          <td className="p-2">25 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 6.09.7</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">21</td>
                          <td className="p-2">When a four-wheeler vehicle is attached to passenger carrying train</td>
                          <td className="p-2">BG 75 kmph<br/>MG 50 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">App. VIII 8.5.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">22</td>
                          <td className="p-2">When clamped wagon by a train</td>
                          <td className="p-2">40 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">HQ.Cir.FLY LEAF No.15of 1993</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">23</td>
                          <td className="p-2">When visibility is restricted due to fog, speed of train in Absolute block system should not exceed (fog safe device is available in working condition)<br/>Note: In case fog safe device is not available in locomotive or the device fails enroute, the maximum speed is 60 Kmph or less subject to judgment of LP.</td>
                          <td className="p-2">75 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R.3.61.10.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">24</td>
                          <td className="p-2">During foggy weather, while proceeding on &lsquo;Proceed&rsquo; aspect of Automatic Stop Signal, the speed should not exceed (fog safe device is available in working condition)<br/>Note: In case fog safe device is not available in locomotive or the device fails enroute, the maximum speed is 60 Kmph or less subject to judgment of LP.<br/>While proceeding on &lsquo;Attention&rsquo; aspect of Automatic Stop Signal, proceed at speed<br/>While proceeding on &lsquo;Caution&rsquo; aspect of Automatic Stop Signal</td>
                          <td className="p-2">75 kmph<br/>30 kmph<br/>Proceed Cautiously</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R 3.61.10.4</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">25</td>
                          <td className="p-2">When electric loco leading cab defective and Asst. Loco Pilot is driving from trailing cab</td>
                          <td className="p-2">40 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 17.09.12.2</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">26</td>
                          <td className="p-2">When Loco Pilot is incapacitated and Asst. Loco Pilot working to clear up to next block station where relief can be arranged</td>
                          <td className="p-2">40 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 17.09.5.7</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">27</td>
                          <td className="p-2">When rail breakage is upto 30 mm 1st train can pass</td>
                          <td className="p-2">10 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 6.01.3.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">28</td>
                          <td className="p-2">When rail breakage is upto 30 mm 2nd train and subsequent train can pass with a restricted speed</td>
                          <td className="p-2">15 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 6.01.3.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">29</td>
                          <td className="p-2">During TIC on S/L when LC received for more than one train, second and subsequent trains on CLCT in Automatic Block Section</td>
                          <td className="p-2">25/10 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 9.12.4(R)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">30</td>
                          <td className="p-2">During prolonged failure of signals (automatic block section double line) when communication is available, speed of first train</td>
                          <td className="p-2">25kmph(view clear)/10 kmph(view not clear)</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 9.12.2(A). 4(a)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">31</td>
                          <td className="p-2">When signals failed and communication not available on automatic double line section</td>
                          <td className="p-2">15(view clear )/10 kmph(view not clear)</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 9.12.2(B)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">32</td>
                          <td className="p-2">The speed during TSL working in Automatic Block System<br/>(A) For First Train<br/>(B) For second and subsequent trains</td>
                          <td className="p-2">(A) 25 kmph<br/>(B) Sectional Speed</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 9.12.3.15</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">33</td>
                          <td className="p-2">Speed of LE sent to open communication in automatic system when signals and communication have failed</td>
                          <td className="p-2">15/10 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S.R. 9.12.4(F)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">34</td>
                          <td className="p-2">Speed of the train to pass automatic signal at ON</td>
                          <td className="p-2">Not exceeding 15 kmph up to next stop signal</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 9.02.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">35</td>
                          <td className="p-2">The speed of the train which is already in healthy section which is temporarily isolated if Loco Pilot able to contact TPC</td>
                          <td className="p-2">60 kmph by day and 30 kmph by night</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 17.09.16. 2(iv)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">36</td>
                          <td className="p-2">The speed of the first train to enter into the healthy section which is temporarily isolated and re-energized</td>
                          <td className="p-2">60 kmph by day and 30 kmph by night</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 17.09.16.1 (c)(i)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">37</td>
                          <td className="p-2">When danger is suspected to the P. Way and the location remain vague and if train is to be dispatched</td>
                          <td className="p-2">10 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 6.07.1(e)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">38</td>
                          <td className="p-2">After stopping the train at stop indicator, the Loco Pilot shall proceed with a speed of</td>
                          <td className="p-2">8 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 15.09.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">39</td>
                          <td className="p-2">On seeing a flasher light flashing (view is clear/not clear)</td>
                          <td className="p-2">20/10 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 6.03.7</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">40</td>
                          <td className="p-2">While testing detonators- speed</td>
                          <td className="p-2">8-11 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 3.64.5.6</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">41</td>
                          <td className="p-2">In case of an axle box of a wagon is found hot between station and the Loco Pilot has decided to take the train to next station the speed of the train is</td>
                          <td className="p-2">Discretion of Loco Pilot</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 4.29.2</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">42</td>
                          <td className="p-2">The speed of &lsquo;Patrol&rsquo; or &lsquo;Search Light&rsquo; special with one or more vehicles in front of the engine</td>
                          <td className="p-2">40 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">G. R. 4.12</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">43</td>
                          <td className="p-2">Unsafe condition of bunds of tanks or Rivers</td>
                          <td className="p-2">Special caution</td>
                          <td className="p-2">-</td>
                          <td className="p-2">Accident Manual 401</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">44</td>
                          <td className="p-2">ON detection/receiving report of &ldquo;flat tyre&rdquo; in the formation, the speed limit to be observed by the LP to clear the block section</td>
                          <td className="p-2">Max. 30 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">JPO &ldquo;Flat Tyre&rdquo;</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">45</td>
                          <td className="p-2">After getting the report of &ldquo;flat tyre&rdquo; subsequent passenger carrying and empty Goods trains in that section before USFD testing is done shall run at a speed of … Kmph, after visual inspection by SE/JE-P-Way</td>
                          <td className="p-2">50 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">JPO &ldquo;Flat Tyre&rdquo;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section III - Speed While Performing Shunting */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
                    Section III - SPEED WHILE PERFORMING SHUNTING
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-purple-200">
                      <thead>
                        <tr className="bg-purple-200">
                          <th className="p-2 text-left">Sl. No.</th>
                          <th className="p-2 text-left">Description</th>
                          <th className="p-2 text-left">Speed</th>
                          <th className="p-2 text-left">Restriction</th>
                          <th className="p-2 text-left">Rule Reference</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b">
                          <td className="p-2">1</td>
                          <td className="p-2">Maximum Shunting Speed</td>
                          <td className="p-2">15 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">G. R. 5.13</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">2</td>
                          <td className="p-2">Shunting with loaded petroleum, kerosene, dangerous goods, explosives etc.</td>
                          <td className="p-2">8 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 5.14.3</td>
                        </tr>
                        <tr>
                          <td className="p-2">3</td>
                          <td className="p-2">Hand shunting with vehicles other than roller bearing stock</td>
                          <td className="p-2">5 kmph</td>
                          <td className="p-2">-</td>
                          <td className="p-2">S. R. 5.20.5.6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Authority To Proceed Section */}
            <div className="mt-16 border-t-4 border-orange-500 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Authority To Proceed - Different Paper Authorities
              </h2>
              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <p className="text-gray-700 mb-6 text-center">
                  Following are different Paper Authorities to be used in different circumstances. 
                  Relevant GR and SR should also be referred.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-orange-200">
                    <thead>
                      <tr className="bg-orange-200">
                        <th className="p-2 text-left">Situations</th>
                        <th className="p-2 text-left">Single Line</th>
                        <th className="p-2 text-left">Double Line</th>
                        <th className="p-2 text-left">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Home / Inner Home / Routing Home/ Starter / Intermediate Starter failure</td>
                        <td className="p-2">T/369(3b)</td>
                        <td className="p-2">LSS / Advanced Starter failure PLCT (T/C or T/D 1425)</td>
                        <td className="p-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">IBS failure</td>
                        <td className="p-2">T/369(3b)</td>
                        <td className="p-2">Advanced authority to pass defective Home signal T/369 (1)</td>
                        <td className="p-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Dispatching Relief Engine / train into occupied block section</td>
                        <td className="p-2">T/A 602</td>
                        <td className="p-2">T/C 912</td>
                        <td className="p-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">TSL working</td>
                        <td className="p-2">T/D 602</td>
                        <td className="p-2">T/E 912</td>
                        <td className="p-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Reception of train from wrong line</td>
                        <td className="p-2">T/510</td>
                        <td className="p-2">T/510</td>
                        <td className="p-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Authority to proceed during prolonged failure of signals</td>
                        <td className="p-2">T/D 912</td>
                        <td className="p-2">-</td>
                        <td className="p-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Authority to receive a train on to an obstructed line</td>
                        <td className="p-2">T/509</td>
                        <td className="p-2">-</td>
                        <td className="p-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Authority to receive on non-signaled line</td>
                        <td className="p-2">T/510</td>
                        <td className="p-2">-</td>
                        <td className="p-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Authority to start from a non-signaled line</td>
                        <td className="p-2">T/511</td>
                        <td className="p-2">-</td>
                        <td className="p-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Authority to start from lines with common starter</td>
                        <td className="p-2">T/512</td>
                        <td className="p-2">-</td>
                        <td className="p-2">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Trolley and Special Equipment Section */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4 border-b-2 border-orange-200 pb-2">
                    Trolley and Special Equipment Authorities
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-orange-200">
                      <thead>
                        <tr className="bg-orange-200">
                          <th className="p-2 text-left">Equipment/Vehicle</th>
                          <th className="p-2 text-left">Authority Form</th>
                          <th className="p-2 text-left">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Trolley/Lorry/OHE Ladder Trolley</td>
                          <td className="p-2">T/1518</td>
                          <td className="p-2">Notice</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Motor Trolley</td>
                          <td className="p-2">T/A 1525</td>
                          <td className="p-2">Authority to dispatch</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Motor Trolley following a train/motor trolley</td>
                          <td className="p-2">T/1525</td>
                          <td className="p-2">Authority to dispatch</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Tower wagon</td>
                          <td className="p-2">T/1708</td>
                          <td className="p-2">Authority to proceed and return to starting station</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Tower wagon to proceed to station in advance</td>
                          <td className="p-2">T/A 1708</td>
                          <td className="p-2">Authority to proceed</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Material Train into block section and return</td>
                          <td className="p-2">T/462</td>
                          <td className="p-2">Authority to proceed and return to starting station</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Material Train into block section and clear to next station</td>
                          <td className="p-2">T/A 462</td>
                          <td className="p-2">Authority to proceed and clear to next station</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Track Machine into block section and return</td>
                          <td className="p-2">T/465</td>
                          <td className="p-2">Authority to proceed and return to starting station</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Track Machine into block section and clear to next station</td>
                          <td className="p-2">T/A 465</td>
                          <td className="p-2">Authority to proceed and clear to next station</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Shunting Authorities Section */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4 border-b-2 border-orange-200 pb-2">
                    Shunting Authorities
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-orange-200">
                      <thead>
                        <tr className="bg-orange-200">
                          <th className="p-2 text-left">Shunting Type</th>
                          <th className="p-2 text-left">Single Line</th>
                          <th className="p-2 text-left">Double Line</th>
                          <th className="p-2 text-left">Additional Requirements</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b">
                          <td className="p-2 font-semibold">General Shunting Order</td>
                          <td className="p-2">T/806</td>
                          <td className="p-2">T/806</td>
                          <td className="p-2">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Shunting up to LSS on single line</td>
                          <td className="p-2">T/806 + Shunt Key or P.N.</td>
                          <td className="p-2">-</td>
                          <td className="p-2">Shunt Key or P.N.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Shunting beyond FSS on single line (to be treated and signalled as train movement)</td>
                          <td className="p-2">T/806 + Taking OFF Signals + push back memo</td>
                          <td className="p-2">T/806 + Taking OFF Signals + push back memo</td>
                          <td className="p-2">Taking OFF Signals + push back memo</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Shunting into advance block section on double line</td>
                          <td className="p-2">T/806 + Taking OFF Signals + push back memo</td>
                          <td className="p-2">T/806 + Taking OFF Signals + push back memo</td>
                          <td className="p-2">Taking OFF Signals + push back memo</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Shunting into rear block section on double line</td>
                          <td className="p-2">T/806 with PN</td>
                          <td className="p-2">T/806 with PN</td>
                          <td className="p-2">PN required</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Special Situations Section */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4 border-b-2 border-orange-200 pb-2">
                    Special Situations and Emergency Authorities
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-orange-200">
                      <thead>
                        <tr className="bg-orange-200">
                          <th className="p-2 text-left">Situation</th>
                          <th className="p-2 text-left">Single Line</th>
                          <th className="p-2 text-left">Double Line</th>
                          <th className="p-2 text-left">Additional Requirements</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Written permission given by Guard to Loco Pilot to proceed to next station from midsection (Divided Train working)</td>
                          <td className="p-2">T/609</td>
                          <td className="p-2">-</td>
                          <td className="p-2">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Authority for Light Engine to return to pick up the 2nd portion left in the block section</td>
                          <td className="p-2">T/609 endorsed by SM</td>
                          <td className="p-2">-</td>
                          <td className="p-2">Endorsed by SM</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">To restart a train that passed a reception signal at &lsquo;ON&rsquo;, partly/completely, without proper authority</td>
                          <td className="p-2">Restart memo + T/369(3b)</td>
                          <td className="p-2">-</td>
                          <td className="p-2">Restart memo required</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">To restart a train that passed starter signal at &lsquo;ON&rsquo;, partly and subsequently stopped before LSS</td>
                          <td className="p-2">T/369-(3b) + Memo counter signed by Guard + taking off LSS</td>
                          <td className="p-2">-</td>
                          <td className="p-2">Memo counter signed by Guard + taking off LSS</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">To restart a train that entered into the block section without an Authority To Proceed or without a proper Authority To Proceed, and the report is sent to the station in rear</td>
                          <td className="p-2">PLCT</td>
                          <td className="p-2">-</td>
                          <td className="p-2">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">To restart a train that entered into the block section without an Authority To Proceed or without a proper Authority To Proceed, and the report is sent to the station in advance</td>
                          <td className="p-2">PLCT</td>
                          <td className="p-2">-</td>
                          <td className="p-2">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Authority to proceed on wrong line to ascertain line is free from obstruction</td>
                          <td className="p-2">T/J 602</td>
                          <td className="p-2">T/J 602</td>
                          <td className="p-2">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Opening communication with adjacent station when ALL communications failed</td>
                          <td className="p-2">T/B 602</td>
                          <td className="p-2">T/B 602</td>
                          <td className="p-2">-</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold">Authority to proceed when ALL communications failed with adjacent station</td>
                          <td className="p-2">T/G or T/H 602</td>
                          <td className="p-2">T/C 602<br/>T/G or T/H 602<br/>T/B 912</td>
                          <td className="p-2">Multiple options available</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Forms Section */}
            <div className="mt-16 border-t-4 border-indigo-500 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Operating Forms - Complete Reference
              </h2>
              <div className="bg-indigo-50 rounded-lg p-6 mb-8">
                <p className="text-gray-700 mb-6 text-center">
                  Complete list of Operating Forms with their descriptions, colors, and form numbers.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-indigo-200">
                    <thead>
                      <tr className="bg-indigo-200">
                        <th className="p-2 text-left">S. No.</th>
                        <th className="p-2 text-left">Description</th>
                        <th className="p-2 text-left">Colour</th>
                        <th className="p-2 text-left">Form Number</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b">
                        <td className="p-2 font-semibold">1</td>
                        <td className="p-2">Signal & Telecommunication Disconnection / Reconnection Notice</td>
                        <td className="p-2"><span className="px-2 py-1 bg-black text-white rounded text-xs">Black</span></td>
                        <td className="p-2 font-mono">S&T (T/351)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">2</td>
                        <td className="p-2">Advance authority to pass defective signals</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/369(1)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">3</td>
                        <td className="p-2">Authority to pass signals at &lsquo;on&rsquo; or defective position</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/369 (3b)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">4</td>
                        <td className="p-2">Caution Order</td>
                        <td className="p-2"><span className="px-2 py-1 bg-green-500 text-white rounded text-xs">Green</span></td>
                        <td className="p-2 font-mono">T/409</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">5</td>
                        <td className="p-2">&lsquo;NIL&rsquo; Caution Order</td>
                        <td className="p-2"><span className="px-2 py-1 bg-green-500 text-white rounded text-xs">Green</span></td>
                        <td className="p-2 font-mono">T/A 409</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">6</td>
                        <td className="p-2">Train Examination Advice/Report</td>
                        <td className="p-2"><span className="px-2 py-1 bg-black text-white rounded text-xs">Black</span></td>
                        <td className="p-2 font-mono">T/431</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">7</td>
                        <td className="p-2">Authority to proceed for material train (Return to originating station)</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/462</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">8</td>
                        <td className="p-2">Authority to proceed for material train (Proceed to next station)</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/A 462</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">9</td>
                        <td className="p-2">Authority to proceed for track machine (Return to originating station)</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/465</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">10</td>
                        <td className="p-2">Authority to proceed for track machine (Proceed to next station)</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/A 465</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">11</td>
                        <td className="p-2">Authority to receive a train on an obstructed line</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/509</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">12</td>
                        <td className="p-2">Authority to receive a train on to a non-signalled line</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/510</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">13</td>
                        <td className="p-2">Authority to start from a non-signaled line</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/511</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">14</td>
                        <td className="p-2">Authority to start from a line with common Starter signal</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/512</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">15</td>
                        <td className="p-2">Authority to proceed for relief engine/train into an occupied block section</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/A 602</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">16</td>
                        <td className="p-2">Authority for opening communication during total interruption of communication on single line section</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/B 602</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">17</td>
                        <td className="p-2">Authority for working of trains during total interruption of communication on double line section</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/C 602</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">18</td>
                        <td className="p-2">Authority for temporary single line working on double line section</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/D 602</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">19</td>
                        <td className="p-2">Line Clear enquiry message asking Line Clear for despatch of trains during total failure of communication on single line section</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/E 602</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">20</td>
                        <td className="p-2">Conditional Line Clear reply message</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/F 602</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">21</td>
                        <td className="p-2">Conditional Line Clear ticket (Up)</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/G 602</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">22</td>
                        <td className="p-2">Conditional Line Clear ticket (Down)</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/H 602</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">23</td>
                        <td className="p-2">Message on restoration</td>
                        <td className="p-2"><span className="px-2 py-1 bg-black text-white rounded text-xs">Black</span></td>
                        <td className="p-2 font-mono">T/I 602</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">24</td>
                        <td className="p-2">Block Ticket</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/J 602</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">25</td>
                        <td className="p-2">Written permission by Guard to Loco Pilot to proceed to next station from mid-section</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/609</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">26</td>
                        <td className="p-2">Shunting order</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/806</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">27</td>
                        <td className="p-2">Authority for Working of Trains During Total Interruption of Communication/Obstruction On Line in Automatic Block System</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/B 912</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">28</td>
                        <td className="p-2">Authority to proceed for relief engine / train into an Automatic Block signalling section</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/C 912</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">29</td>
                        <td className="p-2">Authority For Working of Trains During Prolonged Signal Failure In Automatic Block System</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/D 912</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">30</td>
                        <td className="p-2">Authority For Temporary Single Line Working on Double line Automatic Block System</td>
                        <td className="p-2"><span className="px-2 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        <td className="p-2 font-mono">T/E 912</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">31</td>
                        <td className="p-2">Train intact arrival register</td>
                        <td className="p-2"><span className="px-2 py-1 bg-black text-white rounded text-xs">Black</span></td>
                        <td className="p-2 font-mono">T/1410</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">32</td>
                        <td className="p-2">Line Clear enquiry and reply message book in the event of failure / Suspension / Non-provision of Block Instruments message (inward)</td>
                        <td className="p-2"><span className="px-2 py-1 bg-black text-white rounded text-xs">Black</span></td>
                        <td className="p-2 font-mono">T/A 1425</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">33</td>
                        <td className="p-2">Line Clear enquiry and reply message book in the event of failure / Suspension / Non-provision of Block Instruments message (inward)</td>
                        <td className="p-2"><span className="px-2 py-1 bg-black text-white rounded text-xs">Black</span></td>
                        <td className="p-2 font-mono">T/B 1425</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">34</td>
                        <td className="p-2">UP Paper Line Clear Ticket</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/C 1425</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">35</td>
                        <td className="p-2">Down Paper Line Clear Ticket</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/D 1425</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">36</td>
                        <td className="p-2">Trolly/Lorry/OHE ladder trolly notice</td>
                        <td className="p-2"><span className="px-2 py-1 bg-black text-white rounded text-xs">Black</span></td>
                        <td className="p-2 font-mono">T/1518</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">37</td>
                        <td className="p-2">Authority for Trolly/Lorry/Motor Trolly to be used on token less sections in Absolute Block System and Automatic Block System territories</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/A 1525</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">38</td>
                        <td className="p-2">Motor trolley permit (following)</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/1525</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">39</td>
                        <td className="p-2">Authority to proceed for tower wagon and to return to starting station</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/1708</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">40</td>
                        <td className="p-2">Authority to proceed for tower wagon to proceed to station in advance</td>
                        <td className="p-2"><span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        <td className="p-2 font-mono">T/A 1708</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Color Legend */}
                <div className="mt-8 bg-white rounded-lg p-4 border border-indigo-200">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">Color Code Legend</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-red-500 rounded mr-2"></span>
                      <span className="text-sm">Red - Emergency/Urgent</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-blue-500 rounded mr-2"></span>
                      <span className="text-sm">Blue - Authority Forms</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-green-500 rounded mr-2"></span>
                      <span className="text-sm">Green - Caution Orders</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-black rounded mr-2"></span>
                      <span className="text-sm">Black - Notices/Reports</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appendix Section */}
            <div className="mt-16 border-t-4 border-teal-500 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Appendix - Station Working Documents
              </h2>
              <div className="bg-teal-50 rounded-lg p-6 mb-8">
                <p className="text-gray-700 mb-6 text-center">
                  Essential appendix documents required for station operations and safety protocols.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Appendix A */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">A</span>
                      <h3 className="text-lg font-semibold text-blue-800">Working of Level Crossing Gates</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded p-3">
                        <h4 className="font-semibold text-blue-700 mb-2">Interlocked LC gates</h4>
                        <p className="text-sm text-gray-700">To be jointly signed by:</p>
                        <ul className="text-sm text-gray-700 ml-4 mt-1">
                          <li>• DSTE</li>
                          <li>• DOM</li>
                          <li>• DEN</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded p-3">
                        <h4 className="font-semibold text-green-700 mb-2">Non-interlocked LC gates</h4>
                        <p className="text-sm text-gray-700">To be jointly signed by:</p>
                        <ul className="text-sm text-gray-700 ml-4 mt-1">
                          <li>• DEN</li>
                          <li>• DOM</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Appendix B */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500 shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">B</span>
                      <h3 className="text-lg font-semibold text-purple-800">System of Signaling and Interlocking</h3>
                    </div>
                    <div className="bg-purple-50 rounded p-3">
                      <p className="text-sm text-gray-700 mb-2">System of signaling and interlocking and communication arrangements at the station</p>
                      <div className="mt-3">
                        <span className="text-xs font-semibold text-purple-700">To be signed by:</span>
                        <p className="text-sm font-semibold text-purple-800 mt-1">DSTE</p>
                      </div>
                    </div>
                  </div>

                  {/* Appendix C */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-red-500 shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">C</span>
                      <h3 className="text-lg font-semibold text-red-800">Anti Collision Device</h3>
                    </div>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-sm text-gray-700 mb-2">Anti Collision Device (Raksha Kavach)</p>
                      <div className="mt-3">
                        <span className="text-xs font-semibold text-red-700">Status:</span>
                        <p className="text-sm font-semibold text-red-800 mt-1 italic">As and when brought into force</p>
                      </div>
                    </div>
                  </div>

                  {/* Appendix D */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">D</span>
                      <h3 className="text-lg font-semibold text-orange-800">Duties of Train Passing Staff</h3>
                    </div>
                    <div className="bg-orange-50 rounded p-3">
                      <p className="text-sm text-gray-700 mb-2">Duties of train passing staff and staff in each shift</p>
                      <div className="mt-3">
                        <span className="text-xs font-semibold text-orange-700">To be signed by:</span>
                        <p className="text-sm font-semibold text-orange-800 mt-1">DOM</p>
                      </div>
                    </div>
                  </div>

                  {/* Appendix E */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">E</span>
                      <h3 className="text-lg font-semibold text-green-800">Essential Equipment List</h3>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-sm text-gray-700 mb-2">List of essential equipment provided at the station</p>
                      <div className="mt-3">
                        <span className="text-xs font-semibold text-green-700">To be signed by:</span>
                        <p className="text-sm font-semibold text-green-800 mt-1">DOM</p>
                      </div>
                    </div>
                  </div>

                  {/* Appendix F */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500 shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">F</span>
                      <h3 className="text-lg font-semibold text-indigo-800">DK Stations & Halts Rules</h3>
                    </div>
                    <div className="bg-indigo-50 rounded p-3">
                      <p className="text-sm text-gray-700 mb-2">Rules for working of DK stations, Halts, IBH, IBS and outlying sidings</p>
                      <div className="mt-3">
                        <span className="text-xs font-semibold text-indigo-700">To be jointly signed by:</span>
                        <ul className="text-sm font-semibold text-indigo-800 mt-1">
                          <li>• DOM</li>
                          <li>• DSTE</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Appendix G */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-pink-500 shadow-md md:col-span-2">
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">G</span>
                      <h3 className="text-lg font-semibold text-pink-800">Electrified Sections Rules</h3>
                    </div>
                    <div className="bg-pink-50 rounded p-3">
                      <p className="text-sm text-gray-700 mb-2">Rules for working trains in electrified sections</p>
                      <div className="mt-3">
                        <span className="text-xs font-semibold text-pink-700">To be jointly signed by:</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          <div>
                            <p className="text-xs font-semibold text-pink-600 mb-1">Senior Level:</p>
                            <ul className="text-sm font-semibold text-pink-800">
                              <li>• Sr.DOM</li>
                              <li>• Sr.DEE (TRD)</li>
                              <li>• Sr.DSTE</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-pink-600 mb-1">Regular Level:</p>
                            <ul className="text-sm font-semibold text-pink-800">
                              <li>• DOM</li>
                              <li>• DEE(TRD)</li>
                              <li>• DSTE</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Authority Abbreviations */}
                <div className="mt-8 bg-white rounded-lg p-6 border border-teal-200">
                  <h3 className="text-lg font-semibold text-teal-800 mb-4">Authority Abbreviations</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded mr-2"></span>
                      <span><strong>DOM:</strong> Divisional Operations Manager</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded mr-2"></span>
                      <span><strong>DSTE:</strong> Divisional Signal & Telecom Engineer</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded mr-2"></span>
                      <span><strong>DEN:</strong> Divisional Engineer</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded mr-2"></span>
                      <span><strong>DEE(TRD):</strong> Divisional Electrical Engineer (TRD)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIEMEN'S PANEL Section */}
            <div className="mt-16 border-t-4 border-cyan-500 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                SIEMEN&rsquo;S PANEL - Control System
              </h2>
              <div className="bg-cyan-50 rounded-lg p-6 mb-8">
                
                {/* Panel Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-cyan-800 mb-4 border-b-2 border-cyan-200 pb-2">
                    Panel Overview
                  </h3>
                  <div className="bg-white rounded-lg p-6 border border-cyan-200">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-cyan-600 font-semibold mr-3">(a)</span>
                        <p className="text-gray-700">The station diagram is depicted on the panel board.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-cyan-600 font-semibold mr-3">(b)</span>
                        <p className="text-gray-700">
                          Push buttons of the different colour codes are provided near the points, signal etc., 
                          for their operations. Buttons for the other purposes such as cancellation etc., are also provided.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button Configuration Table */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-cyan-800 mb-4 border-b-2 border-cyan-200 pb-2">
                    Normal Setup - Button Configuration
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-cyan-200">
                      <thead>
                        <tr className="bg-cyan-200">
                          <th className="p-2 text-left">Sl. No.</th>
                          <th className="p-2 text-left">Buttons</th>
                          <th className="p-2 text-left">Colour Code</th>
                          <th className="p-2 text-left">Visual Indicator</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b">
                          <td className="p-2 font-semibold">1</td>
                          <td className="p-2">Signal buttons</td>
                          <td className="p-2 font-mono">Red GN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-red-500 text-white rounded text-xs">Red</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">2</td>
                          <td className="p-2">Route buttons</td>
                          <td className="p-2 font-mono">Grey UN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-gray-500 text-white rounded text-xs">Grey</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">3</td>
                          <td className="p-2">Point buttons</td>
                          <td className="p-2 font-mono">Blue WN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">4</td>
                          <td className="p-2">Shunt signal buttons</td>
                          <td className="p-2 font-mono">Yellow GN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-yellow-500 text-white rounded text-xs">Yellow</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">5</td>
                          <td className="p-2">Common/group point button</td>
                          <td className="p-2 font-mono">Blue WWN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-blue-500 text-white rounded text-xs">Blue</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">6</td>
                          <td className="p-2">Emergency signal/button</td>
                          <td className="p-2 font-mono">Red EGGN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-red-600 text-white rounded text-xs">Emergency Red</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">7</td>
                          <td className="p-2">Emergency point release button (sealed)</td>
                          <td className="p-2 font-mono">Blue EWN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-blue-600 text-white rounded text-xs">Emergency Blue</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">8</td>
                          <td className="p-2">Emergency sub route release button sealed and provided with counter</td>
                          <td className="p-2 font-mono">Blue with dot EUYN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-blue-600 text-white rounded text-xs">Blue with Dot</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">9</td>
                          <td className="p-2">Emergency full route release button provided with counter</td>
                          <td className="p-2 font-mono">Grey EUUYN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-gray-600 text-white rounded text-xs">Emergency Grey</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">10</td>
                          <td className="p-2">Point failure alarm, suppression button</td>
                          <td className="p-2 font-mono">Grey WXYN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-gray-500 text-white rounded text-xs">Grey</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">11</td>
                          <td className="p-2">Signal failure alarm, suppression button</td>
                          <td className="p-2 font-mono">Grey GXYN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-gray-500 text-white rounded text-xs">Grey</span></td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold">12</td>
                          <td className="p-2">Power failure alarm button</td>
                          <td className="p-2 font-mono">Grey NXYN</td>
                          <td className="p-2"><span className="px-3 py-1 bg-gray-500 text-white rounded text-xs">Grey</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Button Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Normal Operations */}
                  <div className="bg-white rounded-lg p-4 border border-cyan-200">
                    <h4 className="text-lg font-semibold text-cyan-800 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">✓</span>
                      Normal Operations
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Signal buttons (Red GN)</li>
                      <li>• Route buttons (Grey UN)</li>
                      <li>• Point buttons (Blue WN)</li>
                      <li>• Shunt signal buttons (Yellow GN)</li>
                      <li>• Common/group point button (Blue WWN)</li>
                    </ul>
                  </div>

                  {/* Emergency Operations */}
                  <div className="bg-white rounded-lg p-4 border border-cyan-200">
                    <h4 className="text-lg font-semibold text-cyan-800 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">⚠</span>
                      Emergency Operations
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Emergency signal/button (Red EGGN)</li>
                      <li>• Emergency point release button (Blue EWN)</li>
                      <li>• Emergency sub route release button (Blue with dot EUYN)</li>
                      <li>• Emergency full route release button (Grey EUUYN)</li>
                    </ul>
                  </div>

                  {/* Alarm & Suppression */}
                  <div className="bg-white rounded-lg p-4 border border-cyan-200">
                    <h4 className="text-lg font-semibold text-cyan-800 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">🔔</span>
                      Alarm & Suppression
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Point failure alarm, suppression button (Grey WXYN)</li>
                      <li>• Signal failure alarm, suppression button (Grey GXYN)</li>
                      <li>• Power failure alarm button (Grey NXYN)</li>
                    </ul>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                    Important Notes
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Emergency buttons are sealed for safety</li>
                    <li>• Counter-equipped buttons track usage</li>
                    <li>• Color codes follow standard railway protocols</li>
                    <li>• All buttons are strategically placed near relevant equipment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Standards of Interlocking Section */}
            <div className="mt-16 border-t-4 border-emerald-500 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Standards of Interlocking
              </h2>
              <div className="bg-emerald-50 rounded-lg p-6 mb-8">
                
                {/* Introduction */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-4 border-b-2 border-emerald-200 pb-2">
                    Overview
                  </h3>
                  <div className="bg-white rounded-lg p-6 border border-emerald-200">
                    <p className="text-gray-700 mb-4">
                      Depending upon the standards of safety devices provided at the stations, in conformity to the 
                      speed factor, there are four standards of interlocking, namely <strong>Std I (R)</strong>, 
                      <strong> Std II (R)</strong>, <strong>Std III (R)</strong> and <strong>Std IV (R)</strong>.
                    </p>
                    <p className="text-gray-700">
                      The signal equipment, the manner of locking facing points and operation of points and signals 
                      differ in the different standards of interlocking.
                    </p>
                  </div>
                </div>

                {/* Standards Comparison Table */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-4 border-b-2 border-emerald-200 pb-2">
                    Minimum Signalling Features Comparison
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-emerald-200">
                      <thead>
                        <tr className="bg-emerald-200">
                          <th className="p-2 text-left">S. No.</th>
                          <th className="p-2 text-left">Item</th>
                          <th className="p-2 text-center">Std. I (R)</th>
                          <th className="p-2 text-center">Std. II (R)</th>
                          <th className="p-2 text-center">Std. III (R)</th>
                          <th className="p-2 text-center">Std. IV (R)</th>
                        </tr>
                        <tr className="bg-emerald-100">
                          <td className="p-2"></td>
                          <td className="p-2 font-semibold">Allowable Speed (KMPH)</td>
                          <td className="p-2 text-center font-semibold text-emerald-700">Upto 50</td>
                          <td className="p-2 text-center font-semibold text-emerald-700">Upto 110</td>
                          <td className="p-2 text-center font-semibold text-emerald-700">Upto 140</td>
                          <td className="p-2 text-center font-semibold text-emerald-700">Upto 160</td>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b">
                          <td className="p-2 font-semibold">1</td>
                          <td className="p-2">Isolation</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Not compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Compulsory</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">2</td>
                          <td className="p-2">Two Aspect (TAS) semaphore/Multi Aspect Signalling</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">TAS/MAS</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">TAS/MAS</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">MAS</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">MAS</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">3</td>
                          <td className="p-2">Double Distant</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Not compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Desirable</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Compulsory</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">4</td>
                          <td className="p-2">Point operation</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Mechanical</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Mechanical/Electrical</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Mechanical/Electrical</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Electrical</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">5</td>
                          <td className="p-2">Point locking</td>
                          <td className="p-2 text-center text-xs">Key/Facing Point/hand plunger</td>
                          <td className="p-2 text-center text-xs">Facing Point locking with point machine</td>
                          <td className="p-2 text-center text-xs">Facing Point locking with point machine</td>
                          <td className="p-2 text-center text-xs">Clamp type direct locking is desirable</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">6</td>
                          <td className="p-2">Point detection</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Mechanical/Electrical</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Mechanical/Electrical</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Mechanical/Electrical</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Electrical</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">7</td>
                          <td className="p-2">Lock detection</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Not compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Compulsory</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">8</td>
                          <td className="p-2">Interlocking</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Key/Mechanical</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Mechanical/Electrical/Electronic</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Mechanical/Electrical/Electronic</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Electrical/Electronic</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">9</td>
                          <td className="p-2">Track circuiting</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Not compulsory</span></td>
                          <td className="p-2 text-center text-xs">Mechanical – main line<br/>Electrical/Electronic – all running lines</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">All running lines</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">All running lines</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">10</td>
                          <td className="p-2">Block working</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Token</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Token/SGE</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">SGE/Track circuit</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">SGE/Track Circuit</span></td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold">11</td>
                          <td className="p-2">Preventing signal passing at danger</td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Not Compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Not Compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Not compulsory</span></td>
                          <td className="p-2 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Desirable</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Standards Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Standard I */}
                  <div className="bg-white rounded-lg p-4 border border-emerald-200 shadow-md">
                    <div className="text-center mb-3">
                      <span className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">I</span>
                    </div>
                    <h4 className="text-lg font-semibold text-emerald-800 text-center mb-2">Standard I (R)</h4>
                    <p className="text-sm text-gray-600 text-center mb-3">Upto 50 KMPH</p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Basic mechanical systems</li>
                      <li>• Minimal safety features</li>
                      <li>• Token block working</li>
                      <li>• Manual operations</li>
                    </ul>
                  </div>

                  {/* Standard II */}
                  <div className="bg-white rounded-lg p-4 border border-emerald-200 shadow-md">
                    <div className="text-center mb-3">
                      <span className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">II</span>
                    </div>
                    <h4 className="text-lg font-semibold text-emerald-800 text-center mb-2">Standard II (R)</h4>
                    <p className="text-sm text-gray-600 text-center mb-3">Upto 110 KMPH</p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Enhanced safety features</li>
                      <li>• Electrical/Mechanical mix</li>
                      <li>• Compulsory isolation</li>
                      <li>• Advanced block working</li>
                    </ul>
                  </div>

                  {/* Standard III */}
                  <div className="bg-white rounded-lg p-4 border border-emerald-200 shadow-md">
                    <div className="text-center mb-3">
                      <span className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">III</span>
                    </div>
                    <h4 className="text-lg font-semibold text-emerald-800 text-center mb-2">Standard III (R)</h4>
                    <p className="text-sm text-gray-600 text-center mb-3">Upto 140 KMPH</p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Advanced electrical systems</li>
                      <li>• Comprehensive safety</li>
                      <li>• Track circuiting</li>
                      <li>• Electronic interlocking</li>
                    </ul>
                  </div>

                  {/* Standard IV */}
                  <div className="bg-white rounded-lg p-4 border border-emerald-200 shadow-md">
                    <div className="text-center mb-3">
                      <span className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">IV</span>
                    </div>
                    <h4 className="text-lg font-semibold text-emerald-800 text-center mb-2">Standard IV (R)</h4>
                    <p className="text-sm text-gray-600 text-center mb-3">Upto 160 KMPH</p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Fully electrical systems</li>
                      <li>• Maximum safety features</li>
                      <li>• Advanced automation</li>
                      <li>• Modern technology</li>
                    </ul>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-8 bg-white rounded-lg p-4 border border-emerald-200">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-3">Status Legend</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-red-100 border border-red-300 rounded mr-2"></span>
                      <span>Not Compulsory</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded mr-2"></span>
                      <span>Desirable</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-green-100 border border-green-300 rounded mr-2"></span>
                      <span>Compulsory</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-purple-100 border border-purple-300 rounded mr-2"></span>
                      <span>Mixed Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bell Code Section */}
            <div className="mt-16 border-t-4 border-rose-500 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Bell Code - Train Signalling System
              </h2>
              <div className="bg-rose-50 rounded-lg p-6 mb-8">
                
                {/* Introduction */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-rose-800 mb-4 border-b-2 border-rose-200 pb-2">
                    Bell Code Overview
                  </h3>
                  <div className="bg-white rounded-lg p-6 border border-rose-200">
                    <p className="text-gray-700 mb-4">
                      For the signalling of trains, the prescribed code of bell signals as detailed below, shall be used, 
                      and a copy thereof shall be exhibited in each block station near the place of operation of the 
                      block working equipment.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> &lsquo;0&rsquo; indicates a stroke or a beat and &lsquo;–&rsquo; indicates a pause
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bell Code Table */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-rose-800 mb-4 border-b-2 border-rose-200 pb-2">
                    Bell Code Reference
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-rose-200">
                      <thead>
                        <tr className="bg-rose-200">
                          <th className="p-2 text-left">Ref. No.</th>
                          <th className="p-2 text-left">Indication</th>
                          <th className="p-2 text-left">Code</th>
                          <th className="p-2 text-left">How Signalled</th>
                          <th className="p-2 text-left">How Acknowledged</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b">
                          <td className="p-2 font-semibold">1</td>
                          <td className="p-2">Call attention or attend telephone</td>
                          <td className="p-2 font-mono">0</td>
                          <td className="p-2">One stroke or beat</td>
                          <td className="p-2">One stroke or beat</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">2</td>
                          <td className="p-2">Is line clear or line clear enquiry</td>
                          <td className="p-2 font-mono">00</td>
                          <td className="p-2">Two</td>
                          <td className="p-2">Two</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">3</td>
                          <td className="p-2">Train entering block section</td>
                          <td className="p-2 font-mono">000</td>
                          <td className="p-2">Three</td>
                          <td className="p-2">Three</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">4</td>
                          <td className="p-2">
                            (A) Train out of block section<br/>
                            (B) Obstruction removed
                          </td>
                          <td className="p-2 font-mono">0000</td>
                          <td className="p-2">Four</td>
                          <td className="p-2">Four</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">5</td>
                          <td className="p-2">
                            (A) Cancel last signal<br/>
                            (B) Signal given in error
                          </td>
                          <td className="p-2 font-mono">00000</td>
                          <td className="p-2">Five</td>
                          <td className="p-2">Five</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">6</td>
                          <td className="p-2">
                            (A) Obstruction danger signal (general)<br/>
                            (B) Stop and examine train<br/>
                            (C) Train passed without tail lamp or tail board
                          </td>
                          <td className="p-2 font-mono">
                            000000<br/>
                            000000 – 0<br/>
                            000000 – 00
                          </td>
                          <td className="p-2">
                            Six<br/>
                            Six pause one<br/>
                            Six pause two
                          </td>
                          <td className="p-2">
                            Six<br/>
                            Six pause one<br/>
                            Six pause two
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">6 (Contd.)</td>
                          <td className="p-2">
                            (D) Train divided<br/>
                            (E) Vehicles running away in wrong direction on double line or into the block section on single line<br/>
                            (F) Vehicles running away in right direction on double line
                          </td>
                          <td className="p-2 font-mono">
                            000000 – 000<br/>
                            000000 – 0000<br/>
                            000000 – 00000
                          </td>
                          <td className="p-2">
                            Six pause three<br/>
                            Six pause four<br/>
                            Six pause five
                          </td>
                          <td className="p-2">
                            Six pause three<br/>
                            Six pause four<br/>
                            Six pause five
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold">7</td>
                          <td className="p-2">Testing</td>
                          <td className="p-2 font-mono">0000000000000000</td>
                          <td className="p-2">Sixteen</td>
                          <td className="p-2">Sixteen</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Code Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Basic Operations */}
                  <div className="bg-white rounded-lg p-4 border border-rose-200">
                    <h4 className="text-lg font-semibold text-rose-800 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">1-3</span>
                      Basic Operations
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Call attention (1 beat)</li>
                      <li>• Line clear enquiry (2 beats)</li>
                      <li>• Train entering block (3 beats)</li>
                    </ul>
                  </div>

                  {/* Status Updates */}
                  <div className="bg-white rounded-lg p-4 border border-rose-200">
                    <h4 className="text-lg font-semibold text-rose-800 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">4-5</span>
                      Status Updates
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Train out of block (4 beats)</li>
                      <li>• Obstruction removed (4 beats)</li>
                      <li>• Cancel signal (5 beats)</li>
                    </ul>
                  </div>

                  {/* Emergency Signals */}
                  <div className="bg-white rounded-lg p-4 border border-rose-200">
                    <h4 className="text-lg font-semibold text-rose-800 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">6-7</span>
                      Emergency & Testing
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Obstruction danger (6 beats)</li>
                      <li>• Train divided (6+3)</li>
                      <li>• Testing (16 beats)</li>
                    </ul>
                  </div>
                </div>

                {/* Important Guidelines */}
                <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                    Important Guidelines
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Bell codes must be exhibited at each block station</li>
                    <li>• All signals must be properly acknowledged</li>
                    <li>• Pause timing is critical for complex signals</li>
                    <li>• Testing should be done regularly</li>
                    <li>• Emergency signals require immediate attention</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notes