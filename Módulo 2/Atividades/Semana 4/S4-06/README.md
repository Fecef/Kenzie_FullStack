💪 Atividade: Kenzie Music
=========================

Introdução
----------

O **Kenzie Music** é uma aplicação de playlist de músicas.

Uitilizaremos os conceitos de Programação Orientada a Objetos para
desenvolver esse app.

No final, teremos algo similar a isso:

Tarefas
-------

1.  Todas as lógicas deverão ser desenvolvidas com **POO**;
2.  O usuário deve conseguir adicionar músicas;
3.  O usuário deve conseguir escutar as músicas que adicionou;
4.  Os elementos **audio** e **source** devem ser criados e configurados
    pelo DOM;
5.  O nome da música deve ser alterado dinamicamente e ter o padrão
    **Nome musica - Artista(s)**;

**Dica!**

-   Algumas funcionalidades já estão prontas, como a captura do valor
    digitado no input.
-   Atente-se aos comentários deixados nos arquivos do repositório.
-   Como trabalhar com o elemento
    **[audio.](https://satellasoft.com/artigo/html/reproduzindo-audio-com-html-5-audio-tag)**

------------------------------------------------------------------------

Modelos
-------

### Musica

A classe **Musica** será responsável por tratar o objeto da música
adicionada.

Esta classe deverá conter os seguinte atributos:

**OBS:** Você deverá utilizar as propriedades do objeto armazenado na
propriedade estática `musicaAtual` da classe `kenzieMusic`.

-   **id:** que irá armazenar a propriedade `id`;
-   **nome:** que irá armazenar a propriedade `name`;
-   **artistas:** que irá armazenar a propriedade `artists`;
-   **duracao:** que irá armazenar a propriedade `duration_ms`;
-   **url:** que irá armazenar a propriedade `music_url`

Com isso, seus dados estão sendo tratados para

### Playlist

A classe **Playlist** será responsável por gerenciar as músicas
adicionadas.

Esta classe deverá conter os seguinte atributos:

-   **nome:** que irá armazenar nome da playlist;
-   **dono:** que irá armazenar o dono da playlist;
-   **musicas:** que irá armazenar um array vazio **\[ \]** por padrão;

Além disso, a classe também terá o seguinte método:

-   **adicionaMusica:** que será responsável por adicionar na
    propriedade **musicas** uma instância da classe **Musica**, não
    permitindo músicas duplicadas, também mostra no documento a música
    adicionada na playlist com um botão para tocar essa música.;

**Aviso!**

O HTML e CSS aqui fornecidos tem o intuíto apenas de otimizar o seu
tempo! Sinta-se a vontade para editar tanto a estrutura quando o estilo.

Mas lembre-se que o mais importante é estar funcional, então se achar
necessário editar o HTML ou o CSS, **recomendo** deixar por último.

------------------------------------------------------------------------

Desafio Extra:
--------------

Na classe **Playlist**, adicionde esses três métodos:

-   **removeMusica:** que será responsável por remover uma música
    selecionada;
-   **filtraArtista:** que será responsável por filtrar as músicas por
    artista(s);
-   **calculaDuracao:** que será responsável por calcular a duração da
    playlist;

**Atenção!**

Para fazer o desafio extra, você precisará alterar o **layout**, então
certifique-se que você tem o tempo necessário para fazer isso.

------------------------------------------------------------------------

Conclusão
---------

No final você terá uma pequena aplicação de playlist de música,
desenvolvida apenas com javascript, utilizando os conceitos de
Programação Orientada a Objetos. 😆