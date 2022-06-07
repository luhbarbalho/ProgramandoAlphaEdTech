
const resultadoOperacao = document.querySelector(".resultadoOperacao");
const calcular = document.querySelector(".calcular");
const operando1 = parseInt(document.querySelector("#operando1").value);
const operando2 = parseInt(document.querySelector("#operando2").value);



calcular.addEventListener('click', () => {

    let sinal = document.querySelector("#operadores").options.selectedIndex;
    const operation = document.querySelector("#operadores").options[sinal].text;
    const operando1 = parseInt(document.querySelector("#operando1").value);
    const operando2 = parseInt(document.querySelector("#operando2").value);
    let mensagem = `<p>Não posso calcular um número com nada</p>`;

    function add (a, b, operation){
        return a operation b;
    }
    add(operando1, operando2)
    console.log(add);

    if (!isNaN(operando1) || !isNaN(operando2)){
        if (operation === '+') {
            total = operando1 + operando2;
        } if (operation === '-') {
            total = operando1 - operando2;
        } if (operation === '*') {
            total = operando1 * operando2;
        } if (operation === '/') {
            total = operando1 / operando2;
        }
        mensagem = `O resultado do cálculo de ( ${ operando1 } ${ operation } ${ operando2 } ) é ${ total }`
    }
    console.log(mensagem);

    resultadoOperacao.innerHTML = `<h3>${ mensagem }</h3>`;
});