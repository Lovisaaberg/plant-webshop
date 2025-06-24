import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importing pages and components
import { LandingPage } from "./pages/LandingPage"
import { PlantsPage } from "./pages/PlantsPage"
import { ProductPage } from "./pages/ProductPage"
import { PlantcarePage } from "./pages/PlantcarePage"
import { ContactPage } from "./pages/ContactPage"
import { OrderPage } from "./pages/OrderPage"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { ScrollToTop } from "./components/ScrollToTop"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<PlantsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/plantcare" element={<PlantcarePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
