import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/footer.css";
import { Fade } from "react-reveal";
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div className="container-fluid footer" style={{backgroundColor:'black'}}>
      <div className="col">
      <Fade>
      <footer className="page-footer font-small mdb-color pt-4">
        {/* Footer Links */}
        <div className="container text-center text-md-left">
          {/* Footer links */}
          <div className="row text-center text-md-left mt-3 pb-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5> Cukurin</h5>
              <p> When your hairstyle be our priority</p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
           
            
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p>
                <a href="/register">Register</a>
              </p>
              <p>
                <a href="/about">Become an Affiliate</a>
              </p>
              <p>
                <a href="/search">Search</a>
              </p>
              <p>
                <a href="/profile">Profile</a>
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <small>
                <i className="fa fa-home mr-3" /> Jl.Kemang Raya no. 69 Bangka</small>
              <small>
                <i className="fa fa-envelope mr-3" /> cukurin.info@gmail.com</small>
              <small><br/>
                <i className="fa fa-phone mr-3" /> 087882252815 </small>
              
            </div>
            {/* Grid column */}
          </div>
          {/* Footer links */}
          <hr />
          {/* Grid row */}
          <div className="row d-flex align-items-center">
            {/* Grid column */}
            <div className="col-md-7 col-lg-8">
              {/*Copyright*/}
              <p className="text-center text-md-left">© 2019 Copyright
                <a href="https:www.cukurin.online">
                  <strong> Cukurin SuperTeam</strong>
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-5 col-lg-4 ml-lg-0">
              {/* Social buttons */}
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
      </footer>
      </Fade>
      </div>
    </div>
  );
};

export default Footer;
