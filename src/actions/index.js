import Axios from "axios";
// import Cookie from "js-cookie";

export const RegisterUser = (values, history) => {
  Axios.post(`http://localhost:3909`, values)
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
  };
};