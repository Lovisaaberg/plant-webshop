import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"

export const HeroSection = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/product")
  }

  return (
    <div className="relative h-[600px]">
      <img
        src="/src/assets/hero-picture.png"
        alt="Hero image"
        className="w-full object-cover"
      />

      {/* Mobile view */}
      <div
        className="
          absolute 
          top-[180px] 
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
          md:hidden
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
          rounded-[10px] 
          shadow-md 
          mt-[24px]"
        />
      </div>

      {/* Desktop view */}
      <div
        className="
          hidden 
          md:flex 
          flex-col 
          items-start
          absolute 
          top-[100px] 
          left-[60px] 
          max-w-[590px]
          p-0
          text-left
        "
      >
        <h1
          className="
        text-[80px] 
        font-medium 
        leading-tight"
        >
          Plants for every home
        </h1>
        <p
          className="
        mt-[24px] 
        max-w-[440px] 
        text-[24px]"
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
          md:w-[200px] 
          md:h-[60px] 
          md:text-[24px]
          bg-[#D79E00] 
          text-white 
          rounded-[10px] 
          shadow-md 
          mt-[40px]"
        />
      </div>
    </div>
  )
}
