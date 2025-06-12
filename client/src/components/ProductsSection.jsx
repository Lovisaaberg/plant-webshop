import { ProductCard } from "./ProductCard"
import { supabase } from "../supabase"
import { useEffect, useState } from "react"

export const ProductsSection = ({ variant = "all", title = "Our Plants" }) => {
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true)
      setError(null)

      try {
        let query = supabase.from("plants").select("*")

        if (variant === "new") {
          query = query.order("created_at", { ascending: false }).limit(4)
        } else if (variant === "random") {
          query = query.limit(20)
        }

        const { data, error } = await query

        if (error) {
          setError(error.message)
        } else {
          if (variant === "random") {
            const shuffled = [...data].sort(() => 0.5 - Math.random())
            setPlants(shuffled.slice(0, 4))
          } else {
            setPlants(data)
          }
        }
      } catch (error) {
        console.error(error)
        setError("Something happened loading plants")
      } finally {
        setLoading(false)
      }
    }

    fetchPlants()
  }, [variant])

  if (loading) return <p>Loading plants...</p>
  if (error) return <p>Error loading plants: {error}</p>

  return (
    <section
      className="
    mt-[68px]
    md:px-[20px]"
    >
      <h2 className="text-[28px] md:text-[40px] font-semibold mb-[30px]">
        {title}
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
