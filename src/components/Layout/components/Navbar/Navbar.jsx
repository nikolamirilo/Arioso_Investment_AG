import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/logos/logo-transparent-gold.png";
import { useGlobalState } from "./../../../../context/GlobalContext";
import { useThemeContext } from "./../../../../context/ThemeContext";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { width } = useGlobalState();
  const [isActive, setIsActive] = useState({
    home: true,
    about: false,
    offer: false,
    team: false,
    contact: false,
  });
  const { theme, setDark, setLight } = useThemeContext();
  const { contactSection } = useGlobalState();
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
              setIsActive({ home: true });
              navigate("/");
              closeSidebarOnLinkClick();
            }}
          >
            Home
          </button>
          <button
            style={{ borderBottom: isActive.about ? "1px solid #ffff" : "none" }}
            onClick={() => {
              setIsActive({ about: true });
              navigate("/about-us");
              closeSidebarOnLinkClick();
            }}
          >
            About Us
          </button>
          <button
            style={{ borderBottom: isActive.offer ? "1px solid #ffff" : "none" }}
            onClick={() => {
              setIsActive({ offer: true });
              navigate("/offer");
              closeSidebarOnLinkClick();
            }}
          >
            Offer
          </button>
          <button
            style={{ borderBottom: isActive.team ? "1px solid #ffff" : "none" }}
            onClick={() => {
              setIsActive({ team: true });
              navigate("/our-team");
              closeSidebarOnLinkClick();
            }}
          >
            Our Team
          </button>
          <button
            style={{ borderBottom: isActive.contact ? "1px solid #ffff" : "none" }}
            onClick={() => {
              setIsActive({ contact: true });
              navigate("/contact");
              closeSidebarOnLinkClick();
            }}
          >
            Contact
          </button>
          {/* <button
            onClick={() => {
              theme.backgroundColor === "white" ? setDark() : setLight();
              setIsClicked(false);
            }}
          >
            {theme.backgroundColor === "white" ? "Dark Theme" : "Light Theme"}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
