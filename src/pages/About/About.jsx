import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { BsTelephoneFill } from "react-icons/bs";
import hero_bg from "../../assets/images/about/about-bg.webp";
import { Card, DetailsSection, Hero } from "../../components";
import data from "../../translationKeys.json";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <Hero image={hero_bg} title="" subtitle="" />
      <Helmet>
        <meta
          name="description"
          content="We want our portfolio companies to grow – that is the shared objective of the entrepreneurs in whom we invest and the investors. To achieve this, we need to take many steps together, with our sights always set firmly on the desired level of success. Investor enables wealthy private investors to meet successful companies, with each investor being free to choose whether he or she “only” lets his or her money work for him or her or whether he or she also contributes his or her business expertise and actively assists the portfolio company with its future growth. Together with the entrepreneur, we and our investors bear the risk involved in the company’s further growth in order to realize new ideas for further development. For this reason, we make a very careful selection and actively oversee every investment. Are you looking for like-minded partners, either to invest or because your company needs finance? Below, we have compiled some further information about our approach, both for interested investors and for capital-seeking entrepreneurs."
        />
        <title>{t("About Us")}</title>
      </Helmet>
      <div className="intro-about">
        <div className="left-content">
          <p>{t("AboutUsP1")}</p>
          <p>{t("AboutUsP2")}</p>
        </div>
        <div className="right-content">
          <p>{t("AboutUsP3")}</p>
        </div>
      </div>
      <h1>{t("Who We Are")}</h1>
      <DetailsSection />
      <h1>{t("What we want")}</h1>
      <div className="what-we-want">
        <p>{t("WhatWeWantParagraph")}</p>
      </div>
      <div className="cards">
        {data.about.cards
          ? data.about.cards.map((item, idx) => {
              return (
                <Card
                  key={idx}
                  type="about-page"
                  icon={<BsTelephoneFill size={30} />}
                  mention={t(`${item.mention}`)}
                  title={t(`${item.title}`)}
                  list={
                    <ul>
                      {item.list
                        ? item.list.map((list_item, idx) => {
                            return <li key={idx}>{t(`${list_item}`)}</li>;
                          })
                        : null}
                    </ul>
                  }
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default About;
