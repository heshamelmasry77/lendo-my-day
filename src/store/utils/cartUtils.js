/**
 * Computes the total quantity of products in the cart.
 *
 * @param {Array<Object>} cartItems - The array of products in the cart.
 * @returns {number} - The total quantity of products in the cart.
 */
export const getTotalProductsInCart = (cartItems) => {
  return cartItems.reduce(
    (total, product) => total + product.selectedQuantity,
    0
  );
};

/**
 * Updates the selected quantity of a specific product and the quantity of its variant
 * based on the selected variant details provided in productData.
 *
 * @param {Array} products - The array of products.
 * @param {Object} productData - The Data of the product to be updated.
 * @param {number} newQuantity - The new quantity to be set.
 * @returns {Array} - Updated array of products.
 */
export const updateProductsInCartQuantities = (
  products,
  productData,
  newQuantity
) => {
  // Make a deep copy of the products array to avoid mutating the original
  const updatedProducts = JSON.parse(JSON.stringify(products));

  const productToUpdate = updatedProducts.find((item) => {
    // Check if every key-value pair in the objToFind matches the item
    const matchesSelectedVariant = Object.keys(
      productData.selectedVariant
    ).every(
      (key) => item.selectedVariant[key] === productData.selectedVariant[key]
    );
    return matchesSelectedVariant;
  });

  if (!productToUpdate) {
    // If product not found, return original products array
    return products;
  }

  // Locate the variant to update based on the selectedVariant keys, excluding 'quantity'
  const variantToUpdate = productToUpdate.options.find((option) =>
    Object.keys(productToUpdate.selectedVariant).every((key) => {
      // Skip the quantity key
      if (key === "quantity") return true;

      return option[key] === productToUpdate.selectedVariant[key];
    })
  );

  if (variantToUpdate) {
    // Update the variant's quantity
    variantToUpdate.quantity = newQuantity;
  }

  // Update the selected quantity of the found product
  productToUpdate.selectedQuantity = newQuantity;

  return updatedProducts; // Return the updated products array
};
