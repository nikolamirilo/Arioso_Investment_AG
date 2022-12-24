import React from "react";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
  return (
    <form
      className="form"
      action="submit"
      onSubmit={() => {
        window.location.href = "mailto:nikolamirilo@gmail.com";
      }}
    >
      <h1>{t("Contact Us")}</h1>
      <input type="text" placeholder={t("Enter your name*")} required={true} />
      <input type="email" placeholder={t("Enter your email address*")} required={true} />
      <input type="text" placeholder={t("Subject*")} required={true} />
      <textarea
        type="text"
        style={{ resize: "none" }}
        required={true}
        placeholder={t("Enter your message*")}
      ></textarea>
      <button type="submit">{t("Send")}</button>
    </form>
  );
};

export default Form;
