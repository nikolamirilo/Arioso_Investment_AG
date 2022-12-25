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
    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        setIsFormSubmited(true);
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
      <input type="hidden" value="contact" />
      <input type="text" placeholder={t("Enter your name*")} name="name" required={true} />
      <input type="email" placeholder={t("Enter your email address*")} name="email" required={true} />
      <input type="text" placeholder={t("Subject*")} name="subject" required={true} />
      <textarea type="text" required={true} name="message" placeholder={t("Enter your message*")}></textarea>
      <button type="submit">{t("Send")}</button>
    </form>
  );
};

export default Form;
