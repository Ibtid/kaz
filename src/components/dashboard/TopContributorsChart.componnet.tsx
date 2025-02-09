import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import colors from "../../colors";
import AvatarTick from "../../components/common/Avatar.component";

interface Contributor {
  name: string;
  value: number;
  avatar: string;
}

interface TopContributorsChartProps {
  data: Contributor[];
}

const TopContributorsChart: React.FC<TopContributorsChartProps> = ({ data }) => {
  return (
    <div className={`${colors.cardBackground} w-full max-w-xl p-6 rounded-lg text-center shadow-lg flex flex-col items-center justify-center`}>
      <h3 className={`${colors.textPrimary} text-lg font-bold mb-4`}>Top Contributors</h3>
      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={data} layout="vertical" margin={{ left: 0 }}>
          <XAxis type="number" />
          <YAxis dataKey="avatar" type="category" tick={<AvatarTick />} />
          <Bar dataKey="value" fill="#FACC15" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopContributorsChart;
