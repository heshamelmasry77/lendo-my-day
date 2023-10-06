import VariantsSelector from "./VariantsSelector.jsx";

function QuantitySelector({
  selectedVariant,
  selectedQuantity,
  onQuantityChange
}) {
  return (
    <div>
      <label
        htmlFor="quantity"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Select Quantity
      </label>
      <select
        disabled={!selectedVariant}
        id="quantity"
        name="quantity"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
        onChange={(e) => onQuantityChange(JSON.parse(e.target.value))}
        value={selectedQuantity}
      >
        <option value="Select Quantity" disabled>
          Select Quantity
        </option>
        {selectedVariant &&
          Array.from({ length: selectedVariant.quantity }).map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
      </select>
    </div>
  );
}

export default QuantitySelector;
