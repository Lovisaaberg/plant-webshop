import { appContentStore } from "../stores/appContentStore";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { loadStripe } from "@stripe/stripe-js";

export const CheckoutPage = () => {
  const cart = appContentStore((state) => state.cart);
  const totalPrice = appContentStore((state) => state.totalPrice());
  const { clearCart } = appContentStore();
  const { removeFromCart } = appContentStore();
  const { addToCart } = appContentStore();

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
      <Button
        text="Checkout"
        func={handleCheckout}
        disabled={cart.length === 0}
      />
      <Footer />
    </div>
  );
};
