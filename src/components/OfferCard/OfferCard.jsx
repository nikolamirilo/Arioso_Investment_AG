import React from "react";
import { BsBuilding } from "react-icons/bs";

const OfferCard = (props) => {
  return (
    <div
      className={
        props.type === "grid"
          ? "offer-card"
          : props.type === "grid-reverse"
          ? "offer-card-reverse"
          : null
      }
    >
      {props.type === "grid" ? (
        <div className="left-content">
          <img src={props.image} alt="Offer card" />
        </div>
      ) : props.type === "grid-reverse" ? (
        <div className="right-content">
          <div className="icon">
            <BsBuilding size={40} />
          </div>
          <h3>{props.title}</h3>

          <p>{props.text}</p>
        </div>
      ) : null}

      {props.type === "grid" ? (
        <div className="right-content">
          <div className="icon">
            <BsBuilding size={40} />
          </div>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      ) : props.type === "grid-reverse" ? (
        <div className="left-content">
          <img src={props.image} alt="Offer card" />
        </div>
      ) : null}
    </div>
  );
};

export default OfferCard;
