
const resultadoNum = document.querySelector(".resultadoNum");
const numero = document.querySelector(".compararNum");


numero.addEventListener('click', () => {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);
    let mensagem = `<p>Não posso comparar um número com nada</p>`;

    if (!isNaN(num1) || !isNaN(num2)) {
        if (num1 === num2) {
            mensagem = `<p>Os dois números são iguais</p>`;
        } if (num1 < num2) {
            mensagem = `<p>O segundo número é maior que o primeiro</p>`;
        } if (num1 > num2) {
            mensagem = `<p>O primeiro número é maior que o segundo</p>`;
        };
    }

    resultadoNum.innerHTML = mensagem;
});