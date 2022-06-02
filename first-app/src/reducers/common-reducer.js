const initialState = {
  count: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_CART_COUNT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT_CART_COUNT":
      return {
        count: state.count - 1,
      };
    case "RECOMPUTE_CART_COUNT":
      return {
        count: action.newCount,
      };
    default:
      return state;
  }
};

export default cart;
