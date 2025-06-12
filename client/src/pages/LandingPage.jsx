import { HeroSection } from "../components/HeroSection"
import { ProductsSection } from "../components/ProductsSection"

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ProductsSection variant="new" title="New Arrivals" />
      <ProductsSection variant="random" title="Selected Plants" />
    </>
  )
}
