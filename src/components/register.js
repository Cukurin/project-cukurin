import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
// import axios from 'axios'
import { validateAll } from 'indicative'
import {RegisterUser} from '../actions'
import {connect} from "react-redux"
=======
import axios from 'axios'
>>>>>>> 3debcec6177267b095debd7c1c050e166e2f5b63


const api = "http://localhost:3909"

class Register extends React.Component {
  constructor(props){
    console.log(props, 'props')
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      phoneNumber:""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    
    event.preventDefault()
    
<<<<<<< HEAD
  

    let data = this.state
    const rules = {
      username: 'required|string',
      email: 'required|email',
      password: 'required|string|min:6'
    }
    

    validateAll(data, rules)
      .then(() => {})
      .catch(error => {
        console.log(error);
      })
    
    this.props.dispatch(RegisterUser(data))
    // props.dispatch(RegisterUser(this.state, props.history))
    // axios
    //   .post(`${api}/user`, this.state)
    //   .then(result => {
    //     console.log(result)
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
=======
    const data = this.state
    console.log(data);
    
    axios
      .post(`${api}/user`, this.state)
      .then(result => {
        console.log(result);
          
      })
      
      .catch(error => {
        console.log(error);
      })
>>>>>>> 3debcec6177267b095debd7c1c050e166e2f5b63
  }

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
export default connect() (RegisterUser);
