import React from 'react'

const CCRoutes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-green-600 text-white py-6 px-8 rounded-lg shadow-lg mb-6">
            <h1 className="text-4xl font-bold mb-2">🚂 CC+8+2t Routes</h1>
            <p className="text-xl font-semibold">South Central Railway as on 31-03-2024</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Container Carrying Routes</h2>
            <p className="text-lg text-gray-700 mb-4">
              As per CTE/SC&rsquo;s Lr No. W.506/CRS/TR/CC+6+2t/Vol.IV, dated 23.05.2024
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Route Statistics:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-2xl font-bold text-blue-800">5567.914</p>
                  <p className="text-sm text-blue-700">Total CC+8+2t Route Km</p>
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-2xl font-bold text-green-800">6532.475</p>
                  <p className="text-sm text-green-700">Total Route Km of S.C.Railway</p>
                </div>
                <div className="bg-purple-100 p-3 rounded">
                  <p className="text-2xl font-bold text-purple-800">85.23%</p>
                  <p className="text-sm text-purple-700">Percentage of CC+8+2t Route</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CC+8+2t Routes */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">📋 CC+8+2t Routes List</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { sl: 1, section: "Bellary - Guntakal", date: "15.05.05", length: "46.20", speed: "60" },
              { sl: 2, section: "Guntakal-Renigunta", date: "15.05.05", length: "309.50", speed: "60" },
              { sl: 3, section: "Guntakal-Guntur", date: "06.02.06", length: "401.28", speed: "60" },
              { sl: 4, section: "Guntur-Krishna canal Jn.", date: "06.02.06", length: "27.12", speed: "60" },
              { sl: 5, section: "Krishna canal Jn.-Vijayawada", date: "06.02.06", length: "5.05", speed: "60" },
              { sl: 6, section: "Vijayawada-Samalkot", date: "06.02.06", length: "199.57", speed: "60" },
              { sl: 7, section: "Visakhapatnam – Samalkot (incl By pass line Duvvada)", date: "11.07.07", length: "131.37", speed: "60" },
              { sl: 8, section: "Samalkot-Kakinada Port", date: "06.02.06", length: "15.60", speed: "60" },
              { sl: 9, section: "Vijayawada - Kondapalli Power House", date: "11.07.07", length: "17.49", speed: "60" },
              { sl: 10, section: "Dornakal - Kondapalli incl. Siding", date: "30.11.07", length: "107.69", speed: "60" },
              { sl: 11, section: "Manikgarh - Dornakal", date: "31.12.07", length: "319.41", speed: "60" },
              { sl: 12, section: "Manikgarh - Ballarshah", date: "31.12.07", length: "6.91", speed: "60" },
              { sl: 13, section: "Manuguru- Bhadrachalam Rd incl Siding", date: "30.11.07", length: "51.10", speed: "60" },
              { sl: 14, section: "Bhadrachalam Rd - Dornakal incl. Siding", date: "30.11.07", length: "56.01", speed: "60" },
              { sl: 15, section: "Komatpalli (incl Kazipet bypass)-Kazipet - SC -(incl by pass ) -WADI", date: "31.12.07", length: "327.75", speed: "60" },
              { sl: 16, section: "Vijayawada - Gudur", date: "31.12.07", length: "294.46", speed: "60" },
              { sl: 17, section: "Pendekallu - Gooty - Dharmavaram - Bangalore Area", date: "31.12.07", length: "119.88", speed: "60" },
              { sl: 18, section: "Secunderabad - Manmad", date: "31.12.07", length: "617.40", speed: "60" },
              { sl: 19, section: "Vikarabad - Parbhani", date: "31.12.07", length: "331.38", speed: "60" },
              { sl: 20, section: "Wadi - Raichur - Guntakal", date: "17.04.08", length: "226.44", speed: "60" },
              { sl: 21, section: "Motumari - Jagayapet Town branch line", date: "17.04.08", length: "25.82", speed: "60" },
              { sl: 22, section: "Renigunta - Gudur Jn", date: "17.04.08", length: "83.17", speed: "60" },
              { sl: 23, section: "Renigunta - Tirupati", date: "17.3.16", length: "9.79", speed: "60" },
              { sl: 24, section: "Guntur Jn - Tenali Jn", date: "17.04.08", length: "25.47", speed: "60" },
              { sl: 25, section: "Singreni Collieries- Karepalli Branch line", date: "17.04.08", length: "10.36", speed: "30" },
              { sl: 26, section: "Gadchandur - Manikgarh Jn Branch line (inc. Bye-Pass Line)", date: "17.04.08", length: "31.51", speed: "60" },
              { sl: 27, section: "Guntakal-Kalluru", date: "20.07.10", length: "40.26", speed: "60" },
              { sl: 28, section: "Adilabad-Mudkhed", date: "20.07.10", length: "161.95", speed: "60" },
              { sl: 29, section: "Pimpalkutti-Adilabad", date: "20.07.10", length: "20.40", speed: "60" },
              { sl: 30, section: "Purna-Akola", date: "25.06.11", length: "206.88", speed: "60" },
              { sl: 31, section: "Venkatachalam-Krishnapatnam", date: "25.06.11", length: "20.28", speed: "60" },
              { sl: 32, section: "Peddapalli-Karimnagar", date: "02.03.15", length: "34.93", speed: "60" },
              { sl: 33, section: "Malkajgiri - Moula-Ali &apos;B&apos; Cabin Chord Line", date: "17.3.16", length: "4.90", speed: "20" },
              { sl: 34, section: "Katpadi - Tirupati", date: "17.3.16", length: "103.59", speed: "60" },
              { sl: "35a", section: "Karimnagar-Lingampet Jagityal", date: "16.2.18", length: "47.83", speed: "60" },
              { sl: "35b", section: "LingampetJagityal-Mortad-Nizamabad", date: "16.2.18", length: "95.05", speed: "60" },
              { sl: 36, section: "Nallapadu-Nadikude", date: "8.12.18", length: "90.25", speed: "60" },
              { sl: 37, section: "Pagidipalli-Nadikude", date: "8.12.18", length: "148.67", speed: "60" },
              { sl: 38, section: "Vijayawada-Gudivada-Bhimavaram-Nidadavolu (incl. Bye-Pass)", date: "16.5.19", length: "155.76", speed: "60" },
              { sl: 39, section: "Gudivada-Machilipatnam", date: "16.5.19", length: "36.74", speed: "60" },
              { sl: 40, section: "Bhimavaram-Narasapur", date: "16.5.19", length: "29.48", speed: "60" },
              { sl: 41, section: "Obulavaripalle-Venkatachalam Rd.Jn.", date: "4.7.19", length: "95.40", speed: "60" },
              { sl: 42, section: "Janakampet-Bodhan", date: "11.11.19", length: "20.05", speed: "50" },
              { sl: 43, section: "Jaggayyapeta Town – Janpahad-Vishnupuram", date: "11.11.19", length: "62.99", speed: "40" },
              { sl: 44, section: "Bhadrachalam Road(excl.) – Bhavanapalem (SL)", date: "27.05.22", length: "37.567", speed: "50" },
              { sl: 45, section: "Bhavanapalem (excl.) – Sattupalli (SL)", date: "27.05.22", length: "13.949", speed: "40" },
              { sl: 46, section: "Akanapet-Medak", date: "08.07.22", length: "17.338", speed: "40" },
              { sl: 47, section: "Devarakadra – Krishna (SL)", date: "", length: "65.825", speed: "60" },
              { sl: 48, section: "Manoharabad – Siddipet (SL)", date: "", length: "76.135", speed: "60" },
              { sl: 49, section: "New Piduguralla Jn.–Savalyapuram(SL)", date: "", length: "45.85", speed: "60" },
              { sl: 50, section: "Secunderabad-Falaknuma-Mahaboobnagar(DN)", date: "", length: "112.98", speed: "60" },
              { sl: 51, section: "Mahaboobnagar-Devarakadra (SL)", date: "", length: "24.4", speed: "30" },
              { sl: 52, section: "Bye pass at Secunderabad (Sitaphalmandi-Lallaguda Gate)", date: "", length: "0.74", speed: "20" }
            ].map((route, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">#{route.sl}</span>
                    <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded">
                      {route.speed} kmph
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">
                    {route.section}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium text-gray-800">{route.date || "N/A"}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Length:</span>
                      <span className="font-bold text-green-600">{route.length} km</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CC+6+2t Routes */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚛 CC+6+2t Routes</h3>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h4 className="text-2xl font-bold text-blue-700 mb-6">CC+6+2t Routes on South Central Railway as on 31.03.2024</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { sl: 1, route: "Khanapur-Taj Sultanpur (SL)", divn: "SC", length: "97.7" },
                { sl: 2, route: "Telapur-Ramachandrapuram (SL)", divn: "SC", length: "5.337" },
                { sl: 3, route: "Kakinada – Kothapalli (SL)", divn: "BZA", length: "45.2" },
                { sl: 4, route: "Dharmavaram-Pakala", divn: "GTL", length: "227.42" },
                { sl: 5, route: "Kadapa-Pendlimarri (SL)", divn: "GTL", length: "21.3" },
                { sl: 6, route: "Nadikude-Macherla (SL)", divn: "GNT", length: "35.01" },
                { sl: 7, route: "Tenali-Repalle (SL)", divn: "GNT", length: "33.85" },
                { sl: 8, route: "Gundlakamma-Darsi (SL)", divn: "GNT", length: "22.889" },
                { sl: 9, route: "Nandyal-Yerraguntla (SL)", divn: "GNT", length: "123" },
                { sl: 10, route: "Secunderabad-Mahabubnagar (UP line)", divn: "HYB", length: "112.98" },
                { sl: 11, route: "Devarakadra – Dhone (SL)", divn: "HYB", length: "159.71" },
                { sl: 12, route: "Raichur-Gadwal (SL)", divn: "HYB", length: "57.16" },
                { sl: 13, route: "Akola-Akot (SL)", divn: "NED", length: "45.54" },
                { sl: 14, route: "Khandwa (Excl.)-Amlakhurd (SL)", divn: "NED", length: "53.447" }
              ].map((route, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200 hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
                      #{route.sl}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                      {route.divn}
                    </span>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">
                    {route.route}
                  </h5>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Length:</span>
                    <span className="font-bold text-blue-600">{route.length} km</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Total for C+6+2t */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6 text-center">
              <h4 className="text-2xl font-bold mb-2">CC+6+2t Routes Summary</h4>
              <p className="text-3xl font-bold">1040.543 km</p>
              <p className="text-blue-100">Total Route Length</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📊 Route Summary</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="text-xl font-bold text-green-800 mb-4">CC+8+2t Routes</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Total Routes:</span>
                  <span className="font-bold text-green-600">52</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total Length:</span>
                  <span className="font-bold text-green-600">5567.914 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Coverage:</span>
                  <span className="font-bold text-green-600">85.23%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-xl font-bold text-blue-800 mb-4">CC+6+2t Routes</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Total Routes:</span>
                  <span className="font-bold text-blue-600">14</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total Length:</span>
                  <span className="font-bold text-blue-600">1040.543 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Divisions:</span>
                  <span className="font-bold text-blue-600">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🚂 Container Carrying Network</h3>
          <p className="text-xl mb-4">
            Comprehensive network of container carrying routes across South Central Railway
          </p>
          <p className="text-sm opacity-90">(For Official Railway Operations Reference)</p>
        </div>
      </div>
    </div>
  )
}

export default CCRoutes