import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import './css/footer.css'


const Footer = () => {
  return (
      <div className="footer">
        <footer className="page-footer font-small unique-color-dark pt-4">

          <div className="container">

            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item">
                <h5 className="mb-1">Register for free</h5>
              </li>
              <li className="list-inline-item">
                <a href="./register" className="btn btn-warning">Sign up!</a>
              </li>
            </ul>

          </div>
          <br/><br/><br/> <br/><br/><br/>
          <div className="footer-copyright text-center py-3">© 2019 Copyright Cukurin Team
          </div>

        </footer>
      </div>
   
  )
}

export default Footer