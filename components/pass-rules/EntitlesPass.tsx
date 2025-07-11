import React from 'react'

const EntitlesPass = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-purple-200">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          PRIVILEGE TICKET ORDER ENTITLES THE HOLDER IRRESPECTIVE OF
          WHETHER HE BELONGS TO GROUP A, B, C OR D.
        </h2>
        
        <div className="space-y-6 text-gray-800 leading-relaxed">
          
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2">1. Travel Class Options</h3>
            <p>
              To travel in the same class as on the privilege pass to which he is entitled as
              mentioned herein before or in a lower class by paying 1/3 of the fare of the
              entitled class or the lower class in which he is travelling, as the case may be.
              First class PTO holder can however travel in AC sleeper class by paying 1/3 of
              the fare of the AC-Sleeper Class.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2">2. Attendant Travel</h3>
            <p>
              To carry one attendant in IInd Class /Sleeper Class in the case of First Class
              &apos;A&apos; and First Class Privilege Ticket Order by paying 1/3 of the fare of the IInd
              Class.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2">3. Journey Break and Distance Restrictions</h3>
            <p>
              Break of journey and distance restriction as applicable in the case of ordinary
              ticket. However, a holder of ticket exchanged for a PTO travelling by mail train
              can break journey enroute without distance restriction.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2">4. Higher Class Travel</h3>
            <p>
              Travel in a Class higher than the entitled class on payment of charges for travel
              in the entitled class on payment of charges for travel in the entitled class
              against Privilege Ticket order together with difference between the full fare of
              the class shown in the privilege ticket order and that of the class in which he
              elects to travel.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-2">5. Luggage Allowance</h3>
            <p>
              Free luggage allowance on the same condition applicable to a holder of an
              ordinary ticket for the same class in which he elects to travel.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-3">Key Benefits:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Flexible travel options with reduced fare payment</li>
              <li>Attendant travel facility for eligible classes</li>
              <li>Journey break options with certain conditions</li>
              <li>Upgrade to higher class with fare difference payment</li>
              <li>Standard luggage allowance as per class</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EntitlesPass