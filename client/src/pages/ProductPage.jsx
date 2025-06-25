import { supabase } from "../supabase"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { ProductInfo } from "../components/ProductInfo"
import { NavigationRow } from "../components/NavigationRow"

export const ProductPage = () => {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("plants")
        .select("*")
        .eq("id", id)
        .single()

      if (error) {
        setError(error.message)
      } else {
        setProduct(data)
      }
      setLoading(false)
    }
    fetchProduct()
  }, [id])

  if (loading) return <p>Loading product...</p>
  if (error) return <p>Error loading product: {error}</p>
  if (!product) return <p>Product not found</p>

  return (
    <div>
      <NavigationRow links={
        [{
          text: "Plants", 
          to: "/products"
        },{
          text:product.name,
        }]
        } />
      <ProductInfo product={product}/>
    </div>
  )
}
