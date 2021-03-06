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
import { Link, withRouter } from "react-router-dom";

import Cookies from "js-cookie";
import { idUser } from "../store/actions";
import { connect } from "react-redux";

class NavBar extends React.Component {
  componentDidMount() {
    this.props.getUserAction(this.props.history);
  }

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
                {Cookies.get("token") ? (
                  <DropdownToggle nav caret style={{ color: "#F48E16" }}>
                    <span>welcome, {this.props.userData.username} </span>
                  </DropdownToggle>
                ) : (
                  <DropdownToggle nav caret style={{ color: "#F48E16" }}>
                    Account
                  </DropdownToggle>
                )}

                <DropdownMenu
                  right
                  style={{ backgroundColor: "#2D2A2A", textDecoration: "none" }}
                >
                  {Cookies.get("token") ? (
                    <Link to="/profile">
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
                  <Link to="/about">
                    <DropdownItem style={{ color: "#F48E16" }}>
                      About Us
                    </DropdownItem>
                  </Link>
                  <Link to="/search">
                    <DropdownItem style={{ color: "#F48E16" }}>
                      Search
                    </DropdownItem>
                  </Link>
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
        {this.props.error === "TokenExpiredError" && this.logout()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.GetUserName.userData,
    error: state.GetUserName.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserAction: history => dispatch(idUser(history))
  };
};

const connectComponent = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);

export default connectComponent;
