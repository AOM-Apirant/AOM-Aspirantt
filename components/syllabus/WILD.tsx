"use client"
import React from 'react'

const WILD = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              WHEEL IMPACT LOAD DETECTOR
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">(WILD)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A critical wayside monitoring system used by Indian Railways to enhance safety and efficiency by detecting defects in train wheels through dynamic impact force measurement.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  The Wheel Impact Load Detector (WILD) is a critical wayside monitoring system used by Indian Railways to enhance safety and efficiency by detecting defects in train wheels. It measures the dynamic impact forces exerted by wheels on the rail, identifying issues like flat spots, out-of-round wheels, built-up treads, shelled treads, or suspension defects (e.g., faulty springs or shock absorbers). These defects can cause high impact loads, leading to rail damage, increased maintenance costs, and potential derailments.
                </p>
              </div>
            </div>
          </div>

          {/* Purpose and Functionality Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Purpose and Functionality
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Core Objective
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  WILD systems detect excessive wheel impact forces to prevent rail fractures, component breakage, and derailments, ensuring safe and efficient train operations. Early detection allows for timely detachment of defective rolling stock, reducing disruptions and maintenance costs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 px-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex flex-col lg:flex-row text-center gap-4 items-center justify-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  How It Works
                </h3>
                <div className="space-y-3 text-gray-200 text-sm">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Instrumented rails equipped with strain gauges or advanced sensors (e.g., Fiber Bragg Grating or FBG) measure vertical wheel forces as trains pass over a designated track zone.</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Data is collected in real-time, processed, and analyzed to identify defective wheels based on predefined impact load thresholds.</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Alerts for high-impact loads or defective wheels are sent to railway authorities via SMS, email, or a customized graphical user interface (GUI), enabling condition-based maintenance.</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 px-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex flex-col lg:flex-row text-center gap-4 items-center justify-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Key Measurements
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-200 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Impact loads caused by wheel defects</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Number and condition of axles</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Speed of each axle and average train speed</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Average and maximum dynamic wheel loads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technological Advancements Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              Technological Advancements
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  Strain Gauge-Based Systems
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Traditional WILD systems use strain gauges on the rail web to measure shear strain, which corresponds to wheel load. These systems are widely deployed and meet standards set by the Research Designs and Standards Organisation (RDSO).
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Fiber Bragg Grating (FBG) Technology
                </h3>
                <div className="space-y-3 text-gray-200 text-sm">
                  <p>Developed in collaboration with Indian Railways (RDSO), the Indian Institute of Science (IISc), and Lab to Market Innovations Pvt. Ltd. (L2MRail), the FBG-based WILD system uses optical sensors to detect micro-level strain, pressure, and temperature variations.</p>
                  <div className="mt-4 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-400/30 backdrop-blur-sm">
                    <h4 className="text-green-300 font-bold mb-2">Advantages:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Immunity to electromagnetic interference (EMI) from 25kV traction systems and lightning</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Scalability to monitor multiple points on a single fiber line</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Precise data collection at high speeds and heavy axle loads</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">Deployed at two Indian Railways locations since June 2021, with satisfactory performance. Indian Railways plans to install over 400 such systems across its network.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                  Emerging Technologies
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  RDSO is exploring alternative technologies like Rayleigh back scattering and load cells to enhance WILD accuracy and functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              Key Features of WILD Systems in India
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mr-3 animate-pulse"></span>
                    Real-Time Monitoring
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm">
                    Processes data instantly, classifying wheels based on impact load and sending immediate notifications for defects.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                    Accuracy and Reliability
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm">
                    Systems like ApnaTech&apos;s apnaWILD, which powers 70% of WILD installations in India, have outperformed imported systems in benchmarking studies for accurate fault detection.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                    Automation
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm">
                    Operates 24/7 without human intervention, transmitting reports to central servers accessible via web interfaces or dedicated control room displays.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
                    Comprehensive Data
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm">
                    Identifies the exact position of defective wheels, counts axles, and distinguishes between rake types (ICF, LHB, goods trains), enhancing maintenance precision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Updates and Impact Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Recent Updates and Impact
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                  Deployment and Scale
                </h3>
                <div className="space-y-3 text-gray-200 text-sm">
                  <p>Indian Railways has been transitioning from manual wheel flat detection (based on sound at yard entrances) to automated WILD systems, which provide objective and reliable outputs in terms of impact load.</p>
                <p>ApnaTech installed India&apos;s first WILD system over a decade ago, and their solutions now dominate the market due to their &quot;Made in India&quot; approach and superior performance.</p>
                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                    <p className="text-blue-300 font-bold mb-2">Performance Statistics (June 2023 - June 2025):</p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-300">24,735</div>
                        <div className="text-gray-300">Trains Examined</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-300">1,286,789</div>
                        <div className="text-gray-300">Wagons/Locos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-300">34,304</div>
                        <div className="text-gray-300">Defects Identified</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 px-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex flex-col lg:flex-row text-center gap-4 items-center justify-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                    Safety and Cost Benefits
                  </h3>
                  <div className="space-y-2 text-gray-200 text-sm">
                    <div className="flex items-start">
                      <svg className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Early detection of wheel defects reduces rail fractures, component damage, and derailment risks</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Condition-based maintenance enabled by WILD systems minimizes unplanned downtime</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Extends the lifecycle of rolling stock, saving significant costs</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                    Integration with Other Systems
                  </h3>
                  <p className="text-gray-200 lg:text-base text-sm">
                    Indian Railways combines WILD with Acoustic Bearing Detectors (ABD) to monitor both wheel and bearing health, further improving safety.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Research and Validation Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              Research and Validation
            </h2>
            <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                In May 2025, MxV Rail&apos;s research (relevant to Indian Railways&apos; standards) validated WILD performance using high-accuracy onboard instrumented wheelsets and portable rail bumps, achieving <strong className="text-indigo-300">95% measurement accuracy within ±5%</strong> for impact forces. This work supports updates to AAR standards, which Indian Railways may adopt.
              </p>
            </div>
          </div>

          {/* Challenges and Future Directions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Challenges and Future Directions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  Accuracy vs. Complexity
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  RDSO emphasizes that WILD systems must balance high accuracy with simplicity to avoid excessive costs and complexity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Expansion Plans
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  Indian Railways aims to deploy over 400 WILD systems to cover its vast network, indicating a significant investment in this technology.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Indigenous Development
                </h3>
                <p className="text-gray-200 lg:text-base text-sm">
                  The focus on locally developed systems like ApnaTech&apos;s apnaWILD and FBG-WILD reflects India&apos;s push for self-reliance in railway technology.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Conclusion
            </h2>
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base text-center leading-relaxed">
                The Wheel Impact Load Detector is a cornerstone of Indian Railways&apos; safety and maintenance strategy, leveraging advanced technologies like strain gauges and FBG sensors to monitor wheel health in real-time. With ongoing deployments, indigenous innovations, and plans for network-wide coverage, WILD systems are significantly reducing risks and costs while enhancing operational reliability.
              </p>
            </div>
          </div>

          {/* Download PDF Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 lg:px-4 px-2 border border-white/20">
            <div className="text-center">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Download Wheel Impact Load Detector PDF File
              </h2>
                             <p className="text-gray-200 lg:text-lg text-base mb-8 max-w-2xl mx-auto">
                 Get the complete WILD study material in PDF format. The PDF will automatically open after download for immediate viewing.
               </p>
                             <button 
                 onClick={() => {
                   // Create a temporary link element
                   const link = document.createElement('a');
                   link.href = '/syllabus/WILD.pdf';
                   
                   // For mobile devices, try to open in new tab first
                   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                     // Mobile device - open in new tab
                     window.open('/syllabus/WILD.pdf', '_blank');
                   } else {
                     // Desktop - download and open
                     link.download = 'WILD_Study_Material.pdf';
                     link.click();
                     
                     // Try to open the PDF after a short delay
                     setTimeout(() => {
                       window.open('/syllabus/WILD.pdf', '_blank');
                     }, 1000);
                   }
                 }}
                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-red-400/30 backdrop-blur-sm cursor-pointer"
               >
                 <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 Download & Open PDF
               </button>
              <p className="text-gray-300 text-sm mt-4">
                Click to download the complete WILD study material
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default WILD