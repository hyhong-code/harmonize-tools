import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

import path from "../../utils/path";

export default function Navigation() {
  const location = useLocation();

  return (
    <>
      <div className="side">
        <nav>
          <ul className="steps">
            <li
              className={location.pathname === path("/general") ? "active" : ""}
              style={{ borderTop: "1.4px solid #868383", width: "210px" }}
            >
              <Link className="sidebar-item" to="/general">
                General
              </Link>
            </li>

            <li
              className={
                location.pathname === path("/disclosing") ? "active" : ""
              }
            >
              <Link className="sidebar-item" to="/disclosing">
                Disclosing Party
              </Link>
            </li>

            <li
              className={
                location.pathname === path("/recieving") ? "active" : ""
              }
            >
              <Link className="sidebar-item" to="/recieving">
                Receiving Party
              </Link>
            </li>

            <li
              className={
                location.pathname === path("/partiesRelationship")
                  ? "active"
                  : ""
              }
            >
              <Link className="sidebar-item" to="/partiesRelationship">
                Parties Relationship
              </Link>
            </li>
            <li
              className={
                location.pathname === path("/confidentiality") ? "active" : ""
              }
            >
              <Link className="sidebar-item" to="/confidentiality">
                Confidentiality
              </Link>
            </li>

            <li
              className={
                location.pathname === path("/otherInformation") ? "active" : ""
              }
            >
              <Link className="sidebar-item" to="/otherInformation">
                Other Information
              </Link>
            </li>
            <li
              className={
                location.pathname === path("/timePeriod") ? "active" : ""
              }
            >
              <Link className="sidebar-item" to="/timePeriod">
                Time Period
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
