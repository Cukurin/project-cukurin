import axios from "axios";
import Swal from "sweetalert";

// development
// const API = process.env.REACT_APP_API_HOST;
// production
const SERVER = process.env.REACT_APP_API_SERVER;

export const AddAppointment = (values, history) => dispatch => {
  console.log(values, "values");

  axios
    .post(`${SERVER}/appointment`, values)
    .then(result => {
      Swal("Yeaay", "You have make Appointment", "success");
      dispatch({
        type: "ADD_APPOINTMENT",
        values
      });
    })
    .catch(error => {
      console.log(error, "error");
      Swal("Oops", "Something wrong when make appointment", "error");
    });
};
