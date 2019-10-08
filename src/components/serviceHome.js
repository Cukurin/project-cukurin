import React, { Component } from "react";
import "./css/serviceHome.css";

class Service extends Component {
  render() {
    return (
      <div className="boxContainer">
        <div className="boxTitleAndService">
          <div className="title">
            <label>Barbershop is not a hobby, it's a lifestyle</label>
          </div>
          <div className="serviceBox">
            <div className="listService">
              <label style={{ color: "#F48E16" }}>Find It</label>
              <div className="serviceImage1"></div>
              <p>
                invest in your hair, it is the crown that you never take off
              </p>
            </div>
            <div className="listService">
              <label style={{ color: "#F48E16" }}>Book</label>
              <div className="serviceImage2"></div>
              <p>Time is precious, Make sure to spend it wisely and efficiently</p>
            </div>
            <div className="listService">
              <label style={{ color: "#F48E16" }}>Enjoy</label>
              <div className="serviceImage3"></div>
              <p>Be happy ! Enjoy our life with your favourite Barbershop</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
