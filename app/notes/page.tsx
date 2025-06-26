"use client"
import React, { useState } from 'react'

const Notes = () => {
  // State for managing collapsible sections
  const [expandedSections, setExpandedSections] = useState({
    officialLanguage: true,
    engineWhistle: true,
    speedRestrictions: true,
    authorityToProceed: true,
    appendixXIV: true,
    operatingForms: true,
    standardsOfInterlocking: true
  });

  const toggleSection = (sectionName: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

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
        OFFICIAL LANGUAGE ACT 1963
ARTICLES 343 To 351
Chapter I. - Language of the Union
•
Article 343: Official language of the Union.
•
Article 344: Commission and Committee of Parliament on official language.
Chapter II.—Regional Languages
•
Article 345: Official language or languages of a State
•
Article 346: Official language for communication between one State and another or between a State and the Union.
•
Article 347: Special provision relating to language spoken by a section of the population of a State.
Chapter III.—Language of the Supreme Court, High Courts, etc.
•
Article 348: Language to be used in the Supreme Court and in the High Courts and for Acts, Bills, etc.
•
Article 349: Special procedure for enactment of certain laws relating to language.
Chapter IV.—Special Directives
•
Article 350: Language to be used in representations for redress of grievances.
•
Article 350A: Facilities for instruction in mother-tongue at primary stage.
•
Article 350B: Special Officer for linguistic minorities.
•
Article 351: Directive for development of the Hindi language.
OFFICIAL LANGUAGES RULES – 1976
G.S.R 1052 - In exercise of the powers conferred by section 8, read with sub-section(4) of section 3 of the Official Languages Act, 1963 (19 of 1963), the Central Government hereby makes the following rules, namely ;
1.
Short title, extent and commencement -
i.
These rules may be called the Official Languages (Use for Official Purposes of the Union) Rules, 1976.
ii.
They shall extend to the whole of India, except the State of Tamilnadu.
iii.
They shall come into force on the date of their publication in the Official Gazette.
2.
Definitions - In these rules, unless the context otherwise requires : -
a.
"Act" means the Official Languages Act, 1963 (19 of 1963):
b.
"Central Government Office" includes :-
i.
any Ministry, Department or office of the Central Government,
ii.
any office of a Commission, Committee or Tribunal appointed by the Central Government; and
iii.
any office of a corporation or company owned or controlled by the Central Government ;
c.
"Employee" means any person employed in a Central Government office;
d.
"Notified Office" means an office notified under sub-rule (4) of rule 10 ;
e.
"Proficiency in Hindi " means proficiency in Hindi as described in rule 9 ;
f.
"Region A" means the States of Bihar, Haryana, Himachal Pradesh, Madhya Pradesh, Chhattisgarh, Jharkhand, Uttarakhand, Rajasthan and Uttar Pradesh and the Union Territories of Delhi and Andaman and Nicobar Islands;
g.
"Region B" means the States of Gujarat, Maharashtra and Punjab and the Union Territory of Chandigarh, Daman and Diu and Dadra and Nagar Haveli ;
h.
"Region C" means the States and the Union Territories other than those referred to in clauses (f) and (g);
i.
"Working knowledge of Hindi" means working knowledge of Hindi as described in rule 10.
3.
Communications to States etc. other than to Central Government offices,-
1.
Communications from a Central Government office to a State or a Union Territory in Region "A" or to any office (not being a Central Government office) or person in such State or Union Territory shall, save in exceptional cases, be in Hindi, and if any communication is issued to any of them in English it shall be accompanied by a Hindi translation thereof.
2.
Communications from a Central Government office :-
a.
to a State or Union Territory in Region "B" or to any office (not being a Central Government office) in such State or Union Territory shall ordinarily be in Hindi and if any communication is issued to any of them in English, it shall be accompanied by a Hindi translation thereof ; Provided that if any such State or Union Territory desires the communications of any particular class or category or those intended for any of its offices, to be sent for a period specified by the Government of the State or Union Territory concerned, in English, or in Hindi with a translation in the other language, such communication shall be sent in that manner ;
b.
to any person in a State or Union Territory of Region "B" may be either in Hindi or English.
3.
Communications from a Central Government office to State or Union Territory in Region "C" or to any office (not being a Central Government office) or person in such State shall be in English.
4.
Notwithstanding anything contained in sub-rules (1) and (2), communications from a Central Government office in Region "C" to a State or Union Territory of Region "A" or Region "B" or to any office (not being a Central Government office) or person in such State may be either in Hindi or in English. Provided that communications in Hindi shall be in such proportion as the Central Government may, having regard to the number of persons having working knowledge of Hindi in such offices, the facilities for sending communications in Hindi and matters incidental thereto determine from time to time.
4.
Communications between Central Government Offices communications.
a.
Between one Ministry or Department of the Central Government and another may be in Hindi or in English ;
b.
Between one Ministry or Department of the Central Government and attached or subordinate offices situated in Region "A", shall be in Hindi and in such proportion as the Central Government may, having regard to the number of persons having a working knowledge of Hindi in such offices, the facilities for sending communications in Hindi and matters incidental thereto, determine from time to time;
c.
Between Central Government offices situated in Region "A", other than those specified in clause (a) or clause (b), shall be in Hindi;
d.
Between Central Government offices situated in Region "A" and offices in Region "B" or Region "C" may be in Hindi or in English: Provided that these communications shall be in Hindi in such proportion as the Central Government may, having regard to the number of persons having working knowledge of Hindi in such offices, the facilities for sending communications in Hindi and matters incidental thereto, determine from time to time:
e.
Between Central Government offices situated in Region "B" or Region "C" may be in Hindi or English ; Provided that these communications shall be in Hindi in such proportion as the Central Government may, having regard to the number of persons having working knowledge of Hindi in such offices, the facilities for sending communications in Hindi and matters incidental thereto, determine from time to time ;
Provided that a translation of such communication in the other language shall:-
i.
Where that communication is addressed to an office in Region "A" or Region "B", be provided, if necessary, at the receiving end ;
ii.
where the communication is addressed to an office in Region "C", be provided alongwith such communication ; Provided further that no such translation in the other language shall be required to be provided if the communication is addressed to a notified office.
5.
Replies to communications received in Hindi - Notwithstanding anything contained rules 3 and 4, communications from a Central Government office in reply to communications in Hindi shall be in Hindi.
6.
Use of both Hindi and English - Both Hindi and English shall be used for all documents referred to in sub-section (3) of section 3 of the Act and it shall be the responsibility of the persons signing such documents to ensure that such documents are made, executed or issued both in Hindi and in English.
7.
Application, representations etc. -
1.
An employee may submit an application, appeal or representation in Hindi or in English.
2.
Any Application, appeal or representation referred to in sub-rule (1) when made or signed in Hindi, shall be replied to in Hindi.
3.
Where an employee desires any order or notice relating to service matters (including disciplinary proceedings) required to be served on him to be in Hindi, or as the case may be, in English, it shall be given to him in that language without undue delay.
8.
Noting in Central Government offices-
1.
an employee may record a note or minute on a file in Hindi or in English without being himself required to furnish a translation thereof in the other language.
2.
No Central Government employee possessing a working knowledge of Hindi may ask for an English translation of any document in Hindi except in the case of documents of legal or technical nature.
3.
If any question arises as to whether a particular document is of a legal or technical nature, it shall be decided by the Head of the Department or office.
4.
Notwithstanding anything contained in sub-rule (1), the Central Government may, by order specify the notified offices where Hindi alone shall be used for noting, drafting and for such other official purposes as may be specified in the order by employees who possess proficiency in Hindi.
9.
Proficiency in Hindi - An employee shall be deemed to possess proficiency in Hindi if:-
a.
he has passed the Matriculation or any equivalent or higher examination with Hindi as the medium of examination ; or
b.
he has taken Hindi as an elective subject in the degree examination or any other examination equivalent to or higher than the degree examination; or
c.
he declares himself to possess proficiency in Hindi in the form annexed to these rules.
10.
Working knowledge of Hindi-
1.
An employee shall be deemed to have acquired a working knowledge of Hindi -
a.
If he has passed -
i.
the Matriculation or an equivalent or higher examination with Hindi as one of the subjects ; or
ii.
the Pragya examination conducted under the Hindi Teaching Scheme of the Central Government or when so specified by that Government in respect of any particular category of posts, any lower examination under that Scheme ; or
iii.
any other examination specified in that behalf by the Central Government; or
b.
if he declares himself to have acquired such knowledge in the form annexed to these rules.
2.
The Staff of a Central Government office shall ordinarily be deemed to have acquired a working knowledge of Hindi if eighty per cent of the Staff working therein have acquired such knowledge.
3.
The Central Government or any officer specified in this behalf by the Central Government may determine whether the staff of a Central Government office has acquired a working knowledge of Hindi.
4.
The names of the Central Government offices, the staff whereof have acquired a working knowledge of Hindi, shall be notified in the Official Gazette: Provided that the Central Government may if it is of opinion that the percentage of the staff working in a notified office and having a working knowledge of Hindi has gone below the percentage specified in sub-rule (2) from any date, it may, by notification in the Official Gazette, declare that the said office shall cease to be a notified office from that date.
11.
Manuals, Codes, other procedural literature, articles of Stationery, etc.-
1.
All manuals, codes and other procedural literature relating to Central Government offices shall be printed or cyclostyled, as the case may be, and published both in Hindi and English in diglot form.
2.
The forms and headings of registers used in any Central Government office shall be in Hindi and in English.
3.
All name-plates, sign-boards, letter-heads and inscriptions on envelopes and other items of stationery written, printed or inscribed for use in any Central Government office, shall be in Hindi and in English: Provided that the Central Government may, if it is considered necessary to do by general or special order exempt any Central Government office from all or any of the provisions of this rule.
12.
Responsibility for compliance-
1.
It shall be the responsibility of the administrative head of each Central Government office-
i.
to ensure that the provisions of the Act and these rules and directions issued under Rule (2) are properly complied with ; and
ii.
to devise suitable and effective check-point for this purpose.
2.
The Central Government may from time to time issue such directions to its employees and offices as may be necessary for the due compliance of the provisions of the Act and these rules.

        {/* Collapsible Section 1: Rajbhasha - Official Language */}
        THE OFFICIAL LANGUAGES ACT, 1963
THE OFFICIAL LANGUAGES ACT, 1963
(AS AMENDED, 1967)
(Act No. 19 of 1963)
An Act to provide for the languages which may be used for the official purposes of the Union, for transaction of
business in Parliament, for Centrtal and State, Acts and for certain purposes in HighCourts. Be it enacted by
Parliament in the Fourteenth Year of the Republic of India as follows:-
1. Short title and Commencement -
1. This Act may be called the Official Languages Act, 1963.
2. Section 3 shall come into force on the 26th day of Januray, 1965 and the remaining provisions of this Act shall come into
force on such date as the Central Government may, by notification in the Official Gazette, appoint and different dates may
be appointed for different provisions of this Act.
2. Definitions.-
In this Act, unless the context otherwise requires,-
a. "appointed day" in relation to section 3, means the 26th day of Januray, 1965 and in relation to any other provision of this
Act, means the day on which that provision comes into force;
b. "Hindi" means Hindi in Devanagari Script.
3. Continuation of english Language for official purposes of the Union and for use in Parliament-
0. Nothwithstanding the expiration of the period of fifteen years from the commencement of the Constitution, the English
language may, as from the appointed day, continue to be used in addition to Hindi,
a. for all the official purposes of the Union for which it was being used immediately before that day; and
b. for the transaction of business in Parliament:
Provided that the English language shall be used for purposes of communication between the Union and a State which has
not adopted Hindi as its Official Language:
Provided further that where Hindi is used for purposes of communication between one State which has adopted Hindi as its
official language and another State which has not adopted Hindi as its Official Language, such communication in Hindi shall
be accompanied by a translation of the same in the English language:
Provided also that nothing in this sub-section shall be construed as preventing a State which has not adopted Hindi as its
official language from using Hindi for purposes of communication with the Union or with a State which has adopted Hindi as
its official language, or by agreement with any other State, and in such a case, it shall not be obligatory to use the English
language for purposes of communication with that State.
1. Notwithstanding anything contained in sub-section (1) where Hindi or the English Language is used for purposes of
communicationi.
between one Ministry or Department or office of the Central Government and another;
ii. between one Ministry or Department or office of the Central Government and any corporation or company owned or
controlled by the Central Government or any office thereof.;
iii. between any corporation or company owned or controlled by the Central Government or any office thereof and another,
Translation of such communication in the English language or, as the case may be, in Hindi shall also be provided till such
date as the staff of the concerned Ministry, Department, office or the corporation or company aforesaid have acquired a
working knowledge of Hindi.
2. Notwithstanding anything contained in sub-section (1) both Hindi and the English languages shall be used for-
. resolutions, general orders, rules, notifications, administrative or other reports or press communiques issued or made by the
Central Government or by a Ministry, Department or office thereof or by a corporation or company owned or controlled by
the Central Government or by any office of such corporation or company;
i. administrative and other reports and official papers laid before a House or the Houses of Parliament;
ii. contracts and agreements executed, and licenses, permits, notices and forms of tender issued, by or on behalf of the
Central Government or any Ministry, Department or office thereof or by a corporation or company owned or controlled by the
Central Government or by any office of such corporation or company.
3. Without prejudice to the provisions of sub-section (1) or sub-section (2) or sub-section (3) the Central Government may, by
rules made under section 8, provide for the language/languages to be used for the official purpose of the Union, including
the working of any Ministry, Department, Section or Office and in making such rules, due consideration shall be given to the
quick and efficient disposal of the official business and the interests of the general public and in particular, the rules so made
shall ensure that persons serving in connection with the affairs of the Union and having proficiency either in Hindi or in the
English language may function effectively and that they are not placed at a disadvantage on the ground that they do not
have proficiency in both the languages.
4. The provisions of clause (a) of sub-section (1), and the provisions of sub-section (2), sub-section (3) and sub-section (4)
shall remain in force until resolutions for the discontinuance of the use of the English language for the purposes mentioned
therein have been passed by the legislatures of all the States which have not adopted Hindi as their Official Language and
until after considering the resolution aforesaid, a resolution for such discontinuance has been passed by each House of
Parliament.
4. Committee on Official Language-
0. After the expiration of ten years from the date on which section 3 comes into force, there shall be constituted a Committee
on Official language, on a resolution to that effect being moved in either House of Parliament with the previous sanction of
the President and passed by both Houses.
1. The Committee shall consist of thirty members, of whom twenty shall be members of the House of the people and ten shall
be members of the Council of States, to be elected respectively the members of the House of the People and the members
of the Council of States in accordance with the system of proportional representation by means of the single transferable
vote.
2. It shall be the duty of the Committee to review the progress made in the use of Hindi for the official purposes of the Union
and submit a report to the President making recommendations thereon and the President shall cause the report to be laid
before each House of Parliament, and sent to all the State Governments.
3. The President may, after consideration of the report referred to in sub-section (3), and the views, if any, expressed by the
State Government thereon, issue directions in accordance with the whole or any part of that report :
Provided that the direction so issued shall not be inconsistent with the provisions of section 3
5. Authorised Hindi translation of Central ACts, etc. -
0. A translation in Hindi published under the authority of the Prtesident in the Official Gazette on and after the appointed day-
. of any Centrtal Act or of any Ordinance promulgated by the President, or
a. of any order, rule, regulation or by-law issued under the Constitution or under any central Act, shall be deemed to be the
authoritative text thereof in Hindi.
1. As from the appointed day, the authoritative text in the English language of all Bills to be introduced or amendments thereto
to be moved in either House of Parliament shall be accompanied by a translation of the same in Hindi authorised in such
manner as may be prescribed by rules made under this Act.
6. Authorised Hindi translation of State Acts in certain cases -
Where the Legislature of a State has prescribed any language other than Hindi for use in Acts passed by the Legislature of
the State or in Ordinances promulgated by the Governor of the State, a translation of the same in Hindi, in addition to a
translation thereof in the English language as required by clause (3) of article 348 of the Constitution, may be published on
or after the appointed day under the authority of the Governor of the State in the Official Gazette of the State and in such a
case, the translation in Hindi or any such Act or Ordinance shall be deemed to be the authoritative text thereof in the Hindi
language.
7. Optional use of Hindi or other Official language in judgements etc. of High Courts -
As from the appointed day or any day thereafter the Governor of a State may, with the previous consent of the President,
authorise the use of Hindi or the official language of the State, in addition to the English language, for the purposes of any
judgement, decree or order passed or made by the High Court for that State and where any judgement, decree or order is
passed or made in any such language (other than the English language), it shall be accompanied by a translation of the
same in the English language issued under the authority of the High Court.
8. Power to make rules -
0. The Central Government may, by notification in the Official Gazette, make rules for carrying out the purposes of this Act.
1. Every rule made under this section shall be laid, as soon as may be after it is made, before each House of Parliament while
it is in session for a total period of thirty days which may be comprised in one session or more in two successive sessions,
and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses
agree in making any modification in the rule or both Houses agree that the rule should not be made, the rule shall thereafter
have effect only in such modified form or be of on effect, as the case may be so, however, that any such modification or
annulment shall be without prejudice to the validity of anything previously done under that rule.
9. Certain provisions not to apply to Jammu and Kashmir-
The provisions of section 6 and section 7 shall not apply to the State of Jammu and Kashmir.

1
Rajbhasha
Official Lnaguage (Raj Bhasha) means the language to be used for official transaction.
According to constitutional provisions Hindi in Devnagari script is the official language and English
is an associate language.
Raj Bhasha has been defined in Article 343 (1) as follows:
 Hindi in Devnagari script is the Official Language.
 International form of Indian Numerals shall be used for official purpose of the union.
 English shall be used for 15 years from 26.01.1950.
 President may order during the said period for the use of Hindi and Devnagari
numerals.
Official language Act, 1963/Raj Bhasha.
As per Article 343 (1) of the constitution of India, the Official language of the Union shall
be in Hindi in Devanagri script. Article 343 (2) empowers the President of India to authorize
the use of the Hindi language in addition to the English language. Article 343 (3) authorizes the
Parliament to provide law for the use of English language or Hindi in Devanagri script as
official language of the Union of India.
In pursuance of the constitutional provisions, the parliament enacted the Official
language Act, 1963 permitting-
1. Continuance of English language in addition to Hindi for all official purposes of the
union for which it was being used and for the transaction of business in parliament.
2. Formation of a committee on official language consisting of thirty members, of whom
twenty from House of the people to be elected by the members of the House of people
and ten from Council of States to be elected by the members of the Council of States. The
committee is to review the progress of Hindi for the Official purpose of the union of
India;
3. Authorisation of Hindi translation of Central and State Acts;
4. Optional use of Hindi or other official language of the State in Judgment, decree or order
passed by the High Court;
5. Central Government to make rules for carrying out the purposes of this Act; and
6. Provisions of authorized Hindi translation of State Acts and optional use of Hindi or other
language in judgment etc. of High Courts not to apply to the state of Jammu and
Kashmir.
Salient feature of Official language Rules 1976
2
1. They apply to all Central Government Offices, including any office of a commission,
Committee or Tribunal appointed by the central Government and corporation or Company
owned or controlled by it.
2. Communications from a central Government Office to State/Union Territories or to any
person in Region 'A' comprising the states of UP, Uttarakhand, Himachal Pradesh, Madhya
Pradesh, Chhattisgarh, Bihar, Jharkand, Rajasthan, Haryana, and UTs of Andaman and Nicobar
Islands and Delhi, shall be in Hindi.
3. Communications from a Central Government Office to State/Union Territories in Region 'B'
comprising the states of Punjab, Gujarat, Maharasthra and UTs of Chandigarh, shall ordinarily
be in Hindi. However, Communication to any person in Region 'B' may be either English or
Hindi.
4. Communications from a Central Government Office to a State Government office in Region
'C' comprising all other states and UTs not included in region 'A' & 'B' or to any Office or
person shall be in English.
5. Communications from a Central Government Office and from Central Government Office to
the offices of the State Governments/ Union Territories and individuals,. Etc. will be Hindi in
such proportions as may be determined time to time.
6. All manuals, Codes, and other Procedural literature relating to Central Government Offices
are required to be prepared both in English and Hindi. All forms, Headings of Registers, Name
Plates, Notice Boards and various items of stationary etc. are also required to be in English and
Hindi.
7. It shall be the responsibility of the officer signing the documents specified in section 3(3) of
the Act to ensure that these are issued both in English and Hindi.
8. It shall be the responsibility of the administrative head of each Central Government Office
to ensure that the provisions of the Act, the Rules and directions are properly complied with
and to device suitable and effective check points for this purpose.
For the purpose of implementing the Hindi, whole of the India has been divided in three
regions, which are as under:
1. Region "A" ('K' Keshtra): Bihar, Hariyana, Himachal Pradesh, Rajasthan, Madhya
Pradesh, Uttar Pradesh, Delhi, Chhattisgarh, Jharkhand, Uttrakhand and Andaman and
Nicoher Island.
2. Region "B" ('Kha' Keshtra): Means the state of Gujarat, Maharashtra, Punjab and
Union Territory of Chandigarh.
3. Region "C" ('Ga' Keshtra): Means the state other than those referred in clauise1) &
2) namely J&K, Assam, Nagaland, Manipur, Mizoram, Tripura, Arunachal Pradesh,
3
Meghalaya, Sikkim, Andhra Pradesh, Tamil Nadu, Karnataka, Kerala, Goa, Daman
and Diu, Lakshadweep, Pondicherry.
Section 3(3) of the Official Language Act 1963:
Section 3(3) of the Act is about the bilingual use in the important place. According to
this section, the use of Hindi and English both is compulsory. Hindi should be bold and used
before or above English. The following places are under section 3(3) where bilingual use is
compulsory.
Provisions of section 3(3) of the Official Language Act:
Resolution, general orders, rules, notifications, administrative and other reports or
press communiqués issued or made by central Government or by ministry, Department or
office there of or by a company or corporation owned or controlled by the central Govt. or by
any office of such corporation or company.
2. Administrative and other reports and official papers laid before a House or the Houses of
parliament.
3. Contracts and agreements executed and licenses, permits, notices and forms of tender
issued, by or on behalf of the central govt. or by ministry, Department or office thereof or
by a company or corporation owned or controlled by the central Govt. or by any office of
such corporation or company.
The monetary / Incentive benefits you will get after passing different Hindi
Examinations:
A. Personal Pay: Benefit of personal Pay equal to the amount of one Increment for 12
months for the following conditions:
1) To all non-gazetted staff for passing Hindi PRAGYA examination.
2) To those non-gazetted officials for whom 'PRAVEN' or 'PRABODH' is prescribed as
their last requisite examination.
3) To all gazetted officers for whom 'PRAVEEN or PRAGYA is the last requisite
examination.
4) To those employees for passing Hindi examination equivalent to Metric and Higher
standard, conduct by voluntary organizations, where Hindi teaching centres are not
functioning.
5) To all non-gazetted employees on passing Hindi Typing and stenography examination.
B) Cash Awards: The following are the cash award passing the examination with
distinction in addition to other awards on securing prescribed percentage of marks.
SN Pragya Praveen Prabodh Eligibility for Cash awards
1 Rs. 2400/- Rs. 1800/- Rs. 1600/- 70 % or more marks
4
2 Rs. 1600/- Rs. 1200/- Rs. 800/- 60 % or more marks
3 Rs. 800/- Rs. 600/- Rs. 400/- 55 % or more marks
Hindi Typing Examination:
Percentage of Marks Amount of Award
90 - 94 % Rs. 800/-
95 – 96% Rs. 1600/-
97 – 100% Rs. 2400/-
Hindi Stenography Examination:
Percentage of Marks Amount of Award
88 - 91 % Rs. 800/-
92 – 94% Rs. 1600/-
95 – 100% Rs. 2400/-
C) Lum –Sum Amount:-For passing examination through one's own effort
1) To field officials and employees posted at such places where Hind Teaching Centre are not
functioning.
SN Pragya Praveen Prabodh
1. 2400/- 1500/- 1600/-
2) To those employees for passing Hindi Examination equivalent to metric or Higher
standard conducted by voluntary organization where Hindi teaching
centres are not functioning – Rs. 1200/-
3. Hindi Typing: Rs. 1600/-
4. Hindi Stenography: Rs. 3000/-
OTHER INCENTIVE/CASH AWARD for use of Rajbhasha:
Essay and Speech Competition for Non-Hindi Railway Employee:
Ist Prize – Rs. 1200/-
2nd Prize –Rs. 1000/-
3rd Prize – Rs. 900/-
Consolation Prize (three) – Rs. 250/- (Each)
Prizes provided by Rly. Board under this scheme are as under in all India basis5
Ist Prize – Rs. 3000/-
2nd Prize –Rs. 2500/-
3rd Prize – Rs. 2000/-
Consolation Prize (three) – Rs. 1500/- (Each)
 All India Noting & Drafting Competition of Class II Hindi & Non-Hindi specking
