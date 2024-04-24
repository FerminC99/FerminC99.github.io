import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'



function App() {
  

  return (
    
    <div>
      <NavBar />
      <ItemListContainer saludo = "Bienvenidos" />
      <h1>
        Proximamente...
      </h1>
    </div>

  )

}

export default App