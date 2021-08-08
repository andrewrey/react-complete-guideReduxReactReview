import { createStore } from "redux";

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "increase":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

const store = createStore(countReducer);

export default store;
