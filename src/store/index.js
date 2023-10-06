import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import listingsSlice from "./modules/listingsSlice.js";
import cartSlice from "./modules/cartSlice.js";

const reducer = combineReducers({
  // Here I will be adding reducers
  listings: listingsSlice,
  cart: cartSlice
});

const index = configureStore({
  reducer
});

export default index;
