
const addComment = (state=[], action)=> {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          values: action.values
        }
      ]
      default:
        return state;
  }
};
export default addComment;