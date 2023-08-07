import CartWidget from "../CartWidget"

const Navbar = () => {
  let categories = ["Motherboards", "CPUs", "GPUs", "RAM", "SSD", "PCs armadas"]
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
              {categories.map((c) =>
                <li className="nav-item">
                  <a className="nav-link" href="#">{c}</a>
                </li>)}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar