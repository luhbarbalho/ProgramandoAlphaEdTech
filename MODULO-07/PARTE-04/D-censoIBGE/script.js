
const resultadoSorteador = document.querySelector(".resultadoSorteador");
const sorteadorPessoa = document.querySelector(".sorteadorPessoa");

let mensagem;
let pessoa;

sorteadorPessoa.addEventListener('click', function (e) {
    e.preventDefault();
    
    let numeroRandom = (Math.random() * 100).toFixed(1);
    console.log(numeroRandom);
    
    if (numeroRandom <=51.7) {
        pessoa = 'A xovem';
        if (numeroRandom <= (51.7 * 0.167))
        pessoa = 'A senhoura';
    } if (numeroRandom > 51.7) {
        pessoa = 'O xovem';
        if (numeroRandom <= ((0.167 * 48.3) + 51.7))
        pessoa = 'O senhor';
    } if (numeroRandom >= 99.9) {
        pessoa = 'Um ET entre nós';
    };
    console.log(numeroRandom);
    console.log(pessoa);
    resultadoSorteador.innerHTML = `<h3>${ pessoa }</h3>`;
});