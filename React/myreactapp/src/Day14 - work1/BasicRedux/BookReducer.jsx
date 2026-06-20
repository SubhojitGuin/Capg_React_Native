const initialState = {
  bookName: "React Redux",
  numberOfBooks: 100
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_BOOK":
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - action.payload
      };
    case "SELL_BOOK":
      return {
        ...state,
        numberOfBooks: state.numberOfBooks + action.payload
      }
    default:
      return state;
  }
};

export default BookReducer;