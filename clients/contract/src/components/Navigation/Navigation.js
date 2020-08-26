import React from "react";
import "./Navigation.css";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { Layout } from "antd";
import Title from "../UI/Title/Title";

export default function Navigation() {
  const location = useLocation();

  const { Sider } = Layout;

  return (
    <>
      <div className="side">
        <Sider id="sideBar">
          <nav>
            <ul className="steps">
              
              <li className={location.pathname === "/contract/general" ? "active" : ""} style={{borderTop: "1.9px solid #868383", width: "224px"}}>
                <Link className="sidebar-item" to="/contract/general" >
                  General
                </Link>
              </li>

              <li className={location.pathname === "/contract/disclosing" ? "active" : ""}>
                <Link className="sidebar-item" to="/contract/disclosing">
                  Disclosing Party
                </Link>
              </li>

              <li className={location.pathname === "/contract/recieving" ? "active" : ""}>
                <Link className="sidebar-item" to="/contract/recieving">
                  Recieving Party
                </Link>
              </li>

              <li
                className={location.pathname === "/contract/partiesRelationship" ? "active" : ""}
              >
                <Link className="sidebar-item" to="/contract/partiesRelationship">
                  Parties Relationship
                </Link>
              </li>
              <li className={location.pathname === "/contract/confidentiality" ? "active" : ""}>
                <Link className="sidebar-item" to="/contract/confidentiality">
                  Confidentiality
                </Link>
              </li>

              <li
                className={location.pathname === "/contract/otherInformation" ? "active" : ""}
              >
                <Link className="sidebar-item" to="/contract/otherInformation">
                  Other Information
                </Link>
              </li>
              <li className={location.pathname === "/contract/timePeriod" ? "active" : ""}>
                <Link className="sidebar-item" to="/contract/timePeriod">
                  Time Period
                </Link>
              </li>
            </ul>
          </nav>
        </Sider>
      </div>
      <Title />
    </>
  );
}
