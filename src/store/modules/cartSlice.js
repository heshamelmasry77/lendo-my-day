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

      // get the total number of products in the cart.
      state.numberOfProductsInCart = state.productsInCart.reduce(
        (total, product) => total + product.selectedQuantity,
        0
      );
    },

    // A stub for a future implementation to remove a product from the cart.
    REMOVE_PRODUCT_FROM_CART: (state, action) => {
      const productToRemove = action.payload;

      const updatedCart = state.productsInCart.filter((product) => {
        if (product.options.length !== productToRemove.options.length) {
          return true; // They don't have the same number of options, so keep the product
        }

        for (let i = 0; i < product.options.length; i++) {
          if (
            product.options[i].color !== productToRemove.options[i].color ||
            product.options[i].power !== productToRemove.options[i].power ||
            product.options[i].quantity !== productToRemove.options[i].quantity
          ) {
            return true; // One of the options doesn't match, so keep the product
          }
        }

        return false; // All options match, so exclude the product from the updated cart , remove the product
      });

      console.log("updatedCart: ", updatedCart);
      // update the cart
      state.productsInCart = updatedCart;

      // get the total number of products in the cart.
      state.numberOfProductsInCart = state.productsInCart.reduce(
        (total, product) => total + product.selectedQuantity,
        0
      );
    }
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
    // Iterate over the product options in the cloned product data to locate the selected variant.

    clonedProductData.options.forEach((option) => {
      // Iterate through each property of the selectedVariant
      let allPropertiesMatch = true; // Starting with an assumption that they match
      for (let property in selectedVariant) {
        if (selectedVariant.hasOwnProperty(property)) {
          // If a property does not match, then update the flag and break out of the loop
          if (option[property] !== selectedVariant[property]) {
            allPropertiesMatch = false;
            break;
          }
        }
      }
      // If after iterating through all properties they all match
      if (allPropertiesMatch) {
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
  (productToRemoveFromCart) => async (dispatch, getState) => {
    console.log("productToRemoveFromCart: ", productToRemoveFromCart);

    // clone this product to remove
    // update the quantity

    // basically what this does that it iterate on the cloned product to remove options and compare it with the selectedVariant object
    // once it find the same option object it update the quantity
    // by adding the selected quantity back to the quantity.
    const clonedProductRemoveFromCartData = JSON.parse(
      JSON.stringify(productToRemoveFromCart)
    );
    console.log(clonedProductRemoveFromCartData);
    clonedProductRemoveFromCartData.options.forEach((option) => {
      // Iterate through each property of the selectedVariant
      let allPropertiesMatch = true; // Starting with an assumption that they match
      for (let property in clonedProductRemoveFromCartData.selectedVariant) {
        if (
          clonedProductRemoveFromCartData.selectedVariant.hasOwnProperty(
            property
          ) &&
          property !== "quantity"
        ) {
          // If a property does not match, then update the flag and break out of the loop
          if (
            option[property] !==
            clonedProductRemoveFromCartData.selectedVariant[property]
          ) {
            allPropertiesMatch = false;
            break;
          }
        }
      }
      // If after iterating through all properties they all match
      if (allPropertiesMatch) {
        // Update quantity, ensuring it doesn't go negative.
        option.quantity = Math.max(
          0,
          option.quantity + clonedProductRemoveFromCartData.selectedQuantity
        );
      }
    });

    console.log(
      "clonedProductRemoveFromCartData",
      clonedProductRemoveFromCartData
    );

    // Fetch the current Redux state.
    const currentState = getState();

    // Extract the products list from the state.
    const productsFromState = currentState.listings.products;

    // Deep clone to work on a fresh copy.
    const clonedProductsData = JSON.parse(JSON.stringify(productsFromState));
    // Locate the  product to remove from cart in the cloned products list.
    let foundProduct = clonedProductsData.findIndex(
      (product) => product.id === clonedProductRemoveFromCartData.id
    );
    // Overwrite it with the newly cloned and updated product to remove from cart data.
    clonedProductsData[foundProduct] = clonedProductRemoveFromCartData;

    // Push the updated products list state to the Redux store.
    dispatch(updateProductsState(clonedProductsData));

    dispatch(REMOVE_PRODUCT_FROM_CART(productToRemoveFromCart));
  };
