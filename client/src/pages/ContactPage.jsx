import emailjs from "@emailjs/browser"
import { useState } from "react"
import { Button } from "../components/Button"
import plant1 from "../assets/contact-1.png"
import plant2 from "../assets/contact-2.png"
import plant3 from "../assets/contact-3.png"

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
    <div className="flex flex-col gap-8 items-center justify-center p-4">
      <div className="max-w-xs lg:max-w-3xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-3xl">Contact</h2>
        <p className="text-base">
          Whether you have questions about plant care, need help with your
          order, or just want to know more about our products - we'd love to
          hear from you.
        </p>
        <p className="text-base">
          Fill in the form, and we'll get back to you as soon as we can.
        </p>
      </div>
      <div className="container mx-auto flex gap-4">
        <img
          className="max-w-1/3 h-[300px] object-cover"
          src={plant1}
          alt="Green plant with white background"
        />
        <img
          className="max-w-1/3 h-[300px] object-cover"
          src={plant2}
          alt="Green plant with white background"
        />
        <img
          className="max-w-1/3 h-[300px] object-cover"
          src={plant3}
          alt="Green plant with white background"
        />
      </div>
      <form className="max-w-xs lg:max-w-3xl mx-auto flex flex-col gap-4 text-xl text-left">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
          <label className="flex flex-col gap-2">
            Name
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border border-gray-700"
              />
          </label>
          <label className="flex flex-col gap-2">
            E-mail
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border border-gray-700"
              />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          Your message
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="border border-gray-700"
            rows="5"
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
