import React from "react";
import { CgSwiss } from "react-icons/cg";

const Map = () => {
  return (
    <div className="map">
      <h1>
        Find Us in Zug, Switzerland! <CgSwiss size={40} color="red" />
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.152534477868!2d8.510194151380484!3d47.174450025620935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aaa5ed6281219%3A0x9ee15ca3513b7e67!2zR3JhZmVuYXV3ZWcgMTAsIDYzMDAgWnVnLCDQqNCy0LDRmNGG0LDRgNGB0LrQsA!5e0!3m2!1ssr!2srs!4v1671614282762!5m2!1ssr!2srs"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
