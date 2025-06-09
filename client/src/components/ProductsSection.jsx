import { ProductCard } from "./ProductCard"
import { supabase } from "../supabase"
import { useEffect, useState } from "react"

export const ProductsSection = () => {
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlants = async () => {
      const { data, error } = await supabase.from("plants").select("*")
      if (error) {
        setError(error.message)
      } else {
        setPlants(data)
      }
      setLoading(false)
    }
    fetchPlants()
  }, [])

  if (loading) return <p>Loading plants...</p>
  if (error) return <p>Error loading plants {error}</p>

  return (
    <section
      className="
    mt-[68px]
    md:px-[20px]"
    >
      <h2 className="text-[28px] md:text-[40px] font-semibold mb-[30px]">
        Our Plants
      </h2>

      <div
        className="
    grid 
    grid-cols-2 
    md:grid-cols-3 
    xl:grid-cols-4 
    md:gap-[40px_40px]
    mx-auto
    max-w-[1260px]
    px-[30px]"
      >
        {plants.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
