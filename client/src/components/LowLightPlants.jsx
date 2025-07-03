import { useEffect, useState } from "react"
import { supabase } from "../supabase"
import { ProductCard } from "./ProductCard"

export const LowLightPlants = () => {
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLowLightPlants = async () => {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase.from("plants").select("*")

      if (error) {
        setError("Could not load low light plants.")
        setLoading(false)
        return
      }

      const filtered = data.filter((plant) =>
        plant.light?.toLowerCase().includes("low")
      )

      const shuffled = filtered.sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, 3)

      setPlants(selected)
      setLoading(false)
    }

    fetchLowLightPlants()
  }, [])

  if (loading) return <p>Loading low light plants...</p>
  if (error) return <p>{error}</p>
  if (error) return <p>{error}</p>

  return (
    <section
      className="
      mt-[120px] 
      md:px-[20px]"
    >
      <h2
        className="
        text-[28px] 
        md:text-[40px] 
        font-semibold 
        mb-[60px]"
      >
        Explore low-light plants
      </h2>

      <div
        className="
        grid 
        grid-cols-1 
        md:grid-cols-3 
        xl:grid-cols-3 
        gap-[40px] 
        max-w-[1260px] 
        mx-auto 
        px-[30px]
      "
      >
        {plants.map((plant) => (
          <ProductCard
            key={plant.id}
            product={plant}
            className="              
              w-[260px]
              [&_.product-image]:h-[350px]
              mb-[120px]"
          />
        ))}
      </div>
    </section>
  )
}
