import React, { useState } from "react";
import colors from "../../colors";
import add from "../../img/add.svg";
import { rulesWithFines } from "../../data";
import image1 from "../../img/avater_one.jpg";
import image2 from "../../img/avatar_two.jpg";
import image3 from "../../img/avatar_three.jpg";
import image4 from "../../img/avatar_four.jpg";
import image5 from "../../img/avatar_five.jpg";
import image6 from "../../img/avater_one.jpg";
import Navbar from "../../components/common/Navbar.component";
import { User } from "../../components/manage_teams/interface/user.interface";
import ContributionList from "../../components/manage_teams/ContributionList.Component";
import RulePicker from "../../components/manage_teams/RulePicker.Component";
import TeamMemberList from "../../components/manage_teams/TeamMemberList.Component";
import UserDetails from "../../components/manage_teams/UserDetails.Component";


const usersData: User[] = [
  { name: "Ayan", image: image1, contributedAmount: 100 },
  { name: "Bob", image: image2, contributedAmount: 150 },
  { name: "David", image: image3, contributedAmount: 200 },
  { name: "Nafiz", image: image4, contributedAmount: 50 },
  { name: "Uthso", image: image5, contributedAmount: 120 },
  { name: "Alex", image: image6, contributedAmount: 80 },
];

const ManageTeam = () => {
  const [users, setUsers] = useState<User[]>(usersData);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [selectedRuleIndex, setSelectedRuleIndex] = useState<number | null>(null);
  const [showFineText, setShowFineText] = useState(false);
  const [contributions, setContributions] = useState<
    { id: number; text: string }[]
  >([]);

  const handleUserClick = (idx: number) => setSelectedUser(idx);
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

      const updatedUsers = users.map((user, idx) => {
        if (idx === selectedUser) {
          return {
            ...user,
            contributedAmount: user.contributedAmount + ruleObj.fine,
          };
        }
        return user;
      });

      setUsers(updatedUsers);
      setSelectedUser(null);
      setSelectedRuleIndex(null);
      setShowFineText(false);
    }
  };
  const removeContribution = (id: number) => {
    setContributions(contributions.filter((contribution) => contribution.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 p-4">
        <TeamMemberList
          users={users}
          selectedUser={selectedUser}
          handleUserClick={handleUserClick}
        />
        <div className="space-y-4 pr-4">
          <UserDetails
            users={users}
            selectedUser={selectedUser}
            selectedRuleIndex={selectedRuleIndex}
            showFineText={showFineText}
            rulesWithFines={rulesWithFines}
            handleFineClick={handleFineClick}
            setSelectedUser={setSelectedUser}
            setSelectedRuleIndex={setSelectedRuleIndex}
            setShowFineText={setShowFineText}
          />
          <RulePicker
            rulesWithFines={rulesWithFines}
            selectedRuleIndex={selectedRuleIndex}
            handleRuleClick={handleRuleClick}
          />
        </div>
        <ContributionList
          contributions={contributions}
          removeContribution={removeContribution}
        />
      </div>
    </>
  );
};

export default ManageTeam;