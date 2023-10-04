import { createSlice } from "@reduxjs/toolkit";

const productsDummyData = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper."
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top."
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card."
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top."
  }
  // More products...
];

// Slice
// A function that accepts an initial state, an object full of reducer functions,
// and a “slice name”, and automatically generates action creators and action types that correspond to the reducers and state.
// The reducer argument is passed to createReducer()

const slice = createSlice({
  name: "listings",
  initialState: {
    // Here is the initial state // = data
    products: []
  },
  reducers: {
    // Here are the functions which amend the state // mutations for state
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    }
  }
});
export default slice.reducer; // Here I import the module in the index.js

// Actions // api calls etc
const { SET_PRODUCTS } = slice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    // Gets product data from the JSON file to be created.
    dispatch(SET_PRODUCTS(productsDummyData));
  } catch (e) {
    return console.error(e.message);
  }
};
