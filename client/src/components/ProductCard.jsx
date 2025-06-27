import { Link } from "react-router-dom"
import { useState } from "react"
import { appContentStore } from "../stores/appContentStore"
import { favoriteContentStore } from "../stores/favoritesContentStore"
import { Button } from "./Button"

export const ProductCard = ({ product, className = "" }) => {
  const { addToCart } = appContentStore()
  const [isAnimating, setIsAnimating] = useState(false)

  const favorites = favoriteContentStore((state) => state.favorites)
  const toggleFavorite = favoriteContentStore((state) => state.toggleFavorite)

  if (!product) return null

  const isFavorite = favorites.includes(product.id)

  const handleClick = () => {
    setIsAnimating(true)
    addToCart(product)
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <div
      className={`
    flex 
    flex-col 
    mx-auto
    w-[120px]
    md:w-[200px]
    lg:w-[260px]
    ${className}
    `}
    >
      <Link
        to={`/product/${product.id}`}
        className="flex 
        flex-col 
        items-start 
        hover:underline"
      >
        <img
          src={product.image}
          alt="Product Image"
          className="
          product-image
          w-full
          h-[180px] 
          object-cover
          md:h-[300px]
          lg:h-[350px]"
        />
        <div
          className="
        h-[60px] 
        flex 
        flex-col 
        justify-between 
        mt-[12px] 
        mb-[16px]"
        >
          <p
            className="
          text-left 
          font-semibold 
          text-[18px]
          md:text-[20px]
          break-words"
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
        text-[18px]
        lg:text-[20px]
        mt-2"
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
          <Button func={() => toggleFavorite(product.id)}>
            <img
              src={
                isFavorite
                  ? "/icons/heart-icon-green.png"
                  : "/icons/heart-mobile-menu.png"
              }
              alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
              className="
              w-[30px] 
              h-[30px] 
              lg:w-[30px] 
              lg:h-[30px] 
              cursor-pointer"
            />
          </Button>
          <Button func={handleClick} className="p-2">
            <img
              src="/icons/shopping-cart-plus.svg"
              alt="Add to shopping cart"
              className={`
                w-[30px] 
                h-[30px] 
                ml-[8px] 
                cursor-pointer 
                transition 
                duration-300 
                ${isAnimating ? "scale-125" : "scale-100"}
              `}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
