import React from 'react'

const OperatingForms = () => {
  return (
    <div>
        <div className='max-w-full mx-auto lg:px-16 px-4 py-12 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 relative overflow-hidden'>
        <h1 className='text-2xl font-bold text-center mb-8 text-blue-300'>Operating Forms</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Form 1 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#1</span>
              <span className='text-red-400 text-sm font-semibold'>Black</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Signal & Telecommunication Disconnection / Reconnection Notice</h3>
            <p className='text-slate-300 text-sm'>Form: S&T (T/351)</p>
          </div>

          {/* Form 2 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#2</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Advance authority to pass defective signals</h3>
            <p className='text-slate-300 text-sm'>Form: T/369(1)</p>
          </div>

          {/* Form 3 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#3</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to pass signals at &apos;on&apos; or defective position</h3>
            <p className='text-slate-300 text-sm'>Form: T/369 (3b)</p>
          </div>

          {/* Form 4 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#4</span>
              <span className='text-green-400 text-sm font-semibold'>Green</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Caution Order</h3>
            <p className='text-slate-300 text-sm'>Form: T/409</p>
          </div>

          {/* Form 5 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#5</span>
              <span className='text-green-400 text-sm font-semibold'>Green</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>&apos;NIL&apos; Caution Order</h3>
            <p className='text-slate-300 text-sm'>Form: T/A 409</p>
          </div>

          {/* Form 6 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#6</span>
              <span className='text-red-400 text-sm font-semibold'>Black</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Train Examination Advice/Report</h3>
            <p className='text-slate-300 text-sm'>Form: T/431</p>
          </div>

          {/* Form 7 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#7</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to proceed for material train (Return to originating station)</h3>
            <p className='text-slate-300 text-sm'>Form: T/462</p>
          </div>

          {/* Form 8 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#8</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to proceed for material train (Proceed to next station)</h3>
            <p className='text-slate-300 text-sm'>Form: T/A 462</p>
          </div>

          {/* Form 9 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#9</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to proceed for track machine (Return to originating station)</h3>
            <p className='text-slate-300 text-sm'>Form: T/465</p>
          </div>

          {/* Form 10 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#10</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to proceed for track machine (Proceed to next station)</h3>
            <p className='text-slate-300 text-sm'>Form: T/A 465</p>
          </div>

          {/* Form 11 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#11</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to receive a train on an obstructed line</h3>
            <p className='text-slate-300 text-sm'>Form: T/509</p>
          </div>

          {/* Form 12 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#12</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to receive a train on to a non-signalled line</h3>
            <p className='text-slate-300 text-sm'>Form: T/510</p>
          </div>

          {/* Form 13 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#13</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to start from a non-signaled line</h3>
            <p className='text-slate-300 text-sm'>Form: T/511</p>
          </div>

          {/* Form 14 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#14</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to start from a line with common Starter signal</h3>
            <p className='text-slate-300 text-sm'>Form: T/512</p>
          </div>

          {/* Form 15 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#15</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to proceed for relief engine/train into an occupied block section</h3>
            <p className='text-slate-300 text-sm'>Form: T/A 602</p>
          </div>

          {/* Form 16 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#16</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority for opening communication during total interruption of communication on single line section</h3>
            <p className='text-slate-300 text-sm'>Form: T/B 602</p>
          </div>

          {/* Form 17 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#17</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority for working of trains during total interruption of communication on double line section</h3>
            <p className='text-slate-300 text-sm'>Form: T/C 602</p>
          </div>

          {/* Form 18 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#18</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority for temporary single line working on double line section</h3>
            <p className='text-slate-300 text-sm'>Form: T/D 602</p>
          </div>

          {/* Form 19 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#19</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Line Clear enquiry message asking Line Clear for despatch of trains during total failure of communication on single line section</h3>
            <p className='text-slate-300 text-sm'>Form: T/E 602</p>
          </div>

          {/* Form 20 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#20</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Conditional Line Clear reply message</h3>
            <p className='text-slate-300 text-sm'>Form: T/F 602</p>
          </div>

          {/* Form 21 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#21</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Conditional Line Clear ticket (Up)</h3>
            <p className='text-slate-300 text-sm'>Form: T/G 602</p>
          </div>

          {/* Form 22 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#22</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Conditional Line Clear ticket (Down)</h3>
            <p className='text-slate-300 text-sm'>Form: T/H 602</p>
          </div>

          {/* Form 23 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#23</span>
              <span className='text-red-400 text-sm font-semibold'>Black</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Message on restoration</h3>
            <p className='text-slate-300 text-sm'>Form: T/I 602</p>
          </div>

          {/* Form 24 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#24</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Block Ticket</h3>
            <p className='text-slate-300 text-sm'>Form: T/J 602</p>
          </div>

          {/* Form 25 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#25</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Written permission by Guard to Loco Pilot to proceed to next station from mid-section</h3>
            <p className='text-slate-300 text-sm'>Form: T/609</p>
          </div>

          {/* Form 26 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#26</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Shunting order</h3>
            <p className='text-slate-300 text-sm'>Form: T/806</p>
          </div>

          {/* Form 27 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#27</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority for Working of Trains During Total Interruption of Communication/Obstruction On Line in Automatic Block System</h3>
            <p className='text-slate-300 text-sm'>Form: T/B 912</p>
          </div>

          {/* Form 28 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#28</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to proceed for relief engine / train into an Automatic Block signalling section</h3>
            <p className='text-slate-300 text-sm'>Form: T/C 912</p>
          </div>

          {/* Form 29 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#29</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority For Working of Trains During Prolonged Signal Failure In Automatic Block System</h3>
            <p className='text-slate-300 text-sm'>Form: T/D 912</p>
          </div>

          {/* Form 30 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#30</span>
              <span className='text-red-400 text-sm font-semibold'>Red</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority For Temporary Single Line Working on Double line Automatic Block System</h3>
            <p className='text-slate-300 text-sm'>Form: T/E 912</p>
          </div>

          {/* Form 31 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#31</span>
              <span className='text-red-400 text-sm font-semibold'>Black</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Train intact arrival register</h3>
            <p className='text-slate-300 text-sm'>Form: T/1410</p>
          </div>

          {/* Form 32 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#32</span>
              <span className='text-red-400 text-sm font-semibold'>Black</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Line Clear enquiry and reply message book in the event of failure / Suspension / Non-provision of Block Instruments message (inward)</h3>
            <p className='text-slate-300 text-sm'>Form: T/A 1425</p>
          </div>

          {/* Form 33 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#33</span>
              <span className='text-red-400 text-sm font-semibold'>Black</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Line Clear enquiry and reply message book in the event of failure / Suspension / Non-provision of Block Instruments message (inward)</h3>
            <p className='text-slate-300 text-sm'>Form: T/B 1425</p>
          </div>

          {/* Form 34 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#34</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>UP Paper Line Clear Ticket</h3>
            <p className='text-slate-300 text-sm'>Form: T/C 1425</p>
          </div>

          {/* Form 35 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#35</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Down Paper Line Clear Ticket</h3>
            <p className='text-slate-300 text-sm'>Form: T/D 1425</p>
          </div>

          {/* Form 36 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#36</span>
              <span className='text-red-400 text-sm font-semibold'>Black</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Trolly/Lorry/OHE ladder trolly notice</h3>
            <p className='text-slate-300 text-sm'>Form: T/1518</p>
          </div>

          {/* Form 37 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#37</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority for Trolly/Lorry/Motor Trolly to be used on token less sections in Absolute Block System and Automatic Block System territories</h3>
            <p className='text-slate-300 text-sm'>Form: T/A 1525</p>
          </div>

          {/* Form 38 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#38</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Motor trolley permit (following)</h3>
            <p className='text-slate-300 text-sm'>Form: T/1525</p>
          </div>

          {/* Form 39 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#39</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to proceed for tower wagon and to return to starting station</h3>
            <p className='text-slate-300 text-sm'>Form: T/1708</p>
          </div>

          {/* Form 40 */}
          <div className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105'>
            <div className='flex items-center justify-between mb-4'>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>#40</span>
              <span className='text-blue-400 text-sm font-semibold'>Blue</span>
            </div>
            <h3 className='text-lg font-semibold text-blue-300 mb-2'>Authority to proceed for tower wagon to proceed to station in advance</h3>
            <p className='text-slate-300 text-sm'>Form: T/A 1708</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OperatingForms