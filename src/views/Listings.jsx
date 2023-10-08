import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/modules/listingsSlice.js";
import ProductImage from "../components/shared/utils/ProductImage.jsx";

function Listings() {
  const dispatch = useDispatch();

  // Access the products from the store
  const { products } = useSelector((state) => state.listings);

  // Fetch products when component mounts
  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            // Link to product details
            <Link
              to={`listing/${product.id}`}
              key={product.id}
              className="group relative"
            >
              {/* Display 'out of stock' label if product is not available */}
              {!product.available && (
                <span className="absolute top-0 h-8 bg-red-500 w-fit z-10 rounded-tr-lg right-0 px-4 flex items-center justify-center text-white font-bold uppercase text-xs">
                  out of stock
                </span>
              )}
              {/* Product Image */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border border-y-gray-300">
                <ProductImage product={product} />
              </div>
              {/* Product Name */}
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              {/* Product Brand */}
              <h4 className="mt-4 text-xs text-gray-700">{product.brand}</h4>
              {/* Product Price */}
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
