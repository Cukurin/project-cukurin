import Axios from "axios";
import Cookie from "js-cookie";
import Swal from 'sweetalert';


export const RegisterUser = (values, history) => {
  console.log(history,'history');
  
  Axios.post(`http://localhost:3909/user`, values)
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
  Axios.post(`http://localhost:3909/user/login`, values)
    .then(result => {
      console.log(result,'result')
      Cookie.set("token", result.data.token);
      history.push("/");
      window.location.reload();
      console.log(result);
      
    })
    .catch(error => {
      console.log(error);
      

    });
  return {
    type: "LoginUser",
    values
  };
};