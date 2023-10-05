import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    // Here is the initial state // = data
    productsInCart: [],
    numberOfProductsInCart: 0
  },
  reducers: {
    ADD_PRODUCT_TO_CART: (state, action) => {
      if (isProductInCart) {
        // If the product is already in the cart, don't add it again
      } else {
        // If the product is not in the cart, add it to the cart
        state.productsInCart = [...state.productsInCart, action.payload];
        state.numberOfProductsInCart = state.productsInCart.length;
      }
    }
  }
});
export default slice.reducer; // Here I import the module in the index.js

// Actions // api calls etc
const { ADD_PRODUCT_TO_CART } = slice.actions;

export const addSingleProductToCart = (productData) => async (dispatch) => {
  dispatch(ADD_PRODUCT_TO_CART(productData));
};
