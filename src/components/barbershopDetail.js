import React, { Component } from "react";
import { connect } from "react-redux";
import { getBarberShop } from "../store/actions";
import AppointmentModal from "./appointmentModal";
import Comment from './Comment'

class barbershopDetail extends Component {
  componentDidMount() {
    this.props.getBarberShop(this.props.match.params.id);
  }

  render() {
    const {
      barbershop: { address, name, imageUrl, services, phoneNumber }
    } = this.props.barbershop;

    const style = {
      width: "100%",
      height: "400px",
      backgroundImage: `url('${imageUrl}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid gold"
    };

    return (
      <div>
        <div className="container" style={{ height: "1450px" }}>
          <div className="row">
            <div className="col" style={style}></div>
          </div>
          <div className="row" style={{ marginTop: "25px" }}>
            <section className="barbershop-name">
              <h1> {name}</h1>
            </section>
          </div>
          <div className="row">
            <section className="barbershop-rate" style={{ marginLeft: "25px" }}>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </section>
          </div>
          <div className="row">
            <section
              className="barbershop-detail"
              style={{ marginTop: "20px", marginLeft: "25px" }}
            >
              <h6>
                Untuk membuat jasa barbershop kami unik dan mampu menghadapi
                persaingan, kami membuat beberapa inovasi yang mampu
                meningkatkan daya saing dan juga menjadi ciri khas yang mampu
                menarik perhatian pelanggan dengan harapan dapat meningkatkan
                permintaan.
              </h6>
            </section>
          </div>
          <div
            className="row"
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            <h5> Services :</h5>
          </div>
          <div>
            {Array.isArray(services) &&
              services.map(service => {
                return <li key={services}>{service}</li>;
              })}
          </div>

          <div
            className="row"
            style={{ marginLeft: "35px", marginTop: "20px" }}
          >
            <button
              type="button"
              class="btn btn-warning"
              data-toggle="modal"
              data-target="#myModal"
            >
              Book Now
            </button>
            <AppointmentModal />
          </div>
          <div
            className="row"
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            <h6>
              {address} - {phoneNumber}
            </h6>
          </div>
          <br/>
          <h5>Add a Comments :</h5>
          <Comment/>


        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    barbershop: state.barbershop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBarberShop: id => dispatch(getBarberShop(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(barbershopDetail);
