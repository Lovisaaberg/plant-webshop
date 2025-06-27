import { NavigationRow } from "../components/NavigationRow"
import Image1 from "../assets/plantcare-plant1.svg"
import Image2 from "../assets/plantcare-plant2.svg"
import Image3 from "../assets/plantcare-plant3.svg"
import ImageEssentials from "../assets/plantcare-essentials.svg"

export const PlantcarePage = () => {
  return (
    <div>
      <NavigationRow links={[{ text: "Plant care tips", to: "/plantcare" }]} />
      <h2>Simple tips to keep your plants happy</h2>
      <p>
        Not sure where to start with plant care? Here are some easy,
        beginner-friendly tips that work for most houseplants, from watering to
        light and beyond.
      </p>
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-4">
        <img 
          src={Image1} 
          alt="Seedling in hand." 
          className="h-62 lg:h-115 w-50 lg:w-93" />
        <img
          src={Image2}
          alt="Newly planted green plant."
          className="h-62 lg:h-115 w-50 lg:w-93"
        />
        <img
          src={Image3}
          alt="Hands digging with a showel in a pot with a plant."
          className="h-62 lg:h-115 w-50 lg:w-93"
        />
      </div>
      <div 
        className="
        bg-[#E9E2DB] 
          w-full 
          flex 
          flex-col 
          items-start 
          justify-start
          md:grid 
          grid-cols-2 
          grid-rows-8 
          lg:h-164
          lg:pl-11
        ">
        <h3 className="font-semibold text-2xl md:text-[32px] self-end">Essentials for healthy houseplants</h3>
        <div className="flex flex-col items-start justify-start row-start-2 row-span-7 md:h-full">
          <h4 className="font-bold text-lg md:text-xl">Let there be light</h4>
          <p className="text-left">Each plant has its own light preference. Some love a sunny
            windowsill, others prefer a shady corner. Make sure your plant is
            getting the amount of light it needs.
          </p>
          <h4 className="font-bold text-lg md:text-xl">Don't overwater – it's a thing</h4>
          <p className="text-left">Most plants like a good drink, but too much water can do more harm
            than good. Check the top layer of soil – if it's dry, it's probably
            time to water.
          </p>
          <h4 className="font-bold text-lg md:text-xl">Wipe the leaves now and then</h4>
          <p className="text-left">Dusty leaves can't breathe or absorb light properly. Give them a gentle wipe with a damp cloth every couple of weeks.
          </p>
          <h4 className="font-bold text-lg md:text-xl">Turn your plant</h4>
          <p className="text-left">
            Plants tend to grow toward the light. Rotate them now and then to
            keep them growing straight and balanced.
          </p>
          <h4 className="font-bold text-lg md:text-xl">Feed them, but not too often</h4>
          <p className="text-left">
            During the growing season (spring and summer), your plant might
            enjoy some extra nutrients. Use a mild fertilizer once a month
            unless your plant says otherwise.
          </p>
        </div>
        <img 
          src={ImageEssentials} 
          alt="Hands with seedling, seen from above." 
          className="object-cover h-81 lg:h-full w-65 lg:w-full row-span-8"
        />
      </div>
    </div>
  )
}
