import React from "react";
import { connect } from "react-redux";
import { idUser } from "../store/actions";
import { withRouter } from "react-router-dom";
import "./css/profile.css";
import { Zoom } from "react-reveal";

class Profile extends React.Component {
  componentDidMount() {
    console.log(this.props, "props");

    this.props.getUserAction(this.props.history);
  }
  render() {
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
            <button className="buttonHistory">history</button>
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
