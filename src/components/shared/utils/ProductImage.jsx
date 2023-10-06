import productImgPlaceholder from "../../../assets/images/no-image-placeholder.svg";

function ProductImage({ product }) {
  if (product && product.imageSrc) {
    return (
      <img
        src={product.imageSrc}
        alt={product.imageAlt || "Product Image"}
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

export default ProductImage;
