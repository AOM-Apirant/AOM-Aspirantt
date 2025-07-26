"use client"
import React from 'react'
import { BookOpen, FileText, Train, Signal, Users, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react'

const Chapters = () => {
  const chapters = [
    {
      id: 1,
      title: "PRELIMINARY",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      pageRange: "1 - 7",
      sections: [
        {
          name: "General",
          rules: [
            { number: "1.01", title: "Short title and commencement", page: 1 },
            { number: "1.02", title: "Definitions", page: 1 },
            { number: "1.03", title: "Classification of stations", page: 6 }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      pageRange: "8 - 12",
      sections: [
        {
          name: "General Rules",
          rules: [
            { number: "2.01", title: "Supply of copies of rules", page: 8 },
            { number: "2.02", title: "Upkeep of the copy of rules", page: 8 },
            { number: "2.03", title: "Knowledge of rules", page: 8 },
            { number: "2.04", title: "Assistance in observance of rules", page: 9 },
            { number: "2.05", title: "Prevention of trespass, damage or loss", page: 9 },
            { number: "2.06", title: "Obedience to rules and orders", page: 9 },
            { number: "2.07", title: "Attendance for duty", page: 10 },
            { number: "2.08", title: "Absence from duty", page: 10 },
            { number: "2.09", title: "Taking alcoholic drink, sedative, narcotic, stimulant drug or preparation", page: 10 },
            { number: "2.10", title: "Conduct of railway servants", page: 10 },
            { number: "2.11", title: "Duty for securing safety", page: 11 }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "SIGNALS",
      icon: <Signal className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      pageRange: "13 - 90",
      sections: [
        {
          name: "A. General Provisions",
          rules: [
            { number: "3.01", title: "General use of signals", page: 13 },
            { number: "3.02", title: "Kinds of signals", page: 13 },
            { number: "3.03", title: "Use of night signals by day", page: 13 },
            { number: "3.04", title: "Placing of signals & signal arms and painting of signal arms", page: 13 }
          ]
        },
        {
          name: "B. Description of Fixed Signals",
          rules: [
            { number: "3.05", title: "Use of fixed signals", page: 14 },
            { number: "3.06", title: "Description of Warner signals and their indications", page: 14 },
            { number: "3.07", title: "Description of Distant signals and their indications", page: 17 },
            { number: "3.08", title: "Description of Stop signals and their indications", page: 23 },
            { number: "3.09", title: "Kinds of fixed Stop signals for approaching trains", page: 26 },
            { number: "3.10", title: "Kinds of fixed Stop signals for departing trains", page: 26 },
            { number: "3.11", title: "Intermediate Block Stop signal", page: 26 },
            { number: "3.12", title: "Kinds of fixed Stop signals in Automatic Block territories", page: 27 },
            { number: "3.13", title: "Calling-on signals", page: 28 },
            { number: "3.14", title: "Shunt signals", page: 30 },
            { number: "3.15", title: "Co-acting signals", page: 34 },
            { number: "3.16", title: "Repeating signals", page: 34 },
            { number: "3.17", title: "Distinguishing markers and signs for signals", page: 36 },
            { number: "3.18", title: "Signals out of use", page: 39 },
            { number: "3.19", title: "Placing of Stop signals at diverging junctions", page: 39 },
            { number: "3.20", title: "Placing of Stop signals at converging junctions", page: 39 },
            { number: "3.21", title: "Signals on bracket post or signal bridge or gantry", page: 40 },
            { number: "3.22", title: "Placing of more than one signal on the same post", page: 40 },
            { number: "3.23", title: "Electric repeater", page: 40 },
            { number: "3.24", title: "Back lights", page: 41 }
          ]
        },
        {
          name: "C. Equipment of Signals",
          rules: [
            { number: "3.25", title: "Obligation to provide fixed signals at stations", page: 41 },
            { number: "3.26", title: "Commissioning of fixed signals", page: 41 },
            { number: "3.27", title: "Minimum equipment of fixed signals at stations provided with manually operated multiple-aspect signaling", page: 42 },
            { number: "3.28", title: "Minimum equipment of fixed signals at stations provided with modified lower quadrant signaling", page: 42 },
            { number: "3.29", title: "Minimum equipment of fixed signals at other stations provided with two-aspect signaling", page: 42 },
            { number: "3.30", title: "Additional fixed signals at stations generally", page: 42 },
            { number: "3.31", title: "Signals at class 'D' stations", page: 43 },
            { number: "3.32", title: "Provision of an Advanced Starter, Shunting Limit Board or Block Section Limit Board", page: 44 },
            { number: "3.33", title: "Exceptions to Rules 3.27, 3.28, 3.29 and 3.32", page: 44 },
            { number: "3.34", title: "Fixed signals at level crossings", page: 45 },
            { number: "3.35", title: "Protection and working of points of outlying sidings", page: 45 }
          ]
        },
        {
          name: "D. Working of Signals and Points",
          rules: [
            { number: "3.36", title: "Fixed signals generally", page: 46 },
            { number: "3.37", title: "Normal aspects of signals", page: 48 },
            { number: "3.38", title: "Points affecting movement of trains", page: 48 },
            { number: "3.39", title: "Locking of facing points", page: 51 },
            { number: "3.40", title: "Conditions for taking 'off' Home signal", page: 51 },
            { number: "3.41", title: "Conditions for taking 'off' Outer signal", page: 52 },
            { number: "3.42", title: "Conditions for taking 'off' last Stop signal or Intermediate Block Stop signal", page: 52 },
            { number: "3.43", title: "Conditions for taking 'off' Warner signal", page: 53 },
            { number: "3.44", title: "Conditions for taking 'off' gate Stop signal", page: 53 },
            { number: "3.45", title: "Conditions for taking 'off' Calling-on signal", page: 53 },
            { number: "3.46", title: "Use of fixed signals for shunting", page: 53 },
            { number: "3.47", title: "Taking 'off' signals for more than one train at a time", page: 53 },
            { number: "3.48", title: "Stoppage of trains out of course at stations provided with two-aspect signaling", page: 54 },
            { number: "3.49", title: "Care and lighting of signal lamps", page: 54 },
            { number: "3.50", title: "Traps, slip sidings and catch sidings", page: 55 },
            { number: "3.51", title: "Points", page: 56 }
          ]
        },
        {
          name: "E. Hand Signals",
          rules: [
            { number: "3.52", title: "Exhibition of hand signals", page: 58 },
            { number: "3.53", title: "Stop hand signal", page: 59 },
            { number: "3.54", title: "Proceed hand signal", page: 60 },
            { number: "3.55", title: "Proceed with caution hand signal", page: 61 },
            { number: "3.56", title: "Hand signals for shunting", page: 62 },
            { number: "3.57", title: "Banner flags", page: 65 },
            { number: "3.58", title: "Knowledge and possession of hand signals", page: 65 }
          ]
        },
        {
          name: "F. Detonating Signals",
          rules: [
            { number: "3.59", title: "Description of detonating signals", page: 65 },
            { number: "3.60", title: "Method of using detonators", page: 65 },
            { number: "3.61", title: "Placing of detonators in thick, foggy or tempestuous weather impairing visibility", page: 66 },
            { number: "3.62", title: "Placing of detonators in case of obstruction", page: 72 },
            { number: "3.63", title: "Replacement of detonators on the line", page: 72 },
            { number: "3.64", title: "Knowledge and possession of detonators", page: 72 }
          ]
        },
        {
          name: "G. Flare Signals",
          rules: [
            { number: "3.65", title: "Description of flare signals", page: 75 },
            { number: "3.66", title: "Use of flare signals", page: 75 },
            { number: "3.67", title: "Knowledge and possession of flare signals", page: 75 }
          ]
        },
        {
          name: "H. Defective fixed signals and points",
          rules: [
            { number: "3.68", title: "Duties of Station Master generally when a signal is defective", page: 76 },
            { number: "3.69", title: "Duties of Station Master when an approach Stop signal is defective", page: 77 },
            { number: "3.70", title: "Duties of Station Master when a departure Stop signal is defective", page: 79 },
            { number: "3.71", title: "Warner or Distant signals defective in the 'off' position", page: 81 },
            { number: "3.72", title: "Warner not to be used when a Stop signal is defective", page: 81 },
            { number: "3.73", title: "Passing of a gate Stop signal at 'on'", page: 81 },
            { number: "3.74", title: "Absence of a fixed signal or a signal without a light", page: 82 },
            { number: "3.75", title: "Passing of Intermediate Block Stop signal at 'on'", page: 83 },
            { number: "3.76", title: "Intimation to officials when defects remedied", page: 85 },
            { number: "3.77", title: "Defective or damaged points etc.", page: 85 },
            { number: "3.78", title: "Duties of engine crew in respect of signals", page: 85 },
            { number: "3.79", title: "Duties of Loco Pilot in respect of Calling-on signal", page: 88 },
            { number: "3.80", title: "Duties of Loco Pilot when an approach Stop signal is 'on' or defective", page: 88 },
            { number: "3.81", title: "Duties of Loco Pilot when a departure Stop signal is 'on' or defective", page: 88 },
            { number: "3.82", title: "Permission before entering on or crossing a running line", page: 89 },
            { number: "3.83", title: "Assistance of the engine crew regarding signals", page: 89 },
            { number: "3.84", title: "Duties of Loco Pilots as to signals when two or more engines are attached to train", page: 89 },
            { number: "3.85", title: "Reporting of defects in signals", page: 90 }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "WORKING OF TRAINS GENERALLY",
      icon: <Train className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      pageRange: "91 - 139",
      sections: [
        {
          name: "A. Timing and Running of Trains",
          rules: [
            { number: "4.01", title: "Standard time", page: 91 },
            { number: "4.02", title: "Adherence to advertised time", page: 91 },
            { number: "4.03", title: "Setting watch", page: 91 },
            { number: "4.04", title: "Time of attendance for train crew", page: 91 },
            { number: "4.05", title: "Proper running line", page: 91 },
            { number: "4.06", title: "Direction of running", page: 91 },
            { number: "4.07", title: "Supply of Working Time Table and Schedule of Standard Dimensions", page: 92 }
          ]
        },
        {
          name: "B. Speed of Trains",
          rules: [
            { number: "4.08", title: "Limits of speed generally", page: 92 },
            { number: "4.09", title: "Caution Order", page: 93 },
            { number: "4.10", title: "Limits of speed over facing points", page: 93 },
            { number: "4.11", title: "Limits of speed while running through stations", page: 94 },
            { number: "4.12", title: "Engine pushing", page: 94 },
            { number: "4.13", title: "Limits of speed with engine tender foremost", page: 96 }
          ]
        },
        {
          name: "C. Equipment of Trains and Train Crew",
          rules: [
            { number: "4.14", title: "Head light, marker lights and speedometer", page: 96 },
            { number: "4.15", title: "Tail and side lights", page: 98 },
            { number: "4.16", title: "Tail board or tail lamp", page: 99 },
            { number: "4.17", title: "Responsibility of Station Master regarding tail board or tail lamp of passing trains", page: 100 },
            { number: "4.18", title: "Means of communication", page: 101 },
            { number: "4.19", title: "Guard's and Loco Pilot's equipment", page: 102 },
            { number: "4.20", title: "Manning of engine in motion", page: 106 },
            { number: "4.21", title: "Driving an electric train", page: 107 },
            { number: "4.22", title: "Riding on engine or tender", page: 108 },
            { number: "4.23", title: "Brake-vans", page: 108 },
            { number: "4.24", title: "Position of brake-van on train", page: 109 },
            { number: "4.25", title: "Guards", page: 110 },
            { number: "4.26", title: "Couplings", page: 113 }
          ]
        },
        {
          name: "D. Vehicles and Cranes",
          rules: [
            { number: "4.27", title: "Cranes", page: 113 },
            { number: "4.28", title: "Loading of vehicles", page: 113 },
            { number: "4.29", title: "Damaged or defective vehicles", page: 114 }
          ]
        },
        {
          name: "E. Precautions before starting Train",
          rules: [
            { number: "4.30", title: "Loco Pilot and Guard to examine notices before starting", page: 115 },
            { number: "4.31", title: "Examination of trains before starting", page: 115 },
            { number: "4.32", title: "Examination of trains by Loco Pilot", page: 115 },
            { number: "4.33", title: "Examination of single and multiple units by Loco Pilot", page: 119 },
            { number: "4.34", title: "Duties of Guard when taking over charge of a train", page: 120 },
            { number: "4.35", title: "Starting of trains", page: 120 },
            { number: "4.36", title: "Guard to be in charge of train", page: 121 },
            { number: "4.37", title: "Subordination of Guards in station limits", page: 122 },
            { number: "4.38", title: "Assistant Loco Pilots to obey Loco Pilots", page: 122 },
            { number: "4.39", title: "Loco Pilot to obey certain orders", page: 122 }
          ]
        },
        {
          name: "F. Duties of Staff Working Trains during Journey",
          rules: [
            { number: "4.40", title: "Loco Pilot and Assistant Loco Pilot to keep a good look-out", page: 122 },
            { number: "4.41", title: "Loco Pilot and Assistant Loco Pilot to look back", page: 122 },
            { number: "4.42", title: "Exchange of signals between Loco Pilot, Guard and station staff", page: 122 },
            { number: "4.43", title: "Guard to keep a good look-out", page: 126 },
            { number: "4.44", title: "Train held up at first Stop signal", page: 126 },
            { number: "4.45", title: "Attracting attention of Loco Pilot", page: 126 },
            { number: "4.46", title: "Assistance from Guard's hand brake", page: 126 },
            { number: "4.47", title: "Application of Guard's hand brake", page: 126 },
            { number: "4.48", title: "Permission of Guard to detach engine from train", page: 126 },
            { number: "4.49", title: "Starting and stopping of train", page: 127 },
            { number: "4.50", title: "Sounding of engine whistle", page: 127 },
            { number: "4.51", title: "Bell signals between Loco Pilot and Guard", page: 129 },
            { number: "4.52", title: "Throwing out water, fire or cinders", page: 131 },
            { number: "4.53", title: "Hose or water crane", page: 131 },
            { number: "4.54", title: "Passengers", page: 131 }
          ]
        },
        {
          name: "G. Duties of Staff on Arrival",
          rules: [
            { number: "4.55", title: "Shutting of power", page: 132 },
            { number: "4.56", title: "Guard to see that train is stopped clear of fouling marks", page: 132 },
            { number: "4.57", title: "Detaching engine", page: 132 },
            { number: "4.58", title: "Loco Pilot to see that train is stopped clear of fouling marks", page: 132 },
            { number: "4.59", title: "Moving of train carrying passengers after it has been stopped at a station", page: 133 },
            { number: "4.60", title: "Guard not to leave train till handed over", page: 133 },
            { number: "4.61", title: "Loco Pilot not to leave engine when on duty", page: 133 }
          ]
        },
        {
          name: "H. Working of Material Trains",
          rules: [
            { number: "4.62", title: "Working of a material train in a block section", page: 133 },
            { number: "4.63", title: "Workers on material train", page: 135 },
            { number: "4.64", title: "Protection of material train when stabled", page: 136 },
            { number: "4.65", title: "Working of track maintenance machines", page: 136 }
          ]
        },
        {
          name: "I. Private Engines and Vehicles",
          rules: [
            { number: "4.66", title: "Private engines and vehicles", page: 139 }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "CONTROL AND WORKING OF STATIONS",
      icon: <FileText className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      pageRange: "140 - 150",
      sections: [
        {
          name: "Station Management",
          rules: [
            { number: "5.01", title: "Responsibility of the Station Master for working", page: 140 },
            { number: "5.02", title: "Supply of copies of rules and distribution or exhibition of other documents", page: 140 },
            { number: "5.03", title: "Obedience to orders and keeping of books and returns", page: 140 },
            { number: "5.04", title: "Signal cabins", page: 140 },
            { number: "5.05", title: "Report of neglect of duty", page: 141 },
            { number: "5.06", title: "Station Working Rules", page: 141 },
            { number: "5.07", title: "Forms", page: 142 },
            { number: "5.08", title: "Access to and operation of equipment", page: 143 },
            { number: "5.09", title: "Reception of a train on an obstructed line", page: 143 },
            { number: "5.10", title: "Reception of a train on a non-signalled line", page: 144 },
            { number: "5.11", title: "Departure of a train from a non-signalled line", page: 144 },
            { number: "5.12", title: "Departure of a train from a line provided with a common departure signal", page: 144 },
            { number: "5.13", title: "Control of shunting", page: 144 },
            { number: "5.14", title: "Responsibility for shunting", page: 145 },
            { number: "5.15", title: "Shunting at stations under Centralised Traffic Control", page: 146 },
            { number: "5.16", title: "Shunting during reception of trains", page: 146 },
            { number: "5.17", title: "Shunting near level crossing", page: 147 },
            { number: "5.18", title: "Drawing of a train to an advanced position", page: 147 },
            { number: "5.19", title: "Obstruction of running line", page: 148 },
            { number: "5.20", title: "Shunting on gradients", page: 148 },
            { number: "5.21", title: "Loose shunting", page: 149 },
            { number: "5.22", title: "Leaving vehicles in sidings outside station limits", page: 150 },
            { number: "5.23", title: "Securing of vehicles at station", page: 150 }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "ACCIDENTS AND UNUSUAL OCCURRENCES",
      icon: <FileText className="w-6 h-6" />,
      color: "from-red-600 to-red-700",
      pageRange: "151 - 181",
      sections: [
        {
          name: "Accident Management",
          rules: [
            { number: "6.01", title: "Accident or obstruction", page: 151 },
            { number: "6.02", title: "Working in case of accident or failure of communications", page: 151 },
            { number: "6.03", title: "Protection of trains stopped between stations", page: 165 },
            { number: "6.04", title: "Trains unusually delayed", page: 169 },
            { number: "6.05", title: "Sending advice of accident or breakdown", page: 170 },
            { number: "6.06", title: "Train in a block section without authority to proceed", page: 171 },
            { number: "6.07", title: "Report of conditions likely to affect running of trains to Controller or Centralised Traffic Control Operator", page: 171 },
            { number: "6.08", title: "Train parting", page: 173 },
            { number: "6.09", title: "Portion of a train left in a block section", page: 174 },
            { number: "6.10", title: "Fire", page: 178 },
            { number: "6.11", title: "Vehicles escaping from station", page: 181 }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "SYSTEM OF WORKING",
      icon: <FileText className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      pageRange: "182",
      sections: [
        {
          name: "System Overview",
          rules: [
            { number: "7.01", title: "Systems of working", page: 182 },
            { number: "7.02", title: "Applicability of General Rules referring to the working of signals and trains", page: 182 }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "THE ABSOLUTE BLOCK SYSTEM",
      icon: <FileText className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      pageRange: "183 - 195",
      sections: [
        {
          name: "A. Essentials",
          rules: [
            { number: "8.01", title: "Essential of the Absolute Block System", page: 183 }
          ]
        },
        {
          name: "B. Conditions for granting Line Clear",
          rules: [
            { number: "8.02", title: "Conditions for granting Line Clear at a class 'A' station", page: 183 },
            { number: "8.03", title: "Conditions for granting Line Clear at a class 'B' station", page: 184 },
            { number: "8.04", title: "Conditions for granting Line Clear at a class 'C' station", page: 185 }
          ]
        },
        {
          name: "C. Obstruction – Double Line",
          rules: [
            { number: "8.05", title: "Obstruction on double line at a block station when a train is approaching", page: 185 },
            { number: "8.06", title: "Obstruction on double line in the block section", page: 185 }
          ]
        },
        {
          name: "D. Obstruction – Single Line",
          rules: [
            { number: "8.07", title: "Obstruction on single line at a class 'A' station when a train is approaching", page: 186 },
            { number: "8.08", title: "Obstructing the block section at a class 'A' station on a single line", page: 186 },
            { number: "8.09", title: "Obstruction in the face of an approaching train at a class 'B' station on single line", page: 186 },
            { number: "8.10", title: "Obstruction within station section at a class 'B' station on single line", page: 187 },
            { number: "8.11", title: "Obstruction outside station section at a class 'B' single line station equipped with two-aspect signals", page: 187 },
            { number: "8.12", title: "Obstruction outside station section at a class 'B' single line station equipped with manually operated multiple-aspect signals", page: 188 },
            { number: "8.13", title: "Obstruction outside the first Stop signal at a class 'B' station on single line", page: 188 }
          ]
        },
        {
          name: "E. General Provision",
          rules: [
            { number: "8.14", title: "Block back or Block forward", page: 188 },
            { number: "8.15", title: "Authority for shunting or obstruction in block section", page: 188 },
            { number: "8.16", title: "Illustrative diagrams", page: 188 }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "THE AUTOMATIC BLOCK SYSTEM",
      icon: <FileText className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      pageRange: "196 - 224",
      sections: [
        {
          name: "A. Rules applicable to Double Line",
          rules: [
            { number: "9.01", title: "Essentials of the Automatic Block System on double line", page: 196 },
            { number: "9.02", title: "Duties of Loco Pilot and Guard when an Automatic Stop signal on double line is to be passed at 'on'", page: 198 }
          ]
        },
        {
          name: "B. Rules applicable to Single Line",
          rules: [
            { number: "9.03", title: "Essentials of the Automatic Block System on single line", page: 199 },
            { number: "9.04", title: "Minimum equipment of fixed signals in Automatic Block territory on single line", page: 201 },
            { number: "9.05", title: "Additional fixed signals in Automatic Block territory on single line", page: 201 },
            { number: "9.06", title: "Conditions for taking 'off' manual Stop signals in Automatic Block territory on single line", page: 202 },
            { number: "9.07", title: "Duties of Loco Pilot and Guard when an Automatic Stop signal on single line is to be passed at 'on'", page: 203 },
            { number: "9.08", title: "Person in charge of working trains on Automatic Block System on single line", page: 204 }
          ]
        },
        {
          name: "C. Rules applicable to both Double and Single Lines",
          rules: [
            { number: "9.09", title: "Working of trains on Centralised Traffic Control territory", page: 204 },
            { number: "9.10", title: "Protection of a train stopped in an Automatic Block signalling section", page: 204 },
            { number: "9.11", title: "Loco Pilot to report failures", page: 205 },
            { number: "9.12", title: "Procedure during failure of Automatic Signalling", page: 207 },
            { number: "9.13", title: "Movement of trains against the direction of traffic on the Automatic Block System", page: 221 },
            { number: "9.14", title: "Procedure when Semi-Automatic Stop signal is 'on'", page: 222 },
            { number: "9.15", title: "Passing a gate Stop signal at 'on' in Automatic signalling territory", page: 223 },
            { number: "9.16", title: "Illustrative diagrams", page: 224 }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "THE FOLLOWING TRAINS SYSTEM",
      icon: <FileText className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      pageRange: "225 - 228",
      sections: [
        {
          name: "Following Trains System",
          rules: [
            { number: "10.01", title: "Essential of the Following Trains System", page: 225 },
            { number: "10.02", title: "Report of the Commissioner of Railway Safety", page: 225 },
            { number: "10.03", title: "Conditions to be observed in working trains on the Following Trains System", page: 225 },
            { number: "10.04", title: "Delivery of authority to proceed to Loco Pilot or Guard on the Following Trains System", page: 226 },
            { number: "10.05", title: "Authority to proceed on the Following Trains System", page: 226 },
            { number: "10.06", title: "Responsibility as to proper preparation of authority to proceed on the Following Train System", page: 227 },
            { number: "10.07", title: "Obstruction in the face of approaching train or trains on the Following Trains System", page: 228 },
            { number: "10.08", title: "Cessation of working on the Following Trains System", page: 228 },
            { number: "10.09", title: "Protection of trains on the Following Trains System", page: 228 }
          ]
        }
      ]
    },
    {
      id: 11,
      title: "THE PILOT GUARD SYSTEM",
      icon: <FileText className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      pageRange: "229 - 233",
      sections: [
        {
          name: "Pilot Guard System",
          rules: [
            { number: "11.01", title: "Essentials of the Pilot Guard System", page: 229 },
            { number: "11.02", title: "Conditions to be observed for following trains on the Pilot Guard System", page: 229 },
            { number: "11.03", title: "Pilot Guard's dress or badge", page: 230 },
            { number: "11.04", title: "Pilot Guard to accompany train or give authority to proceed", page: 230 },
            { number: "11.05", title: "Pilot Guard's Tickets", page: 231 },
            { number: "11.06", title: "Protection of trains on the Pilot Guard System", page: 233 }
          ]
        }
      ]
    },
    {
      id: 12,
      title: "THE TRAIN-STAFF AND TICKET SYSTEM",
      icon: <FileText className="w-6 h-6" />,
      color: "from-lime-500 to-lime-600",
      pageRange: "234 - 237",
      sections: [
        {
          name: "Train-staff and Ticket System",
          rules: [
            { number: "12.01", title: "Essentials of the Train-staff and Ticket System", page: 234 },
            { number: "12.02", title: "System where applicable", page: 234 },
            { number: "12.03", title: "Conditions to be observed for following trains on the Train-staff and Ticket System", page: 234 },
            { number: "12.04", title: "Loco Pilot to have Train-staff or Train-staff Ticket", page: 234 },
            { number: "12.05", title: "Train-staff or Train-staff Ticket: by whom to be delivered to Loco Pilot", page: 234 },
            { number: "12.06", title: "Train-staff or Train-staff Ticket: when to be delivered to Loco Pilot", page: 234 },
            { number: "12.07", title: "Train-staff to be kept on engine", page: 235 },
            { number: "12.08", title: "Trains not to be started until Train-staff returned", page: 235 },
            { number: "12.09", title: "Train-staff or Train-staff Ticket to be given up and Ticket to be cancelled on arrival of train", page: 235 },
            { number: "12.10", title: "Procedure when engine is disabled on the Train-Staff and Ticket System", page: 236 },
            { number: "12.11", title: "Train-Staff Ticket: how kept", page: 236 },
            { number: "12.12", title: "Train-staff: how kept", page: 236 },
            { number: "12.13", title: "Distinguishing marks on Train-staff Tickets and boxes", page: 236 },
            { number: "12.14", title: "Form of Train-staff Ticket", page: 237 },
            { number: "12.15", title: "Record of Train-staff Tickets issued", page: 237 },
            { number: "12.16", title: "Obstruction outside the Home signal", page: 237 },
            { number: "12.17", title: "Protection of trains on the Train-staff and Ticket System", page: 237 }
          ]
        }
      ]
    },
    {
      id: 13,
      title: "THE ONE TRAIN ONLY SYSTEM",
      icon: <FileText className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      pageRange: "238 - 240",
      sections: [
        {
          name: "One Train Only System",
          rules: [
            { number: "13.01", title: "Use of the One Train Only System", page: 238 },
            { number: "13.02", title: "Essentials of the One Train Only System", page: 238 },
            { number: "13.03", title: "Authority to enter the section", page: 238 },
            { number: "13.04", title: "Procedure in case of accident or disablement on the One Train Only System", page: 239 }
          ]
        }
      ]
    },
    {
      id: 14,
      title: "BLOCK WORKING",
      icon: <FileText className="w-6 h-6" />,
      color: "from-violet-500 to-violet-600",
      pageRange: "241 - 253",
      sections: [
        {
          name: "A. General Provisions",
          rules: [
            { number: "14.01", title: "Means of granting or obtaining Line Clear", page: 241 },
            { number: "14.02", title: "Provision of Instruments", page: 241 },
            { number: "14.03", title: "Consent required before interfering with Block working equipment", page: 231 }
          ]
        },
        {
          name: "B. Block Stations at which Electrical Block Instruments, Track circuits or Axle Counters are provided",
          rules: [
            { number: "14.04", title: "Certificate of competency", page: 242 },
            { number: "14.05", title: "Bell code", page: 242 },
            { number: "14.06", title: "Acknowledgement of signals", page: 243 },
            { number: "14.07", title: "Train Signal Register", page: 243 },
            { number: "14.08", title: "Authority to proceed", page: 244 },
            { number: "14.09", title: "Loco Pilot to examine authority to proceed", page: 245 },
            { number: "14.10", title: "Conditions for closing the block section", page: 245 },
            { number: "14.11", title: "Responsibility of Station Master as to authority to proceed", page: 246 },
            { number: "14.12", title: "Special responsibility as to electrical token instruments and to the token", page: 247 },
            { number: "14.13", title: "Failure of electrical block instruments or track Circuits or axle counters", page: 247 },
            { number: "14.14", title: "Closing of Intermediate Block Post", page: 248 }
          ]
        },
        {
          name: "C. Block Stations at which Electrical Block Instruments are not provided",
          rules: [
            { number: "14.15", title: "Transmission of signals", page: 249 },
            { number: "14.16", title: "Train Signal Register", page: 249 },
            { number: "14.17", title: "Forms for messages and written authority to proceed", page: 249 },
            { number: "14.18", title: "Distinction of messages", page: 249 },
            { number: "14.19", title: "Writing and signing of messages and written authorities to proceed", page: 249 },
            { number: "14.20", title: "Completion of messages", page: 250 },
            { number: "14.21", title: "Preservation of messages and written authorities to proceed", page: 250 },
            { number: "14.22", title: "Cancellation of Line Clear", page: 250 },
            { number: "14.23", title: "Loco Pilot to have authority to proceed", page: 250 },
            { number: "14.24", title: "Authority to proceed: when to be given to Loco Pilot", page: 250 }
          ]
        },
        {
          name: "D. Line Clear Tickets",
          rules: [
            { number: "14.25", title: "Line clear Tickets", page: 250 }
          ]
        },
        {
          name: "E. Use and Operation of Block Working",
          rules: [
            { number: "14.26", title: "Use and operation of block working equipment", page: 253 }
          ]
        }
      ]
    },
    {
      id: 15,
      title: "PERMANENT WAY AND WORKS",
      icon: <FileText className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      pageRange: "254 - 297",
      sections: [
        {
          name: "A. Railway Servants employed on the Permanent Way and Works",
          rules: [
            { number: "15.01", title: "Condition of Permanent Way and Works", page: 254 },
            { number: "15.02", title: "Maintenance of line", page: 254 },
            { number: "15.03", title: "Keeping of material", page: 254 },
            { number: "15.04", title: "Inspection of Permanent Way and Works", page: 254 },
            { number: "15.05", title: "Patrolling of Lines", page: 255 },
            { number: "15.06", title: "Work involving danger to trains or traffic", page: 255 },
            { number: "15.07", title: "Work in thick, foggy or tempestuous weather impairing visibility", page: 264 },
            { number: "15.08", title: "Precautions before commencing operations which would obstruct the line", page: 264 },
            { number: "15.09", title: "Showing of signals", page: 265 },
            { number: "15.10", title: "Assistance in protection of trains", page: 272 },
            { number: "15.11", title: "Gangmate in each gang", page: 272 },
            { number: "15.12", title: "Knowledge of signals and equipment of gang", page: 272 },
            { number: "15.13", title: "Inspection of gauges, signals, tools and implements", page: 272 },
            { number: "15.14", title: "Responsibility of Gangmate as to safety of line", page: 272 },
            { number: "15.15", title: "Blasting", page: 273 },
            { number: "15.16", title: "Putting in or removing points or crossings", page: 273 },
            { number: "15.17", title: "Duties of Gangmate and Gangman when apprehending danger", page: 273 }
          ]
        },
        {
          name: "B. The working of Lorries, Trolleys and Motor trolleys",
          rules: [
            { number: "15.18", title: "Distinction between trolley, lorry and motor trolley", page: 274 },
            { number: "15.19", title: "Red flag or light to be shown", page: 275 },
            { number: "15.20", title: "Equipment of trolley, lorry or motor trolley", page: 275 },
            { number: "15.21", title: "Efficient brakes", page: 276 },
            { number: "15.22", title: "Qualified person to be in charge of lorry or trolley when on the line", page: 276 },
            { number: "15.23", title: "Attachment to train prohibited", page: 278 },
            { number: "15.24", title: "Time of running", page: 278 },
            { number: "15.25", title: "Motor Trolley", page: 279 },
            { number: "15.26", title: "Protection of trolley on the line", page: 285 },
            { number: "15.27", title: "Protection of lorry on the line", page: 288 },
            { number: "15.28", title: "Lorries and trolleys out of use", page: 297 }
          ]
        }
      ]
    },
    {
      id: 16,
      title: "LEVEL CROSSINGS",
      icon: <FileText className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      pageRange: "298 - 300",
      sections: [
        {
          name: "Level Crossing Management",
          rules: [
            { number: "16.01", title: "Knowledge of signals", page: 298 },
            { number: "16.02", title: "Supply and care of equipment", page: 298 },
            { number: "16.03", title: "Road Traffic", page: 298 },
            { number: "16.04", title: "Gateman to observe passing trains", page: 299 },
            { number: "16.05", title: "Channel for flange of wheels", page: 299 },
            { number: "16.06", title: "Defects at level crossings", page: 299 },
            { number: "16.07", title: "Obstructions at level crossings", page: 299 },
            { number: "16.08", title: "Parting of a train", page: 299 },
            { number: "16.09", title: "Trespassing", page: 299 },
            { number: "16.10", title: "Transfer of charge of gate", page: 299 },
            { number: "16.11", title: "Height gauges", page: 300 }
          ]
        }
      ]
    },
    {
      id: 17,
      title: "WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS",
      icon: <FileText className="w-6 h-6" />,
      color: "from-sky-500 to-sky-600",
      pageRange: "301 - 348",
      sections: [
        {
          name: "Electrified Sections",
          rules: [
            { number: "17.01", title: "Applicability of General Rules", page: 301 },
            { number: "17.02", title: "Special definitions applicable to this chapter", page: 301 },
            { number: "17.03", title: "Inspection of electrical way and works", page: 307 },
            { number: "17.04", title: "Permit-to-work on electrical equipment", page: 311 },
            { number: "17.05", title: "Warning to staff and public", page: 317 },
            { number: "17.06", title: "Alterations to track", page: 322 },
            { number: "17.07", title: "Tripping of circuit breakers of locomotives and electrical multiple units at neutral sections", page: 323 },
            { number: "17.08", title: "Tower wagon", page: 324 },
            { number: "17.09", title: "Additional rules for electrified sections", page: 338 }
          ]
        }
      ]
    },
    {
      id: 18,
      title: "MISCELLANEOUS",
      icon: <FileText className="w-6 h-6" />,
      color: "from-gray-500 to-gray-600",
      pageRange: "349",
      sections: [
        {
          name: "Miscellaneous",
          rules: [
            { number: "18.01", title: "Repeal and Saving", page: 349 }
          ]
        }
      ]
    }
  ]

  const [expandedSections, setExpandedSections] = React.useState<{[key: string]: boolean}>({})

  const toggleSection = (chapterId: number, sectionName: string) => {
    const key = `${chapterId}-${sectionName}`
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-1">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              TABLE OF CONTENTS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">General and Subsidiary Rules</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Chapter Index with Sections and Rules - Comprehensive guide covering all chapters 
              with detailed sections, rules, and page numbers for railway operations.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-8 py-4">
            <div className="grid gap-4 md:gap-8">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Chapter Header */}
                  <div className={`bg-gradient-to-r ${chapter.color} text-white p-6`}>
                    <div className="flex flex-col gap-4 items-center justify-between text-center">
                      <div className="flex flex-col gap-4 items-center justify-between">
                        <div className="bg-white/20 p-3 rounded-md backdrop-blur-sm">
                          {chapter.icon}
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold">
                            Chapter - {chapter.id}
                          </h2>
                          <p className="text-white/90 text-sm sm:text-base mt-1">
                            {chapter.title}
                          </p>
                          <p className="text-white/80 text-sm mt-1 text-center font-medium border-t border-white/20 pt-2">
                            Pages: {chapter.pageRange}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sections and Rules */}
                  <div className="px-3 py-6">
                    <div className="space-y-4">
                      {chapter.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                          {/* Section Header */}
                          <button
                            onClick={() => toggleSection(chapter.id, section.name)}
                            className="w-full p-4 flex items-center justify-between hover:bg-white/10 transition-all duration-300 rounded-t-xl"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                {String.fromCharCode(65 + sectionIndex)}
                              </div>
                              <h3 className="lg:text-lg text-base font-medium text-gray-200">
                                {section.name}
                              </h3>
                            </div>
                            {expandedSections[`${chapter.id}-${section.name}`] ? (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            )}
                          </button>

                          {/* Rules List */}
                          {expandedSections[`${chapter.id}-${section.name}`] && (
                            <div className="p-4 pt-0">
                              <div className="grid gap-3">
                                {section.rules.map((rule, ruleIndex) => (
                                  <div
                                    key={ruleIndex}
                                    className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
                                  >
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                      {rule.number}
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-gray-200 font-medium">
                                        {rule.title}
                                      </p>
                                      <div className="flex items-center space-x-4 mt-2">
                                        <span className="text-gray-400 text-sm">
                                          Rule {rule.number}
                                        </span>
                                        <span className="text-blue-400 text-sm font-medium">
                                          Page {rule.page}
                                        </span>
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
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
                <div className="flex flex-col gap-4 items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete GSR Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all chapters of the General and Subsidiary Rules for Railway Servants, 
                  organized by sections with detailed rules and page numbers for easy reference.
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

export default Chapters