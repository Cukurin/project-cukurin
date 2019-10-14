import React from "react";
import { connect } from "react-redux";
import { idUser } from "../store/actions";

class Profile extends React.Component {
  componentDidMount() {
    console.log(this.props);

    this.props.getUserAction();
  }
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.userData.username}</li>
        </ul>
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
    getUserAction: () => dispatch(idUser())
  };
};

const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default connectComponent;
