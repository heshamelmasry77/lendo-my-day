import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";

import Listings from "./modules/Listings.js";

const reducer = combineReducers({
    // Here I will be adding reducers
    Listings,
});

const index = configureStore({
    reducer,
});

export default index;
