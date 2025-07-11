"use client"
import React, { useState } from "react";
import Definitions from "@/components/pass-rules/Definitions";
import PassTypes from "@/components/pass-rules/PassTypes";
import DutyPass from "@/components/pass-rules/DutyPass";
import PassTransfer from "@/components/pass-rules/PassTransfer";
import PrevilegePass from "@/components/pass-rules/PrevilegePass";
import MembersPass from "@/components/pass-rules/MembersPass";
import SchoolPass from "@/components/pass-rules/SchoolPass";
import RetirementPass from "@/components/pass-rules/RetirementPass";
import WidowPass from "@/components/pass-rules/WidowPass";  
import SpecialPass from "@/components/pass-rules/SpecialPass";
import ComplimentaryPass from "@/components/pass-rules/ComplimentaryPass";
import SuspensionPass from "@/components/pass-rules/SuspensionPass";
import YearendPass from "@/components/pass-rules/YearendPass";
import DistanceRestrictions from "@/components/pass-rules/DistanceRestrictions";
import LossPass from "@/components/pass-rules/LossPass";
import EntitlesPass from "@/components/pass-rules/EntitlesPass";
import CompanionPass from "@/components/pass-rules/CompanionPass";
import SahayaksPass from "@/components/pass-rules/SahayaksPass";
import SplitPass from "@/components/pass-rules/SplitPass";
import OtherNotes from "@/components/pass-rules/OtherNotes";
import GMPowers from "@/components/pass-rules/GMPowers";
import PassLevels from "@/components/pass-rules/PassLevels";

