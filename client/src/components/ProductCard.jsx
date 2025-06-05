import { Link } from "react-router-dom"
import { appContentStore } from "../stores/appContentStore"
import { Button } from "./Button"

export const ProductCard = ({ product }) => {
  const { addToCart } = appContentStore()

  return (
    <div
      className="
    flex 
    flex-col 
    w-[120px]
    md:w-[225px]
    lg:w-[260px]"
    >
      <Link to={`product/${product.id}`} className="flex flex-col items-start">
        <img
          src={product.image}
          alt="Product Image"
          className="
          w-[120px] 
          h-[180px] 
          object-cover
          md:w-[225px] 
          md:h-[300px]
          lg:w-[260px] 
          lg:h-[350px]"
        />
        <div className="h-[120px] flex flex-col justify-between mt-[12px] mb-[16px]">
          <p
            className="
          text-left 
          font-semibold 
          text-[18px]
          md:text-[24px]"
          >
            {product.name}
          </p>
        </div>
      </Link>

      <div
        className="
      lg:flex 
      lg:justify-between
      "
      >
        <p
          className="
        text-left 
        text-[20px]
        lg:text-[24px]"
        >
          {product.price} kr
        </p>

        <div
          className="
        flex 
        mb-[60px]
        mt-[16px]
        lg:mt-0"
        >
          <Button>
            <img
              src="/icons/heart-mobile-menu.png"
              alt="Add to favorites"
              className="
              w-[30px] 
              h-[30px] 
              lg:w-[36px] 
              lg:h-[36px] 
              cursor-pointer
              "
            />
          </Button>

          <Button func={() => addToCart(product)}>
            <img
              src="/icons/shopping-cart-plus.png"
              alt="Add to shopping cart"
              className="
              w-[30px] 
              h-[30px] 
              lg:w-[36px] 
              lg:h-[36px] 
              ml-[8px] 
              cursor-pointer"
            />
          </Button>
          <Link to={`product/${product.id}`}></Link>
        </div>
      </div>
    </div>
  )
}
