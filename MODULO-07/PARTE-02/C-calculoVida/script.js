const resultadoVida = document.querySelector(".resultadoVida");
let sexoSelected;

document.querySelector(".verificar").addEventListener('click', () => {
    
    const diaNasc = parseInt(document.querySelector("#dia").value);
    const mesNasc = parseInt(document.querySelector("#mes").value);
    const anoNasc = parseInt(document.querySelector("#ano").value);
    // ********* qual botao sexo selecionado
    const whichSex = document.querySelector("input[name='sexo']:checked").value;
    // ********* data atual e calculo idade
    const anoAtual = new Date().getFullYear()
    const mesAtual = new Date().getMonth() + 1;
    let idade = anoAtual - anoNasc;
    let anosRestantes = 0;
    let mensagem = `<p>Ix! Já ta falando do além já</p>`;


    // ********* calculo de idade/anos de vida condicional
    function calculoIdade() {
        if ( mesAtual < mesNasc ) {
            idade = idade - 1;
        } if ( mesAtual === mesNasc ) {
            if ( new Date().getDate() < diaNasc ){
                idade = ( idade - 1 );
            }
        }
    return idade;
    }
    
    if (whichSex === 'feminino') {
        anosRestantes = parseInt(80.1 - calculoIdade());
    }if (whichSex === 'masculino') {
        anosRestantes = parseInt(73.1 - calculoIdade());
    }

    // ********* print de resultado na tela


    function mensagemPrint () {
        (anoAtual < anoNasc) ?
        mensagem = `<p>Ainda não nasceu não</p>` : 
        (anosRestantes <= 0) ?
        mensagem = `<p>Ix! Já ta falando do além já</p>` :
        mensagem = `<p>Você tem aproximadamente ${ anosRestantes } anos restantes de vida</p>`;
    return mensagem;
    }

    resultadoVida.innerHTML = ( isNaN(diaNasc) || isNaN(mesNasc) || isNaN(anoNasc) || !whichSex ) ? `<p>Está faltando alguma informação</p>` : mensagemPrint();
});
