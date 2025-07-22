import React from 'react'
import Interlocking from '@/components/appendix/Interlocking'
import LevelCrossing from '@/components/appendix/LevelCrossing'
import SiemensPanel from '@/components/appendix/SiemensPanel'

const Appendix = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      {/* Hero section */}
      <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Appendix</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
          The following are the topics covered in this appendix:
          </p>
      </div>



        {/* Standards of Interlocking */}
      <Interlocking />



      {/* Classification of Level Crossings */}
      <LevelCrossing />



{/* Siemens Panel */}
<SiemensPanel />







    </div>
  )
}

export default Appendix