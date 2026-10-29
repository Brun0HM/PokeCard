import TCGdex from "@tcgdex/sdk";

export const tcgdex = new TCGdex("en");

export async function buscarCarta(id) {
  return tcgdex.card.get(id);
}

export async function buscarCartaAleatoria() {
  const resposta = await tcgdex.random.card();
  return resposta?.data ?? resposta;
}
