import React from "react";
import colors from "../../colors";

interface TotalContributionCardProps {
  totalContribution: number;
}

const TotalContributionCard: React.FC<TotalContributionCardProps> = ({ totalContribution }) => {
  return (
    <div className={`w-full max-w-xl ${colors.cardBackground} p-6 rounded-lg mb-4 text-center`}>
      <p className={colors.textSecondary}>Total Contribution</p>
      <p className={`${colors.textPrimary} text-xl font-bold`}>Tk. {totalContribution}</p>
    </div>
  );
};

export default TotalContributionCard;