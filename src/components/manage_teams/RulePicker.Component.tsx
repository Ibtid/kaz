import React from "react";
import { RulePickerProps } from "./interface/rulePickerProps.interface";


const RulePicker: React.FC<RulePickerProps> = ({
  rulesWithFines,
  selectedRuleIndex,
  handleRuleClick,
}) => {
  return (
    <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(25px,_1fr))]">
      {rulesWithFines.map((ruleObj, idx) => (
        <div
          key={idx}
          className={`h-12 w-12 flex items-center justify-center border border-gray-300 rounded-lg cursor-pointer ${
            selectedRuleIndex === idx ? "bg-green-200" : ""
          }`}
          onClick={() => handleRuleClick(idx)}
        >
          {idx + 1}
        </div>
      ))}
    </div>
  );
};

export default RulePicker;
