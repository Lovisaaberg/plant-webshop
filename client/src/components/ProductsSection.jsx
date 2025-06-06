import { ProductCard } from "./ProductCard"
import { products } from "../productData"
import { Link } from "react-router-dom"

const firstProducts = products

export const ProductsSection = () => {
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
        {firstProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  )
}
