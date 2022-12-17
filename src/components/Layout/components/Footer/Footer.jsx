import React from "react";
import logo from "../../../../assets/images/logos/logo-transparent-gold.png";
import { useGlobalState } from "./../../../../context/GlobalContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { contactSection } = useGlobalState();
  return (
    <footer className="footer" ref={contactSection}>
      <div className="left-content">
        <img src={logo} alt="Logo" />
      </div>
      <div className="right-content">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <p>Copyright @Ariso Investment AG 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
