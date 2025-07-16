import React from 'react'

const UTSApplication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="lg:text-4xl text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Unreserved Ticketing System (UTS)
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Challenges Section */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-red-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-red-100 text-red-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </span>
            Challenges
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>24×7 booking facility for unreserved train journey tickets.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>To deliver ticketing at the remote corners of the country.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>To provide a ticketing system for masses (small distance travellers, daily commuters, suburban passengers, etc).</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>To enable Railways in prompt and speedy issuance of tickets.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>A challenging task to facilitate the ticketing needs of Unreserved journey passengers (Twenty one million approx. daily) on Indian Railways network.</p>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-green-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Goals
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>To provide a hassle free and convenient way of ticket issuance mechanism with added transparency and accountability.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>To provide a system having Centralised Change Management System and Centralised Accounting System.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>To adopt leading technologies and serve commuters with quick ticketing experience resulting in queue size reductions.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>To promote Digital India and Cashless Economy through Mobile ticketing, Kiosks, integration of e-wallets, PoS(Point of Sale) machines at Counters, Automatic Ticket Vending Machine(ATVM), Currency Operated Ticket Vending Machine(CoTVM), etc.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>The one stop objective of UTS system is to exploit the latest technologies and alleviate the plight of common man who stands in long queues for ticket bookings.</p>
            </div>
          </div>
        </div>

        {/* UTS at Railway Counters */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-blue-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </span>
            UTS at Railway Counters
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Started as a pilot project in August 2002 on Northern Railway</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Precursor was Self Printing Ticket Machines (SPTMs) - a standalone system phased out with UTS arrival</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Central hardware architecture supported with station level servers for business continuity during network failures</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Booking office operators dispensed tickets using dumb terminals and dot matrix printers</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Improved network reliability led to newer design with thin clients for operators</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Zonal Railways responsible for manning UTS counters and running services</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>CRIS maintains application and ensures business continuity at system level</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Nearly 100 ticket types sold based on class of travel, concessions, and season tickets</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Business rules and fares determined by Ministry of Railways policies</p>
            </div>
          </div>
        </div>

        {/* Mobile Ticketing */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-purple-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </span>
            Mobile Ticketing
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Launched on 22nd April 2015 with paperless ticket option for Android and Windows smartphones</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>iOS app launched on 8th February 2018</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>App named &quot;UTS&quot; available on Google Play Store, Windows Phone Store, and Apple App Store</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Website www.utsonmobile.indianrail.gov.in for registration and R-wallet creation/recharge</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Payment options: Credit/debit cards and Netbanking</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Integrated e-wallets: Paytm, Mobikwik, and Freecharge</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Both paperless and paper tickets can be booked</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Railway tracks and surrounding areas are Geo-Fenced to prevent booking in Railway premises</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Prevents revenue leakage by stopping ticket booking when TTE/TC is seen at platform or in train</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Mobile application proliferated at Pan India level</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Journey, platform, and season tickets can be booked through the app</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Inter-zonal mobile ticketing enabled in all zones</p>
            </div>
          </div>
        </div>

        {/* CoTVM */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-orange-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            CoTVM
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Cash-Coin & Smart Card operated ticket vending machine concept evolved to prevent queue standing</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Promotes self-service based quick dispensing of tickets</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Operational across 9 Zonal Railways: NR, CR, WR, SR, SWR, SCR, ER, SER, and SECR</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Unmanned kiosk operated by passengers themselves</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Features: Issuing Journey tickets, Platform tickets, and renewing Season tickets</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Can recharge Smart cards used in ATVMs (Automatic Ticket Vending Machines)</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Payment forms: Coins, bank notes, and smart cards</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Accepts specific coins: Rs.5 and Rs.10</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Accepts bank notes: Rs.5, Rs.10, Rs.20, Rs.50, and Rs.100 of Gandhi series</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Does not accept currency notes with Ashoka Chakra Emblem</p>
            </div>
          </div>
        </div>

        {/* JTBS */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-teal-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-teal-100 text-teal-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            JTBS
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Jan Sadharan Ticket Booking Sewa (JTBS) scheme launched in January 2007</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Ticketing services for unreserved sector outsourced as per Railway Board&apos;s policy</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Outlets provide self-employment opportunities</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Operators offered nominal commission per passenger</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Terminals at these counters connect to central servers for ticket issuance</p>
            </div>
          </div>
        </div>

        {/* ATVM */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-indigo-500">
            <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-indigo-100 text-indigo-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </span>
            ATVM
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Automatic Ticket Vending Machines (ATVM) operated using smart cards and touch screens</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>First introduced in Mumbai in October 2007</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Success led to proliferation to other metropolitan cities</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Currently commissioned in: Chennai, Secunderabad, Delhi, and Kolkata</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Operational across 14 Zonal Railways: NR, NCR, NWR, NER, CR, WR, WCR, SR, SWR, SCR, ER, SER, ECOR, and SECR</p>
            </div>
          </div>
        </div>

        {/* YTSK */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-pink-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-pink-100 text-pink-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </span>
            YTSK
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Yatri Ticket Suvidha Kendra (YTSK) scheme launched in August 2014</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Ticketing services for unreserved sector outsourced as per Railway Board&apos;s policy</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Outlets provide self-employment opportunities</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Operators offered commission per passenger</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Terminals at these counters connect to central servers for ticket issuance</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg py-8 pl-8 pr-2 mb-8 border-l-4 border-emerald-500">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-emerald-100 text-emerald-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Convenience</h3>
                <p className="text-gray-700 text-sm">Customer convenience/choice for purchase of ticket through different modes of Sale, reducing booking counters at stations</p>
              </div>
              
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Self Employment</h3>
                <p className="text-gray-700 text-sm">Jan Sadharan Ticket Booking Sewa (JTBS) & YTSK (Yatri Ticket Suvidha Kendra) scheme. These outlets provide self-employment opportunities and the operators are offered a commission per passenger.</p>
              </div>
              
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Scheme for agents</h3>
                <p className="text-gray-700 text-sm">A scheme has been launched for outside parties/agents namely Station Booking Agents (STBA) who work over UTS counters in Railway premises and get a commission based on collections.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Digital Payment</h3>
                <p className="text-gray-700 text-sm">UTS on Mobile Project has been launched for Android, Windows and iOS phones. Payments can be done through credit/debit card and Netbanking. Various e-wallets have been integrated with the App.</p>
              </div>
              
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Mobile Application</h3>
                <p className="text-gray-700 text-sm">The mobile application covers 9120 stations (6333 stations as source). Appx. 2.34 lakhs tickets are booked daily, covering appx. 14.21 lakh passenger travel & generating revenue of appx. Rs 1.33 Crore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="lg:text-3xl text-2xl font-bold mb-8 text-center">Milestones</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="lg:text-3xl text-xl font-bold mb-2">8M+</div>
              <div className="text-blue-100">Tickets Sale per day</div>
            </div>
            
            <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="lg:text-3xl text-xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Passenger Earning per day (in Millions)</div>
            </div>
            
            <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="lg:text-3xl text-xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Passengers Travelled per day (in Millions)</div>
            </div>
            
            <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="lg:text-3xl text-xl font-bold mb-2">12K+</div>
              <div className="text-blue-100">Point of Sales (PoS) UTS Counters</div>
            </div>
            
            <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="lg:text-3xl text-xl font-bold mb-2">3K+</div>
              <div className="text-blue-100">Automatic Ticket Vending Machines</div>
            </div>
            
            <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="lg:text-3xl text-xl font-bold mb-2">300+</div>
              <div className="text-blue-100">Cash-Coin & Smart Card operated Ticket Machine</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UTSApplication