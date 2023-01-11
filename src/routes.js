import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import Offer from "./pages/Offer/Offer";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Error from "./pages/Error/Error";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about-us",
    component: About,
  },
  {
    path: "/contact-us",
    component: Contact,
  },
  {
    path: "/our-team",
    component: Team,
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "/real-estate",
    component: Offer,
  },
  {
    path: "/*",
    component: Error,
  },
];

export default routes;
