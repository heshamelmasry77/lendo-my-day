function AddToCartButton({ isEnabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 
                  ${
                    !isEnabled
                      ? "bg-gray-300 cursor-not-allowed text-gray-600 hover:bg-gray-300 focus:ring-gray-500"
                      : "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
                  }`}
      disabled={!isEnabled}
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
