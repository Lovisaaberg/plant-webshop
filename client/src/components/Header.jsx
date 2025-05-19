import { Link } from "react-router-dom"
import { appContentStore } from "../stores/appContentStore"
import { Menu } from "./Menu"

export const Header = () => {
  const numberOfItems = appContentStore((state) => state.numberOfItems())

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Link to="/">
      <h1>LÖV</h1>
      </Link>
      <Menu />
      <Link to="/checkout">
        <p>{numberOfItems}</p>
        <img src="icons/shopping-cart-empty.png" alt="" />
      </Link>
    </div>
  )
}
