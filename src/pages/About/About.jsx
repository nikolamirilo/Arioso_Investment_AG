import React from "react";
import { Card, Hero } from "../../components";
import { BsTelephoneFill } from "react-icons/bs";

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
          <p>
            Entrepreneurial. Passionate. Exclusive. These are the qualities that can be used to describe the community
            of successful entrepreneurs and private individuals who have joined together under the umbrella of the
            Investor Group.
          </p>
          <p>
            Entrepreneurial. Passionate. Exclusive. These are the qualities that can be used to describe the community
            of successful entrepreneurs and private individuals who have joined together under the umbrella of the
            Investor Group.
          </p>
        </div>
        <div className="right-content">
          <p>
            and to oversee the growth of a mandate actively or passively as part of a private placement. It is the
            passion for entrepreneurial activity, in particular, that unites all investors in this respect. Investor
            therefore sees itself as an expert contact in all matters pertaining to our central topics of
            entrepreneurship, growth and finance – always on an equal footing with the target companies and the people
            acting on their behalf.
          </p>
        </div>
      </div>
      <h1>Who We Are</h1>
      <div className="who-we-are">
        <details>
          <summary> Title of Details Summary</summary>
          <p>
            and to oversee the growth of a mandate actively or passively as part of a private placement. It is the
            passion for entrepreneurial activity, in particular, that unites all investors in this respect. Investor
            therefore sees itself as an expert contact in all matters pertaining to our central topics of
            entrepreneurship, growth and finance – always on an equal footing with the target companies and the people
            acting on their behalf.
          </p>
        </details>
        <details>
          <summary> Title of Details Summary</summary>
          <p>
            and to oversee the growth of a mandate actively or passively as part of a private placement. It is the
            passion for entrepreneurial activity, in particular, that unites all investors in this respect. Investor
            therefore sees itself as an expert contact in all matters pertaining to our central topics of
            entrepreneurship, growth and finance – always on an equal footing with the target companies and the people
            acting on their behalf.
          </p>
        </details>
        <details>
          <summary> Title of Details Summary</summary>
          <p>
            and to oversee the growth of a mandate actively or passively as part of a private placement. It is the
            passion for entrepreneurial activity, in particular, that unites all investors in this respect. Investor
            therefore sees itself as an expert contact in all matters pertaining to our central topics of
            entrepreneurship, growth and finance – always on an equal footing with the target companies and the people
            acting on their behalf.
          </p>
        </details>
        <details>
          <summary> Title of Details Summary</summary>
          <p>
            and to oversee the growth of a mandate actively or passively as part of a private placement. It is the
            passion for entrepreneurial activity, in particular, that unites all investors in this respect. Investor
            therefore sees itself as an expert contact in all matters pertaining to our central topics of
            entrepreneurship, growth and finance – always on an equal footing with the target companies and the people
            acting on their behalf.
          </p>
        </details>
        <details>
          <summary> Title of Details Summary</summary>
          <p>
            and to oversee the growth of a mandate actively or passively as part of a private placement. It is the
            passion for entrepreneurial activity, in particular, that unites all investors in this respect. Investor
            therefore sees itself as an expert contact in all matters pertaining to our central topics of
            entrepreneurship, growth and finance – always on an equal footing with the target companies and the people
            acting on their behalf.
          </p>
        </details>
      </div>
      <h1>What we want</h1>
      <div className="what-we-want">
        <p>
          We want our portfolio companies to grow – that is the shared objective of the entrepreneurs in whom we invest
          and the investors. To achieve this, we need to take many steps together, with our sights always set firmly on
          the desired level of success. Investor enables wealthy private investors to meet successful companies, with
          each investor being free to choose whether he or she “only” lets his or her money work for him or her or
          whether he or she also contributes his or her business expertise and actively assists the portfolio company
          with its future growth. Together with the entrepreneur, we and our investors bear the risk involved in the
          company’s further growth in order to realize new ideas for further development. For this reason, we make a
          very careful selection and actively oversee every investment. Are you looking for like-minded partners, either
          to invest or because your company needs finance? Below, we have compiled some further information about our
          approach, both for interested investors and for capital-seeking entrepreneurs.
        </p>
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
