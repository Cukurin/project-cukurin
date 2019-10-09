import React, { Component } from "react";
import logo1 from '../assets/beard_38452.png'
import logo2 from '../assets/icon-enjoy.png'
import logo3 from '../assets/hair2-512.png'
import './css/serviceHome.css'

class Service extends Component {
  render() {
    return (
      
      <div className="container-fluid" style={{backgroundColor: '#393939'}}>
      <div className="container" style={{height: '692px'}}>
      <div className="card-group">
      <div className="card" style={{margin: '10px', marginTop: '5%'}}>
          <img src={logo1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Find It</h5>
            <p className="card-text">Barbershop is not a hobby, it's a lifestyle.</p>
          </div>
        
        </div>
        <div className="card" style={{margin: '10px', marginTop: '5%'}}>
          <img src={logo2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Book</h5>
            <p className="card-text">Time is precious, Make sure to spend it wisely and efficiently.</p>
          </div>
       
        </div>
        <div className="card" style={{margin: '10px', marginTop: '5%'}}>
          <img src={logo3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Enjoy</h5>
            <p className="card-text">Be happy ! Enjoy our life with your favourite Barbershop</p>
          </div>
       
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Service;
