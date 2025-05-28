import { ProductCard } from "./ProductCard"
import { products } from "../productData"

const firstProducts = products.slice(0, 4)

export const ProductsSection = () => {
  return (
    <div>
      Our products
      <div className="grid grid-cols-2 gap-6">
        {firstProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
