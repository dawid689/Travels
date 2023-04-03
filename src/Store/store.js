import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./countrySlice";
import favoritesReducer from "./favoritesSlice";

export default configureStore({
  reducer: {
    country: countryReducer,
    favorites: favoritesReducer,
  },
});
