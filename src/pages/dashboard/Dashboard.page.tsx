import React, { useState, useEffect } from "react";
import colors from "../../colors";
import Confetti from "react-confetti";
import Navbar from "../../components/common/Navbar.component";

import image1 from "../../img/avater_one.jpg";
import image2 from "../../img/avatar_two.jpg";
import image3 from "../../img/avatar_three.jpg";
import image4 from "../../img/avatar_four.jpg";
import image5 from "../../img/avatar_five.jpg";
import TotalContributionCard from "../../components/dashboard/TotalContributionCard.Component";
import DeclarePartyButton from "../../components/dashboard/DeclareParty.Button";
import TeamsGrid from "../../components/dashboard/TeamsGrid.Component";
import TopContributorsChart from "../../components/dashboard/TopContributorsChart.componnet";
import { useUser } from "../../context";

interface Contributor {
  name: string;
  value: number;
  avatar: string;
}

const Dashboard = () => {
  const { user, setUser } = useUser();
  const [showConfetti, setShowConfetti] = useState(false);
  const [totalContribution, setTotalContribution] = useState(0);
  const [data, setData] = useState<Contributor[]>([
    { name: "Ayan", value: 1800, avatar: image1 },
    { name: "Bob", value: 1007, avatar: image2 },
    { name: "David", value: 1005, avatar: image3 },
    { name: "Nafiz", value: 903, avatar: image4 },
    { name: "Uthso", value: 602, avatar: image5 },
  ]);

  const [teams, setTeams] = useState([
    { name: "Team Alpha", value: 6000 },
    { name: "Team Bravo", value: 5000 },
    { name: "Team Charlie", value: 4000 },
    { name: "Team Delta", value: 3000 },
    { name: "Team Echo", value: 2000 },
    { name: "Team Foxtrot", value: 1000 },
  ]);

  useEffect(() => {
    const total = teams.reduce((acc, team) => acc + team.value, 0);
    setTotalContribution(total);
  }, [teams]);

  const handlePartyClick = () => {
    setShowConfetti(true);
    setData((prevData) =>
      prevData.map((contributor) => ({ ...contributor, value: 0 }))
    );
    setTeams((prevTeams) => prevTeams.map((team) => ({ ...team, value: 0 })));
  };

  const isBalanceZero = totalContribution === 0;

  return (
    <>
      <div className={`min-h-screen flex flex-col ${colors.background}`}>
        <Navbar />

        <div className={`p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow`}>
          <div className="flex flex-col justify-center items-center">
            <TotalContributionCard totalContribution={totalContribution} />
            <TeamsGrid teams={teams} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <TopContributorsChart data={data} />
          </div>
          {user == "ceo" && (
            <DeclarePartyButton
              handlePartyClick={handlePartyClick}
              isBalanceZero={isBalanceZero}
            />
          )}
        </div>

        {/* Footer */}
        <footer className="w-full py-4 text-center text-sm text-gray-500 bg-gray-200 mt-8">
          <p>Made for an interview</p>
        </footer>
      </div>

      {showConfetti && <Confetti />}
    </>
  );
};

export default Dashboard;
