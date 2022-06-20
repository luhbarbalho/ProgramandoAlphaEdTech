<div display="flex">
    <img src="../assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 07 - Parte 09</h1>
</div>

## funções recursivas, try...catch, throw e template strings

&nbsp;

### Exercícios

1. Crie uma função em JavaScript que permita a soma de dois números inteiros positivos. Caso não seja possível a soma, emitir um erro (throw) do tipo [sum] Impossible to sum `${num1} + ${num2}` (‘template string’ no qual num1 é o primeiro parâmetro e num2 é o segundo parâmetro);

1. Utilizando a função do exercício 1, crie uma função em JavaScript que permita a subtração de dois números inteiros positivos, considerando:

    1. O primeiro número é maior ou igual ao segundo número;
    1. Não se deve utilizar estrutura de looping (for, while, do ...);
    1. Não se deve utilizar Math ou funções de terceiros;
    1. Não se deve utilizar operações de soma (‘+’), isto é, se desejar somar, utilizar a função de soma criada no exercício 1;
    1. Caso seja impossível realizar subtração (capturar o erro se existir), deve-se emitir um erro (throw) do tipo `[subtract] Impossible to subtract ${num1} - ${num2}`;
    1. Dica: utilizar chamada de função recursiva.

1. Utilizando as funções do exercício 1 e 2, crie uma função que multiplique dois valores inteiros positivos, de forma que:

    1. Não se deve utilizar estrutura de looping (for, while, do ...);
    1. Não se deve utilizar Math ou funções de terceiros;
    1. Não se deve utilizar operações de soma e subtração (‘+’ ou ‘-‘), isto é, se desejar somar ou subtrair, utilizar as funções criadas nos exercícios 1 e 2;
    1. Caso seja impossível realizar multiplicação (capturar o erro se existir), deve-se emitir um erro (throw) do tipo `[multiply] Impossible to multiply ${num1} * ${num2}`
    1. Dica: utilizar chamada de função recursiva.

1. Utilizando as funções do exercício 1, 2 e 3, crie uma função que exponencie dois valores inteiros positivos, de forma que:

    1. Não se deve utilizar estrutura de looping (for, while, do ...);
    1. Não se deve utilizar Math ou funções de terceiros;
    1. Não se deve utilizar operações de soma, subtração e multiplicação (‘+’ ou ‘-‘ ou ‘*’), isto é, se desejar somar ou subtrair ou multiplicar, utilizar as funções criadas nos exercícios 1, 2 e 3;
    1. Caso seja impossível realizar exponenciação (capturar o erro se existir), deve-se emitir um erro (throw) do tipo `[exponential] Impossible exponentiation to ${num1} ** ${num2}`
    1. Dica: utilizar chamada de função recursiva.

1. Utilizando as funções dos exercícios 1, 2 e 3, crie uma função exiba o valor inteiro da divisão de dois valores inteiros positivos, de forma que:

    1. Não se deve utilizar estrutura de looping (for, while, do ...);
    1. Não se deve utilizar Math ou funções de terceiros;
    1. Não se deve utilizar operações de soma, subtração e multiplicação (‘+’ ou ‘-‘ ou ‘*’), isto é, se desejar somar ou subtrair ou multiplicar, utilizar as funções criadas nos exercícios 1, 2 e 3;
    1. Caso seja impossível realizar divisão (capturar o erro se existir), deve-se emitir um erro (throw) do tipo `[divide] Impossible to divide ${num1} / ${num2}`, ou caso o denominador seja zero, `[divide] Division by zero`.
    1. Dica: utilizar chamada de função recursiva.

&nbsp;

---

### Referências básicas

- Template string
  - <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals>

- Function
  - <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions>

- Recursive function
  - <https://developer.mozilla.org/en-US/docs/Glossary/Recursion>
  - <https://linuxhint.com/javascript-recursive-function/>
  - <https://www.javascripttutorial.net/javascript-recursive-function/>
  - <https://www.freecodecamp.org/news/what-is-recursion-in-javascript/>
