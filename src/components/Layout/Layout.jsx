import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="layout">
      <div className="navbar-container">
        <Navbar />
      </div>
      <main className="app" style={{ minHeight: location.pathname !== "/our-team" ? "200vh" : "120vh" }}>
        {children}
      </main>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
