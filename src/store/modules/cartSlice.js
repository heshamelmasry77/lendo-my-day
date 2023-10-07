import { createSlice } from "@reduxjs/toolkit";
import { setSingleProductState } from "./listingsSlice.js";

// Define the cart state management slice.
const slice = createSlice({
  name: "cart",
  initialState: {
    // Initial state of the cart.
    productsInCart: [],
    numberOfProductsInCart: 0
  },
  reducers: {
    // Reducer for adding a product to the cart.
    ADD_PRODUCT_TO_CART: (state, action) => {
      // Update the productsInCart with the new product.
      state.productsInCart.push(action.payload);

      // Recalculate the total number of products in the cart.
      state.numberOfProductsInCart = state.productsInCart.reduce(
        (total, product) => total + product.selectedQuantity,
        0
      );
    },

    // Placeholder reducer for removing a product from the cart. Needs implementation.
    REMOVE_PRODUCT_FROM_CART: (state, action) => {}
  }
});

// Export the reducer function to manage cart state.
export default slice.reducer;

// Destructure the action creators for easier access.
const { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } = slice.actions;

// Thunk for asynchronously adding a single product to the cart.
export const addSingleProductToCart =
  (singleProduct, selectedVariant, selectedQuantity) => async (dispatch) => {
    // Clone the product data to avoid mutating original state.
    const clonedProductData = JSON.parse(JSON.stringify(singleProduct));

    // Iterate over the product options in the cloned product data to locate the selected variant.
    clonedProductData.options.forEach((option) => {
      // Determine if the current option corresponds to the selected variant
      // by matching its attributes: color, power, and initial quantity.
      if (
        option.color === selectedVariant.color &&
        option.power === selectedVariant.power &&
        option.quantity === selectedVariant.quantity
      ) {
        // The matching variant has been located.
        // Update its quantity by subtracting the quantity selected by the user.
        // The `Math.max` function ensures the updated quantity doesn't drop below 0.
        option.quantity = Math.max(0, option.quantity - selectedQuantity);
      }
    });

    // Dispatch an action from the listingsSlice to update the product data.
    dispatch(setSingleProductState(clonedProductData));

    // Create a product object with the updated data to add to cart.
    const productToAddToCart = {
      ...clonedProductData,
      selectedVariant,
      selectedQuantity
    };

    // Dispatch the action to update the cart state with the new product.
    dispatch(ADD_PRODUCT_TO_CART(productToAddToCart));
  };

// Thunk for asynchronously removing a product from the cart. Needs implementation.
export const removeProductFromCart =
  (productToRemoveFromCart) => async (dispatch) => {};
