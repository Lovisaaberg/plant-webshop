import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { appContentStore } from "../stores/appContentStore"
import { favoriteContentStore } from "../stores/favoritesContentStore"
import { Menu } from "./Menu"
import { CartPanel } from "./CartPanel"
import React from "react"

export const Header = () => {
  const navigate = useNavigate()
  const numberOfItems = appContentStore((state) => state.numberOfItems())
  const [animateHeart, setAnimateHeart] = useState(false)

  const favorites = favoriteContentStore((state) => state.favorites)

  const previousLength = useRef(favorites.length)

  useEffect(() => {
    if (favorites.length > previousLength.current) {
      setAnimateHeart(true)
      setTimeout(() => setAnimateHeart(false), 300)
    }
    previousLength.current = favorites.length
  }, [favorites.length])

  const isPanelOpen = appContentStore((state) => state.slideInCartIsOpen)
  const setIsPanelOpen = appContentStore((state) => state.setSlideInCartIsOpen)

  const openPanel = () => {
    setIsPanelOpen(true)
  }

  const closePanel = () => {
    setIsPanelOpen(false)
  }

  const goToFavorites = () => {
    navigate("/favorites")
  }

  return (
    <header
      className="
    w-full
    fixed
    top-0
    z-50
    bg-white
    max-w-[1440px]"
    >
      <div
        className={`
        w-screen 
        h-screen
        hidden 
        md:block
        fixed 
        z-40
        bg-black/50 
        transition-opacity 
        duration-700 
        ease-in-out 
        ${isPanelOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      ></div>
      <div
        className="
      mx-auto 
      flex 
      items-center 
      justify-between 
      h-[106px] 
      pt-[50px] 
      px-[16px] 
      pb-[20px]"
      >
        <Link to="/">
          <div className="logo-font text-[64px] font-extralight">LÖV.</div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex ">
          <Menu />
        </nav>

        <div className="flex items-center order-last">
          <button
            onClick={goToFavorites}
            className="relative"
            aria-label="Favorites"
          >
            <img
              src={
                favorites.length > 0
                  ? "/icons/heart-icon-green.png"
                  : "/icons/heart-icon.png"
              }
              alt="Favorite hearts"
              className={`
            w-[36px]
            h-[36px]
            cursor-pointer ${animateHeart ? "scale-125" : ""}`}
            />
          </button>

          <button
            className="mr-[20px] flex items-center gap-2"
            onClick={openPanel}
          >
            <div
              className="
              bg-[#2C7E62] 
              text-white 
              rounded-full 
              w-5 
              h-5 
              flex 
              items-center 
              justify-center 
              relative
              left-13
              bottom-4
              "
            >
              <p className="font-quicksand text-l">{numberOfItems}</p>
            </div>
            <img
              src="/icons/shopping-cart-empty.png"
              alt="Shopping cart"
              className="w-[36px] h-[36px] cursor-pointer"
            />
          </button>

          {/* Mobile menu */}
          <div className="md:hidden order-last">
            <Menu />
          </div>
        </div>
      </div>
      <CartPanel isOpen={isPanelOpen} onClose={closePanel} />
    </header>
  )
}
