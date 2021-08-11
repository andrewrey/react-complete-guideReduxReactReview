// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
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

export const counterActions = counterSlice.actions;
export default store;
