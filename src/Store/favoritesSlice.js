import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesArray: [],
  },
  reducers: {
    add: (state, action) => {
      if (!state.favoritesArray.includes(action.payload)) {
        state.favoritesArray = state.favoritesArray.concat(action.payload);
      }
    },
    remove: (state, action) => {
      state.favoritesArray = state.favoritesArray.filter((r) => {
        return r !== action.payload;
      });
    },
  },
});

export const { add } = favoritesSlice.actions;
export const { remove } = favoritesSlice.actions;
export default favoritesSlice.reducer;
