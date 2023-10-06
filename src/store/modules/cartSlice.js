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

      const totalSelectedQuantity = state.productsInCart.reduce(
        (total, product) => total + product.selectedQuantity,
        0
      );
      state.numberOfProductsInCart = totalSelectedQuantity;
    }
  }
});
export default slice.reducer; // Here I import the module in the index.js

// Actions // api calls etc
const { ADD_PRODUCT_TO_CART } = slice.actions;

export const addSingleProductToCart =
  (productData, selectedVariant, selectedQuantity) => async (dispatch) => {
    const quantityToReduce = selectedQuantity;
    let clonedProductData = JSON.parse(JSON.stringify(productData));

    for (let i = 0; i < clonedProductData.options.length; i++) {
      // loop on the options array
      // Compare both objects
      if (
        Object.entries(clonedProductData.options[i]).toString() ===
        Object.entries(selectedVariant).toString()
      ) {
        //  if I find the object then
        clonedProductData.options[i] = {
          ...selectedVariant,
          quantity: Math.max(0, selectedVariant.quantity - quantityToReduce) // ensure quantity doesn't go negative
        };
      }
    }

    const productToAddToCart = {
      ...clonedProductData,
      selectedVariant,
      selectedQuantity
    };
    // Add the Product to the cart
    dispatch(ADD_PRODUCT_TO_CART(productToAddToCart));
    // Updates the single product state
    dispatch(setSingleProductState(clonedProductData));
  };
