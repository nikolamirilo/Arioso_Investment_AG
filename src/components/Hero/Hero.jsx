import React from "react";

const Hero = (props) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${props.image})` }}>
      <h1>{props.title}</h1>
      {props.subtitle ? <p>{props.subtitle}</p> : null}
      {props.button ? <button>{props.button}</button> : null}
    </div>
  );
};

export default Hero;
