import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { Cart } from "./Cart"
import { Button } from "./Button"
import Cross from "/icons/cross.png"

export const CartPanel = ({ isOpen, onClose }) => {
  const panelRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <div
      ref={panelRef}
      className={`
        fixed 
        z-50 
        top-0 
        bg-[#ffffff] 
        ${isOpen ? "right-0" : "right-[-100%]"} 
        h-full 
        w-150 
        transition-[right] 
        duration-700 
        ease-in-out
      `}
    >
      <div className="flex items-center justify-around py-10 w-full">
        <div></div>
        <h2 className="font-bold text-[40px]">SHOPPING CART</h2>
        <button onClick={onClose}>
          <img src={Cross} alt="Close-symbol" />
        </button>
      </div>
      <div className="px-15">
        <Cart />
      </div>
      <Link to="/checkout">
        <Button
          text="Go to checkout"
          className="
            w-3xs
            md:w-60
            h-15 
            bg-[#2C7E62] 
            text-white 
            rounded-[10px] 
            shadow-md 
            mt-[24px]
            md:mt-0
            self-center
            hover:bg-[#00583A]
            font-quicksand
            md:col-start-2
            row-start-2
            lg:justify-self-end
            lg:self-start
            "
        />
      </Link>
    </div>
  )
}
