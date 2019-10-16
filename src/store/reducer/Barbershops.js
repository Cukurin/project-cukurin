import {
  GET_ALL_BARBERSHOPS,
  GET_ONE_BARBERSHOP,
} from "../actions/ActionTypes"

const initialState = {
  allBarbershops: [],
  barbershop: [],
  selectedShop: null,
  search: '',
  yesIWantToUseGoogleMapApiInternals:true
}

const barbershopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BARBERSHOPS:
      return {
        ...state,
        allBarbershops: action.payload
      };
    case GET_ONE_BARBERSHOP:
      return {
        ...state,
        barbershop: action.payload
      };

    default:
      return state;
  }
};

export default barbershopReducer;