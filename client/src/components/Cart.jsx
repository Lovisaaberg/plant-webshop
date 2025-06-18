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
    <div className="container mx-auto flex flex-col gap-4 w-full">
      {cart.map((item) => (
        <div key={item.id} className="flex gap-2 items-center">
          <img
            className="w-20 h-25 object-cover"
            src={item.image}
            alt={item.name}
          />
          <div className="flex flex-col gap-1 items-start">
            <h2 className="font-semibold">{item.name}</h2>
            <p>{item.price * item.quantity}kr</p>
            <QuantitySelector
              startQuantity={item.quantity}
              handler={(e) => handleQuantityChange(e, item)}
              styleLabel="gap-2"
              styleText="text-base"
              styleBox="h-9"
            />
          </div>
          <button onClick={() => removeFromCart(item.id)}>
            <img src="icons/remove-icon.svg" alt="Remove items" />
          </button>
        </div>
      ))}
      <p>Order total: {totalPrice}kr</p>
    </div>
  )
}
