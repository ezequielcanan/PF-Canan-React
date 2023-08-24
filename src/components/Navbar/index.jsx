import { Link } from "react-router-dom"
import CartWidget from "../CartWidget"

const Navbar = () => {
  let categories = ["Motherboards", "CPUs", "GPUs", "RAM", "SSD", "PCs"]
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Canan Gamer</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-responsive" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar-responsive">
            <ul className="navbar-nav">
              <CartWidget quantity={2} />
              {categories.map((c,i) =>
                <li className="nav-item" key={i}>
                  <Link to={`/category/${c}`}>{c}</Link>
                </li>)}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar