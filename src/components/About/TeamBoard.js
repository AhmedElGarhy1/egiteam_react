import React, { useEffect, useState } from "react";
import { mentorsData } from "../../data";
import TeamCard from "./TeamCard";

const TeamBoard = () => {
  const [leads, setLeads] = useState([]);
  const [teamLeads, setTeamLeads] = useState([]);

  useEffect(() => {
    const leads = [];
    const teamLeads = [];
    mentorsData.forEach((mentor) => {
      const isLeader = mentor.roles.some((ele) => /.*Team.*/g.test(ele));
      isLeader ? teamLeads.push(mentor) : leads.push(mentor);
    });
    setLeads(leads);
    setTeamLeads(teamLeads);
  }, []);

  return (
    <div className="team-board">
      <h2>Team Board</h2>
      <div className="row team-leaders">
        {teamLeads.map((mentor, i) => (
          <TeamCard key={i} i={i} mentor={mentor} />
        ))}
      </div>
      <div className="row">
        {leads.map((mentor, i) => (
          <TeamCard key={i} i={i} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

// (ele) => /.*Team Lead.*/g.test(ele)
export default TeamBoard;
