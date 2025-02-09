import React, { useState } from "react";
import colors from "../../colors";
import add from "../../img/add.svg";
import { rulesWithFines } from "../../data";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRulesClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className={`w-full sticky top-0 z-10 text-center py-4 border-b border-yellow-400 ${colors.background} flex justify-between items-center px-4`}
      >
        <h2 className={`text-3xl font-bold ${colors.textWhite}`}>
          BENEVOLENT <span className="bg-black text-white px-2">C</span>
        </h2>
        <div className="flex space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer">
            Logout
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
            onClick={handleRulesClick}
          >
            Rules
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg w-11/12 md:w-1/2 h-[50vh] z-50">
            {/* Close button in top-right corner */}
            <img
              className="absolute top-4 right-4 bg-red-500 text-white w-6 h-6 rounded-xl cursor-pointer transform rotate-45"
              onClick={handleCloseModal}
              src={add}
              alt="Close"
            />
            <h2 className="text-xl font-bold mb-4">Company Rules & Fines</h2>

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

export default Navbar;
