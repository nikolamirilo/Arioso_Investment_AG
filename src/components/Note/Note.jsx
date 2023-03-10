import React from "react";

//Bottom of pages like one message or short recap

const Note = (props) => {
  return (
    <div className="note" style={{ backgroundImage: `url(${props.image})` }}>
      <h1 className="quote">
        <i>{props.quote}</i>
      </h1>
    </div>
  );
};

export default Note;
