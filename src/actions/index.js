import Axios from "axios";
import Cookie from "js-cookie";
import Swal from 'sweetalert';

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
      Swal ( "Oops" ,  "Username atau Email Sudah terdaftar" ,  "error" )

    });

  return {
    type: "registerUser",
    values
  }
};

export const LoginUser = (values, history) => {
  Axios.post(`${API}/user/login`, values)
    .then(result => {
      console.log(result,'result')
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

