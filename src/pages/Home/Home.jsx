import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RxRocket } from "react-icons/rx";
import hero_bg from "../../assets/images/home/home-bg-dark.webp";
import { Card, Hero, Note } from "../../components";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <Hero image={hero_bg} title={t("HomeTitle")} subtitle={t("HomeSubtitle")} />
      <Helmet>
        <meta name="description" content={t("HomeP2")} />
        <title>Arioso Investment AG</title>
      </Helmet>
      <div className="intro-home">
        <div className="left-content">
          <p>{t("HomeP1")}</p>
          <p>{t("HomeP2")}</p>
          <p>{t("HomeP3")}</p>
        </div>
        <div className="right-content">
          <p>{t("HomeP4")}</p>
        </div>
      </div>
      <h1>{t("ServicesTitle")}</h1>
      <div className="services">
        <Card
          icon={<AiOutlineClockCircle size={30} />}
          title={t("Investment")}
          text={t("ServicesC1")}
        />
        <Card icon={<GiNetworkBars size={30} />} title={t("Network")} text={t("ServicesC2")} />
        <Card icon={<RxRocket size={30} />} title={t("Partner")} text={t("ServicesC3")} />
        <Card
          icon={<MdOutlineVerifiedUser size={30} />}
          title={t("Trust")}
          text={t("ServicesC4")}
        />
        <Card
          icon={<FaUserGraduate size={30} color="#fff" />}
          title={t("Expertise")}
          text={t("ServicesC5")}
        />
        <Card
          icon={<CgSandClock size={30} />}
          title={t("Enduring Nature")}
          text={t("ServicesC6")}
        />
      </div>
      <Note
        image="https://cdn.shopify.com/s/files/1/0066/4574/3686/files/New_York_Skyline_LinkedIn_Background_Photo.png?v=162791207523"
        quote={
          <>
            {t("HomeNote1")} & {t("HomeNote2")}
          </>
        }
      />
    </div>
  );
};

export default Home;
