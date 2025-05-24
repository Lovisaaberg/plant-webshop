import { Link } from "react-router-dom"
import { appContentStore } from "../stores/appContentStore"
import { Menu } from "./Menu"

export const Header = () => {
  const numberOfItems = appContentStore((state) => state.numberOfItems())

  return (
    <div className="flex items-center justify-between w-full">
      <Link to="/">
        <div className="logo-font text-[64px]">LÖV.</div>
      </Link>

      {/* Desktop menu */}
      <nav className="hidden md:flex">
        <Menu />
      </nav>

      <div className="flex items-center gap-4 md:hidden order-last">
        <Link to="/checkout" className="ml-4 flex items-center gap-2">
          <p>{numberOfItems}</p>
          <img src="icons/shopping-cart-empty.png" alt="Shopping cart" />
        </Link>

        {/* Mobile menu */}
        <div className="md:hidden order-last">
          <Menu />
        </div>
      </div>
    </div>
  )
}
