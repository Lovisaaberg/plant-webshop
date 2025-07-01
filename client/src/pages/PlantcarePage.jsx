import { NavigationRow } from "../components/NavigationRow"
import Image1 from "../assets/plantcare-plant1.svg"
import Image2 from "../assets/plantcare-plant2.svg"
import Image3 from "../assets/plantcare-plant3.svg"
import ImageEssentials from "../assets/plantcare-essentials.svg"
import ImageHelp from "../assets/plantcare-help.svg"
import ImageLowlight from "../assets/plantcare-lowlight.svg"

export const PlantcarePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <NavigationRow links={[{ text: "Plant care tips", to: "/plantcare" }]} />
      <div className="flex flex-col items-center gap-50">
        <div className="flex flex-col items-center justify-center gap-10 lg:w-220">
          <h2 className="font-semibold text-[28px] md:text-[40px]">
            Simple tips to keep your plants happy
          </h2>
          <p className="text-xl">
            Not sure where to start with plant care? Here are some easy,
            beginner-friendly tips that work for most houseplants, from watering
            to light and beyond.
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row md:gap-4">
            <img
              src={Image1}
              alt="Seedling in hand."
              className="h-62 lg:h-115 w-50 lg:w-93"
            />
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
            lg:gap-x-11
            lg:pl-11
          "
        >
          <h3 className="text-left font-semibold text-2xl md:text-[32px] self-end">
            Essentials for healthy houseplants
          </h3>
          <div
            className="
            flex 
            flex-col 
            items-start 
            row-start-2 
            row-span-7 
            md:h-full 
            md:pb-9"
          >
            <h4 className="font-bold text-lg md:text-xl pt-4">
              Let there be light
            </h4>
            <p className="text-left md:text-lg">
              Each plant has its own light preference. Some love a sunny
              windowsill, others prefer a shady corner. Make sure your plant is
              getting the amount of light it needs.
            </p>
            <h4 className="font-bold text-lg md:text-xl pt-6">
              Don't overwater – it's a thing
            </h4>
            <p className="text-left md:text-lg">
              Most plants like a good drink, but too much water can do more harm
              than good. Check the top layer of soil – if it's dry, it's
              probably time to water.
            </p>
            <h4 className="font-bold text-lg md:text-xl pt-6">
              Wipe the leaves now and then
            </h4>
            <p className="text-left md:text-lg">
              Dusty leaves can't breathe or absorb light properly. Give them a
              gentle wipe with a damp cloth every couple of weeks.
            </p>
            <h4 className="font-bold text-lg md:text-xl pt-6">
              Turn your plant
            </h4>
            <p className="text-left md:text-lg">
              Plants tend to grow toward the light. Rotate them now and then to
              keep them growing straight and balanced.
            </p>
            <h4 className="font-bold text-lg md:text-xl pt-6">
              Feed them, but not too often
            </h4>
            <p className="text-left md:text-lg">
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
            lg:h-131
            lg:gap-x-11
            lg:pr-11
          "
        >
          <h3 className="text-left font-semibold text-2xl md:text-[32px] self-end col-start-2">
            Common signs your plant needs help
          </h3>
          <div className="flex flex-col items-start row-start-2 row-span-7 col-start-2 md:h-full">
            <p className="text-left font-light text-lg md:text-xl">
              Even the easiest houseplants can have a rough time now and then.
              Here are a few common signs to watch out for:
            </p>
            <h4 className="font-bold text-lg md:text-xl pt-4">
              Yellowing leaves
            </h4>
            <p className="text-left md:text-lg">
              Could be caused by overwatering or lack of light.
            </p>
            <h4 className="font-bold text-lg md:text-xl pt-6">
              Brown leaf edges
            </h4>
            <p className="text-left md:text-lg">
              Often a sign that the air is too dry or the plant isn't getting
              enough water.
            </p>
            <h4 className="font-bold text-lg md:text-xl">Droopy leaves</h4>
            <p className="text-left md:text-lg">
              The soil might be too dry — or too wet. Feel it to be sure!
            </p>
            <h4 className="font-bold text-lg md:text-xl">
              No growth during spring/summer
            </h4>
            <p className="text-left md:text-lg">
              It might be time for fresh soil or a little fertilizer.
            </p>
          </div>
          <img
            src={ImageHelp}
            alt="Several small plants, being watered."
            className="object-cover h-81 lg:h-full w-65 lg:w-full row-span-8 col-start-1 row-start-1"
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
          "
        >
          <h3 className="font-semibold text-2xl md:text-[32px] self-end">
            Top 3 low-light plants
          </h3>
          <div className="flex flex-col items-start justify-between row-start-2 row-span-7 gap-2 md:h-full md:pt-3">
            <p>
              No sun? No problem. These green friends thrive in spaces with
              minimal light and are perfect for shady corners or cozy rooms.
            </p>
            <h4 className="font-bold text-lg md:text-xl">
              ZZ Plant (Zamioculcas zamiifolia)
            </h4>
            <p className="text-left md:text-lg">
              Tough, stylish, and almost impossible to kill. The ZZ plant
              handles low light like a champ and only needs occasional watering.
            </p>
            <h4 className="font-bold text-lg md:text-xl">
              Snake Plant (Sansevieria)
            </h4>
            <p className="text-left md:text-lg">
              With its upright leaves and minimal care needs, the snake plant is
              ideal for beginners. It does well in indirect or low light and
              purifies the air, too.
            </p>
            <h4 className="font-bold text-lg md:text-xl">
              Pothos (Epipremnum aureum)
            </h4>
            <p className="text-left md:text-lg">
              A trailing beauty that adds a jungle feel to your home. Pothos
              grows well in low light and can handle the occasional forgotten
              watering.
            </p>
          </div>
          <img
            src={ImageLowlight}
            alt="Snake plant."
            className="object-cover h-81 lg:h-full w-65 lg:w-full row-span-8"
          />
        </div>
      </div>
    </div>
  )
}
