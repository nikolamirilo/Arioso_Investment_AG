import React, { Suspense } from "react";
import Home from "./pages/Home/Home";
import { Layout, Loader, ScrollToTop } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </Layout>
    </Suspense>
  );
};

export default App;
