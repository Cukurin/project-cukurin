import React from "react";
import { Link, withRouter } from "react-router-dom";
import { RegisterUser } from "../actions";
import { connect } from "react-redux";

class Register extends React.Component {
  constructor(props) {
    console.log(props, "props");
    
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      phoneNumber: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    console.log(this.state, 'state')
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(RegisterUser(this.state,this.props.history));
  };

  render() {
    return (
      <div
        className="mh-fullscreen bg-img center-vh p-20"
        style={{ backgroundImage: "url(assets/img/bg-girl.jpg)" }}
      >
        <div
          className="card card-shadowed p-50 w-400 mb-0"
          style={{ maxWidth: "100%" }}
        >
          <h5 className="text-uppercase text-center">Register</h5>
          <br />
          <br />
          <form className="form-type-material" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="username"
                className="form-control"
                required
                placeholder="Username"
                onChange={this.handleInputChange}
                defaultValue={this.state.username}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                required
                name="email"
                className="form-control"
                placeholder="Email address"
                onChange={this.handleInputChange}
                defaultValue={this.state.email}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                required
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={this.handleInputChange}
                defaultValue={this.state.password}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                required
                name="passwordConfirm"
                className="form-control"
                placeholder="Password (confirm)"
                onChange={this.handleInputChange}
                defaultValue={this.state.passwordConfirm}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="phoneNumber"
                required
                className="form-control"
                placeholder="Phone Number"
                onChange={this.handleInputChange}
                defaultValue={this.state.phoneNumber}
              />
            </div>
            <br />
            <button
              className="btn btn-bold btn-block btn-primary"
              type="submit"
            >
              Register
            </button>
          </form>
          <hr className="w-30" />
          <p className="text-center text-muted fs-13 mt-20">
            Already have an account?
            <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(Register));
