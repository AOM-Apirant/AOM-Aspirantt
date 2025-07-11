import React from 'react'

const SpeedRestrictions = () => {
  return (
    <div className='max-w-full mx-auto lg:px-16 px-4 py-12 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 relative overflow-hidden'>
        <h1 className='text-2xl font-bold text-center mb-4 text-blue-300'>Speed of Trains in Different Circumstances</h1>
      <div className="mb-8">
        <p className="text-gray-600 text-lg">
          The following table indicates at a glance the speeds of the trains under various circumstances. 
          Relevant GRs and SRs should be referred for details.
        </p>
      </div>

      {/* AT STATION SECTION */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-200 pb-2">
          I. AT STATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">1. On Non-Interlocked points</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15/30 kmph</p>
            <p className="text-sm text-gray-600">S.R.4.10.3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">2. Speed of incoming Goods trains inside station section at Terminal yard</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15 kmph</p>
            <p className="text-sm text-gray-600">S.R. 3.36.4</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">3. Motor Trolley while running over points and crossings</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15 kmph</p>
            <p className="text-sm text-gray-600">S.R. 15.25.10.1</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">4. Motor Trolley shall not exceed a speed during night time</h3>
            <p className="text-lg font-medium text-red-600 mb-1">30 kmph</p>
            <p className="text-sm text-gray-600">S.R. 15.25.10.2</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">5. The speed over turn outs having 1 in 8 1/2 straight switch</h3>
            <p className="text-lg font-medium text-red-600 mb-1">(A) For passenger carrying trains</p>
            <p className="text-lg font-medium text-red-600 mb-1">(B) For Goods trains</p>
            <p className="text-lg font-medium text-red-600 mb-1">(A)10 kmph</p>
            <p className="text-lg font-medium text-red-600 mb-1">(B)15 kmph</p>
            <p className="text-sm text-gray-600">S.R. 4.10.1</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">6. The speed over the turn outs having 1 in 8 1/2 curved switches of 52/60 Kg rails, on PSC sleepers</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15 kmph</p>
            <p className="text-sm text-gray-600">S.R. 4.10.1</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">7. In case of 1:8.5 symmetrical split with curved switches with 52/60 kg including TWS (Thick Web Switch) on PSC sleepers</h3>
            <p className="text-lg font-medium text-red-600 mb-1">30 kmph</p>
            <p className="text-sm text-gray-600">S.R. 4.10.2</p>
          </div>
        </div>
      </div>

      {/* IN BLOCK SECTION */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-6 border-b-2 border-green-200 pb-2">
          II. IN BLOCK SECTION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">1. When IB Home is defective and phone is not working</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15 kmph (when view ahead is clear in day)</p>
            <p className="text-lg font-medium text-red-600 mb-1">8 kmph (night or view ahead is not clear in day)</p>
            <p className="text-sm text-gray-600">S. R. 3.75.4</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">2. When relief engine/train is being dispatched on T/A 602 (Double Line and Single Line) into obstructed block section</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15/10 kmph</p>
            <p className="text-sm text-gray-600">S. R. 6.02.6.1</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">3. Speed of the Light engine sent to open communication is restricted to (T/B 602)</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15/10 kmph</p>
            <p className="text-sm text-gray-600">S.R. 6.02.4.6.1</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">4. Speed of the train dispatched during TIC on D/L (T/C 602)</h3>
            <p className="text-lg font-medium text-red-600 mb-1">25/10 kmph</p>
            <p className="text-sm text-gray-600">S. R. 6.02.3.3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">5. When Light engine/Goods trains is being dispatched on Block Ticket (T/J 602)</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15/8 kmph and be prepared to stop short of obstruction</p>
            <p className="text-sm text-gray-600">As mentioned in the Authority</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">6. The speed of the first train during TSL working</h3>
            <p className="text-lg font-medium text-red-600 mb-1">25 kmph</p>
            <p className="text-sm text-gray-600">S.R. 6.02.1.15</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">7. The speed of the second and subsequent trains during TSL working</h3>
            <p className="text-lg font-medium text-red-600 mb-1">Sectional Speed</p>
            <p className="text-sm text-gray-600">S.R. 6.02.1.15</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">8. When major work in progress, for trains on adjacent line on double line or multiple lines</h3>
            <p className="text-lg font-medium text-red-600 mb-1">50 kmph</p>
            <p className="text-sm text-gray-600">S.R. 15.09.6</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">9. When the electric head light becomes defective en-route during the hours of darkness and/or thick and foggy weather</h3>
            <p className="text-lg font-medium text-red-600 mb-1">Temporary speed restriction imposed in the B/S or 40kmph whichever is less</p>
            <p className="text-sm text-gray-600">G.R. 4.14</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">10. When engine is pushing the train and Guard is in leading vehicle/not in leading vehicle</h3>
            <p className="text-lg font-medium text-red-600 mb-1">25/8 kmph</p>
            <p className="text-sm text-gray-600">S.R. 4.12.2.3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">11. &ldquo;A&rdquo; Class ODC by train-gross clearance of 22.86 cm (9 inches) and above</h3>
            <p className="text-lg font-medium text-red-600 mb-1">Sectional Speed</p>
            <p className="text-sm text-gray-600">I R Operating Manual</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">12. &ldquo;B&rdquo; Class ODC by train-gross clearance of 15.24 cm (6 inches) and above, but less than 22.86 cm (9 inches)</h3>
            <p className="text-lg font-medium text-red-600 mb-1">40 kmph</p>
            <p className="text-sm text-gray-600">I R Operating Manual</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">13. &ldquo;C&rdquo; class ODC by train- gross clearance of less than 15.24 cm (6 inches) but not less than 10.16 cm (4 inches)</h3>
            <p className="text-lg font-medium text-red-600 mb-1">25 kmph (to be moved in day only)</p>
            <p className="text-sm text-gray-600">I R Operating Manual</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">14. When caution order is issued if patrolman not turned up</h3>
            <p className="text-lg font-medium text-red-600 mb-1">40 kmph</p>
            <p className="text-sm text-gray-600">App. IV (10).4.3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">15. When water rises over ballast-level but is below rail-level</h3>
            <p className="text-lg font-medium text-red-600 mb-1">Stop dead and Proceed with SR 8 kmph</p>
            <p className="text-sm text-gray-600">S.R. 15.17.3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">16. When water over tops the rail, after SSE/SE&apos;s certificate</h3>
            <p className="text-lg font-medium text-red-600 mb-1">Stop dead and Proceed with SR 8 kmph</p>
            <p className="text-sm text-gray-600">S.R. 15.17.3.2</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">17. The Maximum speed of track machine</h3>
            <p className="text-lg font-medium text-red-600 mb-1">As prescribed through JSC (Joint Safety Certificate)</p>
            <p className="text-sm text-gray-600">S.R. 4.65.1.1</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">18. During the Engg. Block, when track Machine is following another Track Machine</h3>
            <p className="text-lg font-medium text-red-600 mb-1">25 kmph Day /view clear</p>
            <p className="text-lg font-medium text-red-600 mb-1">10 kmph Night /view not clear</p>
            <p className="text-sm text-gray-600">S.R. 15.06.4.3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">19. When passing through Neutral section</h3>
            <p className="text-lg font-medium text-red-600 mb-1">Not less than 30 kmph</p>
            <p className="text-sm text-gray-600">S.R. 17.07.1</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">20. Light Engine returning to pick up 2nd portion when a train is divided</h3>
            <p className="text-lg font-medium text-red-600 mb-1">25 kmph</p>
            <p className="text-sm text-gray-600">S.R. 6.09.7</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">21. When a four-wheeler vehicle is attached to passenger carrying train</h3>
            <p className="text-lg font-medium text-red-600 mb-1">BG 75 kmph MG 50 kmph</p>
            <p className="text-sm text-gray-600">App. VIII 8.5.3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">22. When clamped wagon by a train</h3>
            <p className="text-lg font-medium text-red-600 mb-1">40 kmph</p>
            <p className="text-sm text-gray-600">HQ.Cir.FLY LEAF No.15of 1993.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">23. When visibility is restricted due to fog, speed of train in Absolute block system</h3>
            <p className="text-lg font-medium text-red-600 mb-1">75 kmph</p>
            <p className="text-sm text-gray-600">S.R.3.61.10.3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">24. During foggy weather, while proceeding on &lsquo;Proceed&rsquo; aspect of Automatic Stop Signal</h3>
            <p className="text-lg font-medium text-red-600 mb-1">75 kmph</p>
            <p className="text-sm text-gray-600">S.R 3.61.10.4</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">25. When electric loco leading cab defective and Asst. Loco Pilot is driving from trailing cab</h3>
            <p className="text-lg font-medium text-red-600 mb-1">40 kmph</p>
            <p className="text-sm text-gray-600">S.R. 17.09.12.2</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">26. When Loco Pilot is incapacitated and Asst. Loco Pilot working to clear up to next block station</h3>
            <p className="text-lg font-medium text-red-600 mb-1">40 kmph</p>
            <p className="text-sm text-gray-600">S.R. 17.09.5.7</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">27. When rail breakage is upto 30 mm 1st train can pass</h3>
            <p className="text-lg font-medium text-red-600 mb-1">10 kmph</p>
            <p className="text-sm text-gray-600">S.R. 6.01.3.1</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">28. When rail breakage is upto 30 mm 2nd train and subsequent train can pass</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15 kmph</p>
            <p className="text-sm text-gray-600">S.R. 6.01.3.1</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">29. During TIC on S/L when LC received for more than one train, second and subsequent trains on CLCT in Automatic Block Section</h3>
            <p className="text-lg font-medium text-red-600 mb-1">25/10 kmph</p>
            <p className="text-sm text-gray-600">S.R. 9.12.4(R)</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">30. During prolonged failure of signals (automatic block section double line) when communication is available, speed of first train</h3>
            <p className="text-lg font-medium text-red-600 mb-1">25kmph(view clear)/10 kmph(view not clear)</p>
            <p className="text-sm text-gray-600">S. R. 9.12.2(A). 4(a)</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">31. When signals failed and communication not available on automatic double line section</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15(view clear )/10 kmph(view not clear)</p>
            <p className="text-sm text-gray-600">S. R. 9.12.2(B)</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">32. The speed during TSL working in Automatic Block System</h3>
            <p className="text-lg font-medium text-red-600 mb-1">(A) 25 kmph (First Train)</p>
            <p className="text-lg font-medium text-red-600 mb-1">(B) Sectional Speed (Second and subsequent trains)</p>
            <p className="text-sm text-gray-600">S.R. 9.12.3.15</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">33. Speed of LE sent to open communication in automatic system when signals and communication have failed</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15/10 kmph</p>
            <p className="text-sm text-gray-600">S.R. 9.12.4(F)</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">34. Speed of the train to pass automatic signal at ON</h3>
            <p className="text-lg font-medium text-red-600 mb-1">Not exceeding 15 kmph up to next stop signal</p>
            <p className="text-sm text-gray-600">S. R. 9.02.1</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">35. The speed of the train which is already in healthy section which is temporarily isolated if Loco Pilot able to contact TPC</h3>
            <p className="text-lg font-medium text-red-600 mb-1">60 kmph by day and 30 kmph by night</p>
            <p className="text-sm text-gray-600">S. R. 17.09.16. 2(iv)</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">36. The speed of the first train to enter into the healthy section which is temporarily isolated and re-energized</h3>
            <p className="text-lg font-medium text-red-600 mb-1">60 kmph by day and 30 kmph by night</p>
            <p className="text-sm text-gray-600">S. R. 17.09.16.1 (c)(i)</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">37. When danger is suspected to the P. Way and the location remain vague and if train is to be dispatched</h3>
            <p className="text-lg font-medium text-red-600 mb-1">10 kmph</p>
            <p className="text-sm text-gray-600">S. R. 6.07.1(e)</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">38. After stopping the train at stop indicator, the Loco Pilot shall proceed with a speed of</h3>
            <p className="text-lg font-medium text-red-600 mb-1">8 kmph</p>
            <p className="text-sm text-gray-600">S. R. 15.09.3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">39. On seeing a flasher light flashing (view is clear/not clear)</h3>
            <p className="text-lg font-medium text-red-600 mb-1">20/10 kmph</p>
            <p className="text-sm text-gray-600">S. R. 6.03.7</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">40. While testing detonators- speed</h3>
            <p className="text-lg font-medium text-red-600 mb-1">8-11 kmph</p>
            <p className="text-sm text-gray-600">S. R. 3.64.5.6</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">41. In case of an axle box of a wagon is found hot between station and the Loco Pilot has decided to take the train to next station</h3>
            <p className="text-lg font-medium text-red-600 mb-1">Discretion of Loco Pilot</p>
            <p className="text-sm text-gray-600">S. R. 4.29.2</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">42. The speed of &lsquo;Patrol&rsquo; or &lsquo;Search Light&rsquo; special with one or more vehicles in front of the engine</h3>
            <p className="text-lg font-medium text-red-600 mb-1">40 kmph</p>
            <p className="text-sm text-gray-600">G. R. 4.12</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">43. Unsafe condition of bunds of tanks or Rivers</h3>
            <p className="text-lg font-medium text-red-600 mb-1">Special caution</p>
            <p className="text-sm text-gray-600">Accident Manual 401</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">44. ON detection/receiving report of &ldquo;flat tyre&rdquo; in the formation, the speed limit to be observed by the LP to clear the block section</h3>
            <p className="text-lg font-medium text-red-600 mb-1">Max. 30 kmph</p>
            <p className="text-sm text-gray-600">JPO &ldquo;Flat Tyre&rdquo;</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">45. After getting the report of &ldquo;flat tyre&rdquo; subsequent passenger carrying and empty Goods trains in that section before USFD testing is done</h3>
            <p className="text-lg font-medium text-red-600 mb-1">50 kmph</p>
            <p className="text-sm text-gray-600">JPO &ldquo;Flat Tyre&rdquo;</p>
          </div>
        </div>
      </div>

      {/* SPEED WHILE PERFORMING SHUNTING SECTION */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6 border-b-2 border-purple-200 pb-2">
          III. SPEED WHILE PERFORMING SHUNTING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-800 mb-2">1. Maximum Shunting Speed</h3>
            <p className="text-lg font-medium text-red-600 mb-1">15 kmph</p>
            <p className="text-sm text-gray-600">G. R. 5.13</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-800 mb-2">2. Shunting with loaded petroleum, kerosene, dangerous goods, explosives etc.</h3>
            <p className="text-lg font-medium text-red-600 mb-1">8 kmph</p>
            <p className="text-sm text-gray-600">S. R. 5.14.3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-800 mb-2">3. Hand shunting with vehicles other than roller bearing stock</h3>
            <p className="text-lg font-medium text-red-600 mb-1">5 kmph</p>
            <p className="text-sm text-gray-600">S. R. 5.20.5.6</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeedRestrictions