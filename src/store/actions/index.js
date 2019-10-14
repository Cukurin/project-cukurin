import Axios from "axios";
import Cookie from "js-cookie";
import Swal from 'sweetalert';
import jwt from "jsonwebtoken";


const API = process.env.REACT_APP_API_HOST

export const RegisterUser = (values, history) => {
  console.log(history,'history');
  
  Axios.post(`${API}/user`, values)
    .then(result => {
      Swal("Good job!", "Pendaftaran Berhasil!", "success");
      history.push("/login");
      console.log(result);
    })
    .catch(error => {
      console.log(error);
      Swal("Oops", "Username atau Email Sudah terdaftar", "error");
    });

  return {
    type: "registerUser",
    values
  };
};

export const LoginUser = (values, history) => {
  Axios.post(`${API}/user/login`, values)
    .then(result => {
      console.log(result.data, "result");
      Cookie.set("token", result.data.token);
      Swal("Good job!", "Login Success!", "success");
      history.push("/");
      // window.location.reload();
      console.log(result);
      
    })
    .catch(error => {
      console.log(error);
      history.replace('/login')
      Swal ( "Oops" ,  "Username or password is not valid" ,  "error" )


    });
  return {
    type: "LoginUser",
    values
    
  };
};

export const idUser = history => {
  return dispatch => {
    console.log(history, "history");

    let token = Cookie.get("token");
    let decoded = jwt.verify(token, "secretbycukurin", function(err, decoded) {
      if (err) {
        history.push("/login");
      } else {
        return decoded;
      }
    });

    console.log(decoded);
    if (token) {

    Axios.get(
      `${process.env.REACT_APP_API_HOST}/user/${decoded.data._id}`
      // headers: { token: Cookie.get("token") }
    )
      .then(result => {
        console.log(result, "RESULT");

        dispatch({
          type: "GET_USER",
          payload: result.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}};

export const idBarberShop = history => {
  return dispatch => {
    console.log(history);

    let token = Cookie.get('token');
    let decoded = jwt.verify(token, 'secretbycukurin', function(err, decoded) {
      if (err) {
        history.push('/login');
      } else {
        return decoded;
      }
    });
    console.log(decoded);
    if(token) {
      Axios.get(
        `${API}/barbershop/${decoded.data._id}`
      )
      .then(result => {
        console.log(result, 'RESULT');
        dispatch({
          type: 'FETCH_BARBER',
          payload: result.data
        });
      })
      .catch(error => {
        console.log(error);
        
      })
    }
  }}