# PokeCard

Loja de cartas Pokémon desenvolvida como projeto acadêmico (FATEC).

Aplicação de página única (SPA) com três telas: home institucional, catálogo de produtos e contato. O visual usa Bootstrap 5 com tema escuro e as cores da marca (`#e3350d` e `#ffcb05`).

## Funcionalidades

- **Home** com apresentação da empresa e produtos em destaque.
- **Catálogo** com 8 produtos e cards responsivos.
- **Contato** com dados fictícios e atalho para o catálogo.
- Navegação SPA com React Router 8 e link ativo na navbar.
- Footer presente em todas as telas.
- **Animação de introdução com Pokébola** na navbar, apenas em desktop (a partir de 992px).
- Cards com placeholder de Pokébola feito em CSS, preço formatado em BRL e efeitos de hover.
- Layout responsivo e HTML semântico.
- Respeito à preferência `prefers-reduced-motion` (a animação é desativada).

## Tecnologias

| Tecnologia      | Versão |
| --------------- | ------ |
| React           | 19.3   |
| Vite            | 8.3    |
| React Router    | 8.5    |
| Bootstrap       | 5.3    |
| Bootstrap Icons | 1.13   |
| ESLint          | 10.13  |

## Estrutura

```
src/
├── assets/
│   └── Pokemon.png
├── components/
│   ├── Footer.jsx
│   ├── NavBar.jsx
│   └── Produto/
│       ├── ProdutoCard.jsx
│       └── ProdutoCard.css
├── data/
│   └── produtos.js
├── pages/
│   ├── Catalogo.jsx
│   ├── Contato.jsx
│   ├── Sobre.jsx              # placeholder, ainda sem rota
│   └── CadastrarProduto.jsx   # placeholder, ainda sem rota
├── App.jsx
├── App.css
└── main.jsx
```

## Rotas

| URL         | Componente     | Tela                     |
| ----------- | -------------- | ------------------------ |
| `/`         | `App.jsx`      | Home                     |
| `/catalogo` | `Catalogo.jsx` | Catálogo de produtos     |
| `/contato`  | `Contato.jsx`  | Contato                  |

A navbar e o footer ficam fora das rotas, no `main.jsx`, para aparecerem em todas as telas.

## Dados dos produtos

Os produtos ficam em `src/data/produtos.js` e são compartilhados pelas telas:

```js
{ id: 1, nome: "Pikachu", categoria: "Carta avulsa", preco: 49.9 }
```

- A home exibe os **3 primeiros** com `produtos.slice(0, 3)`.
- O catálogo exibe **todos** com `produtos.map(...)`.
- Para adicionar um produto, inclua um objeto novo com `id` único.
- `preco` deve ser um número para ser formatado como `R$ 49,90`; strings aparecem sem formatação.

## Rodando o projeto

```bash
npm install
npm run dev
```

O servidor sobe em `http://localhost:5173`.

## Scripts

| Comando         | Descrição                            |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Pré-visualiza o build              |
| `npm run lint`  | Executa o ESLint                     |