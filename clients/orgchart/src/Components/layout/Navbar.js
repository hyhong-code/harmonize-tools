import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import HarmonizeLogo from "../../assets/logo.png";

const _Navbar = () => {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = (href, newTab) => {
    const a = document.createElement("a");
    a.href = href;
    if (newTab) {
      a.setAttribute("target", "_blank");
    }
    a.click();
  };

  return (
    <header>
      <nav className="navbar-custom">
        <div className="container">
          <a
            href="https://www.harmonizehq.com/"
            rel="noopener noreferrer"
            className="navbar-brand"
          >
            <img src={HarmonizeLogo} alt="logo" /> Harmonize
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
  );
};

export default _Navbar;
