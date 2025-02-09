import React from "react";
import colors from "../../colors";
import { User } from "./interface/user.interface";

interface TeamMemberListProps {
  users: User[];
  selectedUser: number | null;
  handleUserClick: (idx: number) => void;
}

const TeamMemberList: React.FC<TeamMemberListProps> = ({
  users,
  selectedUser,
  handleUserClick,
}) => {
  return (
    <div className="overflow-x-auto">
      <h3 className={`${colors.textPrimary} text-lg font-bold mb-2`}>
        Team Members
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {users.map((user, idx) => (
          <div
            key={idx}
            className={`flex flex-col p-2 items-center space-x-2 border border-gray-300 rounded-lg cursor-pointer ${
              selectedUser === idx ? "bg-blue-200" : ""
            }`}
            onClick={() => handleUserClick(idx)}
          >
            <img
              className="rounded-full h-8 w-8 bg-gray-200"
              src={user.image}
              alt={`Avatar of ${user.name}`}
            />
            <div>{user.name}</div>
            <div className="text-sm text-gray-500">
              Contributed: {user.contributedAmount} taka
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberList;
