import React from "react";
import { ContributionListProps } from "./interface/contributionList.interface";


const ContributionList: React.FC<ContributionListProps> = ({
  contributions,
  removeContribution,
}) => {
  return (
    <div className="space-y-2">
      {contributions.length === 0 ? (
        <p>No recent contributions</p>
      ) : (
        contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="flex justify-between items-center p-2 border border-gray-300 rounded-lg"
          >
            <span>{contribution.text}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-lg"
              onClick={() => removeContribution(contribution.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ContributionList;
