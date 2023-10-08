import { createSlice } from "@reduxjs/toolkit";
import listingsData from "../../data/listings.json";
import { setLoadingState } from "./loaderSlice";

// Slice for managing listings-related data in the Redux store.
const slice = createSlice({
  name: "listings",
  initialState: {
    products: [], // Store all products
    singleProduct: null // Store details of a selected product
  },
  reducers: {
    // Set the list of products in the state
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    // Set details of a specific product in the state
    SET_SINGLE_PRODUCT: (state, action) => {
      state.singleProduct = action.payload;
    }
  }
});

export default slice.reducer;

const { SET_PRODUCTS, SET_SINGLE_PRODUCT } = slice.actions;

// Fake fetching all products from an API.
export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    setTimeout(() => {
      dispatch(SET_PRODUCTS(listingsData.items));
      dispatch(setLoadingState(false));
    }, 2000); // Mimic a network delay
  } catch (e) {
    return console.error(e.message);
  }
};

//  Fake fetching a single product by its ID from an API.
export const fetchProductById = (id) => async (dispatch, getState) => {
  dispatch(setLoadingState(true));

  dispatch(SET_SINGLE_PRODUCT(null)); // Clear the single product for loading feedback
  const currentState = getState();
  const productsFromState = currentState.listings.products;

  const productsDataToUse = productsFromState.length
    ? productsFromState
    : listingsData.items;
  if (!productsFromState.length) {
    dispatch(SET_PRODUCTS(listingsData.items));
  }

  try {
    const singleProductData = productsDataToUse.find(
      (product) => product.id === Number(id)
    );
    setTimeout(() => {
      if (singleProductData) {
        dispatch(SET_SINGLE_PRODUCT(singleProductData));
      } else {
        // Todo Handle scenarios where no product matches the provided ID
      }
      dispatch(setLoadingState(false));
    }, 2000); // Mimic a network delay
  } catch (e) {
    return console.error(e.message);
  }
};

// Update the products state with the provided products.
export const updateProductsState = (products) => async (dispatch) => {
  try {
    dispatch(SET_PRODUCTS(products));
  } catch (e) {
    return console.error(e.message);
  }
};

// Update the state of a single product.
export const updateSingleProductState =
  (productId) => async (dispatch, getState) => {
    try {
      await dispatch(fetchProductById(productId));
    } catch (e) {
      return console.error(e.message);
    }
  };
