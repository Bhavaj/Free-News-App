import React from "react";

import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="mx-2" href="#home">
        Free News
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav>
            {" "}
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </Nav>
          <Nav>
            {" "}
            <Link className="nav-link" to={"/business"}>
              business
            </Link>
          </Nav>
          <Nav>
            {" "}
            <Link className="nav-link" to={"/entertainment"}>
              entertainment
            </Link>
          </Nav>

          <Nav>
            {" "}
            <Link className="nav-link" to={"/health"}>
              health
            </Link>
          </Nav>
          <Nav>
            {" "}
            <Link className="nav-link" to={"/science"}>
              science
            </Link>
          </Nav>
          <Nav>
            {" "}
            <Link className="nav-link" to={"/sports"}>
              sports
            </Link>
          </Nav>
          <Nav>
            {" "}
            <Link className="nav-link" to={"/technology"}>
              technology
            </Link>
          </Nav>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
