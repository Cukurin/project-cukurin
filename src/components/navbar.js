import React from "react";
import "./css/popular.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  logout = () => {
    Cookies.remove("token");
    window.location.reload();
  };
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#2D2A2A" }} light expand="md">
          <NavbarBrand href="/" style={{ color: "#F48E16" }}>
            <h2>Cukurin</h2>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color: "#F48E16" }}>
                  Account
                </DropdownToggle>

                <DropdownMenu right style={{ backgroundColor: "#2D2A2A" }}>
<<<<<<< HEAD
                  <Link style={{textDecoration: 'none'}} to="/login"><DropdownItem style={{ color: "#F48E16" }}>Login</DropdownItem></Link>
                  <Link style={{textDecoration: 'none'}} to="/register"><DropdownItem style={{ color: "#F48E16" }}>Register</DropdownItem></Link>
                  <Link style={{textDecoration: 'none'}} to ="/search"><DropdownItem style={{ color: "#F48E16" }}>Search</DropdownItem></Link>
=======
                  {Cookies.get("token") ? (
                    <Link to="">
                      <DropdownItem style={{ color: "#F48E16" }}>
                        Profile
                      </DropdownItem>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <DropdownItem style={{ color: "#F48E16" }}>
                        Login
                      </DropdownItem>
                    </Link>
                  )}
                  <Link to="/register">
                    <DropdownItem style={{ color: "#F48E16" }}>
                      Register
                    </DropdownItem>
                  </Link>
                  <DropdownItem style={{ color: "#F48E16" }}>
                    Search
                  </DropdownItem>
>>>>>>> origin/loginNavbar
                  <DropdownItem divider />
                  <DropdownItem
                    style={{ color: "#F48E16" }}
                    onClick={this.logout}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
