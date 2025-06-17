

export const QuantitySelector = ({ startQuantity, handler, styleLabel, styleText, styleBox }) => {
  return (
    <label
      htmlFor="quantity-select"
      className={`flex items-center ${styleLabel || ""}`}
    >
      <p className={`${styleText || ""}`}>Quantity:</p>
      <select
        id="quantity-select"
        value={startQuantity}
        onChange={handler}
        className={`w-15 md:w-10 lg:w-15 border border-gray-400 text-center ${
          styleBox || ""
        }`}
      >
        {[...Array(11).keys()].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </label>
  )
}
