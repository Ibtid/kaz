import { User } from "./user.interface";

export interface UserDetailsProps {
  users: User[];
  selectedUser: number | null;
  selectedRuleIndex: number | null;
  showFineText: boolean;
  rulesWithFines: { rule: string; fine: number }[];
  handleFineClick: () => void;
  setSelectedUser: (value: number | null) => void;
  setSelectedRuleIndex: (value: number | null) => void;
  setShowFineText: (value: boolean) => void;
}