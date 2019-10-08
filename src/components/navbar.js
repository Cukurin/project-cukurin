import React from "react";
import './css/popular.css'
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

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
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
                  account
                </DropdownToggle>

                <DropdownMenu right style={{ backgroundColor: "#2D2A2A" }}>
                  <DropdownItem style={{ color: "#F48E16" }}>login</DropdownItem>
                  <DropdownItem style={{ color: "#F48E16" }}>register</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem style={{ color: "#F48E16"  }}>logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
