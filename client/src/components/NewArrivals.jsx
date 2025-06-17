import { useEffect, useState } from "react"
import { supabase } from "../supabase"
import { ProductCard } from "./ProductCard"

export const NewArrivals = () => {
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from("plants")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(4)

      if (error) {
        setError("Could not load plants.")
      } else {
        setPlants(data || [])
      }

      setLoading(false)
    }

    fetchPlants()
  }, [])

  if (loading) return <p>Loading new plants</p>
  if (error) return <p>{error}</p>

  return (
    <section className="
    mt-[68px] 
    md:px-[20px]">
      <h2 className="
      text-[28px] 
      md:text-[40px] 
      font-semibold mb-[30px]">
        New Arrivals
      </h2>

      <div className="
      px-[30px] 
      max-w-[1260px] 
      mx-auto">
        <div
          className="
        flex 
        overflow-x-auto 
        gap-4 
        scrollbar-hide 
        xl:grid 
        xl:grid-cols-4 
        lg:gap-[40px_40px]"
        >
          {plants.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="
              min-w-[200px] 
              lg:min-w-0
              [&_.product-image]:h-[250px]
              lg:[&_.product-image]:h-[350px]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
