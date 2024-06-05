import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={ <ItemListContainer saludo = "Bienvenidos a Zona Outlet"/>} />
      <Route path="/category/:idCategory" element={ <ItemListContainer saludo="Bienvenidos a Zona Outlet" /> } />
      <Route path="/detail/:idProduct" element={<ItemDetailContainer saludo="Bienvenidos a Zona Outlet" />} />
      </Routes>
       <h2>
        Proximamente... Footer
      </h2>
   </BrowserRouter>

  )

}

export default App