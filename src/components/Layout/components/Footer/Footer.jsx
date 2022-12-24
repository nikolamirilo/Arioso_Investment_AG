import React from "react";
import logo from "../../../../assets/images/logos/logo-transparent-gold.png";
import { useGlobalState } from "./../../../../context/GlobalContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { contactSection } = useGlobalState();
  const { t } = useTranslation();
  return (
    <footer className="footer" ref={contactSection}>
      <div className="left-content">
        <img src={logo} alt="Logo" />
      </div>
      <div className="right-content">
        <Link to="/privacy-policy">{t("Privacy Policy")}</Link>
        <p>{t("Copyright")} @Ariso Investment AG 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
