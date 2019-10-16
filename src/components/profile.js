import React from "react";
import { connect } from "react-redux";
import { idUser } from "../store/actions";
import { withRouter } from "react-router-dom";
import "./css/profile.css";
import { Zoom, Fade } from "react-reveal";

class Profile extends React.Component {
  componentDidMount() {
    console.log(this.props, "props");

    this.props.getUserAction(this.props.history);
  }
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    console.log(this.props, "render props");
    
    return (
      <div className="containerBoxProfile">
        <Zoom>
          <div className="photoProfile"></div>
          <div className="BoxProfile">
            <div className="titleProfile">
              <h1>Personal Information</h1>
            </div>
            <ul>
              <div className="isiProfile">
                <li>Username : {this.props.userData.username}</li>
                <li>Email : {this.props.userData.email}</li>
                <li>Phone Number : {this.props.userData.phoneNumber}</li>
              </div>
            </ul>
            <div>
              <Fade top when={this.state.show}>
                
              {/* {this.props.userData.appointments && this.props.userData.appointments.map((data, index) => { return (

              <p>{data.appointments}</p>
              )})} */}
              <h1>test</h1>
              </Fade>
              
              <button
                className="buttonHistory"
                type="button"
                onClick={this.handleClick}
              >
                {this.state.show}history
              </button>
            </div>
          </div>
        </Zoom>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    userData: state.GetUserName.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserAction: history => dispatch(idUser(history))
  };
};

const connectComponent = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);

export default connectComponent;
