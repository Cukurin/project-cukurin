import React, { Component } from "react";
import { connect } from "react-redux";
import { getBarberShop } from "../store/actions";
import AppointmentModal from "./appointmentModal";
import { withRouter } from "react-router-dom";
import { addComment } from '../store/actions/comment'
import Cookies from "js-cookie";

class barbershopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      barbershop: '',
      user: ''
    }
  }
  componentDidMount() {
    this.props.getBarberShop(this.props.match.params.id);
  }
  
  handleForm = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
    console.log(this.props);
    
  }
  handleSubmit = event => {
    event.preventDefault();
    if(Cookies.get('token')) {
    const values = {
      ...this.state,
      user: this.props.user._id,
      barbershop: this.props.barbershop._id
    }
    console.log(values);
    // const barbershopId = this.props.match.params.id;
    this.props.dispatch(addComment({...values}, this.props.history))
  }else {
    this.props.history.push('/login')
    }
    
}

  render() {
    const {
      barbershop: { address, name, imageUrl, services, phoneNumber, comment, date }
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
          <hr/>
          
          <div className="">
            Comments :
            {Array.isArray(comment) &&
              comment.map(comm => {
                return <li key={name}>{comm}</li>;
              })}
            {date}
          </div>
          <hr/>
          <br/>
          <h5>Add a Comments :</h5>
          <div>
        <label htmlFor="comment"></label>
        <textarea onChange={this.handleForm}  name="comment" id="comment" cols="90" rows="5"></textarea>
        <button onClick={this.handleSubmit} className="btn btn-warning"> Post Comment </button>
      </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    barbershop: state.barbershop,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBarberShop: id => dispatch(getBarberShop(id)),
    addComment: (values, history) => dispatch(addComment(values, history))
  };
};

export default withRouter(connect(
  mapStateToProps,
 mapDispatchToProps
)(barbershopDetail));
