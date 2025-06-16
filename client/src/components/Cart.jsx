import { appContentStore } from "../stores/appContentStore"
import { QuantitySelector } from "./QuantitySelector"
import { Button } from "./Button"

export const Cart = () => {
  const cart = appContentStore((state) => state.cart)
  const totalPrice = appContentStore((state) => state.totalPrice())
  const { clearCart } = appContentStore()
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
    <div className="container mx-auto flex flex-col gap-4 w-75">
      {cart.map((item) => (
        <div key={item.id} className="flex gap-2 items-center">
          <img
            className="w-20 h-25 object-cover"
            src={item.image}
            alt={item.name}
          />
          <div>
            <h2>{item.name}</h2>
            <p>{item.price * item.quantity}kr</p>
            <QuantitySelector
              quantity={item.quantity}
              handler={(e) => handleQuantityChange(e, item)}
              className="gap-2 md:row-start-2 md:justify-self-end md:items-end"
            />
          </div>
          <button onClick={() => removeFromCart(item.id)}><img src="icons/remove-icon.svg" alt="Remove items" /></button>
        </div>
      ))}
      <p>Order total: {totalPrice}kr</p>
      <Button text="Clear cart" func={clearCart} />
      Cart
    </div>
  )
}
