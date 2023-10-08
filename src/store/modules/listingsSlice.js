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
export const fetchProductById = (id) => async (dispatch, getState) => {
  dispatch(SET_SINGLE_PRODUCT(null)); // Reset the single product state to provide a loading experience
  // Access the current state
  const currentState = getState();

  // Access the products from the listings slice
  const productsFromState = currentState.listings.products;
  console.log("productsFromState", productsFromState);
  // if the user refreshed and no data in the state then use the data we have in the JSON file

  let productsDataToUse;
  if (productsFromState.length) {
    productsDataToUse = productsFromState;
  } else {
    // Set products means that there is no data in the products state, so I need to reinitialize it
    dispatch(SET_PRODUCTS(listingsData.items));
    // use JSON data as my data to use to find
    productsDataToUse = listingsData.items;
  }
  try {
    const singleProductData = productsDataToUse.find(
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

export const updateProductsState = (products) => async (dispatch) => {
  try {
    console.log("here updateProducts");
    dispatch(SET_PRODUCTS(products));
  } catch (e) {
    return console.error(e.message);
  }
};

export const updateSingleProductState =
  (productId) => async (dispatch, getState) => {
    try {
      console.log(productId);
      console.log("Starting product update...");

      // Call the fetchProductById thunk with the productId to update the product
      await dispatch(fetchProductById(productId));

      console.log("Product updated successfully!");
    } catch (e) {
      return console.error(e.message);
    }
  };