const RSPassRules = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const SectionWrapper = ({ 
    children, 
    title, 
    isExpanded, 
    onToggle,
    gradientClass = "from-purple-600 to-purple-700"
  }: { 
    children: React.ReactNode; 
    title: string; 
    isExpanded: boolean; 
    onToggle: () => void; 
    gradientClass?: string;
  }) => (
    <div className="mb-4 sm:mb-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className={`bg-gradient-to-r ${gradientClass} px-3 sm:px-6 py-3 sm:py-4`}>
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-white leading-tight">{title}</h2>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-none opacity-100' : 'max-h-60 sm:max-h-80 opacity-60 overflow-hidden'}`}>
          <div className="p-0">
            {children}
          </div>
        </div>
        {!isExpanded && (
          <div className="bg-gradient-to-t from-white via-white/80 to-transparent h-6 sm:h-8 -mt-6 sm:-mt-8 relative z-10"></div>
        )}
        <div className="bg-gray-50 px-3 sm:px-6 py-2 sm:py-3 border-t border-gray-200">
          <button
            onClick={onToggle}
            className={`w-full ${gradientClass.replace('from-', 'bg-').replace(' to-', ' hover:bg-')} text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 sm:gap-2 font-medium text-sm sm:text-base`}
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                <span>Show More</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        {/* Header Section */}
        <section className="mb-4 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center px-2">
            RAILWAY SERVANTS (PASS) RULES, 1986
          </h1>
          <p className="text-base sm:text-lg text-gray-600 text-center mb-2 sm:mb-4">
            (1993 EDITION)
          </p>
          <p className="text-xs sm:text-sm text-gray-500 text-center italic">
            [With Latest instructions]
          </p>
        </section>

        {/* Important Definitions Section */}
        <SectionWrapper
          title="Important Definitions"
          isExpanded={expandedSections.definitions || false}
          onToggle={() => toggleSection("definitions")}
          gradientClass="from-blue-600 to-blue-700"
        >
          <Definitions />
        </SectionWrapper>

        {/* Authority and Types Section */}
        <SectionWrapper
          title="Authority and Types"
          isExpanded={expandedSections.passTypes || false}
          onToggle={() => toggleSection("passTypes")}
          gradientClass="from-green-600 to-green-700"
        >
          <PassTypes />
        </SectionWrapper>

        {/* Duty Pass Section */}
        <SectionWrapper
          title="Duty Pass"
          isExpanded={expandedSections.dutyPass || false}
          onToggle={() => toggleSection("dutyPass")}
          gradientClass="from-purple-600 to-purple-700"
        >
          <DutyPass />
        </SectionWrapper>

        {/* Pass on Transfer Section */}
        <SectionWrapper
          title="Pass on Transfer"
          isExpanded={expandedSections.passTransfer || false}
          onToggle={() => toggleSection("passTransfer")}
          gradientClass="from-indigo-600 to-indigo-700"
        >
          <PassTransfer />
        </SectionWrapper>

        {/* Privilege Pass Section */}
        <SectionWrapper
          title="Privilege Pass"
          isExpanded={expandedSections.previlegePass || false}
          onToggle={() => toggleSection("previlegePass")}
          gradientClass="from-teal-600 to-teal-700"
        >
          <PrevilegePass />
        </SectionWrapper>

        {/* Members Permitted in Privilege Pass Section */}
        <SectionWrapper
          title="Members Permitted in Privilege Pass"
          isExpanded={expandedSections.membersPass || false}
          onToggle={() => toggleSection("membersPass")}
          gradientClass="from-cyan-600 to-cyan-700"
        >
          <MembersPass />
        </SectionWrapper>

        {/* School Pass Section */}
        <SectionWrapper
          title="School Pass"
          isExpanded={expandedSections.schoolPass || false}
          onToggle={() => toggleSection("schoolPass")}
          gradientClass="from-pink-600 to-pink-700"
        >
          <SchoolPass />
        </SectionWrapper>

        {/* Post-Retirement Complimentary Pass Section */}
        <SectionWrapper
          title="Post-Retirement Complimentary Pass"
          isExpanded={expandedSections.retirementPass || false}
          onToggle={() => toggleSection("retirementPass")}
          gradientClass="from-orange-600 to-orange-700"
        >
          <RetirementPass />
        </SectionWrapper>

        {/* Widow Pass Section */}
        <SectionWrapper
          title="Widow Pass"
          isExpanded={expandedSections.widowPass || false}
          onToggle={() => toggleSection("widowPass")}
          gradientClass="from-red-600 to-red-700"
        >
          <WidowPass />
        </SectionWrapper>

        {/* Special Pass Section */}
        <SectionWrapper
          title="Special Pass"
          isExpanded={expandedSections.specialPass || false}
          onToggle={() => toggleSection("specialPass")}
          gradientClass="from-yellow-600 to-yellow-700"
        >
          <SpecialPass />
        </SectionWrapper>

        {/* Complimentary Card Passes Section */}
        <SectionWrapper
          title="Complimentary Card Passes"
          isExpanded={expandedSections.complimentaryPass || false}
          onToggle={() => toggleSection("complimentaryPass")}
          gradientClass="from-emerald-600 to-emerald-700"
        >
          <ComplimentaryPass />
        </SectionWrapper>

        {/* Suspension Passes Section */}
        <SectionWrapper
          title="Suspension Passes"
          isExpanded={expandedSections.suspensionPass || false}
          onToggle={() => toggleSection("suspensionPass")}
          gradientClass="from-violet-600 to-violet-700"
        >
          <SuspensionPass />
        </SectionWrapper>

        {/* Distance Restrictions Section */}
        <SectionWrapper
          title="Distance Restrictions"
          isExpanded={expandedSections.distanceRestrictions || false}
          onToggle={() => toggleSection("distanceRestrictions")}
          gradientClass="from-rose-600 to-rose-700"
        >
          <DistanceRestrictions />
        </SectionWrapper>

        {/* Year-ending Passes/PTOs Section */}
        <SectionWrapper
          title="Year-ending Passes/PTOs"
          isExpanded={expandedSections.yearendPass || false}
          onToggle={() => toggleSection("yearendPass")}
          gradientClass="from-sky-600 to-sky-700"
        >
          <YearendPass />
        </SectionWrapper>

        {/* LOSS/ MISUSE/ FRAUDULENT USE OF PASSES AND PTOs */}
        <SectionWrapper
          title="Loss/Misuse/Fraudulent Use of Passes and PTOs"
          isExpanded={expandedSections.lossPass || false}
          onToggle={() => toggleSection("lossPass")}
          gradientClass="from-amber-600 to-amber-700"
        >
          <LossPass />
        </SectionWrapper>

        {/* PRIVILEGE TICKET ORDER ENTITLES */}
        <SectionWrapper
          title="Privilege Ticket Order Entitlements"
          isExpanded={expandedSections.entitlesPass || false}
          onToggle={() => toggleSection("entitlesPass")}
          gradientClass="from-lime-600 to-lime-700"
        >
          <EntitlesPass />
        </SectionWrapper>

        {/* COMPANION IN LIEU OF ATTENDANT */}
        <SectionWrapper
          title="Companion in Lieu of Attendant"
          isExpanded={expandedSections.companionPass || false}
          onToggle={() => toggleSection("companionPass")}
          gradientClass="from-fuchsia-600 to-fuchsia-700"
        >
          <CompanionPass />
        </SectionWrapper>

        {/* PASSES/PTOS FOR LICENSED PORTES */}
        <SectionWrapper
          title="Passes/PTOs for Licensed Porters (Sahayaks)"
          isExpanded={expandedSections.sahayaksPass || false}
          onToggle={() => toggleSection("sahayaksPass")}
          gradientClass="from-slate-600 to-slate-700"
        >
          <SahayaksPass />
        </SectionWrapper>

        {/* SPLIT PASS */}
        <SectionWrapper
          title="Split Pass"
          isExpanded={expandedSections.splitPass || false}
          onToggle={() => toggleSection("splitPass")}
          gradientClass="from-zinc-600 to-zinc-700"
        >
          <SplitPass />
        </SectionWrapper>

        {/* OTHER NOTES */}
        <SectionWrapper
          title="Other Notes"
          isExpanded={expandedSections.otherNotes || false}
          onToggle={() => toggleSection("otherNotes")}
          gradientClass="from-stone-600 to-stone-700"
        >
          <OtherNotes />
        </SectionWrapper>

        {/* POWERS OF THE GENERAL MANAGERS */}
        <SectionWrapper
          title="Powers of General Managers to Condon Irregularities"
          isExpanded={expandedSections.gmPowers || false}
          onToggle={() => toggleSection("gmPowers")}
          gradientClass="from-neutral-600 to-neutral-700"
        >
          <GMPowers />
        </SectionWrapper>

        {/* LEVELS AS PER THE VII CPC PAY MATRIX */}
        <SectionWrapper
          title="Levels as per VII CPC Pay Matrix"
          isExpanded={expandedSections.passLevels || false}
          onToggle={() => toggleSection("passLevels")}
          gradientClass="from-gray-600 to-gray-700"
        >
          <PassLevels />
        </SectionWrapper>
        
      </div>
    </div>
  );
};

export default RSPassRules;
