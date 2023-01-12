import React from "react";
import { useTranslation } from "react-i18next";
import { TeamMemberCard } from "../../components";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="team">
      <h1>{t("Meet Our Team")}</h1>
      {/* <Helmet>
        <meta name="description" content={t("Meet Our Team")} />
        <title>{t("Meet Our Team")}</title>
      </Helmet> */}
      <div className="team-members">
        <TeamMemberCard title="Aleksander F. Weiler" position={t("Director")} />
        <TeamMemberCard title="Adrianus Floor" position={t("Director")} />
        <TeamMemberCard title="Eduard Maresch" position={t("Finance Director")} />
        <TeamMemberCard title="Wolfgang J. Weuthen" position="Manager" />
        <TeamMemberCard title="Simon Wellenstein" position="Manager" />
        <TeamMemberCard title="Sophia Ambranov" position={t("Architect")} />
        <TeamMemberCard title="Patrick Sommer" position={t("Employee")} />
        <TeamMemberCard title="Richard Schuhmann" position={t("Employee")} />
        <TeamMemberCard title="Matthias Schuster" position={t("Employee")} />
        <TeamMemberCard title="Verona Seibling" position={t("Secretary")} />
      </div>
    </div>
  );
};

export default Team;
