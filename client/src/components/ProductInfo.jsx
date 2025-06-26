import { useState } from "react"
import { appContentStore } from "../stores/appContentStore"
import { QuantitySelector } from "./QuantitySelector"
import { favoriteContentStore } from "../stores/favoritesContentStore"
import { Button } from "./Button"
import Heart from "/icons/heart-mobile-menu.png"
import Light from "/icons/light-icon.png"
import Water from "/icons/water-icon.png"

export const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const addToCart = appContentStore((state) => state.addToCart)

  const favorites = favoriteContentStore((state) => state.favorites)
  const toggleFavorite = favoriteContentStore((state) => state.toggleFavorite)

  const isFavorite = favorites.includes(product.id)

  const handleToggleFavorite = () => {
    toggleFavorite(product.id)
  }

  const changeQuantity = (event) => {
    const newQuantity = Number(event.target.value)
    setQuantity(newQuantity)
  }

  return (
    <div
      className="
    container 
    flex 
    flex-col 
    md:grid 
    grid-cols-2 
    grid-costume-rows 
    gap-4 
    lg:gap-7 
    items-center 
    justify-center 
    md:items-start 
    p-4 text-left 
    md:w-150 
    lg:w-220 
    mx-auto"
    >
      <div
        className="
      col-start-2 
      w-3xs 
      md:w-65 
      lg:w-100"
      >
        <h2
          className="
        text-2xl 
        lg:text-4xl 
        overflow-hidden 
        font-semibold 
        flex 
        justify-between"
        >
          {product.name}
          <button
            onClick={handleToggleFavorite}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <img
              src={
                isFavorite
                  ? "/icons/heart-icon-green.png"
                  : "/icons/heart-mobile-menu.png"
              }
              alt="Favorite icon"
              className="h-8 cursor-pointer"
            />
          </button>
        </h2>
        <p
          className="
        font-roboto 
        font-light 
        italic 
        text-base 
        lg:text-2xl 
        mt-1"
        >
          {product.latin_name}
        </p>
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="
        w-3xs 
        h-90 
        object-cover 
        lg:w-md 
        md:h-120 
        col-start-1 
        row-start-1 
        row-span-3"
      />
      <div
        className="
      flex 
      flex-col 
      col-start-2 
      w-3xs 
      lg:w-100 
      gap-2"
      >
        <div
          className="
        flex 
        items-center 
        gap-2"
        >
          <img
            src={Light}
            alt="Icon for light preference"
            className="h-[40px]"
          />
          <p className="text-base">
            Light: <br /> {product.light}
          </p>
        </div>
        <div
          className="
        flex 
        items-center 
        gap-2"
        >
          <img src={Water} alt="Icon for water needs" className="h-[40px]" />
          <p className="text-base">
            Water: <br /> {product.water}
          </p>
        </div>
      </div>
      <div
        className="
      w-3xs 
      md:w-65 
      lg:w-100 
      mb-3 
      md:mb-0 
      grid 
      grid-cols-2 
      grid-rows-2 
      md:gap-3 
      md:self-end 
      col-start-2 
      order-1 
      md:order-0"
      >
        <p
          className="
        text-2xl 
        lg:text-3xl 
        font-semibold 
        col-start-1 
        md:col-start-2 
        self-center 
        justifify-self-start 
        md:self-end 
        md:justify-self-end"
        >
          {product.price} kr
        </p>
        <QuantitySelector
          startQuantity={quantity}
          handler={(event) => changeQuantity(event)}
          styleLabel="
          gap-2 
          md:row-start-2 md:justify-self-end md:items-end"
          styleText="text-lg"
          styleBox="h-10"
        />
        <Button
          text="Add to Cart"
          func={() => {
            if (quantity > 0) {
              addToCart(product, quantity)
              setQuantity(1)
            }
          }}
          disabled={quantity === 0}
          className="
          w-3xs
          md:w-30
          lg:w-45
          h-[40px] 
          bg-[#2C7E62] 
          text-white 
          rounded-[10px] 
          shadow-md 
          mt-[24px]
          self-center
          hover:bg-[#00583A]
          disabled:bg-gray-400
          disabled:cursor-not-allowed
          font-quicksand
          md:col-start-2
          row-start-2
          lg:justify-self-end
          lg:self-end
          "
        />
      </div>
      <div
        className="
      w-3xs 
      md:w-135 
      lg:w-215 
      flex 
      flex-col 
      gap-1 
      mt-1 
      col-span-2"
      >
        <h3
          className="
        text-2xl 
        font-bold"
        >
          Plant description
        </h3>
        <p
          className="
        text-lg 
        font-light"
        >
          {product.description}
        </p>
      </div>
    </div>
  )
}
