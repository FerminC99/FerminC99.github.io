import CardWidget   from "./CardWidget"
import "./NavBar.css"



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">
    <img width={100} src="src/assets/logo.png" alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
          <a className="nav-link" href="#">Adidas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nike</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Puma</a>
        </li>
      </ul>
      <CardWidget  />
    </div>
  </div>
</nav>

    )
}

export default NavBar