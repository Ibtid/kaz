import React from "react";
import colors from "../../colors";
import { UserDetailsProps } from "./interface/user.details.interface";



const UserDetails: React.FC<UserDetailsProps> = ({
  users,
  selectedUser,
  selectedRuleIndex,
  showFineText,
  rulesWithFines,
  handleFineClick,
  setSelectedUser,
  setSelectedRuleIndex,
  setShowFineText,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 mb-2">
        {selectedUser == null ? (
          <div className="rounded-full h-8 w-8 bg-gray-200" />
        ) : (
          <img
            className="rounded-full h-8 w-8 bg-gray-200"
            src={users[selectedUser]?.image}
            alt={`Avatar of User ${selectedUser + 1}`}
          />
        )}
        <span className={`${colors.textPrimary} text-lg font-bold`}>
          {selectedUser !== null ? users[selectedUser].name : "No user selected"}
        </span>
      </div>
      <span className={`${colors.textSecondary} text-lg`}>
        {selectedUser !== null
          ? `Pick the company rule that the user broke`
          : "Company Rules"}
      </span>
      {showFineText && selectedRuleIndex !== null && selectedUser !== null && (
        <>
          <div className="mb-10">
            <p className={`${colors.textPrimary} text-lg font-bold mb-2`}>
              {rulesWithFines[selectedRuleIndex].rule}
            </p>
            <p className={`text-red-500 text-lg font-bold mb-2`}>
              Fine: {rulesWithFines[selectedRuleIndex].fine} taka
            </p>
          </div>
          <div className="flex space-x-2 mb-10">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleFineClick}
            >
              Fine
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => {
                setSelectedUser(null);
                setSelectedRuleIndex(null);
                setShowFineText(false);
              }}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
