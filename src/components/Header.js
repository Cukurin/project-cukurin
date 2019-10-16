import React, { Component } from "react";
import Background from "../assets/bgtop.jpg";
import "./css/header.css";
import { Flip } from "react-reveal";
import {Link} from 'react-router-dom'

let sectionStyle = {
  width: "100%",
  height: "94vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center"
};
class Header extends Component {
  render() {
    return (
      <div>
        <section style={sectionStyle}>
          <div className="container-fluid">
            <Flip top cascade>
              <div className="heroimage">
                <h1>Changing the World with our Search Engine</h1>
                <small id="search">
                  Search your best Barbershop
                </small>
                <div className="form-group center">
                  <label htmlFor="search"></label>
                  <div className="container-btn">
                    <button className="btnSearch">
                        <i> </i> Take me there
                    </button>
                  </div>
                </div>
              </div>
            </Flip>
          </div>
        </section>
      </div>
    );
  }
}
export default Header;
