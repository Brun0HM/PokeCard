import { Link } from "react-router";

const contatos = [
  {
    id: "email",
    icone: "bi-envelope-fill",
    rotulo: "E-mail",
    valor: "contato@pokecard.com.br",
    href: "mailto:contato@pokecard.com.br",
  },
  {
    id: "telefone",
    icone: "bi-telephone-fill",
    rotulo: "Telefone",
    valor: "(11) 4002-8922",
    href: "tel:+551140028922",
  },
  {
    id: "endereco",
    icone: "bi-geo-alt-fill",
    rotulo: "Endereço",
    valor: "Rua dos Treinadores, 151 — São Paulo/SP",
  },
  {
    id: "horario",
    icone: "bi-clock-fill",
    rotulo: "Horário",
    valor: "Segunda a sábado, das 9h às 18h",
  },
];

function Contato() {
  return (
    <main className="container py-4 py-md-5">
      <section
        className="row justify-content-center"
        aria-labelledby="titulo-contato"
      >
        <div className="col-12 col-lg-10 col-xl-8">
          <h1 id="titulo-contato" className="display-6 fw-bold mb-3">
            Contato
          </h1>
          <p className="lead text-white-50 mb-4">
            Tem alguma dúvida sobre cartas, pedidos ou coleções? Fale com a
            equipe da PokeCard.
          </p>

          <div className="row g-3 g-md-4">
            {contatos.map((contato) => (
              <div className="col-12 col-md-6" key={contato.id}>
                <div className="card h-100 bg-dark border-secondary text-light rounded-4">
                  <div className="card-body d-flex align-items-start gap-3">
                    <i
                      className={`bi ${contato.icone} fs-4 text-danger`}
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="h6 fw-semibold mb-1">
                        {contato.rotulo}
                      </h2>
                      {contato.href ? (
                        <a className="link-light" href={contato.href}>
                          {contato.valor}
                        </a>
                      ) : (
                        <p className="mb-0 text-white-50">{contato.valor}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-dark border-secondary text-light rounded-4 mt-4">
            <div className="card-body d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
              <div>
                <h2 className="h5 fw-bold mb-1">
                  Pronto para completar sua coleção?
                </h2>
                <p className="mb-0 text-white-50">
                  Confira as cartas e produtos disponíveis no catálogo.
                </p>
              </div>
              <Link
                className="btn btn-danger fw-semibold flex-shrink-0"
                to="/catalogo"
              >
                Ver catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contato;
