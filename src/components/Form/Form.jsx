import React from "react";

const Form = () => {
  return (
    <form
      className="form"
      action="submit"
      onSubmit={() => {
        window.location.href = "mailto:nikolamirilo@gmail.com";
      }}
    >
      <h1>Contact Us</h1>
      <input type="text" placeholder="Enter your name*" required={true} />
      <input type="email" placeholder="Enter your email address*" required={true} />
      <input type="text" placeholder="Subject*" required={true} />
      <textarea type="text" style={{ resize: "none" }} required={true} placeholder="Enter your message*"></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
