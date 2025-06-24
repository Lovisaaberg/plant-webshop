import { Link } from "react-router-dom"
import House from "/icons/house.svg"

export const NavigationRow = ({links}) => {
  return (
    <div className="w-full flex justify-start ml-25 mt-6 mb-10">
      <Link to="/">
        <img src={House} alt="Home icon" className="pr-1 w-6 h-6"/>
      </Link>
      {links.map((link, index) => (
        <Link to={link.to} key={index}>
          <p>  
            /{link.text}
          </p>
        </Link>              
      ))}
    </div>
  )
}
