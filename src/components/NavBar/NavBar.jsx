import CardWidget   from "./CardWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link to= "/"className="navbar-brand">
    <img width={100} src="src/assets/logo.png" alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <Link to="/category/adidas" className="nav-item nav-link"> Adidas</Link>
        <Link to="/category/nike" className="nav-item nav-link">Nike</Link>
        <Link to="/category/puma" className="nav-item nav-link">Puma</Link>
      </ul>
      <CardWidget  />
    </div>
  </div>
</nav>

    )
}

export default NavBar