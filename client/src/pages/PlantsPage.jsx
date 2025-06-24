import { ProductsSection } from "../components/ProductsSection"
import { NavigationRow } from "../components/NavigationRow"

export const PlantsPage = () => {
  return (
    <div>
      <NavigationRow links={[{ text: "Plants", to: "/products" }]} />
      <ProductsSection />
    </div>
  )
}
