## Atividade - Métodos de array e desconstrução de objetos

Para começar, faça o clone desse repositório.

Após a aula de desconstrução de objetos, agora vamos trabalhar na prática com este conteúdo, juntamente com métodos. Métodos de array são utilizados para facilitar a manipulação de um array sem usar necessariamente um looping. (Lembre-se, é muito importante saber fazer a lógica com os loopings, antes de utilizar métodos).

No arquivo clonado, você irá ter um array de objetos, chamado **itemArray**, que indica alguns itens de uma lista de compras, com algumas propriedades que serão usadas posteriormente. Juntamente com algumas funções que possuem métodos realizando algumas ações. Será nesses métodos que você vai trabalhar.

#### Métodos

##### .map()

Nós utilizamos o .map() quando queremos fazer alguma modificação nos elementos de um Array. Neste exemplo iremos modificar a quantidade de créditos para mais 100. No final usamos o comando **return**, indicando que será retornado. Observe o operador "spread utilizado"

###### Spread (...)

A utilização dele permite que um iterável, como um array ou string, seja expandido em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para arrays) são esperados, ou uma expressão de objeto a ser expandida em locais onde zero ou mais pares de valores-chave (para objeto) são esperados.

##### Sua taréfa
1. Alterar o valor da propriedade **price** quando o id é maior que 2.

```js
const testMap = (array) => {

    const result = array.map((value) => {
        let { id, price } = value // Neste ponto desconstruirmos o objeto para armazenar as propriedades, id e price.
        if (id > 2) { // Aqui é validado se o id é maior que 2

            // Altere o valor da propriedade price para 2.00 dos índices com id's maior que 2
        
        }
        return {...value, price} // Nesta etapa utilizamos o spread(...), para remontar o objeto e passamos a propriedade que foi alterada
    })

    return result // Por fim é retornado um array de objetos, com as propriedades alteradas
}


/*
    [
        {id: 1, product: "Pão", price: 5.8, quantity: 3, section: "Padaria"},
        {id: 2, product: "Leite", price: 3, quantity: 1, section: "Derivados de Leite"},
        {id: 3, product: "Carne", price: 2, quantity: 2, section: "Carne"}
    ];
*/
```

##### .filter()
Como o próprio nome indica, serve para filtrarmos os elementos de um Array. Passamos para ele uma função. Se essa função retornar true, o elemento será inserido no novo Array que será criado. Se a função retornar false, o elemento será ignorado.

##### Sua taréfa
1. Retornar apenas os itens que possuem id <= 2
2. Retornar o valor da variável result

```js
const testFilter = (array) => {
    
    const result = array.filter( ({id}) => {
        // retorne apenas os itens que possuem id <= 2
    })

    // retorne a variável result onde contem os resultados das filtragens
}
```

##### .find()

Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.


##### Sua taréfa
1. Retornar apenas o item onde product === 'Leite'
2. Retornar o valor da variável result

```js
const testFind = (array) => {

    const result = array.find( ({id, product}) => {
        // retorne apenas o item onde product === 'Leite'
    })

   // retorne a variável result onde contem os resultados das buscas

}
```

##### .reduce()

Esta função serve para reduzirmos o conteúdo de um Array para apenas um elemento. O exemplo mais clássico é somar todos os valores de um Array.
##### Sua taréfa
1. Incrementar a variável acc, com o resultado de price*quantity.
2. Retornar o valor armazenado em acc.
3. Retornar o valor de totalList.

```js
const testReduce = (array) => {

    const totalList = array.reduce((acc, {quantity, price}) => {
        // incremente a variável acc, com o valor de price*quantity

        // retorne o valor armazenado em "acc" que neste caso é o valor total da compra
    }, 0)

    // retorne o valor de totalList para verificar quanto ficou sua compra
}

```

#### Desafio

1. Crie um filtro onde o resultado traz apenas os itens que tem o price maior que 3.
2. Altere o valor do item leite para 4.
3. Faça o total de todos os itens da section 'Padaria'
