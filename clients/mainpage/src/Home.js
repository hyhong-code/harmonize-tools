import React, { useState, useEffect, useRef } from "react";
import ReactGA from "react-ga";

import Logo from "./assets/logo.png";
import Footer from "./components/Footer";
import "./Home.scss";

const Home = () => {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    ReactGA.initialize("UA-175053486-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const navigate = (href, newTab) => {
    const a = document.createElement("a");
    a.href = href;
    if (newTab) {
      a.setAttribute("target", "_blank");
    }
    a.click();
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="container">
            <a
              href="https://www.harmonizehq.com/"
              rel="noopener noreferrer"
              className="navbar-brand"
            >
              <img src={Logo} alt="logo" /> Harmonize
            </a>
            <ul>
              <li>
                <button
                  className="products-drop"
                  onMouseOver={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  Products <i class="fas fa-chevron-down"></i>
                  {showDropdown && (
                    <div className="product-dropdown" ref={dropdownRef}>
                      <div className="dropdown-content">
                        <a target="_blank" rel="noreferrer" href="/calculator">
                          Paycheck Calculator
                        </a>
                        <a target="_blank" rel="noreferrer" href="/orgchart">
                          Organization Chart
                        </a>
                        <a href="">Contract Generator</a>
                        <a href="">Onboarding</a>
                      </div>
                    </div>
                  )}
                </button>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.attendancebot.com/blog/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="lead">
          <div className="container">
            <p className="before-heading">For small and midsize businesses</p>
            <h1 className="heading">Free tools to excel in HR</h1>
            <p className="below-heading">
              Crafted to make everyday mundane tasks quicker and easier.
              Automate and simplify your work to focus on what really matters —
              Harmonizing your teams.
            </p>
          </div>
        </div>
        <div className="tools">
          <div className="container">
            <div className="tools-container">
              <div
                className="tool-card"
                onClick={() => {
                  navigate("/calculator", true);
                }}
              >
                <div className="tool-title">Paycheck Calculator</div>
                <div className="tool-msg">
                  Don’t drown yourself in complex calculations! Use our easy to
                  understand paycheck calculator to know your employees’
                  take-home pay.
                </div>
                <p className="tool-link">Learn More &rarr;</p>
              </div>
              <div
                className="tool-card"
                onClick={() => {
                  navigate("/orgchart", true);
                }}
              >
                <div className="tool-title">Organizational Chart</div>
                <div className="tool-msg">
                  Need help visualizing the structure of your business? Use our
                  organizational chart tool to bring employees together and make
                  your organization more connected.
                </div>
                <p className="tool-link">Learn More &rarr;</p>
              </div>
              {/* <div className="tool-card">
                <div className="tool-title">Contract Generator</div>
                <div className="tool-msg">
                  New hire? No problem? Create free customized new-hire NDA in
                  just a few minutes.
                </div>
                <a href="" className="tool-link">
                  Contract Generator &rarr;
                </a>
              </div> */}
              <div className="tool-card">
                <div className="tool-title">Contract Generator</div>
                <div className="tool-msg">Launching soon!</div>
              </div>
              {/* <div className="tool-card">
                <div className="tool-title">Contract Generator</div>
                <div className="tool-msg">
                  Set up new hires for success! Streamline the onboarding
                  process with automated emails and workflows so you can give
                  new hires a smooth and positive experience.
                </div>
                <a href="" className="tool-link">
                  Onboarding &rarr;
                </a> */}
              <div className="tool-card">
                <div className="tool-title">Onboarding</div>
                <div className="tool-msg">Launching soon!</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
