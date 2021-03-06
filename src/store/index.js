// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import counterSlice from "./counter-slice";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

// const countReducer = (state = { count: 0, showCounter: true }, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1, showCounter: true };
//     case "decrement":
//       return { count: state.count - 1, showCounter: true };
//     case "increase":
//       return { count: state.count + action.payload, showCounter: true };
//     case "toggle":
//       return { count: state.count, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

// const store = createStore(countReducer);

export default store;
