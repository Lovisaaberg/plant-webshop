import emailjs from "@emailjs/browser"
import { useState } from "react"
import { Button } from "../components/Button"

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.")
      return
    } else {
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, formData, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text)
            console.log("Form submitted:", formData)
            setFormSubmitted(true)
          },
          (err) => {
            console.log("FAILED...", err)
          }
        )
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }
  }

  return (
    <div>
      <h2>Contact</h2>
      <p>
        Whether you have questions about plant care, need help with your order,
        or just want to know more about our products - we'd love to hear from
        you.
      </p>
      <p>Fill in the form, and we'll get back to you as soon as we can.</p>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label>
          Your message
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </label>
        <Button text="Send message" func={handleSubmit} />
        {formSubmitted && (
          <p>Thank you for your message! We'll get back to you soon.</p>
        )}
      </form>
    </div>
  )
}
