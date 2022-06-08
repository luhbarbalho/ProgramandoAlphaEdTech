
const resultadoSorteio = document.querySelector(".resultadoSorteio");
const sortear = document.querySelector(".sortear");
let valorMedia;



sortear.addEventListener('click', function(e) {
    e.preventDefault();
    
    let mensagem = `Preencha todos os campos com números válidos!`;
    const valorMinimo = parseInt(document.querySelector("#valorMinimo").value);
    const valorMaximo = parseInt(document.querySelector("#valorMaximo").value);
    
    if (!isNaN(valorMinimo) || !isNaN(valorMaximo)){
        if( valorMaximo > valorMinimo){
            valorMedia = Math.random() * (valorMaximo - valorMinimo) + valorMinimo;
        } if ( valorMaximo <= valorMinimo ) {
            return alert('o valor mínimo precisa ser menor que o valor máximo');
        }
        mensagem = `${ valorMedia } é um valor entre o menor e o maior`
    }
    
    valorMedia == undefined ? resultadoSorteio.innerHTML = `<h3>Preencha todos os campos com números válidos!` : resultadoSorteio.innerHTML = `<h3>${ valorMedia } é um valor entre o menor e o maior</h3>`;

});