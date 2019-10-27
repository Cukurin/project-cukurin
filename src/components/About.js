import React, { Component } from "react";
import "./css/About.css";
import Image from "../assets/bgtop.jpg";
import Nico from "../assets/nico.jpg";
import Ian from "../assets/ian.jpg";
import Auzan from "../assets/auzan.jpg";
import Ido from "../assets/ido.jpg";
import ReactFilestack from "filestack-react";
import { addBarberShop } from "../store/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const API = process.env.REACT_APP_API_FILESTACK;
class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      phoneNumber: "",
      imageUrl: "",
      services: []
    };
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(addBarberShop(this.state, this.props.history));
  };

  render() {
    return (
      <div>
      <div className="container">
        <br />
        <div className="top-area">
          <div className="row">
            <div className="col">
              <div className="text">
                <h2> Who we Are</h2>
                <p>
                  In modern times appearance is an important factor where one's
                  personality will draw attention from how that person looks.
                  Good appearance can also increase self-confidence, attract the
                  attention of others and increase the confidence of others. Not
                  only women who are used to preening, now men are already aware
                  of the importance of appearance. This can be a new opportunity
                  for business people to compete in providing goods or services
                  that can meet the demand related to the purchase. Therefore,
                  we took the initiative to run a business in the field of
                  haircutting and shaving (barbershop) in order to obtain the
                  opportunities that exist. That's related to haircut services
                  that are easy to do and do not need to cost more than other
                  businesses.
                </p>
              </div>
            </div>
            <div className="col">
              
                <img
                  className="img-responsive"
                  src={Image}
                  style={{ height: "300px", marginTop: "50px", borderRadius:'20px', width:'100%' }}
                  alt="kadal"
                />
              
            </div>
          </div>
        </div>
        </div>
        <br />
        <br />

        {/* pendaftaran barbershop baru */}
        <div className="container wow fadeInUp" style={{ margin: 'auto' }}>
          <div className="row" style={{ margin: "0 10%" }}>
            <div className="col-sm-8 mid" style={{marginLeft: '120px'}}>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h2 className="panel-title text-center">
                    <span className="glyphicon glyphicon-upload"></span> 
                    Register your Barbershop immediately
                  </h2>
                </div>
                <div className="panel-body">
                  <form name="product-form" id="product-form" noValidate>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter barbershop name..."
                        defaultValue={this.state.name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Enter the Address.."
                        defaultValue={this.state.address}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        id="phoneNumber"
                        type="text"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="Enter the phone number..."
                        defaultValue={this.state.phoneNumber}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="services">Services</label>
                      <input
                        id="services"
                        type="text"
                        name="services"
                        className="form-control"
                        placeholder="-"
                        defaultValue={this.state.services}
                        onChange={this.handleChange}
                        required
                      />
                  
                    </div>

                    <div className="form-group ">
                      <label htmlFor="picture">Picture</label>
                      <div className="text-center dropup">
                        <ReactFilestack
                          apikey={`${API}`}
                          onSuccess={result => {
                            this.setState({
                              imageUrl: result.filesUploaded[0].url
                            });
                          }}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-filestack btn-warning btn-block"
                      onClick={this.handleSubmit}
                    >
                      Upload Barbershop
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -- */}

        {/* carousel di isi pake foto bujang */}
        <h2 style={{ textAlign: "center", marginTop: "5%" }}>Team Cukurin</h2>
        <div className="container-fluid wow fadeInUp">
        <div className="row" style={{textAlign: 'center'}}>
          {/* card */}

          <div className="card col-sm-3">
            <img src={Auzan} style={{height:'300px',backgroundSize: 'cover'}} className="card-img-top img-responsive " alt="..." />
            <div className="card-body">
              <p className="card-text">Auzan A</p>
              <small>Full Stack</small>
            </div>
          </div>
          <div className="card col-sm-3">
            <img src={Ian} style={{height:'300px',backgroundSize: 'cover'}} className="card-img-top img-responsive" alt="..." />
            <div className="card-body">
              <p className="card-text">Afriansyah</p>
              <small>Full Stack</small>
            </div>
          </div>
          <div className="card col-sm-3">
            <img src={Nico} style={{height:'300px',backgroundSize: 'cover'}} className="card-img-top img-responsive" alt="..." />
            <div className="card-body">
              <p className="card-text">Nico Husin</p>
              <small>Full Stack</small>
            </div>
          </div>
          <div className="card col-sm-3">
            <img src={Ido} style={{height:'300px',backgroundSize: 'cover'}}className="card-img-top img-responsive" alt="..." />
            <div className="card-body">
              <p className="card-text">Ridho AM</p>
              <small>Full Stack (Team Leader)</small>
            </div>
          </div>
        </div>
        </div>
        <hr />
        <br />
        <br />
        <br />

          <div className="container-fluid wow fadeInUp">
          <div className="containerTechnology">
            <ul>
              <div className="isiContainerTechnology">
                <spans className="technology">Technology that we use</spans>
                <div className="isiContainerTechnology1">
                  <li className="LogoHtml"></li>
                  <li className="LogoCSS"></li>
                  <li className="LogoJs"></li>
                  <li className="LogoReact"></li>
                  <li className="LogoRedux"></li>
                  <li className="LogoGoogleMaps"></li>
                </div>
                <div className="isiContainerTechnology2">
                  <li className="LogoNodeJs"></li>
                  <li className="LogoMongoDB"></li>
                  <li className="LogoMongoose"></li>
                  <li className="LogoExpress"></li>
                </div>
              </div>
            </ul>
          </div>
          
        </div>
        </div>
      
    );
  }
}

export default withRouter(connect()(About));
