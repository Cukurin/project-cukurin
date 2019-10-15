import React, { Component } from "react";
import logo1 from "../assets/beard_38452.png";
import logo2 from "../assets/icon-enjoy.png";
import logo3 from "../assets/hair2-512.png";
import "./css/serviceHome.css";
import WOW from "wowjs";

class Service extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div
        className="container-fluid-service"
        style={{ backgroundColor: "#393939" }}
      >
        <div className="container" style={{ height: "692px" }}>
          <div className="card-group" style={{ marginTop: "20px" }}>
            <div
              className="card wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
              style={{ margin: "90px 0 70px 0" }}
            >
              <img src={logo1} className="card-img-top" alt="..." />
              <div className="card-body-1">
                <h5 className="card-title">Find It</h5>
                <p className="card-text">
                  Barbershop is not a hobby, it's a lifestyle.
                </p>
              </div>
            </div>
            <div
              className="card wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay="0.8s"
              style={{ margin: "100px 0 70px 0" }}
            >
              <img src={logo2} className="card-img-top" alt="..." />
              <div className="card-body-2">
                <h5 className="card-title-2">Book</h5>
                <p className="card-text">
                  Time is precious, Make sure to spend it wisely and
                  efficiently.
                </p>
              </div>
            </div>
            <div
              className="card wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay="1.2s"
              style={{ margin: "90px 0 70px 0" }}
            >
              <img src={logo3} className="card-img-top" alt="..." />
              <div className="card-body-3">
                <h5 className="card-title">Enjoy</h5>
                <p className="card-text">
                  Be happy ! Enjoy our life with your favourite Barbershop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
