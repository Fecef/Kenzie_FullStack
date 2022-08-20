import { listaAlunos } from "./alunos.js";
import { onibus } from "./onibus.js";

class Aluno {
  constructor(nome, curso, turno, mediaCorte, materias) {
    this._nome = nome;
    this._curso = curso;
    this._turno = turno;
    this._mediaCorte = mediaCorte;
    this._materias = materias;
    this._qtdeAprovacoes = 0;
    this._status = true;

    this._materias.forEach((materia) => {
      const totalMateria = materia.avaliacoes.reduce((a, b) => a + b);
      const mediaMateria = totalMateria / materia.avaliacoes.length;

      if (mediaMateria < this._mediaCorte) {
        return (materia.status = false);
      }
      this._qtdeAprovacoes++;
      return (materia.status = true);
    });

    if (this._qtdeAprovacoes < this._materias.length * 0.7) {
      return (this._status = false);
    }
    return (this._status = true);
  }
}

const joao = new Aluno(
  listaAlunos[0].nome,
  listaAlunos[0].curso,
  listaAlunos[0].turno,
  listaAlunos[0].mediaCorte,
  listaAlunos[0].materias
);

class Onibus {
  constructor(capacidade, origem, destinoFinal, paradas, passageiros) {
    this._origem = origem;
    this._destinoFInal = destinoFinal;
    this._capacidade = capacidade;
    this._paradas = paradas;
    this._passageiros = passageiros;
  }
  efetuarParada(parada) {
    const result = this._passageiros.filter((passageiro) => {
      if (parada === passageiro.bilhete.destino) {
        passageiro.viagemConcluida = true;
        return true;
      }
    });
    console.log(result);
  }
}

const itapemirim = new Onibus(
  onibus.capacidade,
  onibus.origem,
  onibus.destinoFinal,
  onibus.paradas,
  onibus.passageiros
);
