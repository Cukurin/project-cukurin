const defaultState = {
  shops: []
}

const addBarberShop = (state = defaultState, action) => {
  
  switch(action.type) {
    case 'ADD_BARBERSHOP':
      return {
        ...state,
        shops: action.payload};
        default:
          return state
  }
}
export default addBarberShop