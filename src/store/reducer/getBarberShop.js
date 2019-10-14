const defaultState = {
  barbershopData: []
}

const getBarberShop = (state = defaultState, action) => {
  console.log(state);
  
  switch (action.type) {
    
    case "FETCH_BARBER":
      return {...state, barbershopData: action.payload};

    default:
      return state;
  }
};

export default getBarberShop