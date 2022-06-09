
const resultadoExibir = document.querySelector(".resultadoExibir");
const exibir = document.querySelector(".exibir");

let mensagemErro = `Preencha o campo com um número de 0 a 10!`;
let number;

exibir.addEventListener('click', function(e) {
    e.preventDefault();

    const numero = parseInt(document.querySelector("#numero").value);

    switch (numero) {
        case 0:
            number = 'zero';
            break;
        case 1:
            number = 'um';
            break;
        case 2:
            number = 'dois';
            break;
        case 3:
            number = 'três';
            break;
        case 4:
            number = 'quatro';
            break;
        case 5:
            number = 'cinco';
            break;
        case 6:
            number = 'seis';
            break;
        case 7:
            number = 'sete';
            break;
        case 8:
            number = 'oito';
            break;
        case 9:
            number = 'nove';
            break;
        case 10:
            number = 'dez';
            break;
    }
    
    isNaN(numero) || (numero > 10) || (numero < 0) ?
    resultadoExibir.innerHTML = `<h3>${ mensagemErro }</h3>`
    :
    resultadoExibir.innerHTML = `<h3>O número escolhido é ${ number }</h3>`;

});