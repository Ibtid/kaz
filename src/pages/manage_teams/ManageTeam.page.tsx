import React, { useState } from "react";
import colors from "../../colors";

const ManageTeam = () => {
    const users = Array(6).fill('User 1');
    const numbers = Array.from({ length: 17 }, (_, i) => i + 1);
    const [selectedUser, setSelectedUser] = useState<number | null>(null);
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
    const [showFineText, setShowFineText] = useState(false);
  
    const handleUserClick = (idx: number) => {
      setSelectedUser(idx);
    };
  
    const handleNumberClick = (num: number) => {
      setSelectedNumber(num);
      setShowFineText(true);
    };
  
    return (
        <>
       
        {/* Navbar */}
      <div className={`w-full text-center py-4 border-b border-yellow-400 ${colors.background}`}>
      <h2
        className={`text-3xl font-bold ${colors.textWhite}`}
      >
        BENEVOLENT <span className="bg-black text-white px-2">C</span>
      </h2>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 p-4">
        {/* Team Members Section */}
        <div className="overflow-x-auto">
        <h3 className={`${colors.textPrimary} text-lg font-bold mb-2`}>Team Members</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {users.map((user, idx) => (
              <div
                key={idx}
                className={`flex flex-col p-2 items-center space-x-2 border border-gray-300 rounded-lg ${selectedUser === idx ? 'bg-blue-200' : ''}`}
                onClick={() => handleUserClick(idx)}
              >
                <div className="rounded-full h-8 w-8 bg-gray-200" />
                <div >{user}</div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Selected Member and Cards Section */}
        <div className="space-y-4 pr-4">
          <div className="flex items-center space-x-2  mb-2">
            <div className="rounded-full h-8 w-8 bg-gray-200" />
            <span className={`${colors.textPrimary} text-lg font-bold`}>{selectedUser !== null ? `User ${selectedUser + 1}` : 'No user selected'}</span>
          </div>
          <span className={`${colors.textSecondary} text-lg`}>{selectedUser !== null ? `Whoops pick the company rule that the user broke` : 'Company Rules'}</span>
          <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(25px,_1fr))]">
            {numbers.map((num) => (
              <div
                key={num}
                className={`h-12 w-12 flex items-center justify-center border border-gray-300 rounded-lg ${selectedNumber === num ? 'bg-green-200' : ''}`}
                onClick={() => handleNumberClick(num)}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
  
        {/* Right Section with Fine and Buttons */}
        <div className=" space-y-2">
          {showFineText && (
            <>
            <div>
              <p>Spilled Tea!</p>
              <p>Fine 30 taka</p>
            </div>
            <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">fine</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">cancel</button>
          </div>
          </>
          )}
        </div>
      </div>
      </>
    );
  };
  
  export default ManageTeam;