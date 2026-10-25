import "./ProdutoCard.css";

function ProdutoCard({ nome, categoria, preco, imagem }) {
  // Formatar preço para padrão brasileiro.
  const precoFormatado =
    typeof preco === "number"
      ? preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      : preco;

  return (
    <article className="produto-card card h-100 overflow-hidden rounded-4 text-light">
      {/* Renderizar a imagem do produto, se fornecida, caso não forneça um placeHolder padrao. */}
      <div className="produto-card__midia d-flex align-items-center justify-content-center position-relative">
        {imagem ? (
          <img
            src={imagem}
            alt={nome}
            loading="lazy"
            className="w-100 h-100 object-fit-contain"
          />
        ) : (
          <span className="produto-card__placeholder" aria-hidden="true" />
        )}
        {categoria && (
          <span className="produto-card__categoria badge rounded-pill text-uppercase position-absolute top-0 start-0">
            {categoria}
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column gap-2">
        <h3 className="card-title h6 fw-semibold lh-sm mb-0">{nome}</h3>

        {precoFormatado != null && (
          <p className="card-text produto-card__preco fw-bold mb-0">
            {precoFormatado}
          </p>
        )}

        <button
          type="button"
          className="btn btn-danger w-100 fw-semibold mt-auto"
        >
          Ver detalhes
        </button>
      </div>
    </article>
  );
}

export default ProdutoCard;
