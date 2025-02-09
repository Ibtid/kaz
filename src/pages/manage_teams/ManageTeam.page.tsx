import React, { useState } from "react";
import colors from "../../colors";
import add from "../../img/add.svg";
import { rulesWithFines } from "../../data";
import image1 from "../../img/avater_one.jpg";
import image2 from "../../img/avatar_two.jpg";
import image3 from "../../img/avatar_three.jpg";
import image4 from "../../img/avatar_four.jpg";
import image5 from "../../img/avatar_five.jpg";
import image6 from "../../img/avater_one.jpg";
import Navbar from "../../components/common/Navbar.component";

interface User {
  name: string;
  image: string;
  contributedAmount: number; // Added contributed amount property
}
// Sample data (Replace this with your actual user data)
const usersData: User[] = [
  { name: "Ayan", image: image1, contributedAmount: 100 },
  { name: "Bob", image: image2, contributedAmount: 150 },
  { name: "David", image: image3, contributedAmount: 200 },
  { name: "Nafiz", image: image4, contributedAmount: 50 },
  { name: "Uthso", image: image5, contributedAmount: 120 },
  { name: "Alex", image: image6, contributedAmount: 80 },
];

const ManageTeam = () => {
  const [users, setUsers] = useState<User[]>(usersData);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [selectedRuleIndex, setSelectedRuleIndex] = useState<number | null>(
    null
  );
  const [showFineText, setShowFineText] = useState(false);
  const [contributions, setContributions] = useState<
    { id: number; text: string }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleUserClick = (idx: number) => {
    setSelectedUser(idx);
  };

  const handleRuleClick = (idx: number) => {
    setSelectedRuleIndex(idx);
    setShowFineText(true);
  };

  const handleFineClick = () => {
    if (selectedUser !== null && selectedRuleIndex !== null) {
      const ruleObj = rulesWithFines[selectedRuleIndex];
      const newContribution = {
        id: Date.now(),
        text: `User ${selectedUser + 1} broke the rule: "${
          ruleObj.rule
        }" with a fine of ${ruleObj.fine} taka.`,
      };

      setContributions([...contributions, newContribution]);

      // Update the user's contribution
      const updatedUsers = users.map((user, idx) => {
        if (idx === selectedUser) {
          return {
            ...user,
            contributedAmount: user.contributedAmount + ruleObj.fine, // Update the contribution amount
          };
        }
        return user;
      });

      setUsers(updatedUsers);
      setSelectedUser(null);
      setSelectedRuleIndex(null);
      setShowFineText(false); // Hide fine section
    }
  };

  const removeContribution = (id: number) => {
    setContributions(
      contributions.filter((contribution) => contribution.id !== id)
    );
  };

  return (
    <>
      {/* Navbar */}

      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 p-4">
        {/* Team Members Section */}
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
                </div>{" "}
                {/* Added contributed amount */}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Member and Rules Section */}
        <div className="space-y-4 pr-4">
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
              {selectedUser !== null
                ? users[selectedUser].name
                : "No user selected"}
            </span>
          </div>
          <span className={`${colors.textSecondary} text-lg`}>
            {selectedUser !== null
              ? `Pick the company rule that the user broke`
              : "Company Rules"}
          </span>
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
        </div>

        {/* Right Section with Fine and Buttons */}
        <div className="space-y-2">
          {showFineText &&
            selectedRuleIndex !== null &&
            selectedUser !== null && (
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
                      setShowFineText(false); // Hide fine section
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
        </div>
      </div>

      {/* Recent Contributions Section */}
      <div className="p-4">
        <h3 className={`${colors.textPrimary} text-lg font-bold mb-2`}>
          Recent Benevolent Contributions
        </h3>
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
      </div>
    </>
  );
};

export default ManageTeam;
