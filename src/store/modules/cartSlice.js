import { createSlice } from "@reduxjs/toolkit";
import { setSingleProductState } from "./listingsSlice.js";

const slice = createSlice({
  name: "cart",
  initialState: {
    // Here is the initial state // = data
    productsInCart: [],
    numberOfProductsInCart: 0
  },
  reducers: {
    ADD_PRODUCT_TO_CART: (state, action) => {
      state.productsInCart.push(action.payload);
      console.log("state productsInCart ", state.productsInCart);

      state.numberOfProductsInCart = state.productsInCart.reduce(
        (total, product) => total + product.selectedQuantity,
        0
      );
    },

    REMOVE_PRODUCT_FROM_CART: (state, action) => {}
  }
});
export default slice.reducer; // Here I import the module in the index.js

// Actions // api calls etc
const { ADD_PRODUCT_TO_CART } = slice.actions;
const { REMOVE_PRODUCT_FROM_CART } = slice.actions;

export const addSingleProductToCart =
  (singleProduct, selectedVariant, selectedQuantity) => async (dispatch) => {
    console.log(singleProduct);
    console.log(selectedVariant);
    console.log(selectedQuantity);
    const clonedProductData = JSON.parse(JSON.stringify(singleProduct));
    // find the selected variant option in the options array in the product
    // when we find it, i will reduce the quantity with the new selected quantity
    // i will update the single product
    // i will add the product to the cart
    clonedProductData.options.forEach((option) => {
      if (
        option.color === selectedVariant.color &&
        option.power === selectedVariant.power &&
        option.quantity === selectedVariant.quantity
      ) {
        option.quantity = Math.max(0, option.quantity - selectedQuantity); // ensure quantity doesn't go negative
        console.log("Updated quantity:", option.quantity);
      }
    });
    console.log("clonedProductData: ", clonedProductData);

    dispatch(setSingleProductState(clonedProductData));
    const productToAddToCart = {
      ...clonedProductData,
      selectedVariant,
      selectedQuantity
    };
    dispatch(ADD_PRODUCT_TO_CART(productToAddToCart));
  };
export const removeProductFromCart =
  (productToRemoveFromCart) => async (dispatch) => {};
