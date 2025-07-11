import React from 'react'

const PaperAuthorities = () => {
  return (
    <div>
        <div className='max-w-full mx-auto lg:px-16 px-4 py-12 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 relative overflow-hidden'>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.08)_25%,rgba(59,130,246,0.08)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.08)_75%)] bg-[length:20px_20px]"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-300">
              Paper Authorities Reference
            </h2>
            <p className="text-center text-slate-300 mb-8 max-w-4xl mx-auto">
              Different Paper Authorities to be used in different circumstances. 
              Relevant GR and SR should also be referred.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Signal Failures Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Signal Failures</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Critical</span>
                  <span className="text-blue-400 text-sm">T/369(3b)</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Home/Inner Home/Routing Home/Starter/Intermediate Starter Failure</h4>
                <p className="text-slate-300 text-sm">Absolute Block System</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">Warning</span>
                  <span className="text-blue-400 text-sm">PLCT</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">LSS/Advanced Starter Failure</h4>
                <p className="text-slate-300 text-sm">Paper Line Clear Ticket (T/C or T/D 1425)</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/369(1)</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Advanced Authority to Pass Defective Home Signal</h4>
                <p className="text-slate-300 text-sm">For defective signal situations</p>
              </div>
            </div>
          </div>

          {/* Relief Engine Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Relief Engine & Train Operations</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Critical</span>
                  <span className="text-blue-400 text-sm">T/A 602</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Relief Engine into Occupied Block Section</h4>
                <p className="text-slate-300 text-sm">Absolute Block System</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Critical</span>
                  <span className="text-blue-400 text-sm">T/C 912</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Relief Engine into Automatic Block Section</h4>
                <p className="text-slate-300 text-sm">Automatic Block System</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Critical</span>
                  <span className="text-blue-400 text-sm">T/D 602</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Temporary Single Line Working</h4>
                <p className="text-slate-300 text-sm">Double Line Section</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Critical</span>
                  <span className="text-blue-400 text-sm">T/E 912</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Temporary Single Line Working (ABS)</h4>
                <p className="text-slate-300 text-sm">Automatic Block System</p>
              </div>
            </div>
          </div>

          {/* Reception & Starting Authorities */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Reception & Starting Authorities</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/510</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Reception from Wrong Line</h4>
                <p className="text-slate-300 text-sm">Single Line & Double Line</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/509</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Reception on Obstructed Line</h4>
                <p className="text-slate-300 text-sm">Emergency situations</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/511</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Start from Non-Signaled Line</h4>
                <p className="text-slate-300 text-sm">Non-signaled operations</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/512</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Start from Common Starter Line</h4>
                <p className="text-slate-300 text-sm">Common starter situations</p>
              </div>
            </div>
          </div>

          {/* Material & Track Machine Operations */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Material & Track Machine Operations</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/462</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Material Train - Return to Starting Station</h4>
                <p className="text-slate-300 text-sm">Block section operations</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/A 462</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Material Train - Proceed to Next Station</h4>
                <p className="text-slate-300 text-sm">Advance operations</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/465</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Track Machine - Return to Starting Station</h4>
                <p className="text-slate-300 text-sm">Track maintenance</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/A 465</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Track Machine - Proceed to Next Station</h4>
                <p className="text-slate-300 text-sm">Advance track operations</p>
              </div>
            </div>
          </div>

          {/* Shunting Operations */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Shunting Operations</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">Regular</span>
                  <span className="text-blue-400 text-sm">T/806</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Basic Shunting Order</h4>
                <p className="text-slate-300 text-sm">Standard shunting operations</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">Special</span>
                  <span className="text-blue-400 text-sm">T/806+Key</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Shunting up to LSS (Single Line)</h4>
                <p className="text-slate-300 text-sm">With shunt key or P.N.</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Critical</span>
                  <span className="text-blue-400 text-sm">T/806+Signals</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Shunting Beyond FSS</h4>
                <p className="text-slate-300 text-sm">Treated as train movement</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Critical</span>
                  <span className="text-blue-400 text-sm">T/806+Signals</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Shunting into Advance Block Section</h4>
                <p className="text-slate-300 text-sm">Double line operations</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/806+PN</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Shunting into Rear Block Section</h4>
                <p className="text-slate-300 text-sm">With P.N. authority</p>
              </div>
            </div>
          </div>

          {/* Special Equipment */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Special Equipment Operations</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/1518</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Trolley/Lorry/OHE Ladder Notice</h4>
                <p className="text-slate-300 text-sm">Special equipment movement</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/A 1525</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Motor Trolley Dispatch</h4>
                <p className="text-slate-300 text-sm">Token-less sections</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/1525</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Motor Trolley Following Train</h4>
                <p className="text-slate-300 text-sm">Following operations</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/1708</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Tower Wagon - Return to Starting Station</h4>
                <p className="text-slate-300 text-sm">Tower wagon operations</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/A 1708</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Tower Wagon - Proceed to Next Station</h4>
                <p className="text-slate-300 text-sm">Advance tower operations</p>
              </div>
            </div>
          </div>

          {/* Communication Failures */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Communication Failures</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Emergency</span>
                  <span className="text-blue-400 text-sm">T/B 602</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Total Communication Failure</h4>
                <p className="text-slate-300 text-sm">Single & Double Line</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Emergency</span>
                  <span className="text-blue-400 text-sm">T/G or T/H 602</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Conditional Line Clear</h4>
                <p className="text-slate-300 text-sm">Up & Down tickets</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Emergency</span>
                  <span className="text-blue-400 text-sm">T/B 912</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Automatic Block Communication Failure</h4>
                <p className="text-slate-300 text-sm">ABS territory</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Emergency</span>
                  <span className="text-blue-400 text-sm">T/J 602</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Proceed on Wrong Line</h4>
                <p className="text-slate-300 text-sm">To ascertain line is free</p>
              </div>
            </div>
          </div>

          {/* Special Situations */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Special Situations</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/609</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Guard Permission to Loco Pilot</h4>
                <p className="text-slate-300 text-sm">Divided train working</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Standard</span>
                  <span className="text-blue-400 text-sm">T/609+SM</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Light Engine Return</h4>
                <p className="text-slate-300 text-sm">To pick up 2nd portion</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Critical</span>
                  <span className="text-blue-400 text-sm">Restart Memo</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Restart Train After Signal Violation</h4>
                <p className="text-slate-300 text-sm">Without proper authority</p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-16 text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">
                Important Guidelines
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-300">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Critical Operations</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Special Procedures</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Standard Protocols</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaperAuthorities