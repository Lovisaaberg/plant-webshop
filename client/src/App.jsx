import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { PlantsPage } from "./pages/PlantsPage"
import { ProductPage } from "./pages/ProductPage"
import { AboutUsPage } from "./pages/AboutUsPage"
import { ContactPage } from "./pages/ContactPage"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import "./App.css"
import { OrderPage } from "./pages/OrderPage"
import { ScrollToTop } from "./components/ScrollToTop"

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
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
