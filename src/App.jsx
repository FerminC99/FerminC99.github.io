import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from "./components/Checkout/Checkout";
function App() {
  
  return (
     <BrowserRouter>
    <CartProvider> 
      <NavBar />
      <Routes>
      <Route path="/" element={ <ItemListContainer saludo = "Bienvenidos a Zona Outlet"/>} />
      <Route path="/category/:idCategory" element={ <ItemListContainer  /> } />
      <Route path="/detail/:idProduct" element={<ItemDetailContainer  />} />
      <Route path="/cart" element= {<Cart />}/>
      <Route path ="/checkout" element ={<Checkout/>}/>
      </Routes>
   </CartProvider>   
   </BrowserRouter>
   

  )

}

export default App