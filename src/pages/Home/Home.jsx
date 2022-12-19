import React from "react";
import { BsFillDashCircleFill } from "react-icons/bs";
import { Card, Hero } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Hero
        image="https://wallpapercave.com/wp/wp7632923.jpg"
        title="We are Ariso Investment AG"
        subtitle="Leading Investment Company"
      />
      <div className="who-we-are">
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
      <div className="services">
        <Card
          icon={<BsFillDashCircleFill color="#eeb238ff" size={40} />}
          title="Pera"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
        <Card
          icon={<BsFillDashCircleFill color="#eeb238ff" size={40} />}
          title="Pera"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
        <Card
          icon={<BsFillDashCircleFill color="#eeb238ff" size={40} />}
          title="Pera"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
        <Card
          icon={<BsFillDashCircleFill color="#eeb238ff" size={40} />}
          title="Pera"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
        <Card
          icon={<BsFillDashCircleFill color="#eeb238ff" size={40} />}
          title="Pera"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
        <Card
          icon={<BsFillDashCircleFill color="#eeb238ff" size={40} />}
          title="Pera"
          text="Investor seeks, assesses and negotiates direct investments, supports medium-sized
            businesses in growth phases and safeguards the interests of investors. In conjunction
            with the business investors, the professional investment team and the expertise made
            available from a robust network of entrepreneurs, Investor has an enduring commitment to
            medium-sized businesses."
        />
      </div>
    </div>
  );
};

export default Home;
