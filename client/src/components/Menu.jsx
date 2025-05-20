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
      <ul style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {menuLinks.map((link, index) => (
          <li key={`navlink-${index}`}>
            <NavLink to={link.to} onClick={handleMenuClick}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
