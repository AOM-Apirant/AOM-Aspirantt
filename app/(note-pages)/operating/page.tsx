import React from 'react'

import OperatingForms from '@/components/operating/OperatingForms'
import PaperAuthorities from '@/components/operating/PaperAuthorities'
import SpeedRestrictions from '@/components/operating/SpeedRestrictions'
import BellCodes from '@/components/bwm/BellCodes'
import WhistleCodes from '@/components/operating/WhistleCodes'

const Operating = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Operating Department
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Content related to Operating Department
            </p>
          </div>
        </div>
      </div>

      {/* Whistle Codes Section */}
      <WhistleCodes/>

                                

      
{/* Speed of Trains in Different Circumstances */}
        <SpeedRestrictions />





      {/* Operating Forms */}
      <OperatingForms />


{/* Paper Authorities */}
      <PaperAuthorities />


{/* Bell Codes */}
<BellCodes />





    </div>
  )
}

export default Operating