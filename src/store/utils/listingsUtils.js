/**
 * Types of cart operations.
 */
const CART_OPERATIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_PRODUCT_IN_CART: "UPDATE_PRODUCT_IN_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART"
};

/**
 * Updates the updateProductsQuantities of a specific product by its ID.
 *
 * @param {Array} products - The array of products.
 * @param {Object} productData - The product to be updated.
 * @param {number} selectedQuantity - The new selectedVariant to be set.
 * @param {string} action - This defines the action we are doing with the cart
 * @return {Array} - Updated array of products.
 */
export const updateProductsQuantities = (
  products,
  productData,
  selectedQuantity,
  action
) => {
  // Make a deep copy of the products array to avoid mutating the original
  const updatedProducts = JSON.parse(JSON.stringify(products));

  // Find the product by ID
  const productToUpdate = updatedProducts.find(
    (product) => product.id === productData.id
  );

  if (!productToUpdate) {
    // If product not found, return original products array
    return products;
  }

  // Locate the variant to update based on the selectedVariant keys, excluding 'quantity'
  const variantToUpdate = productToUpdate.options.find((option) =>
    Object.keys(productData.selectedVariant).every((key) => {
      // Skip the quantity key
      if (key === "quantity") return true;

      return option[key] === productData.selectedVariant[key];
    })
  );

  if (variantToUpdate) {
    switch (action) {
      case CART_OPERATIONS.ADD_TO_CART:
        // Update quantity, ensuring it doesn't go negative.
        variantToUpdate.quantity = Math.max(
          0,
          variantToUpdate.quantity - selectedQuantity
        ); // Example: updating quantity
        break;

      case CART_OPERATIONS.UPDATE_PRODUCT_IN_CART:
        // calculate the diff between productData.selectedQuantity and selectedQuantity
        const difference = selectedQuantity - productData.selectedQuantity;
        // Update the quantity in the stock based on the difference.
        variantToUpdate.quantity -= difference; // If difference is negative, it will effectively add to the stock.
        variantToUpdate.quantity = Math.max(0, variantToUpdate.quantity); // Ensure quantity doesn't go negative.
        break;
      case CART_OPERATIONS.REMOVE_FROM_CART:
        // Update quantity, ensuring it doesn't go negative.
        variantToUpdate.quantity = Math.max(
          0,
          variantToUpdate.quantity + selectedQuantity
        ); // Example: updating quantity
        break;
    }
  }

  return updatedProducts; // Return the updated products array
};
