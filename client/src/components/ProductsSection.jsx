import { ProductCard } from "./ProductCard"
import { products } from "../productData"

const firstProducts = products.slice(0, 4)

export const ProductsSection = () => {
  return (
    <div>
      Our products
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {firstProducts.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}
