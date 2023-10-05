import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/modules/listingsSlice.js";
import productImgPlaceholder from "../../assets/images/no-image-placeholder.svg";

function Listings() {
  const dispatch = useDispatch(); // Help to dispatch actions, Example: dispatch(fetchProducts())
  const { products } = useSelector((state) => state.listings); // GETS THE PRODUCTS FROM THE STORE

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function getProductImage(img) {
    if (img && img.imageSrc) {
      return (
        <img
          src={img.imageSrc}
          alt={img.imageAlt || "Product Image"}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      );
    } else {
      return (
        <img
          src={productImgPlaceholder}
          alt="No product image available"
          className="h-full w-full object-contain object-center group-hover:opacity-75"
        />
      );
    }
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              to={`listing/${product.id}`}
              key={product.id}
              className="group relative"
            >
              {!product.available && (
                <span className="absolute top-0 h-8 bg-red-500 w-fit z-10 rounded-tr-lg right-0 px-4 flex items-center justify-center text-white font-bold uppercase text-xs">
                  out of stock
                </span>
              )}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border border-y-gray-300">
                {getProductImage(product)}
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <h4 className="mt-4 text-xs text-gray-700">{product.brand}</h4>
              <p className="mt-1 text-lg font-medium text-gray-700">
                NOK {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listings;
