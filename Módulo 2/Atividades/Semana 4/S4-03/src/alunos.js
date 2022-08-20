export { listaAlunos };

const listaAlunos = [
  {
    nome: "João",
    curso: "Ciencia da Computação",
    turno: "Noturno",
    mediaCorte: 7,
    materias: [
      {
        nome: "Calculo I",
        avaliacoes: [6, 8, 10, 8],
        status: true,
      },
      {
        nome: "Pensamento Computacional",
        avaliacoes: [6, 8, 6, 8],
        status: true,
      },
      {
        nome: "Linguagem Orientada a Objetos",
        avaliacoes: [7, 8, 9, 10],
        status: true,
      },
      {
        nome: "Arquitetura de Organização de Computadores",
        avaliacoes: [6, 8, 7, 8],
        status: true,
      },
    ],
    qtdeAprovacoes: 0,
    status: true,
  },
];
