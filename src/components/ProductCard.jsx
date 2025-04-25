
export const ProductCard = () => {
  return (
    <div>
      ProductTitle
      <img
        src="https://images.unsplash.com/photo-1726591383648-5b5cbe1da1a2?q=80&w=2300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Product Image"
        style={{ height: "80px" }}
      />
      <p>Product Description</p>
      <p>$99.99</p>
      <button>Add to Cart</button>
      <button>View Details</button>
    </div>
  )
}
