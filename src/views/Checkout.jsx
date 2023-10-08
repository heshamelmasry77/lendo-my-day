import { useDispatch, useSelector } from "react-redux";
import ProductImage from "../components/shared/utils/ProductImage.jsx";
import { NavLink } from "react-router-dom";
import {
  removeProductFromCart,
  updateProductQuantity
} from "../store/modules/cartSlice.js";

function CheckOut() {
  const dispatch = useDispatch();

  const { productsInCart } = useSelector((state) => state.cart); // GETS THE PRODUCTS IN CART

  // Calculate the combined total price of all products in the cart.
  // The total is formatted to have two decimal places for standard currency representation.
  const subTotal = productsInCart
    .reduce(
      (sum, product) =>
        sum + parseFloat(product.price) * product.selectedQuantity,
      0
    )
    .toFixed(2);

  const handleNewSelectedQuantity = (newSelectedQuantity, productToUpdate) => {
    dispatch(updateProductQuantity(newSelectedQuantity, productToUpdate));
  };

  const handleRemoveProductFromCart = (selectedProductToRemove) => {
    dispatch(removeProductFromCart(selectedProductToRemove));
  };
  return (
    <div
      className={"mx-auto mt-6 max-w-2xl px-6 grid lg:max-w-7xl gap-8 lg:px-8"}
    >
      {productsInCart.length > 0 && (
        <div className="flex h-full flex-col overflow-y-scroll bg-white border border-gray-300 rounded-md">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-medium text-gray-700">
                Shopping cart
              </h2>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {productsInCart.map((product, index) => (
                    <li key={index} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <ProductImage product={product} />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-700">
                            <h3>
                              <a href="#">{product.name}</a>
                            </h3>
                            <p className="ml-4">${product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.selectedVariant.color}
                            {product.selectedVariant.storage &&
                              "/ " + product.selectedVariant.storage + "GB"}
                            {product.selectedVariant.power &&
                              "/ " + product.selectedVariant.power + "W"}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            <label
                              htmlFor="quantity"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Qty
                            </label>
                            <select
                              id="quantity"
                              name="quantity"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
                              value={product.selectedQuantity}
                              onChange={(e) =>
                                handleNewSelectedQuantity(
                                  JSON.parse(e.target.value),
                                  product
                                )
                              }
                            >
                              {product &&
                                Array.from({
                                  length: product.selectedVariant.quantity
                                }).map((_, index) => (
                                  <option key={index} value={index + 1}>
                                    {index + 1}
                                  </option>
                                ))}
                            </select>
                          </p>
                          <div className="flex">
                            <button
                              onClick={() =>
                                handleRemoveProductFromCart(product)
                              }
                              type="button"
                              className="font-medium text-green-600 hover:text-green-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-700">
              <p>Subtotal</p>
              <p>${subTotal}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex w-fit items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-left text-sm text-gray-500">
              <p>
                or
                <button
                  type="button"
                  className="font-medium text-green-600 hover:text-green-500 ml-2"
                >
                  Continue Shopping
                  <span aria-hidden="true"> →</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
      {productsInCart.length === 0 && (
        <div className="flex-1 overflow-y-auto px-4 py-8 sm:px-8">
          <div className="flex flex-col gap-y-6">
            <h2 className="text-xl font-medium text-gray-700">
              Your cart seems empty. Let&apos;s fill it with some amazing
              products!
            </h2>
            <NavLink
              to={"/"}
              className="flex w-fit items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
            >
              Explore Products
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
