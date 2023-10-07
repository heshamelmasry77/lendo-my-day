function VariantsSelector({ options, selectedVariant, onVariantChange }) {
  return (
    <div>
      <label
        htmlFor="variant"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Select Variant
      </label>
      <select
        id="variant"
        name="variant"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
        onChange={(e) => onVariantChange(JSON.parse(e.target.value))}
        value={selectedVariant || "Select Variant"}
      >
        <option value="Select Variant" disabled>
          Select Variant
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={JSON.stringify(option)}
            disabled={option.quantity <= 0}
          >
            {option.color && `${option.color} `}
            {option.power && `${option.power} `}
            {option.storage && ` ${option.storage} `}
          </option>
        ))}
      </select>
    </div>
  );
}
export default VariantsSelector;
