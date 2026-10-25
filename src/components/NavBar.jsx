import { Link, NavLink } from "react-router";
import pokemon from "../assets/Pokemon.png";

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark rounded-pill site-navbar intro-navbar justify-content-center"
        aria-label="Navegação principal"
      >
        <div className="container-fluid">
          <Link className="navbar-brand ms-1" to="/">
            <img src={pokemon} alt="PokeCard" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Abrir menu de navegação"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 mb-2 mb-lg-0 align-items-center justify-content-lg-evenly gap-1 gap-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `nav-link text-white${isActive ? " active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/catalogo"
                  className={({ isActive }) =>
                    `nav-link text-white${isActive ? " active" : ""}`
                  }
                >
                  Catalogo
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="pokeball-intro" aria-hidden="true">
        <div className="pokeball">
          <span className="pokeball-half top" />
          <span className="pokeball-half bottom" />
          <span className="pokeball-button" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
