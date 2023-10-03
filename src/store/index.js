import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";

import listingsSlice from "./modules/listingsSlice.js";

const reducer = combineReducers({
    // Here I will be adding reducers
    listings: listingsSlice,
});

const index = configureStore({
    reducer,



})

export default index;
