"use client"
import React from 'react'
import { BookOpen, FileText, Users, Shield, Settings, Gavel, Train, Building, Wrench, Scale, Clock, AlertTriangle, CheckCircle, Star, Car, MapPin, Database, Circle, ArrowRight, CheckCircle2, Info, AlertCircle, Zap, Target, Award, Heart, Globe, Lock, Eye, Handshake, Briefcase, Home, Truck, Package, Route, Hammer, Search, Phone, Mail, Calendar, User, Key, Lightbulb, Rocket, ShieldCheck, TrendingUp, Users2, Settings2, Globe2 } from 'lucide-react'

const IRAct1989 = () => {
  const chapters = [
    {
      title: "Chapter I: Preliminary",
      icon: <FileText className="w-6 h-6" />,
      sections: [
        "Section 1: Short title and commencement",
        "Section 2: Definitions"
      ],
      total: 2,
      color: "blue",
      description: "Basic definitions and commencement provisions"
    },
    {
      title: "Chapter II: Railway Administrations",
      icon: <Building className="w-6 h-6" />,
      sections: [
        "Section 3: Zonal Railways",
        "Section 4: Appointment of General Manager"
      ],
      total: 2,
      color: "green",
      description: "Administrative structure and appointments"
    },
    {
      title: "Chapter IIA: Rail Land Development Authority",
      icon: <Settings className="w-6 h-6" />,
      sections: [
        "Section 4A: Establishment of Railway Land Development Authority",
        "Section 4B: Composition of Authority",
        "Section 4C: Terms and conditions of appointment of Vice-Chairman and other Members",
        "Section 4D: Functions of Authority",
        "Section 4E: Powers of Authority to enter into agreements and execute contracts",
        "Section 4F: Procedure of transaction of business of Authority",
        "Section 4G: Appointment of officers and other employees of Authority",
        "Section 4H: Salaries, allowances, etc., to be defrayed out of Consolidated Fund of India",
        "Section 4I: Power of Authority to make regulations"
      ],
      total: 9,
      color: "purple",
      description: "Land development and authority management"
    },
    {
      title: "Chapter III: Commissioners of Railway Safety",
      icon: <Shield className="w-6 h-6" />,
      sections: [
        "Section 5: Appointment of Chief Commissioner of Railway Safety and Commissioners of Railway Safety",
        "Section 6: Duties of Commissioner",
        "Section 7: Powers of Commissioner",
        "Section 8: Commissioner to be public servant",
        "Section 9: Facilities to be afforded to Commissioners",
        "Section 10: Annual report of Commissioners"
      ],
      total: 6,
      color: "red",
      description: "Safety oversight and regulatory framework"
    },
    {
      title: "Chapter IV: Construction and Maintenance of Works",
      icon: <Wrench className="w-6 h-6" />,
      sections: [
        "Section 11: Power of railway administrations to execute all necessary works",
        "Section 12: Power to alter the position of pipe, electric supply line, drain or sewer, etc.",
        "Section 13: Protection for Government property",
        "Section 14: Temporary entry upon land to remove obstruction, to repair or to prevent accident",
        "Section 15: Payment of amount for damage or loss",
        "Section 16: Accommodation works",
        "Section 17: Power of owner, occupier, State Government or local authority to cause additional accommodation works to be made",
        "Section 18: Fences, gates and bars",
        "Section 19: Overbridges and underbridges",
        "Section 20: Power of Central Government to give directions for safety"
      ],
      total: 10,
      color: "orange",
      description: "Infrastructure development and maintenance"
    },
    {
      title: "Chapter IVA: Land Acquisition for a Special Railway Project",
      icon: <BookOpen className="w-6 h-6" />,
      sections: [
        "Section 20A: Power to acquire land, etc.",
        "Section 20B: Power to enter for survey, etc.",
        "Section 20C: Evaluation of damages during survey, measurement, etc.",
        "Section 20D: Hearing of objections, etc.",
        "Section 20E: Declaration of acquisition",
        "Section 20F: Determination of amount payable as compensation",
        "Section 20G: Criterion for determination of market-value of land",
        "Section 20H: Deposit and payment of amount",
        "Section 20I: Power to take possession",
        "Section 20J: Right to enter into land where land has vested in Central Government",
        "Section 20K: Competent authority to have certain powers of civil court",
        "Section 20L: Utilisation of land for the purpose it is acquired",
        "Section 20M: Sharing with landowners the difference in price of a land when transferred for a higher consideration",
        "Section 20N: Land Acquisition Act 1 of 1894 not to apply",
        "Section 20O: Application of the National Rehabilitation and Resettlement Policy, 2007 to persons affected due to land acquisition",
        "Section 20P: Power to make rules in respect of matters in this Chapter"
      ],
      total: 16,
      color: "indigo",
      description: "Land acquisition and compensation procedures"
    },
    {
      title: "Chapter V: Opening of Railways",
      icon: <Train className="w-6 h-6" />,
      sections: [
        "Section 21: Sanction of the Central Government to the opening of railway",
        "Section 22: Formalities to be complied with before giving sanction to the opening of a railway",
        "Section 23: Sections 21 and 22 to apply to the opening of certain works",
        "Section 24: Temporary suspension of traffic",
        "Section 25: Power to close railway opened for the public carriage of passengers",
        "Section 26: Re-opening of closed railway",
        "Section 27: Use of rolling stock",
        "Section 28: Delegation of powers",
        "Section 29: Power to make rules in respect of matters in this Chapter"
      ],
      total: 9,
      color: "teal",
      description: "Railway operations and traffic management"
    },
    {
      title: "Chapter VI: Fixation of Rates",
      icon: <Gavel className="w-6 h-6" />,
      sections: [
        "Section 30: Power to fix rates",
        "Section 31: Power to classify commodities or alter rates",
        "Section 32: Power of railway administration to charge certain rates"
      ],
      total: 3,
      color: "pink",
      description: "Pricing and rate determination"
    },
    {
      title: "Chapter VII: Railway Rates Tribunal",
      icon: <Users className="w-6 h-6" />,
      sections: [
        "Section 33: Constitution of the Railway Rates Tribunal",
        "Section 34: Staff of the Tribunal",
        "Section 35: Sittings of the Tribunal",
        "Section 36: Complaints against a railway administration",
        "Section 37: Matters not within the jurisdiction of the Tribunal",
        "Section 38: Powers of the Tribunal",
        "Section 39: Reference to the Tribunal",
        "Section 40: Assistance by the Central Government",
        "Section 41: Burden of proof, etc.",
        "Section 42: Decision, etc., of the Tribunal",
        "Section 43: Bar of jurisdiction of courts",
        "Section 44: Reliefs which the Tribunal may grant",
        "Section 45: Revision of decisions given by the Tribunal",
        "Section 46: Execution of decisions or orders of the Tribunal",
        "Section 47: Report to the Central Government",
        "Section 48: Power of the Tribunal to make regulations"
      ],
      total: 16,
      color: "cyan",
      description: "Dispute resolution and tribunal procedures"
    },
    {
      title: "Chapter VIII: Carriage of Passengers",
      icon: <Users className="w-6 h-6" />,
      sections: [
        "Section 49: Exhibition of certain timings and tables of fares at stations",
        "Section 50: Supply of tickets on payment of fare",
        "Section 51: Provision for case in which ticket is issued for class or train not having accommodation for additional passengers",
        "Section 52: Cancellation of ticket and refund",
        "Section 53: Prohibition against transfer of certain tickets",
        "Section 54: Exhibition and surrender of passes and tickets",
        "Section 55: Prohibition against travelling without pass or ticket",
        "Section 56: Power to refuse to carry persons suffering from infectious or contagious diseases",
        "Section 57: Maximum number of passengers for each compartment",
        "Section 58: Earmarking of compartment, etc., for ladies",
        "Section 59: Communications between passengers and railway servant in charge of train",
        "Section 60: Power to make rules in respect of matters in this Chapter"
      ],
      total: 12,
      color: "emerald",
      description: "Passenger transportation and ticketing"
    },
    {
      title: "Chapter IX: Carriage of Goods",
      icon: <Car className="w-6 h-6" />,
      sections: [
        "Section 61: Maintenance of rate-books, etc., for carriage of goods",
        "Section 62: Conditions for receiving, etc., of goods",
        "Section 63: Provisions of risk rates",
        "Section 64: Forwarding note",
        "Section 65: Railway receipt",
        "Section 66: Power to require statement relating to the description of goods",
        "Section 67: Carriage of dangerous or offensive goods",
        "Section 68: Carriage of animals suffering from infectious or contagious diseases",
        "Section 69: Deviation of route",
        "Section 70: Prohibition of undue preference",
        "Section 71: Power to give direction in regard to carriage of certain goods",
        "Section 72: Maximum carrying capacity for wagons and trucks",
        "Section 73: Punitive charge for overloading a wagon",
        "Section 74: Passing of property in the goods covered by railway receipt",
        "Section 75: Section 74 not to affect right of stoppage in transit or claims for freight",
        "Section 76: Surrender of railway receipt",
        "Section 77: Power of railway administration to deliver goods or sale proceeds thereof in certain cases",
        "Section 78: Power to measure, weigh, etc.",
        "Section 79: Weighment of consignment on request of the consignee or endorsee",
        "Section 80: Liability of railway administration for wrong delivery",
        "Section 81: Open delivery of consignments",
        "Section 82: Partial delivery of consignments",
        "Section 83: Lien for freight or any other sum due",
        "Section 84: Unclaimed consignment",
        "Section 85: Disposal of perishable consignments in certain circumstances",
        "Section 86: Sales under sections 83 to 85 not to affect the right to suit",
        "Section 87: Power to make rules in respect of matters in this Chapter"
      ],
      total: 27,
      color: "amber",
      description: "Goods transportation and logistics"
    },
    {
      title: "Chapter X: Special Provisions as to Goods Booked to Notified Stations",
      icon: <MapPin className="w-6 h-6" />,
      sections: [
        "Section 88: Definitions",
        "Section 89: Power to declare notified stations",
        "Section 90: Disposal of unremoved goods at notified stations",
        "Section 91: Price to be paid to person entitled after deducting dues",
        "Section 92: Power to make rules in respect of matters in this Chapter"
      ],
      total: 5,
      color: "lime",
      description: "Special provisions for notified stations"
    },
    {
      title: "Chapter XI: Responsibilities of Railway Administrations as Carriers",
      icon: <Shield className="w-6 h-6" />,
      sections: [
        "Section 93: General responsibility of a railway administration as carrier of goods",
        "Section 94: Goods to be loaded or delivered at a siding not belonging to a railway administration",
        "Section 95: Delay or detention in transit",
        "Section 96: Traffic passing over railways in India and railways in foreign countries",
        "Section 97: Goods carried at owner's risk rate",
        "Section 98: Goods in defective condition or defectively packed",
        "Section 99: Responsibility of a railway administration after termination of transit",
        "Section 100: Responsibility as carrier of luggage",
        "Section 101: Responsibility as a carrier of animals",
        "Section 102: Exoneration from liability in certain cases",
        "Section 103: Extent of monetary liability in respect of any consignment",
        "Section 104: Extent of liability in respect of goods carried in open wagon",
        "Section 105: Right of railway administration to check contents of certain consignment or luggage",
        "Section 106: Notice of claim for compensation and refund of overcharge",
        "Section 107: Applications for compensation for loss, etc., of goods",
        "Section 108: Person entitled to claim compensation",
        "Section 109: Railway administration against which application for compensation for personal injury is to be filed",
        "Section 110: Burden of proof",
        "Section 111: Extent of liability in respect of traffic on more than one railway",
        "Section 112: Power to make rules in respect of matters in this Chapter"
      ],
      total: 20,
      color: "rose",
      description: "Carrier responsibilities and liabilities"
    },
    {
      title: "Chapter XII: Accidents",
      icon: <AlertTriangle className="w-6 h-6" />,
      sections: [
        "Section 113: Notice of railway accident",
        "Section 114: Inquiry by Commissioner",
        "Section 115: Inquiry by railway administration",
        "Section 116: Powers of Commissioner in relation to inquiries",
        "Section 117: Statement made before Commissioner",
        "Section 118: Procedure, etc.",
        "Section 119: No inquiry, investigation, etc., to be made if the Commission of Inquiry is appointed",
        "Section 120: Inquiry into accident not covered by section 113",
        "Section 121: Returns",
        "Section 122: Power to make rules in respect of matters in this Chapter"
      ],
      total: 10,
      color: "red",
      description: "Accident investigation and reporting"
    },
    {
      title: "Chapter XIII: Liability of Railway Administration for Death and Injury to Passengers Due to Accidents",
      icon: <Shield className="w-6 h-6" />,
      sections: [
        "Section 123: Definitions",
        "Section 124: Extent of liability",
        "Section 124A: Compensation on account of untoward incidents",
        "Section 125: Application for compensation",
        "Section 126: Interim relief by railway administration",
        "Section 127: Determination of compensation in respect of any injury or loss of goods",
        "Section 128: Saving as to certain rights",
        "Section 129: Power to make rules in respect of matters in this Chapter"
      ],
      total: 8,
      color: "violet",
      description: "Passenger injury and death compensation"
    },
    {
      title: "Chapter XIV: Regulation of Hours of Work and Period of Rest",
      icon: <Clock className="w-6 h-6" />,
      sections: [
        "Section 130: Definitions",
        "Section 131: Chapter not to apply to certain railway servants",
        "Section 132: Limitation of hours of work",
        "Section 133: Grant of periodical rest",
        "Section 134: Railway servant to remain on duty",
        "Section 135: Supervisors of railway labour",
        "Section 136: Power to make rules in respect of matters in this Chapter"
      ],
      total: 7,
      color: "sky",
      description: "Working hours and rest periods"
    },
    {
      title: "Chapter XV: Penalties and Offences",
      icon: <Gavel className="w-6 h-6" />,
      sections: [
        "Section 137: Fraudulently travelling or attempting to travel without proper pass or ticket",
        "Section 138: Levy of excess charge and fare for travelling without proper pass or ticket or beyond authorised distance",
        "Section 139: Power to remove persons",
        "Section 140: Security for good behaviour in certain cases",
        "Section 141: Needlessly interfering with means of communication in a train",
        "Section 142: Penalty for transfer of tickets",
        "Section 143: Penalty for unauthorised carrying on of business of procuring and supplying of railway tickets",
        "Section 144: Prohibition on hawking, etc., and begging",
        "Section 145: Drunkenness or nuisance",
        "Section 146: Obstructing railway servant in his duties",
        "Section 147: Trespass and refusal to desist from trespass",
        "Section 148: Penalty for making a false statement in an application for compensation",
        "Section 149: Making a false claim for compensation",
        "Section 150: Maliciously wrecking or attempting to wreck a train",
        "Section 151: Damage to or destruction of certain railway properties",
        "Section 152: Maliciously hurting or attempting to hurt persons travelling by railway",
        "Section 153: Endangering safety of persons travelling by railway by wilful act or omission",
        "Section 154: Endangering safety of persons travelling by railway by rash or negligent act or omission",
        "Section 155: Entering into a compartment reserved or resisting entry into a compartment not reserved",
        "Section 156: Travelling on roof, step or engine of a train",
        "Section 157: Altering or defacing pass or ticket",
        "Section 158: Penalty for contravention of any of the provisions of Chapter XIV",
        "Section 159: Disobedience of drivers or conductors of vehicles to directions of railway servant, etc.",
        "Section 160: Opening or breaking a level crossing gate",
        "Section 161: Negligently crossing unmanned level crossing",
        "Section 162: Entering carriage or other place reserved for females",
        "Section 163: Giving false account of goods",
        "Section 164: Unlawfully bringing dangerous goods on a railway",
        "Section 165: Unlawfully bringing offensive goods on a railway",
        "Section 166: Defacing public notices",
        "Section 167: Smoking",
        "Section 168: Provision with respect to commission of offence by the children of acts endangering safety of person travelling on railway",
        "Section 169: Levy of penalty on non-Government railway",
        "Section 170: Recovery of penalty",
        "Section 171: Section 169 or 170 not to preclude Central Government from taking any other action",
        "Section 172: Penalty for intoxication",
        "Section 173: Abandoning train, etc., without authority",
        "Section 174: Obstructing running of train, etc.",
        "Section 175: Endangering the safety of persons",
        "Section 176: Obstructing level crossing",
        "Section 177: False returns",
        "Section 178: Making a false report by a railway servant",
        "Section 179: Arrest for offences under certain sections",
        "Section 180: Arrest of persons likely to abscond, etc.",
        "Section 180A: Inquiry by officer authorised to ascertain commission of offence",
        "Section 180B: Powers of officer authorised to inquire",
        "Section 180C: Report of inquiry",
        "Section 180D: Procedure for inquiry",
        "Section 180E: Search, seizure and arrest how to be made",
        "Section 180F: Cognizance by Court on a complaint made by officer authorised",
        "Section 180G: Punishment for certain offences in relation to inquiry",
        "Section 181: Magistrate having jurisdiction under the Act",
        "Section 182: Place of trial"
      ],
      total: 46,
      color: "stone",
      description: "Penalties and criminal offences"
    },
    {
      title: "Chapter XVI: Miscellaneous",
      icon: <Database className="w-6 h-6" />,
      sections: [
        "Section 183: Power to provide other transport services",
        "Section 184: Taxation on railways by local authorities",
        "Section 185: Taxation on railways for advertisement",
        "Section 186: Protection of action taken in good faith",
        "Section 187: Restriction on execution against railway property",
        "Section 188: Railway servants to be public servants for the purposes of Chapter IX and section 409 of the Indian Penal Code",
        "Section 189: Railway servants not to engage in trade",
        "Section 190: Procedure for delivery to railway administration of property detained by a railway servant",
        "Section 191: Proof of entries in records and documents",
        "Section 192: Service of notice, etc., on railway administration",
        "Section 193: Service of notice, etc., by railway administration",
        "Section 194: Presumption where notice is served by post",
        "Section 195: Representation of railway administration",
        "Section 196: Power to exempt railway from Act",
        "Section 197: Matters supplemental to the definitions of 'railway' and 'railway servant'",
        "Section 198: General power to make rules",
        "Section 199: Rules to be laid before Parliament",
        "Section 200: Repeal and saving"
      ],
      total: 18,
      color: "slate",
      description: "Miscellaneous provisions and general rules"
    }
  ];

  // Array of icons for sections
  const sectionIcons = [
    <Circle className="w-3 h-3" key="circle" />,
    <ArrowRight className="w-3 h-3" key="arrow-right" />,
    <CheckCircle2 className="w-3 h-3" key="check-circle-2" />,
    <Info className="w-3 h-3" key="info" />,
    <AlertCircle className="w-3 h-3" key="alert-circle" />,
    <Zap className="w-3 h-3" key="zap" />,
    <Target className="w-3 h-3" key="target" />,
    <Award className="w-3 h-3" key="award" />,
    <Heart className="w-3 h-3" key="heart" />,
    <Globe className="w-3 h-3" key="globe" />,
    <Lock className="w-3 h-3" key="lock" />,
    <Eye className="w-3 h-3" key="eye" />,
    <Handshake className="w-3 h-3" key="handshake" />,
    <Briefcase className="w-3 h-3" key="briefcase" />,
    <Home className="w-3 h-3" key="home" />,
    <Truck className="w-3 h-3" key="truck" />,
    <Package className="w-3 h-3" key="package" />,
    <Route className="w-3 h-3" key="route" />,
    <Shield className="w-3 h-3" key="shield" />,
    <Gavel className="w-3 h-3" key="gavel" />,
    <Scale className="w-3 h-3" key="scale" />,
    <Hammer className="w-3 h-3" key="hammer" />,
    <Search className="w-3 h-3" key="search" />,
    <Phone className="w-3 h-3" key="phone" />,
    <Mail className="w-3 h-3" key="mail" />,
    <Calendar className="w-3 h-3" key="calendar" />,
    <User className="w-3 h-3" key="user" />,
    <Key className="w-3 h-3" key="key" />,
    <Lightbulb className="w-3 h-3" key="lightbulb" />,
    <Rocket className="w-3 h-3" key="rocket" />,
    <ShieldCheck className="w-3 h-3" key="shield-check" />,
    <TrendingUp className="w-3 h-3" key="trending-up" />,
    <Users2 className="w-3 h-3" key="users-2" />,
    <Settings2 className="w-3 h-3" key="settings-2" />,
    <Globe2 className="w-3 h-3" key="globe-2" />,
    <Star className="w-3 h-3" key="star" />,
    <Award className="w-3 h-3" key="award-2" />,
    <Heart className="w-3 h-3" key="heart-2" />,
    <Lock className="w-3 h-3" key="lock-2" />,
    <Eye className="w-3 h-3" key="eye-2" />,
    <Handshake className="w-3 h-3" key="handshake-2" />,
    <Briefcase className="w-3 h-3" key="briefcase-2" />,
    <Home className="w-3 h-3" key="home-2" />,
    <Truck className="w-3 h-3" key="truck-2" />,
    <Package className="w-3 h-3" key="package-2" />,
    <Route className="w-3 h-3" key="route-2" />,
    <Shield className="w-3 h-3" key="shield-2" />,
    <Gavel className="w-3 h-3" key="gavel-2" />,
    <Scale className="w-3 h-3" key="scale-2" />,
    <Hammer className="w-3 h-3" key="hammer-2" />,
    <Search className="w-3 h-3" key="search-2" />,
    <Phone className="w-3 h-3" key="phone-2" />,
    <Mail className="w-3 h-3" key="mail-2" />,
    <Calendar className="w-3 h-3" key="calendar-2" />,
    <User className="w-3 h-3" key="user-2" />,
    <Key className="w-3 h-3" key="key-2" />,
    <Lightbulb className="w-3 h-3" key="lightbulb-2" />,
    <Rocket className="w-3 h-3" key="rocket-2" />
  ];

  

  const getBgColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-500/20 border-blue-400/30",
      green: "bg-green-500/20 border-green-400/30",
      purple: "bg-purple-500/20 border-purple-400/30",
      red: "bg-red-500/20 border-red-400/30",
      orange: "bg-orange-500/20 border-orange-400/30",
      indigo: "bg-indigo-500/20 border-indigo-400/30",
      teal: "bg-teal-500/20 border-teal-400/30",
      pink: "bg-pink-500/20 border-pink-400/30",
      cyan: "bg-cyan-500/20 border-cyan-400/30",
      emerald: "bg-emerald-500/20 border-emerald-400/30",
      amber: "bg-amber-500/20 border-amber-400/30",
      lime: "bg-lime-500/20 border-lime-400/30",
      rose: "bg-rose-500/20 border-rose-400/30",
      violet: "bg-violet-500/20 border-violet-400/30",
      sky: "bg-sky-500/20 border-sky-400/30",
      stone: "bg-stone-500/20 border-stone-400/30",
      slate: "bg-slate-500/20 border-slate-400/30"
    };
    return colorMap[color] || "bg-gray-500/20 border-gray-400/30";
  };

  const getIconBgClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-500/30",
      green: "bg-green-500/30",
      purple: "bg-purple-500/30",
      red: "bg-red-500/30",
      orange: "bg-orange-500/30",
      indigo: "bg-indigo-500/30",
      teal: "bg-teal-500/30",
      pink: "bg-pink-500/30",
      cyan: "bg-cyan-500/30",
      emerald: "bg-emerald-500/30",
      amber: "bg-amber-500/30",
      lime: "bg-lime-500/30",
      rose: "bg-rose-500/30",
      violet: "bg-violet-500/30",
      sky: "bg-sky-500/30",
      stone: "bg-stone-500/30",
      slate: "bg-slate-500/30"
    };
    return colorMap[color] || "bg-gray-500/30";
  };

  const totalSections = chapters.reduce((sum, chapter) => sum + chapter.total, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDIAN RAILWAYS ACT 1989
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive legal framework governing all aspects of railway operations, safety, and administration in India.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="grid md:grid-cols-4 gap-4 mb-10">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-6 text-white text-center hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <BookOpen className="lg:w-8 lg:h-8 w-6 h-6" />
              </div>
              <h3 className="lg:text-3xl text-xl font-bold mb-2">{chapters.length}</h3>
              <p className="text-blue-200">Chapters</p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl p-6 text-white text-center hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <FileText className="lg:w-8 lg:h-8 w-6 h-6" />
              </div>
              <h3 className="lg:text-3xl text-xl font-bold mb-2">{totalSections}</h3>
              <p className="text-green-200">Sections</p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl p-6 text-white text-center hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <Shield className="lg:w-8 lg:h-8 w-6 h-6" />
              </div>
              <h3 className="lg:text-3xl text-xl font-bold mb-2">24/7</h3>
              <p className="text-purple-200">Safety</p>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-2xl p-6 text-white text-center hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <Gavel className="lg:w-8 lg:h-8 w-6 h-6" />
              </div>
              <h3 className="lg:text-3xl text-xl font-bold mb-2">100%</h3>
              <p className="text-red-200">Compliance</p>
            </div>
          </div>

          {/* Chapters Grid */}
          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${getBgColorClasses(chapter.color)} backdrop-blur-lg rounded-2xl shadow-2xl border hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]`}>
                  {/* Chapter Header */}
                  <div className="p-3 border-b border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-3 items-center">
                        <div className={`lg:p-4 p-3 rounded-full ${getIconBgClasses(chapter.color)} backdrop-blur-sm`}>
                          {chapter.icon}
                        </div>
                        <div className='flex flex-col items-center justify-center gap-1 text-center'>
                          <h3 className="lg:text-2xl text-xl font-bold text-white text-center mb-2">{chapter.title}</h3>
                          <p className="text-gray-300 text-sm mb-2 text-center">{chapter.description}</p>
                          <p className="lg:text-sm text-xs text-gray-400 text-center">
                            Total : {chapter.total} Sections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sections List */}
                  <div className="p-3">
                    <div className="grid md:grid-cols-2 gap-3">
                      {chapter.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="flex items-start space-x-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group/section">
                          <div className="flex-shrink-0 mt-1 text-white group-hover/section:scale-110 transition-transform">
                            {sectionIcons[sectionIndex % sectionIcons.length]}
                          </div>
                          <p className="text-sm leading-relaxed text-gray-200 group-hover/section:text-white transition-colors">{section}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
              Important Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30">
                <h4 className="font-semibold mb-4 text-white flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-emerald-400" />
                  Benefits of the Act
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start">
                    <ShieldCheck className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" />
                    <span>Safe and efficient management of railways</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" />
                    <span>Protection of passenger rights</span>
                  </li>
                  <li className="flex items-start">
                    <Truck className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" />
                    <span>Regulation of goods transportation</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" />
                    <span>Enforcement of safety provisions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                <h4 className="font-semibold mb-4 text-white flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-blue-400" />
                  Application
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start">
                    <Globe className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                    <span>Applies to all railway zones</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                    <span>Passenger and goods transportation</span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                    <span>Applies to railway employees</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                    <span>Also applies to private railways</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-lg p-6 shadow-2xl border border-gray-700/50">
            <div className="text-center">
              <p className="lg:text-lg text-base text-gray-300 mb-2">
                This Act contains all necessary provisions for comprehensive management and regulation of Indian Railways
              </p>
              <p className="text-sm text-gray-400">
                Consult experts for legal advice
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
  );
};

export default IRAct1989;