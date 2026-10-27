import ProdutoCard from "./components/Produto/ProdutoCard";
import produtos from "./data/produtos";

function App() {
  return (
    <main className="container py-4 py-md-5">
      <section
        className="row justify-content-center"
        aria-labelledby="titulo-empresa"
      >
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1 id="titulo-empresa" className="display-5 fw-bold mb-3">
            Bem-vindo à Pokecard
          </h1>
          <p className="lead mb-0">
            Na Pokecard, você encontra tudo para se conectar ao universo
            Pokémon. Explore nossa loja, descubra cartas incríveis e encontre
            produtos especiais para colecionar, jogar e compartilhar sua
            paixão.
          </p>
        </div>
      </section>

      <section
        className="mt-5 container-fluid"
        aria-labelledby="produtos-destaque"
      >
        <h2 id="produtos-destaque" className="h3 fw-bold text-center mb-4">
          Produtos em destaque
        </h2>

        <div className="row g-3 g-md-4">
          {produtos.slice(0, 3).map((produto) => (
            <div className="col-6 col-md-4" key={produto.id}>
              <ProdutoCard
                nome={produto.nome}
                categoria={produto.categoria}
                preco={produto.preco}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
