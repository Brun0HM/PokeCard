import ProdutoCard from "../components/Produto/ProdutoCard";

function Catalogo() {
  const produtos = [
    { id: 1, nome: "Pikachu", categoria: "Raio", preco: 49.9 },
    { id: 2, nome: "Charizard VMAX", categoria: "Carta rara", preco: 249.9 },
    { id: 3, nome: "Booster Pack", categoria: "Booster", preco: 29.9 },
  ];

  return (
    <section
      className="row g-3 g-md-4 container-fluid mt-5"
      aria-labelledby="produtos-destaque"
    >
      {produtos.map((produto) => (
        <div className="col-6 col-md-4" key={produto.id}>
          <ProdutoCard
            nome={produto.nome}
            categoria={produto.categoria}
            preco={produto.preco}
          />
        </div>
      ))}
    </section>
  );
}

export default Catalogo;
