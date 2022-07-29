![>>> Abra esse README.md no modo de 'Preview' para melhor visualização <<<](assets/20220719_104823_CodeIgualUmKenzie.png)

# Instruções

Esse teste tem como objetivo **fixar seus conhecimentos sobre o assunto abordado nessa última semana**.

Esse projeto possui todos os arquivos necessários para desenvolver a solução esperada, então **NÃO SERÁ NECESSÁRIO CRIAR OUTROS ARQUIVOS**.

### ⏱️ Duração do teste

> `15 minutos para todo o desenvolvimento`

### ✅ Console.log

> `Será permitido usar o console.log() para testar o seu código`

# Problema

Você terá um **array de objetos** chamado `listaDeDevs` **já predefinido** no arquivo `script.js`.

Dentro dele terão objetos contendo as seguintes chaves:

- `nome` - Tipo **String** | Nome do livro
- `stackDeEstudo` - Tipo **String** | Nome da stack que o dev estuda atualmente
- `imagem` - Tipo **String** | Um link com a imagem de perfil do dev

Além disso, você também terá uma **main** com o id `main__container` que possuem como filhos uma **section** com o id `devs__list` e um **footer** com o id `main__footer` **já predefinidos no body** do arquivo `index.html`.

### 🎲 Desafio

Dadas essas informações, será necessário desenvolver uma função chamada `renderizaCards` que recebe um **array** como parâmetro e ela deverá fazer:

1. Capturar a **section** e o **footer** utilizando **DOM**;
2. Percorrer o array recebido por parâmetro e criar:
   - Uma `div`, que receberá todos os elementos dinâmicos;
   - Um `H2`, que receberá a propriedade **nome** dos objetos que estão dentro do array ;
   - Uma `img`, que receberá em sua propriedade `src`, a propriedade **imagem** dos objetos que estão dentro do array;
3. Com todos os elementos criados, faça uma **condicional** que:
   - Verifica se a propriedade **stackDeEstudo**, dos objetos que estão dentro do array, é **igual a front-end ou igual a fullstack**, caso a verificação seja **verdadeira**, adicione a **div** a classe `dev__frontend`;
   - Caso a verificação seja **falsa** adicione a **div** a classe `dev__backend`;
4. Após estes passos faça com que as tags **img** e **h2** (respectivamente nesta ordem) se tornem filhas da tag **div**;
5. Faça com que a **div** se torne filha da **section**;
6. Após concluir estes passos **remova** o footer da página;
7. Para finalizar chame a função **renderizaCards** passando a **listaDeDevs** como parâmetro

---

> **Bom desenvolvimento**, e qualquer dúvida só perguntar ao seu aplicador 😉!
