function QuantitySelector({
  selectedVariant,
  selectedQuantity,
  onQuantityChange
}) {
  const parsedSelectedVariant = selectedVariant
    ? JSON.parse(selectedVariant)
    : null;

  return (
    <div>
      <label
        htmlFor="quantity"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Select Quantity
      </label>
      <select
        disabled={!parsedSelectedVariant}
        id="quantity"
        name="quantity"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
        onChange={(e) => onQuantityChange(e.target.value)}
        value={selectedQuantity || "Select Quantity"}
      >
        <option value="Select Quantity" disabled>
          Select Quantity
        </option>
        {parsedSelectedVariant &&
          Array.from({ length: parsedSelectedVariant.quantity }).map(
            (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            )
          )}
      </select>
    </div>
  );
}

export default QuantitySelector;
