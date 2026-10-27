import { Link } from "react-router";

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="container py-4 mt-5 border-top border-secondary">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2 text-center text-md-start">
        <p className="mb-0 small text-white-50">
          © {anoAtual} PokeCard. Projeto acadêmico, sem fins comerciais.
        </p>

        <nav aria-label="Links do rodapé">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 mb-0 small">
            <li>
              <Link
                className="link-light link-underline-opacity-0 link-underline-opacity-100-hover"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link-light link-underline-opacity-0 link-underline-opacity-100-hover"
                to="/catalogo"
              >
                Catálogo
              </Link>
            </li>
            <li>
              <Link
                className="link-light link-underline-opacity-0 link-underline-opacity-100-hover"
                to="/contato"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
