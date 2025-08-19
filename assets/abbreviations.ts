// Type definition for abbreviation items
type AbbreviationItem = {
  acronym: string;
  fullForm: string;
  explanation?: string;
  reference?: string;
};

export const abbreviations: Record<string, AbbreviationItem[]> = {
  A: [
    {
      acronym: "AAWS",
      fullForm: "Advanced Approach Warning System",
      explanation:
        "A system that warns drivers of an approaching train before they enter the track.",
      reference: "--",
    },
    { 
      acronym: "ACD", 
      fullForm: "Anti Collision Device",
      explanation: "Will be added later",
      reference: "--"
    },
    { 
      acronym: "ACMS", 
      fullForm: "Additional Chief Medical Superintendent",
      explanation: "Will be added later",
      reference: "--"
    },
    { 
      acronym: "ACP", 
      fullForm: "Alarm Chain Pulling",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ACPCNF", fullForm: "Alarm Chain Pulled But Culprit Not Found" },
    { acronym: "ADCR", fullForm: "Analog to Digital Converter Relay" },
    { 
      acronym: "ADGM", 
      fullForm: "Additional Deputy General Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ADMO", fullForm: "Assistant Divisional Medical Officer" },
    { acronym: "ADRM", fullForm: "Additional Divisional Railway Manager" },
    { 
      acronym: "AEN", 
      fullForm: "Assistant Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { 
      acronym: "AFM", 
      fullForm: "Assistant Finance Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "AFRES", 
      fullForm: "Advanced Finance & Railway Earning & Expenditure System",
      explanation: "Will be added later",
      reference: "--"
    },
    { 
      acronym: "AFTO", 
      fullForm: "Automobile Frieght Train Operators",
      explanation: "Will be added later",
      reference: "--"
    },
    { 
      acronym: "AGM", 
      fullForm: "Additional General Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "AIMS", fullForm: "Accounting Information Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "AIRF", fullForm: "All India Railwaymen’s Federation",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "AITUC", fullForm: "All India Trade Union Congress",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "AMA", fullForm: "Authorised Medical Attendant",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "AMC",
      fullForm: "Annual Maintenance Contract",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "AME", fullForm: "Assistant Mechanical Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "AOM", fullForm: "Assistant Operations Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "APO", fullForm: "Assistant Personnel Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ARME", fullForm: "Accident Relief Medical Equipment",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ARMV", fullForm: "Accident Relief Medical Van",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ARPAN", fullForm: "Advanced Railway Pension Access Network",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ARS", fullForm: "All Right Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ART", fullForm: "Accident Relief Train",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ASAR", fullForm: "As Soon As Ready",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ASS", fullForm: "Automatic Stop Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ATLC", fullForm: "Assistant Traction Loco Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ATVM", fullForm: "Automatic Ticket Vending Machine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "AWS", fullForm: "Auxillary Warning System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "AYS", fullForm: "Assistant Yard Master",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  B: [
    { acronym: "BAL", fullForm: "Brake Applied Loop",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BAS", fullForm: "Biometric Attendance System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BCB", fullForm: "Bell Code Button",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BCL", 
      fullForm: "Braithwaite & Co. Limited",
      explanation: "Will be added later",
      reference: "--"
     },
    { acronym: "BCM", fullForm: "Ballast Cleaning Machine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BCU", fullForm: "Brake Control Unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BIC", fullForm: "Bogie Isolation Cock",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BLW", fullForm: "Banaras Locomotive Works",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BMBS", fullForm: "Bogie Mounted Brake System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOBYN", fullForm: "Bogie Open Hopper Wagon Bottom Discharge",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BCXR", fullForm: "Bogie Wagon Covered with Screw Coupling",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "BCXT",
      fullForm: "Bogie Wagon Covered with Transitional Coupling",
    },
    { acronym: "BCN", fullForm: "Bogie Wagon Covered with Air Brake & CTC",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "BCNA",
      fullForm: "Bogie Wagon Covered Arrangement for Improved",
    },
    { acronym: "BEML", fullForm: "Bharat Earth Movers Limited",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BFR", fullForm: "Bogie Flat for Rail (Vaccuum Brake)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BFK", fullForm: "Bogie Flat Container Car",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BFU", fullForm: "Bogie Well Wagon",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BKH", fullForm: "Bogie Open Hopper Wagon (Side Discharge)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BLW", fullForm: "Baldwin Locomotive Works",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOBR", fullForm: "Breach Of Block Rules",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOBRN", fullForm: "Bogie Open Bottom Rapid Dischrge with Pneumatic Brake",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOBSN", fullForm: "Bogie Hopper Wagon Bottom side Discharge with Pneumatic Brake",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOL", fullForm: "Block Over Lap",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOMN", fullForm: "Bogie Open Wagon for Military Loading with Pneumatic Brake",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOST", fullForm: "Bogie Open for Steel with Air Brake & CBC",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "BOXNHS",
      fullForm: "Bogie Open with Air Brake High Speed (CBC)",
    },
    {
      acronym: "BOXNHSM1",
      fullForm: "Bogie Open with Air Brake High Speed Modified 1",
    },
    { acronym: "BOXNAL", fullForm: "Bogie Open with Air Brake Aluminium Body",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOXNEL", fullForm: "Bogie Open with Air Brake Loaded",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOXR", fullForm: "Bogie Open with Screw Coupling",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOXC", fullForm: "Bogie Open with CBC Coupling",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOXT", fullForm: "Bogie Open with Transitional Coupling",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BOXN", fullForm: "Bogie Open for Coal with Air Brake & CBC",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "BOXMN1",
      fullForm: "Bogie Open Air Brake Light Weight Modified 1",
    },
    { acronym: "BOYN", fullForm: "Bogie Open Wagon for Ores Loading with Pneumatic Brake",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BPAC", fullForm: "Block Proving by Axle Counter",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BPC", fullForm: "Brake Power Certificate",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BPT", fullForm: "Blank Paper Ticket",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BRH", fullForm: "Bogie Flat for Rail (Roller Bearing)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BRM", fullForm: "Ballast Regulating Machine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BRNA", fullForm: "Bogie Rail Truck Air",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BRNAHS", fullForm: "Bogie Rail Truck Air High Speed",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BSCL", 
      fullForm: "Burn Standard Company Limited", 
      explanation: "Will be added later", 
      reference: "--" 
    },
    { acronym: "BSLB", fullForm: "Block Section Limit Board",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BTPN", fullForm: "Bogie Tank Wagon for Petrol (Air Brake)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BTPGL", fullForm: "Bogie Tank Wagon for LPG (Vaccum Brake)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BTPGLN", fullForm: "Bogie Tank Wagon for LPG (Air Brake)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BCGT", fullForm: "Brake Van Goods with Transitional Coupling",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "BVGC",
      fullForm: "Brake Van Goods with CBC Coupling 4 Wheeler (Air Brake)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BUD", fullForm: "Basic User Data",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BWEL", 
      fullForm: "Bharat Wagon & Engineering Limited", 
      explanation: "To manufacture Wagons and undertake structural fabrication jobs.", 
      reference: "--" 
    },
    { acronym: "BUZC", fullForm: "4 Wheeler Brake Van",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BUZI", fullForm: "8 Wheeler Brake Van",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BWL", fullForm: "Bogie Well Wagon",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "BWM", fullForm: "Block Working Manual",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  C: [
    { 
      acronym: "CADAT", 
      fullForm: "Computer Aided Drivers Aptitude Test",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "CAMTECH",
      fullForm: "Centre for Advanced Maintenance Technology.",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CAO", fullForm: "Chief Accounts Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CAO", fullForm: "Chief Administrative Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CAT", fullForm: "Central Administrative Tribunal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CB", fullForm: "Caution Board",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CBC", fullForm: "Central Buffer Coupler",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CBS", fullForm: "Chief Booking Supervisor",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "CBTC",
      fullForm: "Communication based train control technology",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CBTC", fullForm: "Chief Ballast Train Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CC", fullForm: "Carrying Capacity",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CCC", fullForm: "Chief Crew Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CCI", fullForm: "Container Corporation of India",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CCM", fullForm: "Chief Commercial Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CCO", fullForm: "Chief Claims Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CDTS", fullForm: "Control Discharge Toilet System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CDU", fullForm: "Cab Display unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CEE", fullForm: "Chief Electrical Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CE", fullForm: "Couple Engine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CELE", fullForm: "Chief Electrical Locomotive Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CELE", fullForm: "Coupled Electric Light Engine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CFTM", fullForm: "Chief Freight Transportation Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CGA", fullForm: "Compassionate Grounds Appointment",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "CGEGIS",
      fullForm: "Central Government Employee Group Insurance Scheme",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CHC", fullForm: "Chief Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CI", fullForm: "Catution Indicator",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CLAP", fullForm: "Comprehensive Logistics Action Plan",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CLCT", fullForm: "Conditional Line Clear Ticket",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CLI", fullForm: "Chief Loco Inspector",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CLW", fullForm: "Chittaranjan Locomotive Works",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CME", fullForm: "Chief Mechanical Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CMI", fullForm: "Chief Mechanical Inspector",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CMM", fullForm: "Coaching Maintenance Management",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CMO", fullForm: "Cheif Medical Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CMPE", fullForm: "Chief Motive Power Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CMS", fullForm: "Crew Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CMS", fullForm: "Chief Medical Superintendent",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CMRL", fullForm: "Cennai Rail Metro Limited",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CNM", fullForm: "Chief Network Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CO", fullForm: "Caution Order",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "COA", fullForm: "Control Office Application",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "COATVM", fullForm: "Cash/Cum Coin And Smart Card Operated Ticket Vending Machine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "COFMOW", fullForm: "Central Organization For Modernization Of Workshop",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "COS", fullForm: "Controller of Stores",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "COIS", fullForm: "Coaching Operations Information System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "COM", fullForm: "Chief Operations Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "COMS", fullForm: "Complaint Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CONCOR", 
      fullForm: "Container Corporation of India Limited",
      explanation: "To develop multi-modal logistics support for India’s international and domestic containerized cargo and trade.",
      reference: "--"
    },
    {
      acronym: "CORE",
      fullForm: "Central Organization for Railway Electrification",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "COTVM", fullForm: "Currency Operated Ticket Vending Machine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CPC", fullForm: "Central Pay Commission",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CPDE", fullForm: "Chief Planning & Design Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CPGO", fullForm: "Chief Public Grievance Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "CPGRAMS",
      fullForm: "Centralized Public Grievance Redress And Monitoring System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CPM", fullForm: "Chief Project Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CPRO", fullForm: "Chief Public Relations Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CPTM", fullForm: "Chief Passenger Transportation Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CRB", fullForm: "Chairman of Railway Board",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CRIS", fullForm: "Centre for Railway Information System",
      explanation: "To provide consultancy and IT services to IR as partners to conceptualize and realize technology initiatives, to build new products or services and to implement prudent business and technology strategies.",
      reference: "--"
    },
    { acronym: "CRRM", fullForm: "Credit from Rail Release Material",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CRS", fullForm: "Commissioner of Railway Safety",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CRSE", fullForm: "Chief Rolling Stock Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CRT", fullForm: "Container Rail Terminal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CSO", fullForm: "Chief Safety Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CSO", fullForm: "Central Standards Office",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CSTE", fullForm: "Chief Signal & Telecommunication Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTARA", fullForm: "Centralized Training Academy for Railway Accounts",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTC", fullForm: "Centralized Traffic Control",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTI", fullForm: "Centralised Training Institutes",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTLC", fullForm: "Chief Train Loco Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTM", fullForm: "Chief Transportation Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTNC", fullForm: "Chief Train Clerk",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTO", fullForm: "Container Train Operators",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTPC", fullForm: "Chief Traction Power Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTPM", fullForm: "Chief Transport Planning Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTR", fullForm: "Combined Train Report",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CTR", fullForm: "Complete Track Renewal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CVO", fullForm: "Chief Vigilance Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CUG", fullForm: "Closed User Group",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CWC", fullForm: "Carriage & Wagon Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CWE", fullForm: "Chief Workshop Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CWM", fullForm: "Chief Workshop Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "CWR", fullForm: "Continuous Welded Rails",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  D: [
    { acronym: "DAC", fullForm: "Digital Axle Counter",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DAO", fullForm: "Divisional Accounts Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DAR", fullForm: "Discipline & Appeal Rules",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DCM", fullForm: "Divisional Commercial Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DCO", fullForm: "Divisional Caution Order",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DCOS", fullForm: "Divisional Controller Of Stores",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DCP", fullForm: "Duty Card Pass",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DCPT", fullForm: "Digital Capacity Planning Tool",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DCRG", fullForm: "Death Cum Retirement Gratuity",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DDC", fullForm: "Department Dealing Clerks",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DDU", fullForm: "Driver Display Unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DEE", fullForm: "Divisional Electrical Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DEMU", fullForm: "Diesel Electrical Multiple Unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DEN", fullForm: "Divisional Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DFC", fullForm: "Dedicated Freight Corridor",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "DFCCIL",
      fullForm: "Dedicated Freight Corridor Corporation of India Limited",
      explanation: "To plan and construct Dedicated Rail Freight Corridors (DFCs) for movement of freight trains on the corridors.",
      reference: "--"
    },
    { acronym: "DFM", fullForm: "Divisional Finance Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DGM", fullForm: "Deputy General Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DLBI", fullForm: "Double Line Block Instrument",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DLE", fullForm: "Diesel Light Engine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DME", fullForm: "Divisional Mechanical Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DMI", fullForm: "Driver Machine Interface",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DMM", fullForm: "Divisional Material Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DMO", fullForm: "Divisional Medical Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DMRC", fullForm: "Delhi Metro Rail Corporation",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DMT", fullForm: "Departmental Material Trains",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DMU", fullForm: "Diesel Multiple Unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DOM", fullForm: "Divisional Operating Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DPC", fullForm: "Diesel Power Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DPC", fullForm: "Divisional Power Control",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DPO", fullForm: "Divisional Personnel Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DPR", fullForm: "Detailed Project Report",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DPWCS", fullForm: "Distributed Power Wireless control System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DRF", fullForm: "Depreciation Reserve Fund",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DRM", fullForm: "Divisional Railway Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DRS", fullForm: "Deficiency Rolling Stock",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DRS", fullForm: "Departmental Review System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DRUCC",
      fullForm: "Divisional Railway Users Consultative Committee",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DS", fullForm: "Derailing Switch",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DSC", fullForm: "Divisional Safety Commissoner",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DSC", fullForm: "Digital Signature Certificate",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DSO", fullForm: "Divisional Safety Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DSTE",
      fullForm: "Divisional Signal & Telecommunication Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DTI", fullForm: "Divisional Traffic Inspector",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DTTC", fullForm: "Divisional Transportation Training Center",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "DTWL", fullForm: "Disabled Train Warning Light ",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  E: [
    { acronym: "EA", fullForm: "Extra Allowances",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EACT", fullForm: "Electronic Allotment for Congested Terminals",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EBD", fullForm: "Emergency Braking Distance",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EBL", fullForm: "Emergency Brake Loop",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EBR", fullForm: "Extra Budgetary Resources",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ECA", fullForm: "Employees Compensation Act",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "e-DAS", fullForm: "Electronic Drawing Approval System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EDD", fullForm: "Early Departure Detention",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EECH", fullForm: "Extreme Emergency Crank Handle",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EFT", fullForm: "Excess Fare Ticket",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EFT", fullForm: "Emergency Field Telephone",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EIMWB", fullForm: "Electronic In - Motion Weigh Bridge",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EIRR", fullForm: "Economic Internal Rate of Return",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EKT", fullForm: "Electronic Key Transmitter",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EMD", fullForm: "Employee Master Data",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EMD", fullForm: "Electro Motive Diesel",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EMU", fullForm: "Electric Multiple Unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EOG", fullForm: "End On Generator",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EOL", fullForm: "Engine On Load",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EOT", fullForm: "End Of Train",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EOTT", fullForm: "End of Train Telemetry",
      explanation: "It comprises of Head of train (HoT) device mounted in the locomotive and End of train (EoT) device mounted on the rear end of rearmost vehicle of the train along with other fittings and accessories complete as per this specifications. ",
      reference: "--"
    },
    { acronym: "EPB", fullForm: "Emergency Power Block",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EPS", fullForm: "E-Procurement System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ESP", fullForm: "Engineering Scale Plan",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ES", fullForm: "Elementary Section",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ESS",
      fullForm: "Employee Self Service & Internal Applications",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ETRR", fullForm: "Electronic Transmission of Railway Receipt",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "EWSS", fullForm: "E-Working Software Solution",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  F: [
    { acronym: "FEMA", fullForm: "Failure Mode & Effects Analysis",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FIBA", fullForm: "Failure Indication and Brake Application",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FIRR", fullForm: "Financial Internal Rate of Return",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FL", fullForm: "Flasher Light",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FM", fullForm: "Fouling Mark",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FMVFT", fullForm: "Frequency Modulated Voice Frequency Telegraph",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FNM", fullForm: "Fort-Nightly Meetings",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FNR", fullForm: "Freight Name Record",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FOIS", fullForm: "Freight Operations & Information System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FRED", fullForm: "Flashing Rear End Device",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FSD", fullForm: "Fag Safe Device",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FSS", fullForm: "First Stop Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FTCB", fullForm: "Fixed Time Corridor Block",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FTR", fullForm: "Full Tariff Rate",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FWP", fullForm: "Final Works Program",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "FWU", fullForm: "Final Works Program",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  G: [
    { acronym: "GAGAN", fullForm: "GPS aided GEO augmented Navigation",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GCT", fullForm: "Gati Shakti Multi-Modal Cargo Terminal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GDC", fullForm: "Grievance Dealing Clerk",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GDCE", fullForm: "General Departmental Competitive Exam",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GDR", fullForm: "Guard Driver Check Report",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GeM", fullForm: "Government e - Market",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GIO", fullForm: "Grievance In-Charge Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GIPR", fullForm: "Great Indian Penisular Railway",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GIS", fullForm: "Group Incentive Scheme",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GM", fullForm: "General Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GNSS", fullForm: "Global Navigation Satellite System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GOB", fullForm: "General Order Book",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GPRS", fullForm: "General Packet Radio Service",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GPS", fullForm: "Global Positioning System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GR", fullForm: "General Rules",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GRP", fullForm: "Government Railway Police",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GRRC", fullForm: "General Rules Review Committee",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GS", fullForm: "Ordinary Second Class",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GSCN", fullForm: "Generation Second Class Three Tier AC",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GSD", fullForm: "General Stores Department",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GSM", fullForm: "Global System for Mobile Communication",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GST", fullForm: "Goods and Services Tax",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GTA", fullForm: "Goods Transporation Agency",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GTKM", fullForm: "Gross Tonne Kilo Meter",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GWB", fullForm: "Goods Warning Board",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GWI", fullForm: "Grievance Welfare Inspector",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "GWR", fullForm: "Gate Working Rules",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  H: [
    { acronym: "HKT", fullForm: "Happer Key Transmitter",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "HMIS", fullForm: "Hospital Management Information System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "HRMS", fullForm: "Human Resource Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "HOER", fullForm: "Hours Of Employment and Period of Rest",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "HOG", fullForm: "Head On Generation",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "HOR", fullForm: "High Official Requisition",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "HSN", fullForm: "Harmonised System of Nomenclature",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "HSRC", 
      fullForm: "High Speed Rail Corporation of India", 
      explanation: "For development and implementation of high speed rail projects.", 
      reference: "--  " 
    },
    { acronym: "HSRI", fullForm: "High Speed Rail Coroporation of India Limited",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "HVML", fullForm: "High Visibility Marker Light",
      explanation: "The marker light portion of the EoT device, flashing light to mark the End of Train (EoT).",
      reference: "--"
    },
  ],
  I: [
    { acronym: "IBH", fullForm: "Intermediate Block Hut",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IBP", fullForm: "Intermediate Block Post",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IBS", fullForm: "Intermediate Block Signalling",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IBSS", fullForm: "Intermediate Block Stop Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ICD", fullForm: "Inland Container Deports",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ICF", fullForm: "IIntegrated Coach Factory",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ICMS", fullForm: "Integrated Coaching Management Systems",  
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ICRTS", fullForm: "Integrated Computerized Reservation & Ticketing System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IDRT", fullForm: "Inter Divisional Request Transfer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IDS", fullForm: "Integration of Digital System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IDS", fullForm: "Inner Distant Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IMR", fullForm: "Immediate Rail Renewal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "INRWF", fullForm: "Indian National Railway Workers’ Federation",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "INTUC", fullForm: "Indian National Trade Union Congress",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IOH", fullForm: "Intermediate Over Hauling",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IOL", fullForm: "Intra Ocular Lens",  
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IOP", fullForm: "Inoperatvie Piston",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IOW", fullForm: "Inspector of Works",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IPAS", fullForm: "Integrated Payroll and Accounting System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IPMD", fullForm: "Infrastructure Projects Monitoring Device",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IPWE", fullForm: "Institution of Permanent Way Engineers",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRAS", fullForm: "Indian Railway Accounts Service",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRCA", fullForm: "Indian Railway Conference Association",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRCON", fullForm: "Indian Railway Construction Corporation", 
      explanation: "To undertake construction activities in India and abroad on turnkey basis or otherwise in various fields of infrastructure like Railways, Bridges, Roads, Highways, Industrial and Residential Complexes, Airports, etc.", 
      reference: "--" 
    },
    {
      acronym: "IRCTC",
      fullForm: "Indian Railway Categoring & Tourism Corporation Limited",
      explanation: "To undertake catering and tourism activities of the Railways. Also facilitates internet ticketing through its website.",
      reference: "--"
    },
    { acronym: "IREM", fullForm: "Indian Railway Establishment Manual",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IREPS", fullForm: "Indian Railway Electronic Procurement System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRFC", 
      fullForm: "Indian Railway Finance corporation",
      explanation: "To raise funds from the market to part finance the Plan Outlay of IR.",
      reference: "--"
    },
    { 
      acronym: "IRCEN", 
      fullForm: "Indian Railways Institute of Civil Engineering",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRHS", fullForm: "Indian Railway Health Services",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRPFS", fullForm: "Indian Railways Protection Force Services",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRIEEN", fullForm: "Indian Railways Institute of Electrical Engineering",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRIFM", fullForm: "Indian Railways Institute of Financial Management",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRILMM", fullForm: "Indian Railways Institute of Logistics & Materials Management",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRIMEE", fullForm: "Indian Railways Institute of Mechanical and Electrical Engineering",  
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRISET", fullForm: "Indian Railways Institute of Signal Engineering and Telecommunications",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRITM", fullForm: "Indian Railways Institute of Transport Management",  
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRLDA", fullForm: "Indian Railways Land Development Authority",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRMM", fullForm: "Indian Railway Medical Manual",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRMS", fullForm: "Indian Railway Medical Service",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRMS", fullForm: "Indian Railway Management Service",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRPS", fullForm: "Indian Railway Personnel Service",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRPSM", fullForm: "Indian Railway Projects & Sanctioning Management",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRPWM", fullForm: "Indian Railways Permanent Way Manual",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRRT", fullForm: "Inter Railway Request Transfer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRSDC", fullForm: "Indian Railway Station Development Corporation",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRSE", fullForm: "Indian Railway Service of Engineers",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRSEE", fullForm: "Indian Railway Service of Electrical Engineers",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRSEM", fullForm: "Indian Railways Signal Engineering Manual",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRSME", fullForm: "Indian Railway Service of Mechanical Engineers",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRSS", fullForm: "Indian Railway Stores Service",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRSSE", fullForm: "Indian Railway Service of Signal Engineers",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRST", fullForm: "Inter Section Running Time",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRTMM", 
      fullForm: "Indian Railway Track Machine Manual",
      explanation: "To provide track maintenance and repair services to the Indian Railways.",
      reference: "IRTMM - 2019"
    },
    { acronym: "IRTRD", fullForm: "Implementation of Regulatory in Traction Distribution",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRTS", fullForm: "Indian Railway Traffic Service",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRWCMS", fullForm: "Indian Railways Works Contract Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IRWO", fullForm: "Indian Railway Welfare Organization",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ISMD", fullForm: "Infringing Standard Moving Dimensions",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ISRT", fullForm: "Inter Station Running Time",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ITC", fullForm: "Input Tax Credit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "IVRS", fullForm: "Interactive voice response system",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  J: [
    { acronym: "JCM", fullForm: "Joint Consultative Machinery",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "JPO", fullForm: "Joint Procedure Order",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "JRRPF", fullForm: "Jagjivan Ram Railway Protection Force Academy",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "JTBS", fullForm: "Jansadharan Ticket Booking Sewak",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  K: [{ acronym: "KRCL", 
    fullForm: "Konkan Railway Corporation Limited",
    explanation: "To construct and operate railway lines, construct Road Over Bridges and rail line projects.",
    reference: "--"
  }],
  L: [
    { acronym: "LAP", fullForm: "Leave on Average Pay",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LAW", fullForm: "List of Approved Works",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LDCE", fullForm: "Limited Departmental Competitive Exam",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LGS", fullForm: "Second Class Coach (LHB)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LGSLR", fullForm: "Second Class Cum Luggage and Brake Van (LHB)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LHAP", fullForm: "Leave on Half Average Pay",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LHB", fullForm: "Linke Holfmann Busch",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LI", fullForm: "Loco Inspector",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LIMBS", fullForm: "Legal Information Management & Briefing System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LRZAC", fullForm: "EOG AC Track Recording Car LHB Variant Coach",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LRDAC", fullForm: "Track Recording Staff Car LHB Variant Coach",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LSFTO", fullForm: "Liberalized Special Freight Train Operators",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LSS", fullForm: "Last Stop Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LTC", fullForm: "Last Train Certificate",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LTC", fullForm: "Leave Travel Concession",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LTTC", fullForm: "Long Term Traffic Contact",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LSWP", fullForm: "Lumpsum Works Program",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LVCD", fullForm: "Last Vehicle Check Device",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LVI", fullForm: "Last Vehicle Indicator",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LWFAC", fullForm: "AC First Class Coach (LHB)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LWACCN", fullForm: "AC 3 Tier Sleeper Coach (LHB)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LWACCW", fullForm: "AC 2 Tier Sleeper Coach (LHB)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LFCBAC", fullForm: "AC Hot Buffer Car (LHB)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LWCB", fullForm: "Non-AC Hot Buffer Car (LHB)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LWLRRM", fullForm: "Brake Luggage Cum Generator Car (LHB)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LWFCZAC", fullForm: "AC Executive Chair Car (LHB)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LWOGCARAC", fullForm: "EOG AC Data Acquisition and Analysis Car",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LWSCN", fullForm: "Non-AC 3 Tier Sleeper Coach (LHB)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LWIS", fullForm: "Liberalized Wagon Investment Scheme",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "LWR", fullForm: "Long Welded Rails",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  M: [
    { acronym: "MACP", fullForm: "Modified Assured Career Progression",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MACL", fullForm: "Multiple Aspect Color Light",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MASA", fullForm: "Multiple Aspect Signalling Arrangement",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MCDO", fullForm: "Monthly Confidential Demi Official",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MDZTI", fullForm: "Multi Disciplinary Zonal Training Institute",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ME", fullForm: "Member Electrical",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MELE", fullForm: "Multiple Electric Light Engine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MEMU", fullForm: "Mainline Electrical Multiple Unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MGR", fullForm: "Many Go Round",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MM", fullForm: "Member Mechanical",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MMD", fullForm: "Maximum Moving Dimensions",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MMTS", fullForm: "Multi Model Transport System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MOBD", fullForm: "Member Operations & Business Development",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MOMA", fullForm: "Manually Operated Multiple Aspect",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MOR", fullForm: "Ministry of Railways",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MOSR", fullForm: "Minister of State for Railways",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MPS", fullForm: "Maximum Permissible Speed",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MRT", fullForm: "Minimum Running Time",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MRTS", fullForm: "Mass Rapid Transport System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MRV", fullForm: "Medical Relief Van",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MRVC", 
      fullForm: "Mumbai Railway Vikas Corporation Limited", 
      explanation: "To plan & implement rail projects in the Mumbai Metropolitan Region.", 
      reference: "--" 
    },
    { acronym: "MSASS", fullForm: "Modified Semi Automatic Stop Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MSS", fullForm: "Manual Stop Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MSD", fullForm: "Minimum sighting Distance",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MSDAC", fullForm: "Multi Section Digital Axle Counter",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MTRC", fullForm: "Mobile Train Radio Communication",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MTI", fullForm: "Material Train Inspector",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "MTRS", fullForm: "Member Traction Rolling Stock",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  N: [
    { acronym: "NAIR", fullForm: "National Academy of Indian Railway",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NCDRC", fullForm: "National Consumer Dispute Redressal Commission",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NDMA", fullForm: "National Disaster Management Authority",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NDR", fullForm: "National Disaster Response Force",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NFIR", fullForm: "National Federation of Indian Railwaymen",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NHSRCL", fullForm: "National High Speed Rail Corporation of India Limited",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NLP", fullForm: "National Logistics Policy",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NMG", fullForm: "Newly Modified Goods",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NMS", fullForm: "Network Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NPG", fullForm: "Network Planning Group",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NPS", fullForm: "New Pension System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NPS", fullForm: "National Pension System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NRP", fullForm: "National Rail Plan",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NRT", fullForm: "Normal Running Time",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NTES", fullForm: "National Train Enquiry System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "NTKM", fullForm: "Net Tonne Kilo Meter",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  O: [
    { acronym: "OBC", fullForm: "Over Bulky Consignment",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OCMS", fullForm: "Online Computerized Monitoring System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OCR", fullForm: "Optical Character Recognition",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OCV", 
      fullForm: "Other Coaching Vehicle",
      explanation: "These vehicles do not have a passenger carrying portion but are planned to be attached to coaching trains for providing other facilities. Saloons, inspection cars, medical cars, tourist cars, parcels & horse van, composite luggage Power Cars, Pantry Cars & brake van are some of the OCVs.",
      reference: "--"
    },
    { acronym: "ODC", fullForm: "Over Dimensional Consignment",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ODR", fullForm: "Oldest Date of Registration",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OFC", fullForm: "Optical Fibre Cable",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OHE", fullForm: "Over Head Equipment",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OLIC", fullForm: "Official Language Implementation Committee",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OM", fullForm: "Operating Manual",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OMRS", fullForm: "On Board Monitoring of Rolling Stock",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ONDC", fullForm: "Open Network for Digital Commerce",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OPS", fullForm: "Old Pension Scheme",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OOT", fullForm: "Out Of Turn",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OTL", fullForm: "One Time Lock",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OTOS", fullForm: "One Train Only System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "OYWS", fullForm: "Own Your Wagon Scheme",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  P: [
    { acronym: "PAD", fullForm: "Pre Arrival Detention",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PAM", fullForm: "Punctuality Analysis & Monitoring",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCC", fullForm: "Permissible Carrying Capacity",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCCM", fullForm: "Principal Chief Commercial Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCDO", fullForm: "Periodical Confidential Demi Official",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCDR", fullForm: "Personal Cash Declaration Register",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCEE", fullForm: "Principal Chief Electrical Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCE", fullForm: "Principal Chief Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCEV", fullForm: "Percentage Charge on Excessive Value",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCMD", fullForm: "Principal Chief Medical Director",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCME", fullForm: "Principal Chief Mechanical Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCMM", fullForm: "Principal Chief Materials Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCOM", fullForm: "Principal Chief Operations Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCPO", fullForm: "Principal Chief Personnel Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCSC", fullForm: "Principal Chief Security Commissioner",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCSO", fullForm: "Principal Chief Safety Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCV", fullForm: "Passenger Carrying Vehicle",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PFRDA", fullForm: "Pension Fund Regulatory and Development Authority",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCSTE",
      fullForm: "Principal Chief Signal and Telecommunication Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PCV", 
      fullForm: "Passenger Coaching Vehicle",
      explanation: "A vehicle in which whole or some portion is being utilized for carrying passengers.",
      reference: "--"
    },
    { acronym: "PCVO", fullForm: "Principal Chief Vigilance Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PDD", fullForm: "Pre Departure Detention",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PDT", fullForm: "Pre Departure Time",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PEASD", fullForm: "Passenger Emergency Alarm Signal Device",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PED", fullForm: "Principal Executive Director",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PETS", fullForm: "Premilinary Engineering cum Traffic Survey",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PFA", fullForm: "Principal Financial Advisor",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PFT", fullForm: "Private Freight Terminals",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PFT", fullForm: "Portable Field Telephone",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PGC", fullForm: "Passenger Gaurd Course",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PGRM", fullForm: "Public Grievance Redressal Machinery",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PGS", fullForm: "Pilot Guard System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PHS", fullForm: "Proceed Hand Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PHOD", fullForm: "Principal Head of Department",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PIA", fullForm: "Project Influence Area",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PLCT", fullForm: "Paper Line Clear Ticket",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PLPM", fullForm: "Pay Level in Pay Matrix",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PME", fullForm: "Periodic Medical Examination",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PME", fullForm: "Periodical Monitoring Examination",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PME", fullForm: "Preventive Maintenance Examination",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PMS", fullForm: "Passenger Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PNM", fullForm: "Permanent Negotiating Machinery",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PNR", fullForm: "Passenger Name record",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "POET", fullForm: "Passenger Operated Enquiry Terminal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "POH", fullForm: "Periodical Over Hauling",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "POL", fullForm: "Petroleum Oil Lubricants",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "POMKA", fullForm: "Portable Medical Kit for Accidents",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "POS", fullForm: "Point of Sale",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PPAN", fullForm: "Permanent Pension Account Number",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PPO", fullForm: "Pension Payment Order",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PQRS", fullForm: "Plasser Quick Relaying System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PRCP", fullForm: "Post Retirement Complimentary Passes",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PREM", fullForm: "Participation of Railway Employees in Management",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PRO", fullForm: "Public Relations Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PRS", fullForm: "Passenger Reservation System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PSC", fullForm: "Pre Stressed Concrete Sleepers",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PSR", fullForm: "Permanent Speed Restrictions",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PSSA", fullForm: "Project Supervisors Services Agencies",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PTO", fullForm: "Preferential Traffic Order",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PTO", fullForm: "Previlege Ticket Order",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PTS", fullForm: "Preferential Time Schedule",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PTT", fullForm: "Public Time Table",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PTVM", fullForm: "Platform Ticket Vending Machine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PVC", fullForm: "Price Variation Cause",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PVIS", fullForm: "Photographic Vehicle Identification System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PWB", fullForm: "Parcel Way Bills",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PWB", fullForm: "Passenger Warning Board",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PWI", fullForm: "Permanent Way Inspector",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "PWP", fullForm: "Preliminary Works Program",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  Q: [
    { acronym: "QCBS", fullForm: "Quality and Cost Based Selection",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RA", fullForm: "Inspection Carriage (Administration)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RAS", fullForm: "Rake Allocation System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RB", fullForm: "Inspection Carriage (Divisional Officers)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RBPC", fullForm: "Round Trip Brake Power Certificate",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RM", fullForm: "Railway Motor Van",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RH", fullForm: "Railway Hospital Van",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RZ", fullForm: "Track Recorder Car",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RAC", fullForm: "Reservation Against Cancellation",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RARV", fullForm: "Road Accident Restoration Vehicles",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RBS", fullForm: "Rates Branch System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RCIL", 
      fullForm: "RailTel Corporation of India Limited", 
      explanation: "To utilize the surplus telecom capacity and right of way available with the IR to build nationwide optical fibre cable based broadband telecom and multimedia network", 
      reference: "--" 
    },
    { acronym: "RCM", fullForm: "Reverse Charge Mechanism",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RCP", fullForm: "Residental Card Pass",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RCT", fullForm: "Railway Claims Tribunal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RDM", fullForm: "Rescue Drive Mode",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RDSO", fullForm: "Research Designs and Standards Organisation",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RDW", fullForm: "Rail Dolly Works",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "REMMLOT", fullForm: "Remote Monitoring and Management of Locomotives and Trains",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RESS", fullForm: "Railway Employee Self Service",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RELHS", fullForm: "Retired Employees Liberalized Health Scheme",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RETS", fullForm: "Reconnaissance Engineering cum Traffic Survey",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RFID", fullForm: "Radio Frequency Identification",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RFMS", fullForm: "Referential File Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { 
      acronym: "RIDE", 
      fullForm: "Rail Infrastructure Development Corporation",
      explanation: "Will be added later",
      reference: "--"
     },
    { acronym: "RITES", fullForm: "Rail India Technical and Economic Services Limited", explanation: "To design, establish, provide, operate, maintain and perform engineering, technical and consultancy services for development of projects/systems of all types and descriptions pertaining to Railways and other Sectors/Industries in India and outside India.", reference: "--" },
    { 
      acronym: "RIU", 
      fullForm: "Remote Interface Unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RKMS", fullForm: "Route Kilometers",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RLDA", 
      fullForm: "Railway Land Development Authority",
      explanation: "To develop vacant railway land for commercial use for the purpose of generating revenue by non-tariff measures for IR.",
      reference: "--"
    },
    { acronym: "RLT", fullForm: "Railway Labour Tribunal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RMP", fullForm: "Registered Medical Practitioner",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RMS", fullForm: "Rake Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ROB", fullForm: "Rail Over Bridge",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ROH", fullForm: "Routine Over Hauling",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RORO", fullForm: "Roll On Roll Off",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ROSHAN", fullForm: "Rolling Stock Health Analyst",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RPF", fullForm: "Railway Protection Force",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RRB", fullForm: "Railway Recruitment Board",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RRC", fullForm: "Railway Recruitment Cell",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RRCB", fullForm: "Railway Recruitment Control Board",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RRI", fullForm: "Route Relay Interlocking",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RRSK", fullForm: "Rashtriya Rail Sanraksha Kosh",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RRT", fullForm: "Railway Rates Tribunal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RSC", fullForm: "Rolling Stock Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RSC", fullForm: "Railway Staff College",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RSHC", fullForm: "RPF Security Helpline",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RSP", fullForm: "Rolling Stock Performance",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RSPB", fullForm: "Railway Safety Promotion Board",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RSIS", fullForm: "Rolling Stock Inspection System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RSMS", fullForm: "RPF Security Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RSS", fullForm: "Reception Stop Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RTIS", fullForm: "Realtime Train Information System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RTRC", fullForm: "Railway Testing & Research Centre",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RTT", fullForm: "Round Trip Tariff",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RUB", fullForm: "Rail Under Bridge",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "RVNL", 
      fullForm: "Rail Vikas Nigam Limited",
      explanation: "To create and augment the capacity of rail infrastructure. To mobilize resources mainly through multilateral/bilateral funding agencies and also through domestic market for successful implementation of projects.",
      reference: "--"
    },
  ],
  S: [
    {
      acronym: "SAMPRATI",
      fullForm:
        "Status Alerts in Monitoring Projects Related Actions & Targets Importance",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SASS", fullForm: "Semi Automatic Stop Signal",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "SATSANG",
      fullForm: "Software Aided Train Scheduling And Network Governance",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SB", fullForm: "Stop Board",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SBAS", fullForm: "Satellite-Based Augmentation System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SBCM", fullForm: "Shoulder Blast Clearing Machine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SBU", fullForm: "Signal & Brake Unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SBU", fullForm: "Sense & Brake Unit",
      explanation: "It is part of EoT.It is capable of determine status of Brake pipe pressure",
      reference: "--"
    },
    { acronym: "SCO", fullForm: "Sectional Caution Order",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SCRA", fullForm: "Special Class Railway Apprentices",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SDGM", fullForm: "Senior Deputy General Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SDIR", fullForm: "Stop Dead If Required",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SFOORTI", fullForm: "Smart Freight Operation Optimisation and Real Time Information",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SG", fullForm: "Self Generated",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SI", fullForm: "Special Instructions",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SI", fullForm: "Speed Indicator",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SIMRAN", fullForm: "Satellite Imaging for Rail Navigation",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SIMS", fullForm: "Safety Information Management System.",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SIP", fullForm: "Signal Interlocking Plan",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SLB", fullForm: "Shunting Limit Board",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SLI", fullForm: "Senior Loco Inspector",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SLO", fullForm: "Specific Loading Order",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SLR", fullForm: "Second Class Luggage & Brake Van",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SLRD", fullForm: "Second Class Luggage, Brake Van & Disabled",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SM", fullForm: "Station Master",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SMART", fullForm: "Specially Modified Asthetic Refreshing Travel",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "SMARTS",
      fullForm: "Singular Modular Advance Railway Ticketing System",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "SMOCIP",
      fullForm: "Station Master Operation Cum Identification Panel",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SOB", fullForm: "Standing Order Book",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SOD", fullForm: "Schedule Of Dimensions",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SOL", fullForm: "Signal Over Lap",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SOP", fullForm: "Schedule Off Powers",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SPAD", fullForm: "Signal Passing At Danger",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "SPARME",
      fullForm: "Self Profelled Accident Relief Medical Equipment",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "SPARROW",
      fullForm: "Smart Performance Appraisal Report Recording Online Window",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SPART", fullForm: "Self Profelled Accident Relief Trains",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "SPASHT",
      fullForm: "Safe Practices Avoiding Shortcut Methods in Train Operations",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SPI", fullForm: "Shunting Permitted Indicator",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SPO", fullForm: "Senior Personnel Officer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SPT", fullForm: "Signal Post Telephone",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SPTM", fullForm: "Self Printing Ticket Machines",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "SPURT",
      fullForm: "Self Profelled Ultrasonic Rail Testing Car",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SR", fullForm: "Subsidiary Rules",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SRIJAN", fullForm: "Station Rejuvenation Initiative through Joint Action",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SRSB", fullForm: "Swachh Rail Swachh Bharat",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SRSF", fullForm: "Special Railway Safety Fund",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "SSBPAC",
      fullForm: "Solid State Block Proving by Axle Counter",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SSD", fullForm: "Speed Sensing Device",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SSDAC", fullForm: "Single section Digital axle counter",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SSE", fullForm: "Senior Section Engineer",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SSI", fullForm: "Solid State Interlocking",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SSP", fullForm: "Sub Sectioning & Paralleling Post",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "STM", fullForm: "Senior Transportation Manager",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "STR", fullForm: "Safety To Run",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "STRI", fullForm: "Stensile Type Route Indication",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "STS", fullForm: "Station to Station Rates",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "STBA", fullForm: "Station Ticket Booking Agent",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SWR", fullForm: "Station Working Rule",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SWRD", fullForm: "Station Working Rule Diagram",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "SYLR", fullForm: "Second Class Ladies, Luggage & Brake Van",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  T: [
    { acronym: "TACL", fullForm: "Two Aspect Colour Light",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "TACLS",
      fullForm: "Train Actuated Control Level Crossing System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TALQ", fullForm: "Two Aspect Lower Quadrant",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TAMS", fullForm: "Traffic Accounts Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TASA", fullForm: "Two Aspect Signalling Arrangement",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TAST", fullForm: "Two Aspect Signalling Territory",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TAWD", fullForm: "Train Actuated Warning Device",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TBR", fullForm: "Through Ballast Renewal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TBTR", fullForm: "Through Bridge Timber Renewal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TCAS", fullForm: "Train Collision Avoidance System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TCC", fullForm: "Travelling Cash Chest",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TCMS", fullForm: "Train Control & Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TDC", fullForm: "Tentative Date of Cancellation",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TDMS", fullForm: "Track Distribution Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TEFD", fullForm: "Traditional Empty Flow Direction",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TFR", fullForm: "Transnet Fright Rail",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TFW", fullForm: "Traffic Facility Works",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TG", fullForm: "Tank for LPG",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TG", fullForm: "Termination for Goods Train",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TIC", fullForm: "Total Interruption of Communication",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TIEL", fullForm: "Terminal Incentive cum Engine on Load",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TIN", fullForm: "Track Identification Number",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TLBI", fullForm: "Token Less Block Instrument",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TLC", fullForm: "Traction Loco Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TK", fullForm: "Tank for Kerosene",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TMC", fullForm: "Terminal Management Company",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TMM", fullForm: "Transfer Management Module",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TMS", fullForm: "Track Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TMS", fullForm: "Terminal Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TP", fullForm: "Tank for Petroleum",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TP", fullForm: "Termination for Passenger Train",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TPC", fullForm: "Traction Power Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TPWS", fullForm: "Train Protection & Warning System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TRD", fullForm: "Traction Distribution",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TRR", fullForm: "Through Rail Renewal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TSL", fullForm: "Temporary Single Line",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TSR", fullForm: "Train Signal Register",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TSR", fullForm: "Temporary Speed Restriction",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TSTS", fullForm: "Train Staff Ticket System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TTC", fullForm: "Time Table Controller",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TTM", fullForm: "Track Tamping Machine",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TTR", fullForm: "Track Turnout Renewal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TVU", fullForm: "Train Vehicle Unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TW", fullForm: "Tank for Water",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TWI", fullForm: "Temporary Working Instructions",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TWR", fullForm: "Through Weld Renewal",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TWS", fullForm: "Thick Web Switches",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "TXR", fullForm: "Train Examiner",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  U: [
    { acronym: "UDAY", fullForm: "Utkrist Double Decker Air Condition Yatri Express",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "UDIP", fullForm: "Unified Digital Interface for Promotion",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "UDIT", fullForm: "Unified Digital Interface for Transfer Module",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "UFSBI", fullForm: "Universal Fail Safe Block Interface",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ULIP", fullForm: "Unified Logistics Interface Platform",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "UMID", fullForm: "Unique Medical Identity Card",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "UMLCG", fullForm: "Unmanned Level Crossings Gate",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "UPI", fullForm: "Unified Payments Interface",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "UPS", fullForm: "Unified Pension Scheme",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "USFD", fullForm: "Ultra Sonic Flaw Detection",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "UTS", fullForm: "Unreserved Ticketing System",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  V: [
    { acronym: "VCB", fullForm: "Vacuum Circuit Braker",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "VCC", fullForm: "Vacuum Continuity Certificate",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "VCD", fullForm: "Vigilance Control Device",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "VDU", fullForm: "Visual Display Unit",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "VG", fullForm: "Vehicle Guidance",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "VHF", fullForm: "Very High Frequency",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "VTO", fullForm: "Visibility Test Object",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "VTP", fullForm: "Visibility Test Post",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  W: [
    { acronym: "WCA", fullForm: "Workmen Compensation Act",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WCM", fullForm: "Wheel Condition Monitor",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WFCZ", fullForm: "Vestibule First Class Chair Car",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "WGSCZ",
      fullForm: "Vestibule Self-Generated Second Class Chair Car",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "WGSCZAC",
      fullForm: "Vestibule Self-Generated Second Class AC Chair Car",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WGACCN", fullForm: "Vestibule Self-Generated AC Three Tier",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WGACCW", fullForm: "Vestibule Self-Generated AC Two Tier",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WGFCWAC", fullForm: "Vestibule Self-Generated First Class AC",
      explanation: "Will be added later",
      reference: "--"
    },
    {
      acronym: "WGSCNLR",
      fullForm:
        "Vestibule Self-Generated Second Class Three Tier Sleeper Luggage",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WFDD", fullForm: "Wheel Flat Detection Device",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WILD", fullForm: "Wheel Impact Load Detection",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WRIIL", fullForm: "Work Related Illness and Injury Leave",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WTR", fullForm: "Wagon Turn Round",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WTT", fullForm: "Working Time Table",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "WWB", fullForm: "Wagon Way Bill",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  Y: [
    { acronym: "YM", fullForm: "Yard Master",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "YMS", fullForm: "Yard Management System",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "YTSK", fullForm: "Yatri Ticket Suvidha Kendra",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
  Z: [
    { acronym: "ZULU", fullForm: "Zulu Time (UTC)",
      explanation: "Will be added later",
      reference: "--"
    },
    { acronym: "ZRTI", fullForm: "Zonal Railway Training Institute",
      explanation: "Will be added later",
      reference: "--"
    },
  ],
};
