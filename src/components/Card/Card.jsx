import React from "react";

//Cards for home page and team

const Card = (props) => {
  return (
    <div className="card">
      <div className="icon">{props.icon}</div>
      {props.type === "about-page" ? <span>{props.mention}</span> : null}
      <h3>{props.title}</h3>
      {props.type !== "about-page" ? <p>{props.text}</p> : null}
      {props.type === "about-page" ? props.list : null}
    </div>
  );
};

export default Card;
