import React, { useState } from "react";
import colors from "../../colors";
import add from "../../img/add.svg";
import { rulesWithFines } from "../../data";
import UiPaths from "../../paths/uiPaths";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
 const navigate = useNavigate(); 
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
    
        <h2 className={`text-2xl md:text-3xl font-bold ${colors.textWhite} mb-2 md:mb-0`}>
          BENEVOLENT <span className="bg-black text-white px-2">C</span>
        </h2>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <button
            className="bg-blue-500 text-white text-sm md:text-base px-3 md:px-4 py-2 rounded-lg cursor-pointer"
            onClick={handleRulesClick}
          >
            Rules
          </button>
          <button className="bg-red-500 text-white text-sm md:text-base px-3 md:px-4 py-2 rounded-lg cursor-pointer" onClick = {()=> navigate(UiPaths.Login)}>
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg w-11/12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              
              <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={() => setIsMenuOpen(false)} 
            >
              &times;
            </button>
            </div>
            <div className="flex flex-col space-y-4">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={handleRulesClick}
              >
                Rules
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick = {()=> navigate(UiPaths.Login)}>Logout</button>
              
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
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

            {/* Scrollable table inside modal */}
            <div className="overflow-y-auto h-[80%]">
              <table className="w-full border border-yellow-400 text-black">
                <tbody>
                  {rulesWithFines.map((ruleObj, index) => (
                    <tr key={index} className="border border-yellow-400">
                      <td className="p-2 text-sm md:text-base">
                        {index + 1}. {ruleObj.rule}
                      </td>
                      <td className="p-2 text-right text-yellow-400 font-bold text-sm md:text-base">
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
