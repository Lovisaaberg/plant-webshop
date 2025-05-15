import { useParams, Link } from "react-router-dom"
import { products } from "../productData"

export const ProductPage = () => {
  const { id } = useParams()
  const product = products.find((product) => product.id === Number(id))
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <div>
        <img
          src={product.image}
          alt="Product Image"
          style={{ height: "200px" }}
        />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </div>
  )
}
