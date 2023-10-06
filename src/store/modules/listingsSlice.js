import { createSlice } from "@reduxjs/toolkit";
import listingsData from "../../data/listings.json";

// Slice
// A function that accepts an initial state, an object full of reducer functions,
// and a “slice name”, and automatically generates action creators and action types that correspond to the reducers and state.
// The reducer argument is passed to createReducer()

const slice = createSlice({
  name: "listings",
  initialState: {
    // Here is the initial state // = data
    products: [],
    singleProduct: {}
  },
  reducers: {
    // Here are the functions which amend the state // mutations for state
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    SET_SINGLE_PRODUCT: (state, action) => {
      state.singleProduct = action.payload;
    }
  }
});
export default slice.reducer; // Here I import the module in the index.js

// Actions // api calls etc
const { SET_PRODUCTS } = slice.actions;
const { SET_SINGLE_PRODUCT } = slice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    // Imaginary fetch API call

    setTimeout(() => {
      dispatch(SET_PRODUCTS(listingsData.items));
    }, 2000); // this will mimic 2-second delay as if i am fetching data from an API
  } catch (e) {
    return console.error(e.message);
  }
};

export const fetchProductById = (id) => async (dispatch) => {
  try {
    // Imaginary fetch API call
    const singleProductData = listingsData.items.find(
      (product) => product.id === Number(id)
    );
    setTimeout(() => {
      dispatch(SET_SINGLE_PRODUCT(singleProductData));
    }, 2000); // this will mimic 2-second delay as if I am fetching single product data from an API
  } catch (e) {
    return console.error(e.message);
  }
};

export const setSingleProductState = (singleProduct) => (dispatch) => {
  dispatch(SET_SINGLE_PRODUCT(singleProduct));
};
