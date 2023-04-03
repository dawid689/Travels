import { createSlice } from "@reduxjs/toolkit";

// this will be used later
const countrySlice = createSlice({
  name: "country",
  initialState: {
    name: "Poland",
    // region: "Europe",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      //   state.region = action.payload.region;
    },
  },
});

export const { update } = countrySlice.actions;
export default countrySlice.reducer;
