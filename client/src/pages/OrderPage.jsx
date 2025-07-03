import Lottie from "lottie-react"
import successAnimation from "../animations/success.json"
import cancelAnimation from "../animations/cancel.json"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { appContentStore } from "../stores/appContentStore"
import { Link } from "react-router-dom"

export const OrderPage = () => {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [sessionData, setSessionData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchSession = async (sessionId) => {
    if (!sessionId) return

    try {
      const res = await fetch(
        `https://plants-webshop.onrender.com/api/stripe/checkout-session?sessionId=${sessionId}`
      )
      if (!res.ok) throw new Error("Could not fetch session")

      const data = await res.json()
      setSessionData(data)
    } catch (err) {
      console.error("Error with fetching Stripe-session:", err)
      setError("Something went wrong while fetching your order.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSession(sessionId)
  }, [sessionId])

  useEffect(() => {
    if (sessionData && sessionData.payment_status === "paid") {
      appContentStore.setState({ cart: [] })
    }
  }, [sessionData])

  return (
    <>
      <div>
        {loading ? (
          <></>
        ) : error ? (
          <p className="text-red-600 text-center mt-10">{error}</p>
        ) : sessionData && sessionData.payment_status === "paid" ? (
          <>
            <div className="w-80 h-80 mx-auto mt-10">
              <Lottie animationData={successAnimation} loop={false} />
            </div>
            <h2 className="text-3xl font-bold text-center mt-4">
              Thank you for your order!
            </h2>
            <ul>
              {sessionData.line_items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center border-b border-gray-300 py-2 px-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.price.product.images[0]}
                      alt={item.price.product.name}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.price.product.name}
                      </h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">
                    {(item.price.unit_amount / 100) * item.quantity} SEK
                  </p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="h-[500px] flex flex-col items-center justify-center">
            <div className="w-80 h-80 mx-auto mt-10">
              <Lottie animationData={cancelAnimation} loop={false} />
            </div>
            <h2 className="text-3xl font-bold mt-4">
              Your order has been canceled.{" "}
            </h2>
            <Link
              to="/"
              className="flex items-center gap-2 mt-[16px] text-[18px]"
            >
              Go back to start page <span>►</span>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
