import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
      // This will merge the payload as well as my state.
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
