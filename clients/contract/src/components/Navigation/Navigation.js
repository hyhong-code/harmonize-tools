import React from "react";
import "./Navigation.css";
import {
  Link,
  useLocation,
} from "react-router-dom";


export default function Navigation() {
  const location = useLocation();

  return (
    <>
      <div className="side">
          <nav>
            <ul className="steps">
              
              <li className={location.pathname === "/general" ? "active" : ""} style={{borderTop: "1.4px solid #868383", width: "210px"}}>
                <Link className="sidebar-item" to="/general" >
                  General
                </Link>
              </li>

              <li className={location.pathname === "/disclosing" ? "active" : ""}>
                <Link className="sidebar-item" to="/disclosing">
                  Disclosing Party
                </Link>
              </li>

              <li className={location.pathname === "/recieving" ? "active" : ""}>
                <Link className="sidebar-item" to="/recieving">
                  Recieving Party
                </Link>
              </li>

              <li
                className={location.pathname === "/partiesRelationship" ? "active" : ""}
              >
                <Link className="sidebar-item" to="/partiesRelationship">
                  Parties Relationship
                </Link>
              </li>
              <li className={location.pathname === "/confidentiality" ? "active" : ""}>
                <Link className="sidebar-item" to="/confidentiality">
                  Confidentiality
                </Link>
              </li>

              <li
                className={location.pathname === "/otherInformation" ? "active" : ""}
              >
                <Link className="sidebar-item" to="/otherInformation">
                  Other Information
                </Link>
              </li>
              <li className={location.pathname === "/timePeriod" ? "active" : ""}>
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
