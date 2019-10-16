import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/footer.css";
import { Fade } from "react-reveal";


const Footer = () => {
  return (
    <div className="footer">
      <Fade>
      <footer className="page-footer font-small unique-color-dark pt-4">
        <div className="containerFooter">
          <div className="containerRegister">
            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item">
                
                <h5 className="mb-1">Register for free</h5>
              </li>
              <li className="list-inline-item">
                <a href="./register" className="btn btn-warning">
                  Sign up!
                </a>
              </li>
            </ul>
          </div>      
        </div>
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright Cukurin Team
        </div>
      </footer>
      </Fade>
    </div>
  );
};

export default Footer;
