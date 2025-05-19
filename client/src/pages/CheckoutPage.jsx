import { appContentStore } from '../stores/appContentStore'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Button } from '../components/Button'

export const CheckoutPage = () => {
  const cart = appContentStore(state => state.cart)
  const totalPrice = appContentStore(state => state.totalPrice())
  const {clearCart} = appContentStore()
  const {removeFromCart} = appContentStore()
  const {addToCart} = appContentStore()

  return (
    <div>
      <Header />
      <h1>Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Price: {item.price} kr</p>
            <Button text="-" func={() => removeFromCart(item.id)} />
            <p>Quantity: {item.quantity}</p>
            <Button text="+" func={() => addToCart(item)} />
            <p>Total: {item.price * item.quantity} kr</p>
          </li>
        ))}
      </ul>
      <p>Total price: {totalPrice} kr</p>
      <Button text="Clear cart" func={clearCart} />
      <Button text="Checkout" func={() => alert('Checkout not implemented yet')} />
      <Footer />
    </div>
  )
}
