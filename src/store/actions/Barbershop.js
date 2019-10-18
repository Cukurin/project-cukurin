import axios from "axios";
import {
  GET_ALL_BARBERSHOPS,
  GET_ONE_BARBERSHOP,
  GET_ERRORS,
  ADD_BARBERSHOP
} from "./ActionTypes";

// const API = process.env.REACT_APP_API_HOST;
// production
const SERVER = process.env.REACT_APP_API_SERVER;

export const getAllBarbershop = () => async dispatch => {
  try {
    let allBarbershops = await axios.get(`${SERVER}/barbershop`);

    if (allBarbershops.status === 200) {
      dispatch({ type: GET_ALL_BARBERSHOPS, payload: allBarbershops.data });
    }
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error });
  }
};

export const getOneBarbershop = (id, history) => async dispatch => {
  try {
    let barbershop = await axios.get(`${SERVER}/barbershop/${id}`);

    const { _id } = this.props.shops;

    if (barbershop.status === 200) {
      dispatch({ type: GET_ONE_BARBERSHOP, payload: barbershop.data });
      history.push(`/barbershop/${_id}`);
    }
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error });
  }
};

export const addBarberShop = (values, history) => {
  axios
    .post(`${SERVER}/barbershop`, values)
    .then(result => {
      history.push("/");
    })
    .catch(error => {
      console.log(error);
    });
  return {
    type: ADD_BARBERSHOP,
    values
  };
};
