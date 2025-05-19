import { useParams } from "react-router-dom"
import { products } from "../productData"
import { appContentStore } from "../stores/appContentStore"
import { Button } from "../components/Button"

export const ProductPage = () => {
  const { id } = useParams()
  const product = products.find((product) => product.id === Number(id))

  const { addToCart } = appContentStore()
  const { removeFromCart } = appContentStore()
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <img
        src={product.image}
        alt="Product Image"
        style={{ height: "200px" }}
      />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Button
        text="Add to Cart"
        func={() => addToCart(product)}/>
      <Button
        text="Remove from Cart"
        func={() => removeFromCart(product.id)}/>
    </div>
  )
}
