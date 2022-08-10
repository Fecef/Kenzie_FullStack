Atividade: Modelando qualquer coisa como classe
===============================================

Como visto anteriormente na **Atividade: Modelando Qualquer Coisa como
Objeto**, nessa atividade iremos modelar uma classe.

Neste tópico não iremos ter código de exemplo, poís o objetivo é treinar
sua lógica e abstração para criar uma classe e seus métodos. Quando voce
entender melhor o uso de classes, seu funcionamento não parecerá tão
complexo.

Classe é uma estrutura que descreve estados e comportamentos de um
determinado objeto. Para criar propriedades podemos usar a propriedade
**this**.

Modelando uma classe
--------------------

Vamos começar, pensando em uma classe simples, que armazena as
informações e métodos sobre um restaurante.

Neste exemplo vamos utilizar o conceito: de **"abstração"**. A ideia por
trás disto é que transformar elementos do mundo real, em conceitos de
programação, como classes, objetos, funções, etc.

Para exemplificar melhor, vamos ler um resumo do restaurante que iremos
trabalhar. Como um restaurante devemos lembrar que não só como
informações dele, existem funções que são exercidas para que haja o
funcionamento dele.

> "No alto do Bairro das Laranjeiras, existe um restaurante, cujo nome
> remete a diversidade que temos em nosso país, o nome é Sabor
> Brasileiro, esse restaurante esta aberto a dez anos. Nos ultimos cinco
> anos se especializou em comida tipíca nordestina, desde então atende
> todos os tipos de público, desde o funcionario ao dono da empresa,
> fazendo a comida com carinho e amor, de segunda a sabado das 12:00 até
> 21:00. Como a maioria dos restaurantes, o cliente pode chegar e fazer
> um pedido do seu prato favorito, pagar a conta e se estiver a vontade
> pode fazer uma critica construtiva ou elogio ao restaurante e seus
> funcionarios."

Olhando atentamente para este texto podemos ver que nos foi passado
várias informações, as quais podemos construir um modelo de classe.
Vamos começar resgatando as principais informações para conseguirmos ter
um ponto de partida.

Para demonstrar, vamos realçar as informaações para facilitar a leitura.

> "No alto do **Bairro das Laranjeiras**, existe um restaurante, cujo
> nome remete a diversidade que temos em nosso país, o nome é **Sabor
> Brasileiro**, esse restaurante esta aberto a **dez anos**. Nos ultimos
> cinco anos se especializou em **comida tipíca nordestina**, desde
> então atende todos os tipos de público, desde o funcionario ao dono da
> empresa, fazendo a comida com carinho e amor, de **segunda a sabado**
> do **12:00 até 21:00**. Como a maioria dos restaurantes, o cliente
> pode chegar e **fazer um pedido** do seu prato favorito, **pagar a
> conta** e se estiver a vontade pode **fazer uma critica construtiva ou
> elogio ao restaurante** e seus funcionarios."

Agora, vamos extrair os detalhes que remetem a informações do
restaurante e reescrevê-los em forma de uma lista simples.

Resumindo iremos apenas pegar os dados que irão "construir" nossa
classe. **Lembre-se do conceito de `constructor` visto anteriormente.**

-   Sabor Brasileiro
-   Bairro das Laranjeiras
-   Dez Anos
-   Comida típica Nordestina
-   Segunda à Sabado
-   12:00 até 21:00

Agora vamos alterar nossa lista de valores e torná-los propriedades que
irão construir nossa classe. Para fazer isso, teremos que associar cada
valor a uma chave.

-   nome: Sabor Brasileiro
-   endereço: Bairro das Laranjeiras
-   experiencia: Dez Anos
-   expecialidade: Comida típica Nordestina
-   dias: Segunda à Sabado
-   horario: 12:00 até 21:00

Agora que temos os dados para construir nossa classe, iremos passar para
nossas funções que nosso restaurante exerce.

Iremos utilizar o mesmo método para extrair nossas funções. Olhando o
texto marcado.

-   Fazer um pedido
-   Pagar a conta
-   Fazer uma critica construtiva ou elogio ao restaurante

Já listamos nossas funções, agora vamos dar nomes mais técnicos para
elas:

-   fazerPedido()
-   pagarConta()
-   darFeedback()

Esses foram os detalhes passado por nosso autor, ja abstraimos nossa
classe, agora é sua vez de começar a **CODAR**.

**Prática!**

Utilizando a abstração a maioria das coisas pode ser modelada como uma
classe, visto que a maioria das coisas tem informações próprias e
exercem funções especificas. Mas agora sua tarefa é modelar seu
restaurante como uma lista de propriedades

**OBSERVAÇÃO: Antes de criar uma rede de fast food, complete o exemplo
passado acima, para ficar cada vez mais claro o uso de classes.**

### Descrição 1 - Modelar um Fast Food {style="margin-left: 21px"}

> "Burguer Queen é um restaurante fast food que esta atendendo a vinte
> anos, nesses vinta anos seu foco sempre foi hamburgueres. Seu foco é
> comida rápida e em um preço acessivel, até por isso tem várias
> franquias pela cidade, porém a sua príncipal fica no centro,
> trabalhando todos os dias da semana, das 9:00 até as 22:00. E como
> todo fast food, é possível fazer seu pedido e pagar sua conta de forma
> muito rápida, se ao final o cliente quiser pode fazer uma critica."

### Descrição 2 - Modelar o Carro {style="margin-left: 21px"}

> "Tenho um Corsa 2012, é um carro ótimo, muito econômico e atende
> minhas necessidades. Seu combustivel príncipal é gasolina, porém ele
> tem a possibilidade de utilizar etanol tambem. Ele é um seminovo,
> então muitas vezes quebra algumas peças, porém, não é nada
> preocupante, poís com ele realizo minha rotina, que é levar ele para
> abastecer, calibrar os pneus, posso ouvir minhas músicas favoritas e
> se quebrar algo eu posso consertá-lo."

**Utilize os links abaixo se algum conceito não ficou claro ainda.**

**Material Suplementar**

-   **Leia:**[Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
-   **Leia:**[Constructor](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/constructor)
-   **Leia:**[Abstração -
    Inglês](https://developer.mozilla.org/en-US/docs/Glossary/Abstraction)

