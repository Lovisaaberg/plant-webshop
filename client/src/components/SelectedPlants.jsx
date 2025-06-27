import { useEffect, useState } from "react"
import { supabase } from "../supabase"
import { ProductCard } from "./ProductCard"
import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"

export const SelectedPlants = () => {
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/products")
  }

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase.from("plants").select("*")

      if (error) {
        setError("Could not load selected plants.")
        setLoading(false)
        return
      }

      const shuffled = data.sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, 8)

      setPlants(selected)
      setLoading(false)
    }

    fetchPlants()
  }, [])
  if (loading) return <p>Loading selected plants...</p>
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
        Selected Plants
      </h2>

      <div
        className="
        grid 
        grid-cols-1 
        md:grid-cols-3 
        xl:grid-cols-4 
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
            [&_.product-image]:h-[350px]"
          />
        ))}
      </div>

      <Button
        text="Explore all plants"
        func={handleNavigate}
        className="
          w-[180px] 
          h-[40px] 
          bg-[#D79E00] 
          text-white 
          rounded-[50px] 
          shadow-md 
          mt-[24px]
          hover:bg-[#AE8000]
          hover:cursor-pointer"
      />
    </section>
  )
}
