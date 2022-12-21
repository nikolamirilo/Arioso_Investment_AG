import React from "react";
import { Note, OfferCard } from "../../components";

const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-cards">
        <OfferCard
          type="grid"
          title="Aknowledgement"
          text="Nous travaillons en collaboration avec de nombreux promoteurs et marchands de biens sur la Côte d’Azur et
            aussi bien en région lyonnaise et parisienne pour vous proposer l’offre la plus large possible avec des
            produits de qualité. ALIZE CAPITAL vous accompagne tout au long de votre projet immobilier, de la recherche
            du bien à la signature du compromis, tout en s’occupant de différentes modalités tel que le financement. Un
            investissement immobilier représente un placement solide et durable qui répond à plusieurs objectifs."
          image="https://alize-capital.com/alize/wa_images/aliz08.jpg?v=1hf4gfi"
        />
        <OfferCard
          type="grid-reverse"
          title="Aknowledgement"
          text="Un investissement immobilier est souvent une étape clé pourpréparer son avenir et sa retraite, générer un complément de revenu ou encore se constituer un patrimoine pour se protéger et protéger sa famille.
          De ce fait la gestion des investissements immobiliers est partie intégrante de la gestion du patrimoine, en conséquence cette gestion doit se conformer aux mêmes règles et attributs de la gestion globale du patrimoine familiale."
          image="https://alize-capital.com/alize/wa_images/aliz108.jpg?v=1hf4gfi"
        />
        <OfferCard
          type="grid"
          title="Aknowledgement"
          text="Pour le financement de votre bien, nous vous mettons en relation avec un de nos partenaires. 
          et c'est selon votre capacité d’emprunt qui déterminera le montant de votre apport. 
          Il s’engage à vos côtés pour trouver le financement le plus avantageux et se charge de l’ensemble des démarches depuis la demande du prêt immobilier jusqu’au versement des fonds. Notre connaissance éprouvée des circuits financiers, banques traditionnelles et organismes spécialisés est la promesse d’une stratégie de financement adaptée et personnalisée."
          image="https://alize-capital.com/alize/wa_images/aliz208.jpg?v=1hf4gfi"
        />
      </div>
      <Note
        image="https://cdn.shopify.com/s/files/1/0066/4574/3686/files/Chicago_Skyline_LinkedIn_Background_Photo.png?v=1627912075"
        type="offer-note"
        quote="Our company brings together former banking executives and finance specialists. After the realization of a
              heritage balance sheet and the validation of your objectives, we establish together a strategy of financial
              and real estate investments. Wealth management is a resolutely human profession. Focusing on relationships
              and listening, we support you at every stage of your life. Responsiveness and follow-up are the cornerstone
              of our relationship."
      />
    </div>
  );
};

export default Offer;