people
In Zonal basis:
Ist Prize – Rs. 1200/-
2nd Prize –Rs. 1000/-
3rd Prize – Rs. 900/-
Consolation Prize (three) – Rs. 250/- (Each)
All India Basis:
Ist Prize – Rs. 3000/-
2nd Prize –Rs. 2500/-
3rd Prize – Rs. 2000/-
Consolation Prize (five) – Rs. 1500/- (Each)
 Railway Minister best Hindi Essay awards given during Railway Week – Rs. 1500/-
 Railway Minister Hindi Essay Competition Prize on the subject related to
Rail operation & Management.
Ist Prize – Rs. 6000/- (One Each)
2nd Prize –Rs. 4000/- (One Each)
 For writing basic books in Hindi subjected on Technical Rail, Lal Bahadur Shashtri
technical basic prize scheme-
Ist Prize – Rs. 15,000/- (1)
2nd Prize –Rs. 8000/- (2)
3rd Prize – Rs. 5000/- (2)
Consolation Prize (two) – Rs. 2500/- (Each)
6
 Railway Minister awards for maximum use in Hindi in official
correspondence – 1500/-
 Railway Board Prem Chand Prize to warm up the literacy talent of Railway
Employees for composing best story and Novel – Rs. 15000/-
 Railway Board Maithily Sharan Gupta Prize Scheme is provided for encouraging
