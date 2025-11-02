"use client"
import React, { useState, useEffect } from 'react'
import { Calendar, Clock, FileText, ChevronDown, ChevronUp, CheckCircle, ExternalLink, BookOpenCheck, UserCheck, Stethoscope, GraduationCap, Building2, Coins, Baby, Activity, Shield, Briefcase, Users, AlertCircle, TrendingUp, LogOut, FileCheck, Calculator, CreditCard, Heart, Hospital, BookOpen, XCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

const LeaveRules1949Index = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [openingPDF, setOpeningPDF] = useState<string | null>(null)
  const [openingContent, setOpeningContent] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => {
      if (prev.includes(sectionId)) {
        return prev.filter(id => id !== sectionId)
      }
      return [sectionId]
    })
  }

  const openPDF = (ruleNumber: string) => {
    const pdfFileName = `LEAVERULES1949RULE${ruleNumber}.pdf`
    const pdfPath = `/leave-rules-1949/${pdfFileName}`
    
    setOpeningPDF(ruleNumber)
    setTimeout(() => {
      if (isMobile) {
        window.location.href = pdfPath
      } else {
        window.open(pdfPath, '_blank')
        setOpeningPDF(null)
      }
    }, 100)
  }

  const openContent = (ruleNumber: string) => {
    setOpeningContent(ruleNumber)
    
    setTimeout(() => {
      router.push(`/leave-rules-1949/content/${ruleNumber}`)
      setOpeningContent(null)
    }, 100)
  }

  const rules = [
    { number: "501", title: "Short title.-", icon: <FileText className="w-5 h-5" />, color: "from-emerald-500 to-emerald-600" },
    { number: "502", title: "Extent of application", icon: <FileCheck className="w-5 h-5" />, color: "from-teal-500 to-teal-600" },
    { number: "503", title: "Right of leave", icon: <UserCheck className="w-5 h-5" />, color: "from-cyan-500 to-cyan-600" },
    { number: "504", title: "Effect of dismissal, removal or resignation on leave at credit", icon: <XCircle className="w-5 h-5" />, color: "from-red-500 to-red-600" },
    { number: "505", title: "Conversion of one kind of leave into another", icon: <TrendingUp className="w-5 h-5" />, color: "from-purple-500 to-purple-600" },
    { number: "506", title: "Commencement and end of leave.-", icon: <Clock className="w-5 h-5" />, color: "from-indigo-500 to-indigo-600" },
    { number: "507", title: "Combination of different kinds of leave", icon: <Calendar className="w-5 h-5" />, color: "from-blue-500 to-blue-600" },
    { number: "508", title: "Combination of holidays with leave", icon: <Calendar className="w-5 h-5" />, color: "from-sky-500 to-sky-600" },
    { number: "509", title: "Employment during leave", icon: <Briefcase className="w-5 h-5" />, color: "from-amber-500 to-amber-600" },
    { number: "510", title: "Maximum amount of continuous leave", icon: <Clock className="w-5 h-5" />, color: "from-orange-500 to-orange-600" },
    { number: "511", title: "Application for leave", icon: <FileText className="w-5 h-5" />, color: "from-green-500 to-green-600" },
    { number: "512", title: "Grant of leave.-Priority of claim to leave", icon: <UserCheck className="w-5 h-5" />, color: "from-lime-500 to-lime-600" },
    { number: "513", title: "Leave account", icon: <Calculator className="w-5 h-5" />, color: "from-emerald-600 to-emerald-700" },
    { number: "514", title: "Verification of title to leave", icon: <FileCheck className="w-5 h-5" />, color: "from-teal-600 to-teal-700" },
    { number: "515", title: "Leave when not to be granted", icon: <XCircle className="w-5 h-5" />, color: "from-red-600 to-red-700" },
    { number: "516", title: "Recall to duty before expiry of leave", icon: <LogOut className="w-5 h-5" />, color: "from-rose-500 to-rose-600" },
    { number: "517", title: "Return to duty from leave", icon: <UserCheck className="w-5 h-5" />, color: "from-cyan-600 to-cyan-700" },
    { number: "518", title: "Absence after the expiry of leave", icon: <AlertCircle className="w-5 h-5" />, color: "from-amber-600 to-amber-700" },
    { number: "519", title: "Grant of leave on medical certificate.- General rules", icon: <Stethoscope className="w-5 h-5" />, color: "from-pink-500 to-pink-600" },
    { number: "520", title: "Grant of leave on Medical certificate to Group A and Group B officers", icon: <Stethoscope className="w-5 h-5" />, color: "from-pink-600 to-pink-700" },
    { number: "521", title: "Grant of leave on medical certificate to Group C & D Railway servants.", icon: <Stethoscope className="w-5 h-5" />, color: "from-pink-700 to-pink-800" },
    { number: "522", title: "Leave to a railway servant who is unlikely to be fit to return to duty", icon: <Hospital className="w-5 h-5" />, color: "from-red-700 to-red-800" },
    { number: "523", title: "Leave on average pay", icon: <Coins className="w-5 h-5" />, color: "from-yellow-500 to-yellow-600" },
    { number: "524", title: "Calculation of leave on average pay", icon: <Calculator className="w-5 h-5" />, color: "from-yellow-600 to-yellow-700" },
    { number: "525", title: "Leave applicable to school staff", icon: <GraduationCap className="w-5 h-5" />, color: "from-violet-500 to-violet-600" },
    { number: "526", title: "Leave on half average pay", icon: <Coins className="w-5 h-5" />, color: "from-yellow-700 to-yellow-800" },
    { number: "527", title: "Commuted leave", icon: <CreditCard className="w-5 h-5" />, color: "from-green-600 to-green-700" },
    { number: "528", title: "Leave not due", icon: <Clock className="w-5 h-5" />, color: "from-indigo-600 to-indigo-700" },
    { number: "529", title: "Leave not due to temporary railway employees", icon: <Clock className="w-5 h-5" />, color: "from-indigo-700 to-indigo-800" },
    { number: "530", title: "Extraordinary leave", icon: <Calendar className="w-5 h-5" />, color: "from-blue-600 to-blue-700" },
    { number: "531", title: "Leave to probationers and a railway servant on probation", icon: <UserCheck className="w-5 h-5" />, color: "from-teal-700 to-teal-800" },
    { number: "532", title: "Leave to Special Class Railway Apprentices", icon: <GraduationCap className="w-5 h-5" />, color: "from-violet-600 to-violet-700" },
    { number: "533", title: "Leave to Apprentice Mechanics", icon: <Briefcase className="w-5 h-5" />, color: "from-orange-600 to-orange-700" },
    { number: "534", title: "Leave to Trade Apprentices", icon: <GraduationCap className="w-5 h-5" />, color: "from-violet-700 to-violet-800" },
    { number: "535", title: "Leave to other apprentices", icon: <GraduationCap className="w-5 h-5" />, color: "from-purple-600 to-purple-700" },
    { number: "536", title: "Extraordinary leave to apprentices", icon: <Calendar className="w-5 h-5" />, color: "from-blue-700 to-blue-800" },
    { number: "537", title: "General conditions for grant of leave to apprentices", icon: <FileText className="w-5 h-5" />, color: "from-emerald-700 to-emerald-800" },
    { number: "538", title: "Leave to persons re-employed after retirement", icon: <Users className="w-5 h-5" />, color: "from-sky-600 to-sky-700" },
    { number: "539", title: "Leave to Workshop staff", icon: <Building2 className="w-5 h-5" />, color: "from-cyan-700 to-cyan-800" },
    { number: "540", title: "Leave preparatory to retirement", icon: <LogOut className="w-5 h-5" />, color: "from-rose-600 to-rose-700" },
    { number: "541", title: "Leave beyond the date of retirement or quitting service", icon: <LogOut className="w-5 h-5" />, color: "from-rose-700 to-rose-800" },
    { number: "542", title: "Leave on termination of employment", icon: <XCircle className="w-5 h-5" />, color: "from-red-800 to-red-900" },
    { number: "543", title: "Drawal of leave salary", icon: <CreditCard className="w-5 h-5" />, color: "from-green-700 to-green-800" },
    { number: "544", title: "Leave Salary", icon: <Coins className="w-5 h-5" />, color: "from-yellow-800 to-yellow-900" },
    { number: "545", title: "Leave Salary to Workshop Staff", icon: <Building2 className="w-5 h-5" />, color: "from-cyan-800 to-cyan-900" },
    { number: "546", title: "Leave salary to Running staff", icon: <Activity className="w-5 h-5" />, color: "from-orange-700 to-orange-800" },
    { number: "547", title: "Reckoning of special pay for leave salary", icon: <Calculator className="w-5 h-5" />, color: "from-amber-700 to-amber-800" },
    { number: "548", title: "Advance of leave Salary", icon: <CreditCard className="w-5 h-5" />, color: "from-green-800 to-green-900" },
    { number: "549", title: "Cash equivalent of leave salary in case of death in service", icon: <Shield className="w-5 h-5" />, color: "from-slate-600 to-slate-700" },
    { number: "550", title: "Cash payment in lieu of unutilised leave on average pay on the date of retirement", icon: <Coins className="w-5 h-5" />, color: "from-yellow-900 to-yellow-950" },
    { number: "551", title: "Maternity leave", icon: <Baby className="w-5 h-5" />, color: "from-pink-800 to-pink-900" },
    { number: "552", title: "Special disability leave for injury intentionally inflicted", icon: <Hospital className="w-5 h-5" />, color: "from-red-900 to-red-950" },
    { number: "553", title: "Special disability leave for accidental injury", icon: <Hospital className="w-5 h-5" />, color: "from-red-800 to-red-900" },
    { number: "554", title: "Hospital leave", icon: <Hospital className="w-5 h-5" />, color: "from-red-700 to-red-800" },
    { number: "555", title: "Quarantine Leave", icon: <Shield className="w-5 h-5" />, color: "from-slate-700 to-slate-800" },
    { number: "556", title: "Study Leave", icon: <BookOpen className="w-5 h-5" />, color: "from-indigo-800 to-indigo-900" },
    { number: "557", title: "Miscellaneous", icon: <FileText className="w-5 h-5" />, color: "from-gray-600 to-gray-700" }
  ]

  // Group rules into logical chapters
  const chapters = [
    {
      id: 1,
      title: "PRELIMINARY",
      icon: <FileText className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      description: "Short title and extent of application",
      rules: rules.slice(0, 2)
    },
    {
      id: 2,
      title: "GENERAL LEAVE PROVISIONS",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Right of leave, conversion, combination and employment during leave",
      rules: rules.slice(2, 10)
    },
    {
      id: 3,
      title: "LEAVE APPLICATION AND PROCEDURES",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      description: "Application, grant, account verification and return procedures",
      rules: rules.slice(10, 18)
    },
    {
      id: 4,
      title: "MEDICAL LEAVE",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      description: "Leave on medical certificate for different groups and special cases",
      rules: rules.slice(18, 22)
    },
    {
      id: 5,
      title: "TYPES OF LEAVE",
      icon: <Clock className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      description: "Average pay, half pay, commuted, not due and extraordinary leave",
      rules: rules.slice(22, 30)
    },
    {
      id: 6,
      title: "LEAVE FOR APPRENTICES AND PROBATIONERS",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-violet-500 to-violet-600",
      description: "Leave provisions for apprentices, probationers and special classes",
      rules: rules.slice(30, 37)
    },
    {
      id: 7,
      title: "LEAVE FOR RETIRING AND RE-EMPLOYED STAFF",
      icon: <LogOut className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      description: "Leave preparatory to retirement, re-employment and termination",
      rules: rules.slice(37, 42)
    },
    {
      id: 8,
      title: "LEAVE SALARY AND BENEFITS",
      icon: <Coins className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Drawal, calculation, advance and cash payments of leave salary",
      rules: rules.slice(42, 50)
    },
    {
      id: 9,
      title: "SPECIAL LEAVE TYPES",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Maternity, disability, hospital, quarantine and study leave",
      rules: rules.slice(50, 57)
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 lg:p-3 p-2 rounded-full">
                <Calendar className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              RAILWAY SERVICES (LIBERALISED LEAVE) RULES, 1949
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-cyan-300 mb-4">COMPLETE INDEX</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive Rule Index for Railway Services (Liberalised Leave) Rules 1949 - Complete regulatory framework covering 
              all 57 rules with detailed provisions governing leave entitlements, procedures, and benefits for railway servants.
            </p>
            <div className="mt-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-4 backdrop-blur-sm border border-emerald-400/30">
              <p className="text-emerald-200 font-medium">Railway Services (Liberalised Leave) Rules 1949 - Regulatory Reference Document</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Chapter Header */}
                  <div 
                    className={`bg-gradient-to-r ${chapter.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleSection(chapter.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Chapter Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {chapter.icon}
                      </div>
                      
                      {/* Chapter Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          Chapter {chapter.id === 1 ? 'I' : chapter.id === 2 ? 'II' : chapter.id === 3 ? 'III' : chapter.id === 4 ? 'IV' : chapter.id === 5 ? 'V' : chapter.id === 6 ? 'VI' : chapter.id === 7 ? 'VII' : chapter.id === 8 ? 'VIII' : 'IX'}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                          {chapter.title}
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                          {chapter.description}
                        </p>
                      </div>
                      
                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Rules Count */}
                      <p className="text-white/70 text-sm font-medium mb-4">
                        Rules: {chapter.rules.length}
                      </p>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedSections.includes(chapter.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rules List */}
                  {expandedSections.includes(chapter.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {chapter.rules.map((rule, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className={`flex-shrink-0 w-16 h-8 bg-gradient-to-r ${rule.color} text-white rounded-lg flex items-center justify-center text-xs font-semibold`}>
                              {rule.number}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start space-x-3 mb-2">
                                <div className="mt-0.5 text-white/70">
                                  {rule.icon}
                                </div>
                                <p className="text-gray-200 font-medium text-sm lg:text-base flex-1">
                                  {rule.title}
                                </p>
                              </div>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Document Button */}
                                <button
                                  onClick={() => openPDF(rule.number)}
                                  disabled={openingPDF === rule.number}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingPDF === rule.number
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingPDF === rule.number ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  <span>{openingPDF === rule.number ? 'Opening...' : 'View Document'}</span>
                                  {!isMobile && openingPDF !== rule.number && <ExternalLink className="w-3 h-3" />}
                                </button>
                                
                                {/* View Content Button */}
                                <button
                                  onClick={() => openContent(rule.number)}
                                  disabled={openingContent === rule.number}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingContent === rule.number
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingContent === rule.number ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <BookOpenCheck className="w-4 h-4" />
                                  )}
                                  <span>{openingContent === rule.number ? 'Opening...' : 'View Content'}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete Railway Services (Liberalised Leave) Rules 1949 Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all 57 rules of the Railway Services (Liberalised Leave) Rules 1949, providing complete regulatory 
                  framework for leave entitlements, procedures, salary calculations, and special leave provisions for railway servants.
                </p>
              </div>
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

export default LeaveRules1949Index
