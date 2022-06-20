const resultadoCompute = document.querySelector(".resultadoCompute");
const compute = document.querySelector(".compute");



compute.addEventListener('click', function(e) {
    e.preventDefault();

    const numero1 = Number(document.querySelector("#numero1").value);
    const numero2 = Number(document.querySelector("#numero2").value);

    try {
        // function blabla();
    } catch(e) {
        resultadoCompute.innerHTML = `<h3>${e.message}</h3>`;
    }

});