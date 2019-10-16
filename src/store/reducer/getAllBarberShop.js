const defaultState = {
  shops: []
}

const getAllBarbershop = (state = defaultState, action) => {
  
  switch(action.type) {
    case 'GET_ALL_BARBER':
      return {
        ...state,
        shops: action.payload};
        default:
          return state
  }
}


export default getAllBarbershop