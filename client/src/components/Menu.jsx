import { NavLink } from "react-router-dom"

export const Menu = ({ handleMenuClick }) => {
  const menuLinks = [
    { label: "Plants", to: "/plants" },
    { label: "Plant care tips", to: "/plantcare" },
    { label: "About Us", to: "/aboutus" },
    { label: "Contact", to: "/contact" },
  ]

  return (
    <div>
      <ul className="flex flex-row gap-[60px] justify-center text-2xl">
        {menuLinks.map((link, index) => (
          <li key={`navlink-${index}`}>
            <NavLink
              to={link.to}
              onClick={handleMenuClick}
              className={({ isActive }) =>
                isActive
                  ? "underline text-black inline-block"
                  : "text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform duration-180 inline-block"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
