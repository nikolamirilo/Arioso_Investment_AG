import React, { useReducer } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { t } = useTranslation();
  const initialEmailState = { name: "", address: "", subject: "", message: "" };
  const navigate = useNavigate();
  const [email, setEmail] = useReducer(
    (email, updates) => ({
      ...email,
      ...updates,
    }),
    initialEmailState
  );
  const submitForm = () => {
    window.location.href = `mailto:nikolamirilo@gmail.com?subject=${email.subject}&body=${email.message}`;
    alert("Thank you for your interest!");
    navigate("/contact");
  };
  return (
    <form className="form" name="contact" mathod="POST">
      <h1>{t("Contact Us")}</h1>
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="text"
        placeholder={t("Enter your name*")}
        required={true}
        name="name"
        onChange={(e) => {
          setEmail({ name: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder={t("Enter your email address*")}
        required={true}
        name="email"
        onChange={(e) => {
          setEmail({ address: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder={t("Subject*")}
        required={true}
        name="subject"
        onChange={(e) => {
          setEmail({ subject: e.target.value });
        }}
      />
      <textarea
        type="text"
        style={{ resize: "none" }}
        required={true}
        name="message"
        onChange={(e) => {
          setEmail({ message: e.target.value });
        }}
        placeholder={t("Enter your message*")}
      ></textarea>
      <button type="submit">{t("Send")}</button>
    </form>
  );
};

export default Form;
