import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { Card, Hero } from "../../components";
import data from "../../translationKeys.json";
import hero_bg from "../../assets/images/about/about-bg.webp";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <Hero image={hero_bg} title="" subtitle="" />
      <div className="intro-about">
        <div className="left-content">
          <p>{t("AboutUsP1")}</p>
          <p>{t("AboutUsP2")}</p>
          <p>{t("AboutUsP3")}</p>
        </div>
        <div className="right-content">
          <p>{t("AboutUsP4")}</p>
        </div>
      </div>
      <h1>{t("Who We Are")}</h1>
      <div className="who-we-are">
        {data.about.details
          ? data.about.details.map((item, idx) => {
              return (
                <details key={idx}>
                  <summary>{t(`${item.summary}`)}</summary>
                  {item.paragraphs
                    ? item.paragraphs.map((paragraph, idx) => {
                        return <p key={idx}>{t(`${paragraph}`)}</p>;
                      })
                    : null}
                  {item.lists
                    ? item.lists.map((list, idx) => {
                        return (
                          <div key={idx} className="details-list">
                            {list.title ? <h4>{t(`${list.title}`)}</h4> : null}
                            <ul>
                              {list.list_elements
                                ? list.list_elements.map((list_el, idx) => {
                                    return <li key={idx}>{t(`${list_el}`)}</li>;
                                  })
                                : null}
                            </ul>
                          </div>
                        );
                      })
                    : null}
                  {item.note ? <h4 className="details-note">{t(`${item.note}`)}</h4> : null}
                </details>
              );
            })
          : null}
      </div>
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
