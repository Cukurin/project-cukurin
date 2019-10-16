import axios from "axios";
import { GET_ALL_BARBERSHOPS, GET_ONE_BARBERSHOP, GET_ERRORS } from "./ActionTypes";

const API = process.env.REACT_APP_API_HOST

export const getAllBarbershop = () => async dispatch => {
    try {
      let allBarbershops = await axios.get(`${API}/barbershop`)
      
      if (allBarbershops.status === 200) {
          dispatch({ type: GET_ALL_BARBERSHOPS, payload: allBarbershops.data})
          console.log(allBarbershops.data);
      }
    } catch (error) {
      dispatch({ type: GET_ERRORS, payload: error})
    }
};

export const getOneBarbershop = (id, history) => async dispatch => {
  try {
    let barbershop = await axios.get(`${API}/barbershop/${id}`); 
    console.log(history, "action history");
    
    if (barbershop.status === 200) {
        dispatch({ type: GET_ONE_BARBERSHOP, payload: barbershop.data.result})
        history.push("/barbershop")
    }
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error})
  }
};