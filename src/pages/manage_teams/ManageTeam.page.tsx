import React, { useState } from "react";
import colors from "../../colors";
import image1 from "../../img/avater_one.jpg";
import add from "../../img/add.svg";
import { rulesWithFines } from "../../data";

const ManageTeam = () => {
  const users = Array(6).fill('User 1');
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [selectedRuleIndex, setSelectedRuleIndex] = useState<number | null>(null);
  const [showFineText, setShowFineText] = useState(false);
  const [contributions, setContributions] = useState<{ id: number, text: string }[]>([]);
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
        text: `User ${selectedUser + 1} broke the rule: "${ruleObj.rule}" with a fine of ${ruleObj.fine} taka.`,
      };

      setContributions([...contributions, newContribution]);
      setSelectedUser(null);
      setSelectedRuleIndex(null);
      setShowFineText(false); // Hide fine section
    }
  };

  const removeContribution = (id: number) => {
    setContributions(contributions.filter(contribution => contribution.id !== id));
  };

  // Function to open the modal
  const handleRulesClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className={`w-full sticky top-0 z-10 text-center py-4 border-b border-yellow-400 ${colors.background} flex justify-between items-center px-4`}>
        <h2 className={`text-3xl font-bold ${colors.textWhite}`}>
          BENEVOLENT <span className="bg-black text-white px-2">C</span>
        </h2>
        <div className="flex space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer">
            Logout
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={handleRulesClick}>
            Rules
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 p-4">
        {/* Team Members Section */}
        <div className="overflow-x-auto">
          <h3 className={`${colors.textPrimary} text-lg font-bold mb-2`}>Team Members</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {users.map((user, idx) => (
              <div
                key={idx}
                className={`flex flex-col p-2 items-center space-x-2 border border-gray-300 rounded-lg cursor-pointer ${selectedUser === idx ? 'bg-blue-200' : ''}`}
                onClick={() => handleUserClick(idx)}
              >
                <img className="rounded-full h-8 w-8 bg-gray-200" src={image1} />
                <div>{user}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Member and Rules Section */}
        <div className="space-y-4 pr-4">
          <div className="flex items-center space-x-2 mb-2">
            {selectedUser == null ? <div className="rounded-full h-8 w-8 bg-gray-200" /> :
              <img className="rounded-full h-8 w-8 bg-gray-200" src={image1} />}
            <span className={`${colors.textPrimary} text-lg font-bold`}>{selectedUser !== null ? `User ${selectedUser + 1}` : 'No user selected'}</span>
          </div>
          <span className={`${colors.textSecondary} text-lg`}>{selectedUser !== null ? `Pick the company rule that the user broke` : 'Company Rules'}</span>
          <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(25px,_1fr))]">
            {rulesWithFines.map((ruleObj, idx) => (
              <div
                key={idx}
                className={`h-12 w-12 flex items-center justify-center border border-gray-300 rounded-lg cursor-pointer ${selectedRuleIndex === idx ? 'bg-green-200' : ''}`}
                onClick={() => handleRuleClick(idx)}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section with Fine and Buttons */}
        <div className="space-y-2">
          {showFineText && selectedRuleIndex !== null && selectedUser !== null && (
            <>
              <div className="mb-10">
                <p className={`${colors.textPrimary} text-lg font-bold mb-2`}>{rulesWithFines[selectedRuleIndex].rule}</p>
                <p className={`text-red-500 text-lg font-bold mb-2`}>Fine: {rulesWithFines[selectedRuleIndex].fine} taka</p>
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
        <h3 className={`${colors.textPrimary} text-lg font-bold mb-2`}>Recent Benevolent Contributions</h3>
        <div className="space-y-2">
          {contributions.length === 0 ? (
            <p>No recent contributions</p>
          ) : (
            contributions.map((contribution) => (
              <div key={contribution.id} className="flex justify-between items-center p-2 border border-gray-300 rounded-lg">
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

    {/* Modal for Rules */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="relative bg-white p-6 rounded-lg w-11/12 md:w-1/2 h-[50vh]">
      {/* Close button in top-right corner */}
      
      <img
        className="absolute top-4 right-4 bg-red-500 text-white w-6 h-6  rounded-xl cursor-pointer transform rotate-45"
        onClick={handleCloseModal}
        src={add} 
      />
      <h2 className="text-xl font-bold mb-4">Company Rules & Fines</h2>
      
      {/* Make the content scrollable */}
      <div className="overflow-y-auto h-[80%]">
        <table className="w-full border border-yellow-400 text-black">
          <tbody>
            {rulesWithFines.map((ruleObj, index) => (
              <tr key={index} className="border border-yellow-400">
                <td className="p-2">
                  {index + 1}. {ruleObj.rule}
                </td>
                <td className="p-2 text-right text-yellow-400 font-bold">
                  TK. {ruleObj.fine}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default ManageTeam;
