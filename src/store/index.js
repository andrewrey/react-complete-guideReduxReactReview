import redux from "redux";

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = redux.createStore(countReducer);

export default store;
