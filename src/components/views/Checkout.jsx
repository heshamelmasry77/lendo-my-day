function CheckOut() {
  return (
    <div
      className={"mx-auto mt-6 max-w-2xl px-6 grid lg:max-w-7xl gap-8 lg:px-8"}
    >
      <div className="flex h-full flex-col overflow-y-scroll bg-white border border-gray-300 rounded-md">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <h2
              className="text-lg font-medium text-gray-900"
              id="slide-over-title"
            >
              Shopping cart
            </h2>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                <li className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">Throwback Hip Bag</a>
                        </h3>
                        <p className="ml-4">$90.00</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Salmon</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty 1</p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-green-600 hover:text-green-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                      alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">Medium Stuff Satchel</a>
                        </h3>
                        <p className="ml-4">$32.00</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Blue</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty 1</p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-green-600 hover:text-green-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg"
                      alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">Zip Tote Basket</a>
                        </h3>
                        <p className="ml-4">$140.00</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        White and black
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty 1</p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-green-600 hover:text-green-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
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
    </div>
  );
}

export default CheckOut;
