const defaultState = {
  userData: [],
  error: null
}

const GetUserName = (state = defaultState, action) => {
  // console.log(state);
  
  switch (action.type) {
    
    case "GET_USER":
      return {...state, userData: action.payload};
      case "HANDLE_ERROR":
        return {...state, error: action.error};
  
    default:
      return state;
  }
};

export default GetUserName