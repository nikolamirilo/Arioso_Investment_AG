import { t } from "i18next";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { Card, Hero } from "../../components";
import data from "../../translationKeys.json";

const About = () => {
  return (
    <div className="about">
      <Hero
        image="https://media.kensingtontours.com/image/upload/g_auto,f_auto,q_auto,w_1366,h_768,c_fill/kt/live/pictures/europe/western/switzerland/itinerary/swiss-exclusive-/bern-switzerland-tours"
        title=""
        subtitle=""
      />
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
        {data
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
        <Card
          type="about-page"
          icon={<BsTelephoneFill size={30} />}
          mention="For entrepreneurs"
          title="Attractive financing model for companies"
          list={
            <ul>
              <li>Capital injection in the form of equity (EUR 2-20 million)</li>
              <li>Qualified minority interests as a rule</li>
              <li>Investment time horizon of around 3-15 years in consultation with the entrepreneur/founder</li>
              <li>Exclusive group of investors</li>
              <li>Access to the network: expertise and office holders, where applicable</li>
              <li>Close monitoring of the company</li>
              <li>As a rule, only one contact person and only one new shareholder</li>
              <li>Jointly defined exit perspective</li>
            </ul>
          }
        />
        <Card
          type="about-page"
          icon={<BsTelephoneFill size={30} />}
          mention="For investors"
          title="Attractive financing model for companies"
          list={
            <ul>
              <li> Direct investments: no funds, no blind pool</li>
              <li> Lasting increase in value through careful selection of the companies and active support</li>
              <li> Freedom of choice on whether and how much to invest</li>
              <li> Formation of investment companies with half-yearly reporting</li>
              <li> Operating efficiency through complete coordination of the investments</li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default About;
