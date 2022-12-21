import React from "react";

const Form = () => {
  return (
    <form className="form">
      <h1>Contact Us</h1>
      <input type="text" placeholder="Enter your name*" required={true} />
      <input type="email" placeholder="Enter your email address*" required={true} />
      <input type="text" placeholder="Subject*" required={true} />
      <textarea
        type="text"
        style={{ resize: "none" }}
        required={true}
        placeholder="Enter your message*"
      ></textarea>
      <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">
        Send
      </a>
    </form>
  );
};

export default Form;
