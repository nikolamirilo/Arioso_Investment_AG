import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useGlobalState } from "./../../context/GlobalContext";

const Form = () => {
  const { t } = useTranslation();
  const form = useRef();
  const { setIsFormSubmited } = useGlobalState();

  const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_q35w8te", "template_hsds2ym", form.current, "5wkjNpw50CAxhbG6P").then(
      (result) => {
        setIsFormSubmited(true);
        console.log(result);
      },
      (error) => {
        alert(`Error`);
        console.log(error);
      }
    );
  };
  return (
    <form className="form" ref={form} onSubmit={submitForm}>
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
