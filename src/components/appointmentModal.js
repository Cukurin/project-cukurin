import React from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert";
import { connect } from "react-redux";
import { AddAppointment } from "../store/actions";
import "react-datepicker/dist/react-datepicker.css";
import './css/bookingModal.css'

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

  // handleChange = date => {
  //   this.setState({
  //     date
  //   });
  // };

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props, "porps");

    // const { date, service, isDone, ...rest } = this.state;
    const values = {
      ...this.state,
      user: this.props.user._id,
      barbershop: this.props.barbershop._id
    };

    console.log(values, "values");

    this.props.dispatch(AddAppointment(values, this.props.history));

    // Swal("Good job!", "Booking Berhasil!", "success");
  };

  render() {
    // const PickerCustom = ({ value, onClick }) => (
    //   <div class="input-group mb-3">
    //     <div class="input-group-prepend">
    //       <label class="input-group-text" for="inputGroupSelect01">
    //         Date
    //       </label>
    //     </div>
    //     <div class="input-group-prepend">
    //       {value}
    //     </div>
    //   </div>
    // );

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

                {/* <form onChange={this.handleForm}>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    value={this.state.name}
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    name="Phone"
                    value={this.state.phone}
                    placeholder="Your Phone Number"
                  />

                </form> */}

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                      Service
                    </label>
                  </div>
                  <select
                    name="service"
                    selected={this.state.service}
                    onChange={this.handleChange}
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
                  // showTimeSelect
                  // timeFormat="HH:mm"
                  // dateFormat="yyyy-M-dd > h:mm aa"
                  dateFormat="yyyy-M-dd"
                  value={this.state.date}
                  // customInput={<PickerCustom />}
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

// const mapDispatchToProps = dispatch => {
//   return {
// getBarberShop: (id) => dispatch(getBarberShop(id))
//   }
// }

export default connect(
  // mapDispatchToProps,
  mapStateToProps
)(AppointmentModal);
