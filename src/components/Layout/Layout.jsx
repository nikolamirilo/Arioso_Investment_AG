import React from "react";
import Navbar from "/src/components/Layout/components/Navbar/Navbar.jsx";
import Footer from "/src/components/Layout/components/Footer/Footer.jsx";
import { useThemeContext } from "/src/context/ThemeContext.jsx";

const Layout = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <div className="layout">
      <div className="navbar-container">
        <Navbar />
      </div>
      <main className="app" style={theme}>
        {children}
      </main>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
