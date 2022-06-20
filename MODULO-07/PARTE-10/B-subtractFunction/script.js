
const resultadoSoma = document.querySelector(".resultadoSubtracao");
const subtrai = document.querySelector(".subtrair");
let x;
const operacao = 'subtração';

function somar(numero1, numero2) {
    if (isNaN(numero1) || isNaN(numero2) /*|| numero1 < 0 || numero2 < 0 */|| numero1 < numero2){

    throw Error(`Impossible to sum ${numero1} + ${numero2}`);
    }

    let sum = numero1 + numero2;

    console.log(sum);
    resultadoSoma.innerHTML = `<h3>${ sum } é a ${operacao} dos dois números</h3>`;
    return sum;
}

subtrai.addEventListener('click', function(e) {
    e.preventDefault();

    let x = numero2;

    try {
        somar(numero1, somar(1, ~x));
    } catch(e) {
        resultadoSoma.innerHTML = `<h3>${e.message}</h3>`;
        return;
    }

});


