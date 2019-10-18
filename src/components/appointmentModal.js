import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { AddAppointment } from "../store/actions";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

class AppointmentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      service: "",
      user: "",
      barbershop: "",
      isDone: false
    };
  }

  handleChange = date => {
    this.setState({
      date
    });
  };

  handleForm = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (Cookies.get("token")) {
      const values = {
        ...this.state,
        user: this.props.user._id,
        barbershop: this.props.barbershop._id
      };

      this.props.dispatch(AddAppointment({ ...values }, this.props.history));
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <div className="container">
        <div class="modal" id="myModal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Make Appointment</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                      Service
                    </label>
                  </div>
                  <select
                    name="service"
                    selected={this.state.service}
                    onChange={this.handleForm}
                    class="custom-select"
                    id="inputGroupSelect01"
                  >
                    {Array.isArray(this.props.barbershop.services) &&
                      this.props.barbershop.services.map(service => {
                        return <option value={service}>{service}</option>;
                      })}
                  </select>
                </div>

                <p>Picka a date</p>
                <DatePicker
                  name="date"
                  selected={this.state.date}
                  onChange={this.handleChange}
                  // dateFormat="yyyy-M-dd"
                  dateFormat="MMM d, yyyy h:mm aa"
                  showTimeSelect
                  timeFormat="HH:mm"
                />
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.handleSubmit}
                  data-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    barbershop: state.barbershop.barbershop,
    user: state.GetUserName.userData
  };
};

export default withRouter(connect(mapStateToProps)(AppointmentModal));
