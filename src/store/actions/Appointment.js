import axios from "axios";
<<<<<<< HEAD
=======
import Axios from "axios";
import Cookie from "js-cookie";
>>>>>>> 1339d01b2b245d8bae38d0b881c6318adc4f45a5
import Swal from "sweetalert";

const API = process.env.REACT_APP_API_HOST;

// const handleError = error => {
//   return {
//     type: "HANDLE_ERROR",
//     error
//   };
// };

export const AddAppointment = (values, history) => dispatch => {
  // console.log(history,'history');
  console.log(values, "values");

  axios
    .post(`${API}/appointment`, values)
    .then(result => {
      Swal("Yeaay", "You have make Appointment", "success");
      // history.push("/");
      console.log(result, "result");
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
