import kenzieMusic from "./utils/kenzieMusic.js";
class Musica {
  constructor(id, nome, artista, duracao, url) {
    this._id = id;
    this._nome = nome;
    this._artista = artista;
    this._duracao = duracao;
    this._url = url;
  }
}
class Playlist {
  constructor(nome, dono) {
    this._nome = nome;
    this._dono = dono;
    this._musicas = [];
  }

  adicionaMusica() {
    const music = kenzieMusic.musicaAtual;
    const colecao = this._musicas;
    const duplicate = colecao.some((thisMusic) => thisMusic._id === music.id);

    if (music.name == undefined) return;

    if (!duplicate) {
      colecao.push(
        new Musica(
          music.id,
          music.name,
          music.artists,
          music.duration_ms,
          music.music_url
        )
      );
      this.listarMusicas();
      this.calculaDuracao();
    }
  }

  listarMusicas() {
    const musicTitle = document.getElementById("musicTitle");
    const musicList = document.getElementById("musicList");
    const musica = kenzieMusic.musicaAtual;

    musicTitle.innerText = `${musica.name} - ${musica.artists[0].name}`;
    musicList.insertAdjacentHTML(
      "afterbegin",
      `
        <li>${musica.name} - ${musica.artists[0].name}
          <div>
            <button id="${musica.id}">Tocar</button>
            <button id="${musica.id}">Excluir</button>
            <button id="${musica.id}">Filtrar</button>
          </div>
        </li>
      `
    );
  }

  tocarMusica(musicUrl) {
    const player = document.getElementById("player");

    player.innerHTML = "";
    player.insertAdjacentHTML(
      "afterbegin",
      `
        <audio controls autoplay>
          <source src="${musicUrl}" type="audio/mp3">
          Seu navegador não suporta este tipo de mídia.
        </audio>
      `
    );
  }

  removeMusica(element, musicId) {
    const musicIndex = this._musicas.indexOf((music) => music._id === musicId);
    this._musicas.splice(musicIndex, 1);
    element.remove();
  }

  filtraArtista(nome) {
    const musicList = document.getElementById("musicList");
    const filtered = this._musicas.filter(
      (musica) => musica._artista[0].name === nome
    );
    musicList.innerHTML = "";
    filtered.forEach((musica) => {
      musicList.insertAdjacentHTML(
        "afterbegin",
        `
          <li>${musica._nome} - ${musica._artista[0].name}
            <div>
              <button id="${musica._id}">Tocar</button>
              <button id="${musica._id}">Excluir</button>
              <button id="${musica._id}">Filtrar</button>
            </div>
          </li>
        `
      );
    });
  }

  calculaDuracao() {
    const duracaoTotal = this._musicas.reduce((a, b) => a + b._duracao, 0);
    let mm = Math.floor(duracaoTotal / 60000);
    let ss = ((duracaoTotal % 60000) / 1000).toFixed(0);

    duracao.innerText = `Duração: ${Math.trunc(mm)}:${Math.trunc(ss)}`;
  }
}

// Lógica responsável pela busca de músicas digitadas no site.
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", async () => {
  const input = document.getElementById("inputMusic");
  await kenzieMusic.buscaMusica(input.value);
  playlist.adicionaMusica();
  input.value = "";
});

const musicList = document.getElementById("musicList");
musicList.addEventListener("click", (e) => {
  const musicId = e.target.id;
  const music = playlist._musicas.find((music) => music._id === musicId);
  const buttonText = e.target.innerText;
  const parentElement = e.target.parentElement.parentElement;

  if (buttonText === "Tocar") playlist.tocarMusica(music._url);
  if (buttonText === "Excluir") playlist.removeMusica(parentElement, musicId);
  if (buttonText === "Filtrar") playlist.filtraArtista(music._artista[0].name);
});

const playlist = new Playlist("My Playlist", "Felipe");
