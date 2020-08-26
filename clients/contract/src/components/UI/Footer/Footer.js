import React from "react";
import "./Footer.css";
import { Navbar } from "react-bootstrap";
import logo from "../../Assets/harmonize_logo.png";

export default function Footer() {
  return (
    <Navbar fixed="bottom" className="footer" expand="xl">
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Brand>
            <img src={logo} alt="harmonize_logo" width="45.3" height="37" style={{marginBottom:"10px"}}/>
        </Navbar.Brand>
        <Navbar.Text className="footer-text">Powered by Harmonizhq</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
