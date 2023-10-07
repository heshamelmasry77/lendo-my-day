// Importing necessary functionalities from the toolkit.
import { createSlice } from "@reduxjs/toolkit";
import { setSingleProductState } from "./listingsSlice.js";

// Creating a new slice for the cart state management.
const slice = createSlice({
  name: "cart",
  initialState: {
    // Defines the initial state of the cart.
    productsInCart: [],
    numberOfProductsInCart: 0
  },
  reducers: {
    // Reducer to add a product to the cart.
    ADD_PRODUCT_TO_CART: (state, action) => {
      // Adds the product to the 'productsInCart' array.
      state.productsInCart.push(action.payload);
      console.log("state productsInCart ", state.productsInCart);

      // Calculates the total number of products in the cart.
      state.numberOfProductsInCart = state.productsInCart.reduce(
        (total, product) => total + product.selectedQuantity,
        0
      );
    },

    // Placeholder reducer to remove a product from the cart.
    REMOVE_PRODUCT_FROM_CART: (state, action) => {}
  }
});

// Exporting the cart's reducer.
export default slice.reducer;

// Destructuring the actions from the slice for export.
const { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } = slice.actions;

// Async action to add a single product to the cart.
export const addSingleProductToCart =
  (singleProduct, selectedVariant, selectedQuantity) => async (dispatch) => {
    console.log(singleProduct, selectedVariant, selectedQuantity);

    // Creates a deep copy of the single product data.
    const clonedProductData = JSON.parse(JSON.stringify(singleProduct));

    // Updates the quantity of the selected variant based on the new quantity selected by the user.
    clonedProductData.options.forEach((option) => {
      if (
        option.color === selectedVariant.color &&
        option.power === selectedVariant.power &&
        option.quantity === selectedVariant.quantity
      ) {
        // Ensures the product quantity doesn't go below zero.
        option.quantity = Math.max(0, option.quantity - selectedQuantity);
        console.log("Updated quantity:", option.quantity);
      }
    });
    console.log("clonedProductData: ", clonedProductData);

    // Dispatches an action to update the single product state with the cloned data.
    dispatch(setSingleProductState(clonedProductData));

    // Prepares the product object with selected variant and quantity.
    const productToAddToCart = {
      ...clonedProductData,
      selectedVariant,
      selectedQuantity
    };

    // Dispatches an action to add the prepared product to the cart.
    dispatch(ADD_PRODUCT_TO_CART(productToAddToCart));
  };

// Placeholder async action to remove a product from the cart.
export const removeProductFromCart =
  (productToRemoveFromCart) => async (dispatch) => {};
