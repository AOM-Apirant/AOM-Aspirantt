import React from 'react'

const ESS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Employee Self Service & Internal Applications (ESS)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital platform for CRIS employees to perform tasks online efficiently, securely, and user-friendly manner
          </p>
        </div>

        {/* Challenges Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-red-100 text-red-600 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </span>
            Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To reduce time consumption in movement, processing and follow-ups of files
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To enable immediate tracking of bills status, project financial status & other enquiries
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To minimize the consumption of paper in office
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To ensure accountability for all actions by maintaining an audit trail
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                To establish an effective, reliable and user-friendly in-house IT system
              </li>
            </ul>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Improve efficiency and decision-making ability through digitalization</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Provide effective online tracking mechanism for files/documents</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Enhance decision-making capabilities with extensive search</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Eliminate wear and tear associated with manual files</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Facilitate CRIS employees in performing tasks online efficiently</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Applications Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* CRIS Payroll Application */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </span>
              CRIS Payroll Application
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Maintaining employee&apos;s & other master information
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Handling of transactional data for salary processing
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Processing of salary using Master and Transactional data
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Generation of various statutory reports & enquiries
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Calculations of Arrears, Payment of Lease accommodations
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Maintain Earning, saving for Income Tax Calculations
              </li>
            </ul>
          </div>

          {/* Financial Accounting System */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              Financial Accounting System
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Registration of all types of bills (Stores, Out Party, Salary Bills)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Passing of employee&apos;s personal claim-bills (Tiffin, NDA, Tel-BB)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Clubbing of multiple bills in Cash-Abstract for payment
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Printing of Cheque and EFT payment details for bank
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Accounting reports, MIS reports and enquiries
              </li>
            </ul>
          </div>
        </div>

        {/* CRIS ESS Application Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            CRIS ESS Application Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">ESS Dashboard - Employee info, messages, notices</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Leave Module - Approvals and balance maintenance</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Personal Bill claims & Approval</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Tour Programs, Advances & Claim Expenses</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Leased Accommodation Approvals</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Conference Hall Booking Requests</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">File Movement Tracking</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">CRIS Assets Management</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Outsourced Staff Info Management</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Telephone & Mobile Bill Entry</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Taxi Bill Entry & Payment</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Post-Retirement Medical Allowance</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Organisational Documents</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">Survey & Registration</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">ID-Card Request & Printing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional ESS Features */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Additional Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-sm">
              <li>• Bio-Data Module - Verification of qualification, family & address details</li>
              <li>• Send SMSs & Display Messages to targeted recipients</li>
              <li>• No-Dues Module - Clearance from different groups</li>
              <li>• Self-declaration for VPF, House Rent, I. Tax related</li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li>• Enquiries/Downloads - Salary slips, Income Tax schedules, Form 16</li>
              <li>• Employee birthday notifications</li>
              <li>• Office orders and notices display</li>
              <li>• Links to other important applications</li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* File Tracking Benefits */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              File Tracking
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Easy tracking with reports and search engine</li>
              <li>• Saves time and effort</li>
              <li>• Effective utilization of Human Resources</li>
              <li>• Central repository for information access</li>
            </ul>
          </div>

          {/* Decision Making Benefits */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Decision Making
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Extensive search capabilities</li>
              <li>• Instant access (24x7) to information</li>
              <li>• Reduces process completion time</li>
              <li>• Increases employee efficiency</li>
            </ul>
          </div>

          {/* Environment Friendly Benefits */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Environment Friendly
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Considerable reduction in paper usage</li>
              <li>• Major step towards green environment</li>
              <li>• Sustainable office practices</li>
              <li>• Digital transformation benefits</li>
            </ul>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Milestones Achieved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                900+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ESS Users</h3>
              <p className="text-gray-600">Active users across CRIS</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                7500+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Salary Transactions (per year)</h3>
              <p className="text-gray-600">Annual salary-related transactions processed</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                12500+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Leave Applications (per year)</h3>
              <p className="text-gray-600">Annual leave application transactions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ESS