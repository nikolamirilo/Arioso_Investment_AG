import React from "react";

//Each page has HERO section - multiple types if needed

const Hero = (props) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${props.image})` }}>
      <h1>{props.title}</h1>
      {props.subtitle ? <p>{props.subtitle}</p> : null}
    </div>
  );
};

export default Hero;
