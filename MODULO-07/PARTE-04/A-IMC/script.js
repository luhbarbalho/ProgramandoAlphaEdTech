
const resultadoIMC = document.querySelector(".resultadoIMC");
const calcular = document.querySelector(".calcular");
let imc = 0;
let mensagemErro = `Preencha todos os campos com números válidos!`;
let nivel;
let referencia;

calcular.addEventListener('click', function(e) {
    e.preventDefault();

    const peso = parseFloat(document.querySelector("#peso").value);
    const altura = parseInt(document.querySelector("#altura").value);
    
    if (!isNaN(peso) || !isNaN(altura)){
        
        const alturaSqr = Math.pow((altura/100), 2);
        imc = (peso/alturaSqr).toFixed(2);
        
        if( imc < 18.5){
            referencia = `Abaixo de 18.5`
            nivel = `Abaixo do peso`;
        } if (imc >= 18.5) {
            referencia = `Abaixo de 24.9`
            nivel = `Peso normal`;
        } if (imc >= 25) {
            referencia = `Entre 25.0 e 29.9`
            nivel = `Sobrepeso`;
        } if (imc >= 30) {
            referencia = `Entre 30.0 e 34.9`
            nivel = `Obesidade grau I`;
        } if (imc >= 35) {
            referencia = `Entre 35.0 e 39.9`
            nivel = `Obesidade grau II`;
        } if (imc >= 40) {
            referencia = `Acima de 40.0`
            nivel = `Obesidade grau III`;
        }
    }

    ( isNaN(peso) || isNaN(altura)) ?
    resultadoIMC.innerHTML = `<h3>${ mensagemErro }</h3>`
    :
    resultadoIMC.innerHTML = `<h3>Seu IMC é ${ imc }</h3>
                            <h3>${ referencia }</h3>
                            <h3>${ nivel }</h3>`;

});