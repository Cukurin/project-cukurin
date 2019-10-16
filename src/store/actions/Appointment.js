import axios from "axios";
import Axios from 'axios';
import Cookie from "js-cookie";
import Swal from "sweetalert";
import jwt from "jsonwebtoken";

const API = process.env.REACT_APP_API_HOST;

const handleError = error => {
  return {
    type: "HANDLE_ERROR",
    error
  };
};

export const AddAppointment = (values, history) => {
  // console.log(history,'history');
  console.log(values, "values")
  
  axios.post(`${API}/appointment`, values)
    .then(result => {
      // Swal("Good job!", "", "success");
      // history.push("/");
      console.log(result);
    })
    .catch(error => {
      console.log(error);
      Swal("Oops", "Something wrong when make appointment", "error");
    });

  return {
    type: "registerUser",
    values
  };
};