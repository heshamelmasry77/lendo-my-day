import { createSlice } from "@reduxjs/toolkit";
import {
  updateProductsState,
  updateSingleProductState
} from "./listingsSlice.js";
import {
  findObjectInArrayById,
  removeObjectInArrayById
} from "../utils/index.js";
import {
  getTotalProductsInCart,
  updateProductsInCartQuantities
} from "../utils/cartUtils.js";
import { updateProductsQuantities } from "../utils/listingsUtils.js";

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
      state.numberOfProductsInCart = getTotalProductsInCart(
        state.productsInCart
      );
    },

    REMOVE_PRODUCT_FROM_CART: (state, action) => {
      const productToRemove = action.payload;
      const updatedCart = removeObjectInArrayById(
        state.productsInCart,
        productToRemove.id
      );
      state.productsInCart = updatedCart;
      // get the total number of products in the cart.
      state.numberOfProductsInCart = getTotalProductsInCart(
        state.productsInCart
      );
    },

    UPDATE_PRODUCT_QUANTITY: (state, action) => {
      const productQuantityToUpdate = action.payload.newQuantity;
      const productToUpdate = action.payload.productToUpdate;

      const updatedCart = updateProductsInCartQuantities(
        state.productsInCart,
        productToUpdate,
        productQuantityToUpdate
      );
      state.productsInCart = updatedCart;
      // get the total number of products in the cart.
      state.numberOfProductsInCart = getTotalProductsInCart(
        state.productsInCart
      );
    }
  }
});

// Makes the cart reducer available for the Redux store.
export default slice.reducer;

// Easier reference to the action creators.
const {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_QUANTITY
} = slice.actions;

// Thunk: Add a product to the cart asynchronously.
export const addSingleProductToCart =
  (singleProduct, selectedVariant, selectedQuantity) =>
  async (dispatch, getState) => {
    // Prepare the product details for cart addition.
    const productToAddToCart = {
      ...singleProduct,
      selectedVariant,
      selectedQuantity
    };
    const currentState = getState();
    // Extract the products list from the state.
    const productsFromState = currentState.listings.products;
    const updatedProducts = updateProductsQuantities(
      productsFromState,
      productToAddToCart,
      selectedQuantity,
      "ADD_TO_CART"
    );
    console.log("updatedProducts: ", updatedProducts);
    dispatch(updateProductsState(updatedProducts));
    // Add the product to the cart in the Redux store.
    dispatch(ADD_PRODUCT_TO_CART(productToAddToCart));
  };

// Thunk placeholder: Remove a product from the cart asynchronously.
export const removeProductFromCart =
  (productToRemoveFromCart) => async (dispatch, getState) => {
    console.log("productToRemoveFromCart: ", productToRemoveFromCart);
    const currentState = getState();
    // Extract the products list from the state.
    const productsFromState = currentState.listings.products;
    const updatedProducts = updateProductsQuantities(
      productsFromState,
      productToRemoveFromCart,
      productToRemoveFromCart.selectedQuantity,
      "REMOVE_FROM_CART"
    );
    console.log("updatedProducts: ", updatedProducts);
    dispatch(updateProductsState(updatedProducts));

    dispatch(REMOVE_PRODUCT_FROM_CART(productToRemoveFromCart));
  };

export const updateProductQuantity =
  (newQuantity, productToUpdate) => (dispatch, getState) => {
    dispatch(UPDATE_PRODUCT_QUANTITY({ newQuantity, productToUpdate }));
    const currentState = getState();
    // Extract the products list from the state.
    const productsFromState = currentState.listings.products;

    const updatedProducts = updateProductsQuantities(
      productsFromState,
      productToUpdate,
      newQuantity,
      "UPDATE_PRODUCT_IN_CART"
    );
    console.log("updatedProducts: ", updatedProducts);
    dispatch(updateProductsState(updatedProducts));
  };
