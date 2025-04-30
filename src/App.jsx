import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { ProductPage } from "./pages/ProductPage"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
