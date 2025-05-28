import { Link } from "react-router-dom"
import { appContentStore } from "../stores/appContentStore"
import { Button } from "./Button"

export const ProductCard = ({ product }) => {
  const { addToCart } = appContentStore()

  return (
    <div className="flex flex-col items-center gap-4 ">
      <Link to={`product/${product.id}`} className="flex flex-col items-start">
        <img
          src={product.image}
          alt="Product Image"
          className="w-[120px] h-[180px] object-cover"
        />
        <p>{product.name}</p>
        <p>{product.price}</p>
      </Link>

      <div className="flex gap-2 ml-auto">
        <Button>
          <img
            src="/icons/heart-mobile-menu.png"
            alt="Add to favorites"
            className="w-8 h-8"
          />
        </Button>

        <Button func={() => addToCart(product)}>
          <img
            src="/icons/shopping-cart-plus.png"
            alt="Add to shopping cart"
            className="w-8 h-8"
          />
        </Button>
        <Link to={`product/${product.id}`}></Link>
      </div>
    </div>
  )
}
