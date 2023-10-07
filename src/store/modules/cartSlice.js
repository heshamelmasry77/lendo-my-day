import { createSlice } from "@reduxjs/toolkit";
import {
  updateProductsState,
  updateSingleProductState
} from "./listingsSlice.js";

// Slice for managing the cart state within the Redux store.
const slice = createSlice({
  name: "cart",
  initialState: {
    // Represents products added to the cart.
    productsInCart: [],
    // Total count of products in the cart.
    numberOfProductsInCart: 0
  },
  reducers: {
    // Adds a product to the cart.
    ADD_PRODUCT_TO_CART: (state, action) => {
      // Incorporate the new product to the cart.
      state.productsInCart.push(action.payload);

      // Tally up the number of items in the cart.
      state.numberOfProductsInCart = state.productsInCart.reduce(
        (total, product) => total + product.selectedQuantity,
        0
      );
    },

    // A stub for a future implementation to remove a product from the cart.
    REMOVE_PRODUCT_FROM_CART: (state, action) => {}
  }
});

// Makes the cart reducer available for the Redux store.
export default slice.reducer;

// Easier reference to the action creators.
const { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } = slice.actions;

// Thunk: Add a product to the cart asynchronously.
export const addSingleProductToCart =
  (singleProduct, selectedVariant, selectedQuantity) =>
  async (dispatch, getState) => {
    // Logs for debugging purposes.
    // (Consider removing or minimizing these for production.)
    console.log("singleProduct", singleProduct);
    console.log("selectedVariant", selectedVariant);
    console.log("selectedQuantity", selectedQuantity);

    // Create a deep clone of the provided product to avoid mutating original data.
    const clonedProductData = JSON.parse(JSON.stringify(singleProduct));

    // Update the quantity of the variant chosen by the user.
    clonedProductData.options.forEach((option) => {
      if (
        option.color === selectedVariant.color &&
        option.power === selectedVariant.power &&
        option.quantity === selectedVariant.quantity
      ) {
        // Update quantity, ensuring it doesn't go negative.
        option.quantity = Math.max(0, option.quantity - selectedQuantity);
      }
    });

    // Fetch the current Redux state.
    const currentState = getState();

    // Extract the product list from the state.
    const productsFromState = currentState.listings.products;

    // Deep clone to work on a fresh copy.
    const clonedProductsData = JSON.parse(JSON.stringify(productsFromState));

    // Locate the updated product in the cloned products list.
    let foundProduct = clonedProductsData.findIndex(
      (product) => product.id === clonedProductData.id
    );
    // Overwrite it with the newly cloned and updated product data.
    clonedProductsData[foundProduct] = clonedProductData;

    // Push the updated product list and single product state to the Redux store.
    dispatch(updateProductsState(clonedProductsData));
    dispatch(updateSingleProductState(clonedProductData));

    // Prepare the product details for cart addition.
    const productToAddToCart = {
      ...clonedProductData,
      selectedVariant,
      selectedQuantity
    };

    // Add the product to the cart in the Redux store.
    dispatch(ADD_PRODUCT_TO_CART(productToAddToCart));
  };

// Thunk placeholder: Remove a product from the cart asynchronously.
export const removeProductFromCart =
  (productToRemoveFromCart) => async (dispatch) => {
    console.log("productToRemoveFromCart: ", productToRemoveFromCart);
    // Future implementation: Locate and remove the specified product from the cart.
    // Additionally, update the single product's data.
  };
