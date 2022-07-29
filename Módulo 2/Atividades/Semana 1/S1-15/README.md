# m2-lista-de-exercicios-dia-6-sprint-1b

## Introdução

As tarefas a seguir foram criadas para estimular a prática do conteúdo de javascript aprendido até agora. Tente executá-las e anote suas dúvidas.

## Tarefa

Array de objetos
O RH da empresa que você trabalha precisa filtrar as vagas disponíveis até o final do dia. Seu trabalho é desenvolver um programa que dado uma lista com as vagas disponíveis, resolva as tarefas abaixo.

Para começar, clone este respositório.

```javascript
 let jobs = [
    { stack: "Frontend", salary: "7.000", contract: "PJ" },
    { stack: "Backend", salary: "3.500", contract: "CLT" },
    { stack: "Backend", salary: "5.500", contract: "PJ" },
    { stack: "Frontend", salary: "4.100", contract: "CLT" },
    { stack: "Frontend", salary: "3.800", contract: "PJ" },
    { stack: "Backend", salary: "6.900", contract: "CLT" },
    { stack: "Frontend", salary: "5.000", contract: "CLT" },
    ];
```
   
Com o array acima, faça as seguintes funções:

1. Faça uma função getCltJobs que retorne todas as vagas com contratação CLT.
2. Faça uma função getPjJobs que retorne todas as vagas com contratação PJ.
3. Faça uma função getAboveFiveThousand que retorne as vagas com salário acima de cinco mil.
4. Faça uma função getUntilFiveThousand que retorne as vagas com salário até cinco mil.
5. Faça uma função getBetweenFourAndSix que retorne as vagas com salário entre quatro mil a seis mil.
6. Faça uma função getBackendJobs que retorne as vagas de stack Backend.
7. Faça uma função getFrontendJobs que retorne as vagas de stack Frontend.
