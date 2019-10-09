import React, {Component} from 'react';
import Background from '../assets/bgtop.jpg';
import './css/header.css'

let sectionStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}
class Header extends Component {
  render() {
    return(
        <div>
            <section style= {sectionStyle}>
              <div className="container-fluid">
                <div className="heroimage">
                  <h1>Changing the World with our Search Engine</h1>
                  <form>
                <div className="form-group center">
                  <label htmlFor="search"></label>
                  <div className="container">
                  <input type="text" className="form-control search" id="search" aria-describedby="search" placeholder="Search..."/>
                  </div>
                  <small id="search" className="form-text text-muted">Search your best Barbershop</small>
                </div>
              </form>
                </div>
             
                </div>
            </section>
        </div>
    )
  }
}
export default Header;