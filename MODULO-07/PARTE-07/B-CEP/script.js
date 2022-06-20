
const resultadoCEP = document.querySelector(".resultadoCEP");

function printCEP () {

    const cep = document.querySelector("#cep").value;

    const cepUsuario = cep.replace(/^(\d{5})(\d{1,3}).*$/, '$1-$2');
    
    // if (!isNaN(valorMinimo) || !isNaN(valorMaximo)){
    //     if( valorMaximo > valorMinimo){
    //         valorMedia = Math.random() * (valorMaximo - valorMinimo) + valorMinimo;
    //     } if ( valorMaximo <= valorMinimo ) {
    //         return alert('o valor mínimo precisa ser menor que o valor máximo');
    //     }
    //     mensagem = `${ valorMedia } é um valor entre o menor e o maior`
    // }
    
    resultadoCEP.innerHTML = `<h3> ${ cepUsuario }</h3>`;

};

