import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    increment: async (state, action) => {
      const num =  (state.number + 1);
      localStorage.setItem("count", num);
    },
    decrement: async (state, action) => {
      const num =  (state.number - 1);
      localStorage.setItem("count", num);
    },
  },
});
const { actions } = numberSlice;
export const { increment, decrement } = actions;
export default numberSlice.reducer;
