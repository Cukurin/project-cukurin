import React, { Component } from "react";
import Background from "../assets/bgtop.jpg";
import "./css/header.css";
import { Flip } from "react-reveal";
import {Link} from 'react-router-dom'

let sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  
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
                <form>
                  <div className="form-group center">
                    <label htmlFor="search"></label>
                    <div className="container">
                     <Link to="/search"><button className="btn btn-warning lg">
                     <h6><i className="fa fa-cut"> </i> Take me there</h6>
                     </button></Link>
                    </div>
                    <small id="search" className="form-text text-muted">
                      Search your best Barbershop
                    </small>
                  </div>
                </form>
              </div>
            </Flip>
          </div>
        </section>
      </div>
    );
  }
}
export default Header;
