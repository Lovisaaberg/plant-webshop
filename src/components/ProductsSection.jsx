import { ProductCard } from "./ProductCard"

export const ProductsSection = () => {
  return (
    <div>
      ProductsSection
      <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}
