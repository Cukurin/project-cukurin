import React from "react";
import Background from "../assets/form.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoginUser } from "../store/actions";

let sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center"
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(LoginUser(this.state, this.props.history));
  };

  render() {
    return (
      <div className="formHolder" style={sectionStyle}>
        <div className="container" style={{ paddingTop: "150px" }}>
          <div className="mh-fullscreen bg-img center-vh p-20">
            <div
              className="card card-shadowed p-50 w-400 mb-0"
              style={{
                maxWidth: "100%",
                background: "rgba(2,2,2,0.6)",
                borderRadius: "20px"
              }}
            >
              <h5 className="text-uppercase text-center">Login</h5>
              <br />
              <br />
              <form className="form-type-material" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    fullwidth
                    required
                    placeholder="Username"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.username}
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

                <br />
                <button
                  className="btn btn-bold btn-block btn-warning"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <hr className="w-30" />
              <p className="text-center fs-13 mt-20">
                Dont have any accout?
                <Link className="link" to="/register">
                  {" "}
                  Sign Up{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
