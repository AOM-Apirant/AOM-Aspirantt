"use client"

import React from 'react'
import GSRChapters from '@/components/g&sr/G&SRChapters'

interface SectionCardProps {
  title: string
  accentGradient: string
  panelGradient: string
  borderColor: string
  icon: React.ReactNode
  content: string[]
}

const SectionCard = ({
  title,
  accentGradient,
  panelGradient,
  borderColor,
  icon,
  content,
}: SectionCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
      <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center lg:text-left">
        <span className={`bg-gradient-to-r ${accentGradient} lg:p-4 p-2 rounded-full shadow-lg`}>
          {icon}
        </span>
        <span className="whitespace-pre-line">{title}</span>
      </h2>
      <div
        className={`bg-gradient-to-br ${panelGradient} backdrop-blur-lg rounded-xl p-6 shadow-lg border ${borderColor} hover:shadow-xl transition-all duration-300`}
      >
        {content.map((paragraph, index) => (
          <p
            key={`${title}-${index}`}
            className="text-gray-200 lg:text-lg text-base leading-relaxed whitespace-pre-line mb-4 last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

const GeneralSubsidiaryRules = () => {
  const coverText = `SOUTH CENTRAL RAILWAY
GENERAL RULES
FOR
INDIAN RAILWAYS
WITH
SUBSIDIARY RULES AND SPECIAL INSTRUCTIONS
OF
SOUTH CENTRAL RAILWAY
2020
(Including and upto AS 21)
FOR OFFICIAL USE ONLY`

  const resolutionContent = [
    `MINISTRY OF RAILWAYS
(RAILWAY BOARD)
No. 69-RR/4
DATED THE 11TH FEBRUARY 1976
RESOLUTION
General Rules for Indian Railways (Open Lines) 1976 administered by the
Government and for the time being used for the public carriage of passengers, animals or
goods.`,
    `The considerable advance made in recent years in methods of signalling and
interlocking, modes of traction and introduction of new types of equipment necessitated a
revision of the General Rules, which had been revised last in 1929, for working Open Lines of
Railways in India. The revision of these rules was also advocated by the Railway Accidents
Committee, 1962 and the Railway Accidents Inquiry Committee 1968, who desired that the
revision of the Rules should be consistent not only with the conditions obtaining at present
but likely to obtain in the foreseeable future, and emphasized the need for keeping the basic
complexion of rules intact while at the same time providing for technological changes in
recent years.`,
    `2. For this purpose, a Committee composed of officers selected from the Traffic and
Signal Departments was appointed by the Railway Board in 1968. The Committee submitted
a set of draft rules for consideration by the Board in February, 1970. The Commission of
Railway Safety, whose comments were also invited did not favour the adoption of these draft
rules which had proposed the abolition of certain existing fundamental concepts such as
classification of Stations, minimum equipment of signals for each class of Station etc., in the
Annual Report for 1971-72, the Commission stated that a wholesale revision and rearrangement
of the rules, which formed the basis of train working and safety of operations for
over hundred years and which were ingrained in the minds of thousands of Railway staff
would not be desirable. Accordingly, the commission conveyed to the Railway Board its
inability to agree to the adoption of the new General Rules as drafted.`,
    `3. In consideration of the strong views expressed by the Commission of Railway
Safety and the positive recommendations of the Railway Accidents Committee, 1962 and the
Railway Accidents Inquiry Committee, 1968, Member Traffic, Railway Board, decided in
September, 1972 that the revision of the existing General Rules should be so undertaken as to
be in consonance with these views and to cover such aspects only of the existing rules as
require modification in the light of the technological changes or where certain existing rules
have outlived their use. A fresh revision of the General Rules was accordingly taken by the
Safety Directorate in consultation with other Directorates of the Railway Board.`,
    `4. A provisional issue of the revised General Rules was circulated to Railway
Administrations, the Research, Designs and Standards Organisation, the Commission of
Railway Safety, Railway Staff College, Vadodara, Indian Railways Institute of Signal
Engineering and Telecommunications, Secunderabad, Indian Railways Institute of Civil
Engineering, Pune, Indian Railway Institute of Mechanical and Electrical Engineering,
Jamalpur; etc., for criticism and suggestions under Government of India, Ministry of Railways
(Railway Board) letter No.68-RR/2 Vol.V, dated 25.07.1974.`,
    `5. The exhaustive views and comments received from the Railway Administrations, the
Commission of Railway Safety, other Railway Institutions and the Ministry of Law, having
been considered by Member Traffic, Railway Board, in consultation with the concerned
Directorates, a complete revised set of General Rules for Railways administered by the
Government have now been framed, sanctioned and issued by the Central Government with
Notification No.69-RR/4 of this day’s date to be brought into use on such date as the Central
Government may, by notification in the Official Gazette, appoint.`,
    `6. The Central Government desire that the said rules may be brought to the notice of
the Administrations of the several Railways, not administered by the Government and that the
Heads of Railway administrations of such railways may be invited to submit a formal
application for the adoption of the rules, with such modifications (if any) as may be
considered necessary in each case.`,
    `Order: Ordered that this Resolution with its enclosures, be published under a
Notification in the Official Gazette as required by Section 47 of the Indian Railways Act,
1890 (9 of 1890) and that a copy thereof be kept open for inspection at Railway stations as
directed by sub-section (4) of the same section, as also that a copy of this Resolution and of its
enclosures be communicated to the Governments, Administrations and Officers, noted below
for information.`,
    `B.M.KAUL
Member Traffic, Railway Board and
Ex-Officio Secretary to the Government of India`,
  ]

  const prefaceContent = [
    `The 2020 edition of South Central Railway’s General and Subsidiary rules contains:-`,
    ` The General Rules for Open Lines of the Railways 1976 have been framed under Section 198 of the Railways Act 1989 by the Government of India, including amendments to GRs issued by the Government of India till date.`,
    ` The Subsidiary Rules and the Special Instructions of the South Central Railway are issued by the Principal Chief Operations Manager (PCOM), the Authorised Officer, on the authority of GR 1.02 (5).`,
    ` This New General and Subsidiary Rules - 2020 edition includes page replacements upto Amendment Slip no. 37 to the SCR G&SR-2008.`,
    ` No order contained in this book shall be varied, superseded or suspended, except under the express authority of the Authorised Officer (PCOM)/S.C.Rly in writing.`,
    ` All orders, and instructions issued in this connection shall be considered arising out of official duty and shall be communicated to such of the staff to whom they concern.`,
    ` Whenever necessary, the General Rules are amended by the Government of India. Whereas the Subsidiary Rules and Special Instructions are either issued or amended by the Authorised Officer.`,
    ` Every Railway Servant is bound, under Section 175 of the Railways Act 1989, by the General Rules, the Subsidiary Rules and Special Instructions. Therefore, they must acquaint themselves thoroughly with all the General Rules, Subsidiary Rules and Special Instructions.`,
    ` The General Rules are printed in bold letters, while the Subsidiary Rules are printed in ordinary and smaller letters, below the General Rules, with the same numbers of the General Rules which they refer to. Special Instructions relating to some topics are grouped under Appendices. Subsidiary Rules and Special Instructions shall be read in conjunction with the General Rules.`,
    ` Special Instructions relating to Block Working are issued separately in Block Working Manuals.`,
    ` This book is updated up to Amendment Slip No. 37, dated 17.09.2020 to the 2008 edition. Further Amendments to this new book will be issued with fresh serial number. Once an amendment is issued, replacements to relevant pages will be issued duly incorporating the amended portion in the pages, for the convenience of the staff. It is the responsibility of the staff, whoever supplied with this book to keep them updated, duly replacing the pages and entering the particulars of Amendments in the “Register of Amendment Slips”.`,
    ` This book is meant for official use only.`,
    ` It is the property of the Railway Administration, and it shall be returned by the staff on leaving the service.`,
    ` This book supersedes all previous General and Subsidiary Rules Books and comes into force with immediate effect.`,
    `Secunderabad (K. SIVA PRASAD)
Dt. 05.11.2020. PRINCIPAL CHIEF OPERATIONS MANAGER
SOUTH CENTRAL RAILWAY`,
  ]

  const forewordContent = [
    `This New edition of South Central Railway’s General and Subsidiary Rules - 2020 Book includes page replacements upto Amendment Slip no. 37 to the SCR G&SR-2008.`,
    `It is noteworthy that South Central Railway is reviewing SRs as and when required, based on the field experiences and suggestions received from various quarters and issuing Amendment Slips accordingly.`,
    `The new edition is brought-out after reviewing the SRs in conformity with GRs and deleting rules pertaining to obsolete systems.`,
    `Though the rules are being reviewed based on the suggestions and experiences and amended and page replacements are being given to give a neat, bringing out the new edition is warranted since page replacements over the years for several amendments has led to space and font adjustments making the book congested and clumsy.`,
    `The new edition of the SCR’s G&SR is brought out in A4 size and with 12 Arial bold font for General Rules and 11 Arial normal font for Subsidiary Rules with suitable spaces between rules to make reader friendly. The use of A4 size paper will also make it easy for issuing of page replacements.`,
    `The Rules Section would like to express its gratitude to Sri K. Siva Prasad, PCOM for budget allocation and valuable suggestions in bringing out the new edition of the G&SR.`,
    `The Rules Section is highly indebted to the excellent guidance and support given by Sri N. Madhusudana Rao, former PCOM in bringing out this new edition of G&SR.`,
    `The Rules Section would also like to express its gratitude to Sri K. V. Rao, former CTM/G&PP for his sustained support and thorough scrutiny of the book in all aspects and making corrections in bringing out the book to the lucid form.`,
    `The Rules Section would also like to extend a word of appreciation to Sri A. Murali Krishna, TI/Rules, for his enthusiastic hard work, unique skills and enduring efforts in updating, page and paragraph settings to make the book reader friendly.`,
    `Rules Section
PCOM’s Office
Rail Nilayam
Secunderabad (A. J. RATHOD)
Dt. 05.11.2020. CHIEF TRAFFIC MANAGER
(General and Perspective Planning)
SOUTH CENTRAL RAILWAY`,
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4m6 6H2" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in whitespace-pre-line leading-tight">
              {coverText}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <SectionCard
              title="GOVERNMENT OF INDIA"
              accentGradient="from-sky-500 to-indigo-500"
              panelGradient="from-sky-500/20 via-indigo-500/10 to-slate-900/60"
              borderColor="border-sky-400/30"
              icon={
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              content={resolutionContent}
            />

            <SectionCard
              title="PREFACE"
              accentGradient="from-emerald-500 to-teal-500"
              panelGradient="from-emerald-500/20 via-teal-500/10 to-slate-900/60"
              borderColor="border-emerald-400/30"
              icon={
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              }
              content={prefaceContent}
            />

            <SectionCard
              title="FOREWORD"
              accentGradient="from-purple-500 to-pink-500"
              panelGradient="from-purple-500/20 via-pink-500/10 to-slate-900/60"
              borderColor="border-purple-400/30"
              icon={
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              content={forewordContent}
            />
          </div>
          <GSRChapters />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default GeneralSubsidiaryRules