import React from "react";
import { Note, OfferCard } from "../../components";

const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-cards">
        <OfferCard type="grid" />
        <OfferCard type="grid-reverse" />
        <OfferCard type="grid" />
      </div>
      <Note
        image="https://cdn.shopify.com/s/files/1/0066/4574/3686/files/Chicago_Skyline_LinkedIn_Background_Photo.png?v=1627912075"
        type="offer-note"
        quote={
          <i>
            Our company brings together former banking executives and finance specialists. After the realization of a
            heritage balance sheet and the validation of your objectives, we establish together a strategy of financial
            and real estate investments. Wealth management is a resolutely human profession. Focusing on relationships
            and listening, we support you at every stage of your life. Responsiveness and follow-up are the cornerstone
            of our relationship.
          </i>
        }
      />
    </div>
  );
};

export default Offer;
