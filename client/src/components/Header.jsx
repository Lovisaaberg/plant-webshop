import { Link } from "react-router-dom"
import { appContentStore } from "../stores/appContentStore"
import { Menu } from "./Menu"

export const Header = () => {
  const numberOfItems = appContentStore((state) => state.numberOfItems())

  return (
    <div className="flex flex-row place-content-between items-center">
      <Link to="/">
        <div className="logo-font text-[64px]">LÖV.</div>
      </Link>
      <Menu />
      <Link to="/checkout">
        <p>{numberOfItems}</p>
        <img src="icons/shopping-cart-empty.png" alt="" />
      </Link>
    </div>
  )
}
