import { HeroSection } from "../components/HeroSection"
import { NewArrivals } from "../components/NewArrivals"
import { SelectedPlants } from "../components/SelectedPlants"
import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"
import { ImageGrid } from "../components/ImageGrid"
import plantCareImage from "../assets/plant-care-image.png"

export const LandingPage = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/plantcare")
  }

  return (
    <>
      <HeroSection />
      <NewArrivals />

      <section
        className="
      mb-[60px]
      mt-[100px] 
      overflow-hidden"
      >
        {/* Mobil */}
        <div
          className="
        sm:hidden 
        flex 
        flex-col 
        w-full 
        h-auto 
        bg-[#E9E2DB]"
        >
          <img
            src={plantCareImage}
            alt="Plant care"
            className="
            w-full 
            h-[300px] 
            object-cover 
            object-center"
          />

          <div
            className="
          p-[30px_30px] 
          text-center 
          flex 
          flex-col 
          items-center"
          >
            <h2
              className="
            text-[28px] 
            font-medium 
            leading-tight"
            >
              Simple Plant Care Tips
            </h2>
            <p
              className="
            text-[16px] 
            mt-[12px] 
            mb-[16px]
            font-light"
            >
              From light levels to watering habits, our plant care tips help you
              create the perfect environment for your greenery to thrive.
            </p>
            <Button
              text="View tips"
              func={handleNavigate}
              className="
              bg-[#D79E00] 
              text-white 
              rounded-[10px] 
              px-6 
              py-3 
              shadow-md 
              hover:bg-[#AE8000] 
              cursor-pointer"
            />
          </div>
        </div>

        {/* Desktop */}
        <div
          className="
        hidden 
        sm:block 
        h-[500px] 
        w-full 
        bg-[#E9E2DB] 
        relative"
        >
          <img
            src={plantCareImage}
            alt="Plant care"
            className="
            absolute 
            left-0 
            top-0 
            h-full 
            w-[400px]
            lg:w-[500px] 
            xl:w-[720px] 
            object-cover 
            object-left 
            z-10"
          />

          <div
            className="
          relative 
          z-20 
          h-full 
          pl-[400px] 
          lg:pl-[500px] 
          xl:pl-[720px] 
          flex 
          items-center 
          justify-end
          "
          >
            <div
              className="
              max-w-[500px] 
              xl:max-w-[600px] 
              p-[30px_60px] 
              text-center
              mx-auto"
            >
              <h2
                className="
              text-[32px] 
              lg:text-[40px] 
              font-medium 
              leading-tight
              mb-[20px]"
              >
                Simple Plant Care Tips
              </h2>
              <p
                className="
              text-[18px] 
              lg:text-[24px] 
              font-light
              mt-[12px] 
              mb-[30px]"
              >
                From light levels to watering habits, our plant care tips help
                you create the perfect environment for your greenery to thrive.
              </p>
              <Button
                text="View tips"
                func={handleNavigate}
                className="
                bg-[#D79E00] 
                text-white 
                rounded-[10px] 
                px-12 
                py-3 shadow-md hover:bg-[#AE8000] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      <SelectedPlants />
      <ImageGrid />
    </>
  )
}
