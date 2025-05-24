import { NavLink } from "react-router-dom"
import { useState } from "react"

export const Menu = ({ handleMenuClick }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuLinks = [
    { label: "Plants", to: "/plants" },
    { label: "Plant care tips", to: "/plantcare" },
    { label: "About Us", to: "/aboutus" },
    { label: "Contact", to: "/contact" },
  ]

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => {
    setMenuOpen(false)
    if (handleMenuClick) handleMenuClick()
  }

  return (
    <nav className="relative">
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none bg-transparent border-none p-0"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          <img
            src="/icons/cross.png"
            alt="Close menu"
            className="w-[36px] h-[36px]"
          />
        ) : (
          <img
            src="/icons/menu.png"
            alt="Open menu"
            className="w-[36px] h-[36px]"
          />
        )}
      </button>

      {/* Menu for desktop */}

      <ul className="hidden md:flex flex-row gap-[60px] justify-center text-2xl">
        {menuLinks.map((link, index) => (
          <li key={`navlink-${index}`}>
            <NavLink
              to={link.to}
              onClick={handleMenuClick}
              className={({ isActive }) =>
                isActive
                  ? "underline text-black inline-block"
                  : "hover:scale-105 transition-transform duration-180 inline-block"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-2xl gap-6">
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6"
            aria-label="Close menu"
          >
            <img src="/icons/cross.png" alt="Close menu" className="w-8 h-8" />
          </button>

          {/* Links */}
          {menuLinks.map((link, index) => (
            <NavLink
              key={`mobile-navlink-${index}`}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "underline text-black block" : " hover:block"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
