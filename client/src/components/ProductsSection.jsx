import { Link } from "react-router-dom"
import { ProductCard } from "./ProductCard"
import { products } from "../productData"

const firstProducts = products.slice(0, 4)

export const ProductsSection = () => {
  return (
    <div>
      ProductsSection
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {firstProducts.map((product) => (
          <Link to={`product/${product.id}`} key={product.id}>
              <ProductCard product={product}/>
          </Link>
        ))}
      </div>
    </div>
  )
}
