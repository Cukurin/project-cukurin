const defaultState = {
  barbershop: []
}

const getBarberShop = (state = defaultState, action) => {
  console.log(state);
  
  switch (action.type) {
    
    case "GET_BARBERSHOP":
      return {...state, 
        barbershop: action.payload};

    default:
      return state;
  }
};

export default getBarberShop