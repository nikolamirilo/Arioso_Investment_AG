import React from "react";
import { useTranslation } from "react-i18next";
import card_img1 from "../../assets/images/offer/card_img1.webp";
import card_img2 from "../../assets/images/offer/card_img2.webp";
import card_img3 from "../../assets/images/offer/card_img3.webp";
import card_img4 from "../../assets/images/offer/card_img4.webp";
import note_bg from "../../assets/images/offer/note-bg.webp";
import { Note, OfferCard } from "../../components";
import { Helmet } from "react-helmet";
import data from "../../translationKeys.json";

const Offer = () => {
  const images = [card_img1, card_img2, card_img3, card_img4];
  const { t } = useTranslation();
  return (
    <div className="offer">
      <Helmet>
        <meta
          name="description"
          content="Both as developers D-A-CH area as well as buyers of properties we are interested in all types of properties in select locations in and around D-A-CH area. If you want to sell a piece of land or house and looking for a solvent and reliable buyer, please contact our qualified experts. We create a professional and market-oriented real estate valuation D-A-CH area for the following items: Investment properties, Special Real Estates, and Building sites."
        />
        <title>{t("Real Estate")}</title>
      </Helmet>
      <div className="offer-cards">
        {data.offer.cards
          ? data.offer.cards.map((item, idx) => {
              return <OfferCard key={idx} type={item.type} text={t(`${item.text}`)} image={images[idx]} />;
            })
          : null}
      </div>
      <div className="additional-offer-information">
        <h3>{t("Our overriding investment profile:")}</h3>
        <div className="lists">
          <div className="list">
            <h4>{t("Investment properties")}</h4>
            <ul>
              <li>
                {t("Individual apartments and apartment buildings in particular renovation and in need of renovation")}
              </li>
              <li>{t("Existing properties with conversion potential")}</li>
              <li>{t("Houses with renovation / expansion potential")}</li>
            </ul>
          </div>
          <div className="list">
            <h4>{t("Special properties")}</h4>
            <ul>
              <li>{t("Lofts")}</li>
              <li>{t("Property packages")}</li>
              <li>{t("Apartment buildings")}</li>
              <li>{t("Villas, luxury real estate")}</li>
              <li>{t("Hotel")}</li>
              <li>{t("Pension")}</li>
              <li>{t("Restaurants")}</li>
            </ul>
          </div>
          <div className="list">
            <h4>{t("Building sites")}</h4>
            <ul>
              <li>{t("Unterschiedlichster orders of magnitude")}</li>
              <li>{t("With and without planning permission")}</li>
            </ul>
          </div>
        </div>
      </div>
      <Note image={note_bg} type="offer-note" quote={t("OfferNote")} />
    </div>
  );
};

export default Offer;
