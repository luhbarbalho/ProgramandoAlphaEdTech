const resultadoStr = document.querySelector(".resultadoStr");
const string = document.querySelector(".compararStr");


string.addEventListener('click', () => {
    const str1 = document.querySelector("#str1").value;
    const str2 = document.querySelector("#str2").value;
    let mensagem = `<p>Não posso comparar um texto com nada</p>`;

    if ((str1.length !== 0) && (str2.length !== 0)) {
        if (str1.length === str2.length) {
            mensagem = `<p>Os dois textos têm o mesmo tamanho</p>`;
        } if (str1.length < str2.length) {
            mensagem = `<p>O segundo texto é maior que o primeiro</p>`;
        } if (str1.length > str2.length) {
            mensagem = `<p>O primeiro texto é maior que o segundo</p>`;
        };
    }

    resultadoStr.innerHTML = mensagem;
});
