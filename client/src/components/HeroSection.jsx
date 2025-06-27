import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"

export const HeroSection = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/products")
  }

  return (
    <div className="relative h-[600px] w-screen">
      <img
        src="/images/hero-picture.png"
        alt="Hero image"
        className="
        w-full
        h-[400px] 
        sm:h-full 
        max-w-[1440px]
        max-h-[600px] 
        object-cover
        object-[90%_top]
        md:object-center"
      />

      {/* Mobile view */}
      <div
        className="
          absolute 
          top-[240px] 
          left-1/2 
          transform 
          -translate-x-1/2
          w-[300px] 
          h-[350px] 
          bg-[#E9E2DB] 
          p-[30px_12px_30px_12px]
          flex 
          flex-col 
          items-center
          sm:hidden
        "
      >
        <h1
          className="
        text-[40px] 
        font-medium 
        leading-tight 
        text-center"
        >
          Plants for every home
        </h1>

        <p
          className="
          text-[18px]
          mt-[12px] 
          text-center"
        >
          Carefully selected plants for every corner of your home. Easy to care
          for. Beautiful to live with. Delivered to your door.
        </p>

        <Button
          text="Shop plants"
          func={handleNavigate}
          className="
          w-[180px] 
          h-[40px] 
          bg-[#D79E00] 
          text-white 
          rounded-[50px] 
          shadow-md 
          mt-[24px]"
        />
      </div>

      {/* Desktop view */}
      <div
        className="
          hidden 
          sm:flex 
          flex-col 
          items-start
          absolute 
          top-[80px] 
          left-[60px] 
          max-w-[590px]
          p-0
          text-left
        "
      >
        <h1
          className="
        sm:text-[60px]
        lg:text-[80px] 
        font-medium 
        leading-tight"
        >
          Plants for every home
        </h1>
        <p
          className="
        mt-[24px] 
        max-w-[440px] 
        sm:text-[20px]
        md:text-[24px]"
        >
          Carefully selected plants for every corner of your home. Easy to care
          for. Beautiful to live with. Delivered to your door.
        </p>
        <Button
          text="Shop plants"
          func={handleNavigate}
          className="
          w-[180px] 
          h-[40px] 
          md:w-[180px] 
          md:h-[50px] 
          md:text-[18px]
          bg-[#D79E00] 
          text-white 
          rounded-[50px] 
          shadow-md 
          hover:bg-[#AE8000]
          cursor-pointer
          mt-[40px]"
        />
      </div>
    </div>
  )
}
