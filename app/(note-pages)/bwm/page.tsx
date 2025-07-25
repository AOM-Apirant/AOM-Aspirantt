import React from 'react'
import BellCodes from '@/components/bwm/BellCodes'
import { Download } from 'lucide-react'
import Link from 'next/link'

const BlockWorkingManual = () => {
  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      <div className='bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center'>
            <h1 className='lg:text-5xl text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Block Working Manual
            </h1>
            <p className='lg:text-xl text-base text-slate-300 max-w-2xl mx-auto'>
              Essential whistle codes and signals for safe railway operations and effective communication
            </p>
          </div>
        </div>
      </div>

      {/* Bell Codes Section */}
      <BellCodes />

      {/* Download PDF Section */}
      <div className='py-16 bg-gradient-to-r from-slate-800 to-slate-900'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center'>
            <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl border border-blue-500/20'>
              <h2 className='text-3xl font-bold mb-4 text-white'>
                Complete Block Working Manual
              </h2>
              <p className='text-slate-200 mb-8 text-lg max-w-2xl mx-auto'>
                Download the complete BWM document updated up to AS-6 for comprehensive reference and offline study
              </p>
              <Link
                href='/BWM UDATED UPTO AS-6.pdf'
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-blue-200'
              >
                <Download className='w-6 h-6' />
                Download PDF
              </Link>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BlockWorkingManual