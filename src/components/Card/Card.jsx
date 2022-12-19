import React from "react";

//Cards for home page and team

const Card = (props) => {
  return (
    <div className="card">
      <div className="icon">{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
