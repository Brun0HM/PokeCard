# PokeCard

Loja de cartas Pokémon desenvolvida como projeto acadêmico (FATEC).

## Tecnologias

- React 19
- Vite 8
- Bootstrap 5.3 + Bootstrap Icons

## Estrutura

```
src/
├── assets/            # Imagens (logo, produtos)
├── components/        # Componentes reutilizáveis (NavBar)
├── pages/             # Páginas da aplicação
│   ├── Catalogo.jsx
│   ├── Produto.jsx
│   ├── CadastrarProduto.jsx
│   └── Sobre.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## Rodando o projeto

```bash
npm install
npm run dev
```

O servidor sobe em `http://localhost:5173`.

## Scripts

| Comando           | Descrição                        |
| ----------------- | -------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Gera a versão de produção em `dist/` |
| `npm run preview` | Pré-visualiza o build            |
| `npm run lint`    | Executa o ESLint                 |
