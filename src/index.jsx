import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { GlobalStateProvider } from "./context/GlobalContext";
import "./i18n";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </Router>
);
