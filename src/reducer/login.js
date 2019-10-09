const LoginUser = (state = [], action) => {
  
  switch (action.type) {
    
    case "LoginUser":
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

export default LoginUser;