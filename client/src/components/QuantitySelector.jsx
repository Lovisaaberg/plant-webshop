

export const QuantitySelector = ({ quantity, handler, className }) => {
  return (
    <label
      htmlFor="quantity-select"
      className={`flex items-center ${className || ""}`}
    >
      <p className="text-lg">Quantity:</p>
      <select
        id="quantity-select"
        value={quantity}
        onChange={handler}
        className="w-15 md:w-10 lg:w-15 h-10 border border-gray-400 text-center"
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
