import React from "react";
import DatePicker from "react-datepicker";
import Swal from 'sweetalert';
import "react-datepicker/dist/react-datepicker.css";

class AppointmentModal extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleForm = event => {
    this.setState({
      ...this.state,
      [event.target.name] : event.target.value
    })
    console.log(this.state);
  }
  

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    Swal("Good job!", "Booking Berhasil!", "success");

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
                <form onChange={this.handleForm}>
                  
                  <input type="text"
                   name="Name"
                  placeholder="Your Name"
                  value={this.state.name}
                  
                  /> 
                  <br/><br/>
                  <input type="text"
                  name="Phone"
                  value={this.state.phone} 
                  placeholder="Your Phone Number"
                 />

                </form>
                <p>Picka a date</p>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  dateFormat="yyyy-M-dd > h:mm aa"
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

export default AppointmentModal;
