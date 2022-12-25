import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useGlobalState } from "./../../context/GlobalContext";

const Form = () => {
  const { t } = useTranslation();
  const form = useRef();
  const { setIsFormSubmited } = useGlobalState();
  const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const subjectInput = document.getElementById("subjectInput");
    const messageInput = document.getElementById("messageInput");
    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        setIsFormSubmited(true);
        nameInput.value = "";
        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";
      },
      (error) => {
        alert(`Error`);
        console.log(error);
      }
    );
  };
  return (
    <form className="form" ref={form} onSubmit={handleFormSubmit}>
      <h1>{t("Contact Us")}</h1>
      <input type="text" id="nameInput" placeholder={t("Enter your name*")} name="name" required={true} />
      <input type="email" id="emailInput" placeholder={t("Enter your email address*")} name="email" required={true} />
      <input type="text" id="subjectInput" placeholder={t("Subject*")} name="subject" required={true} />
      <textarea
        type="text"
        id="messageInput"
        required={true}
        name="message"
        placeholder={t("Enter your message*")}
      ></textarea>
      <button type="submit">{t("Send")}</button>
    </form>
  );
};

export default Form;
