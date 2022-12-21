import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/logos/logo-transparent-gold.png";
import { useGlobalState } from "./../../../../context/GlobalContext";
import { useLocation } from "react-router";
import { changeLanguage } from "i18next";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { width } = useGlobalState();
  const location = useLocation();
  const [isActive, setIsActive] = useState({
    home: true,
    about: false,
    offer: false,
    team: false,
    contact: false,
  });
  const navigate = useNavigate();
  const handleHamburgerClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  const closeSidebarOnLinkClick = () => {
    if (width < 1000) {
      setIsClicked(false);
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

  return (
    <nav className="navbar">
      <div className="logo">
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

        <div className="links" style={{ display: !isClicked && width < 1000 && "none" }}>
          <button
            style={{ borderBottom: isActive.home ? "1px solid #ffff" : "none" }}
            onClick={() => {
              navigate("/");
              closeSidebarOnLinkClick();
            }}
          >
            Home
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
            About Us
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
            Offer
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
            Our Team
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
            Contact
          </button>
          <button
            onClick={() => {
              changeLanguage("en");
            }}
          >
            English
          </button>
          <button
            onClick={() => {
              changeLanguage("de");
            }}
          >
            German
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
