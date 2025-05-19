import { Link } from "react-router-dom"
import { appContentStore } from "../stores/appContentStore"
import { Button } from "./Button"

export const ProductCard = ({ product }) => {
  const { addToCart } = appContentStore()

  return (
    <div>
      <Link to={`product/${product.id}`}>
        <p>{product.name}</p>
        <img
          src={product.image}
          alt="Product Image"
          style={{ height: "80px" }}
        />
        <p>{product.description}</p>
        <p>{product.price}</p>
      </Link>
      <Button
        text="Add to Cart"
        func={() => addToCart(product)}/>
      <Link to={`product/${product.id}`}>
        <Button text="View details"/>
      </Link>
    </div>
  )
}
