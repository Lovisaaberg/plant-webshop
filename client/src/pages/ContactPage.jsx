import emailjs from "@emailjs/browser"
import { useState } from "react"
import { NavigationRow } from "../components/NavigationRow"
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
    <>
      <NavigationRow links={[{ text: "Contact", to: "/contact" }]} />
      <div className="container flex flex-col items-center justify-center gap-4 lg:gap-7 p-4 md:w-150 lg:w-230 mx-auto">
        <div className="w-3xs md:w-100 lg:w-140 flex flex-col items-center justify-center gap-2 md:gap-0">
          <h2 className="text-[28px] md:text-[40px] font-semibold md:font-bold mb-2 md:mb-5">
            Contact
          </h2>
          <p className="text-lg md:text-xl whitespace-normal font-light">
            Whether you have questions about plant care, need help with your
            order, or just want to know more about our products - we'd love to
            hear from you.
          </p>
          <p className="text-lg md:text-xl font-light">
            Fill in the form, and we'll get back to you as soon as we can.
          </p>
        </div>
        <div className="flex gap-1 lg:gap-4 w-78 md:w-150 lg:w-230 justify-center items-center">
          <img
            className="max-w-1/3 h-75 object-cover"
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
        <form className="w-3xs md:w-100 lg:w-140 flex flex-col gap-4 text-xl text-left">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
            <label className="flex flex-col gap-2 lg:w-1/2">
              Name
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border border-gray-700"
              />
            </label>
            <label className="flex flex-col gap-2 lg:w-1/2">
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

          <Button
            text="Send message"
            func={handleSubmit}
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
          {formSubmitted && (
            <p>Thank you for your message! We'll get back to you soon.</p>
          )}
        </form>
      </div>
    </>
  )
}
