import axios from "axios";
import Axios from "axios";
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

export const RegisterUser = (values, history) => dispatch => {
  axios
    .post(`${API}/user`, values)
    .then(result => {
      Swal("Good job!", "Pendaftaran Berhasil!", "success");
      history.push("/login");

      dispatch({
        type: "registerUser",
        values
      });
    })
    .catch(error => {
      console.log(error);
      Swal("Oops", "Username atau Email Sudah terdaftar", "error");
    });
};

export const LoginUser = (values, history) => {
  axios
    .post(`${API}/user/login`, values)
    .then(result => {
      Cookie.set("token", result.data.token);
      Swal("Good job!", "Login Success!", "success");
      history.push("/");
    })
    .catch(error => {
      console.log(error);
      history.replace("/login");
      Swal("Oops", "Username or password is not valid", "error");
    });
  return {
    type: "LoginUser",
    values
  };
};

export const idUser = history => {
  return dispatch => {
    let token = Cookie.get("token");
    let decoded = jwt.verify(token, "secretbycukurin", function(err, decoded) {
      if (err) {
        dispatch(handleError(err.name));
        history.push("/");
      } else {
        return decoded;
      }
    });

    if (token && decoded !== undefined) {
      Axios.get(`${process.env.REACT_APP_API_HOST}/user/${decoded.data._id}`)
        .then(result => {
          dispatch({
            type: "GET_USER",
            payload: result.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      history.push("/");
    }
  };
};

export const getBarberShop = (id, history) => async dispatch => {
  try {
    let barbershop = await axios.get(`${API}/barbershop/${id}`);

    if (barbershop !== undefined && barbershop.status === 200) {
      dispatch({ type: "GET_BARBERSHOP", payload: barbershop.data });
      history.push(`/barbershop/${id}`);
    }
  } catch (error) {
    console.log(error);
  }
};
