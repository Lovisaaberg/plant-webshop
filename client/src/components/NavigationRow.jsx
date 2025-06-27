import { Link } from "react-router-dom"
import House from "/icons/house.svg"

export const NavigationRow = ({ links }) => {
  return (
    <div className="w-full flex justify-start items-center ml-10 md:ml-25 mt-6 mb-10">
      <Link to="/">
        <img
          src={House}
          alt="Home icon"
          className="pr-1 w-5 h-5 md:w-7 md:h-7"
        />
      </Link>
      {links.map((link, index) => (
        <Link to={link.to} key={index}>
          <p className="font-quicksand font-medium text-base  md:font-normal">
            /{link.text}
          </p>
        </Link>
      ))}
      <p className="font-quicksand font-medium text-base  md:font-normal">/</p>
    </div>
  )
}
