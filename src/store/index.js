// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
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
export const authActions = authSlice.actions;
export default store;
