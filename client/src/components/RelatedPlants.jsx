import React from "react"
import { useEffect, useState } from "react"
import { supabase } from "../supabase"
import { ProductCard } from "./ProductCard"

export const RelatedPlants = ({ category, currentProductId }) => {
  const [relatedPlants, setRelatedPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRelated = async () => {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from("plants")
        .select("*")
        .eq("category", category)

      if (error) {
        setError("Could not load related plants.")
        setLoading(false)
        return
      }

      const filtered = data.filter((plant) => plant.id !== currentProductId)
      const shuffled = filtered.sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, 4)

      setRelatedPlants(selected)
      setLoading(false)
    }

    fetchRelated()
  }, [category, currentProductId])

  if (loading) return <p>Loading related plants...</p>
  if (error) return <p>{error}</p>
  if (relatedPlants.length === 0) return null

  return (
    <section className="mt-[120px] md:px-[20px] w-full">
      <h2 className="text-[28px] md:text-[40px] font-semibold mb-[60px]">
        You might also like
      </h2>

      <div
        className="
      px-[30px] 
      max-w-[1440px] 
      mx-auto"
      >
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
          {relatedPlants.map((product) => (
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
