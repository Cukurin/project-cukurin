import Axios from "axios";
import Cookie from "js-cookie";

export const RegisterUser = (values, history) => {
  console.log(history,'history');
  
  Axios.post(`http://localhost:3909/user`, values)
    .then(result => {
      history.push("/login");
      // console.log(result);
    })
    .catch(error => {
      console.log(error);
    });

  return {
    type: "registerUser",
    values
  }
};

export const LoginUser = (values, history) => {
  Axios.post(`http://localhost:3909/user/login`, values)
    .then(result => {
      Cookie.set("token", result.data.token);
      history.push("/");
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
  return {
    type: "loginUser",
    values
  };
};