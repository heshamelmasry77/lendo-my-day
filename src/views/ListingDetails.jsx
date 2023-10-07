import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/modules/listingsSlice.js";
import { addSingleProductToCart } from "../store/modules/cartSlice.js";
import Price from "../components/ListingDetails/Price.jsx";
import VariantsSelector from "../components/ListingDetails/VariantsSelector.jsx";
import QuantitySelector from "../components/ListingDetails/QuantitySelector.jsx";
import AddToCartButton from "../components/ListingDetails/AddToCartButton.jsx";
import ProductImage from "../components/shared/utils/ProductImage.jsx";

function ListingDetails() {
  // State to manage selected variants and quantity for the product
  const [selectedVariants, setSelectedVariants] = useState("Select Variant");
  const [selectedQuantity, setSelectedQuantity] = useState("Select Quantity");

  const dispatch = useDispatch();
  const { id } = useParams();

  // Access the single product from the store
  const { singleProduct } = useSelector((state) => state.listings);

  // Fetch the product details only if not already present in the state
  useEffect(() => {
    if (id && (!singleProduct || Object.keys(singleProduct).length === 0)) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id, singleProduct]);

  // Handlers for updating selected variants and quantity
  const handleSelectedVariants = (options) => {
    setSelectedVariants(options);
  };
  const handleSelectedQuantity = (quantity) => {
    setSelectedQuantity(quantity);
  };

  // Handler to dispatch action for adding product to cart
  const handleAddProductToCart = () => {
    dispatch(
      addSingleProductToCart(singleProduct, selectedVariants, selectedQuantity)
    );

    // Reset the select option values after adding to cart
    setSelectedVariants("Select Variant");
    setSelectedQuantity("Select Quantity");
  };

  return (
    <>
      {singleProduct && (
        <div className={"py-4"}>
          {/* Display product image */}
          <div className="mx-auto mt-6 max-w-2xl px-6 grid lg:max-w-7xl lg:grid-cols-3 gap-8 lg:px-8">
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden rounded-lg">
              <ProductImage product={singleProduct} />
            </div>
          </div>

          {/* Display listing details, price, and variants */}
          <div className="flex flex-col sm:flex-row gap-6 gap-x-4 mx-auto mt-6 max-w-2xl lg:max-w-7xl px-6 lg:px-8">
            <div className="flex gap-y-6 flex-col basis-3/5 border-r-none border-b sm:border-b-0 sm:border-r border-gray-300 pb-8 sm:pb-0 sm:pr-8">
              <div className={"flex flex-col gap-y-4"}>
                <h1 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">
                  {singleProduct.name}
                </h1>
                <h2 className="text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                  {singleProduct.brand}
                </h2>
                <p className={"text-base text-gray-700"}></p>
              </div>
              <div>
                <h2 className={"text-md font-medium text-gray-700"}>Details</h2>
                <p className={"text-sm text-gray-600"}></p>
              </div>
            </div>
            <div className={"flex basis-2/5 flex-col gap-y-4"}>
              <Price price={singleProduct.price} />
              {singleProduct.options && singleProduct.options.length > 0 && (
                <div className="flex flex-col gap-y-4">
                  <VariantsSelector
                    options={singleProduct.options}
                    selectedVariant={selectedVariants}
                    onVariantChange={handleSelectedVariants}
                  />
                  <QuantitySelector
                    selectedVariant={selectedVariants}
                    selectedQuantity={selectedQuantity}
                    onQuantityChange={handleSelectedQuantity}
                  />
                </div>
              )}
              <AddToCartButton
                isEnabled={selectedVariants !== "Select Variant"}
                onClick={handleAddProductToCart}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListingDetails;
