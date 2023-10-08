import { createSlice } from "@reduxjs/toolkit";
import {
  updateProductsState,
  updateSingleProductState
} from "./listingsSlice.js";
import { closeToaster, setToasterState } from "./toasterSlice.js";

import { removeObjectInArrayById } from "../utils/index.js";
import {
  getTotalProductsInCart,
  updateProductsInCartQuantities
} from "../utils/cartUtils.js";
import { updateProductsQuantities } from "../utils/listingsUtils.js";

// Initial state for the cart.
const slice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: [],
    numberOfProductsInCart: 0
  },
  reducers: {
    // Handle adding a product to the cart.
    ADD_PRODUCT_TO_CART: (state, action) => {
      const productToAdd = action.payload;

      // Check for an existing product with the same variant in the cart.
      const existingProduct = state.productsInCart.find((product) => {
        if (product.id !== productToAdd.id) {
          return false;
        }
        return Object.keys(product.selectedVariant).every((key) => {
          return (
            key === "quantity" ||
            product.selectedVariant[key] === productToAdd.selectedVariant[key]
          );
        });
      });

      // Update the quantity of an existing product or add a new one.
      if (existingProduct) {
        existingProduct.selectedQuantity += productToAdd.selectedQuantity;
      } else {
        state.productsInCart.push(productToAdd);
      }

      state.numberOfProductsInCart = getTotalProductsInCart(
        state.productsInCart
      );
    },

    // Handle removing a product from the cart.
    REMOVE_PRODUCT_FROM_CART: (state, action) => {
      const productToRemove = action.payload;
      state.productsInCart = removeObjectInArrayById(
        state.productsInCart,
        productToRemove.id
      );
      state.numberOfProductsInCart = getTotalProductsInCart(
        state.productsInCart
      );
    },

    // Handle updating the quantity of a product in the cart.
    UPDATE_PRODUCT_QUANTITY: (state, action) => {
      const { newQuantity, productToUpdate } = action.payload;
      state.productsInCart = updateProductsInCartQuantities(
        state.productsInCart,
        productToUpdate,
        newQuantity
      );
      state.numberOfProductsInCart = getTotalProductsInCart(
        state.productsInCart
      );
    }
  }
});

export default slice.reducer;

const {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_QUANTITY
} = slice.actions;

// Handle the action of adding a product to the cart.
export const addSingleProductToCart =
  (singleProduct, selectedVariant, selectedQuantity) =>
  async (dispatch, getState) => {
    const productToAddToCart = {
      ...singleProduct,
      selectedVariant,
      selectedQuantity
    };
    const currentState = getState();
    const productsFromState = currentState.listings.products;
    const updatedProducts = updateProductsQuantities(
      productsFromState,
      productToAddToCart,
      selectedQuantity,
      "ADD_TO_CART"
    );
    dispatch(updateProductsState(updatedProducts));
    dispatch(updateSingleProductState(productToAddToCart.id));
    dispatch(ADD_PRODUCT_TO_CART(productToAddToCart));
    dispatch(setToasterState(true, "Your product is added to the cart ;)"));
  };

// Handle the action of removing a product from the cart.
export const removeProductFromCart =
  (productToRemoveFromCart) => async (dispatch, getState) => {
    const currentState = getState();
    const productsFromState = currentState.listings.products;
    const updatedProducts = updateProductsQuantities(
      productsFromState,
      productToRemoveFromCart,
      productToRemoveFromCart.selectedQuantity,
      "REMOVE_FROM_CART"
    );
    dispatch(updateProductsState(updatedProducts));
    dispatch(REMOVE_PRODUCT_FROM_CART(productToRemoveFromCart));
  };

// Handle the action of updating the product quantity in the cart.
export const updateProductQuantity =
  (newQuantity, productToUpdate) => (dispatch, getState) => {
    dispatch(UPDATE_PRODUCT_QUANTITY({ newQuantity, productToUpdate }));
    const currentState = getState();
    const productsFromState = currentState.listings.products;

    const updatedProducts = updateProductsQuantities(
      productsFromState,
      productToUpdate,
      newQuantity,
      "UPDATE_PRODUCT_IN_CART"
    );
    dispatch(updateProductsState(updatedProducts));
  };
