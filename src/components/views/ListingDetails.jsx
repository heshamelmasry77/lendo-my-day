function ListingDetails() {
  return (
    <div>
      {/* Listing Images*/}
      <div className="mx-auto mt-6 max-w-2xl px-6 grid lg:max-w-7xl lg:grid-cols-3 gap-8 lg:px-8">
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden rounded-lg">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
            alt="Model wearing plain white basic tee."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden rounded-lg">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
            alt="Model wearing plain white basic tee."
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div
        className={
          "flex flex-col sm:flex-row gap-6 gap-x-4 mx-auto mt-6 max-w-2xl lg:max-w-7xl px-6 lg:px-8"
        }
      >
        {/* LISTING DETAILS*/}
        <div
          className={
            "flex gap-y-6 flex-col basis-3/5 border-r-none border-b sm:border-b-0 sm:border-r border-gray-300 pb-8 sm:pb-0 sm:pr-8"
          }
        >
          <div className={"flex flex-col gap-y-4"}>
            <h1
              className={
                "text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl"
              }
            >
              Basic Tee 6-Pack
            </h1>
            <p className={"text-base text-gray-700"}>
              The Basic Tee 6-Pack allows you to fully express your vibrant
              personality with three grayscale options. Feeling adventurous? Put
              on a heather gray tee. Want to be a trendsetter? Try our exclusive
              colorway. Need to add an extra pop of color to your outfit? Our
              white tee has you covered.
            </p>
          </div>
          <div>
            <h2 className={"text-sm font-medium text-gray-700"}>Details</h2>
            <p className={"text-sm text-gray-600"}>
              The 6-Pack includes two black, two white, and two heather gray
              Basic Tees. Sign up for our subscription service and be the first
              to get new, exciting colors, like our upcoming limited release.
            </p>
          </div>
        </div>
        {/* PRICE, VARIANTS*/}
        <div className={"flex basis-2/5 flex-col gap-y-4"}>
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-700">$192</p>
          <div className={"flex flex-col gap-y-4"}>
            <h3 className={"text-sm font-medium text-gray-700"}>Color</h3>
            <div className={"flex items-center gap-x-6"}>
              <label className="relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none">
                <input
                  type="radio"
                  name="color-choice"
                  value="White"
                  className="sr-only"
                  aria-labelledby="color-choice-0-label"
                />
                <span id="color-choice-0-label" className="sr-only">
                  White
                </span>
                <span
                  aria-hidden="true"
                  className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
                ></span>
              </label>

              <label className="relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-red-500 ring ring-offset-1">
                <input
                  type="radio"
                  name="color-choice"
                  value="Red"
                  className="sr-only"
                  aria-labelledby="color-choice-0-label"
                />
                <span id="color-choice-0-label" className="sr-only">
                  Red
                </span>
                <span
                  aria-hidden="true"
                  className="h-8 w-8 bg-red-500 rounded-full border border-black border-opacity-10"
                ></span>
              </label>

              <label className="relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none">
                <input
                  type="radio"
                  name="color-choice"
                  value="Blue"
                  className="sr-only"
                  aria-labelledby="color-choice-0-label"
                />
                <span id="color-choice-0-label" className="sr-only">
                  Blue
                </span>
                <span
                  aria-hidden="true"
                  className="h-8 w-8 bg-blue-500 rounded-full border border-black border-opacity-10"
                ></span>
              </label>
            </div>
          </div>
          <div className={"flex flex-col gap-y-4"}>
            <h3 className={"text-sm font-medium text-gray-700"}>Size</h3>
            <div className={"flex items-center gap-6"}>
              <div
                className={
                  "flex items-center text-sm font-medium justify-center h-20 w-20 cursor-pointer rounded-lg text-gray-700 border border-gray-300 hover:bg-gray-50 uppercase shadow-sm focus:outline-none"
                }
              >
                m
              </div>
              <div
                className={
                  "flex items-center text-sm font-medium justify-center h-20 w-20 cursor-pointer rounded-lg  text-gray-700 border border-gray-300 hover:bg-gray-50 ring-2 ring-green-500 uppercase shadow-sm focus:outline-none"
                }
              >
                l
              </div>

              <div
                className={
                  "flex items-center text-sm font-medium justify-center h-20 w-20 cursor-pointer rounded-lg text-gray-700 border border-gray-300 hover:bg-gray-50 ring-2 ring-green-500 uppercase shadow-sm focus:outline-none"
                }
              >
                xl
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingDetails;
