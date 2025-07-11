import React from 'react'

const PassLevels = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-xl p-8 mb-8 border-2 border-purple-200">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          LEVELS AS PER THE VII CPC PAY MATRIX
        </h2>
        
        <div className="space-y-6 text-gray-800 leading-relaxed">
          
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-purple-700 mb-4">Pay Band Structure</h3>
            
            <div className="space-y-4">
              <div className="border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-600 mb-3">Pay Band 1 (PB 1)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="font-medium">Grade Pay</div>
                  <div className="font-medium">New Level</div>
                  <div className="font-medium">Description</div>
                  <div>1800</div>
                  <div>1</div>
                  <div>Entry Level</div>
                  <div>1900</div>
                  <div>2</div>
                  <div>Junior Level</div>
                  <div>2000</div>
                  <div>3</div>
                  <div>Middle Level</div>
                  <div>2400</div>
                  <div>4</div>
                  <div>Senior Level</div>
                  <div>2800</div>
                  <div>5</div>
                  <div>Higher Level</div>
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-600 mb-3">Pay Band 2 (PB 2)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="font-medium">Grade Pay</div>
                  <div className="font-medium">New Level</div>
                  <div className="font-medium">Description</div>
                  <div>3400</div>
                  <div>5A</div>
                  <div>Special Level</div>
                  <div>4200</div>
                  <div>6</div>
                  <div>Junior Administrative</div>
                  <div>4600</div>
                  <div>7</div>
                  <div>Middle Administrative</div>
                  <div>4800</div>
                  <div>8</div>
                  <div>Senior Administrative</div>
                  <div>5400</div>
                  <div>9</div>
                  <div>Higher Administrative</div>
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-600 mb-3">Pay Band 3 (PB 3)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="font-medium">Grade Pay</div>
                  <div className="font-medium">New Level</div>
                  <div className="font-medium">Description</div>
                  <div>5400</div>
                  <div>10</div>
                  <div>Junior Executive</div>
                  <div>5700</div>
                  <div>10A</div>
                  <div>Special Executive</div>
                  <div>6100</div>
                  <div>10B</div>
                  <div>Higher Executive</div>
                  <div>6600</div>
                  <div>11</div>
                  <div>Senior Executive</div>
                  <div>7600</div>
                  <div>12</div>
                  <div>Top Executive</div>
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-600 mb-3">Pay Band 4 (PB 4)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="font-medium">Grade Pay</div>
                  <div className="font-medium">New Level</div>
                  <div className="font-medium">Description</div>
                  <div>7600</div>
                  <div>12</div>
                  <div>Senior Management</div>
                  <div>8000</div>
                  <div>12A</div>
                  <div>Special Management</div>
                  <div>8400</div>
                  <div>12B</div>
                  <div>Higher Management</div>
                  <div>8700</div>
                  <div>13</div>
                  <div>Top Management</div>
                  <div>8900</div>
                  <div>13A</div>
                  <div>Special Top Management</div>
                  <div>9000</div>
                  <div>13B</div>
                  <div>Higher Top Management</div>
                  <div>10000</div>
                  <div>14</div>
                  <div>Executive Level</div>
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-600 mb-3">Higher Administrative Grades</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="font-medium">Grade</div>
                  <div className="font-medium">New Level</div>
                  <div>HAG</div>
                  <div>15</div>
                  <div>HAG+</div>
                  <div>16</div>
                  <div>APEX</div>
                  <div>17</div>
                  <div>CABINET SECRETARY, DEFENCE CHIEFS</div>
                  <div>18</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
            <h3 className="font-semibold text-purple-800 mb-3">Key Points:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Based on VII CPC Pay Matrix structure</li>
              <li>Pay Bands (PB) determine basic salary structure</li>
              <li>Grade Pay indicates performance level</li>
              <li>New Levels provide standardized progression</li>
              <li>Higher levels correspond to greater responsibilities</li>
              <li>HAG and above are for senior administrative positions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PassLevels