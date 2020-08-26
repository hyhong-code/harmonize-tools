import React from "react";
import "./Header.css";
import { Navbar} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar className="header" expand="xl">
      <Navbar.Text className="header-text">Contract Generator</Navbar.Text>
    </Navbar>
  );
}
