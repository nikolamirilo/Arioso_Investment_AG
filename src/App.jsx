import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Loader, ScrollToTop } from "./components";
import { useGlobalState } from "./context/GlobalContext";
import { useLoader } from "./hooks/useLoader";

//pages
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Team = React.lazy(() => import("./pages/Team/Team"));
const Offer = React.lazy(() => import("./pages/Offer/Offer"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const Error = React.lazy(() => import("./pages/Error/Error"));

const App = () => {
  return (
    <Layout>
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Layout>
  );
};

export default App;
