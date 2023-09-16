import { Link, useParams } from "react-router-dom";
import CartWidget from "../CartWidget";

const Navbar = () => {
  let categories = ["Motherboard", "CPU", "GPU", "RAM", "SSD", "HDD"];

  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-md">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Canan Gamer
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-responsive"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar-responsive">
            <ul className="navbar-nav">
              <CartWidget />
              {categories.map((c, i) => (
                <li className="nav-item" key={i}>
                  <Link className="nav-link" to={`/category/${c}`}>
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
