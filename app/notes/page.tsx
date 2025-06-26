import React from 'react'

const Notes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Official Language Act 1963
          </h1>
          <p className="text-lg text-gray-600">
            Articles 343 to 351 of the Indian Constitution
          </p>
        </div>

        {/* Constitutional Provisions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
            Constitutional Provisions
          </h2>
          
          <div className="space-y-6">
            {/* Chapter I */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Chapter I - Language of the Union
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-medium mr-2">•</span>
                  <span><strong>Article 343:</strong> Official language of the Union.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-medium mr-2">•</span>
                  <span><strong>Article 344:</strong> Commission and Committee of Parliament on official language.</span>
                </li>
              </ul>
            </div>

            {/* Chapter II */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Chapter II - Regional Languages
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-medium mr-2">•</span>
                  <span><strong>Article 345:</strong> Official language or languages of a State</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium mr-2">•</span>
                  <span><strong>Article 346:</strong> Official language for communication between one State and another or between a State and the Union.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium mr-2">•</span>
                  <span><strong>Article 347:</strong> Special provision relating to language spoken by a section of the population of a State.</span>
                </li>
              </ul>
            </div>

            {/* Chapter III */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">
                Chapter III - Language of the Supreme Court, High Courts, etc.
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 font-medium mr-2">•</span>
                  <span><strong>Article 348:</strong> Language to be used in the Supreme Court and in the High Courts and for Acts, Bills, etc.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-medium mr-2">•</span>
                  <span><strong>Article 349:</strong> Special procedure for enactment of certain laws relating to language.</span>
                </li>
              </ul>
            </div>

            {/* Chapter IV */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">
                Chapter IV - Special Directives
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 font-medium mr-2">•</span>
                  <span><strong>Article 350:</strong> Language to be used in representations for redress of grievances.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-medium mr-2">•</span>
                  <span><strong>Article 350A:</strong> Facilities for instruction in mother-tongue at primary stage.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-medium mr-2">•</span>
                  <span><strong>Article 350B:</strong> Special Officer for linguistic minorities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-medium mr-2">•</span>
                  <span><strong>Article 351:</strong> Directive for development of the Hindi language.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rajbhasha - Official Language */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
            Rajbhasha - Official Language
          </h2>
          
          <div className="bg-red-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Definition</h3>
            <p className="text-gray-700 mb-4">
              <strong>Rajbhasha</strong> (Official Language) means the language to be used for official transactions.
            </p>
            <p className="text-gray-700">
              According to constitutional provisions, Hindi in Devnagari script is the official language and English is an associate language.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Article 343(1) Provisions</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-medium mr-2">•</span>
                <span>Hindi in Devnagari script is the Official Language.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-medium mr-2">•</span>
                <span>International form of Indian Numerals shall be used for official purpose of the union.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-medium mr-2">•</span>
                <span>English shall be used for 15 years from 26.01.1950.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-medium mr-2">•</span>
                <span>President may order during the said period for the use of Hindi and Devnagari numerals.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Official Language Act, 1963</h3>
            <p className="text-gray-700 mb-4">
              As per Article 343(1) of the constitution of India, the Official language of the Union shall be in Hindi in Devanagri script. Article 343(2) empowers the President of India to authorize the use of the Hindi language in addition to the English language. Article 343(3) authorizes the Parliament to provide law for the use of English language or Hindi in Devanagri script as official language of the Union of India.
            </p>
            <p className="text-gray-700 mb-4">
              In pursuance of the constitutional provisions, the parliament enacted the Official Language Act, 1963 permitting:
            </p>
            <ol className="space-y-2 text-gray-700 ml-4">
              <li><strong>1.</strong> Continuance of English language in addition to Hindi for all official purposes of the union for which it was being used and for the transaction of business in parliament.</li>
              <li><strong>2.</strong> Formation of a committee on official language consisting of thirty members, of whom twenty from House of the people to be elected by the members of the House of people and ten from Council of States to be elected by the members of the Council of States.</li>
              <li><strong>3.</strong> Authorisation of Hindi translation of Central and State Acts.</li>
              <li><strong>4.</strong> Optional use of Hindi or other official language of the State in Judgment, decree or order passed by the High Court.</li>
              <li><strong>5.</strong> Central Government to make rules for carrying out the purposes of this Act.</li>
              <li><strong>6.</strong> Provisions of authorized Hindi translation of State Acts and optional use of Hindi or other language in judgment etc. of High Courts not to apply to the state of Jammu and Kashmir.</li>
            </ol>
          </div>
        </div>

        {/* Official Languages Rules */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-2">
            Official Languages Rules - 1976
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700 italic">
              G.S.R 1052 - In exercise of the powers conferred by section 8, read with sub-section(4) of section 3 of the Official Languages Act, 1963 (19 of 1963), the Central Government hereby makes the following rules, namely;
            </p>
          </div>

          <div className="space-y-6">
            {/* Rule 1 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Short title, extent and commencement</h3>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li><strong>i.</strong> These rules may be called the Official Languages (Use for Official Purposes of the Union) Rules, 1976.</li>
                <li><strong>ii.</strong> They shall extend to the whole of India, except the State of Tamilnadu.</li>
                <li><strong>iii.</strong> They shall come into force on the date of their publication in the Official Gazette.</li>
              </ul>
            </div>

            {/* Rule 2 */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Definitions</h3>
              <p className="text-gray-700 mb-3">In these rules, unless the context otherwise requires:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li><strong>a.</strong> &ldquo;Act&rdquo; means the Official Languages Act, 1963 (19 of 1963):</li>
                <li><strong>b.</strong> &ldquo;Central Government Office&rdquo; includes:</li>
                <li className="ml-4"><strong>i.</strong> any Ministry, Department or office of the Central Government,</li>
                <li className="ml-4"><strong>ii.</strong> any office of a Commission, Committee or Tribunal appointed by the Central Government; and</li>
                <li className="ml-4"><strong>iii.</strong> any office of a corporation or company owned or controlled by the Central Government;</li>
                <li><strong>c.</strong> &ldquo;Employee&rdquo; means any person employed in a Central Government office;</li>
                <li><strong>d.</strong> &ldquo;Notified Office&rdquo; means an office notified under sub-rule (4) of rule 10;</li>
                <li><strong>e.</strong> &ldquo;Proficiency in Hindi&rdquo; means proficiency in Hindi as described in rule 9;</li>
                <li><strong>f.</strong> &ldquo;Region A&rdquo; means the States of Bihar, Haryana, Himachal Pradesh, Madhya Pradesh, Chhattisgarh, Jharkhand, Uttarakhand, Rajasthan and Uttar Pradesh and the Union Territories of Delhi and Andaman and Nicobar Islands;</li>
                <li><strong>g.</strong> &ldquo;Region B&rdquo; means the States of Gujarat, Maharashtra and Punjab and the Union Territory of Chandigarh, Daman and Diu and Dadra and Nagar Haveli;</li>
                <li><strong>h.</strong> &ldquo;Region C&rdquo; means the States and the Union Territories other than those referred to in clauses (f) and (g);</li>
                <li><strong>i.</strong> &ldquo;Working knowledge of Hindi&rdquo; means working knowledge of Hindi as described in rule 10.</li>
              </ul>
            </div>

            {/* Rule 3 */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Communications to States etc. other than to Central Government offices</h3>
              <ul className="space-y-3 text-gray-700 ml-4">
                <li><strong>1.</strong> Communications from a Central Government office to a State or a Union Territory in Region &ldquo;A&rdquo; or to any office (not being a Central Government office) or person in such State or Union Territory shall, save in exceptional cases, be in Hindi, and if any communication is issued to any of them in English it shall be accompanied by a Hindi translation thereof.</li>
                <li><strong>2.</strong> Communications from a Central Government office:</li>
                <li className="ml-4"><strong>a.</strong> to a State or Union Territory in Region &ldquo;B&rdquo; or to any office (not being a Central Government office) in such State or Union Territory shall ordinarily be in Hindi and if any communication is issued to any of them in English, it shall be accompanied by a Hindi translation thereof; Provided that if any such State or Union Territory desires the communications of any particular class or category or those intended for any of its offices, to be sent for a period specified by the Government of the State or Union Territory concerned, in English, or in Hindi with a translation in the other language, such communication shall be sent in that manner;</li>
                <li className="ml-4"><strong>b.</strong> to any person in a State or Union Territory of Region &ldquo;B&rdquo; may be either in Hindi or English.</li>
                <li><strong>3.</strong> Communications from a Central Government office to State or Union Territory in Region &ldquo;C&rdquo; or to any office (not being a Central Government office) or person in such State shall be in English.</li>
                <li><strong>4.</strong> Notwithstanding anything contained in sub-rules (1) and (2), communications from a Central Government office in Region &ldquo;C&rdquo; to a State or Union Territory of Region &ldquo;A&rdquo; or Region &ldquo;B&rdquo; or to any office (not being a Central Government office) or person in such State may be either in Hindi or in English. Provided that communications in Hindi shall be in such proportion as the Central Government may, having regard to the number of persons having working knowledge of Hindi in such offices, the facilities for sending communications in Hindi and matters incidental thereto determine from time to time.</li>
              </ul>
            </div>

            {/* Additional Rules Summary */}
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Key Additional Rules:</h3>
              <ul className="space-y-1 text-gray-700">
                <li><strong>Rule 4:</strong> Communications between Central Government Offices</li>
                <li><strong>Rule 5:</strong> Replies to communications received in Hindi</li>
                <li><strong>Rule 6:</strong> Use of both Hindi and English</li>
                <li><strong>Rule 7:</strong> Application, representations etc.</li>
                <li><strong>Rule 8:</strong> Noting in Central Government offices</li>
                <li><strong>Rule 9:</strong> Proficiency in Hindi</li>
                <li><strong>Rule 10:</strong> Working knowledge of Hindi</li>
                <li><strong>Rule 11:</strong> Manuals, Codes, other procedural literature, articles of Stationery, etc.</li>
                <li><strong>Rule 12:</strong> Responsibility for compliance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Salient Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-teal-200 pb-2">
            Salient Features of Official Language Rules 1976
          </h2>
          
          <div className="space-y-4">
            <div className="bg-teal-50 rounded-lg p-4">
              <ol className="space-y-3 text-gray-700 ml-4">
                <li><strong>1.</strong> They apply to all Central Government Offices, including any office of a commission, Committee or Tribunal appointed by the central Government and corporation or Company owned or controlled by it.</li>
                <li><strong>2.</strong> Communications from a central Government Office to State/Union Territories or to any person in Region &lsquo;A&rsquo; comprising the states of UP, Uttarakhand, Himachal Pradesh, Madhya Pradesh, Chhattisgarh, Bihar, Jharkand, Rajasthan, Haryana, and UTs of Andaman and Nicobar Islands and Delhi, shall be in Hindi.</li>
                <li><strong>3.</strong> Communications from a Central Government Office to State/Union Territories in Region &lsquo;B&rsquo; comprising the states of Punjab, Gujarat, Maharasthra and UTs of Chandigarh, shall ordinarily be in Hindi. However, Communication to any person in Region &lsquo;B&rsquo; may be either English or Hindi.</li>
                <li><strong>4.</strong> Communications from a Central Government Office to a State Government office in Region &lsquo;C&rsquo; comprising all other states and UTs not included in region &lsquo;A&rsquo; & &lsquo;B&rsquo; or to any Office or person shall be in English.</li>
                <li><strong>5.</strong> Communications from a Central Government Office and from Central Government Office to the offices of the State Governments/ Union Territories and individuals, etc. will be Hindi in such proportions as may be determined time to time.</li>
                <li><strong>6.</strong> All manuals, Codes, and other Procedural literature relating to Central Government Offices are required to be prepared both in English and Hindi. All forms, Headings of Registers, Name Plates, Notice Boards and various items of stationary etc. are also required to be in English and Hindi.</li>
                <li><strong>7.</strong> It shall be the responsibility of the officer signing the documents specified in section 3(3) of the Act to ensure that these are issued both in English and Hindi.</li>
                <li><strong>8.</strong> It shall be the responsibility of the administrative head of each Central Government Office to ensure that the provisions of the Act, the Rules and directions are properly complied with and to device suitable and effective check points for this purpose.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Regional Classification */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
            Regional Classification for Hindi Implementation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Region A */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Region &ldquo;A&rdquo; (&lsquo;K&rsquo; Kshetra)</h3>
              <p className="text-gray-700 mb-3">States:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Bihar</li>
                <li>• Haryana</li>
                <li>• Himachal Pradesh</li>
                <li>• Rajasthan</li>
                <li>• Madhya Pradesh</li>
                <li>• Uttar Pradesh</li>
                <li>• Delhi</li>
                <li>• Chhattisgarh</li>
                <li>• Jharkhand</li>
                <li>• Uttarakhand</li>
                <li>• Andaman and Nicobar Islands</li>
              </ul>
            </div>

            {/* Region B */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Region &ldquo;B&rdquo; (&lsquo;Kha&rsquo; Kshetra)</h3>
              <p className="text-gray-700 mb-3">States:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Gujarat</li>
                <li>• Maharashtra</li>
                <li>• Punjab</li>
                <li>• Union Territory of Chandigarh</li>
              </ul>
            </div>

            {/* Region C */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Region &ldquo;C&rdquo; (&lsquo;Ga&rsquo; Kshetra)</h3>
              <p className="text-gray-700 mb-3">States:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Jammu & Kashmir</li>
                <li>• Assam</li>
                <li>• Nagaland</li>
                <li>• Manipur</li>
                <li>• Mizoram</li>
                <li>• Tripura</li>
                <li>• Arunachal Pradesh</li>
                <li>• Meghalaya</li>
                <li>• Sikkim</li>
                <li>• Andhra Pradesh</li>
                <li>• Tamil Nadu</li>
                <li>• Karnataka</li>
                <li>• Kerala</li>
                <li>• Goa</li>
                <li>• Daman and Diu</li>
                <li>• Lakshadweep</li>
                <li>• Pondicherry</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3(3) */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2">
            Section 3(3) of the Official Language Act 1963
          </h2>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">Bilingual Use in Important Places</h3>
            <p className="text-gray-700 mb-4">
              Section 3(3) of the Act is about the bilingual use in the important place. According to this section, the use of Hindi and English both is compulsory. Hindi should be bold and used before or above English.
            </p>
            <p className="text-gray-700 font-semibold">The following places are under section 3(3) where bilingual use is compulsory:</p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">1. Government Documents</h4>
              <p className="text-gray-700">
                Resolution, general orders, rules, notifications, administrative and other reports or press communiqués issued or made by central Government or by ministry, Department or office thereof or by a company or corporation owned or controlled by the central Govt. or by any office of such corporation or company.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">2. Parliamentary Papers</h4>
              <p className="text-gray-700">
                Administrative and other reports and official papers laid before a House or the Houses of parliament.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">3. Legal Documents</h4>
              <p className="text-gray-700">
                Contracts and agreements executed and licenses, permits, notices and forms of tender issued, by or on behalf of the central govt. or by ministry, Department or office thereof or by a company or corporation owned or controlled by the central Govt. or by any office of such corporation or company.
              </p>
            </div>
          </div>
        </div>

        {/* Incentives and Benefits */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
            Incentives and Benefits for Hindi Proficiency
          </h2>
          
          <div className="space-y-6">
            {/* Personal Pay */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">A. Personal Pay Benefits</h3>
              <p className="text-gray-700 mb-4">Benefit of personal Pay equal to the amount of one Increment for 12 months for the following conditions:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li><strong>1.</strong> To all non-gazetted staff for passing Hindi PRAGYA examination.</li>
                <li><strong>2.</strong> To those non-gazetted officials for whom &lsquo;PRAVEN&rsquo; or &lsquo;PRABODH&rsquo; is prescribed as their last requisite examination.</li>
                <li><strong>3.</strong> To all gazetted officers for whom &lsquo;PRAVEEN or PRAGYA is the last requisite examination.</li>
                <li><strong>4.</strong> To those employees for passing Hindi examination equivalent to Metric and Higher standard, conduct by voluntary organizations, where Hindi teaching centres are not functioning.</li>
                <li><strong>5.</strong> To all non-gazetted employees on passing Hindi Typing and stenography examination.</li>
              </ul>
            </div>

            {/* Cash Awards */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">B. Cash Awards</h3>
              <p className="text-gray-700 mb-4">Cash awards for passing the examination with distinction in addition to other awards on securing prescribed percentage of marks:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border-b text-left">Marks</th>
                      <th className="px-4 py-2 border-b text-center">Pragya</th>
                      <th className="px-4 py-2 border-b text-center">Praveen</th>
                      <th className="px-4 py-2 border-b text-center">Prabodh</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b">70% or more</td>
                      <td className="px-4 py-2 border-b text-center">Rs. 2400/-</td>
                      <td className="px-4 py-2 border-b text-center">Rs. 1800/-</td>
                      <td className="px-4 py-2 border-b text-center">Rs. 1600/-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">60% or more</td>
                      <td className="px-4 py-2 border-b text-center">Rs. 1600/-</td>
                      <td className="px-4 py-2 border-b text-center">Rs. 1200/-</td>
                      <td className="px-4 py-2 border-b text-center">Rs. 800/-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">55% or more</td>
                      <td className="px-4 py-2 border-b text-center">Rs. 800/-</td>
                      <td className="px-4 py-2 border-b text-center">Rs. 600/-</td>
                      <td className="px-4 py-2 border-b text-center">Rs. 400/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Hindi Typing & Stenography */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Hindi Typing Examination</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>90 - 94%</span>
                    <span className="font-semibold">Rs. 800/-</span>
                  </div>
                  <div className="flex justify-between">
                    <span>95 – 96%</span>
                    <span className="font-semibold">Rs. 1600/-</span>
                  </div>
                  <div className="flex justify-between">
                    <span>97 – 100%</span>
                    <span className="font-semibold">Rs. 2400/-</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">Hindi Stenography Examination</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>88 - 91%</span>
                    <span className="font-semibold">Rs. 800/-</span>
                  </div>
                  <div className="flex justify-between">
                    <span>92 – 94%</span>
                    <span className="font-semibold">Rs. 1600/-</span>
                  </div>
                  <div className="flex justify-between">
                    <span>95 – 100%</span>
                    <span className="font-semibold">Rs. 2400/-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Working Knowledge & Proficiency */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-2">
            Working Knowledge & Proficiency in Hindi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">Working Knowledge in Hindi</h3>
              <p className="text-gray-700 mb-4">An employee will be deemed to have acquired a working knowledge in Hindi if:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li><strong>i.</strong> He has passed metric or equivalent or higher examination with Hindi as a subject, or</li>
                <li><strong>ii.</strong> He has passed Pragya examination under Govt&rsquo;s Hindi Teaching scheme, or</li>
                <li><strong>iii.</strong> Any other examination specified by examination specified by Govt, or</li>
                <li><strong>iv.</strong> He declares that he has acquired a working knowledge of Hindi.</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Proficiency in Hindi</h3>
              <p className="text-gray-700 mb-4">An employee will be deemed to possess Proficiency in Hindi if:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li><strong>a)</strong> he has passed metric or equivalent or higher examination with Hindi as medium, or</li>
                <li><strong>b)</strong> he took Hindi as an elective subject in a degree or equivalent or higher examination, or</li>
                <li><strong>c)</strong> he declares that he possesses proficiency in Hindi.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Official Languages Act, 1963 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
            The Official Languages Act, 1963
          </h2>
          
          <div className="bg-red-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Act Details</h3>
            <p className="text-gray-700 mb-2">
              <strong>(AS AMENDED, 1967)</strong>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>(Act No. 19 of 1963)</strong>
            </p>
            <p className="text-gray-700">
              An Act to provide for the languages which may be used for the official purposes of the Union, for transaction of business in Parliament, for Central and State, Acts and for certain purposes in High Courts. Be it enacted by Parliament in the Fourteenth Year of the Republic of India as follows:
            </p>
          </div>

          <div className="space-y-6">
            {/* Section 1 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Short title and Commencement</h3>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li><strong>1.</strong> This Act may be called the Official Languages Act, 1963.</li>
                <li><strong>2.</strong> Section 3 shall come into force on the 26th day of January, 1965 and the remaining provisions of this Act shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint and different dates may be appointed for different provisions of this Act.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Definitions</h3>
              <p className="text-gray-700 mb-3">In this Act, unless the context otherwise requires:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li><strong>a.</strong> &ldquo;appointed day&rdquo; in relation to section 3, means the 26th day of January, 1965 and in relation to any other provision of this Act, means the day on which that provision comes into force;</li>
                <li><strong>b.</strong> &ldquo;Hindi&rdquo; means Hindi in Devanagari Script.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Continuation of English Language for official purposes of the Union and for use in Parliament</h3>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <h4 className="text-md font-semibold text-purple-800 mb-2">Sub-section (1)</h4>
                <p className="text-gray-700 mb-3">
                  Notwithstanding the expiration of the period of fifteen years from the commencement of the Constitution, the English language may, as from the appointed day, continue to be used in addition to Hindi:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li><strong>a.</strong> for all the official purposes of the Union for which it was being used immediately before that day; and</li>
                  <li><strong>b.</strong> for the transaction of business in Parliament:</li>
                </ul>
                <div className="bg-yellow-50 rounded-lg p-3 mt-3">
                  <p className="text-gray-700 text-sm">
                    <strong>Provided that:</strong> The English language shall be used for purposes of communication between the Union and a State which has not adopted Hindi as its Official Language.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="text-md font-semibold text-blue-800 mb-2">Sub-section (2)</h4>
                <p className="text-gray-700 mb-3">
                  Notwithstanding anything contained in sub-section (1) where Hindi or the English Language is used for purposes of communication:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li><strong>i.</strong> between one Ministry or Department or office of the Central Government and another;</li>
                  <li><strong>ii.</strong> between one Ministry or Department or office of the Central Government and any corporation or company owned or controlled by the Central Government or any office thereof;</li>
                  <li><strong>iii.</strong> between any corporation or company owned or controlled by the Central Government or any office thereof and another,</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Translation of such communication in the English language or, as the case may be, in Hindi shall also be provided till such date as the staff of the concerned Ministry, Department, office or the corporation or company aforesaid have acquired a working knowledge of Hindi.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <h4 className="text-md font-semibold text-green-800 mb-2">Sub-section (3)</h4>
                <p className="text-gray-700 mb-3">
                  Notwithstanding anything contained in sub-section (1) both Hindi and the English languages shall be used for:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li><strong>i.</strong> resolutions, general orders, rules, notifications, administrative or other reports or press communiques issued or made by the Central Government or by a Ministry, Department or office thereof or by a corporation or company owned or controlled by the Central Government or by any office of such corporation or company;</li>
                  <li><strong>ii.</strong> administrative and other reports and official papers laid before a House or the Houses of Parliament;</li>
                  <li><strong>iii.</strong> contracts and agreements executed, and licenses, permits, notices and forms of tender issued, by or on behalf of the Central Government or any Ministry, Department or office thereof or by a corporation or company owned or controlled by the Central Government or by any office of such corporation or company.</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Committee on Official Language</h3>
              
              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <h4 className="text-md font-semibold text-orange-800 mb-2">Sub-section (1)</h4>
                <p className="text-gray-700">
                  After the expiration of ten years from the date on which section 3 comes into force, there shall be constituted a Committee on Official language, on a resolution to that effect being moved in either House of Parliament with the previous sanction of the President and passed by both Houses.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <h4 className="text-md font-semibold text-orange-800 mb-2">Sub-section (2)</h4>
                <p className="text-gray-700 mb-3">
                  The Committee shall consist of thirty members, of whom twenty shall be members of the House of the people and ten shall be members of the Council of States, to be elected respectively the members of the House of the People and the members of the Council of States in accordance with the system of proportional representation by means of the single transferable vote.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <h4 className="text-md font-semibold text-orange-800 mb-2">Sub-section (3)</h4>
                <p className="text-gray-700">
                  It shall be the duty of the Committee to review the progress made in the use of Hindi for the official purposes of the Union and submit a report to the President making recommendations thereon and the President shall cause the report to be laid before each House of Parliament, and sent to all the State Governments.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Authorised Hindi translation of Central Acts, etc.</h3>
              
              <div className="bg-teal-50 rounded-lg p-4 mb-4">
                <h4 className="text-md font-semibold text-teal-800 mb-2">Sub-section (1)</h4>
                <p className="text-gray-700 mb-3">
                  A translation in Hindi published under the authority of the President in the Official Gazette on and after the appointed day:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li><strong>a.</strong> of any Central Act or of any Ordinance promulgated by the President, or</li>
                  <li><strong>b.</strong> of any order, rule, regulation or by-law issued under the Constitution or under any central Act, shall be deemed to be the authoritative text thereof in Hindi.</li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-lg p-4">
                <h4 className="text-md font-semibold text-teal-800 mb-2">Sub-section (2)</h4>
                <p className="text-gray-700">
                  As from the appointed day, the authoritative text in the English language of all Bills to be introduced or amendments thereto to be moved in either House of Parliament shall be accompanied by a translation of the same in Hindi authorised in such manner as may be prescribed by rules made under this Act.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">6. Authorised Hindi translation of State Acts in certain cases</h3>
              <p className="text-gray-700">
                Where the Legislature of a State has prescribed any language other than Hindi for use in Acts passed by the Legislature of the State or in Ordinances promulgated by the Governor of the State, a translation of the same in Hindi, in addition to a translation thereof in the English language as required by clause (3) of article 348 of the Constitution, may be published on or after the appointed day under the authority of the Governor of the State in the Official Gazette of the State and in such a case, the translation in Hindi or any such Act or Ordinance shall be deemed to be the authoritative text thereof in the Hindi language.
              </p>
            </div>

            {/* Section 7 */}
            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">7. Optional use of Hindi or other Official language in judgements etc. of High Courts</h3>
              <p className="text-gray-700">
                As from the appointed day or any day thereafter the Governor of a State may, with the previous consent of the President, authorise the use of Hindi or the official language of the State, in addition to the English language, for the purposes of any judgement, decree or order passed or made by the High Court for that State and where any judgement, decree or order is passed or made in any such language (other than the English language), it shall be accompanied by a translation of the same in the English language issued under the authority of the High Court.
              </p>
            </div>

            {/* Section 8 */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">8. Power to make rules</h3>
              
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <h4 className="text-md font-semibold text-yellow-800 mb-2">Sub-section (1)</h4>
                <p className="text-gray-700">
                  The Central Government may, by notification in the Official Gazette, make rules for carrying out the purposes of this Act.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="text-md font-semibold text-yellow-800 mb-2">Sub-section (2)</h4>
                <p className="text-gray-700">
                  Every rule made under this section shall be laid, as soon as may be after it is made, before each House of Parliament while it is in session for a total period of thirty days which may be comprised in one session or more in two successive sessions, and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the rule or both Houses agree that the rule should not be made, the rule shall thereafter have effect only in such modified form or be of no effect, as the case may be so, however, that any such modification or annulment shall be without prejudice to the validity of anything previously done under that rule.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">9. Certain provisions not to apply to Jammu and Kashmir</h3>
              <p className="text-gray-700">
                The provisions of section 6 and section 7 shall not apply to the State of Jammu and Kashmir.
              </p>
            </div>
          </div>
        </div>

        {/* Engine Whistle Codes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-cyan-200 pb-2">
            Engine Whistle Codes
          </h2>
          
          <div className="bg-cyan-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-cyan-800 mb-4">S.R.4.50.1 - Engine Whistle Code Regulations</h3>
            <p className="text-gray-700 mb-4">
              The following are the code of engine whistles, which shall be sounded by the Loco Pilots for various operational communications and safety purposes.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold">S.No.</th>
                  <th className="px-6 py-4 border-b text-left font-semibold">Code of Engine Whistle</th>
                  <th className="px-6 py-4 border-b text-left font-semibold">Indication</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">1</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">0</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <div className="space-y-2">
                      <p><strong>Before starting:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Indication to Loco Pilot of assisting/banking engine that the Loco Pilot of leading engine is ready to start.</li>
                        <li>Acknowledgement by the Loco Pilot of assisting/banking engine to leading engine.</li>
                        <li>Engine ready to leave loco yard or after completing loco work.</li>
                        <li>Engine ready to go to Loco Yard.</li>
                      </ul>
                      <p><strong>On run:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Assistance of the other engine not required.</li>
                        <li>Acknowledgement of Loco Pilot of assisting/banking engine that assistance stopped.</li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">2</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">0 0</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Call for Guard's signal.</li>
                      <li>Signals not exchanged by Guard.</li>
                      <li>Signals not exchanged by station staff.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">3</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">–– 0</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Guard to release brakes.</li>
                      <li>Before starting engine or a train from station/mid-section.</li>
                      <li>Main line clear after backing into siding.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">4</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">0 0 0</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Guard to apply brakes.</li>
                      <li>Train is out of control, Guard to assist.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">5</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">0 0 0 0</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Train cannot proceed on account of accident, failure, obstruction or other exceptional cause.</li>
                      <li>Protect train in rear.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">6</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">–– –– 0 0</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <p>Call for Guard to come to engine.</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">7</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">0 –– 0</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Token not received.</li>
                      <li>Token missed.</li>
                      <li>With wrong 'authority to proceed'.</li>
                      <li>Passing Stop signal at 'on' with proper authority.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">8</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">–––</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <div className="space-y-2">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Before starting, vacuum/air pressure recreated on ghat section, remove sprags.</li>
                        <li>Passing an Automatic Stop signal at 'on'.</li>
                        <li>Passing an IB signal at 'on' when the telephone provided on the signal post is out of order.</li>
                        <li>On run—Acknowledgement of Guard's signal.</li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">9</td>
                  <td className="px-6 py-4 border-b">
                    <div className="space-y-1">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono block">- - - - - -</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono block">(Intermittent whistling)</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono block">_______</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono block">(Continuous Long whistle)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Approaching level crossing.</li>
                      <li>Approaching tunnel or area of restricted visibility or curves or continuous cuttings or site of accident.</li>
                      <li>Recall railway servant protecting train in rear.</li>
                      <li>Material train ready to leave.</li>
                      <li>Running through a station.</li>
                      <li>Approaching a Stop signal at 'on'.</li>
                      <li>Detained at a Stop signal.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">10</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">–– 0 –– 0</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Train parting.</li>
                      <li>Train arriving incomplete.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">11</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">0 0 ––</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Alarm chain pulled.</li>
                      <li>Insufficient vacuum/air pressure in engine.</li>
                      <li>Inter-communication apparatus used.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">12</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">–– ––</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <p>Raise pantograph. To be acknowledged by the other engine.</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">13</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">–– 0 ––</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <p>Lower pantograph. To be acknowledged by the other engine.</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">14</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">–– 0 0</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Signal arm taken 'off' but light extinguished.</li>
                      <li>Signal arm improperly/insufficiently taken 'off'.</li>
                      <li>Defective signal.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">15</td>
                  <td className="px-6 py-4 border-b">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono">–– –– ––</span>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <p>Fouling marks not cleared.</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium text-gray-900">16</td>
                  <td className="px-6 py-4 border-b">
                    <div className="space-y-1">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono block">000000000</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-mono block">000 (frequently)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Apprehension of danger.</li>
                      <li>Danger signal to the Loco Pilot of an approaching train whose path is fouled or obstructed.</li>
                      <li>While working on a single line section during total interruption of communications.</li>
                      <li>Moving in wrong direction on a double line or against the signalled direction.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Note:</h4>
            <p className="text-gray-700">
              Engine whistle code shall be prescribed under special instructions. These codes are essential for safe railway operations and must be strictly followed by all Loco Pilots.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notes