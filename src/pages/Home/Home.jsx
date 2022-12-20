import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RxRocket } from "react-icons/rx";
import { Card, Hero } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Hero
        image="https://wallpapercave.com/wp/wp7632923.jpg"
        title="We are Ariso Investment AG"
        subtitle="Leading Investment Company"
      />
      <div className="intro-home">
        <div className="left-content">
          <p>
            Arioso Investment AG is a real estate investment firm specializing in the acquisition,
            development and management of commercial real estate (office, logistics and retail
            centers) in Western, Central and Eastern Europe, with a primary focus on Austria Germany
            Switzerland Belgium and Netherlands.
          </p>
          <p>
            Together with institutional and high net worth private partners, Arioso Investment AG
            invests directly into commercial real estate with clearly defined risk return profiles.
            The assets are dividend yielding and/or have a long term capital gain perspective.
          </p>
          <p>
            The competence of Arioso Investment AG is based on a highly professional and experienced
            team.
          </p>
        </div>
        <div className="right-content">
          <p>
            Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses.
          </p>
        </div>
      </div>
      <h1>We offer more than money</h1>
      <div className="services">
        <Card
          icon={<AiOutlineClockCircle size={30} />}
          title="Investment"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
        <Card
          icon={<GiNetworkBars size={30} />}
          title="Network"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
        <Card
          icon={<RxRocket size={30} />}
          title="Partner"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
        <Card
          icon={<MdOutlineVerifiedUser size={30} />}
          title="Trust"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
        <Card
          icon={<FaUserGraduate size={30} color="#fff" />}
          title="Expertise"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
        <Card
          icon={<CgSandClock size={30} />}
          title="Enduring Nature"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
      </div>
      <h1 className="quote">
        <i>
          It is the trust between Investor, entrepreneur <span className="special">&</span> network
          that is the key to success.
        </i>
      </h1>
    </div>
  );
};

export default Home;