the interest of the Railway employees in literature - Rs. 15,000/-.
Action for to propagate the use of Rajbhasha in the office under your charge:
Administrative head of each Central Govt. office to ensure the constitutional provisions of the
official Language Act., rules and directions issued are properly complied with.
2. It is to be ensure the Implantation of annual programme fixed time to time.
3. We should use Rajbhasa Hindi in offices as per Annual programme fixed target.
4. We have needed to maximum use official language Hindi (Rajbhasha) in correspondences as
per annual Programme target.
5. Implementation of 3(3) Rules.
6. Hindi classes should be organized for the central Govt. Employees who do not know Hindi
and they should be trained in Hindi.
7. All incentives scheme should be implemented to inspire the staff / Officers.
8. Hindi should be used in noting & drafting and all other official works in day to day
programme.
9. Hindi Divas / Week / Cultural Programme etc. should be observed for the propagation of
Hindi among the officers / staff from time to time.
10. Hindi workshop should be conducted amongst the staff who have proficiency in Hindi and
working knowledge in Hindi.
11. Official Language (Rajbhasa) implementation committee should be formed in administrative /
Sub-ordinate Officers and to conduct meeting in due time to review use of Official Language
Hindi.
12. Inspect every Office, for bilingual use in Attendance register & Notice Board.
13. To devise suitable and effective checkpoints for proper compliance.
An employee will be deemed to have acquired a working knowledge in Hindi if
i. He has passed metric or equivalent or higher examination with Hindi as a subject, or
ii. He has passed Pragya examination under Govt's Hindi Teaching scheme' or
iii. Any other examination specified by examination specified by Govt, or
iv. He declares that he has acquired a working knowledge of Hindi.
An employee will be deemed to possess Proficiency in Hindi if
a) he has passed metric or equivalent or higher examination with Hindi as medium, or
b) he took Hindi as an elective subject in a degree or equivalent or higher examination, or
c) he declares that he possesses proficiency in Hindi.
7
As per Official language Rules 1976, the language for communication to state / Union
territories situated in A, B and C regions by central Govt offices.
Communications from Central Government Offices to Region 'A' states, Offices and persons
shall be in Hindi. If it is in English, a Hindi translation will accompany.
b. Communications from Central Government Offices to Region 'B'
o State or Offices shall be in Hindi. If it is in English, a Hindi translation will
accompany.
o Persons may be in Hindi or English.
c. Communications from Central Government Offices to Region 'C' States, Offices or
Persons will be in English.
Language for communication between Central Govt. offices
Between Central Govt. offices situated in Region 'A' shall be in Hindi.
b. Between Central Govt. offices situated in Region 'A' and offices in Region 'B' or 'C'
may be in Hindi or in English.
c. Between Central Govt. offices situated in Region 'B' or Region 'C' may be in Hindi or
English
Correspondence to and from places located in 'C' region
a. Communications from Central Government Offices to Region 'C' States, Offices or Persons
will be in English.
b. Between Central Govt. offices situated in Region 'C' and offices in Region 'A' or 'B'
may be in Hindi or in English.
c. Between Central Govt. offices situated in Region 'B' or Region 'C' may be in Hindi or
English

        {/* Collapsible Section 2: Engine Whistle Codes */}
        Engine whistle code shall be prescribed under special instructions.
