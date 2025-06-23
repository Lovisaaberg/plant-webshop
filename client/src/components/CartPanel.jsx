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
        w-full
        md:w-120
        lg:w-150 
        transition-[right] 
        duration-700 
        ease-in-out
        overflow-y-scroll
        flex
        flex-col
        items-center
      `}
    >
      <div className="flex items-center justify-between py-10 w-full md:w-90 lg:w-120">
        <div className="w-18 md:w-0"></div>
        <h2 className="font-medium md:font-bold text-xl md:text-3xl lg:text-[40px]">SHOPPING CART</h2>
        <button onClick={onClose} className="w-8 h-8 md:w-12 md:h-12 mr-10 md:mr-0">
          <img src={Cross} alt="Close-symbol" />
        </button>
      </div>
      <div className="md:px-15">
        <Cart />
      </div>
      <Link to="/checkout">
        <Button
          text="Go to checkout"
          className="
            w-65
            md:w-90
            lg:w-120
            h-15 
            bg-[#2C7E62] 
            text-white 
            rounded-[10px] 
            shadow-md 
            mx-15
            mt-[24px]
            md:mt-0
            self-center
            hover:bg-[#00583A]
            font-quicksand
            font-bold
            text-xl
            "
        />
      </Link>
      <button
        className="
          text-lg 
          font-light 
          mt-1 
          mb-10 
          w-65
          md:w-90
          lg:w-120
          "
        onClick={onClose}
      >
        Continue shopping
      </button>
    </div>
  )
}
