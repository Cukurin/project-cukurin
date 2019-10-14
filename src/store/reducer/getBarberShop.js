const defaultState = {
  barbershopData: []
}

const GetBarberShop = (state = defaultState, action) => {
  console.log(state);
  
  switch (action.type) {
    
    case "FETCH_BARBER":
      return {...state, barbershopData: action.payload};

    default:
      return state;
  }
};

export default GetBarberShop