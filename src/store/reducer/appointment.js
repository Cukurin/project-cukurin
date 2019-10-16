const appointment = (state = [], action) => {
  
  switch (action.type) {
    
    case "ADD_APPOINTMENT":
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

export default appointment;