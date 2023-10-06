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
  const [selectedVariants, setSelectedVariants] = useState("Select Variant");
  const [selectedQuantity, setSelectedQuantity] = useState("Select Quantity");

  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleProduct } = useSelector((state) => state.listings); // GETS YOU THE PRODUCTS FROM THE STORE
  useEffect(() => {
    if (id) {
      //  id exists before calling fetchProduct is necessary to prevent errors.
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  const handleSelectedVariants = (options) => {
    // Refresh the selected Variants
    setSelectedVariants(options);
  };
  const handleSelectedQuantity = (quantity) => {
    setSelectedQuantity(quantity);
  };
  const handleAddProductToCart = () => {
    console.log(selectedVariants);
    console.log(selectedQuantity);
    console.log(singleProduct);
    dispatch(
      addSingleProductToCart(singleProduct, selectedVariants, selectedQuantity)
    );
    // // REST THE SELECT OPTION VALUES
    setSelectedVariants("Select Variant");
    setSelectedQuantity("Select Quantity");
  };

  return (
    <>
      {singleProduct && (
        <div className={"py-4"}>
          {/* Listing Images*/}
          <div className="mx-auto mt-6 max-w-2xl px-6 grid lg:max-w-7xl lg:grid-cols-3 gap-8 lg:px-8">
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden rounded-lg">
              <ProductImage product={singleProduct} />
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
                  {singleProduct.name}
                </h1>
                <h2
                  className={
                    "text-xl font-bold tracking-tight text-gray-700 sm:text-2xl"
                  }
                >
                  {singleProduct.brand}
                </h2>
                <p className={"text-base text-gray-700"}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                  orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                  mauris sit amet nibh. Donec sodales sagittis magna. Sed
                  consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>
              </div>
              <div>
                <h2 className={"text-md font-medium text-gray-700"}>Details</h2>
                <p className={"text-sm text-gray-600"}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                  orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                  mauris sit amet nibh. Donec sodales sagittis magna. Sed
                  consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>
              </div>
            </div>
            {/* PRICE, VARIANTS*/}
            <div className={"flex basis-2/5 flex-col gap-y-4"}>
              <Price price={singleProduct.price} />
              {singleProduct &&
                singleProduct.options &&
                singleProduct.options.length && (
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
                isEnabled={
                  selectedVariants && selectedVariants !== "Select Variant"
                }
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
