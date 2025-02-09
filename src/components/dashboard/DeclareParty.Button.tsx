import React from "react";

interface DeclarePartyButtonProps {
  handlePartyClick: () => void;
  isBalanceZero: boolean;
}

const DeclarePartyButton: React.FC<DeclarePartyButtonProps> = ({ handlePartyClick, isBalanceZero }) => {
  return (
    <div className="flex justify-center items-center mt-8">
      <button
        onClick={handlePartyClick}
        disabled={isBalanceZero}
        className={`px-8 py-4 rounded-full text-2xl font-bold transition-transform transform hover:scale-105 ${
          isBalanceZero
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-yellow-500 text-black hover:bg-yellow-600"
        }`}
      >
        Declare Party!
      </button>
    </div>
  );
};

export default DeclarePartyButton;
