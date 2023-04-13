import { createSlice } from "@reduxjs/toolkit";

const lsNumber = localStorage.getItem("count");
const numberSlice = createSlice({
  name: "counter",
  initialState: {
    value: lsNumber ? lsNumber : 0,
  },
  reducers: {
    increment: (state, action) => {
      const num = (state.value += 1);
      console.log(state.value);
      localStorage.setItem("count", num);
    },
    decrement: (state, action) => {
      const num = (state.value -= 1);
      localStorage.setItem("count", num);
      if (state.value === 0) {
        localStorage.removeItem("count");
      }
    },
  },
});
const { actions } = numberSlice;
export const { increment, decrement } = actions;
export default numberSlice.reducer;
