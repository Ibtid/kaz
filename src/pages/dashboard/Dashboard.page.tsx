import React, { useState } from "react";
import colors from "../../colors"; // Import colors
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import image1 from "../../img/avater_one.jpg";
import AvatarTick from "../../components/common/Avatar.component";
import UiPaths from "../../paths/uiPaths";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate(); // Hook for navigation
    
  const data: Contributor[] = [
    { name: "User 1", value: 80, avatar: image1 },
    { name: "User 2", value: 70, avatar: image1 },
    { name: "User 3", value: 50, avatar: image1 },
    { name: "User 4", value: 30, avatar: image1 },
    { name: "User 5", value: 20, avatar: image1 },
  ];
  return (
    <div className={` min-h-screen ${colors.background} `}>
      {/* Navbar */}
      <div className={`w-full text-center py-4 border-b border-yellow-400 ${colors.background}`}>
        <h2
          className={`text-3xl font-bold ${colors.textWhite}`}
        >
          BENEVOLENT <span className="bg-black text-white px-2">C</span>
        </h2>
      </div>
      <div className={` p-4 grid grid-cols-1 sm:grid-cols-2 gap-4`}>
       
        <div>
         {/* Total Contribution Card */}
         <div
        className={`w-full max-w-xl ${colors.cardBackground} p-6 rounded-lg mb-4 text-center`}
      >
        <p className={colors.textSecondary}>Total Contribution</p>
        <p className={`${colors.textPrimary} text-xl font-bold`}>Tk. 16,00</p>
      </div>
        

        {/* Teams Grid */}
        <div className="w-full max-w-xl">
          <h3 className={`${colors.textPrimary} text-lg font-bold mb-2`}>MANAGE TEAMS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                onClick={()=>navigate(UiPaths.MangeTeam)}
                  key={index}
                  className={`${colors.cardBackground} p-4 rounded-lg text-center hover:bg-yellow-500 hover:text-black transition-colors duration-300`}
                >
                  <p className={colors.textSecondary}>ARTISAN</p>
                  <p className={`${colors.textPrimary}`}>TK. 6,00</p>
                </div>
              ))}
          </div>
        </div>
        </div>
        
        <TopContributorsChart data={data} />
      
       
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
    <div className={`${colors.cardBackground} w-full max-w-xl  p-6 rounded-lg my-0 text-center shadow-lg flex flex-col items-center justify-center`}>
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
          {/* <Tooltip cursor={{ fill: "#333" }} /> */}
          <Bar dataKey="value" fill="#FACC15" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
