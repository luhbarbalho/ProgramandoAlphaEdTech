const resultadoSoma = document.querySelector(".resultadoSoma");
const soma = document.querySelector(".somar");

function somar(numero1, numero2) {
    if (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0){
        
    throw Error(`Impossible to sum ${numero1} + ${numero2}`);
    }

    let sum = numero1 + numero2;
    console.log(sum);
    resultadoSoma.innerHTML = `<h3>${ sum } é a soma de  ${numero1} + ${numero2}</h3>`;
}

soma.addEventListener('click', function(e) {
    e.preventDefault();

    const numero1 = Number(document.querySelector("#numero1").value);
    const numero2 = Number(document.querySelector("#numero2").value);

    try {
        somar(numero1, numero2);
    } catch(e) {
        resultadoSoma.innerHTML = `<h3>${e.message}</h3>`;
    }

});