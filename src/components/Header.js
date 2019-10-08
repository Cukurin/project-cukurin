import React, {Component} from 'react';


class Header extends Component {
  render() {
    return(
      <div>
    <section className="hero-wrap js-fullheight" style="background-image: url(images/bg-2.jpg);" data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
          <div className="col-lg-12 ftco-animate d-flex align-items-center">
          	<div className="text text-center">
          		<span className="subheading">Welcome to Haircare</span>
		  				<h1 className="mb-4">We are professional care for your hair</h1>
		  				<p><a href="#" class="btn btn-primary btn-outline-primary px-4 py-2">Book now</a></p>
							</div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    )
  }
}
export default Header;