S.R.4.50.1. The following are the code of engine whistles, which shall be sounded by the
Loco Pilots.
Whistle Codes
S.
No.
Code of
engine
whistle
Indication
1 0 (a) Before starting:
(i) Indication to Loco Pilot of assisting/banking engine that the
Loco Pilot of leading engine is ready to start.
(ii) Acknowledgement by the Loco Pilot of assisting/banking engine
to leading engine.
(iii) Engine ready to leave loco yard or after completing loco work.
(iv) Engine ready to go to Loco Yard.
(b) On run:
(i) Assistance of the other engine not required.
(ii) Acknowledgement of Loco Pilot of assisting/banking engine that
assistance stopped.
2
0 0 (a) Call for Guard's signal.
(b) Signals not exchanged by Guard.
(c) Signals not exchanged by station staff.
3 –– 0 (a) Guard to release brakes.
(b) Before starting engine or a train from station/mid-section.
(c) Main line clear after backing into siding.
4 0 0 0 (a) Guard to apply brakes.
(b) Train is out of control, Guard to assist.
5 0 0 0 0 (a) Train cannot proceed on account of accident, failure, obstruction or
other exceptional cause.
(b) Protect train in rear.
6 –– –– 0 0 Call for Guard to come to engine.
7 0 –– 0 (a) Token not received.
(b) Token missed.
(c) With wrong 'authority to proceed'.
(d) Passing Stop signal at 'on' with proper authority
8 ––– (a) Before starting, vacuum/air pressure recreated on ghat section,
remove sprags.
(b) Passing an Automatic Stop signal at 'on'
(c) Passing an IB signal at 'on' when the telephone provided on the
signal post is out of order and the Loco Pilot is, thus unable to
contact the station in rear.
(d) On run—
(e) Acknowledgement of Guard's signal
9 - - - - - -
(Intermittent
whistling)
long)
_______
(Continuous
Long
whistle)
(a) Approaching level crossing;
(b) Approaching tunnel or area of restricted visibility or curves or
continuous cuttings or site of accident; or when in consequence of
fog, storm or any other reason the view of the signal is obstructed;
(c) Recall railway servant protecting train in rear;
(d) Material train ready to leave;
(e) Running through a station;
(f) Approaching a Stop signal
10 –– 0 –– 0 (a) Train parting
(b) Train arriving incomplete.
11 0 0 –– (a) Alarm chain pulled.
(b) Insufficient vacuum/air pressure in engine.
(c) Inter-communication apparatus used.
12 –– –– Raise pantograph. To be acknowledged by the other engine.
13 –– 0 –– Lower pantograph. To be acknowledged by the other engine.
14 –– 0 0 (a) Signal arm taken 'off' but light extinguished.
(b) Signal arm improperly/insufficiently taken 'off'.
(c) Defective signal.
15 –– –– –– Fouling marks not cleared.
16 000000000
000
(frequently)
(a) Apprehension of danger.
(b) Danger signal to the Loco Pilot of an approaching train whose
path is fouled or obstructed for any reason.
(c) While working on a single line section during total interruption of
communications or when single line working is introduced on a
double line section.
(d) Moving in wrong direction on a double line or against the signalled
direction in the Automatic block signalling territory.

        {/* Collapsible Section 3: Speed Restrictions */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <button 
            onClick={() => toggleSection('speedRestrictions')}
            className="w-full p-6 text-left bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-between"
          >
            <h2 className="text-2xl font-semibold">Speed of Train in Different Circumstances</h2>
            <div className="flex items-center">
              <span className="mr-2 text-sm">{expandedSections.speedRestrictions ? 'Hide' : 'Show'}</span>
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedSections.speedRestrictions ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div className={`transition-all duration-500 ease-in-out ${expandedSections.speedRestrictions ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}> 
            <div className="p-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <tr>
                      <th className="px-4 py-3 border-b text-left font-semibold text-sm">Sl. No.</th>
                      <th className="px-4 py-3 border-b text-left font-semibold text-sm">Description</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Speed Restriction</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Rule Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              <tr className="even:bg-gray-50 hover:bg-blue-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">1</td>
                      <td className="px-4 py-3 border-b text-gray-700">On Non-Interlocked points</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">15/30 kmph</td>
                      <td className="px-4 py-3 border-b text-center">S.R.4.10.3</td>
              </tr>
              <tr className="even:bg-gray-50 hover:bg-blue-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">2</td>
                      <td className="px-4 py-3 border-b text-gray-700">Speed of incoming Goods trains inside station section at Terminal yard</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">15 kmph</td>
                      <td className="px-4 py-3 border-b text-center">S.R. 3.36.4</td>
              </tr>
              <tr className="even:bg-gray-50 hover:bg-blue-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">3</td>
                      <td className="px-4 py-3 border-b text-gray-700">Motor Trolley while running over points and crossings</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">15 kmph</td>
                      <td className="px-4 py-3 border-b text-center">S.R. 15.25.10.1</td>
              </tr>
              <tr className="even:bg-gray-50 hover:bg-blue-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">4</td>
                      <td className="px-4 py-3 border-b text-gray-700">Motor Trolley shall not exceed a speed during night time</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">30 kmph</td>
                      <td className="px-4 py-3 border-b text-center">S.R. 15.25.10.2</td>
              </tr>
              <tr className="even:bg-gray-50 hover:bg-blue-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">5</td>
                      <td className="px-4 py-3 border-b text-gray-700">The speed over turn outs having 1 in 8 1/2 straight switch (A) For passenger carrying trains (B) For Goods trains</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">(A)10 kmph (B)15 kmph</td>
                      <td className="px-4 py-3 border-b text-center">S.R. 4.10.1</td>
              </tr>
              <tr className="even:bg-gray-50 hover:bg-blue-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">6</td>
                      <td className="px-4 py-3 border-b text-gray-700">The speed over the turn outs having 1 in 8 1/2 curved switches of 52/60 Kg rails, on PSC sleepers for both passenger carrying trains and goods trains</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">15 kmph</td>
                      <td className="px-4 py-3 border-b text-center">S.R. 4.10.1</td>
              </tr>
              <tr className="even:bg-gray-50 hover:bg-blue-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">7</td>
                      <td className="px-4 py-3 border-b text-gray-700">In case of 1:8.5 symmetrical split with curved switches with 52/60 kg including TWS (Thick Web Switch) on PSC sleepers, a maximum speed permitted under approved special instructions is</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">30 kmph</td>
                      <td className="px-4 py-3 border-b text-center">S.R. 4.10.2</td>
              </tr>
              <tr className="even:bg-gray-50 hover:bg-blue-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">8</td>
                      <td className="px-4 py-3 border-b text-gray-700">When IB Home is defective and phone is not working</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">15 (day clear)/8 (night or not clear)</td>
                      <td className="px-4 py-3 border-b text-center">S. R. 3.75.4</td>
              </tr>
              <tr className="even:bg-gray-50 hover:bg-blue-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">9</td>
                      <td className="px-4 py-3 border-b text-gray-700">When relief engine/train is being dispatched on T/A 602 (Double Line and Single Line) into obstructed block section</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">15/10 kmph</td>
                      <td className="px-4 py-3 border-b text-center">S. R. 6.02.6.1</td>
              </tr>
              <tr className="even:bg-gray-50 hover:bg-blue-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">10</td>
                      <td className="px-4 py-3 border-b text-gray-700">Speed of the Light engine sent to open communication is restricted to (T/B 602). Day or view clear/Night view obstructed</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">15/10 kmph</td>
                      <td className="px-4 py-3 border-b text-center">S.R. 6.02.4.6.1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-xs text-gray-500">* For full details, refer to relevant GRs and SRs.</div>
            </div>
          </div>
        </div>

        {/* Collapsible Section 4: Authority to Proceed */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <button 
            onClick={() => toggleSection('authorityToProceed')}
            className="w-full p-6 text-left bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-between"
          >
            <h2 className="text-2xl font-semibold">Authority to Proceed - Different Paper Authorities</h2>
            <div className="flex items-center">
              <span className="mr-2 text-sm">{expandedSections.authorityToProceed ? 'Hide' : 'Show'}</span>
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedSections.authorityToProceed ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div className={`transition-all duration-500 ease-in-out ${expandedSections.authorityToProceed ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="p-8">
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Different Paper Authorities for Various Circumstances</h3>
                <p className="text-gray-700 mb-4">
                  The following table outlines different paper authorities to be used in various circumstances. Relevant GR and SR should also be referred for complete details.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                  <thead className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                    <tr>
                      <th className="px-4 py-3 border-b text-left font-semibold text-sm">Situation</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Absolute Block</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Automatic Block</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Single Line</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Double Line</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Home signal failure</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/369(3b)</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/369(3b)</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/369(3b)</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/369(3b)</span>
                      </td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">LSS / Advanced Starter failure</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">PLCT (T/C or T/D 1425)</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">PLCT (T/C or T/D 1425)</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">PLCT (T/C or T/D 1425)</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">PLCT (T/C or T/D 1425)</span>
                      </td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">IBS failure</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/369 (1)</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/369 (1)</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/369 (1)</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/369 (1)</span>
                      </td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Dispatching Relief Engine / train into occupied block section</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/A 602</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/C 912</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/A 602</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/C 912</span>
                      </td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">TSL working</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/D 602</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/E 912</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/D 602</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/E 912</span>
                      </td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Reception of train from wrong line</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/510</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/510</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/510</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/510</span>
                      </td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Authority to proceed during prolonged failure of signals</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/D 912</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/D 912</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/D 912</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">T/D 912</span>
                      </td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Authority to receive a train on to an obstructed line</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/509</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/509</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/509</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/509</span>
                      </td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Authority to receive on non-signaled line</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/510</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/510</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/510</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/510</span>
                      </td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Authority to start from a non-signaled line</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/511</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/511</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/511</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/511</span>
                      </td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-green-50">
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Authority to start from lines with common starter</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/512</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/512</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/512</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">T/512</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Different authorities are used based on the type of block system and line configuration.</li>
                  <li>Red forms indicate emergency or special circumstances.</li>
                  <li>Blue forms are for regular operational procedures.</li>
                  <li>Always refer to relevant GR and SR for complete details.</li>
                </ul>
              </div>

              <div className="mt-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Form Color Coding:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded mr-2 text-xs">Red Forms</span>
                    <span>Emergency/Special</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 text-xs">Blue Forms</span>
                    <span>Regular Operations</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2 text-xs">Green Forms</span>
                    <span>Caution Orders</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-black text-white px-2 py-1 rounded mr-2 text-xs">Black Forms</span>
                    <span>Reports/Notices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Section 5: Appendix XIV */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <button 
            onClick={() => toggleSection('appendixXIV')}
            className="w-full p-6 text-left bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-between"
          >
            <h2 className="text-2xl font-semibold">Appendix XIV – Station Working Rules</h2>
            <div className="flex items-center">
              <span className="mr-2 text-sm">{expandedSections.appendixXIV ? 'Hide' : 'Show'}</span>
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedSections.appendixXIV ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          <div className={`transition-all duration-500 ease-in-out ${expandedSections.appendixXIV ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="p-8">
              <div className="bg-violet-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-violet-800 mb-4">Station Working Rules and Appendices</h3>
                <p className="text-gray-700 mb-4">
                  The following table outlines various appendices that form part of the Station Working Rules, each covering specific aspects of railway operations and safety procedures.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                  <thead className="bg-gradient-to-r from-violet-500 to-purple-500 text-white">
                    <tr>
                      <th className="px-4 py-3 border-b text-left font-semibold text-sm">Appendix</th>
                      <th className="px-4 py-3 border-b text-left font-semibold text-sm">Subject</th>
                      <th className="px-4 py-3 border-b text-left font-semibold text-sm">Description</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Signing Authority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">
                        <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-semibold">Appendix &lsquo;A&rsquo;</span>
                      </td>
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Working of Level Crossing Gates</td>
                <td className="px-4 py-3 border-b text-gray-700">
                        <div className="space-y-2">
                          <p><strong>Interlocked LC gates:</strong> To be jointly signed by DSTE, DOM & DEN</p>
                          <p><strong>Non-interlocked LC gates:</strong> To be jointly signed by DEN & DOM</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <div className="space-y-1">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold block">DSTE</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold block">DOM</span>
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold block">DEN</span>
                        </div>
                </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">
                        <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-semibold">Appendix &lsquo;B&rsquo;</span>
                      </td>
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">System of Signaling and Interlocking</td>
                <td className="px-4 py-3 border-b text-gray-700">
                        System of signaling and interlocking and communication arrangements at the station
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">DSTE</span>
                </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">
                        <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-semibold">Appendix &lsquo;C&rsquo;</span>
                      </td>
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Anti Collision Device</td>
                <td className="px-4 py-3 border-b text-gray-700">
                        Anti Collision Device (Raksha Kavach) - as and when brought into force
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">To be specified</span>
                </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">
                        <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-semibold">Appendix &lsquo;D&rsquo;</span>
                      </td>
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Duties of Train Passing Staff</td>
                <td className="px-4 py-3 border-b text-gray-700">
                        Duties of train passing staff and staff in each shift
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">DOM</span>
                </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">
                        <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-semibold">Appendix &lsquo;E&rsquo;</span>
                      </td>
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Essential Equipment</td>
                <td className="px-4 py-3 border-b text-gray-700">
                        List of essential equipment provided at the station
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">DOM</span>
                </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">
                        <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-semibold">Appendix &lsquo;F&rsquo;</span>
                      </td>
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">DK Stations and Halts</td>
                <td className="px-4 py-3 border-b text-gray-700">
                        Rules for working of DK stations, Halts, IBH, IBS and outlying sidings
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <div className="space-y-1">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold block">DOM</span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold block">DSTE</span>
                        </div>
                </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">
                        <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-semibold">Appendix &lsquo;G&rsquo;</span>
                </td>
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Electrified Sections</td>
                <td className="px-4 py-3 border-b text-gray-700">
                        Rules for working trains in electrified sections
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <div className="space-y-1">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold block">Sr.DOM / DOM</span>
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold block">Sr.DEE(TRD) / DEE(TRD)</span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold block">Sr.DSTE / DSTE</span>
                        </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

              <div className="mt-6 bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>All appendices must be properly signed by the designated authorities.</li>
                  <li>Joint signing is required for certain appendices involving multiple departments.</li>
                  <li>These rules are essential for safe and efficient station operations.</li>
                  <li>Regular updates and reviews of these appendices are mandatory.</li>
                </ul>
              </div>

              <div className="mt-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Authority Abbreviations:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div><strong>DSTE:</strong> Divisional Signal & Telecommunication Engineer</div>
                  <div><strong>DOM:</strong> Divisional Operations Manager</div>
                  <div><strong>DEN:</strong> Divisional Engineer</div>
                  <div><strong>DEE(TRD):</strong> Divisional Electrical Engineer (Traction)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Section 6: Operating Forms */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <button 
            onClick={() => toggleSection('operatingForms')}
            className="w-full p-6 text-left bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-between"
          >
            <h2 className="text-2xl font-semibold">Appendix XV - Operating Forms</h2>
            <div className="flex items-center">
              <span className="mr-2 text-sm">{expandedSections.operatingForms ? 'Hide' : 'Show'}</span>
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedSections.operatingForms ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div className={`transition-all duration-500 ease-in-out ${expandedSections.operatingForms ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="p-8">
              <div className="bg-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Railway Operating Forms and Authorities</h3>
                <p className="text-gray-700 mb-4">
                  The following table lists various operating forms used in railway operations, their colors, and form numbers for easy reference.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                  <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <tr>
                      <th className="px-4 py-3 border-b text-left font-semibold text-sm">S.No.</th>
                      <th className="px-4 py-3 border-b text-left font-semibold text-sm">Description</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Colour</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Form Number</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">1</td>
                      <td className="px-4 py-3 border-b text-gray-700">Signal & Telecommunication Disconnection / Reconnection Notice</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-black text-white px-3 py-1 rounded text-sm font-semibold">Black</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">S&T (T/351)</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">2</td>
                      <td className="px-4 py-3 border-b text-gray-700">Advance authority to pass defective signals</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Blue</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/369(1)</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">3</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority to pass signals at &lsquo;on&rsquo; or defective position</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Blue</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/369 (3b)</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">4</td>
                      <td className="px-4 py-3 border-b text-gray-700">Caution Order</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Green</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/409</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">5</td>
                      <td className="px-4 py-3 border-b text-gray-700">&lsquo;NIL&rsquo; Caution Order</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Green</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/A 409</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">6</td>
                      <td className="px-4 py-3 border-b text-gray-700">Train Examination Advice/Report</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-black text-white px-3 py-1 rounded text-sm font-semibold">Black</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/431</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">7</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority to proceed for material train (Return to originating station)</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Blue</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/462</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">8</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority to proceed for material train (Proceed to next station)</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Blue</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/A 462</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">9</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority to proceed for track machine (Return to originating station)</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Blue</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/465</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">10</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority to proceed for track machine (Proceed to next station)</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Blue</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/A 465</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">11</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority to receive a train on an obstructed line</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Blue</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/509</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">12</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority to receive a train on to a non-signalled line</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Blue</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/510</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">13</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority to start from a non-signaled line</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Blue</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/511</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">14</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority to start from a line with common Starter signal</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Blue</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/512</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">15</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority to proceed for relief engine/train into an occupied block section</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Red</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/A 602</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">16</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority for opening communication during total interruption of communication on single line section</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Red</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/B 602</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">17</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority for working of trains during total interruption of communication on double line section</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Red</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/C 602</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">18</td>
                      <td className="px-4 py-3 border-b text-gray-700">Authority for temporary single line working on double line section</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Red</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/D 602</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">19</td>
                      <td className="px-4 py-3 border-b text-gray-700">Line Clear enquiry message asking Line Clear for despatch of trains during total failure of communication on single line section</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Red</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/E 602</td>
                    </tr>

                    <tr className="even:bg-gray-50 hover:bg-purple-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">20</td>
                      <td className="px-4 py-3 border-b text-gray-700">Conditional Line Clear reply message</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Red</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center font-semibold">T/F 602</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Forms are color-coded based on their purpose and urgency.</li>
                  <li>Red forms indicate emergency or special circumstances.</li>
                  <li>Blue forms are for regular operational procedures.</li>
                  <li>Green forms are for caution orders and safety instructions.</li>
                  <li>Black forms are for reports, notices, and documentation.</li>
                </ul>
              </div>

              <div className="mt-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Form Categories:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded mr-2 text-xs">Red Forms</span>
                    <span>Emergency/Special</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 text-xs">Blue Forms</span>
                    <span>Regular Operations</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2 text-xs">Green Forms</span>
                    <span>Caution Orders</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-black text-white px-2 py-1 rounded mr-2 text-xs">Black Forms</span>
                    <span>Reports/Notices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Section 7: Standards of Interlocking */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <button 
            onClick={() => toggleSection('standardsOfInterlocking')}
            className="w-full p-6 text-left bg-gradient-to-r from-lime-500 to-green-500 text-white hover:from-lime-600 hover:to-green-600 transition-all duration-300 flex items-center justify-between"
          >
            <h2 className="text-2xl font-semibold">Standards of Interlocking</h2>
            <div className="flex items-center">
              <span className="mr-2 text-sm">{expandedSections.standardsOfInterlocking ? 'Hide' : 'Show'}</span>
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedSections.standardsOfInterlocking ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          <div className={`transition-all duration-500 ease-in-out ${expandedSections.standardsOfInterlocking ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="p-8">
              <div className="bg-lime-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-lime-800 mb-4">Interlocking Standards and Safety Features</h3>
                <p className="text-gray-700 mb-4">
                  Depending upon the standards of safety devices provided at the stations, in conformity to the speed factor, there are four standards of interlocking, namely Std I (R), Std II (R), Std III (R) and Std IV (R). The signal equipment, the manner of locking facing points and operation of points and signals differ in the different standards of interlocking.
                </p>
              </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                  <thead className="bg-gradient-to-r from-lime-500 to-green-500 text-white">
                    <tr>
                      <th className="px-4 py-3 border-b text-left font-semibold text-sm">S.No.</th>
                      <th className="px-4 py-3 border-b text-left font-semibold text-sm">Item</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Std. I (R)</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Std. II (R)</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Std. III (R)</th>
                      <th className="px-4 py-3 border-b text-center font-semibold text-sm">Std. IV (R)</th>
              </tr>
            </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td colSpan={6} className="px-4 py-3 font-bold text-gray-800 text-center">
                        ALLOWABLE SPEED (KMPH)
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">-</td>
                      <td className="px-4 py-3 border-b text-gray-700 font-semibold">Speed Limit</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Upto 50</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-semibold">Upto 110</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-semibold">Upto 140</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Upto 160</span>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium text-gray-900">1</td>
                      <td className="px-4 py-3 border-b text-gray-700">Isolation</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Not compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Compulsory</span>
                      </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium text-gray-900">2</td>
                      <td className="px-4 py-3 border-b text-gray-700">Two Aspect (TAS) semaphore/Multi Aspect Signalling</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">TAS/MAS</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">TAS/MAS</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">MAS</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">MAS</span>
                      </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium text-gray-900">3</td>
                      <td className="px-4 py-3 border-b text-gray-700">Double Distant</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Not compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-semibold">Desirable</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Compulsory</span>
                      </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium text-gray-900">4</td>
                      <td className="px-4 py-3 border-b text-gray-700">Point operation</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-semibold">Mechanical</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Mechanical/Electrical</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Mechanical/Electrical</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Electrical</span>
                      </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium text-gray-900">5</td>
                      <td className="px-4 py-3 border-b text-gray-700">Point locking</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-semibold">Key/Facing Point/hand plunger</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Facing Point locking with point machine</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Facing Point locking with point machine</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Clamp type direct locking is desirable</span>
                      </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium text-gray-900">6</td>
                      <td className="px-4 py-3 border-b text-gray-700">Point detection</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Mechanical/Electrical</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Mechanical/Electrical</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Mechanical/Electrical</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Electrical</span>
                      </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium text-gray-900">7</td>
                      <td className="px-4 py-3 border-b text-gray-700">Lock detection</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Not compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Compulsory</span>
                      </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium text-gray-900">8</td>
                      <td className="px-4 py-3 border-b text-gray-700">Interlocking</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-semibold">Key/Mechanical</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Mechanical/Electrical/Electronic</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Mechanical/Electrical/Electronic</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Electrical/Electronic</span>
                      </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium text-gray-900">9</td>
                      <td className="px-4 py-3 border-b text-gray-700">Track circuiting</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Not compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Mechanical – main line Electrical/Electronic – all running lines</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">All running lines</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">All running lines</span>
                      </td>
              </tr>

                    <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium text-gray-900">10</td>
                      <td className="px-4 py-3 border-b text-gray-700">Block working</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-semibold">Token</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Token/SGE</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">SGE/Track circuit</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">SGE/Track Circuit</span>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b font-medium text-gray-900">11</td>
                      <td className="px-4 py-3 border-b text-gray-700">Preventing signal passing at danger</td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Not Compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Not Compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">Not compulsory</span>
                      </td>
                      <td className="px-4 py-3 border-b text-center">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-semibold">Desirable</span>
                      </td>
              </tr>
            </tbody>
          </table>
        </div>

              <div className="mt-6 bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Higher standards provide better safety features and allow higher speeds.</li>
                  <li>Std I (R) is the basic standard suitable for low-speed operations.</li>
                  <li>Std IV (R) is the highest standard with maximum safety features.</li>
                  <li>All standards must comply with railway safety regulations.</li>
                </ul>
              </div>

              <div className="mt-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Standard Requirements Legend:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded mr-2 text-xs">Not compulsory</span>
                    <span>Basic requirement</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded mr-2 text-xs">Desirable</span>
                    <span>Recommended</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2 text-xs">Compulsory</span>
                    <span>Mandatory</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 text-xs">Multiple options</span>
                    <span>Various systems</span>
                  </div>
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