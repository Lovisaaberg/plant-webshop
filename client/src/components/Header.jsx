import { Link } from "react-router-dom"
import { appContentStore } from "../stores/appContentStore"
import { Menu } from "./Menu"
import { CartPanel } from "./CartPanel"

export const Header = () => {
  const numberOfItems = appContentStore((state) => state.numberOfItems())
  const isPanelOpen = appContentStore((state) => state.slideInCartIsOpen)
  const setIsPanelOpen = appContentStore((state) => state.setSlideInCartIsOpen)

  const openPanel = () => {
    setIsPanelOpen(true)
  }

  const closePanel = () => {
    setIsPanelOpen(false)
  }

  return (
    <header className="w-full">
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
      <div className="mx-auto flex items-center justify-between h-[106px] pt-[50px] px-[16px] pb-[20px]">
        <Link to="/">
          <div className="logo-font text-[64px] font-extralight">LÖV.</div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex ">
          <Menu />
        </nav>

        <div className="flex items-center gap-4 order-last">
          <button className="ml-4 flex items-center gap-2" onClick={openPanel}>
            <div className="
              bg-[#2C7E62] 
              text-white 
              rounded-full 
              w-6 
              h-6 
              flex 
              items-center 
              justify-center 
              relative
              left-16
              bottom-5
              "
              >
              <p className="font-quicksand text-xl">{numberOfItems}</p>
            </div>
            <img src="/icons/shopping-cart-empty.png" alt="Shopping cart" />
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
