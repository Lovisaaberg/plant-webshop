import { appContentStore } from "../stores/appContentStore"
import { QuantitySelector } from "./QuantitySelector"

export const Cart = () => {
  const cart = appContentStore((state) => state.cart)
  const totalPrice = appContentStore((state) => state.totalPrice())
  const { removeFromCart } = appContentStore()
  const { changeQuantityInCart } = appContentStore()

  const handleQuantityChange = (event, item) => {
    event.preventDefault()
    const newQuantity = Number(event.target.value)
    if (newQuantity <= 0) {
      removeFromCart(item.id)
    } else {
      changeQuantityInCart(item, newQuantity)
    }
  }

  return (
    <div className="container mx-auto px-10 md:px-0 flex flex-col gap-4 w-full">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex gap-2 items-center justify-start w-full md:w-90 lg:w-120"
        >
          <img
            className="w-20 md:w-25 lg:w-30 h-25 md:h-35 lg:h-45 object-cover"
            src={item.image}
            alt={item.name}
          />
          <div className="flex flex-col gap-1 items-start justify-between w-65 lg:w-75 h-25 md:h-35 lg:h-45">
            <div className="flex flex-col gap-1 items-start">
              <h2 className="font-semibold text-base md:text-lg">
                {item.name}
              </h2>
              <p className="text-base">{item.price * item.quantity}kr</p>
            </div>
            <QuantitySelector
              startQuantity={item.quantity}
              handler={(e) => handleQuantityChange(e, item)}
              styleLabel="gap-2"
              styleText="text-lg"
              styleBox="h-9"
            />
          </div>
          <button onClick={() => removeFromCart(item.id)}>
            <img
              src="/icons/remove-icon.svg"
              alt="Remove items"
              className="h-8 md:h-10"
            />
          </button>
        </div>
      ))}
      <div className="flex justify-between md:w-90 lg:w-120 my-5">
        <p className="font-semibold text-xl">Order total:</p>
        <p className="text-2xl">{totalPrice}kr</p>
      </div>
    </div>
  )
}
