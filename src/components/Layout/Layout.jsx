import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="layout">
      <div className="navbar-container">
        <Navbar />
      </div>
      <main
        className="app"
        style={{
          minHeight:
            location.pathname === "/"
              ? "200vh"
              : location.pathname === "/about-us"
              ? "200vh"
              : location.pathname === "/offer"
              ? "200vh"
              : location.pathname === "/our-team"
              ? "120vh"
              : location.pathname === "/contact"
              ? "200vh"
              : location.pathname === "/privacy-policy"
              ? "120vh"
              : "100vh",
        }}
      >
        {children}
      </main>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
