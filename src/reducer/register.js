const register = (state = [], action) => {
  
  switch (action.type) {
    
    case "registerUser":
      return [
        ...state,
        
        {
          values: action.values
        }
      ];

    default:
      return state;
  }
};

export default register;