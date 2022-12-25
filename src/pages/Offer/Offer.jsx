import React from "react";
import { Note, OfferCard } from "../../components";
import card_img1 from "../../assets/images/offer/card_img1.webp";
import card_img2 from "../../assets/images/offer/card_img2.webp";
import card_img3 from "../../assets/images/offer/card_img3.webp";
import card_img4 from "../../assets/images/offer/card_img4.webp";
import note_bg from "../../assets/images/offer/note-bg.webp";
import data from "../../translationKeys.json";
import { useTranslation } from "react-i18next";

const Offer = () => {
  const images = [card_img1, card_img2, card_img3, card_img4];
  const { t } = useTranslation();
  return (
    <div className="offer">
      <div className="offer-cards">
        {data.offer.cards
          ? data.offer.cards.map((item, idx) => {
              return (
                <OfferCard
                  key={idx}
                  type={item.type}
                  title={t(`${item.title}`)}
                  text={t(`${item.text}`)}
                  image={images[idx]}
                />
              );
            })
          : null}
      </div>
      <Note image={note_bg} type="offer-note" quote={t("OfferNote")} />
    </div>
  );
};

export default Offer;
