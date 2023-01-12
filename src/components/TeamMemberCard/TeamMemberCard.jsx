import React from "react";

const TeamMemberCard = (props) => {
  return (
    <div className="team-member-card">
      <h3>{props.title}</h3>
      <h4>{props.position}</h4>
    </div>
  );
};

export default TeamMemberCard;
