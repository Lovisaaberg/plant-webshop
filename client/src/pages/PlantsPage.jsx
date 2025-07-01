import { ProductsSection } from "../components/ProductsSection"
import { NavigationRow } from "../components/NavigationRow"

export const PlantsPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <NavigationRow links={[{ text: "Plants", to: "/products" }]} />
      <ProductsSection />
    </div>
  )
}
