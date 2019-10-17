import axios from "axios";
import Swal from "sweetalert";

const API = process.env.REACT_APP_API_HOST;

// const handleError = error => {
//   return {
//     type: "HANDLE_ERROR",
//     error
//   };
// };

export const AddAppointment = (values, history) => {
  // console.log(history,'history');
  console.log(values, "values")
  
  axios.post(`${API}/appointment`, values)
    .then(result => {
      Swal("Yeaay", "You have make Appointment", "success");
      // history.push("/");
      console.log(result, "result");
      return {
        type: "ADD_APPOINTMENT",
        values
      };
    })
    .catch(error => {
      console.log(error, "error");
      Swal("Oops", "Something wrong when make appointment", "error");
    });
};