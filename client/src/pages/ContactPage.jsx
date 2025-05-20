import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Button } from "../components/Button"

export const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert("Form submitted")
        }}
      >
        <label>
          Name:
          <input type="text" name="name" required />
        </label>  
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <Button text="Submit" func={() => alert("Form submitted!")} />
      </form>
      <Footer />
    </div>
  )
}
