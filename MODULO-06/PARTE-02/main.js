
const resultadoNum = document.querySelector(".resultadoNum");
const resultadoStr = document.querySelector(".resultadoStr");
const resultadoVida = document.querySelector(".resultadoVida");

const numero = document.querySelector(".compararNum")
if (numero){
    numero.addEventListener('click', () => {
        const num1 = parseInt(document.querySelector("#num1").value);
        const num2 = parseInt(document.querySelector("#num2").value);

        if (num1 === num2) {
            resultadoNum.innerHTML = `<p>Os dois números são iguais</p>`;
        } if (num1 < num2) {
            resultadoNum.innerHTML = `<p>O segundo número é maior que o primeiro</p>`;
        } if (num1 > num2) {
            resultadoNum.innerHTML = `<p>O primeiro número é maior que o segundo</p>`;
        };
        
        if (isNaN(num1) || isNaN(num2)) {
            alert("Não posso comparar um número com nada")
        }
    });
}

const string = document.querySelector(".compararStr")
if (string){
    string.addEventListener('click', () => {
        const str1 = document.querySelector("#str1").value;
        const str2 = document.querySelector("#str2").value;

        if (str1.length === str2.length) {
            resultadoStr.innerHTML = `<p>Os dois textos têm o mesmo tamanho</p>`;
        } if (str1.length < str2.length) {
            resultadoStr.innerHTML = `<p>O segundo texto é maior que o primeiro</p>`;
        } if (str1.length > str2.length) {
            resultadoStr.innerHTML = `<p>O primeiro texto é maior que o segundo</p>`;
        };
        
        if ((str1.length === 0) || (str2.length === 0)) {
            alert("Não posso comparar um texto com nada")
        }
    });
}


const qualSexo = document.querySelectorAll('input[name="sexo"]');
const verificar = document.querySelector(".verificar");
if (verificar){
    verificar.addEventListener('click', () => {
        const diaNasc = parseInt(document.querySelector("#dia").value);
        const mesNasc = parseInt(document.querySelector("#mes").value);
        const anoNasc = parseInt(document.querySelector("#ano").value);
        
        let sexoSelected;
        
        for (const sexoButton of qualSexo) {
            if (sexoButton.checked) {
                sexoSelected = sexoButton.value;
            }
        }

        calculoIdade();
        function calculoIdade() {

            let dataAtual = new Date();
            let anoAtual = dataAtual.getFullYear()
            let mesAtual = dataAtual.getMonth() + 1;
            let idade = anoAtual - anoNasc;

            if (mesAtual < mesNasc) {
                idade = idade - 1;

            } if (mesAtual === mesNasc) {
                if ( new Date().getDate() < diaNasc ){
                    idade = (idade - 1);
                }
            } 
        console.log(idade)
        }
        // const idadeFem = 80.1;
        // const idadeMasc = 73.1;

        console.log(diaNasc);
        console.log(mesNasc);
        console.log(anoNasc);
        console.log(sexoSelected);
        // if (str1.length === str2.length) {
        //     resultadoStr.innerHTML = `<p>Os dois textos têm o mesmo tamanho</p>`;
        // } if (str1.length < str2.length) {
        //     resultadoStr.innerHTML = `<p>O segundo texto é maior que o primeiro</p>`;
        // } if (str1.length > str2.length) {
        //     resultadoStr.innerHTML = `<p>O primeiro texto é maior que o segundo</p>`;
        // };
        
        
        if (isNaN(dia) || isNaN(mes) || isNaN(ano) || (sexoSelected === undefined)) {
            console.log("Tem alguma informação faltando")
        }
        
        // resultadoVida.innerHTML = sexoSelected ? `<p>selecionado ${ sexoSelected }</p>` : `<p>nada</p>`;
        
    });
}