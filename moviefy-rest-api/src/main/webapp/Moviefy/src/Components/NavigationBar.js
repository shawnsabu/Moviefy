import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <NavLink to="/" className="navbar-brand">
          Moviefy
        </NavLink>
        <Nav className="mr-auto">
          <NavLink to="/addMovie" className="nav-link">
            Add Movie
          </NavLink>
          <NavLink to="/Movies" className="nav-link">
            Movies List
          </NavLink>
        </Nav>
        <Nav className="mr-collapse justify-end">
          <Nav.Link href="#">Login</Nav.Link>
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
