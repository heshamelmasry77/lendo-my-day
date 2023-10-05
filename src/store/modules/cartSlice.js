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
      // TODO check if quantity of the product is 0
      //  update the single product with the new quantity
      state.productsInCart = [...state.productsInCart, action.payload];
      state.numberOfProductsInCart = state.productsInCart.length;
    }
  }
});
export default slice.reducer; // Here I import the module in the index.js

// Actions // api calls etc
const { ADD_PRODUCT_TO_CART } = slice.actions;

export const addSingleProductToCart =
  (productData, selectedOption) => async (dispatch) => {
    console.log("productData", productData);
    console.log("selectedOption", selectedOption);
    const updatedProductData = { ...productData, selectedOption };
    console.log("updatedProductData: ", updatedProductData);
    dispatch(ADD_PRODUCT_TO_CART(updatedProductData));
  };
