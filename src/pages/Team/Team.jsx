import React from "react";
import { TeamMemberCard } from "../../components";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="team">
      <h1>{t("Meet Our Team")}</h1>
      <div className="team-members">
        <TeamMemberCard title="Nikola Mirilo" position="Project Manager" email="nikolamirilo@gmail.com" />
        <TeamMemberCard title="Pera Peric" position="Frontend Web Developer" email="peraperic@gmail.com" />
        <TeamMemberCard title="Miroslav Mikic" position="Q/A Tester" email="miroslavmikic@gmail.com" />
        <TeamMemberCard title="Nikola Mirilo" position="Project Manager" email="nikolamirilo@gmail.com" />
        <TeamMemberCard title="Pera Peric" position="Frontend Web Developer" email="peraperic@gmail.com" />
        <TeamMemberCard title="Miroslav Mikic" position="Q/A Tester" email="miroslavmikic@gmail.com" />
      </div>
    </div>
  );
};

export default Team;
