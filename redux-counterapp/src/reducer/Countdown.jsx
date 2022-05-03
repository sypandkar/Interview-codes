const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    default:
      return state;
  }
};
export default changeTheNumber;
