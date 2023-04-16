import { BrowserRouter, Route, Routes  } from "react-router-dom"
import HomePage from "./pages/home";
import InventoryPage from "./pages/inventory";
import PokemonDetailPage from "./pages/pokemon-detail";
import './styles/main.css'

const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<HomePage />}/>
      {/* Inventory */}
      <Route path="/inventory" element={<InventoryPage />}/>
      {/* */}
      <Route path="/*"  element={<PokemonDetailPage />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter