'use client'

import React from 'react'
import { bellCodes } from '@/assets/bwm'  

const BellCodes = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/40 via-blue-900/30 to-slate-900 relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto py-12 px-4'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-2xl'>
            <svg className='w-10 h-10 text-white' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd' />
            </svg>
          </div>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mb-6 animate-fade-in'>
            Bell Codes
          </h1>
          <p className='text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-90'>
            For the signalling of trains, the prescribed code of bell signals as detailed below, shall be used, and a copy thereof shall be exhibited in each block station near the place of operation of the block working equipment
          </p>
        </div>

        {/* Bell Codes Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16'>
          {bellCodes.map((code, index) => (
            <div 
              key={code.id} 
              className='group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden animate-fade-in'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Background Glow */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              
              {/* Bell Icon */}
              <div className='relative z-10 mb-4 flex items-center justify-between'>
                <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
                  <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
                  </svg>
                </div>
                <div className='text-right'>
                  <span className='text-xs text-blue-300/60 font-medium'>CODE</span>
                </div>
              </div>
              
              <div className='relative z-10 space-y-4'>
                <div>
                  <h2 className='text-2xl font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors'>
                    {code.code}
                  </h2>
                </div>
                
                <div className='space-y-4'>
                  <div className='bg-white/5 rounded-lg p-4 border border-white/10'>
                    <h3 className='text-sm font-semibold text-blue-200 mb-2 flex items-center'>
                      <span className='w-2 h-2 bg-blue-400 rounded-full mr-2'></span>
                      Indication
                    </h3>
                    <p className='text-sm text-gray-300 leading-relaxed'>
                      {code.indication}
                    </p>
                  </div>
                  
                  <div className='bg-white/5 rounded-lg p-4 border border-white/10'>
                    <h3 className='text-sm font-semibold text-purple-200 mb-2 flex items-center'>
                      <span className='w-2 h-2 bg-purple-400 rounded-full mr-2'></span>
                      Signalled
                    </h3>
                    <p className='text-sm text-gray-300 leading-relaxed'>
                      {code.signalled}
                    </p>
                  </div>
                  
                  <div className='bg-white/5 rounded-lg p-4 border border-white/10'>
                    <h3 className='text-sm font-semibold text-cyan-200 mb-2 flex items-center'>
                      <span className='w-2 h-2 bg-cyan-400 rounded-full mr-2'></span>
                      Acknowledged
                    </h3>
                    <p className='text-sm text-gray-300 leading-relaxed'>
                      {code.acknowledged}
                    </p>
                  </div>
                </div>
              </div>
                </div>
            ))}
        </div>

        {/* Notes Section */}
        <div className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl shadow-blue-500/10'>
          <div className='flex items-center mb-8'>
            <div className='w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg mr-4'>
              <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
              </svg>
            </div>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'>
              Important Notes
            </h2>
          </div>
          
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                <h3 className='text-lg font-semibold text-yellow-200 mb-3 flex items-center'>
                  <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
                  </svg>
                  Signal Notation
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  <span className='font-semibold text-yellow-300'>Note:</span> (1) &apos;0&apos; indicates a stroke or a beat and &apos;–&apos; indicates a pause
                </p>
              </div>
              
              <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                <h3 className='text-lg font-semibold text-purple-200 mb-3 flex items-center'>
                  <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
                  </svg>
                  Block Proving Axle Counters
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  (2) Exchange of bell codes under reference numbers 3 and 4 are not required in a section provided with block proving axle counters or track circuit having complete track circuiting of station yard excluding non-running lines on either end.
                </p>
              </div>
            </div>
            
            <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
              <h3 className='text-lg font-semibold text-cyan-200 mb-4 flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                Acknowledgement of Signals
              </h3>
              <div className='space-y-3'>
                {[
                  'Each signal received shall be acknowledged by sending its authorised acknowledgement.',
                  'No signal shall be acknowledged until it is clearly understood.',
                  'A signal shall not be deemed to be complete until it is acknowledged.',
                  'If the station to which a signal is sent does not reply, the signal shall be repeated at intervals of not less than 20 seconds until reply is received.'
                ].map((text, index) => (
                  <div key={index} className='flex items-start space-x-3'>
                    <div className='w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <span className='text-xs font-bold text-white'>{index + 1}</span>
                    </div>
                    <p className='text-gray-300 leading-relaxed text-sm'>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BellCodes