import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/footer.css";


const Footer = () => {
  return (
    <div className="footer">
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
          <div className="isiContainerFooter">
            <div className="containerTechnology">
              <ul>
                <div className='isiContainerTechnology'>
                  <spans className='technology'>Technology that we use</spans>
                  <div className='isiContainerTechnology1'>
                    <li className="LogoHtml"></li>
                    <li className="LogoCSS"></li>
                    <li className="LogoJs"></li>
                    <li className="LogoReact"></li>
                    <li className="LogoRedux"></li>
                    <li className="LogoGoogleMaps"></li>
                  </div>
                  <div className='isiContainerTechnology2'>
                    <li className="LogoNodeJs"></li>
                    <li className="LogoMongoDB"></li>
                    <li className="LogoMongoose"></li>
                    <li className="LogoExpress"></li>
                  </div>
                </div>
              </ul>
            </div>
            <div className="containerPatner"></div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright Cukurin Team
        </div>
      </footer>
    </div>
  );
};

export default Footer;
