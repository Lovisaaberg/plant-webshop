import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useRef } from "react";
import { appContentStore } from "../stores/appContentStore";
import { Cart } from "./Cart";
import { Button } from "./Button";

export const CartPanel = ({ isOpen, onClose }) => {
  const cart = appContentStore((state) => state.cart);
  const panelRef = useRef();

  const handleCheckout = async () => {
    onClose();
    const response = await fetch(
      "http://localhost:3000/api/stripe/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cart }),
      }
    );

    const session = await response.json();

    const stripe = await loadStripe(
      "pk_test_51RQ74HPTeALF4muskKk4SWJ7tHeeQthYvn68413CMFWtf21Fp9Nwc7y1TOMwZE3wvZrR4nouai1XTYBwNhAaffl200TiEo2T5z"
    );

    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

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
        <h2 className="font-medium md:font-bold text-xl md:text-3xl lg:text-[40px]">
          SHOPPING CART
        </h2>
        <button
          onClick={onClose}
          className="w-8 h-8 md:w-12 md:h-12 mr-10 md:mr-0"
        >
          <img src="/icons/cross.svg" alt="Close-symbol" />
        </button>
      </div>
      <div className="md:px-15">
        <Cart />
      </div>
      <Button
        func={handleCheckout}
        disabled={cart.length === 0}
        text="Go to checkout"
        className="
          w-65
          md:w-90
          lg:w-120
          h-10
          md:h-12
          lg:h-15 
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
          lg:text-2xl
          lg:py-2
          "
      />
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
  );
};
