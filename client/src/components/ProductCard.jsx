
export const ProductCard = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <img
        src={product.image}
        alt="Product Image"
        style={{ height: "80px" }}
      />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to Cart</button>
      <button>View Details</button>
    </div>
  )
}
