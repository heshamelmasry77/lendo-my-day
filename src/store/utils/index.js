/**
 * Finds an object in an array based on the object's id.
 *
 * @param {Array} arr - The array of objects to search.
 * @param {Object} obj - The object with the id to look for.
 * @return {Object|null} - The found object or null if not found.
 */
export const findObjectInArrayById = (arr, obj) => {
  return arr.find((item) => item.id === obj.id) || null;
};

/**
 * Removes an object from an array based on the object's id.
 *
 * @param {Array<Object>} arr - The array of objects to search and modify.
 * @param {number|string} id - The id of the object to remove.
 * @return {Array<Object>} - The modified array without the object with the given id.
 */
export const removeObjectInArrayById = (arr, id) => {
  return arr.filter((item) => item.id !== id);
};
