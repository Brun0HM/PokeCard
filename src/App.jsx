import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header className="nav-stage d-flex justify-content-center mt-3 px-2 px-md-4">
        <NavBar />
      </header>

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
      </main>
    </>
  );
}

export default App;
