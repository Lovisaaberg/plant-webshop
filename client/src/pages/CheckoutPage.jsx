import { loadStripe } from "@stripe/stripe-js"
import { appContentStore } from "../stores/appContentStore"
import { Cart } from "../components/Cart"
import { Button } from "../components/Button"

export const CheckoutPage = () => {
  const cart = appContentStore((state) => state.cart)

  const handleCheckout = async () => {
    const response = await fetch(
      "http://localhost:3000/api/stripe/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cart }),
      }
    )

    const session = await response.json()

    const stripe = await loadStripe(
      "pk_test_51RQ74HPTeALF4muskKk4SWJ7tHeeQthYvn68413CMFWtf21Fp9Nwc7y1TOMwZE3wvZrR4nouai1XTYBwNhAaffl200TiEo2T5z"
    )

    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    })

    if (error) {
      console.error("Error:", error)
    }
    console.log(response)
  }

  return (
    <div>
      <h1>Shopping cart</h1>
      <Cart />
      <Button
        text="Go to checkout"
        func={handleCheckout}
        disabled={cart.length === 0}
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
    </div>
  )
}
