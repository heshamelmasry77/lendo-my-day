import { createSlice } from "@reduxjs/toolkit";
import listingsData from "../../data/listings.json";

// Redux Slice to manage listings related data in the Redux store.
const slice = createSlice({
  name: "listings",
  initialState: {
    products: [], // Array to store all products
    singleProduct: null // Variable to store details of a selected product
  },
  reducers: {
    // Action to set the list of products
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    // Action to set details of a single selected product
    SET_SINGLE_PRODUCT: (state, action) => {
      state.singleProduct = action.payload;
    }
  }
});

export default slice.reducer; // Exporting the reducer for use in the store

// Destructuring actions for easier usage
const { SET_PRODUCTS, SET_SINGLE_PRODUCT } = slice.actions;

// Thunk to mimic fetching all products from an API
export const fetchProducts = () => async (dispatch) => {
  try {
    // This timeout mimics a network delay for fetching data from an API
    setTimeout(() => {
      dispatch(SET_PRODUCTS(listingsData.items));
    }, 2000);
  } catch (e) {
    return console.error(e.message);
  }
};

// Thunk to mimic fetching a single product by its ID from an API
export const fetchProductById = (id) => async (dispatch) => {
  dispatch(SET_SINGLE_PRODUCT(null)); // Reset the single product state to provide a loading experience

  try {
    const singleProductData = listingsData.items.find(
      (product) => product.id === Number(id)
    );
    setTimeout(() => {
      if (singleProductData) {
        dispatch(SET_SINGLE_PRODUCT(singleProductData));
      } else {
        // Handle error or situations where no product matches the ID
      }
    }, 2000); // This timeout mimics a network delay for fetching data from an API
  } catch (e) {
    return console.error(e.message);
  }
};

// Action to manually set the single product state from anywhere in the app
export const setSingleProductState = (singleProduct) => (dispatch) => {
  dispatch(SET_SINGLE_PRODUCT(singleProduct));
};
