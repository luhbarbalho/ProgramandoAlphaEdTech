
const resultadoSorteador = document.querySelector(".resultadoSorteador");
const sorteadorPessoa = document.querySelector(".sorteadorPessoa");
const resultadoIdosa = document.querySelector(".resultadoIdosa");
const sorteadorIdosa = document.querySelector(".sorteadorIdosa");
let mensagem;
let pessoa;

sorteadorPessoa.addEventListener('click', function (e) {
    e.preventDefault();
    
    let numeroRandomPessoa = (Math.random() * 100).toFixed(1);
    console.log(numeroRandomPessoa);
    
    if (numeroRandomPessoa <=51.7) {
        pessoa = 'mulher';
    } else {
        pessoa = 'homem';
    }
    console.log(pessoa)
    resultadoSorteador.innerHTML = `<h3>${ pessoa }</h3>`;
});

sorteadorIdosa.addEventListener('click', () => {

    let numeroRandomIdosa = (Math.random() * 100).toFixed(1);
    console.log(numeroRandomIdosa);
    
    if (numeroRandomIdosa <= 16.7) {
        idosa = 'É pessoa idosa';
    } else {
        idosa = 'Não, é xovem';
    }
    console.log(idosa)
    resultadoIdosa.innerHTML = `<h3>${ idosa }</h3>`;
});