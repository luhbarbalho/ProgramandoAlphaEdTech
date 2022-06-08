
const resultadoFloat = document.querySelector(".resultadoFloat");
const arredondar = document.querySelector(".arredondar");


arredondar.addEventListener('click', function(e) {
    e.preventDefault();
    
    const numeroFloat = parseFloat(document.querySelector("#numeroFloat").value);
    let mensagemBaixo = `Coloque um número válido!`;
    let mensagemCima;
    let valorArredondadoBaixo = 0;
    let valorArredondadoCima = 0;
    
    if (!isNaN(numeroFloat)) {
            valorArredondadoBaixo = Math.floor(numeroFloat);
            valorArredondadoCima = Math.ceil(numeroFloat);
            
        mensagemBaixo = `${ valorArredondadoBaixo } é o menor inteiro mais próximo de ${ numeroFloat }`
        mensagemCima = `${ valorArredondadoCima } é o maior inteiro mais próximo de ${ numeroFloat }`
    }
    

    mensagemCima === undefined ?
    resultadoFloat.innerHTML = `<h3>${ mensagemBaixo }</h3>`
    :
    resultadoFloat.innerHTML = `<h3>${ mensagemBaixo }</h3>
                                <h3>${ mensagemCima }</h3>`;

});