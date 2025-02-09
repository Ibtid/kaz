export interface RulePickerProps {
    rulesWithFines: { rule: string; fine: number }[];
    selectedRuleIndex: number | null;
    handleRuleClick: (idx: number) => void;
  }