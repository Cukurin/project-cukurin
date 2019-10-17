import React from "react";
import { connect } from "react-redux";
import { idUser } from "../store/actions";
import { withRouter } from "react-router-dom";
import "./css/profile.css";
import { Zoom } from "react-reveal";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { Table } from "reactstrap";
class Profile extends React.Component {
  componentDidMount() {
    this.props.getUserAction(this.props.history);
  }
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

<<<<<<< HEAD
  render() {  
    console.log(this.props, "render props");

=======
  render() {
>>>>>>> 3c4e7d4baa29cad259f52334dfeb453d0a19e377
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
              <Button
                id="toggler"
                style={{ marginBottom: "1rem" }}
                className="buttonHistory"
              >
                History
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    <Table dark>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Barbershop Name</th>
                          <th>Booking Schedule</th>
                          <th>Services</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(this.props.userData.appointments) &&
                          this.props.userData.appointments.map((object, i) => {
                            return [
                              <tr key={i}>
                                <th scope="col">{i + 1}</th>
                                <td>{object.barbershop.name}</td>
                                <td>{object.createdAt}</td>
                                <td>{object.service}</td>
                              </tr>
                            ];
                          })}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
          </div>
        </Zoom>
      </div>
    );
  }
}

const mapStateToProps = state => {
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
