import axios from 'axios';
import Swal from 'sweetalert';

const SERVER = process.env.REACT_APP_API_SERVER;

export const addComment = (values, history) => async dispatch => {
  console.log(values, "vales");
  axios
  .post(`${SERVER}/comment`, values)
  .then(result => {
    dispatch({
      type: "ADD_COMMENT",
      values
    })
  })
  .catch(error => {
    console.log(error);
    
  })
}