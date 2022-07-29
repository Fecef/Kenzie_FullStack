// Descrição 1
const jarro = {
  cor: "azul",
  cabo: "longo",
  bico: "pequeno",
  utilidade: "servir",
  altura: "35cm",
  volume: "900ml",
  material: "vidro translúcido espesso",
  manuseio: "difícil",
};

// Descrição 2
const cachorro = {
  nome: "Sadie",
  cor: "preto",
  sexo: "fêmea",
  porte: "grande",
  peso: "30kg",
  raca: "labrador",
  temperamento: "amigável e dócil com crianças",
  treinamento: true,
};

const informaçõesTreinamento = (treinamento) => {
  if (treinamento) {
    cachorro.curso = "Doogy Daze";
    cachorro.endereco = "Columbia";
    cachorro.treinador = "Donald Johson";
  }
};
