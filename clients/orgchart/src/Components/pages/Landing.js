import React, { useEffect } from "react";
import ReactGA from "react-ga";

import Header from "../landing/Header";
import Showcase from "../landing/Showcase";
import Features from "../landing/Features";
import Footer from "../landing/Footer";
import Navbar from "../layout/Navbar";
import "./Landing.scss";

const Landing = ({ history }) => {
  useEffect(() => {
    ReactGA.initialize("UA-175053486-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <section className="landing">
      <Navbar />
      {/* <Header /> */}
      <Showcase history={history} />
      <Features />
      <Footer />
    </section>
  );
};

export default Landing;
