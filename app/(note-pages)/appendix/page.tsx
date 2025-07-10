import React from 'react'

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
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Standards of Interlocking</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto mb-6">
          Depending upon the standards of safety devices provided at the stations, in conformity to the speed factor, there are four standards of interlocking, namely Std I (R), Std II (R), Std III (R) and Std IV (R).
          </p>
          {/* Standards Cards */}
          <div className="space-y-6">
            {/* Speed Standards */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Speed Standards</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">Std I (R)</div>
                  <div className="text-sm opacity-90">Upto 50 KMPH</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Std II (R)</div>
                  <div className="text-sm opacity-90">Upto 110 KMPH</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Std III (R)</div>
                  <div className="text-sm opacity-90">Upto 140 KMPH</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Std IV (R)</div>
                  <div className="text-sm opacity-90">Upto 160 KMPH</div>
                </div>
              </div>
            </div>
            {/* Feature Cards */}
            <div className="space-y-4">
              {/* Isolation */}
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3">1. Isolation</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs mt-1">Not compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mt-1">Compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mt-1">Compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mt-1">Compulsory</span>
                  </div>
                </div>
              </div>

              {/* Two Aspect Signalling */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">2. Two Aspect (TAS) semaphore/Multi Aspect Signalling</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <div className="text-sm mt-1">TAS/MAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <div className="text-sm mt-1">TAS/MAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <div className="text-sm mt-1">MAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <div className="text-sm mt-1">MAS</div>
                  </div>
                </div>
              </div>

              {/* Double Distant */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">3. Double Distant</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs mt-1">Not compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs mt-1">Desirable</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mt-1">Compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mt-1">Compulsory</span>
                  </div>
                </div>
              </div>

              {/* Point Operation */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">4. Point Operation</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <div className="text-sm mt-1">Mechanical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <div className="text-sm mt-1">Mechanical/Electrical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <div className="text-sm mt-1">Mechanical/Electrical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <div className="text-sm mt-1">Electrical</div>
                  </div>
                </div>
              </div>

              {/* Point Locking */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">5. Point Locking</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <div className="text-xs mt-1">Key/Facing Point/hand plunger</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <div className="text-xs mt-1">Facing Point locking with point machine</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <div className="text-xs mt-1">Facing Point locking with point machine</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <div className="text-xs mt-1">Clamp type direct locking is desirable</div>
                  </div>
                </div>
              </div>

              {/* Point Detection */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">6. Point Detection</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <div className="text-sm mt-1">Mechanical/Electrical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <div className="text-sm mt-1">Mechanical/Electrical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <div className="text-sm mt-1">Mechanical/Electrical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <div className="text-sm mt-1">Electrical</div>
                  </div>
                </div>
              </div>

              {/* Lock Detection */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">7. Lock Detection</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs mt-1">Not compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mt-1">Compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mt-1">Compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mt-1">Compulsory</span>
                  </div>
                </div>
              </div>

              {/* Interlocking */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">8. Interlocking</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <div className="text-sm mt-1">Key/Mechanical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <div className="text-sm mt-1">Mechanical/Electrical/Electronic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <div className="text-sm mt-1">Mechanical/Electrical/Electronic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <div className="text-sm mt-1">Electrical/Electronic</div>
                  </div>
                </div>
              </div>

              {/* Track Circuiting */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">9. Track Circuiting</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs mt-1">Not compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <div className="text-xs mt-1">Mechanical – main line Electrical/Electronic – all running lines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <div className="text-sm mt-1">All running lines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <div className="text-sm mt-1">All running lines</div>
                  </div>
                </div>
              </div>

              {/* Block Working */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">10. Block Working</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <div className="text-sm mt-1">Token</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <div className="text-sm mt-1">Token/SGE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <div className="text-sm mt-1">SGE/Track circuit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <div className="text-sm mt-1">SGE/Track Circuit</div>
                  </div>
                </div>
              </div>

              {/* Preventing Signal Passing */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">11. Preventing Signal Passing at Danger</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std I (R)</div>
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs mt-1">Not Compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std II (R)</div>
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs mt-1">Not Compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std III (R)</div>
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs mt-1">Not compulsory</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600">Std IV (R)</div>
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs mt-1">Desirable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Instructions for Providing Standards of Interlocking
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">1. Isolation Requirements</h4>
                <p className="text-gray-700 mb-3">
                  Isolation is not compulsory provided that the conditions laid down in GR 4.11 are complied with.
                </p>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">a)</span> No train shall run through an interlocked station at a speed exceeding 50
                    kilometres an hour, or such less speed as may be prescribed by approved special
                    instructions unless the line on which the train is to run has been isolated from all
                    other lines by the setting of points or other approved means, and interlocking is
                    such as to maintain the condition during the passage of the train.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">b)</span> In every case in which trains are permitted to run through on a non-isolated line,
                    all shunting shall be stopped and no vehicle unattached to an engine or not
                    properly secured in accordance with Rule 5.23 may be kept standing on a
                    connected line which is not isolated from the through line.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">2. Double Distant Requirements</h4>
                <p className="text-gray-700">
                  Double Distant is required on sections where goods trains have a braking distance of
                  more than 1 KM.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">3. Central Panel Interlocking</h4>
                <p className="text-gray-700">
                  At stations provided with central panel interlocking [Std III (R) or Std IV (R)] on high
                  density routes, suitable means for verifying complete arrival of train are required.
                </p>
              </div>
            </div>
          </div>

          {/* Note Section */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> The provisions of revised standards of interlocking will only apply to future signalling
                  and interlocking installations. Wherever existing installations do not fulfill these requirements,
                  existing speed of operation may be permitted to continue.
                </p>
              </div>
            </div>
          </div>







      </div>



      {/* Classification of Level Crossings */}
<div className="max-w-4xl mx-auto">
<div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Classification of Level Crossings</h1>
  <p className="text-base md:text-lg text-gray-600 mb-6">
    The classification of level crossings shall be based on the volume of rail and road traffic and
    visibility conditions. The classification of level crossings shall be as under:
  </p>

  {/* Classification Cards */}
  <div className="space-y-6">
    {/* Special Class */}
    <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-red-800 mb-2">1. Special Class</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Criteria:</span> TVUs greater than 50,000
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Interlocking:</span> 
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm ml-2">Compulsory</span>
          </p>
        </div>
        <div className="text-2xl font-bold text-red-600">1</div>
      </div>
    </div>

    {/* A Class */}
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-orange-800 mb-2">2. &apos;A&apos; Class</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Criteria:</span> TVUs between 50,000-30,000 or line capacity utilization 80% (on single line) and number of road vehicles greater than 1000
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Interlocking:</span> 
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm ml-2">Compulsory</span>
          </p>
        </div>
        <div className="text-2xl font-bold text-orange-600">2</div>
      </div>
    </div>

    {/* B Class */}
    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-yellow-800 mb-2">3. &apos;B&apos; Class</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Criteria:</span> TVUs between 30,000 and 20,000 and number of road vehicles are greater than 750
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Interlocking:</span> 
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm ml-2">Not Required</span>
          </p>
        </div>
        <div className="text-2xl font-bold text-yellow-600">3</div>
      </div>
    </div>

    {/* B1 Class */}
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-6 ml-8">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-blue-800 mb-2">&apos;B1&apos; Class</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Criteria:</span> TVUs between 30,000 and 25,000
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Interlocking:</span> 
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm ml-2">Compulsory</span>
          </p>
        </div>
      </div>
    </div>

    {/* B2 Class */}
    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-500 rounded-lg p-6 ml-8 mb-4 shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-indigo-800 mb-2">&apos;B2&apos; Class</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Criteria:</span> TVUs between 25,000 and 20,000
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Interlocking:</span> 
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm ml-2">Not Required</span>
          </p>
        </div>
      </div>
    </div>

    {/* C Class */}
    <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-6 mb-4 shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-green-800 mb-2">4. &apos;C&apos; Class</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Criteria:</span> All other level crossings not covered in above classes
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Interlocking:</span> 
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm ml-2">Not Required</span>
          </p>
        </div>
      </div>
    </div>

    {/* D Class */}
    <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 rounded-lg p-6 mb-4 shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">5. &apos;D&apos; Class</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Criteria:</span> For cattle crossings
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Interlocking:</span> 
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm ml-2">Not Required</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Legend */}
  <div className="mt-8 bg-gray-50 rounded-lg p-4">
    <h4 className="font-semibold text-gray-800 mb-3">Legend:</h4>
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center">
        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mr-2">Compulsory</span>
        <span className="text-sm text-gray-600">Interlocking required</span>
      </div>
      <div className="flex items-center">
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm mr-2">Not Required</span>
        <span className="text-sm text-gray-600">Interlocking not required</span>
      </div>
    </div>
  </div>
</div>
</div>



<div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-purple-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⚡️</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 tracking-tight">SIEMEN’S PANEL</h1>
          </div>
          <hr className="mb-6 border-purple-200" />
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-purple-700">(a)</span> The station diagram is depicted on the panel board.<br />
            <span className="font-semibold text-purple-700">(b)</span> Push buttons of the different colour codes are provided near the points, signals, etc., for their operations. Buttons for other purposes such as cancellation are also provided.
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><span className="text-2xl">🛠️</span>Normal Setup:</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-red-500 group-hover:scale-125 transition" />
                <span><strong>Signal buttons:</strong> <span className="text-red-600 font-semibold">Red GN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-gray-500 group-hover:scale-125 transition" />
                <span><strong>Route buttons:</strong> <span className="text-gray-700 font-semibold">Grey UN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition" />
                <span><strong>Point buttons:</strong> <span className="text-blue-700 font-semibold">Blue WN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-yellow-400 group-hover:scale-125 transition" />
                <span><strong>Shunt signal buttons:</strong> <span className="text-yellow-600 font-semibold">Yellow GN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-blue-400 group-hover:scale-125 transition" />
                <span><strong>Common/group point button:</strong> <span className="text-blue-600 font-semibold">Blue WWN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-red-700 group-hover:scale-125 transition" />
                <span><strong>Emergency signal/button:</strong> <span className="text-red-700 font-semibold">Red EGGN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-blue-800 group-hover:scale-125 transition" />
                <span><strong>Emergency point release button (sealed):</strong> <span className="text-blue-800 font-semibold">Blue EWN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-blue-300 border-2 border-blue-800 group-hover:scale-125 transition" />
                <span><strong>Emergency sub route release button (sealed and provided with counter):</strong> <span className="text-blue-800 font-semibold">Blue with dot EUYN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-gray-400 border-2 border-gray-700 group-hover:scale-125 transition" />
                <span><strong>Emergency full route release button (provided with counter):</strong> <span className="text-gray-700 font-semibold">Grey EUUYN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-gray-400 group-hover:scale-125 transition" />
                <span><strong>Point failure alarm, suppression button:</strong> <span className="text-gray-700 font-semibold">Grey WXYN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-gray-400 group-hover:scale-125 transition" />
                <span><strong>Signal failure alarm, suppression button:</strong> <span className="text-gray-700 font-semibold">Grey GXYN</span></span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-gray-400 group-hover:scale-125 transition" />
                <span><strong>Power failure alarm button:</strong> <span className="text-gray-700 font-semibold">Grey NXYN</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>






    </div>
  )
}

export default Appendix