import ProdutoCard from "../components/Produto/ProdutoCard";
import produtos from "../data/produtos";

function Catalogo() {
  return (
    <main className="container py-4 py-md-5">
      <section aria-labelledby="titulo-catalogo">
        <h1 id="titulo-catalogo" className="display-6 fw-bold mb-4">
          Catálogo
        </h1>

        <div className="row g-3 g-md-4">
          {produtos.map((produto) => (
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

export default Catalogo;
