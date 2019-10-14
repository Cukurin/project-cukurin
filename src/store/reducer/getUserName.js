const defaultState = {
  userData: []
}

const GetUserName = (state = defaultState, action) => {
  // console.log(state);
  
  switch (action.type) {
    
    case "GET_USER":
      return {...state, userData: action.payload};

    default:
      return state;
  }
};

export default GetUserName