import { changeLanguage } from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/logos/logo-transparent-gold.png";
import england_logo from "../../../../assets/images/navbar/england_logo.webp";
import german_logo from "../../../../assets/images/navbar/german_logo.webp";
import { useGlobalState } from "./../../../../context/GlobalContext";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { width } = useGlobalState();
  const { t } = useTranslation();
  const location = useLocation();
  const [isActive, setIsActive] = useState({
    home: true,
    about: false,
    offer: false,
    team: false,
    contact: false,
  });
  const navigate = useNavigate();
  var nav = document.querySelector(".navbar");
  const handleHamburgerClick = () => {
    if (isClicked) {
      nav.classList.remove("active");
    } else {
      nav.classList.toggle("active");
    }
  };
  const closeSidebarOnLinkClick = () => {
    if (width <= 1000) {
      setIsClicked(false);
      nav.classList.remove("active");
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setIsActive({ home: true });
    } else if (location.pathname === "/about-us") {
      setIsActive({ about: true });
    } else if (location.pathname === "/our-team") {
      setIsActive({ team: true });
    } else if (location.pathname === "/offer") {
      setIsActive({ offer: true });
    } else if (location.pathname === "/contact") {
      setIsActive({ contact: true });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (width <= 1000) {
      setIsActive(false);
    }
  }, []);

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="Logo" />
      </div>
      <div className="navigation">
        {width < 1000 && (
          <button
            className="hamburger"
            onClick={() => {
              handleHamburgerClick();
            }}
          >
            <GiHamburgerMenu size={40} />
          </button>
        )}

        <div className="links">
          <button
            style={{ borderBottom: isActive.home ? "1px solid #ffff" : "none" }}
            onClick={() => {
              navigate("/");
              closeSidebarOnLinkClick();
            }}
          >
            {t("Home")}
          </button>
          <button
            style={{
              borderBottom: isActive.about ? "1px solid #ffff" : "none",
            }}
            onClick={() => {
              navigate("/about-us");
              closeSidebarOnLinkClick();
            }}
          >
            {t("About Us")}
          </button>
          <button
            style={{
              borderBottom: isActive.offer ? "1px solid #ffff" : "none",
            }}
            onClick={() => {
              navigate("/offer");
              closeSidebarOnLinkClick();
            }}
          >
            {t("Offer")}
          </button>
          <button
            style={{
              borderBottom: isActive.team ? "1px solid #ffff" : "none",
            }}
            onClick={() => {
              navigate("/our-team");
              closeSidebarOnLinkClick();
            }}
          >
            {t("Our Team")}
          </button>
          <button
            style={{
              borderBottom: isActive.contact ? "1px solid #ffff" : "none",
            }}
            onClick={() => {
              navigate("/contact");
              closeSidebarOnLinkClick();
            }}
          >
            {t("Contact")}
          </button>
          <div className="languages">
            <div
              style={{
                backgroundImage: `url(${england_logo})`,
              }}
              onClick={() => {
                window.location.reload();
                changeLanguage("en");
              }}
            ></div>
            <span>|</span>
            <div
              style={{
                backgroundImage: `url(${german_logo})`,
              }}
              onClick={() => {
                window.location.reload();
                changeLanguage("de");
              }}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
