import React from "react";
import colors from "../../colors";
import { useNavigate } from "react-router-dom";
import UiPaths from "../../paths/uiPaths";
import { useUser } from "../../context";

interface TeamsGridProps {
  teams: { name: string; value: number }[];
}

const TeamsGrid: React.FC<TeamsGridProps> = ({ teams }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xl">
      <h3 className={`${colors.textPrimary} text-lg font-bold mb-2`}>MANAGE TEAMS</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {teams.map((team, index) => (
          <div
            key={index}
            onClick={() => {
              if (user !== "ceo") navigate(UiPaths.MangeTeam);
            }}
            className={`${colors.cardBackground} p-4 rounded-lg text-center hover:bg-yellow-500 hover:text-black transition-colors duration-300`}
          >
            <p className={colors.textSecondary}>{team.name}</p>
            <p className={`${colors.textPrimary}`}>TK. {team.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsGrid;
