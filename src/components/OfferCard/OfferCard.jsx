import React from "react";
import { BsBuilding } from "react-icons/bs";

const OfferCard = (props) => {
  return (
    <div className={props.type === "grid" ? "offer-card" : props.type === "grid-reverse" ? "offer-card-reverse" : null}>
      {props.type === "grid" ? (
        <div className="left-content">
          <img src="https://alize-capital.com/alize/wa_images/aliz08.jpg?v=1hf4gfi" alt="Offer card" />
        </div>
      ) : props.type === "grid-reverse" ? (
        <div className="right-content">
          <h3>ACCOMPAGNEMENT</h3>
          <div className="icon">
            <BsBuilding size={40} />
          </div>
          <p>
            Nous travaillons en collaboration avec de nombreux promoteurs et marchands de biens sur la Côte d’Azur et
            aussi bien en région lyonnaise et parisienne pour vous proposer l’offre la plus large possible avec des
            produits de qualité. ALIZE CAPITAL vous accompagne tout au long de votre projet immobilier, de la recherche
            du bien à la signature du compromis, tout en s’occupant de différentes modalités tel que le financement. Un
            investissement immobilier représente un placement solide et durable qui répond à plusieurs objectifs.
          </p>
        </div>
      ) : null}

      {props.type === "grid" ? (
        <div className="right-content">
          <h3>ACCOMPAGNEMENT</h3>
          <div className="icon">
            <BsBuilding size={40} />
          </div>
          <p>
            Nous travaillons en collaboration avec de nombreux promoteurs et marchands de biens sur la Côte d’Azur et
            aussi bien en région lyonnaise et parisienne pour vous proposer l’offre la plus large possible avec des
            produits de qualité. ALIZE CAPITAL vous accompagne tout au long de votre projet immobilier, de la recherche
            du bien à la signature du compromis, tout en s’occupant de différentes modalités tel que le financement. Un
            investissement immobilier représente un placement solide et durable qui répond à plusieurs objectifs.
          </p>
        </div>
      ) : props.type === "grid-reverse" ? (
        <div className="left-content">
          <img src="https://alize-capital.com/alize/wa_images/aliz08.jpg?v=1hf4gfi" alt="Offer card" />
        </div>
      ) : null}
    </div>
  );
};

export default OfferCard;
