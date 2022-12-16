import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import { LanguageContextProvider } from "./context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GlobalStateProvider>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </LanguageContextProvider>
    </GlobalStateProvider>
  </Router>
);
