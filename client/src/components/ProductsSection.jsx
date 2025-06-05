import { ProductCard } from "./ProductCard"
import { products } from "../productData"

const firstProducts = products

export const ProductsSection = () => {
  return (
    <section className="mt-[68px] ml-[40px] mr-[40px]">
      <h2 className="text-[28px] md:text-[40px] font-semibold mb-[30px]">
        Our Plants
      </h2>

      <div
        className="
      grid grid-cols-2 
      mx-auto 
      max-w-[260px] 
      gap-[60px_40px]
      md:grid-cols-3
      md:max-w-[860px]
      lg:grid-cols-4
      lg:max-w-[1160px]
      "
      >
        {firstProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}
