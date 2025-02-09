import React, { useState, useEffect } from "react";
import colors from "../../colors";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import image1 from "../../img/avater_one.jpg";
import image2 from "../../img/avatar_two.jpg";
import image3 from "../../img/avatar_three.jpg";
import image4 from "../../img/avatar_four.jpg";
import image5 from "../../img/avatar_five.jpg";
import AvatarTick from "../../components/common/Avatar.component";
import UiPaths from "../../paths/uiPaths";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context";
import Confetti from "react-confetti"; // Import the confetti library

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showConfetti, setShowConfetti] = useState(false); // State to show confetti
  const [totalContribution, setTotalContribution] = useState(0); // State for total contribution

  // State for team contributions
  const [data, setData] = useState<Contributor[]>([
    { name: "Ayan", value: 18000, avatar: image1 },
    { name: "Bob", value: 10070, avatar: image2 },
    { name: "David", value: 10050, avatar: image3 },
    { name: "Nafiz", value: 9030, avatar: image4 },
    { name: "Uthso", value: 6020, avatar: image5 },
  ]);

  // State for teams
  const [teams, setTeams] = useState([
    { name: "Team Alpha", value: 6000 },
    { name: "Team Bravo", value: 5000 },
    { name: "Team Charlie", value: 4000 },
    { name: "Team Delta", value: 3000 },
    { name: "Team Echo", value: 2000 },
    { name: "Team Foxtrot", value: 1000 },
  ]);

  // Calculate total contribution whenever data changes
  useEffect(() => {
    const total = teams.reduce((acc, team) => acc + team.value, 0);
    setTotalContribution(total);
  }, [teams]);

  const handlePartyClick = () => {
    // Show confetti for 5 seconds
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);

    // Reset all contributions to zero
    setData((prevData) =>
      prevData.map((contributor) => ({ ...contributor, value: 0 }))
    );
    setTeams((prevTeams) => prevTeams.map((team) => ({ ...team, value: 0 })));
  };

  // Check if all contributions are zero
  const isBalanceZero = totalContribution === 0;

  return (
    <div className={`min-h-screen ${colors.background}`}>
      {showConfetti && <Confetti />} {/* Render confetti if true */}
      
      {/* Navbar */}
      <div
        className={`w-full text-center py-4 border-b border-yellow-400 ${colors.background}`}
      >
        <h2 className={`text-3xl font-bold ${colors.textWhite}`}>
          BENEVOLENT <span className="bg-black text-white px-2">C</span>
        </h2>
      </div>
      
      <div className={`p-4 grid grid-cols-1 sm:grid-cols-2 gap-4`}>
        <div>
          {/* Total Contribution Card */}
          <div
            className={`w-full max-w-xl ${colors.cardBackground} p-6 rounded-lg mb-4 text-center`}
          >
            <p className={colors.textSecondary}>Total Contribution</p>
            <p className={`${colors.textPrimary} text-xl font-bold`}>
              Tk. {totalContribution}
            </p>
          </div>

          {/* Teams Grid */}
          <div className="w-full max-w-xl">
            <h3 className={`${colors.textPrimary} text-lg font-bold mb-2`}>
              MANAGE TEAMS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teams.map((team, index) => (
                <div
                  onClick={() => {
                    if (user !== "ceo") navigate(UiPaths.MangeTeam);
                  }}
                  key={index}
                  className={`${colors.cardBackground} p-4 rounded-lg text-center hover:bg-yellow-500 hover:text-black transition-colors duration-300`}
                >
                  <p className={colors.textSecondary}>{team.name}</p>
                  <p className={`${colors.textPrimary}`}>TK. {team.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <TopContributorsChart data={data} />

        {user === "ceo" && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={handlePartyClick}
              disabled={isBalanceZero} // Disable button if balance is zero
              className={`px-8 py-4 rounded-full text-2xl font-bold transition-transform transform hover:scale-105 ${
                isBalanceZero
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Styling when disabled
                  : "bg-yellow-500 text-black hover:bg-yellow-600" // Styling when enabled
              }`}
            >
              Declare Party!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

interface Contributor {
  name: string;
  value: number;
  avatar: string;
}

interface TopContributorsChartProps {
  data: Contributor[];
}

const TopContributorsChart: React.FC<TopContributorsChartProps> = ({
  data,
}) => {
  return (
    <div
      className={`${colors.cardBackground} w-full max-w-xl p-6 rounded-lg my-0 text-center shadow-lg flex flex-col items-center justify-center`}
    >
      <h3 className={`${colors.textPrimary} text-lg font-bold mb-4`}>
        Top Contributors
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: 0 }}>
          <XAxis type="number" />
          <YAxis
            dataKey="avatar" // Use avatar instead of name
            type="category"
            tick={<AvatarTick />} // Use custom tick component
          />
          <Bar dataKey="value" fill="#FACC15" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
