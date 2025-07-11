import React from "react";
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            RAILWAY SERVANTS (PASS) RULES, 1986
          </h1>
          <p className="text-lg text-gray-600 text-center mb-4">
            (1993 EDITION)
          </p>
          <p className="text-sm text-gray-500 text-center italic">
            [With Latest instructions]
          </p>
        </section>

        {/* Important Definitions Section */}
        <Definitions />

        {/* Authority and Types Section */}
        <PassTypes />


        {/* Duty Pass Section */}
        <DutyPass />


        {/* Pass on Transfer Section */}
        <PassTransfer />


        {/* Privilege Pass Section */}
        <PrevilegePass />


        {/* Members Permitted in Privilege Pass Section */}
        <MembersPass />


        {/* School Pass Section */}
        <SchoolPass />


        {/* Post-Retirement Complimentary Pass Section */}
        <RetirementPass />


        {/* Widow Pass Section */}
        <WidowPass />



        {/* Special Pass Section */}
        <SpecialPass /> 


        {/* Complimentary Card Passes Section */}
        <ComplimentaryPass />



        {/* Suspension Passes & Distance Restrictions Section */}
        <SuspensionPass />

{/* Distance Restrictions Section */}
<DistanceRestrictions />

        {/* Year-ending Passes/PTOs Section */}
        <YearendPass />

        {/* LOSS/ MISUSE/ FRAUDULENT USE OF PASSES AND PTOs */}
        <LossPass />


{/* PRIVILEGE TICKET ORDER ENTITLES THE HOLDER IRRESPECTIVE OF
WHETHER HE BELONGS TO GROUP A, B, C OR D. */}
<EntitlesPass />

{/* COMPANION IN LIEU OF ATTENDANT TO FIRST /IST A POST RETIREMENT
COMPLIMENTARY PASS /WIDOW PASS HOLDERS */}
<CompanionPass />

{/* PASSES/PTOS FOR LICENSED PORTES (SAHAYAKS) */}
<SahayaksPass />

{/* SPLIT PASS */}
<SplitPass />

{/* OTHER NOTES */}
<OtherNotes />

{/* POWERS OF THE GENERAL MANAGERS TO CONDONE IRREGULARITIES */}
<GMPowers />

{/* LEVELS AS PER THE VII CPC PAY MATRIX */}
<PassLevels />

        
      </div>
    </div>
  );
};

export default RSPassRules;
